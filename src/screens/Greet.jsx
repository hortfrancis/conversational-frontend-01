import { useState, useEffect, useRef } from 'react';
import { AssistantIcon, AssistantTextOutputArea, HoldToSpeakButton } from '../components';
import { sendSpeechAudio } from '../lib';

export default function Greet({ recording, setRecording, sendSpeechAudio }) {
    const audioRef = useRef(new Audio('audio/greet01.mp3'));

    useEffect(() => {
        audioRef.current.play()
            .catch(error => console.error("Error playing audio:", error));
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