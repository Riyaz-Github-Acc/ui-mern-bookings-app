// Custom Hooks
import useFetch from "../../hooks/useFetch";

// Images
import img1 from "../../assets/home/feature_img-1.jpg";
import img2 from "../../assets/home/feature_img-2.jpg";
import img3 from "../../assets/home/feature_img-3.jpg";

// CSS
import "./FeaturedProperties.scss";

const FeaturedProperties = () => {
  const { data, loading } = useFetch(
    "http://localhost:8000/api/hotels/countByCity?cities=london,berlin,mumbai"
  );

  return (
    <div className="featuredProperties">
      {loading ? (
        "Loading please wait"
      ) : (
        <>
          <div className="featuredItem">
            <img src={img1} alt="" className="featuredImg" />
            <div className="featuredTitles">
              <h1>London</h1>
              <h2>{data[0]} properties</h2>
            </div>
          </div>

          <div className="featuredItem">
            <img src={img2} alt="" className="featuredImg" />
            <div className="featuredTitles">
              <h1>Berlin</h1>
              <h2>{data[1]} properties</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img src={img3} alt="" className="featuredImg" />
            <div className="featuredTitles">
              <h1>Mumbai</h1>
              <h2>{data[2]} properties</h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default FeaturedProperties;
