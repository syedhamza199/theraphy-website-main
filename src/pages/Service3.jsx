import Navbar from "../components/HomeComponents/Navbar";
import Service3Banner from "../components/Service3Components/Service3Banner";
import Service3Features from "../components/Service3Components/Service3Features";
import Service3Section from "../components/Service3Components/Service3Section";
import ServiceFooter from "../components/ServicesComponents/ServiceFooter";

const Service3 = () => {
  return (
    <>
      <Navbar></Navbar>
      <Service3Banner></Service3Banner>
      <Service3Section></Service3Section>
      <Service3Features></Service3Features>
      <ServiceFooter></ServiceFooter>
    </>
  );
};

export default Service3;
