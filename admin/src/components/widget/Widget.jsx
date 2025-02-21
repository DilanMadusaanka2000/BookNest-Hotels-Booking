import { useState, useEffect } from "react";
import axios from "axios"; // Import axios for API requests
import "./widget.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";

const Widget = ({ type }) => {
  const [userCount, setUserCount] = useState(0);
  const [hotelCount, setHotelCount] = useState(0);

  const amount = type === "user" ? userCount : type === "hotels" ? hotelCount : 0;

  useEffect(() => {
    if (type === "user") {
      axios
        .get("http://localhost:8800/api/users")
        .then((response) => {
          console.log("Users API Response:", response.data);
          setUserCount(response.data.length);
        })
        .catch((error) => {
          console.error("Error fetching users:", error);
        });
    } else if (type === "hotels") {
      
      axios
        .get("http://localhost:8800/api/hotel/count")
        .then((response) => {
          console.log("Hotels API Response:", response.data);
          setHotelCount(response.data.length);
        })
        .catch((error) => {
          console.error("Error fetching hotels:", error);
        });
    }
  }, [type]);
  let data = {}; // Initialize data as an empty object to avoid undefined errors
  
  switch (type) {
    case "user":
      data = {
        title: "USERS",
        isMoney: false,
        link: "See all users",
        icon: (
          <PersonOutlinedIcon
            className="icon"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          />
        ),
      };
      break;
    case "hotels":
      data = {
        title: "HOTELS", // Ensure this is the correct label
        isMoney: false,
        link: "See all hotels",
        icon: (
          <ShoppingCartOutlinedIcon
            className="icon"
            style={{
              backgroundColor: "rgba(218, 165, 32, 0.2)",
              color: "goldenrod",
            }}
          />
        ),
      };
      break;
    case "earning":
      data = {
        title: "EARNINGS",
        isMoney: true,
        link: "View net earnings",
        icon: (
          <MonetizationOnOutlinedIcon
            className="icon"
            style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
          />
        ),
      };
      break;
    
    default:
      data = {
        title: "test",
        isMoney: false,
        link: "Check details",
        icon: null,
      };
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">{amount}</span> {/* Display the relevant count */}
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUpIcon />
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;
