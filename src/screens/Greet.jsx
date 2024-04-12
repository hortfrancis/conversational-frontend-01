// import { useEffect } from 'react';
// import { useAssistant } from "../contexts";
import { AssistantAudioPlayer, AssistantIcon, AssistantTextOutputArea, HoldToSpeakButton } from '../components';

export default function Greet() {

    return (
        <div className={"w-full h-screen"}>
            <div className="h-full py-16 flex flex-col gap-10 items-center justify-between ">
                <AssistantAudioPlayer />
                <div className="w-32">
                    <AssistantIcon />
                </div>
                <AssistantTextOutputArea />
                <HoldToSpeakButton size="large" />
            </div>
        </div >
    )
}