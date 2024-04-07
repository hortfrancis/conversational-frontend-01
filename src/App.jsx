import { useEffect, useState } from 'react';
import { DebugBar, StartButton, Footer, SpeechInput } from './components';
import { sendSpeechAudio } from './lib';
import { getBrowserName } from './utils';

export default function App() {
    const [serverConnectionState, setServerConnectionState] = useState('');

    useEffect(() => {
        console.log(import.meta.env.VITE_BACKEND_URL);

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

    return (
        <>
            <div className="bg-gradient-to-b from-[#0056B9] to-[#FFD800] via-[#888] from-25% via-50% to-75%">
                <main className={`
                        max-w-screen-sm mx-auto min-h-screen 
                        flex flex-col items-center justify-between 
                        font-montserrat tracking-wider 
                        border
                    `}>
                    <DebugBar serverConnectionState={serverConnectionState} browserName={getBrowserName()} />
                    <h1 className="flex flex-col gap-2 text-4xl font-bold text-center text-slate-700 font-montserrat_alternates text-white">
                        <span className="italic">Conversational</span>
                        Ukrainian
                    </h1>
                    <StartButton />
                    <Footer />
                </main>
            </div >
        </>
    )
}
