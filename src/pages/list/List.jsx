// React Hook
import { useState } from "react";

// React Router Dom
import { useLocation } from "react-router-dom";

// Components
import { Container, SearchItem } from "../../components/componentsIndex";

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
  const [date, setDate] = useState(location.state.date);
  const [openDate, setOpenDate] = useState(false);

  // Options
  const [selectOptions, setSelectOptions] = useState(location.state.selectOptions);

  return (
    <div className="list">
      <Container>
        <div className="listWrapper">
          <div className="listSearch">
            <h2 className="lsTitle">Search</h2>

            <div className="lsItem">
              <label className="lsItemTitle">Destination</label>
              <input type="text" placeholder={destination} className="lsInput" />
            </div>

            <div className="lsItem">
              <label className="lsItemTitle">Check-In Date</label>
              <span
                onClick={() => {
                  setOpenDate(!openDate);
                }}
                className="lsDate">{`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(
                date[0].endDate,
                "dd/MM/yyyy"
              )}`}</span>

              {openDate && (
                <DateRange
                  editableDateInputs={true}
                  onChange={(item) => setDate([item.selection])}
                  moveRangeOnFirstSelection={false}
                  ranges={date}
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
                <input type="text" className="optionsInput" />
              </div>

              <div className="optionsItem">
                <label>
                  Max Price <small>per night</small>
                </label>
                <input type="text" className="optionsInput" />
              </div>

              <div className="optionsItem">
                <label>Adult</label>
                <input
                  type="number"
                  min={1}
                  placeholder={selectOptions.adult}
                  className="optionsInput"
                />
              </div>

              <div className="optionsItem">
                <label>Children</label>
                <input
                  type="number"
                  min={0}
                  placeholder={selectOptions.children}
                  className="optionsInput"
                />
              </div>

              <div className="optionsItem">
                <label>Room</label>
                <input
                  type="number"
                  min={1}
                  placeholder={selectOptions.room}
                  className="optionsInput"
                />
              </div>
            </div>
            <button className="btn">Search</button>
          </div>
          <div className="listResult">
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default List;
