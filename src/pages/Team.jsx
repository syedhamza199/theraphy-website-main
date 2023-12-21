import Navbar from "../components/HomeComponents/Navbar";
import ServiceFooter from "../components/ServicesComponents/ServiceFooter";
import TeamBanner from "../components/TeamComponents/TeamBanner";
import TeamSlider1 from "../components/TeamComponents/TeamSlider1";
import TeamSlider2 from "../components/TeamComponents/TeamSlider2";
import TeamSlider3 from "../components/TeamComponents/TeamSlider3";
import TeamSlider4 from "../components/TeamComponents/TeamSlider4";

const Team = () => {
  return (
    <>
      <Navbar></Navbar>
      <TeamBanner></TeamBanner>
      <TeamSlider1></TeamSlider1>
      <TeamSlider2></TeamSlider2>
      <TeamSlider4></TeamSlider4>
      <TeamSlider3></TeamSlider3>
      <ServiceFooter></ServiceFooter>
    </>
  );
};

export default Team;
