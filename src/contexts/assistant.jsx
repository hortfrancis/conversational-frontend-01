import { useState, useEffect, createContext, useContext } from 'react';

const AssistantContext = createContext();

export function AssistantProvider({ children }) {
    const [thinking, setThinking] = useState(false);
    const [assistantTextOutput, setAssistantTextOutput] = useState('');
    const [assistantTask, setAssistantTask] = useState('');

    return (
        <AssistantContext.Provider value={{
            thinking,
            setThinking,
            assistantTextOutput,
            setAssistantTextOutput,
            assistantTask,
            setAssistantTask
        }}>
            {children}
        </AssistantContext.Provider>
    )
}

export const useAssistant = () => useContext(AssistantContext);