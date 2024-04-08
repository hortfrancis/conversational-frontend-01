import { useAssistant } from "../contexts"

export default function AssistantTextOutputArea() {

    const { assistantTextOutput } = useAssistant();

    return (
        <div className=" bg-white w-full p-4 text-center italic">
            <div className="h-full flex items-center p-10 border-t-2 border-b-2">
                <p className="w-full">{assistantTextOutput}</p>
            </div>
        </div>
    )
}