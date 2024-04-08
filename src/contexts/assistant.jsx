import { useState, useEffect, createContext, useContext } from 'react';

const AssistantContext = createContext();

export function AssistantProvider({ children }) {
    const [thinking, setThinking] = useState(false);
    const [assistantTextOutput, setAssistantTextOutput] = useState("Welcome to your language learning assistant! Would you like to learn some Ukrainian?");
    const [assistantTask, setAssistantTask] = useState('');
    const [currentAudio, setCurrentAudio] = useState('audio/greet01.mp3');

    return (
        <AssistantContext.Provider value={{
            thinking,
            setThinking,
            assistantTextOutput,
            setAssistantTextOutput,
            assistantTask,
            setAssistantTask,
            currentAudio,
            setCurrentAudio
        }}>
            {children}
        </AssistantContext.Provider>
    )
}

export const useAssistant = () => useContext(AssistantContext);