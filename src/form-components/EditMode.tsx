import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [editable, setEditable] = useState<boolean>(false);
    const [userName, setUserName] = useState<string>("");
    const [student, setStudent] = useState<boolean>(true);

    function inEditMode() {
        return (
            <div>
                <Form.Group controlId="formEditName">
                    <Form.Label>Input Name:</Form.Label>
                    <Form.Control
                        value={userName}
                        onChange={(
                            event: React.ChangeEvent<HTMLInputElement>
                        ) => setUserName(event.target.value)}
                    />
                    <Form.Check
                        type="checkbox"
                        id="is-student-check"
                        label="student?"
                        checked={student}
                        onChange={(
                            event: React.ChangeEvent<HTMLInputElement>
                        ) => setStudent(event.target.checked)}
                    />
                </Form.Group>
            </div>
        );
    }

    function updateStatus(event: React.ChangeEvent<HTMLInputElement>) {
        setEditable(event.target.checked);
    }
    return (
        <div>
            <h3>Edit Mode</h3>
            <Form.Group controlId="formEditMode">
                <Form.Check
                    type="switch"
                    id="is-editable-check"
                    checked={editable}
                    onChange={updateStatus}
                />
            </Form.Group>
            <div>{editable ? inEditMode() : "Your Name is a student"}</div>
            <div>
                {student
                    ? userName + " is a student"
                    : userName + " is not a student"}
            </div>
        </div>
    );
}
