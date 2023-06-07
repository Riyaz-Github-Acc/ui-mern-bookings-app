import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./Login.scss";

const Login = () => {
  const [credentials, setCredentials] = useState({
    userName: undefined,
    password: undefined,
  });

  const { loading, error, dispatch } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post(
        "http://localhost:8000/api/auth/login",
        credentials
      );
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });
      navigate("/");
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
    }
  };

  return (
    <div className="login">
      <input
        type="text"
        id="userName"
        placeholder="User Name"
        onChange={handleInputChange}
      />
      <input
        type="password"
        id="password"
        placeholder="Password"
        onChange={handleInputChange}
      />
      <button disabled={loading} className="btn" onClick={handleLogin}>
        Submit
      </button>
      {error && <span>{error.message}</span>}
    </div>
  );
};

export default Login;
