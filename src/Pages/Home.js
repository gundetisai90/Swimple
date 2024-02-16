import React from 'react'

import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import './Carousel.css';
import NavBar from '../Components/Navbar'
import Footer from '../Components/Footer'
const logo = require('./logo.png');


export default function Home() {
    return (
        <div>
            <div>
                <NavBar />
            </div>
            <div>
                <Carousel>
                    <Carousel.Item>
                        <img className="d-block w-100" src="https://source.unsplash.com/random/50x20/?Swimming" alt="First slide" />
                        <Carousel.Caption>
                            <h3>European Junior (M) National record ÿor 200m fly</h3>
                            <p>1:52.71</p>
                        </Carousel.Caption>
                        <Image src={logo} className="carousel-logo" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100 mx-auto" src="https://source.unsplash.com/random/50x20/?swim" alt="Second slide" />
                        <Carousel.Caption>
                            <h3>Indian Senior (M) National record ÿor 200m fly</h3>
                            <p>1:56.38</p>
                        </Carousel.Caption>
                        <Image src={logo} className="carousel-logo" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src="https://source.unsplash.com/random/50x20/?Swimmer" alt="Third slide" />
                        <Carousel.Caption>
                            <h3>Indian Junior (M) National record ÿor 200m fly</h3>
                            <p>2:03.63</p>
                        </Carousel.Caption>
                        <Image src={logo} className="carousel-logo" />
                    </Carousel.Item>
                </Carousel>
            </div>
            <div>
                <h1>Swimming</h1>
                <p>
                    Swimming is an individual or team racing sport that requires the use of one's entire body to move through water. The sport takes place in pools or open water (e.g., in a sea or lake). Competitive swimming is one of the most popular Olympic sports, with varied distance events in butterfly, backstroke, breaststroke, freestyle, and individual medley.
                </p>
                <p>
                    Swimming, in recreation and sports, is the propulsion of the body through water by combined arm and leg motions and the natural flotation of the body. Swimming as an exercise is popular as an all-around body developer and is particularly useful in therapy and as exercise for physically handicapped persons. It is also taught for lifesaving purposes.
                </p>

            </div>

            <div>
                <Footer />
            </div>
        </div>
    )
}
