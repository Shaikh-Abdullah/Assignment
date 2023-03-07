import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Row from "react-bootstrap/esm/Row"
import Col from "react-bootstrap/esm/Col"

import './Percentage.css';

function Percentage() {
    let data = [{
        percent: "85%",
        desp: "of customer interaction handled without human agents"
    },
    {
        percent: "64%",
        desp: "of internet users say 24-hour service is the best feature of chatbots"
    },
    {
        percent: "15%",
        desp: "of global interactions would be handled by AI, which includes chatbots"
    },
    {
        percent: "67%",
        desp: "of global consumers had an interaction with a chatbot over the last 12 months"
    }
]
  return (
    <Container fluid className='percentage__body'>
        <Row className='px-5'>
            {data.map((ele, index) => {
                return <Col md={3} className='text-center' key={index}>
                    <h3 className='percentage__num'>{ele.percent}</h3>
                    <p>{ele.desp}</p>
                </Col>
            })}
        </Row>
    </Container>
  )
}

export default Percentage