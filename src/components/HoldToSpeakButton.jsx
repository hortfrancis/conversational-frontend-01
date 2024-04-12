import { useSpeechToSpeech } from '../contexts/speechToSpeech';
import { MicrophoneIcon } from ".";

export default function HoldToSpeakButton({ size }) {
    const { startRecording, stopRecording } = useSpeechToSpeech();

    return (
        <button
            onMouseDown={startRecording}
            onMouseUp={stopRecording}
            onTouchStart={startRecording}
            onTouchEnd={stopRecording}
            className={`
            w-80
            ${size === 'large' ? 'h-80'
                    : size === 'medium' ? ' h-40'
                        : 'w-16 h-16'}
            block bg-white text-black 
            shadow-[0px_14px_0px_6px_black] 
            ring-[6px] ring-black
            rounded-xl 
            hover:bg-slate-100 w-80
            active:shadow-[0px_0px_0px_6px_black]
            active:translate-y-[14px]
            transition-all duration-100 ease-in-out
    `}>
            <div className="h-full py-8 flex flex-col items-center justify-between select-none">
                <span className={`font-semibold 
                    ${size === 'large' ? 'text-2xl'
                        : size === 'medium' ? 'text-lg'
                            : ''}`}>Hold to</span>
                <span className={`font-extrabold 
                    ${size === 'large' ? 'text-5xl'
                        : size === 'medium' ? 'text-3xl'
                            : ''} `}>speak</span>
                <div className={`${size === 'large' ? 'w-20'
                    : size === 'medium' ? 'w-10'
                        : ''}`}>
                    <MicrophoneIcon />
                </div>
            </div>
        </button>
    )
}