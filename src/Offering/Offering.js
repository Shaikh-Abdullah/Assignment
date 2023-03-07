import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
// import Button from 'react-bootstrap/esm/Button'
import robot from "../assets/robot.png"
import women1 from "../assets/women1.png"
import mobile1 from "../assets/mobile1.png"
import mobile2 from "../assets/mobile2.png"
import women2 from "../assets/women2.png"
import "./Offering.css"

function Offering() {
    return (
        <Container fluid className='offer__body'>
            <h3 className='text-center mb-4'>Scale your Business with AI offerings</h3>
            <Row className='offer__row'>
                <Col className='offer__col'>   
                        <img src={robot} alt="robot" className='offer__img' />
                        <div>
                            <h3>RaaS</h3>
                            <p>Deploy robots across channels cost-effectively and conveniently. Delight your customers with our Robots as a Service solution's unique subscription-based model. </p>
                        </div>       
                </Col>
                <Col className='offer__col'>
                    <img src={women1} alt="img" className='offer__img' />
                    <div>
                        <h3>Digital Envoys</h3>
                        <p>AI-powered customer service ambassadors that automate business processes with life like human conversations.</p>
                    </div>
                </Col>
            </Row>
            <Row className='offer__row'>
                <Col className='offer__col' >   
                        <img src={mobile1} alt="robot" className='offer__img' />
                        <div>
                            <h3>Chatbots</h3>
                            <p>Provide 24x7 human-like support and assistance to your customers with NLP-powered conversational AI chatbots.</p>
                        </div>      
                </Col>
                <Col className='offer__col'>
                    <img src={mobile2} alt="img" className='offer__img' />
                    <div>
                        <h3>Digital Envoys</h3>
                        <p>Deploy robots across channels cost-effectively and conveniently. Delight your customers with our Robots as a Service solution's unique subscription-based model. </p>
                    </div>
                </Col>
            </Row>
            <Row className='offer__row'>
            <Col className='offer__col'>
                    <img src={women2} alt="img" className='offer__img' />
                    <div>
                        <h3>Digital Envoys</h3>
                        <p>Deploy robots across channels cost-effectively and conveniently. Delight your customers with our Robots as a Service solution's unique subscription-based model. </p>
                    </div>
                </Col>
                <Col className='offer__col offer__row__last'>
                    <h5 className='text-center'>Want to implement our suite of AI Conversational Bots for your business ?</h5>
                    <div>
                        {/* <Button className='offer__row__last__btn'>Demo request</Button> */}
                        <button className='offer__row__last__btn'>Request Demo</button>
                    </div>
                </Col>
            </Row>
            
        </Container>
    )
}

export default Offering