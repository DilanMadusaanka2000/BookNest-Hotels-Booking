import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import "./navbar.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import { useNavigate } from "react-router-dom";



const Navbar = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
   // Fetch user from context
  console.log("User data:", user);


  const handleImageClick = () => {

    const userDetails = {                     //create quarry
      username: user?.details?.username,
      email: user?.details?.email,
      country: user?.details?.country,
      city: user?.details?.city,
      phone: user?.details?.phone,
      img: user?.details?.img
    };

    const queryString = new URLSearchParams(userDetails).toString();   // pass quarry to variable

    //load profileEdit component

    navigate(`/profile/${queryString}`);  
  };



  // const ProfileImage = ({ user }) => {
  //   const navigate = useNavigate(); // Hook for navigation
  
  //   const handleImageClick = () => {
  //     navigate(`/profile/${user} || "default"}`); // Navigate to profile route
  //   };


  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <SearchOutlinedIcon />
        </div>
        <div className="items">
          <div className="item">
            <DarkModeOutlinedIcon className="icon" />
          </div>
          <div className="item">
            <span className="username">{user?.details?.username || "Guest"}</span> {/* Display username */}
          </div>
          <div className="item">
            <img onClick={handleImageClick}  //called function
              src={user?. details?.img ||"https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"}
              alt="Avatar"
              className="avatar"
            />
          </div>
        </div>
      </div>
    </div>
  );
};


export default Navbar;
