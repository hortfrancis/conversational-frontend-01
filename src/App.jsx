import { useEffect } from 'react';
import { SpeechInput } from './components';

export default function App() {

    async function sendSpeechAudio(audioChunks) {
        console.log("Sending audio to server:", audioChunks);

        // Prepare the audio data to send to the server
        const audioBlob = new Blob(audioChunks, { type: "audio/flac" }); // Could change this, but it works so far
        const formData = new FormData();
        formData.append("audio", audioBlob);

        try {
            console.log("Sending audio to server...");
            const response = await fetch(
                import.meta.env.VITE_BACKEND_URL + '/speech-to-speech',
                {
                    method: "POST",
                    body: formData,
                }
            );
            const data = await response.json();

            console.log("data:", data);

        }
        catch (error) {
            console.error("Error sending audio to server:", error);
        }
    }

    useEffect(() => {
        console.log(import.meta.env.VITE_BACKEND_URL);

        // Make a generic request to the backend to wake up the server
        (async () => {
            try {
                const response = await fetch(import.meta.env.VITE_BACKEND_URL + "/");
                if (response.status === 200) console.log("Server is available!");
            } catch (error) {
                console.error("Error checking server availability:", error);
            }
        })();
    });

    return (
        <>
            <h1 className="text-4xl font-bold text-center text-slate-700">Conversational Ukrainian</h1>
            <SpeechInput sendSpeechAudio={sendSpeechAudio} />
        </>
    )
}
