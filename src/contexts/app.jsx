import { useState, createContext, useContext, useEffect } from 'react';
import { getLessonData } from '../lib';

const AppContext = createContext();

export function AppProvider({ children }) {
    const [serverConnectionState, setServerConnectionState] = useState('');
    const [appState, setAppState] = useState('welcome');
    const [nextState, setNextState] = useState('');  // Will be set after current audio finishes
    const [currentTask, setCurrentTask] = useState('none');
    const [currentLessonId, setCurrentLessonId] = useState(1);
    const [currentLessonData, setCurrentLessonData] = useState(null);
    const [processing, setProcessing] = useState(false);

    useEffect(() => {
        setCurrentLessonData(getLessonData(currentLessonId));
    }, [currentLessonId]);



    return (
        <AppContext.Provider value={{
            serverConnectionState,
            setServerConnectionState,
            appState,
            setAppState,
            currentTask,
            setCurrentTask,
            nextState,
            setNextState,
            currentLessonId,
            setCurrentLessonId,
            currentLessonData,
            setCurrentLessonData,
            processing,
            setProcessing
        }}>
            {children}
        </AppContext.Provider>
    )
}

export const useApp = () => useContext(AppContext);