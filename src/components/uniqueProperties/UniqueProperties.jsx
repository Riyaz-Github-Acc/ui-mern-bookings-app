// Custom Hook
import useFetch from "../../hooks/useFetch";

// CSS
import "./UniqueProperties.scss";

const UniqueProperties = () => {
  const { data, loading } = useFetch(
    "https://hotel-booking-app-api.onrender.com/api/hotels?featured=true"
  );
  return (
    <div className="uniqueProperties">
      {loading ? (
        "Loading Please Wait..."
      ) : (
        <>
          {data.map((item) => (
            <div className="upItem" key={item._id}>
              <img src={item.photos[0]} alt="" className="upImg" />
              <span className="upName">{item.name}</span>
              <span className="upCity">{item.city}</span>
              <span className="upPrice">
                Starting from <b>${item.lowestPrice}</b>
              </span>
              {item.rating && (
                <div className="upRating">
                  <button>8.9</button>
                  <span>Excellent</span>
                </div>
              )}
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default UniqueProperties;
