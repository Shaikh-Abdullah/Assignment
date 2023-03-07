import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import logo from '../assets/logo.png'
import social1 from '../assets/social1.png'
import social2 from '../assets/social2.png'
import social3 from '../assets/social3.png'
import social4 from '../assets/social4.png'
import './Footer.css'

function Footer() {
    return (
        <div>
            <Container fluid className='footer__body'>
                <Row>
                    <Col md={8}>
                        <Row>
                            <Col md={2}>
                                <div className='footer__company'>
                                    <p className='footer__heading'><strong>Company</strong></p>
                                    <span>Contact Us</span><br />
                                    <span>Pricing</span><br />
                                    <span>Sign in</span><br />
                                    <span>Terms & Conditions</span><br />
                                    <span>Privacy Policy</span><br />
                                    <span>Security</span><br />
                                    <span>GDPR</span>
                                </div>
                            </Col>
                            <Col md={3}>
                                <div>
                                    <p className='footer__heading'><strong>Solutions</strong></p>
                                    <span>Customer Support</span><br />
                                    <span>Sales & Marketing</span><br />
                                    <span>IT Helpdesk</span><br />
                                    <span>Human Resource</span><br />
                                    <span>Survey & Feedback</span><br />
                                    <span>Lead Generation</span><br />
                                    <span>Conversational Commerce</span>
                                </div>
                            </Col>
                            <Col md={2}>
                                <div>
                                    <p className='footer__heading'><strong>Offerings</strong></p>
                                    <span>Raas</span><br/>
                                    <span>Chatbots</span><br/>
                                    <span>Digital Envoy</span><br/>
                                    <span>Voicebots</span><br/>
                                    <span>Hybrid Chat</span>
                                </div>
                            </Col>
                            <Col md={3}>
                                <div>
                                    <p className='footer__heading'><strong>Industries</strong></p>
                                    <span>Manufaturing</span><br />
                                    <span>Automotive</span><br />
                                    <span>Banking & Finance</span><br />
                                    <span>Media & Entertainment</span><br />
                                    <span>Insurance & Healthcare</span><br />
                                    <span>Retail & E-commerce</span><br />
                                    <span>Telecom</span><br />
                                    <span>Travel & Hospitality</span><br />
                                    <span>Education & Training</span><br />
                                    <span>Real Estate</span>
                                </div>
                            </Col>
                            <Col md={2}>
                                <p className='footer__heading'><strong>Others</strong></p>
                                <span>Legal</span><br />
                                <span>Cookies</span><br />
                                <span>Status</span>
                            </Col>
                        </Row>
                    </Col>
                    <Col md={4} className="mt-2">
                        <div>
                            <img src={logo} alt="logo" />
                            <p>Improve customer relationships with instant replies; a comprehensive chatbot-building platform for the best AI chatbots.</p>
                            <p><strong> Don't just respond; engage with customers!</strong></p>
                            <div>
                                <img src={social1} alt="img" className='mt-3' />
                                <img src={social2} alt="img" className='mt-3 footer__social' />
                                <img src={social3} alt="img" className='mt-3 footer__social' />
                                <img src={social4} alt="img" className='mt-3 footer__social' />
                            </div>

                        </div>
                    </Col>
                </Row>
            </Container>
            <footer className='text-center py-2 footer'>© 2022 Talkk. All Rights Reserved</footer>

        </div>
    )
}

export default Footer