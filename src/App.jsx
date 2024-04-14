import { useEffect } from 'react';
import { SpeechToSpeechProvider, AssistantProvider } from './contexts';
import { useApp } from './contexts';
import { Welcome, Greet, Learn } from './screens';
import { Modal, DebugBar, Footer } from './components';
import { getBrowserName } from './utils';

export default function App() {

    const { appState, setAppState, serverConnectionState, setServerConnectionState, setCurrentTask } = useApp();

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
        setAppState('greet');
        setCurrentTask('greet-proceed-choose');
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

                    {serverConnectionState === 'requesting'
                        && <Modal
                            text="Waking up the server ... This should only take a minute!"
                            html={`<div class="flex justify-center"><span class="mt-6 text-3xl animate-spin">⏳</span></div>`}
                        />}
                    {getBrowserName() !== 'Chrome' && <Modal text="Unfortunately, only Chrome is supported right now! " />}
                    {appState === 'welcome' && <DebugBar serverConnectionState={serverConnectionState} browserName={getBrowserName()} />}

                    {appState === 'welcome' && <Welcome start={start} />}

                    <AssistantProvider>
                        <SpeechToSpeechProvider>
                            {appState === 'greet' && <Greet />}
                            {appState === 'learn' && <Learn />}
                        </SpeechToSpeechProvider>
                    </AssistantProvider>

                    {appState === 'welcome' && <Footer />}
                </main>
            </div >
        </>
    )
}
