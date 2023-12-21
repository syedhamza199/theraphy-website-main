import JoinBanner from "../../assets/images/join.png";
import Eclipses from "../../assets/images/sha.png";

const JoinUsBanner = () => {
  return (
    <>
      <div className="relative isolate overflow-hidden">
        <div>
          <img
            src={JoinBanner}
            alt=""
            className="absolute inset-0 -z-10 w-full h-full object-cover object-right md:object-center"
          />
        </div>

        <div className="grid grid-cols-1 gap-4" style={{ height: "100vh" }}>
          <div
            className="mx-auto max-w-7xl px-6 lg:px-8"
            style={{ display: "flex", alignItems: "center" }}
          >
            <div className="mx-auto max-w-2xl lg:mx-0">
              <div className="team-contact flex flex-col items-center">
                <p className="text-lg mt-64 text-end font-semibold leading-8 text-[#E8E753]">
                  Job Opportunity
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ima">
        <img id="join" src={Eclipses}></img>
      </div>
    </>
  );
};

export default JoinUsBanner;
