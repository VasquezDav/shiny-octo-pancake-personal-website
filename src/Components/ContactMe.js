import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

function ContactMe() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_1m18g94", "service_1m18g94", form.current, {
        publicKey: "xRL_NGpKEoJUqrWot",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <div className="contact-me" id="contact-me">
      <h1>Contact Me</h1>
      <div className="form-container">
        <form ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="user_name" required />
          <label>Email</label>
          <input type="email" name="user_email" required />
          <label>Message</label>
          <textarea name="message" required />
          <input type="submit" value="Send" />
        </form>
      </div>
    </div>
  );
}

export default ContactMe;
