import Icon1 from "../../assets/images/icon1.png";
import Icon2 from "../../assets/images/icon2.png";
import Icon3 from "../../assets/images/icon3.png";
import Video from "../../assets/videos/compressed.mp4";

const Banner = () => {
  return (
    <>
    <div className="home-banner">
      <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 -z-10 h-auto w-full object-cover object-center md:object-center"
        >
          <source src={Video} type="video/mp4" />
        </video>

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <p className="mt-6 text-lg font-semibold leading-8 uppercase text-[#E8E753]">
              Your Personal Therapist
            </p>
            <h2 className="text-8xl font-light font-neuton tracking-tight text-white sm:text-6xl">
              Helping You Find <br></br>
              the <span className="border-b-4 border-[#E8E753]">Answers</span>
            </h2>
          </div>
          <div className="mx-auto mt-20 grid max-w-xl grid-cols-1 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            <div className="gb fgb flex rounded-xl bg-[#426853] p-6 ring-1 ring-inset ring-white/10">
              <img
                src={Icon1}
                className="h-7 w-8 flex-none me-3 text-[#E8E753]"
                aria-hidden="true"
              />
              <div className="text-base leading-7">
                <h3 className="font-semibold text-white">Psychotherapy</h3>
                <p className="mt-2 text-white">
                  Long-term process that focuses on you as an individual, your
                  thoughts, motivation & behaviours nanotechnology immersion
                </p>
              </div>
            </div>

            <div className="gb flex rounded-xl bg-[#426853] p-6 ring-1 ring-inset ring-white/10">
              <img
                src={Icon2}
                className="h-7 w-8 flex-none mr-3 text-[#E8E753]"
                aria-hidden="true"
              />
              <div className="text-base leading-7">
                <h3 className="font-semibold text-white">Counselling</h3>
                <p className="mt-2 text-white">
                  Short-term process that focuses on specific issues and helps a
                  person address a particular problem loop on focusing
                </p>
              </div>
            </div>

            <div className="gb flex rounded-xl bg-[#59914c] p-6 ring-1 ring-inset ring-white/10">
              <img
                src={Icon3}
                className="h-7 w-8 flex-none mr-3 text-[#E8E753]"
                aria-hidden="true"
              />
              <div className="text-base leading-7">
                <h3 className="font-semibold text-white">Book a Session</h3>
                <p className="mt-2 text-white">
                  Ready to start your journey towards better health? Book and
                  appointment with new Beginning Health Care Center today.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Banner;
