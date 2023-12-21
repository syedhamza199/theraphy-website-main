import Team11 from "../../assets/images/pyhs1.png";
import Team12 from "../../assets/images/phys2.png";
import Team13 from "../../assets/images/phys3.png";
import ArrowLeft from "../../assets/images/arrowleft.png";
import ArrowRight from "../../assets/images/arrowright.png";

import { useState } from "react";
import { motion, useAnimation } from "framer-motion";

const initialAboutTeams = [
  // Add your team members here
  {
    id: 1,
    image: Team11,
    name: "Dr. Charles Jin",
    designation: "MD",
  },
  {
    id: 2,
    image: Team12,
    name: "Dr. Harvey Shapiro",
    designation: "MD – Psychiatrist",
  },

  {
    id: 3,
    image: Team13,
    name: "Dr. Cyllene Briones",
    designation: "MD",
  },

  {
    id: 4,
    image: Team12,
    name: "Dr. Harvey Shapiro",
    designation: "MD – Psychiatrist",
  },
];

const TeamSlider2 = () => {
  const animationControls = useAnimation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const numTeamsToShow = 3;

  const spring = {
    type: "spring",
    damping: 10,
    stiffness: 100,
  };

  const handleRightIconClick = async () => {
    await animationControls.start({ x: "-50%", transition: spring });
    const nextIndex = currentIndex + 1;

    if (nextIndex + numTeamsToShow <= initialAboutTeams.length) {
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

  const visibleTeams = initialAboutTeams.slice(
    currentIndex,
    currentIndex + numTeamsToShow
  );
  return (
    <>
      <section className="bg-white pb-32 pt-14">
        <div className="px-4 mx-auto max-w-screen-xl">
          <div class="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
            <h2 class="mb-4 text-5xl tracking-tight uppercase font-neuton font-medium text-[#4B5D80]">
              Psychiatric department
            </h2>
          </div>

          <div className="flex justify-center gap-4">
            <img
              className="left-about"
              src={ArrowLeft}
              onClick={handleLeftIconClick}
            ></img>

            {visibleTeams.map((team) => (
              <motion.div
                className="flex gap-32 justify-center"
                id="flex"
                animate={animationControls}
                transition={{ type: "spring", damping: 10, stiffness: 100 }}
              >
                <div className="flex flex-col bg-[#b6ccb1] p-10 rounded-lg custom-w">
                  <img
                    className="mx-auto mb-10"
                    style={{ width: "150px" }}
                    src={team.image}
                  ></img>

                  <h1 className="text-[#4B5D80] font-neuton font-bold text-2xl">
                    {team.name}
                  </h1>
                  <p className="text-[#4B5D80] font-neuton font-bold text-sm mb-4">
                    {team.designation}
                  </p>
                  <div className="border-b-4 border-[#426853]"></div>
                </div>
              </motion.div>
            ))}
            <img
              className="right"
              src={ArrowRight}
              onClick={handleRightIconClick}
            ></img>
          </div>
        </div>
      </section>
    </>
  );
};

export default TeamSlider2;
