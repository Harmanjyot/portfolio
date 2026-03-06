import React, { useState, useEffect, useRef } from "react";
import "../../SCSS/Forms/letsChat.scss";
import axios from "axios";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";
import {
  IMG_PREFIX,
  IMG_ILLUSTRATION,
  POST_ENQUIRY,
  SPRING_CONFIG,
} from "../constants";

const MobileLetsChat = () => {
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    const payload = { name, mobile, email, enquiryTxt: message };
    try {
      const response = await axios.post(SPRING_CONFIG + POST_ENQUIRY, payload);
      console.log("Enquiry response", response.data);
      alert("Message sent successfully!");
    } catch (err) {
      console.error(err);
      alert("Failed to send message, please try again later.");
    }

    setName("");
    setMobile("");
    setEmail("");
    setMessage("");
    setErrors({});
  };

  // generate abstract blocks background on mount — no hover interaction on mobile
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const count = Math.floor(Math.floor(80 * 1.5) * 0.5);
    const blocks = [];
    const createBlock = () => {
      const div = document.createElement("div");
      div.className = "block";
      const base = 50;
      const scale = Math.random() * (3 - 0.5) + 0.5;
      const size = base * scale;
      div.style.width = `${size}px`;
      div.style.height = `${size}px`;
      div.style.left = `${Math.random() * 100}%`;
      div.style.top = `${Math.random() * 100}%`;
      div.style.transform = `translate(-50%, -50%)`;
      container.appendChild(div);
      blocks.push(div);
    };
    for (let i = 0; i < count; i++) createBlock();

    // periodic random horizontal nudges only — no mouse interaction
    const randomMove = () => {
      const countToMove = Math.floor(Math.random() * 2) + 3;
      for (let i = 0; i < countToMove; i++) {
        const idx = Math.floor(Math.random() * blocks.length);
        const b = blocks[idx];
        if (!b) continue;
        const direction = Math.random() < 0.5 ? -1 : 1;
        const offset = 20 * direction;
        b.style.transition = "transform 0.5s";
        b.style.transform = `translate(-50%, -50%) translateX(${offset}px)`;
        setTimeout(() => {
          b.style.transition = "transform 0.5s";
          b.style.transform = `translate(-50%, -50%)`;
        }, 800);
      }
    };

    const intervalId = setInterval(randomMove, Math.random() * 1000 + 1000);

    return () => {
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

export default MobileLetsChat;
