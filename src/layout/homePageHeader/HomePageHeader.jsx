// React Hooks
import { useContext, useState } from "react";

// React Router Dom
import { useNavigate } from "react-router-dom";

// Context
import { SearchContext } from "../../context/SearchContex";

// React Date Range
import { DateRange } from "react-date-range";
// Main CSS File
import "react-date-range/dist/styles.css";
// Theme CSS File
import "react-date-range/dist/theme/default.css";
// Date FNS
import { format } from "date-fns";

// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed, faCalendarDays, faPerson } from "@fortawesome/free-solid-svg-icons";

// Components
import { Container } from "../../components/ComponentsIndex";

// CSS
import "./HomePageHeader.scss";

const HomePageHeader = () => {
    // Destination
    const [destination, setDestination] = useState("");

    // Date Picker
    const [openDate, setOpenDate] = useState(false);

    const [dates, setDates] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: "selection",
        },
    ]);

    // People
    const [options, setOptions] = useState({
        adult: 1,
        children: 0,
        room: 1,
    });

    const counterHandler = (name, operation) => {
        setOptions((prev) => {
            return {
                ...prev,
                [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
            };
        });
    };

    const [openOptions, setOpenOptions] = useState(false);

    // Search
    const navigate = useNavigate();

    // Context
    const { dispatch } = useContext(SearchContext);

    const searchHandler = () => {
        dispatch({ type: "NEW_SEARCH", payload: { destination, dates, options } });
        navigate("/hotels", { state: { destination, dates, options } });
    };

    return (
        <div className="homePageHeader">
            <header>
                <Container>
                    <div className="top">
                        <h1 className="title">A Lifetime of Discounts? It&apos;s Genius.</h1>
                        <p className="desc">
                            Get rewarded for your travels - Unlock instant savings of
                            <b> 10% </b>or more with a<b> Free MERN Bookings App Account</b>
                        </p>
                        <button className="btn">Sign In / Register</button>
                    </div>

                    <div className="bottom">
                        <div className="searchField">
                            <div className="searchItem">
                                <FontAwesomeIcon icon={faBed} className="icon" />
                                <input
                                    type="text"
                                    placeholder="Where are you going?"
                                    className="searchInput"
                                    onChange={(e) => {
                                        setDestination(e.target.value);
                                    }}
                                />
                            </div>

                            <div className="searchItem">
                                <FontAwesomeIcon icon={faCalendarDays} className="icon" />
                                <span
                                    className="searchText"
                                    onClick={() => {
                                        setOpenDate(!openDate);
                                    }}
                                    style={{ cursor: "pointer" }}>
                                    {`${format(dates[0].startDate, "dd/MM/yyyy")} to ${format(
                                        dates[0].endDate,
                                        "dd/MM/yyyy"
                                    )}`}
                                </span>

                                {openDate && (
                                    <DateRange
                                        editableDateInputs={true}
                                        onChange={(item) => setDates([item.selection])}
                                        moveRangeOnFirstSelection={false}
                                        ranges={dates}
                                        minDate={new Date()}
                                        className="datePicker"
                                    />
                                )}
                            </div>

                            <div className="searchItem">
                                <FontAwesomeIcon icon={faPerson} className="icon" />
                                <span
                                    className="searchText"
                                    onClick={() => {
                                        setOpenOptions(!openOptions);
                                    }}
                                    style={{ cursor: "pointer" }}>
                                    {`${options.adult} Adult · ${options.children}  Children · ${options.room} Room`}
                                </span>

                                {openOptions && (
                                    <div className="options">
                                        <div className="optionItem">
                                            <span className="name">Adult</span>
                                            <div className="counterWrapper">
                                                <button
                                                    className="counterBtn"
                                                    onClick={() => counterHandler("adult", "d")}
                                                    disabled={options.adult <= 1}>
                                                    -
                                                </button>
                                                <span className="counter">{options.adult}</span>
                                                <button
                                                    className="counterBtn"
                                                    onClick={() => counterHandler("adult", "i")}>
                                                    +
                                                </button>
                                            </div>
                                        </div>

                                        <div className="optionItem">
                                            <span className="name">Children</span>
                                            <div className="counterWrapper">
                                                <button
                                                    className="counterBtn"
                                                    onClick={() => counterHandler("children", "d")}
                                                    disabled={options.children <= 0}>
                                                    -
                                                </button>
                                                <span className="counter">{options.children}</span>
                                                <button
                                                    className="counterBtn"
                                                    onClick={() => counterHandler("children", "i")}>
                                                    +
                                                </button>
                                            </div>
                                        </div>

                                        <div className="optionItem">
                                            <span className="name">Room</span>
                                            <div className="counterWrapper">
                                                <button
                                                    className="counterBtn"
                                                    onClick={() => counterHandler("room", "d")}
                                                    disabled={options.room <= 1}>
                                                    -
                                                </button>
                                                <span className="counter">{options.room}</span>
                                                <button
                                                    className="counterBtn"
                                                    onClick={() => counterHandler("room", "i")}>
                                                    +
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>

                            <div className="searchItem">
                                <button className="btn" onClick={searchHandler}>
                                    Search
                                </button>
                            </div>
                        </div>
                    </div>
                </Container>
            </header>
        </div>
    );
};

export default HomePageHeader;
