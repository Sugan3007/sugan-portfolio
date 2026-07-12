import "./Contact.css";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import {
  FiMail,
  FiMapPin,
  FiGithub,
  FiLinkedin,
  FiInstagram,
  FiSend,
} from "react-icons/fi";

function Contact() {

  const form = useRef();

const [loading, setLoading] = useState(false);

const sendEmail = (e) => {

  e.preventDefault();

  setLoading(true);

  emailjs
    .sendForm(
      "service_555urtu",
      "template_i4v5wca",
      form.current,
      "ffJJGB5G3m7w6pZz3"
    )

    .then(() => {

      alert("✅ Message sent successfully!");

      form.current.reset();

      setLoading(false);

    })

    .catch(() => {

      alert("❌ Failed to send message.");

      setLoading(false);

    });

};
  return (
    <section id="contact" className="contact">

      <div className="container">

        <span className="section-tag">
          CONTACT
        </span>

        <h2 className="section-title">
          Let's Work Together
        </h2>

        <p className="section-description">
          I'm always open to internships, freelance work,
          collaborations and exciting opportunities.
        </p>

        <div className="contact-container">

         <div className="contact-info">

  {/* Availability */}

  <div className="availability-card">

    <span className="status-dot"></span>

    Available for Internship

  </div>

  {/* Email */}

  <div className="contact-card">

    <FiMail />

    <div>

      <h4>Email</h4>

      <p>suganthabalanm3007@gmail.com</p>

    </div>

  </div>

  {/* Instagram */}

  <div className="contact-card">

    <FiInstagram />

    <div>

      <h4>Instagram</h4>

      <p>@classy_sugan_</p>

    </div>

  </div>

  {/* Location */}

  <div className="contact-card">

    <FiMapPin />

    <div>

      <h4>Location</h4>

      <p>Sankaran Kovil,Tamil Nadu, India</p>

    </div>

  </div>

  {/* Social Icons */}

  <div className="contact-social">

    <a
      href="https://github.com/Sugan3007"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FiGithub />
    </a>

    <a
      href="https://www.linkedin.com/in/sugantha-balan-m-0630a9357?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FiLinkedin />
    </a>

    <a
      href="https://www.instagram.com/classy_sugan_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
      target="_blank"
      rel="noopener noreferrer"
    >
      <FiInstagram />
    </a>

  </div>

</div>
            

          {/* RIGHT */}

         <form
  ref={form}
  onSubmit={sendEmail}
  className="contact-form"
>

            <input
  type="text"
  name="user_name"
  placeholder="Your Name"
  required
/>
<input
  type="email"
  name="user_email"
  placeholder="Your Email"
  required
/>
           <input
  type="text"
  name="subject"
  placeholder="Subject"
  required
/>

           <textarea
  name="message"
  rows="6"
  placeholder="Your Message"
  required
></textarea>

          <button
  type="submit"
  disabled={loading}
>

  <FiSend />

  {loading ? "Sending..." : "Send Message"}

</button>

          </form>

        </div>

      </div>

    </section>
  );
}

export default Contact;