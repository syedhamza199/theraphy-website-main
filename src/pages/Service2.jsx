import Navbar from "../components/HomeComponents/Navbar";
import Service2Banner from "../components/Service2Components/Service2Banner";
import Service2Features from "../components/Service2Components/Service2Features";
import Service2Section from "../components/Service2Components/Service2Section";
import ServiceFooter from "../components/ServicesComponents/ServiceFooter";

const Service2 = () => {
  return (
    <>
      <Navbar></Navbar>
      <Service2Banner></Service2Banner>
      <Service2Section></Service2Section>
      <Service2Features></Service2Features>
      <ServiceFooter></ServiceFooter>
    </>
  );
};

export default Service2;
