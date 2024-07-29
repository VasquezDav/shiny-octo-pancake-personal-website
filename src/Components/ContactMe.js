import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Notification from "./PopUps/Notification";

function ContactMe() {
  const form = useRef();
  const [notif, setNotif] = useState(false);
  const [message, setMessage] = useState();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_1m18g94", "template_v4ed2wf", form.current, {
        publicKey: "xRL_NGpKEoJUqrWot",
      })
      //template_v4ed2wf

      .then(
        () => {
          console.log("SUCCESS!");
          setNotif(true);
          setMessage("Successfully Sent Email");
          form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
          setNotif(true);
          setMessage("Failed to send Email Please Try again");
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
      <Notification
        trigger={notif}
        setTrigger={setNotif}
        message={message}
        duration={100}
      ></Notification>
      {/* {notif ? (
        
      ) : (
        ""
      )} */}
    </div>
  );
}

export default ContactMe;
