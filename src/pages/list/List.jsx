/* eslint-disable no-unused-vars */
// React Hook
import { useState } from "react";

// Custom Hook
import useFetch from "../../hooks/useFetch";

// React Router Dom
import { useLocation } from "react-router-dom";

// Components
import { Container, SearchItem } from "../../components/ComponentsIndex";

// React Date Range
import { DateRange } from "react-date-range";
// Main CSS File
import "react-date-range/dist/styles.css";
// Theme CSS File
import "react-date-range/dist/theme/default.css";
// Date FNS
import { format } from "date-fns";

// CSS
import "./List.scss";

const List = () => {
    const location = useLocation();

    // Destination
    const [destination, setDestination] = useState(location.state.destination);

    // Date
    const [dates, setDates] = useState(location.state.dates);
    const [openDate, setOpenDate] = useState(false);

    // Options
    const [options, setOptions] = useState(location.state.options);

    // Min
    const [min, setMin] = useState(undefined);
    // Max
    const [max, setMax] = useState(undefined);

    // Fetch
    const { data, loading, error, reFetch } = useFetch(
        `http://localhost:8000/api/hotels?city=${destination}&min=${min || 1}&max=${max || 9999}`
    );

    // Click Handler Function
    const clickHandler = () => {
        reFetch();
    };

    return (
        <div className="list">
            <Container>
                <div className="listWrapper">
                    <div className="listSearch">
                        <h2 className="lsTitle">Search</h2>

                        <div className="lsItem">
                            <label className="lsItemTitle">Destination</label>
                            <input
                                type="text"
                                placeholder={destination}
                                onChange={(e) => setDestination(e.target.value)}
                                className="lsInput"
                            />
                        </div>

                        <div className="lsItem">
                            <label className="lsItemTitle">Check-In Date</label>
                            <span
                                onClick={() => {
                                    setOpenDate(!openDate);
                                }}
                                className="lsDate">{`${format(
                                dates[0].startDate,
                                "dd/MM/yyyy"
                            )} to ${format(dates[0].endDate, "dd/MM/yyyy")}`}</span>

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

                        <div className="lsItem">
                            <span className="lsItemTitle">Options</span>
                            <div className="optionsItem">
                                <label>
                                    Min Price <small>per night</small>
                                </label>
                                <input
                                    type="text"
                                    onChange={(e) => setMin(e.target.value)}
                                    className="optionsInput"
                                />
                            </div>

                            <div className="optionsItem">
                                <label>
                                    Max Price <small>per night</small>
                                </label>
                                <input
                                    type="text"
                                    onChange={(e) => setMax(e.target.value)}
                                    className="optionsInput"
                                />
                            </div>

                            <div className="optionsItem">
                                <label>Adult</label>
                                <input
                                    type="number"
                                    min={1}
                                    placeholder={options.adult}
                                    className="optionsInput"
                                />
                            </div>

                            <div className="optionsItem">
                                <label>Children</label>
                                <input
                                    type="number"
                                    min={0}
                                    placeholder={options.children}
                                    className="optionsInput"
                                />
                            </div>

                            <div className="optionsItem">
                                <label>Room</label>
                                <input
                                    type="number"
                                    min={1}
                                    placeholder={options.room}
                                    className="optionsInput"
                                />
                            </div>
                        </div>
                        <button className="btn" onClick={clickHandler}>
                            Search
                        </button>
                    </div>
                    <div className="listResult">
                        {loading ? (
                            "Loading Please Wait..."
                        ) : (
                            <>
                                {data.length === 0
                                    ? "No Results Found!"
                                    : data.map((item) => <SearchItem item={item} key={item._id} />)}
                            </>
                        )}
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default List;
