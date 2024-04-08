import { useState, useEffect, useContext, createContext } from 'react';
import { sendSpeechAudio } from '../lib';

const SpeechToSpeechContext = createContext();

export function SpeechToSpeechProvider({ children }) {
    // State variables here
    const [audioChunks, setAudioChunks] = useState([]);
    const [mediaRecorder, setMediaRecorder] = useState(null);
    const [recording, setRecording] = useState(false);

    useEffect(() => {
        // Every time audioChunks changes, check if we should send the audio to the server
        if (!recording && audioChunks.length > 0) {
            (async () => {
                sendSpeechAudio(audioChunks);
                setAudioChunks([]);
            })();
        }
    }, [audioChunks]);

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
            stopRecording
        }}>
            {children}
        </SpeechToSpeechContext.Provider>
    )
}

export const useSpeechToSpeech = () => useContext(SpeechToSpeechContext);