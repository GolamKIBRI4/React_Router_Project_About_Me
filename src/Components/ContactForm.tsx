const ContactForm = () => {
  return (
    <div>
      <form className="contactForm">
        <input type="text" placeholder="Name" />
        <br />
        <input type="email" placeholder="Email" />
        <br />
        <textarea placeholder="message"></textarea>
        <br />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default ContactForm;
