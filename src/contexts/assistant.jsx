import { useState, useEffect, createContext, useContext } from 'react';
import { useApp } from '.';

const AssistantContext = createContext();

export function AssistantProvider({ children }) {
    const [assistantTextOutput, setAssistantTextOutput] = useState("Welcome to your language learning assistant! Would you like to learn some Ukrainian?");
    const [assistantTask, setAssistantTask] = useState('');
    const [currentAudio, setCurrentAudio] = useState('audio/greet01.mp3');
    const [playingAudio, setPlayingAudio] = useState(false);

    const { appState, setAppState, setCurrentTask, nextState, currentLessonId } = useApp();

    useEffect(() => {
        // Wait until the current audio finishes, then trigger global app state change
        if (!playingAudio && nextState) setAppState(nextState);
    }, [playingAudio]);

    useEffect(() => {
        if (!playingAudio && assistantTask === 'encourage-attempt-pronunciation'
            && currentAudio !== 'audio/did-not-understand01.mp3') {
            setAssistantTextOutput("Can you say that back to me?");
            setCurrentAudio('audio/say-that-back01.mp3')
        }
        if (!playingAudio && assistantTask === 'show-feedback-link') {
            setAssistantTextOutput("This app is a prototype, and you can give us feedback here.");
            setCurrentAudio('audio/success-only-prototype-feedback-here01.mp3');
        }
    }, [playingAudio, assistantTask]);

    useEffect(() => {
        if (appState === 'learn') {
            if (currentLessonId === 1) {
                setAssistantTextOutput("To say 'hello' in Ukrainian, you say 'pryvit'.");
                setCurrentAudio('audio/say-hello-pryvit01.mp3');
                setCurrentTask('say-pryvit');
                setAssistantTask('encourage-attempt-pronunciation');
            }
        }
    }, [appState, currentLessonId]);

    return (
        <AssistantContext.Provider value={{
            assistantTextOutput,
            setAssistantTextOutput,
            assistantTask,
            setAssistantTask,
            currentAudio,
            setCurrentAudio,
            playingAudio,
            setPlayingAudio
        }}>
            {children}
        </AssistantContext.Provider>
    )
}

export const useAssistant = () => useContext(AssistantContext);