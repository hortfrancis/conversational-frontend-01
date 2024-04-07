import { MicrophoneIcon } from "./";

export default function SpeakSendButton() {
    return (
        <button
            onClick={() => console.log("SpeakSendButton clicked")}
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
            <span className="flex flex-col gap-2 items-center">
                <span className="text-2xl font-semibold">Press to</span>
                <span className="text-5xl font-extrabold">speak</span>

                <div className="w-20">
                    <MicrophoneIcon />
                </div>
            </span>
        </button>
    )
}