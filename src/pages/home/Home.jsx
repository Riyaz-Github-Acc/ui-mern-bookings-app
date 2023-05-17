// Layout
import { HomePageHeader } from "../../layout/LayoutIndex";

// Components
import {
    Container,
    FeaturedProperties,
    TypeOfProperties,
    UniqueProperties,
} from "../../components/ComponentsIndex";

// CSS
import "./Home.scss";

const Home = () => {
    return (
        <div className="home">
            <HomePageHeader />
            <main>
                <Container>
                    <FeaturedProperties />
                    <h2 className="propertyTitle">Browse By Property Type</h2>
                    <TypeOfProperties />
                    <h2 className="propertyTitle">Stay At Our Top Unique Properties</h2>
                    <UniqueProperties />
                </Container>
            </main>
        </div>
    );
};

export default Home;
