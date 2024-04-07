import { useState } from 'react';
import { AssistantIcon, AssistantTextOutputArea, SpeakSendButton } from '../components';
import { sendSpeechAudio } from '../lib';

export default function SpeechToSpeech() {
    const [thinking, setThinking] = useState(false);
    const [assistantTextOutput, setAssistantTextOutput] = useState('Assistant text output will appear here.');

    return (
        <div className={`
            w-full h-[80vh]
            flex flex-col gap-10 items-center justify-center 
            bg-white bg-opacity-80  rounded-xl
        `}>
            <AssistantIcon thinking={thinking} />
            <AssistantTextOutputArea assistantTextOutput={assistantTextOutput} />
            <SpeakSendButton />
        </div>
    )
}