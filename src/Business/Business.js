import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import company1 from "../assets/company1.png"
import company2 from "../assets/company2.png"
import company3 from "../assets/company3.png"
import company4 from "../assets/company4.png"
import company5 from "../assets/company5.png"
import company6 from "../assets/company6.png"
import company7 from "../assets/company7.png"
import bgimg from "../assets/bgimg.png"

import "./Business.css"

function Business() {
    return (
        <Container className='mb-5'>
            <h3 className='text-center mt-5'>Business Talkking</h3>
            <div className='row business__body mt-5'>
                <ul>
                    <li>
                        <img src={company1} alt="img" className='logo__img' />
                    </li>
                    <li>
                        <img src={company2} alt="img" className='logo__img' />
                    </li>
                    <li>
                        <img src={company3} alt="img" className='logo__img' />
                    </li>
                    <li>
                        <img src={company4} alt="img" className='logo__img' />
                    </li>
                    <li>
                        <img src={company5} alt="img" className='logo__img' />
                    </li>
                    <li>
                        <img src={company6} alt="img" className='logo__img' />
                    </li>
                    <li>
                        <img src={company7} alt="img" className='logo__img' />
                    </li>
                </ul>
            </div>
            {/* <div className="col-md-2">
                    <img src={company1} alt="img" className='logo__img' />
                </div>
                <div className="col-md-2">
                    <img src={company2} alt="img" className='logo__img' />
                </div>
                <div className="col-md-2">
                    <img src={company3} alt="img" className='logo__img' />
                </div>
                <div className="col-md-2">
                    <img src={company4} alt="img" className='logo__img' />
                </div>
                <div className="col-md-2">
                    <img src={company5} alt="img" className='logo__img' />
                </div>
                <div className="col-md-2">
                    <img src={company6} alt="img" className='logo__img' />
                </div>
                <div className="col-md-2">
                    <img src={company7} alt="img" className='logo__img' />
                </div> */}


            <div className='business__main'>
                <img src={bgimg} alt="img" className='business__img' />
                <div className='business_desp'>
                    <h3 className="business__heading">Want to build your own Intelligent Virtual Agent?</h3>
                    <p>Leverage AI to boost engagement, improve conversions, and deliver memorable  experiences to your customers with Talkk.</p>
                    <button className='business__btn'>Get Demo</button>
                </div>
            </div>
        </Container>
    );
}

export default Business;