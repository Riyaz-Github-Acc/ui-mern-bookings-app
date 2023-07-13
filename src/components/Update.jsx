import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

import { storage } from "../Firebase";
import imagePlaceholder from "../assets/general/img-placeholder.png";

import "../pages/register/Register.scss";
import { AuthContext } from "../context/AuthContext";

const Update = () => {
  const { user, dispatch } = useContext(AuthContext);

  const [userUpdate, setUserUpdate] = useState({
    userName: user?.userName,
    email: user?.email,
    country: user?.country,
    city: user?.city,
    phone: user?.phone,
    img: user?.img,
  });

  const [error, setError] = useState(null);

  const [fileUpload, setFileUpload] = useState("");
  const [isUploading, setIsUploading] = useState(null);
  const [isFileSelected, setIsFileSelected] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserUpdate((userUpdate) => ({ ...userUpdate, [name]: value }));
  };

  const navigate = useNavigate();

  const { id } = useParams();

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      let img = "";
      if (isFileSelected) {
        img = await uploadFile();
      }

      const updateUser = {
        ...userUpdate,
        img,
      };

      const res = await axios.put(
        `https://hotel-booking-app-api.onrender.com/api/users/${id}`,
        updateUser
      );
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
        value={userUpdate?.userName}
        onChange={handleInputChange}
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={userUpdate?.email}
        onChange={handleInputChange}
      />

      <input
        type="text"
        name="country"
        placeholder="Country"
        value={userUpdate?.country}
        onChange={handleInputChange}
      />

      <input
        type="text"
        name="city"
        placeholder="City"
        value={userUpdate?.city}
        onChange={handleInputChange}
      />

      <input
        type="tel"
        name="phone"
        placeholder="Phone Number"
        value={userUpdate?.phone}
        onChange={handleInputChange}
      />

      <div className="profile-pic">
        <div className="photo">Update Photo</div>
        <label htmlFor="img">
          <img
            src={fileUpload ? URL.createObjectURL(fileUpload) : userUpdate?.img}
            alt=""
          />
        </label>
        <input
          type="file"
          id="img"
          name="img"
          // value={userUpdate?.img}
          onChange={(e) => {
            setFileUpload(e.target.files[0]);
            setIsFileSelected(true);
          }}
        />
      </div>

      {error && <div>{error.message}</div>}
      <button className="btn" type="submit" onClick={handleUpdate}>
        Update
      </button>
    </div>
  );
};

export default Update;
