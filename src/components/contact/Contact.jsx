import { useState } from "react";
import "./contact.scss";

export default function Contact() {
  
  const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  }

  return (
    <div className="contact" id="contact">
      <div className="left">
        <img 
          src="assets/shake.svg"
        />
      </div>
      <div className="right">
        <h1>Contact</h1>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="Email"></input>
          <textarea placeholder="Message"></textarea>
          <button>Send</button>
          {message && <span>Thanks, I'll reply ASAP :)</span>}
        </form>
      </div>
    </div>
  )
}
