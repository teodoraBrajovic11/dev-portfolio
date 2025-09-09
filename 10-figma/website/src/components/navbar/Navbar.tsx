import { useState } from "react";
import { closeIcon, menuIcon } from "../../assets";
import "./navbar.css";

const Navbar = () => {
  const [active, setActive] = useState<boolean>();

  return (
    <>
      <nav>
        <a href="#" className="logo">
          Sound <span className="red">DZign</span>
        </a>
        <ul className="menu-items">
          <li>
            <a href="#">Course Details</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Testimonials</a>
          </li>
        </ul>
        <div className="menu-icon" onClick={() => setActive(true)}>
          <img src={menuIcon} alt="" />
        </div>
      </nav>
      <div className={`mobile-menu-container ${active ? "active" : ""}`}>
        <div className="close-icon" onClick={() => setActive(false)}>
          <img src={closeIcon} alt="" />
        </div>
      </div>
    </>
  );
};

export default Navbar;
