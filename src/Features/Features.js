import Container from 'react-bootstrap/Container';
import group from '../assets/group.png'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Features.css"

function Features() {

    return (
        <div>
            <h2 className='text-center'>Why Talkk is easy to use ?</h2>
        <Container className='container'>
            <div className='feature__body'>
            <img src={group} alt="features" className='features__img mb-4' />
            </div>
        </Container>
        </div>
    );
}

export default Features;