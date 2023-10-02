import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    const [questionType, setType] = useState<QuestionType>(
        "short_answer_question"
    );
    function changeQuestionType(): void {
        setType(
            questionType === "multiple_choice_question"
                ? "short_answer_question"
                : "multiple_choice_question"
        );
    }
    return (
        <div>
            Current Type:
            {questionType === "short_answer_question"
                ? "Short Answer"
                : "Multiple Choice"}
            <Button onClick={changeQuestionType}>Change Type</Button>
        </div>
    );
}
