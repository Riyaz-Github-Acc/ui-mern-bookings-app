// Custom Hook
import useFetch from "../../hooks/useFetch";

// Images
import img1 from "../../assets/home/cat_img-1.jpeg";
import img2 from "../../assets/home/cat_img-2.jpeg";
import img3 from "../../assets/home/cat_img-3.jpeg";
import img4 from "../../assets/home/cat_img-4.jpeg";

// CSS
import "./TypesOfProperties.scss";

const TypesOfProperties = () => {
    const { data, loading } = useFetch("http://localhost:8000/api/hotels/countByType");

    const images = [img1, img2, img3, img4];

    return (
        <div className="typesOfProperties">
            {loading ? (
                "Loading Please Wait..."
            ) : (
                <>
                    {data &&
                        images.map((img, i) => (
                            <div className="typeOfPropItem" key={i}>
                                <img src={img} alt="" className="typeOfPropImg" />
                                <div className="typeOfPropTitles">
                                    <h3>{data[i]?.type}</h3>
                                    <h4>
                                        {data[i]?.count} {data[i]?.type}
                                    </h4>
                                </div>
                            </div>
                        ))}
                </>
            )}
        </div>
    );
};

export default TypesOfProperties;
