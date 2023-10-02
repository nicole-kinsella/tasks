import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [attempts, setAttempts] = useState<number>(4);
    const [inProgress, setProgress] = useState<boolean>(false);
    return (
        <div>
            <div>
                <Button
                    onClick={() => {
                        setAttempts(attempts - 1);
                        setProgress(true);
                    }}
                    disabled={inProgress || attempts === 0}
                >
                    Start Quiz
                </Button>
                Attempts: {attempts}.
            </div>
            <div>
                <Button
                    onClick={() => setProgress(false)}
                    disabled={!inProgress}
                >
                    Stop Quiz
                </Button>
            </div>
            <div>
                <Button
                    onClick={() => setAttempts(attempts + 1)}
                    disabled={inProgress}
                >
                    Mulligan
                </Button>
            </div>
        </div>
    );
}
