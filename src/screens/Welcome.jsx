import { WelcomeHeading, StartButton } from '../components';

export default function Welcome({ start }) {
    return (
        <>
            <WelcomeHeading />
            <StartButton start={start}/>
        </>
    )
}
