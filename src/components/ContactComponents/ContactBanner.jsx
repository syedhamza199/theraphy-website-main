import Services3Bg from "../../assets/images/conatctbg.png";
import Eclipses from "../../assets/images/sha.png";

const ContactBanner = () => {
  return (
    <>
      <div className="relative isolate overflow-hidden">
        <div>
          <img
            src={Services3Bg}
            alt=""
            className="absolute inset-0 -z-10 h-auto w-full object-cover object-right md:object-center"
          />
        </div>

        <div className="grid grid-cols-1 gap-4" style={{ height: "50vh" }}>
          <div
            className="mx-auto max-w-7xl px-6 lg:px-8"
            style={{ display: "flex", alignItems: "center" }}
          >
            <div className="mx-auto max-w-2xl lg:mx-0">
              <div className="team-contact flex flex-col items-center">
                <p className="mt-6 text-lg text-center font-semibold leading-8 text-[#E8E753]">
                  Appointment
                </p>
                <h2 className="text-8xl font-light font-neuton tracking-tight text-white sm:text-6xl increase">
                  Contact Us
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ima">
        <img id="contact" src={Eclipses}></img>
      </div>
    </>
  );
};

export default ContactBanner;
