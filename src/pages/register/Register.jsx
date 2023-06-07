import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

import { storage } from "../../Firebase";
import imagePlaceholder from "../../assets/general/img-placeholder.png";

import "./Register.scss";

const Register = () => {
  const [user, setUser] = useState({
    userName: "",
    email: "",
    country: "",
    city: "",
    phone: "",
    password: "",
    img: "",
  });

  const [error, setError] = useState(null);

  const [fileUpload, setFileUpload] = useState("");
  const [isUploading, setIsUploading] = useState(null);
  const [isFileSelected, setIsFileSelected] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((user) => ({ ...user, [name]: value }));
  };

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      let img = "";
      if (isFileSelected) {
        img = await uploadFile();
      }

      const newUser = {
        ...user,
        img,
      };

      const res = await axios.post(
        "https://hotel-booking-app-api.onrender.com/api/auth/register",
        newUser
      );
      navigate("/login");
    } catch (err) {
      setError(err.res.data);
    }
  };

  const uploadFile = () => {
    return new Promise((resolve, reject) => {
      const fileName = new Date().getTime() + fileUpload.name;
      const storageRef = ref(storage, `usersAvatar/${fileName}`);

      const uploadTask = uploadBytesResumable(storageRef, fileUpload);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setIsUploading(progress);
        },
        (error) => {
          console.log(error);
          reject(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            resolve(downloadURL);
          });
        }
      );
    });
  };

  return (
    <div className="register">
      <input
        type="text"
        name="userName"
        placeholder="User Name"
        value={user.userName}
        onChange={handleInputChange}
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={user.email}
        onChange={handleInputChange}
      />

      <input
        type="text"
        name="country"
        placeholder="Country"
        value={user.country}
        onChange={handleInputChange}
      />

      <input
        type="text"
        name="city"
        placeholder="City"
        value={user.city}
        onChange={handleInputChange}
      />

      <input
        type="tel"
        name="phone"
        placeholder="Phone Number"
        value={user.phone}
        onChange={handleInputChange}
      />

      <input
        type="password"
        name="password"
        placeholder="Password"
        value={user.password}
        onChange={handleInputChange}
      />

      <div className="profile-pic">
        <div className="photo">Choose Photo</div>
        <label htmlFor="img">
          <img
            src={
              fileUpload ? URL.createObjectURL(fileUpload) : imagePlaceholder
            }
            alt=""
          />
        </label>
        <input
          type="file"
          id="img"
          name="img"
          value={user.img}
          onChange={(e) => {
            setFileUpload(e.target.files[0]);
            setIsFileSelected(true);
          }}
        />
      </div>

      {error && <div>{error.message}</div>}
      <button className="btn" type="submit" onClick={handleRegister}>
        Register
      </button>
    </div>
  );
};

export default Register;
