import "./profile.scss";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import EditIcon from "@mui/icons-material/Edit";

const Profile = () => {
  const { user } = useContext(AuthContext);
  console.log("User data:", user);

  return (
    <div className="profile">
      <div className="profile-container">
        <div className="top">
          <div className="profile-img">
            {user?.img ? (
              <img src={user?. details?.img || "https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?ga=GA1.1.1455331517.1718636538&semt=ais_hybrid"} alt="Profile" />
            ) : (
              <AccountCircleIcon className="default-icon" />
            )}
          </div>
          <h2>{user?.details?.username || "User Name"}</h2>
          <span className={`role ${user?.details.isAdmin ? "admin" : "user"}`}>
            {user?.isAdmin ? "Admin" : "User"}
          </span>
          <button className="edit-btn">
            <EditIcon /> Edit Profile
          </button>
        </div>

        <div className="bottom">
          <div className="info">
            <p><strong>Email:</strong> {user?.details?.email || "Not Available"}</p>
            <p><strong>Country:</strong> {user?.details?.country || "Not Available"}</p>
            <p><strong>City:</strong> {user?.details?.city || "Not Available"}</p>
            <p><strong>Phone:</strong> {user?.details?.phone || "Not Available"}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
