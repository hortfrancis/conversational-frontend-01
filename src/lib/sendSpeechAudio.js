export default async function sendSpeechAudio(audioChunks) {
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