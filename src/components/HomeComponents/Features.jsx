import Checkmark from "../../assets/images/checkmark.png";
import ButtonIcon from "../../assets/images/buttonicon.png";
import ButtonIcon2 from "../../assets/images/greenbg.png";
import c1 from "../../assets/images/card1.jpg";
import c2 from "../../assets/images/card2.jpg";
import c3 from "../../assets/images/card3.jpg";
import c4 from "../../assets/images/card4.jpg";

const Features = () => {
  return (
    <>
    <div className="features">
      <div className="bg-[#f1f1f1]">
        <section className="mx-auto max-w-7xl sec">
          <div className="grid grid-cols-2 s">
            <div className="w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
              <h1 className="font-normal text-6xl font-neuton tracking-tight text-[#4B5D80] sm:text-6xl">
                Here to Help You <br></br> Find a Path Forward
              </h1>
              <p className="relative mt-6 text-2xl leading-8 mb-6 text-[#4b5d80] italic font-neuton sm:max-w-md lg:max-w-none">
                We believe that effective therapy is:
              </p>
              <ul role="list" className="flex flex-col items-start mb-6">
                <li className="flex items-center mb-3 text-[#4B5D80] text-base">
                  <img src={Checkmark} className="mr-2" alt="Checkmark" />
                  About finding a therapist you "click" with.
                </li>
                <li className="flex items-center mb-3 text-[#4B5D80] text-base">
                  <img src={Checkmark} className="mr-2" alt="Checkmark" />
                  Tailored to your needs as an individual or a couple.
                </li>
                <li className="flex items-center mb-3 text-[#4B5D80] text-base">
                  <img src={Checkmark} className="mr-2" alt="Checkmark" />
                  Empowers you with science-backed skills and insights.
                </li>
                <li className="flex items-center text-[#4B5D80] text-base">
                  <img src={Checkmark} className="mr-2" alt="Checkmark" />
                  Translates into real-life changes.
                </li>
              </ul>

              <div className="hidden lg:flex lg:flex-1 lg:justify-start">
                <a
                  href="#"
                  className="text-sm font-semibold leading-6 px-6 py-4 text-white bg-[#426853] rounded-full flex items-center"
                >
                  <span className="text-center">Book a Session</span>
                  <img src={ButtonIcon} alt="Arrow Image" className="ml-2" />
                </a>
              </div>
            </div>

            <div className="left">
              <div className="grid grid-cols-2 boxes">
                <div className="b1">
                  <img className="ci" src={c4} alt="c1" />
                  <div className="cont">
                    <p className="font-inter">Therapy</p>
                    <h3 className="font-neuton">Managing Stress & Anxiety</h3>
                    <button>
                      Read More
                      <img src={ButtonIcon2} alt="arrow" />
                    </button>
                  </div>
                </div>
                <div className="b2 b1 green">
                  <img className="ci" src={c1} alt="c1" />
                  <div className="cont">
                    <p className="font-inter">Counseling</p>
                    <h3 className="font-neuton">Couples Counseling</h3>
                    <button>
                      Read More
                      <img src={ButtonIcon} alt="arrow" />
                    </button>
                  </div>{" "}
                </div>
                <div className="b1 green">
                  <img className="ci" src={c2} alt="c1" />
                  <div className="cont">
                    <p className="font-inter">Therapy</p>
                    <h3 className="font-neuton">Improving Parenting Skills</h3>
                    <button>
                      Read More
                      <img src={ButtonIcon} alt="arrow" />
                    </button>
                  </div>
                </div>
                <div className="b2 b1">
                  <img className="ci" src={c3} alt="c1" />
                  <div className="cont">
                    <p className="font-inter">Therapy</p>
                    <h3 className="font-neuton">
                      Building Your Self Confidence
                    </h3>
                    <button>
                      Read More
                      <img src={ButtonIcon2} alt="arrow" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      </div>
    
    </>
  );
};

export default Features;
