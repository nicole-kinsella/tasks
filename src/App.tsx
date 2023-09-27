import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import { Container } from "react-bootstrap";
import "./App.css";
<<<<<<< HEAD
import IMG_4040 from "../src/images/IMG_4040.jpg";
=======
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { StartAttempt } from "./components/StartAttempt";
import { TwoDice } from "./components/TwoDice";
import { CycleHoliday } from "./components/CycleHoliday";
import { Counter } from "./components/Counter";
>>>>>>> upstream/task-state

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
<<<<<<< HEAD
            <h1>Header 1</h1>
            <img src={IMG_4040} alt="A picture of my cat" />
            <ol>
                <li>1.1</li>
                <li>1.2</li>
                <li>1.3</li>
                <Button onClick={() => console.log("Hello World!")}>
                    Log Hello World
                </Button>
            </ol>
            <p>
                Hello World -- Edit <code>src/App.tsx</code> and save. This page
                will automatically reload. Edited - Nicole Kinsella.
            </p>
            <Container>
                <Row>
                    <Col>
                        <div
                            style={{
                                height: 50,
                                width: 100,
                                backgroundColor: "red"
                            }}
                        ></div>
                    </Col>
                    <Col>
                        <div
                            style={{
                                height: 50,
                                width: 100,
                                backgroundColor: "red"
                            }}
                        ></div>
                    </Col>
                </Row>
            </Container>
=======
            <hr></hr>
            <Counter></Counter>
            <hr />
            <RevealAnswer></RevealAnswer>
            <hr />
            <StartAttempt></StartAttempt>
            <hr />
            <TwoDice></TwoDice>
            <hr />
            <ChangeType></ChangeType>
            <hr />
            <CycleHoliday></CycleHoliday>
>>>>>>> upstream/task-state
        </div>
    );
}

export default App;
