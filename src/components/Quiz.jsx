import { useState, useCallback } from "react"
import QUESTIONS from "../questions"
import Question from "./Question"
import Summary from "./Summary"
export default function Quiz() {
    const [userAnswers, setUserAnswers] = useState([])

    const activeQuestionIndex = userAnswers.length;
    const quizIsComplete = activeQuestionIndex === QUESTIONS.length;
    
    const handleSelectAnswer = useCallback(function handleSelectAnswer(selectedAnswer) {
        setUserAnswers((prevAnswers) => [...prevAnswers, selectedAnswer])
    }, [])

    const handleSkipAnswer = useCallback(() => handleSelectAnswer(null), [handleSelectAnswer])

    if (quizIsComplete) {
        return <Summary 
        userAnswers={userAnswers}
        />
    }


    // needs to be after the if block for it tries to access a question in the array even if there is no matching one for that index when answers are exhausted
    // content below should only be rendered if content above hasn't been rendered yet

    return (
        <div id="quiz">
            <Question
             key={activeQuestionIndex}
             questionIndex={activeQuestionIndex}
             onSelectAnswer={handleSelectAnswer}
             onSkipAnswer={handleSkipAnswer}
             />
        </div>
    )
}