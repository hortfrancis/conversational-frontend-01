import { useApp } from "../contexts"

export default function LearningGuidanceOutputArea() {

    const { currentLessonData } = useApp();

    return (
        <div className="w-full  p-4 ">
            <div className="flex flex-col gap-1 items-center justify-center border-black border-t-8 border-b-2 py-4 ">
                <span className="font-montserrat_alternates text-lg font-bold">{currentLessonData.english}</span>
                <span className="font-montserrat_alternates text-md mb-4">{currentLessonData.phoneticUkrainian}</span>
                <span className="text-sm font-light">{currentLessonData.anglicisedUkrainian}</span>
                <span className="text-sm font-light">{currentLessonData.nativeUkrainian}</span>
            </div>
        </div>
    )
}