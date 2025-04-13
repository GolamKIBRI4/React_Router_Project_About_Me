import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();
  return (
    <div className="contact_button">
      <button onClick={() => navigate("contactInfo")}>Contact Info</button>
      <button onClick={() => navigate("contactForm")}>Contact Form</button>
    </div>
  );
};

export default Contact;
