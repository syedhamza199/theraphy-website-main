import Navbar from "../components/HomeComponents/Navbar";
import Banner from "../components/HomeComponents/Banner";
import Brands from "../components/HomeComponents/Brands";
import Features from "../components/HomeComponents/Features";
import Counseling from "../components/HomeComponents/Counseling";
import Services from "../components/HomeComponents/Services";
import CoupleConsulting from "../components/HomeComponents/CoupleConsulting";
import HowCanWeHelp from "../components/HomeComponents/HowCanWeHelp";
import HomeSlider from "../components/HomeComponents/HomeSlider";
import Newsletter from "../components/HomeComponents/Newsletter";
import Footer from "../components/HomeComponents/Footer";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <Brands></Brands>
      <Features></Features>
      <Counseling></Counseling>
      <Services></Services>
      <CoupleConsulting></CoupleConsulting>
      <HowCanWeHelp></HowCanWeHelp>
      <HomeSlider></HomeSlider>
      <Newsletter></Newsletter>
      <Footer></Footer>
    </div>
  );
};

export default Home;
