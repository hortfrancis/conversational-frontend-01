import { useState, useEffect, createContext, useContext } from 'react';
import { sendSpeechAudio } from '../lib';
import { useApp, useAssistant } from '.';

const SpeechToSpeechContext = createContext();

export function SpeechToSpeechProvider({ children }) {
    const [audioChunks, setAudioChunks] = useState([]);
    const [mediaRecorder, setMediaRecorder] = useState(null);
    const [recording, setRecording] = useState(false);
    const [responseData, setResponseData] = useState(null);
    const [task, setTask] = useState('');

    const { currentTask } = useApp();
    const { assistantTextOutput, setAssistantTextOutput } = useAssistant();

    useEffect(() => {
        // Every time audioChunks changes, check if we should send the audio to the server
        if (!recording && audioChunks.length > 0) {
            (async () => {
                // Package the task for the langauge model with the audio
                setResponseData(sendSpeechAudio(audioChunks, currentTask));
                setAudioChunks([]);
            })();
        }
    }, [audioChunks]);

    useEffect(() => {
        (async () => {
            // console.log("JSON.stringify(responseData):", JSON.stringify(await responseData));
            responseData.then((data) => {
                if (data?.learn) {
                    console.log("We are going to be learning Ukrainian!")
                } else {
                    console.log("No learning today!")
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
            task,
            setTask
        }}>
            {children}
        </SpeechToSpeechContext.Provider>
    )
}

export const useSpeechToSpeech = () => useContext(SpeechToSpeechContext);