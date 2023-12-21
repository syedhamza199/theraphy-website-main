import Team1 from "../../assets/images/team1.png";
import Team2 from "../../assets/images/team2.png";
import Team3 from "../../assets/images/team12.png";
import Team4 from "../../assets/images/team11.png";
import ArrowLeft from "../../assets/images/arrowleft.png";
import ArrowRight from "../../assets/images/arrowright.png";
import { useState } from "react";
import { motion, useAnimation } from "framer-motion";

const initialTeams = [
  // Add your team members here
  {
    id: 1,
    image: Team1,
    name: "Dr. James Walsh",
    designation: "PhD. - Clinical Director",
    description: `James W. Walsh is the Clinical Director at New Beginnings
                  Professional Counseling and Consulting Services. He has 30
                  years’ experience in Human Services with extensive experience
                  in many aspects of the field. He has held positions in the
                  provision of services for the Intellectually Disabled as a
                  Program Specialist.`,
  },
  {
    id: 2,
    image: Team2,
    name: "Dr. Linda Weinberg",
    designation: "PhD, MSN, FNP",
    description: `Dr. Weinberg is a Psychiatric Nurse Practitioner with training
                  and experience treating patients with psychiatric disorders
                  across the lifespan and across practice settings, from
                  hospitals to outpatient clinics. Her education includes a
                  Doctorate in Nursing and a Master’s in Nursing from The
                  University of Pennsylvania.`,
  },

  {
    id: 3,
    image: Team1,
    name: "Dr. James Walsh",
    designation: "PhD. - Clinical Director",
    description: `James W. Walsh is the Clinical Director at New Beginnings
                  Professional Counseling and Consulting Services. He has 30
                  years’ experience in Human Services with extensive experience
                  in many aspects of the field. He has held positions in the
                  provision of services for the Intellectually Disabled as a
                  Program Specialist.`,
  },
];

const HomeSlider = () => {
  const animationControls = useAnimation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const numTeamsToShow = 2;

  const spring = {
    type: "spring",
    damping: 10,
    stiffness: 100,
  };

  const handleRightIconClick = async () => {
    await animationControls.start({ x: "-50%", transition: spring });
    const nextIndex = currentIndex + 1;

    if (nextIndex + numTeamsToShow <= initialTeams.length) {
      setCurrentIndex(nextIndex);
    }

    animationControls.start({ x: "0%", transition: spring });
  };

  const handleLeftIconClick = async () => {
    await animationControls.start({ x: "50%", transition: spring });
    const previousIndex = currentIndex - 1;

    if (previousIndex >= 0) {
      setCurrentIndex(previousIndex);
    }

    animationControls.start({ x: "0%", transition: spring });
  };

  const visibleTeams = initialTeams.slice(
    currentIndex,
    currentIndex + numTeamsToShow
  );

  return (
    <>
    <div className="teams">
      <section className="bg-white pb-32">
        <div className="px-4 mx-auto max-w-screen-xl">
          <div class="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
            <h2 class="mb-4 text-6xl tracking-tight font-neuton font-medium text-[#4B5D80]">
              Our Team
            </h2>
          </div>

          <div className="flex gap-32 justify-center" id="flex">
            <img
              className="left"
              onClick={handleLeftIconClick}
              src={ArrowLeft}
            ></img>
            {visibleTeams.map((team) => (
              <motion.div
                key={team.id}
                className="flex flex-col"
                animate={animationControls}
                transition={{ type: "spring", damping: 10, stiffness: 100 }}
              >
                <div className="flex border-[#426853] border-b-4 mb-4">
                  <img className="mb-3" src={team.image}></img>
                  <div className="flex flex-col ms-6">
                    <h1 className="font-neuton text-[#4B5D80] text-2xl font-normal mt-6 mb-4">
                      {team.name}
                    </h1>
                    <p className="font-inter text-[#426853] font-semibold mb-3">
                      {team.designation}
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <p className="text-[#4B5D80] font-inter font-medium text-lg">
                    {team.description}
                  </p>
                </div>
              </motion.div>
            ))}

            <img
              className="right"
              onClick={handleRightIconClick}
              src={ArrowRight}
            ></img>
          </div>
          {/*  */}
        </div>
      </section>
      </div>
    </>
  );
};

export default HomeSlider;
