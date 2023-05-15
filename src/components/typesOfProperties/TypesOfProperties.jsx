// Images
import img1 from "../../assets/home/cat_img-1.jpeg";
import img2 from "../../assets/home/cat_img-2.jpeg";
import img3 from "../../assets/home/cat_img-3.jpeg";
import img4 from "../../assets/home/cat_img-4.jpeg";

// CSS
import "./TypesOfProperties.scss";

const TypesOfProperties = () => {
  return (
    <div className="typesOfProperties">
      <div className="typeOfPropItem">
        <img src={img1} alt="" className="typeOfPropImg" />
        <div className="typeOfPropTitles">
          <h3>Hotels</h3>
          <h4>233 hotels</h4>
        </div>
      </div>
      <div className="typeOfPropItem">
        <img src={img2} alt="" className="typeOfPropImg" />
        <div className="typeOfPropTitles">
          <h3>Apartments</h3>
          <h4>2331 hotels</h4>
        </div>
      </div>
      <div className="typeOfPropItem">
        <img src={img3} alt="" className="typeOfPropImg" />
        <div className="typeOfPropTitles">
          <h3>Resorts</h3>
          <h4>2331 hotels</h4>
        </div>
      </div>
      <div className="typeOfPropItem">
        <img src={img4} alt="" className="typeOfPropImg" />
        <div className="typeOfPropTitles">
          <h3>Villas</h3>
          <h4>2331 hotels</h4>
        </div>
      </div>
    </div>
  );
};

export default TypesOfProperties;
