import { useState, useEffect, createContext, useContext } from 'react';
import { sendSpeechAudio } from '../lib';
import { useApp, useAssistant } from '.';

const SpeechToSpeechContext = createContext();

export function SpeechToSpeechProvider({ children }) {
    const [audioChunks, setAudioChunks] = useState([]);
    const [mediaRecorder, setMediaRecorder] = useState(null);
    const [recording, setRecording] = useState(false);
    const [responseData, setResponseData] = useState(null);

    const { appState, setAppState, currentTask, setCurrentTask, setNextState, setCurrentLessonId, setProcessing } = useApp();
    const { currentAudio, setCurrentAudio, assistantTextOutput, setAssistantTextOutput, playingAudio, setAssistantTask } = useAssistant();

    useEffect(() => {
        // Every time audioChunks changes, check if we should send the audio to the server
        if (!recording && audioChunks.length > 0) {
            setProcessing(true);
            (async () => {
                // Package the task for the langauge model with the audio                
                setResponseData(sendSpeechAudio(audioChunks, currentTask));
                setAudioChunks([]);
            })();
        }
    }, [audioChunks]);

    useEffect(() => {
        (async () => {
            if (!responseData) return;

            responseData.then((data) => {
                setProcessing(false);

                // Error handling for when the user's speech is not understood
                if (data.error) {
                    console.error("Backends reports an error:", data.error);
                    if (data.error === 'NO_SPEECH_DETECTED') {
                        console.log("No speech detected!");

                        // Need to quick-fix this so the audio plays again if user speech is not understood twice (or more)
                        if (currentAudio === 'audio/did-not-understand01.mp3') {
                            setCurrentAudio('');
                            setAssistantTextOutput('');
                            setTimeout(() => {
                                setAssistantTextOutput("I'm sorry, I didn't quite catch that. Can you try again?");
                                setCurrentAudio('audio/did-not-understand01.mp3');
                            }, 200);
                            return;
                        }

                        setCurrentAudio('audio/did-not-understand01.mp3');
                        setAssistantTextOutput("I'm sorry, I didn't quite catch that. Can you try again?");
                        return;
                    }
                }

                if (currentTask === 'greet-proceed-choose')
                    if (data?.learn) {
                        console.log("We are going to be learning Ukrainian!")

                        setCurrentAudio('audio/lets-learn01.mp3');
                        setAssistantTextOutput("Great! Let's learn some Ukrainian.");
                        setNextState('learn');  // Take the user to the 'Learn' screen next
                        setCurrentLessonId(1);
                        return;
                    } else {
                        console.log("No learning today!")
                        setCurrentAudio('audio/not-learn-do-instead01.mp3');
                        setAssistantTextOutput("What would you like to do instead?");
                        setCurrentTask('choose-activity');
                        return
                    }

                if (currentTask === 'choose-activity') {
                    console.log("No other activities supported yet!");
                    setCurrentAudio('audio/sorry-only-prototype-feedback-here01.mp3');
                    setAssistantTextOutput("I’m sorry, this app is only a prototype right now. But you can give feedback here.");
                    setTimeout(() => {
                        setAssistantTask('show-feedback-link-2');  // I don't like this, but it's a quick fix for prototype 1
                    }, 3000);
                    return;
                }

                if (currentTask === 'say-pryvit') {
                    setAssistantTextOutput(data.assistantText);
                    setCurrentAudio(`data:audio/wav;base64,${data.assistantAudio}`);
                    if (data?.understood) {
                        console.log("You said 'pryvit' correctly!");
                        setTimeout(() => {
                            setAssistantTask('show-feedback-link');
                        }, 3000);
                        return;
                    } else {
                        console.log("You didn't say 'pryvit' correctly!");
                        return;
                    }
                }

            });
        })();
    }, [responseData]);

    async function startRecording() {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            const recorder = new MediaRecorder(stream);
            recorder.ondataavailable = (event) => {
                setAudioChunks((currentChunks) => [...currentChunks, event.data]);
            };
            recorder.start();
            setMediaRecorder(recorder);
            console.log('Recording started');
            setRecording(true);
        } catch (error) {
            console.error("Error accessing audio device:", error);
        }
    }

    function stopRecording() {
        // Wait 1 second for the MediaRecorder to finish recording
        setTimeout(() => {
            mediaRecorder.stop();
            setMediaRecorder(null);
            console.log("Recording stopped");
            setRecording(false);
        }, 1000);
    }

    return (
        <SpeechToSpeechContext.Provider value={{
            audioChunks,
            setAudioChunks,
            recording,
            setRecording,
            startRecording,
            stopRecording,
        }}>
            {children}
        </SpeechToSpeechContext.Provider>
    )
}

export const useSpeechToSpeech = () => useContext(SpeechToSpeechContext);