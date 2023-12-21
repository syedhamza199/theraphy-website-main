import Checkmark from "../../assets/images/checkmark.png";
import ButtonIcon from "../../assets/images/buttonicon.png";
import Group1 from "../../assets/images/group1.png";
import Group2 from "../../assets/images/group2.png";
import Group3 from "../../assets/images/group3.png";

const Service2Features = () => {
  return (
    <>
      <div className="relative isolate -z-10 bg-white">
        <div className="overflow-hidden">
          <div className="mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32">
            <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
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
              <div
                className="flex justify-end gap-8 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0"
                id="margin"
              >
                {/* 1st flex */}
                <div className="flex gap-x-4">
                  {/* 1st Image */}
                  <div className="flex flex-col bg-white px-6 py-6 relative bottom-48">
                    <img className="w-24 mx-auto mb-4" src={Group1}></img>
                    <p className="text-center font-neuton text-[#4B5D80] text-lg font-semibold mb-3">
                      It's Professional
                    </p>
                    <p className="text-center font-inter text-[#4B5D80] text-base">
                      All therapists are licensed, accredited professionals. All
                      you share is confidential.
                    </p>
                  </div>

                  {/* 2nd image */}
                  <div className="flex flex-col bg-white px-6 py-6 relative bottom-56">
                    <img className="w-24 mx-auto mb-4" src={Group2}></img>
                    <p className="text-center font-neuton text-[#4B5D80] text-lg font-semibold mb-3">
                      It's Affordable
                    </p>
                    <p className="text-center font-inter text-[#4B5D80] text-base">
                      Best Plans/Fee <br></br> For all people
                    </p>
                  </div>

                  {/* 2nd flex */}
                  <div className="flex flex-row gap-x-4">
                    <div className="flex flex-col bg-white px-6 py-6">
                      <img className="w-24 mx-auto mb-4" src={Group3}></img>
                      <p className="text-center font-neuton text-[#4B5D80] text-lg font-semibold mb-3">
                        It's Effective
                      </p>
                      <p className="text-center font-inter text-[#4B5D80] text-base">
                        People found online therapy to as effective or more
                        effective than traditional therapy.
                      </p>
                    </div>

                    <div
                      className="flex flex-col bg-[#426853] px-6 py-6 h-60 relative bottom-8"
                      id="custom"
                    >
                      <h4 className="text-white font-neuton text-center font-semibold text-xl mb-10">
                        Need More Info?
                      </h4>
                      <p className="text-center font-poppins text-white text-lg font-semibold mb-3">
                        Talk to our Coordinator
                      </p>
                      <a
                        href="#"
                        className="text-sm font-semibold leading-6 px-6 py-4 text-[#4B5D80] bg-[#e8e753] rounded-full flex items-center"
                      >
                        <div className="text-center">
                          <span className="font-bold text-2xl underline">
                            (856) 378 7830
                          </span>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                {/* 2nd flex */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service2Features;
