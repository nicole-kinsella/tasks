import React, { useState } from "react";
import { Form } from "react-bootstrap";

function checkIfCorrect(userAnswer: string, expectedAnswer: string) {
    if (userAnswer === expectedAnswer) {
        return "✔️";
    } else {
        return "❌";
    }
}

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [userAnswer, setUserAnswer] = useState<string>("");
    return (
        <div>
            <h3>Check Answer</h3>
            <Form.Group controlId="formCheckAnswer">
                <Form.Label>Input Answer:</Form.Label>
                <Form.Control
                    as="textarea"
                    value={userAnswer}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setUserAnswer(event.target.value)
                    }
                />
            </Form.Group>
            <div>{checkIfCorrect(userAnswer, expectedAnswer)}</div>
        </div>
    );
}
