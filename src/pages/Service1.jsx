import Navbar from "../components/HomeComponents/Navbar";
import Service1Banner from "../components/Service1Components/Service1Banner";
import Service1Features from "../components/Service1Components/Service1Features";
import Service1Section from "../components/Service1Components/Service1Section";
import ServiceFooter from "../components/ServicesComponents/ServiceFooter";

const Service1 = () => {
  return (
    <>
      <Navbar></Navbar>
      <Service1Banner></Service1Banner>
      <Service1Section></Service1Section>
      <Service1Features></Service1Features>
      <ServiceFooter></ServiceFooter>
    </>
  );
};

export default Service1;
