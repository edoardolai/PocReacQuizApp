import { useEffect, useState } from "react";

export default function QuestionTimer({ timeout, onTimeout, mode }) {

    const [remainingTime, setRemainingTime] = useState(timeout)


    useEffect(() => {
        const timer = setTimeout(onTimeout, timeout);

        return(() => {
            clearTimeout(timer)
        })
    }, [timeout, onTimeout])


    useEffect(() => {
        const interval = setInterval(() => {
            setRemainingTime(prevTime => prevTime - 10)
        }, 10);
        return (() => {
            clearInterval(interval)
        })
    }, [])


    return (
        <progress value={remainingTime} max={timeout} className={mode} id="question-time" />
    )
}