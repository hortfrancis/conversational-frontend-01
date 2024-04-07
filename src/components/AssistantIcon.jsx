export default function AssistantIcon({ thinking }) {

    const styles = {
        circle: {
            fill: '#000'
        },
        line: {
            strokeColour: '#000',
            strokeWidth: 6
        }
    }

    return (
        <div className={`w-32 ${thinking ? 'animate-pulse' : 'animate-none'}`}>
            <svg width="100%" height="100%" viewBox="0 0 207 210" xmlns="http://www.w3.org/2000/svg">
                {/* Outer lines */}
                <path d="M172.857 64.7529L103 25" stroke={styles.line.strokeColour} strokeWidth={styles.line.strokeWidth}/>
                <path d="M172.857 64.7529L172.498 145.375" stroke={styles.line.strokeColour} strokeWidth={styles.line.strokeWidth} />
                <path d="M103.357 185.13L172.998 144.509" stroke={styles.line.strokeColour} strokeWidth={styles.line.strokeWidth}/>
                <path d="M34.0752 145.13L103.357 185.13" stroke={styles.line.strokeColour} strokeWidth={styles.line.strokeWidth} />
                <path d="M34.0752 145.13L33.9342 65.3746" stroke={styles.line.strokeColour} strokeWidth={styles.line.strokeWidth} />
                <path d="M103.292 25.2441L33.9342 65.3746" stroke={styles.line.strokeColour} strokeWidth={styles.line.strokeWidth} />

                {/* Inner lines */}
                <path d="M34.1506 65L103.433 105" stroke={styles.line.strokeColour} strokeWidth={styles.line.strokeWidth} />
                <path d="M103.433 105L172.715 145" stroke={styles.line.strokeColour} strokeWidth={styles.line.strokeWidth} />
                <path d="M103.857 184.264L103.575 24.7529" stroke={styles.line.strokeColour} strokeWidth={styles.line.strokeWidth} />
                <path d="M172.498 145.375L34.0752 145.131" stroke={styles.line.strokeColour} strokeWidth={styles.line.strokeWidth} />
                <path d="M103.357 185.13L33.9344 65.3746" stroke={styles.line.strokeColour} strokeWidth={styles.line.strokeWidth}/>
                <path d="M172.857 64.7529L33.9344 65.3747" stroke={styles.line.strokeColour} strokeWidth={styles.line.strokeWidth} />
                <path d="M172.498 145.375L103 25" stroke={styles.line.strokeColour} strokeWidth={styles.line.strokeWidth} />
                <path d="M34.0752 145.13L173 65" stroke={styles.line.strokeColour} strokeWidth={styles.line.strokeWidth} />

                {/* Circles */}
                <circle cx="103.433" cy="25" r="25" fill={styles.circle.fill} />
                <circle cx="172.715" cy="65" r="25" transform="rotate(60 172.715 65)" fill={styles.circle.fill} />
                <circle cx="172.715" cy="145" r="25" transform="rotate(-60 172.715 145)" fill={styles.circle.fill} />
                <circle cx="103.433" cy="185" r="25" fill={styles.circle.fill} />
                <circle cx="34.1506" cy="145" r="25" transform="rotate(60 34.1506 145)" fill={styles.circle.fill} />
                <circle cx="34.1506" cy="65" r="25" transform="rotate(-60 34.1506 65)" fill={styles.circle.fill} />
                <circle cx="103.433" cy="105" r="25" fill={styles.circle.fill} />
            </svg >
        </div>
    )
}