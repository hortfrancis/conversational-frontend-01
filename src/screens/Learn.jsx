import { useEffect } from 'react';
import { AssistantIcon, LearningGuidanceOutputArea, AssistantTextOutputArea, HoldToSpeakButton } from '../components';
import { useApp } from '../contexts';

export default function Learn() {

    return (
        <div className="w-full  bg-white bg-opacity-80 flex flex-col items-center justify-between pt-6">
            <div className="w-12">
                <AssistantIcon />
            </div>
            <LearningGuidanceOutputArea />
            <AssistantTextOutputArea />
            <HoldToSpeakButton size="medium" />
        </div>
    )

}