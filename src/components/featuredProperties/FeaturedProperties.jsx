// Images
import img1 from "../../assets/home/feature_img-1.jpg";
import img2 from "../../assets/home/feature_img-2.jpg";
import img3 from "../../assets/home/feature_img-3.jpg";

// CSS
import "./FeaturedProperties.scss";

const FeaturedProperties = () => {
  return (
    <div className="featuredProperties">
      <div className="featuredItem">
        <img src={img1} alt="" className="featuredImg" />
        <div className="featuredTitles">
          <h1>Dublin</h1>
          <h2>123 properties</h2>
        </div>
      </div>

      <div className="featuredItem">
        <img src={img2} alt="" className="featuredImg" />
        <div className="featuredTitles">
          <h1>Reno</h1>
          <h2>533 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img src={img3} alt="" className="featuredImg" />
        <div className="featuredTitles">
          <h1>Austin</h1>
          <h2>532 properties</h2>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProperties;
