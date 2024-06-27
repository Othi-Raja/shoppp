import React, { useEffect, useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Row } from 'react-bootstrap';
import banner from './images/6282112 copy.png';
import icecream_1 from './images/icecream-1.png';
import icecream_2 from './images/icecream-2.png';
import icecream_3 from './images/ice3.png';
import icecream_4 from './images/ice4.png';
import icecream_5 from './images/icecream-5.png';
import 'aos/dist/aos.css';
import AOS from 'aos';
export default function LandingPage() {
  useEffect(() => {
    AOS.init();
  })
  const sundaes = [
    {
      "itemTitle": "Chocolate Delight",
      "toppingsList": [
        "Chocolate ice cream",
        "Brownie pieces",
        "Chocolate syrup",
        "Chocolate shavings"
      ],
      "image": icecream_1,
      'Price':110,
      "backgroundColor": "#f8e8e8" // Example background color
    },
    {
      "itemTitle": "Berry Blast",
      "toppingsList": [
        "Vanilla ice cream",
        "Fresh berries",
        "Berry syrup",
        "Whipped cream"
      ],
      "image": icecream_2,
      'Price':90,
      "backgroundColor": "#e8f8e8" // Example background color
    },
    {
      "itemTitle": "Caramel Crunch",
      "toppingsList": [
        "Caramel ice cream",
        "Toffee bits",
        "Caramel sauce",
        "Crushed cookies"
      ],
      "image": icecream_3,
      'Price':120,
      "backgroundColor": "#f8f0e8" // Example background color
    },
    {
      "itemTitle": "Tropical Paradise",
      "toppingsList": [
        "Mango ice cream",
        "Pineapple chunks",
        "Coconut flakes",
        "Mango syrup"
      ],
      "image": icecream_4,
      'Price':60,
      "backgroundColor": "#e8f8f8" // Example background color
    },
    {
      "itemTitle": "Nutty Buddy",
      "toppingsList": [
        "Peanut butter ice cream",
        "Crushed peanuts",
        "Chocolate chips",
        "Peanut butter sauce"
      ],
      "image": icecream_5,
      'Price':150,
      "backgroundColor": "#f8e8f8" // Example background color
    }
  ];
  const [selectedSundae, setSelectedSundae] = useState(sundaes[0]);
  const [backgroundColor, setBackgroundColor] = useState(sundaes[0].backgroundColor);
  const [count, setcount] = useState(0)
  const Decrement = () => {
    if (count > 0) {
      setcount(count - 1);
    }
  }
  const Increment = () => {
    setcount(count + 1)
  }
  const changeitem = (index) => {
    setSelectedSundae(sundaes[index]);
    setBackgroundColor(sundaes[index].backgroundColor);
    document.body.style.backgroundColor = backgroundColor;
  };
  return (
    <div >
      <Row className='m-4'>
        <Col className='d-flex p-0 m-0' sm='4'>
          <img src={selectedSundae.image} alt="img" className='diyanamic-Img' />
        </Col>
        <Col className='toping-item'>
          <div className=' h-100 d-flex align-items-center p-0 m-0'>
            <div>
              <span className='item-title'>{selectedSundae.itemTitle}</span>
              <ul className='topings-list'>
                {selectedSundae.toppingsList.map((topping, index) => (
                  <li data-aos="fade-in" key={index}>{topping}</li>
                ))}
              </ul>
              <Row >
                <Col>
                  <button class="button-28 " role="button">order</button>
                </Col>
                <Col className='pt-1'>
                  <div>
                    <span className='item-mins' onClick={() => Decrement()}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-patch-minus" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M5.5 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1-.5-.5" />
                      <path d="m10.273 2.513-.921-.944.715-.698.622.637.89-.011a2.89 2.89 0 0 1 2.924 2.924l-.01.89.636.622a2.89 2.89 0 0 1 0 4.134l-.637.622.011.89a2.89 2.89 0 0 1-2.924 2.924l-.89-.01-.622.636a2.89 2.89 0 0 1-4.134 0l-.622-.637-.89.011a2.89 2.89 0 0 1-2.924-2.924l.01-.89-.636-.622a2.89 2.89 0 0 1 0-4.134l.637-.622-.011-.89a2.89 2.89 0 0 1 2.924-2.924l.89.01.622-.636a2.89 2.89 0 0 1 4.134 0l-.715.698a1.89 1.89 0 0 0-2.704 0l-.92.944-1.32-.016a1.89 1.89 0 0 0-1.911 1.912l.016 1.318-.944.921a1.89 1.89 0 0 0 0 2.704l.944.92-.016 1.32a1.89 1.89 0 0 0 1.912 1.911l1.318-.016.921.944a1.89 1.89 0 0 0 2.704 0l.92-.944 1.32.016a1.89 1.89 0 0 0 1.911-1.912l-.016-1.318.944-.921a1.89 1.89 0 0 0 0-2.704l-.944-.92.016-1.32a1.89 1.89 0 0 0-1.912-1.911z" />
                    </svg></span>
                    <span className='counter'>{count}</span>
                    <span className='item-plus' onClick={() => Increment()}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-patch-plus" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M8 5.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V10a.5.5 0 0 1-1 0V8.5H6a.5.5 0 0 1 0-1h1.5V6a.5.5 0 0 1 .5-.5" />
                      <path d="m10.273 2.513-.921-.944.715-.698.622.637.89-.011a2.89 2.89 0 0 1 2.924 2.924l-.01.89.636.622a2.89 2.89 0 0 1 0 4.134l-.637.622.011.89a2.89 2.89 0 0 1-2.924 2.924l-.89-.01-.622.636a2.89 2.89 0 0 1-4.134 0l-.622-.637-.89.011a2.89 2.89 0 0 1-2.924-2.924l.01-.89-.636-.622a2.89 2.89 0 0 1 0-4.134l.637-.622-.011-.89a2.89 2.89 0 0 1 2.924-2.924l.89.01.622-.636a2.89 2.89 0 0 1 4.134 0l-.715.698a1.89 1.89 0 0 0-2.704 0l-.92.944-1.32-.016a1.89 1.89 0 0 0-1.911 1.912l.016 1.318-.944.921a1.89 1.89 0 0 0 0 2.704l.944.92-.016 1.32a1.89 1.89 0 0 0 1.912 1.911l1.318-.016.921.944a1.89 1.89 0 0 0 2.704 0l.92-.944 1.32.016a1.89 1.89 0 0 0 1.911-1.912l-.016-1.318.944-.921a1.89 1.89 0 0 0 0-2.704l-.944-.92.016-1.32a1.89 1.89 0 0 0-1.912-1.911z" />
                    </svg></span>
                  </div>
                </Col>
              </Row>
              <span>Price :{selectedSundae.Price}</span>
            </div>
          </div>
        </Col>
        <Col sm='6' className='p-0 m-0'>
          <Row>
            <img src={banner} alt='banner' className='banner-image' />
          </Row>
          <Row>
            <div className='scrolling-wrapper d-flex p-0 m-0'>
              <span className="left-arrow"></span>
              <img className='scrolling-img' data-aos="fade-in" src={icecream_1} alt="img1" onClick={() => changeitem(0)} />
              <img className='scrolling-img' data-aos="fade-in" src={icecream_2} alt="icecream-img" onClick={() => changeitem(1)} />
              <img className='scrolling-img' data-aos="fade-in" src={icecream_3} alt="icecream-img" onClick={() => changeitem(2)} />
              <img className='scrolling-img' data-aos="fade-in" src={icecream_4} alt="icecream-img" onClick={() => changeitem(3)} />
              <img className='scrolling-img' data-aos="fade-in" src={icecream_5} alt="icecream-img" onClick={() => changeitem(4)} />
              <span className="rignt-arrow"></span>
            </div>
          </Row>
        </Col>
      </Row>
    </div>
  );
}
