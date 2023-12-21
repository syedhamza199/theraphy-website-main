import Background from "../../assets/images/bg.png";
import Left from "../../assets/images/man.png";
import Checkmark from "../../assets/images/group36.png";
import ButtonIcon from "../../assets/images/greenbg.png";


const Counseling = () => {
  return (
    <>
    <div className="consel">
      <div className="bgim relative isolate overflow-hidden bg-[#f1f1f1] py-24 sm:py-32 mb-28">
        {/* <img
          src={Background}
          alt=""
          className="absolute inset-0 -z-10 h-auto w-full object-cover object-right md:object-center"
        /> */}

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <img className="h-auto w-full object-cover" src={Left}></img>
            </div>

            <div className="w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
              <h4 className="uppercase text-[#E8E753] font-inter font-semibold mb-3">
                Services
              </h4>
              <h1 className="font-normal text-6xl font-neuton mb-0 tracking-tight text-white sm:text-6xl">
                Individual Counseling
              </h1>
              <p className="relative mt-6 text-sm leading-8 mb-3 text-white font-inter sm:max-w-md lg:max-w-none">
                Individual therapy (sometimes called “psychotherapy” or
                “counseling”) is a process through which clients work one-on-one
                with a trained therapist—in a safe, caring, and confidential
                environment—to explore their feelings, beliefs, or behaviors,
                work through challenging or influential memories, identify
                aspects of their lives that they would like to change, better
                understand themselves and others, set personal goals, and work
                toward desired change.
              </p>
              <div className="flex nline">
                <ul
                  role="list"
                  className="flex fu flex-col items-start mb-6 me-28"
                >
                  <li className="flex items-center mb-1 text-white text-base">
                    <img src={Checkmark} className="mr-2" alt="Checkmark" />
                    Relationships
                  </li>
                  <li className="flex items-center mb-1 text-white text-base">
                    <img src={Checkmark} className="mr-2" alt="Checkmark" />
                    Family Dynamics
                  </li>
                  <li className="flex items-center mb-3 text-white text-base">
                    <img src={Checkmark} className="mr-2" alt="Checkmark" />
                    Sadness/Depression
                  </li>
                </ul>

                <ul role="list" className="flex flex-col items-start mb-6">
                  <li className="flex items-center mb-1 text-white text-base">
                    <img src={Checkmark} className="mr-2" alt="Checkmark" />
                    Anxiety
                  </li>
                  <li className="flex items-center mb-1 text-white text-base">
                    <img src={Checkmark} className="mr-2" alt="Checkmark" />
                    Trauma
                  </li>
                </ul>
              </div>

              <div className="hidden lg:flex lg:flex-1 lg:justify-start">
                <a
                  href="#"
                  className="text-sm font-semibold leading-6 px-6 py-4 text-[#4B5D80] bg-white rounded-full flex items-center"
                >
                  <span className="text-center">Book a Session</span>
                  <img src={ButtonIcon} alt="Arrow Image" className="ml-2" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Counseling;
