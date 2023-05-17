/* eslint-disable no-unused-vars */
// React Hooks
import { useContext, useState } from "react";

// Components
import { Container } from "../../components/ComponentsIndex";

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
import useFetch from "../../hooks/useFetch";
import { useLocation } from "react-router-dom";
import { SearchContext } from "../../context/SearchContex";

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

    const location = useLocation();
    const id = location.pathname.split("/")[2];

    const { data, loading, error } = useFetch(`http://localhost:8000/api/hotels/find/${id}`);

    const { dates, options } = useContext(SearchContext);

    const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
    const dayDifference = (date1, date2) => {
        const timeDiff = Math.abs(date1.getTime() - date2.getTime());
        const diffDays = Math.ceil(timeDiff / MILLISECONDS_PER_DAY);
        return diffDays;
    };

    const days = dayDifference(dates[0].endDate, dates[0].startDate);

    return (
        <div className="hotel">
            <Container>
                {loading ? (
                    "Loading Please Wait..."
                ) : (
                    <>
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
                                        <img
                                            src={data.photos[slideNumber]}
                                            className="sliderImg"
                                            alt=""
                                        />
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
                                <h1>{data.name}</h1>
                            </div>
                            <div className="hotelAddress">
                                <FontAwesomeIcon icon={faLocationDot} />
                                <div>{data.address}</div>
                            </div>
                            <div className="hotelDistance">
                                Excellent Location - {data.distance} from the center
                            </div>
                            <div className="hotelPriceHighlight">
                                Book a stay over &#8377;1000 at this property and get a free taxi
                            </div>

                            <div className="hotelImages">
                                {data.photos?.map((photo, i) => (
                                    <div className="hotelImgWrapper" key={i}>
                                        <img
                                            src={photo}
                                            alt=""
                                            onClick={() => sliderHandler(i)}
                                            className="hotelImg"
                                        />
                                    </div>
                                ))}
                            </div>

                            <div className="hotelDetails">
                                <div className="hotelDetailsTexts">
                                    <div className="hotelDetailsTitle">
                                        <h2>Welcome To The {data.name}</h2>
                                    </div>
                                    <p className="hotelDetailsDesc">{data.desc}</p>
                                </div>

                                <div className="hotelDetailsPrice">
                                    <h3>Perfect for a {days}-Night Stay!</h3>
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>

                                    <div className="price">
                                        <b>${days * data.lowestPrice * options.room} </b>({days}{" "}
                                        Nights)
                                    </div>
                                    <button className="btn">Reserve or Book Now!</button>
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </Container>
        </div>
    );
};

export default Hotel;
