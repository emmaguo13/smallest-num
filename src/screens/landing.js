import React, { useState } from "react";
import { ResponsiveEmbed } from "react-bootstrap";
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"

function Landing() {
    const axios = require('axios').default;
    const [entry, setEntry] = useState("");
    const [response, setResponse] = useState("");

    async function handleSubmit(event){
        event.preventDefault();
        setEntry(event.target.value)
        const response = await fetch('/check', {
            method: 'POST',
            body: JSON.stringify({ entry: entry })
        })
        const body = await response.text();
        setResponse(body)
        console.log(response)
    }
    
    return (
        <div>
            <h2>enter the lowest unique number you can think of.</h2>
            <Form>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>your guess:</Form.Label>
                    <Form.Control type="string" input="" id="form"/>
                </Form.Group>
                <Button variant="primary" type="submit" onClick={handleSubmit}>
                    submit
                </Button>
            </Form>
            <p>{response}</p>
        </div>
    )
}

export default Landing;