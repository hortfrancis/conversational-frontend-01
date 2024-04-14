// import { useEffect } from 'react';
// import { useAssistant } from "../contexts";
import { Modal, AssistantAudioPlayer, AssistantIcon, AssistantTextOutputArea, HoldToSpeakButton } from '../components';
import { useAssistant } from '../contexts';

export default function Greet() {

    const { assistantTask } = useAssistant();



    return (
        <div className={"w-full h-screen"}>

            {assistantTask === 'show-feedback-link-2' &&
                <Modal html={`
                    <a href="https://forms.gle/S4QRQA9Xt4esCe5k6" target="_blank" class="p-2 font-bold underline rounded hover:bg-gray-200">Feedback form</a>
                `} />}

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