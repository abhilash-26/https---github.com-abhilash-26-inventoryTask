import React from "react";
import "../css/navbar.css";
import AddIcon from "@mui/icons-material/Add";
import InventoryIcon from "@mui/icons-material/Inventory";
import { useLocation, Link } from "react-router-dom";

function Navbar() {
  const location = useLocation();
  return (
    <div className="navbar_container">
      <h3>eShop Admin</h3>

      <p className="menu">
        <Link
          to="/add-product"
          className={
            location.pathname === "/add-product" ? "link_active" : "link"
          }
        >
          <AddIcon
            className={
              location.pathname === "/add-product"
                ? "icon_nav_active"
                : "icon_nav"
            }
          />
          Add product
        </Link>
      </p>

      <p className="menu">
        <Link
          to="/view-product"
          className={
            location.pathname === "/view-product" ? "link_active" : "link"
          }
        >
          <InventoryIcon
            className={
              location.pathname === "/view-product"
                ? "icon_nav_active"
                : "icon_nav"
            }
          />
          Products
        </Link>
      </p>
    </div>
  );
}

export default Navbar;
