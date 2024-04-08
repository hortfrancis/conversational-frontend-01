import { useState, useEffect, useRef } from 'react';
import { useAssistant } from "../contexts";
import { AssistantIcon, AssistantTextOutputArea, HoldToSpeakButton } from '../components';
import { sendSpeechAudio } from '../lib';

export default function Greet({ recording, setRecording, sendSpeechAudio }) {
    const audioRef = useRef(new Audio('audio/greet01.mp3'));
    const { setAssistantTextOutput } = useAssistant();

    useEffect(() => {
        audioRef.current.play()
            .catch(error => console.error("Error playing audio:", error));
        setAssistantTextOutput("Welcome to your language learning assistant! Would you like to learn some Ukrainian?");
    }, [])

    return (
        <div className={"w-full h-screen"}>
            <div className="h-full py-16 flex flex-col gap-10 items-center justify-between ">
                <AssistantIcon />
                <AssistantTextOutputArea />
                <HoldToSpeakButton />
            </div>
        </div >
    )
}