import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import "./navbar.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";

const Navbar = () => {
  const { user } = useContext(AuthContext); // Fetch user from context
  console.log("User data:", user);

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
            <img
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
