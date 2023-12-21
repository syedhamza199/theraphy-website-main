import Address from "../components/ContactComponents/Address";
import ContactBanner from "../components/ContactComponents/ContactBanner";
import ContactForm from "../components/ContactComponents/ContactForm";
import Footer from "../components/HomeComponents/Footer";
import Navbar from "../components/HomeComponents/Navbar";

const Contact = () => {
  return (
    <>
      <Navbar></Navbar>
      <ContactBanner></ContactBanner>
      <ContactForm></ContactForm>
      <Address></Address>
      <Footer></Footer>
    </>
  );
};

export default Contact;
