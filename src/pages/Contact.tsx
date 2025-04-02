import { useNavigate } from "react-router-dom";

const Contact = () => {
    const navigate=useNavigate()
  return (
    <div>
      <h1>This Is Contact</h1>
      <div className="contact_button">
        <button onClick={()=>navigate('contactInfo')}>Contact Info</button>
        <button onClick={()=>navigate('contactForm')}>Contact Form</button>
        
      </div>
    </div>
  );
};

export default Contact;
