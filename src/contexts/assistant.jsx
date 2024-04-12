import { useState, useEffect, createContext, useContext } from 'react';
import { useApp } from '.';

const AssistantContext = createContext();

export function AssistantProvider({ children }) {
    const [thinking, setThinking] = useState(false);
    const [assistantTextOutput, setAssistantTextOutput] = useState("Welcome to your language learning assistant! Would you like to learn some Ukrainian?");
    const [assistantTask, setAssistantTask] = useState('');
    const [currentAudio, setCurrentAudio] = useState('audio/greet01.mp3');
    const [playingAudio, setPlayingAudio] = useState(false);

    const { setAppState, nextState } = useApp();

    useEffect(() => {
        // Wait until the current audio finishes, then trigger global app state change
        if (!playingAudio && nextState) setAppState(nextState);
    }, [playingAudio]);

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