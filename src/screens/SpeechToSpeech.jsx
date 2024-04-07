import { useState } from 'react';
import { AssistantIcon, AssistantTextOutput, SpeakSendButton } from '../components';

export default function SpeechToSpeech() {
    const [thinking, setThinking] = useState(false);

    return (
        <>
            'Speech-to-speech screen'

            <AssistantIcon thinking={thinking}/>
            <AssistantTextOutput />
            <SpeakSendButton />
        </>
    )
}