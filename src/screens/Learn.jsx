import { useEffect } from 'react';
import { Modal, AssistantIcon, LearningGuidanceOutputArea, AssistantTextOutputArea, HoldToSpeakButton, AssistantAudioPlayer } from '../components';
import { useAssistant } from '../contexts';

export default function Learn() {

    const { assistantTask } = useAssistant();

    return (

        <div className="w-full  bg-white bg-opacity-80 flex flex-col items-center justify-between pt-6">

            {assistantTask === 'show-feedback-link' && <Modal html={`
            <a href="https://forms.gle/S4QRQA9Xt4esCe5k6" target="_blank" class="p-2 font-bold underline rounded hover:bg-gray-200">Feedback form</a>
            `} />}

            <AssistantAudioPlayer />
            <div className="w-12">
                <AssistantIcon />
            </div>
            <LearningGuidanceOutputArea />
            <AssistantTextOutputArea />
            <HoldToSpeakButton size="medium" />
        </div>
    )

}