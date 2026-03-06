import React, { useState } from "react";
import "../../SCSS/NavBar/MobileNav.scss";
import { useNavigate } from "react-router-dom";

const MobileNavComponent = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleBurgerClick = () => {
    setMenuOpen(!menuOpen);
  };

  const handleMenuItemClick = (callback) => {
    callback();
    setMenuOpen(false);
  };

  const handleAboutMeClick = () => {
    const aboutElement = document.querySelector(".about-container");
    if (aboutElement) {
      aboutElement.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = "/#about";
    }
  };

  const handleChatClick = () => {
    const chatElement = document.querySelector(".lets-chat-container");
    if (chatElement) {
      chatElement.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = "/#chat";
    }
  };

  const handleHomeClick = () => {
    if (window.location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/");
    }
  };

  const menuItems = [
    { label: "Home", action: handleHomeClick },
    { label: "About Me", action: handleAboutMeClick },
    {
      label: "Experience",
      action: () => (window.location.href = "/experience"),
    },
    { label: "Projects", action: () => (window.location.href = "/projects") },
    { label: "Let's Chat!", action: handleChatClick, special: true },
  ];

  return (
    <div className="mobile-nav-component">
      <div
        className={`burger-menu ${menuOpen ? "active" : ""}`}
        onClick={handleBurgerClick}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {menuOpen && (
        <div className="menu-overlay" onClick={handleBurgerClick}></div>
      )}

      <div className={`floating-menu ${menuOpen ? "active" : ""}`}>
        {menuItems.map((item, index) => (
          <div
            key={index}
            className={`menu-circle ${item.special ? "special" : ""}`}
            style={{ "--index": index }}
            onClick={() => handleMenuItemClick(item.action)}
          >
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MobileNavComponent;
