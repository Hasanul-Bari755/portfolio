import "./Form.css";
import React from "react";
import emailjs from "emailjs-com";

const Form = () => {
  const sendEmail = (event) => {
    event.preventDefault();
    emailjs
      .sendForm(
        "service_ugguij9",
        "template_mwl1ezj",
        event.target,
        "Tou2h7HGAKpQu9XH7"
      )
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  return (
    <div className="form">
      <form onSubmit={sendEmail}>
        <label>Your Name</label>
        <input type="text" name="name"></input>
        <label>Email</label>
        <input type="email" name="email"></input>
        <label>Subject</label>
        <input type="text" name="subject"></input>
        <label>Message</label>
        <textarea
          name="message"
          rows="6"
          placeholder="Type your message here"
        ></textarea>
        <button className="btn">Send</button>
      </form>
    </div>
  );
};

export default Form;
