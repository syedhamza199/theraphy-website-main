import Background from "../../assets/images/Hn.png";
import Star from "../../assets/images/star.png";

const AboutVision = () => {
  return (
    <>
      <div className="relative isolate overflow-hidden bg-[#f1f1f1] py-24 sm:py-32">
        <img
          src={Background}
          alt=""
          className="absolute inset-0 -z-10 h-auto w-full object-cover object-right md:object-center"
        />

        <div className="mx-auto px-6 lg:px-8 mb-14">
          <div className="bg-white max-w-md mx-auto p-8 rounded-md">
            <img className="mx-auto mb-3" src={Star}></img>
            <h1 className="text-center mb-3 text-[#4B5D80] font-bold font-neuton text-3xl">
              Vision
            </h1>
            <p className="text-center text-[#4B5D80] mb-2 font-normal font-inter">
              The vision of New Beginnings is to establish quality comprehensive
              managed neuro-behavioral care through access, cutting edge
              technology, and innovative modalities.
            </p>
          </div>
        </div>

        <div className="mx-auto">
          <h1 className="text-start pl-80 mb-3 text-[#4B5D80] font-bold font-neuton text-6xl">
            Values
          </h1>
          <p className="text-start pl-80 text-[#4B5D80] text-lg mb-5">
            <span className="font-bold font-inter text-[#4B5D80] text-md">
              Comprehensive Care:
            </span>
            We take a holistic approach to managed care and ensure patients are
            seen and treated individually with unique <br></br> treatment
            approaches, concepts, and goals.
          </p>

          <p className="text-start pl-80 text-[#4B5D80] text-lg mb-5">
            <span className="font-bold font-inter text-[#4B5D80] text-md">
              Community:
            </span>
            Social and cultural community aspects are prioritized as an
            essential part of successful treatment outcomes and patient{" "}
            <br></br> goals.
          </p>

          <p className="text-start pl-80 text-[#4B5D80] text-lg mb-5">
            <span className="font-bold font-inter text-[#4B5D80] text-md">
              Responsiveness:
            </span>
            We have the honor and responsibility of our patient's needs and
            responsiveness directly influences the process of <br></br> their
            care and treatment.
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutVision;
