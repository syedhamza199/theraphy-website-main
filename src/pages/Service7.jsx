import Navbar from "../components/HomeComponents/Navbar";
import Service7Banner from "../components/Service7Components/Service7Banner";
import Service7Features from "../components/Service7Components/Service7Features";
import Service7Section from "../components/Service7Components/Service7Section";
import ServiceFooter from "../components/ServicesComponents/ServiceFooter";

const Service7 = () => {
  return (
    <>
      <Navbar></Navbar>
      <Service7Banner></Service7Banner>
      <Service7Section></Service7Section>
      <Service7Features></Service7Features>
      <ServiceFooter></ServiceFooter>
    </>
  );
};

export default Service7;
