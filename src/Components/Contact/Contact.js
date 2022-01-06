import React from "react";
import styles from "./Contact.module.css";

const Contact = (props) => {
  return (
    <div className={styles.Contact}>
      <div className="container">
        <div className={styles.Flex}>
          <div className={styles.info}>
            <h2>Contact us</h2>
            <p>
              You can send a complaint if you have anything and you can fill out
              the form and also send your message
            </p>
          </div>

          <div className={styles.info}>
            <form>
              <input type="text" placeholder="Your Name..." />
              <input type="email" placeholder="Your Email...." />
              <textarea placeholder="Message"></textarea>
              <button type="submit">Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
