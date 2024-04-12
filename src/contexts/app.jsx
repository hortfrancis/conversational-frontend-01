import { useState, createContext, useContext, useEffect } from 'react';

const AppContext = createContext();

export function AppProvider({ children }) {
    const [serverConnectionState, setServerConnectionState] = useState('');
    const [appState, setAppState] = useState('welcome');
    const [nextState, setNextState] = useState('');  // Will be set after current audio finishes
    const [currentTask, setCurrentTask] = useState('none');

    return (
        <AppContext.Provider value={{
            serverConnectionState,
            setServerConnectionState,
            appState,
            setAppState,
            currentTask,
            setCurrentTask,
            nextState,
            setNextState
        }}>
            {children}
        </AppContext.Provider>
    )
}

export const useApp = () => useContext(AppContext);