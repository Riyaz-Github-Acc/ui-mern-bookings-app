// React
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

// Components
import { Container } from "../../components";
import { AuthContext } from "../../context/AuthContext";

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
  const { user, dispatch } = useContext(AuthContext);

  const navigate = useNavigate();

  const logoutHandler = (e) => {
    e.preventDefault();
    localStorage.removeItem("user");
    dispatch({ type: "LOGOUT" });
    navigate("/login");
  };

  return (
    <header>
      <Container>
        <nav>
          <Link to="/" className="logo">
            <h1>Hotel Booking App</h1>
          </Link>

          {user ? (
            <div className="loggedIn">
              <div className="userLogin">
                <Link to={`/update/${user?._id}`}>
                  <img src={user.img} alt="Avatar" className="userAvatar" />
                </Link>
              </div>
              <button className="logoutBtn btn" onClick={logoutHandler}>
                Logout
              </button>
            </div>
          ) : (
            <div className="auth">
              <Link to="/register">
                <button className="btn navBtn">Register</button>
              </Link>
              <Link to="/login">
                <button className="btn navBtn">Login</button>
              </Link>
            </div>
          )}
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
