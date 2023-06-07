// Components
import { Container, MailList } from "../../components";

// CSS
import "./Footer.scss";

const Footer = () => {
  return (
    <footer>
      <MailList />
      <div className="footerNav">
        <Container>
          <div className="footerNavItems">
            <div className="link">Countries</div>
            <div className="link">Regions</div>
            <div className="link">Cities</div>
            <div className="link">Districts</div>
            <div className="link">Airports</div>
            <div className="link">Hotels</div>
            <div className="link">Places of interest</div>
          </div>

          <div className="footerNavItems">
            <div className="link">Homes</div>
            <div className="link">Apartments</div>
            <div className="link">Resorts</div>
            <div className="link">Villas</div>
            <div className="link">Hostels</div>
            <div className="link">B&Bs</div>
            <div className="link">Guest houses</div>
          </div>
          <div className="footerNavItems">
            <div className="link">Unique places to stay</div>
            <div className="link"> All destinations</div>
            <div className="link">All flight destinations</div>
            <div className="link">Discover</div>
            <div className="link">Reviews</div>
          </div>
          <div className="footerNavItems">
            <div className="link">Car rental</div>
            <div className="link">Flight finder</div>
            <div className="link">Restaurant reservations</div>
          </div>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
