import React from "react";

import Footer from "../childComponents/Footer";
import Form from "../childComponents/Form";
import HeroImage2 from "../childComponents/HeroImage2";
import Navbar from "../childComponents/Navbar";

const Contact = () => {
  return (
    <div>
      <Navbar></Navbar>
      <HeroImage2 heading="CONTACT" text="This is text"></HeroImage2>
      <Form></Form>
      <Footer></Footer>
    </div>
  );
};

export default Contact;
