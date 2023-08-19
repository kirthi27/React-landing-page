import 'bootstrap/dist/css/bootstrap.min.css';
import  { Carousel, CarouselItem } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import Img1 from './images/octavia.jpg';
import Img2 from './images/red.webp';

function caro(){
    return(
        <div>
            <Carousel>
                <CarouselItem>
                    <Image src={Img1} width="100%"/>
                <Carousel.Caption><h3>OCTAVIA</h3></Carousel.Caption>
                </CarouselItem>
                <CarouselItem>
                <Image src={Img2} width="100%"/>
                <Carousel.Caption><h3> RED</h3></Carousel.Caption>
                </CarouselItem>
                </Carousel>
        </div>            
         
    )
}

export default caro;