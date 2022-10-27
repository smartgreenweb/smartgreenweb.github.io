import React from "react";
import PageSection from "./PageSection";

import contactImage from "../assets/contact-us.jpg";
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <PageSection
      name="contact"
      title="Contact"
      subtitle={`Do enquire with us`}
    >
      <div className="flex flex-col gap-8 mt-4 lg:flex-row">
        {/* left */}

        <div className="flex flex-col items-center justify-center w-full h-full p-4 lg:w-1/2">
          <img
            src={contactImage}
            alt="contact us"
            className="object-cover rounded-full shadow-lg w-72 h-72 shadow-niagra"
          />

        </div>

        {/* right */}

        <div className="w-full h-full p-4 text-2xl lg:w-1/2 rounded-xl font-worksans">

          <p className="py-3">Office</p>

          <p> Gudur gate</p>
          <p> Kandukur Mandal</p>
          <p> Rangareddy Dt. Hyderabad</p>
          <p> Telangana </p>

          <p className="py-3 pt-7">Enquiries</p>
          <p>hello@smartgreenaquaculture.com</p>


        </div>
      </div>
    </PageSection>
  );
};

export default Contact;
