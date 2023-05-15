// React Hooks
import { useState } from "react";

// Components
import { Container } from "../../components/componentsIndex";

// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleChevronLeft,
  faCircleChevronRight,
  faLocationDot,
  faSquareXmark,
} from "@fortawesome/free-solid-svg-icons";

// CSS
import "./Hotel.scss";

const Hotel = () => {
  const [openSlider, setOpenSlider] = useState(false);
  const [slideNumber, setSlideNumber] = useState(0);

  const sliderHandler = (i) => {
    setSlideNumber(i);
    setOpenSlider(true);
  };

  const slideMoveHandler = (direction) => {
    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber);
  };

  const photos = [
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707778.jpg?k=56ba0babbcbbfeb3d3e911728831dcbc390ed2cb16c51d88159f82bf751d04c6&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707367.jpg?k=cbacfdeb8404af56a1a94812575d96f6b80f6740fd491d02c6fc3912a16d8757&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708745.jpg?k=1aae4678d645c63e0d90cdae8127b15f1e3232d4739bdf387a6578dc3b14bdfd&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707776.jpg?k=054bb3e27c9e58d3bb1110349eb5e6e24dacd53fbb0316b9e2519b2bf3c520ae&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708693.jpg?k=ea210b4fa329fe302eab55dd9818c0571afba2abd2225ca3a36457f9afa74e94&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707389.jpg?k=52156673f9eb6d5d99d3eed9386491a0465ce6f3b995f005ac71abc192dd5827&o=&hp=1",
    },
  ];

  return (
    <div className="hotel">
      <Container>
        <div className="hotelWrapper">
          {openSlider && (
            <div className="slider">
              <FontAwesomeIcon
                icon={faSquareXmark}
                onClick={() => setOpenSlider(false)}
                className="close"
              />
              <FontAwesomeIcon
                icon={faCircleChevronLeft}
                onClick={() => slideMoveHandler("l")}
                className="arrow"
              />
              <div className="slideWrapper">
                <img src={photos[slideNumber].src} className="sliderImg" alt="" />
              </div>
              <FontAwesomeIcon
                icon={faCircleChevronRight}
                onClick={() => slideMoveHandler("r")}
                className="arrow"
              />
            </div>
          )}

          <div className="posAbs">
            <button className="btn">Reserve or Book Now!</button>
          </div>
          <div className="hotelTitle">
            <h1>Grand Hotel</h1>
          </div>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <div>Lorem Ipsum 25, India</div>
          </div>
          <div className="hotelDistance">Excellent Location - 500m from the center</div>
          <div className="hotelPriceHighlight">
            Book a stay over &#8377;1000 at this property and get a free taxi
          </div>

          <div className="hotelImages">
            {photos.map((photo, i) => (
              <div className="hotelImgWrapper" key={photo.src}>
                <img src={photo.src} alt="" onClick={() => sliderHandler(i)} className="hotelImg" />
              </div>
            ))}
          </div>

          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <div className="hotelDetailsTitle">
                <h2>Welcome To The Hotel Grand</h2>
              </div>
              <p className="hotelDetailsDesc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum modi suscipit
                blanditiis, adipisci dolor mollitia odit iure corporis nihil soluta fugit. Eaque
                veritatis facere quo, praesentium non sequi sed id dolores quos consequatur odio
                aut, nam asperiores. Tenetur quis soluta tempore ad fuga earum modi vel aut
                exercitationem, corporis nesciunt!
              </p>
            </div>

            <div className="hotelDetailsPrice">
              <h3>Perfect for a 3-Night Stay!</h3>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>

              <div className="price">
                <b>&#8377; 3000 </b>
                (3 Nights)
              </div>
              <button className="btn">Reserve or Book Now!</button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Hotel;
