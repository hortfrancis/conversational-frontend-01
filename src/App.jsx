import { useEffect, useState } from 'react';
import { Welcome, SpeechToSpeech } from './screens';
import { DebugBar, Footer, SpeechInput } from './components';

import { getBrowserName } from './utils';

export default function App() {
    const [serverConnectionState, setServerConnectionState] = useState('');
    const [appState, setAppState] = useState('welcome');
    const [recording, setRecording] = useState(false);

    useEffect(() => {
        // Make a generic request to the backend to wake up the server
        (async () => {
            setServerConnectionState('requesting');
            try {
                const response = await fetch(import.meta.env.VITE_BACKEND_URL + "/");
                if (response.status === 200) console.log("Server is available!");
                setServerConnectionState('connected');
            } catch (error) {
                console.error("Error checking server availability:", error);
                setServerConnectionState('error');
            }
        })();
    }, []);

    const start = () => {
        console.log("Starting speech-to-speech");
        setAppState('speech-to-speech');
    }

    return (
        <>
            <div className="bg-gradient-to-b from-[#0056B9] to-[#FFD800] via-[#888] from-25% via-50% to-75%">
                <main className={`
                        max-w-screen-sm mx-auto min-h-screen 
                        flex flex-col items-center justify-between 
                        font-montserrat tracking-wider 
                        border
                    `}>

                    {appState === 'welcome' && <DebugBar serverConnectionState={serverConnectionState} browserName={getBrowserName()} />}

                    {appState === 'welcome' && <Welcome start={start} />}
                    {appState === 'speech-to-speech' && <SpeechToSpeech recording={recording} setRecording={setRecording} />}

                    {appState === 'welcome' && <Footer />}
                </main>
            </div >
        </>
    )
}
