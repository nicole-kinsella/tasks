import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [attemptsLeft, setAttemptsLeft] = useState<number>(3);
    const [attemptsRequested, setAttemptsRequested] = useState<string>("0");

    function isNumber(attemptsRequested: string) {
        if (isNaN(parseInt(attemptsRequested))) {
            setAttemptsLeft(attemptsLeft);
        } else {
            setAttemptsLeft(attemptsLeft + parseInt(attemptsRequested));
        }
    }
    return (
        <div>
            <h3>Give Attempts</h3>
            <div>Attempts Remaining: {attemptsLeft}</div>
            <Form.Group controlId="formGiveAttempts">
                <Form.Label>Request Number of Attempts:</Form.Label>
                <Form.Control
                    type="number"
                    value={attemptsRequested}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setAttemptsRequested(event.target.value)
                    }
                />
            </Form.Group>
            <div>
                <Button
                    onClick={() => setAttemptsLeft(attemptsLeft - 1)}
                    disabled={attemptsLeft === 0}
                >
                    Use
                </Button>
                <Button onClick={() => isNumber(attemptsRequested)}>
                    Gain
                </Button>
            </div>
        </div>
    );
}
