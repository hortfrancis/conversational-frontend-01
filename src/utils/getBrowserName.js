export default function getBrowserName() {
    const userAgent = navigator.userAgent;

    // Browser detection
    if (userAgent.match(/chrome|chromium|crios/i)) {
        return "Chrome";
    } else if (userAgent.match(/firefox|fxios/i)) {
        return "Firefox";
    } else if (userAgent.match(/safari/i)) {
        return "Safari";
    } else if (userAgent.match(/opr\//i)) {
        return "Opera";
    } else if (userAgent.match(/edg/i)) {
        return "Edge";
    } else {
        return "unknown";
    }
}