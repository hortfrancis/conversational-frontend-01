export default function StartButton({ start }) {
    return (
        <button
            onClick={start}
            className={`
                block bg-white text-black 
                shadow-[0px_14px_0px_6px_black] 
                ring-[6px] ring-black
                rounded-xl w-80 h-80
                hover:bg-slate-100
                active:shadow-[0px_0px_0px_6px_black]
                active:translate-y-[14px]
                transition-all duration-100 ease-in-out
                select-none
        `}>
            <span className="text-6xl font-extrabold">
                Start
            </span>
        </button>
    )
}