import packageJson from '../../package.json';

export default function DebugBar({ serverConnectionState, browserName }) {

    return (
        <div className="w-full flex gap-2 mt-4 pb-2 border-b border-black text-xs italic">
            <span className="">v{packageJson.version}</span> //
            <span>
                {serverConnectionState === 'requesting' ? 'Requesting server connection' : ''}
                {serverConnectionState === 'connected' ? 'Server connected' : ''}
                {serverConnectionState === 'error' ? 'Error connecting to server' : ''}
            </span> // 
            <span>Browser: {browserName}</span>
        </div>

    )
}