// Components
import { Container } from "../../components/componentsIndex";

// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBed,
    faCar,
    faPlane,
    faTaxi,
    faTrainSubway,
} from "@fortawesome/free-solid-svg-icons";

// CSS
import "./Header.scss";

const Header = () => {
    return (
        <header>
            <Container>
                <nav>
                    <div className="logo">
                        <h1>MERN Bookings App</h1>
                    </div>

                    <div className="auth">
                        <button className="btn navBtn">Register</button>
                        <button className="btn navBtn">Login</button>
                    </div>
                </nav>

                <menu>
                    <div className="link active">
                        <FontAwesomeIcon icon={faBed} />
                        <span>Hotels</span>
                    </div>

                    <div className="link">
                        <FontAwesomeIcon icon={faPlane} />
                        <span>Flights</span>
                    </div>

                    <div className="link">
                        <FontAwesomeIcon icon={faCar} />
                        <span>Car Rentals</span>
                    </div>

                    <div className="link">
                        <FontAwesomeIcon icon={faTrainSubway} />
                        <span>Trains</span>
                    </div>

                    <div className="link">
                        <FontAwesomeIcon icon={faTaxi} />
                        <span>Airport Taxis</span>
                    </div>
                </menu>
            </Container>
        </header>
    );
};

export default Header;