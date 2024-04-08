export default function MicrophoneIcon({ recording }) {

    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 92 113" >
            <path d="M46.5 85.3333C42.649 85.3333 39.3756 83.9884 36.6799 81.2986C33.9842 78.6088 32.6364 75.3426 32.6364 71.5V43.8333C32.6364 39.9907 33.9842 36.7245 36.6799 34.0347C39.3756 31.3449 42.649 30 46.5 30C50.351 30 53.6244 31.3449 56.3201 34.0347C59.0158 36.7245 60.3636 39.9907 60.3636 43.8333V71.5C60.3636 75.3426 59.0158 78.6088 56.3201 81.2986C53.6244 83.9884 50.351 85.3333 46.5 85.3333ZM42.3409 113V101.588C34.7313 100.58 28.4388 97.2353 23.4633 91.5523C18.4878 85.8693 16 79.1852 16 71.5H24.3182C24.3182 77.6236 26.4835 82.8433 30.814 87.1593C35.1445 91.4753 40.3819 93.6333 46.5261 93.6333C52.6703 93.6333 57.899 91.4753 62.2121 87.1593C66.5253 82.8433 68.6818 77.6236 68.6818 71.5H77C77 79.1852 74.5123 85.8693 69.5367 91.5523C64.5612 97.2353 58.2687 100.58 50.6591 101.588V113H42.3409Z" fill="black" />

            {/* Curved lines that show when recording audio */}
            <path d="M54 4C73.125 4 88 18.875 88 38" stroke={recording ? 'black' : ''} strokeWidth="8" fill="none" className={recording ? "animate-pulse" : ''} />
            <path d="M54 21C64.625 21 71 27.375 71 38" stroke={recording ? 'black' : ''} strokeWidth="8" fill="none" className={recording ? "animate-pulse" : ''} />
            <path d="M38 4C18.875 4 4 18.875 4 38" stroke={recording ? 'black' : ''} strokeWidth="8" fill="none" className={recording ? "animate-pulse" : ''} />
            <path d="M38 21C27.375 21 21 27.375 21 38" stroke={recording ? 'black' : ''} strokeWidth="8" fill="none" className={recording ? "animate-pulse" : ''} />
        </svg>
    )
}