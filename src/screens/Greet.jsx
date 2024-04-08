// import { useEffect } from 'react';
// import { useAssistant } from "../contexts";
import { AssistantAudioPlayer, AssistantIcon, AssistantTextOutputArea, HoldToSpeakButton } from '../components';

export default function Greet({ recording, setRecording, sendSpeechAudio }) {
    // const { setAssistantTextOutput } = useAssistant();

    // useEffect(() => {
    //     setAssistantTextOutput("Welcome to your language learning assistant! Would you like to learn some Ukrainian?");
    // }, [])

    return (
        <div className={"w-full h-screen"}>
            <div className="h-full py-16 flex flex-col gap-10 items-center justify-between ">
                <AssistantAudioPlayer />
                <AssistantIcon />
                <AssistantTextOutputArea />
                <HoldToSpeakButton />
            </div>
        </div >
    )
}