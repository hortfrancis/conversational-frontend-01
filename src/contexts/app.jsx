import { useState, createContext, useContext } from 'react';

const AppContext = createContext();

export function AppProvider({ children }) {
    const [serverConnectionState, setServerConnectionState] = useState('');
    const [appState, setAppState] = useState('welcome');
    const [currentTask, setCurrentTask] = useState('none');

    return (
        <AppContext.Provider value={{
            serverConnectionState,
            setServerConnectionState,
            appState,
            setAppState, 
            currentTask,
            setCurrentTask
        }}>
            {children}
        </AppContext.Provider>
    )
}

export const useApp = () => useContext(AppContext);