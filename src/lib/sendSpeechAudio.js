export default async function sendSpeechAudio(audioChunks, task = '') {
    console.log("Sending audio to server:", audioChunks);

    // Prepare the audio data to send to the server
    const audioBlob = new Blob(audioChunks, { type: "audio/flac" }); // Could change this, but it works so far
    const formData = new FormData();
    formData.append("audio", audioBlob);
    // formData.append("message", "This is a message from the client");
    formData.append("message", JSON.stringify({ task: task }));

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
        return data;

    }
    catch (error) {
        console.error("Error sending audio to server:", error);
    }
}