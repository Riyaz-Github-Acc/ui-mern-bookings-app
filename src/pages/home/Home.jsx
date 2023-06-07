// Layout
import { HomePageHeader } from "../../layout/index";

// Components
import {
  Container,
  FeaturedProperties,
  TypesOfProperties,
  UniqueProperties,
} from "../../components/index";

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
          <TypesOfProperties />
          <h2 className="propertyTitle">Stay At Our Top Unique Properties</h2>
          <UniqueProperties />
        </Container>
      </main>
    </div>
  );
};

export default Home;
