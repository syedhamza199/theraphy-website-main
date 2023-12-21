import Navbar from "../components/HomeComponents/Navbar";
import ServiceFooter from "../components/ServicesComponents/ServiceFooter";
import ServiceSection from "../components/ServicesComponents/ServiceSection";
import ServicesBanner from "../components/ServicesComponents/ServicesBanner";
import ServicesFeatures from "../components/ServicesComponents/ServicesFeatures";

const Services = () => {
  return (
    <>
      <Navbar></Navbar>
      <ServicesBanner></ServicesBanner>
      <ServiceSection></ServiceSection>
      <ServicesFeatures></ServicesFeatures>
      <ServiceFooter></ServiceFooter>
    </>
  );
};

export default Services;
