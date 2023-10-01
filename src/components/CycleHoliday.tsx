import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): JSX.Element {
    type holidayEmoji = "🎄" | "🐰" | "🎆" | "🍀" | "🦃";
    const Alphabet_Transitions: Record<holidayEmoji, holidayEmoji> = {
        "🎄": "🐰",
        "🐰": "🎆",
        "🎆": "🍀",
        "🍀": "🦃",
        "🦃": "🎄"
    };
    const Year_Transitions: Record<holidayEmoji, holidayEmoji> = {
        "🍀": "🐰",
        "🐰": "🎆",
        "🎆": "🦃",
        "🦃": "🎄",
        "🎄": "🍀"
    };
    const [holiday, setHoliday] = useState<holidayEmoji>("🎄");
    function changeAlphabetically(): void {
        const newHoliday = Alphabet_Transitions[holiday];
        setHoliday(newHoliday);
    }
    function changeByYear(): void {
        const newHoliday = Year_Transitions[holiday];
        setHoliday(newHoliday);
    }
    return (
        <div>
            Holiday: {holiday}
            <div>
                <Button onClick={changeAlphabetically}>
                    Advance by Alphabet
                </Button>
            </div>
            <div>
                <Button onClick={changeByYear}>Advance by Year</Button>
            </div>
        </div>
    );
}
