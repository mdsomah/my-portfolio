import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import WhatsAppWidget from "react-whatsapp-widget";
import "react-whatsapp-widget/dist/index.css";

const App = () => {
  return (
    <>
      <Header />
      <Main />
      <WhatsAppWidget
        phoneNumber="231770442816"
        textReplyTime="I will reply you shortly"
        message="Hello there! How can i help you?"
        companyName="Mesheal D. Somah Sr."
      />
      <Footer />
    </>
  );
};

export default App;
