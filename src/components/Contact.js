import "../css/Contact.css";
import ContactItem from "./ContactItem";
import ContactForm from "./ContactForm";
const Contact = () => {
  return (
    <>
      <div className="container">
        <div className="Contact">
          <h1 className="headerTitle">Kontakt</h1>
          <div className="contactWrapper">
            <ContactItem />
            <ContactForm />
          </div>
        </div>
      </div>
      <iframe
        className="googleMaps"
        title="google_maps"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d161806.47747102266!2d17.741480735804167!3d50.67862596006726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47105306456db34b%3A0x25c66487400c346e!2sOpole!5e0!3m2!1spl!2spl!4v1697223066667!5m2!1spl!2spl"
        width="100%"
        height="450"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"></iframe>
    </>
  );
};
export default Contact;
