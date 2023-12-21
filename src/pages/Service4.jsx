import Navbar from "../components/HomeComponents/Navbar";
import Service4Banner from "../components/Service4Components/Service4Banner";
import Service4Features from "../components/Service4Components/Service4Features";
import Service4Section from "../components/Service4Components/Service4Section";
import ServiceFooter from "../components/ServicesComponents/ServiceFooter";

const Service4 = () => {
  return (
    <>
      <Navbar></Navbar>
      <Service4Banner></Service4Banner>
      <Service4Section></Service4Section>
      <Service4Features></Service4Features>
      <ServiceFooter></ServiceFooter>
    </>
  );
};

export default Service4;
