import Services9Bg from "../../assets/images/service9bg.png";
import Eclipses from "../../assets/images/eclipses.png";

const Service7Banner = () => {
  return (
    <>
      <div className="relative isolate overflow-hidden py-24 sm:py-32">
        <div>
          <img
            src={Services9Bg}
            alt=""
            className="absolute inset-0 -z-10 h-auto w-full object-cover object-right md:object-center"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <p className="mt-6 text-lg font-semibold leading-8 text-[#E8E753]">
                Service
              </p>
              <h2 className="text-7xl font-light font-neuton tracking-tight text-white sm:text-6xl increase">
                Addiction
                <span className="border-b-4 border-[#E8E753]"> treatment</span>
              </h2>
            </div>
          </div>

          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div
              className="mx-auto mt-20 grid max-w-xl grid-cols-1 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 service4"
              id="serv5"
            >
              <img
                src={Eclipses}
                className="h-full w-full flex-none me-3 text-[#E8E753]"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service7Banner;
