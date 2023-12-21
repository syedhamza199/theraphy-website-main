import Services3Bg from "../../assets/images/newsbanner.png";
import Eclipses from "../../assets/images/eclipses.png";

const NewsBanner = () => {
  return (
    <>
      <div className="relative isolate overflow-hidden pb-24">
        <div>
          <img
            src={Services3Bg}
            alt=""
            className="absolute inset-0 -z-10 h-auto w-full object-cover object-right md:object-center"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h2 className="text-8xl font-light font-neuton pt-60 tracking-tight text-white sm:text-6xl increase">
                <span className="border-b-4 border-[#E8E753]"> News</span>
              </h2>
            </div>
          </div>

          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div
              className="mx-auto mt-20 grid max-w-xl grid-cols-1 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3"
              id="article"
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

export default NewsBanner;
