import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): JSX.Element {
    const [color, setColor] = useState<string>("");
    function updateColor(event: React.ChangeEvent<HTMLInputElement>) {
        setColor(event.target.value);
    }
    return (
        <div>
            <h3>Change Color</h3>
            <Form.Check
                inline
                type="radio"
                name="colors"
                onChange={updateColor}
                id="color-check-yellow"
                label="Yellow"
                value="yellow"
                style={{ backgroundColor: "yellow" }}
                checked={color === "yellow"}
            />
            <Form.Check
                inline
                type="radio"
                name="colors"
                onChange={updateColor}
                id="color-check-pink"
                label="Pink"
                value="pink"
                style={{ backgroundColor: "pink" }}
                checked={color === "pink"}
            />
            <Form.Check
                inline
                type="radio"
                name="colors"
                onChange={updateColor}
                id="color-check-purple"
                label="Plum"
                value="plum"
                style={{ backgroundColor: "plum" }}
                checked={color === "plum"}
            />
            <Form.Check
                inline
                type="radio"
                name="colors"
                onChange={updateColor}
                id="color-check-maroon"
                label="Maroon"
                value="maroon"
                style={{ backgroundColor: "maroon" }}
                checked={color === "maroon"}
            />
            <Form.Check
                inline
                type="radio"
                name="colors"
                onChange={updateColor}
                id="color-check-green"
                label="Crimson"
                value="crimson"
                style={{ backgroundColor: "crimson" }}
                checked={color === "crimson"}
            />
            <Form.Check
                inline
                type="radio"
                name="colors"
                onChange={updateColor}
                id="color-check-blue"
                label="Aqua"
                value="aqua"
                style={{ backgroundColor: "aqua" }}
                checked={color === "aqua"}
            />
            <Form.Check
                inline
                type="radio"
                name="colors"
                onChange={updateColor}
                id="color-check-gray"
                label="Gray"
                value="gray"
                style={{ backgroundColor: "gray" }}
                checked={color === "gray"}
            />
            <Form.Check
                inline
                type="radio"
                name="colors"
                onChange={updateColor}
                id="color-check-gold"
                label="Gold"
                value="gold"
                style={{ backgroundColor: "gold" }}
                checked={color === "gold"}
            />
            <div>
                You have chosen{" "}
                <span
                    data-testid="colored-box"
                    style={{ backgroundColor: color }}
                >
                    {color}
                </span>
            </div>
        </div>
    );
}
