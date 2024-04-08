import { useSpeechToSpeech } from '../contexts/speechToSpeech';
import { MicrophoneIcon } from ".";

export default function HoldToSpeakButton() {
    const { startRecording, stopRecording } = useSpeechToSpeech();

    return (
        <button
            onMouseDown={startRecording}
            onMouseUp={stopRecording}
            onTouchStart={startRecording}
            onTouchEnd={stopRecording}
            className={`
            block bg-white text-black 
            shadow-[0px_14px_0px_6px_black] 
            ring-[6px] ring-black
            rounded-xl w-80 h-80
            hover:bg-slate-100
            active:shadow-[0px_0px_0px_6px_black]
            active:translate-y-[14px]
            transition-all duration-100 ease-in-out
    `}>
            <div className="h-full py-8 flex flex-col items-center justify-between select-none">
                <span className="text-2xl font-semibold">Hold to</span>
                <span className="text-5xl font-extrabold">speak</span>
                <div className="w-20 mt-6">
                    <MicrophoneIcon />
                </div>
            </div>
        </button>
    )
}