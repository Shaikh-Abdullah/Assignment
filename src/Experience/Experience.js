import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import mobile from '../assets/mobile.png'
import "./Experience.css"

function Experience() {
  return (
    <Container fluid className='exper__body'>
      <div className='timeline__area'>
        <h3 className='text-center pt-4'>Experience Talkk Now </h3>
        <p className='text-center'>Tackle mundane tasks efficiently and deploy your chatbots across channels to supercharge your business! </p>
        <Row className='exper__row'>
          <Col className='exper__col' md={6} >
            <h6 className='timeline'>Sign Up</h6>
            <p>Create a Talkk account and sign up for the dashboard. </p>
            <h6 className='timeline'>Create chatbot</h6>
            <p>Create and personalize your chatbot.</p>
            <h6 className='timeline'>Add Q&A</h6>
            <p>Enrich bots knowledge base.</p>
            <h6 className='timeline'>Train & Publish</h6>
            <p>Publish bots to the web, WhatsApp, or the channels of your choice.</p>
            <h6 className='timeline'>Generate QR Code</h6>
            <p>Generate a scannable QR code and place it on your business premises.</p>
            <h6 className='timeline'>Run Chatbot</h6>
            <p>Start TALKKing to your customers!</p>
          </Col>
          <Col md={6}>
            <img src={mobile} alt="mobile" className='exper__img' />
          </Col>
        </Row>
      </div>
    </Container>
  )
}

export default Experience