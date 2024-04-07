

export default function AssistantTextOutputArea({ assistantTextOutput }) {

    return (
        <div className="min-h-[30vh] bg-white w-full p-4 text-center italic">
            <div className="h-full flex items-center p-10 border-t-2 border-b-2">
                <p className="w-full">{assistantTextOutput}</p>
            </div>
        </div>
    )
}