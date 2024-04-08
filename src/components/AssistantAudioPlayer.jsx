import { useEffect, useRef } from "react";
import { useAssistant } from "../contexts";

export default function AssistantAudioPlayer() {

    // const audioRef = useRef(new Audio('audio/greet01.mp3'));
    const { currentAudio, setAssistantTextOutput } = useAssistant();

    useEffect(() => {
        // audioRef.current.play()
        const audio = new Audio(currentAudio);
        audio.play()
            .catch(error => console.error("Error playing audio:", error));
    }, [currentAudio])

    return null;  // Renderless component: just audio
}