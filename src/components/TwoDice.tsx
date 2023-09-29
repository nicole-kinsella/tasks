import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): JSX.Element {
    const [leftNum, setLeft] = useState<number>(1);
    const [rightNum, setRight] = useState<number>(6);
    <span data-testid="left-die"></span>;
    <span data-testid="right-die"></span>;
    return (
        <div>
            <div>
                <Button
                    onClick={() => {
                        setLeft(d6());
                    }}
                >
                    Roll Left
                </Button>
                Left Die: {leftNum}
            </div>
            <div>
                <Button onClick={() => setRight(d6())}>Roll Right</Button>
                Right Die: {rightNum}
            </div>
            <div>
                {rightNum === 1 && leftNum === 1 ? (
                    <span>You Lose 🙁</span>
                ) : rightNum === leftNum ? (
                    <span>You Win 🥳</span>
                ) : (
                    <span>Keep Trying!!</span>
                )}
            </div>
        </div>
    );
}
