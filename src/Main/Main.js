import React from 'react'
import Form from 'react-bootstrap/esm/Form'
import Button from 'react-bootstrap/esm/Button'
import './Main.css'

function Main() {
    return (
        <div className='main'>
            <div className='main__body'>
                <h1 className='main__heading'>Automate</h1>
                <h2>Lead Generation</h2>
                <h4>with Conversational AI!</h4>
                <p>The finest no-code, user-friendly AI chatbot and humanoid platform.</p>
                <Form>
                    <Button variant="outline-primary btn-lr">Get Demo</Button>
                    <Button className='main__btn btn-lr'>Try for Free</Button>
                </Form>
            </div>
        </div>
    )
}

export default Main