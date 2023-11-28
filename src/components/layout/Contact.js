import React from "react";
import SectionHeader from "./SectionHeader";

function Contact() {
  return (
    <section className="text-center my-8" id="contact">
      <SectionHeader subHeader={"Don't hesitate"} mainHeader={"Contact us"} />
      <div className="mt-8">
        <a className="text-4xl underline text-gray-500" href="tel:+46738123123">
          +46 738 123 123
        </a>
      </div>
    </section>
  );
}

export default Contact;
