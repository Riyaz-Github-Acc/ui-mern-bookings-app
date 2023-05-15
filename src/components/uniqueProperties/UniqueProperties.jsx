// Images
import img1 from "../../assets/home/unique_img-1.jpg";
import img2 from "../../assets/home/unique_img-2.jpg";
import img3 from "../../assets/home/unique_img-3.jpg";
import img4 from "../../assets/home/unique_img-4.jpg";

// CSS
import "./UniqueProperties.scss";

const UniqueProperties = () => {
  return (
    <div className="uniqueProperties">
      <div className="upItem">
        <img src={img1} alt="" className="upImg" />
        <span className="upName">Aparthotel Stare Miasto</span>
        <span className="upCity">Madrid</span>
        <span className="upPrice">
          Starting from <b>$120</b>
        </span>
        <div className="upRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>

      <div className="upItem">
        <img src={img2} alt="" className="upImg" />
        <span className="upName">Comfort Suites Airport</span>
        <span className="upCity">Austin</span>
        <span className="upPrice">
          Starting from <b>$140</b>
        </span>
        <div className="upRating">
          <button>9.3</button>
          <span>Exceptional</span>
        </div>
      </div>

      <div className="upItem">
        <img src={img3} alt="" className="upImg" />
        <span className="upName">Four Seasons Hotel</span>
        <span className="upCity">Lisbon</span>
        <span className="upPrice">
          Starting from <b>$99</b>
        </span>
        <div className="upRating">
          <button>8.8</button>
          <span>Excellent</span>
        </div>
      </div>

      <div className="upItem">
        <img src={img4} alt="" className="upImg" />
        <span className="upName">Hilton Garden Inn</span>
        <span className="upCity">Berlin</span>
        <span className="upPrice">
          Starting from <b>$105</b>
        </span>
        <div className="upRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
    </div>
  );
};

export default UniqueProperties;
