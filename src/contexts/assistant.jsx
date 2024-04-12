import { useState, useEffect, createContext, useContext } from 'react';
import { useApp } from '.';

const AssistantContext = createContext();

export function AssistantProvider({ children }) {
    const [thinking, setThinking] = useState(false);
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
        if (!playingAudio && assistantTask === 'encourage-attempt-pronunciation') {
            setAssistantTextOutput("Can you say that back to me?");
            setCurrentAudio('audio/say-that-back01.mp3')
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
            thinking,
            setThinking,
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