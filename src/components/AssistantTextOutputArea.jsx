import { useState, useEffect } from 'react';
import { useAssistant } from "../contexts"

export default function AssistantTextOutputArea({ size }) {
    const { assistantTextOutput } = useAssistant();
    const [displayedText, setDisplayedText] = useState('');

    useEffect(() => {
        setDisplayedText('');

        if (assistantTextOutput.length === 0) {
            return; // If there's no text, don't run the typing effect.
        }

        const timer = setInterval(() => {
            setDisplayedText((prevDisplayedText) => {
                // Determine the next character to add based on the current length of displayedText
                const nextChar = assistantTextOutput.charAt(prevDisplayedText.length);
                return prevDisplayedText + nextChar;
            });
        }, 50); // The speed of typing, in milliseconds.

        // Clear the interval if the full text has been displayed or on unmount
        return () => clearInterval(timer);
    }, [assistantTextOutput]);

    return (
        <div className={` bg-white w-full p-4 text-center text-sm italic leading-loose`}>
            <div className="h-full min-h-20 flex items-center p-4 border-t-2 border-b-2">
                <p className="w-full">{displayedText}</p>
            </div>
        </div>
    )
}