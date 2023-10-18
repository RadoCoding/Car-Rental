import React from "react";
import { FaLocationDot, FaRegEnvelope, FaPhone } from "react-icons/fa6";
const ContactItem = () => {
  return (
    <div className="left-contact">
      <div className="localization">
        <FaLocationDot size="40" className="iconContact" />
        Opole{" "}
      </div>
      <div className="email">
        <FaRegEnvelope size={40} className="iconContact" />
        rentcars@gmail.com
      </div>
      <div className="phone">
        <FaPhone size="40" className="iconContact" />
        +48 777 888 000
      </div>
    </div>
  );
};
export default ContactItem;
