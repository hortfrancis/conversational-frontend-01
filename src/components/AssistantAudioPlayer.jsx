import { useEffect } from "react";
import { useAssistant } from "../contexts";

export default function AssistantAudioPlayer() {

    const { currentAudio, setPlayingAudio } = useAssistant();

    useEffect(() => {
        if (!currentAudio) return;

        const audio = new Audio(currentAudio);
        audio.play()
            .catch(error => console.error("Error playing audio:", error))
            // .then(() => {
                setPlayingAudio(true);
            // });
        // Add a timeout of 1 second after the audio finishes
        audio.onended = () => { setTimeout(() => setPlayingAudio(false), 1000) };

        return () => {
            // Audio should stop if component is unmounted
            audio.pause();
            setPlayingAudio(false);
        }
    }, [currentAudio])

    return null;  // Renderless component: just audio
}