import React, { useState, useEffect, useRef } from "react";
import "../../SCSS/Forms/letsChat.scss";
// note: install with `npm install react-phone-number-input`
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { IMG_PREFIX, IMG_ILLUSTRATION } from "../constants";

const LetsChat = () => {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [errors, setErrors] = useState({});
  const containerRef = useRef(null);

  const validate = () => {
    const errs = {};
    if (!name.trim()) errs.name = "Name is required";

    if (!mobile.trim()) {
      errs.mobile = "Mobile number is required";
    } else if (!isValidPhoneNumber(mobile)) {
      errs.mobile = "Enter a valid phone number";
    }

    if (!email.trim()) {
      errs.email = "Email is required";
    } else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      errs.email = "Enter a valid email address";
    }

    if (!message.trim()) errs.message = "Message cannot be empty";

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    // submit logic here - e.g. API call
    console.log({ name, mobile, email, message });
    alert("Form submitted (see console)");

    // reset
    setName("");
    setMobile("");
    setEmail("");
    setMessage("");
    setErrors({});
  };

  // generate abstract blocks background on mount
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const count = Math.floor(Math.floor(80 * 1.5) * 0.5); // back down by 50% -> 60
    const blocks = [];
    const createBlock = () => {
      const div = document.createElement("div");
      div.className = "block";
      // random size between 0.5 and 3 scale of base 50
      const base = 50;
      const scale = Math.random() * (3 - 0.5) + 0.5;
      const size = base * scale;
      div.style.width = `${size}px`;
      div.style.height = `${size}px`;
      div.style.left = `${Math.random() * 100}%`;
      div.style.top = `${Math.random() * 100}%`;
      // position without rotation
      div.style.transform = `translate(-50%, -50%)`;
      container.appendChild(div);
      blocks.push(div);
    };
    for (let i = 0; i < count; i++) createBlock();

    // interaction: move any blocks within radius when mouse moves
    const radius = 150; // increase interaction radius by 50%
    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const mx = e.clientX - rect.left;
      const my = e.clientY - rect.top;
      blocks.forEach((b) => {
        const bx = b.offsetLeft + b.offsetWidth / 2;
        const by = b.offsetTop + b.offsetHeight / 2;
        const dx = mx - bx;
        const dy = my - by;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < radius) {
          const angle = Math.atan2(dy, dx);
          const move = (radius - dist) * 0.075; // increase move magnitude by 50%
          b.style.transition = "transform 0.13s"; // faster transition (~50% faster)
          b.style.transform = `translate(-50%, -50%) translate(${Math.cos(angle) * move}px, ${Math.sin(angle) * move}px)`;
        } else {
          // reset to original position
          b.style.transition = "transform 0.27s"; // faster return
          b.style.transform = `translate(-50%, -50%)`;
        }
      });
    };
    container.addEventListener("mousemove", handleMouseMove);

    // periodic random horizontal nudges
    const randomMove = () => {
      const countToMove = Math.floor(Math.random() * 2) + 3; // 3 or 4 squares
      for (let i = 0; i < countToMove; i++) {
        const idx = Math.floor(Math.random() * blocks.length);
        const b = blocks[idx];
        if (!b) continue;
        const direction = Math.random() < 0.5 ? -1 : 1;
        const offset = 20 * direction;
        b.style.transition = "transform 0.5s";
        b.style.transform = `translate(-50%, -50%) translateX(${offset}px)`;
        // revert after short duration
        setTimeout(() => {
          b.style.transition = "transform 0.5s";
          b.style.transform = `translate(-50%, -50%)`;
        }, 800);
      }
    };

    const intervalId = setInterval(randomMove, Math.random() * 1000 + 1000); // 1-2s

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      clearInterval(intervalId);
      blocks.forEach((b) => {
        if (b.parentNode === container) container.removeChild(b);
      });
    };
  }, []);

  return (
    <div className="lets-chat-container" ref={containerRef}>
      <form
        className="lets-chat-form"
        onSubmit={handleSubmit}
        noValidate
        netlify
      >
        <h1>Wanna Chat?</h1>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {errors.name && <span className="error">{errors.name}</span>}
        </div>

        <div className="form-group">
          <label>Mobile</label>
          <PhoneInput value={mobile} onChange={setMobile} defaultCountry="US" />
          {errors.mobile && <span className="error">{errors.mobile}</span>}
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>

        <div className="form-group">
          <label>Message</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          {errors.message && <span className="error">{errors.message}</span>}
        </div>

        <button type="submit" className="submit-btn">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default LetsChat;
