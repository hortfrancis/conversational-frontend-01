import { useState } from 'react';
import { AssistantIcon, AssistantTextOutputArea, HoldToSpeakButton } from '../components';
import { sendSpeechAudio } from '../lib';

export default function SpeechToSpeech({ recording, setRecording }) {
    const [thinking, setThinking] = useState(false);
    const [assistantTextOutput, setAssistantTextOutput] = useState('Assistant text output will appear here.');

    return (
        <div className={`
            w-full h-screen 
        `}>
            <div className="h-full py-16 flex flex-col gap-10 items-center justify-between ">
                <AssistantIcon thinking={thinking} />
                <AssistantTextOutputArea assistantTextOutput={assistantTextOutput} />
                <HoldToSpeakButton recording={recording} setRecording={setRecording} />
            </div>
        </div >
    )
}