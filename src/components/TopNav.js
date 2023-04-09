import React from "react";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Avatar from "../assets/avatar.png";
import "../css/topNav.css";
import { useSelector, useDispatch } from "react-redux";
import { closeNotification } from "../redux/features/notification";

function TopNav() {
  const dispatch = useDispatch();
  const notification = useSelector(
    (item) => item.notification.notificationBanner
  );
  const notificationMessage = useSelector((item) => item.notification.message);
  if (notification) {
    setTimeout(() => {
      dispatch(closeNotification());
    }, 10000);
  }
  return (
    <div className="top_nav_wrapper">
      {notification && (
        <div className="notification">{notificationMessage}</div>
      )}
      <NotificationsIcon className={notification ? "icon_active" : "icon"} />
      {notification && <p className="notification_count">1</p>}
      <img src={Avatar} alt="profile" />
    </div>
  );
}

export default TopNav;
