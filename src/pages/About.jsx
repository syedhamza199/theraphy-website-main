import Navbar from "../components/HomeComponents/Navbar";
import Footer from "../components/HomeComponents/Footer";
import AboutBanner from "../components/AboutComponents/AboutBanner";
import AboutSection1 from "../components/AboutComponents/AboutSection1";
import AboutSlider from "../components/AboutComponents/AboutSlider";
import SliderBelow from "../components/AboutComponents/SliderBelow";
import AboutVision from "../components/AboutComponents/AboutVision";

const About = () => {
  return (
    <>
      <Navbar></Navbar>
      <AboutBanner></AboutBanner>
      <AboutSection1></AboutSection1>
      <AboutSlider></AboutSlider>
      <SliderBelow></SliderBelow>
      <AboutVision></AboutVision>
      <Footer></Footer>
    </>
  );
};

export default About;
