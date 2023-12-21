import Navbar from "../components/HomeComponents/Navbar";
import Service6Banner from "../components/Service6Components/Service6Banner";
import Service6Features from "../components/Service6Components/Service6Features";
import Service6Section from "../components/Service6Components/Service6Section";
import ServiceFooter from "../components/ServicesComponents/ServiceFooter";

const Service6 = () => {
  return (
    <>
      <Navbar></Navbar>
      <Service6Banner></Service6Banner>
      <Service6Section></Service6Section>
      <Service6Features></Service6Features>
      <ServiceFooter></ServiceFooter>
    </>
  );
};

export default Service6;
