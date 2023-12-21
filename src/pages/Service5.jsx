import Navbar from "../components/HomeComponents/Navbar";
import ServiceFooter from "../components/ServicesComponents/ServiceFooter";
import Service5Banner from "../components/Service5Components/Service5Banner";
import Service5Features from "../components/Service5Components/Service5Features";
import Service5Section from "../components/Service5Components/Service5Section";

const Service5 = () => {
  return (
    <>
      <Navbar></Navbar>
      <Service5Banner></Service5Banner>
      <Service5Section></Service5Section>
      <Service5Features></Service5Features>
      <ServiceFooter></ServiceFooter>
    </>
  );
};

export default Service5;
