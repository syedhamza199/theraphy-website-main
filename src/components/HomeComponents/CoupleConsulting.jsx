import Background from "../../assets/images/Hn.png";
import Right from "../../assets/images/right.png";
import ButtonIcon from "../../assets/images/buttonicon.png";

const CoupleConsulting = () => {
  return (
    <>
    <div className="cop-sons">
      <div className="relative isolate overflow-hidden bg-[#f1f1f1] py-24 sm:py-32">
        <img
          src={Background}
          alt=""
          className="absolute inset-0 -z-10 h-auto w-full object-cover object-right md:object-center"
        />

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-4">
            <div className="w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
              <h4 className="uppercase text-[#426853] font-inter font-semibold mb-3">
                Services
              </h4>
              <h1 className="font-normal text-6xl font-neuton mb-0 tracking-tight text-[#4B5D80] sm:text-6xl">
                Couple And Family <br></br> Counseling
              </h1>
              <p className="relative mt-6 text-base leading-8 mb-10 text-[#4B5D80] font-inter sm:max-w-md lg:max-w-none">
                Some couples seek marriage counseling to strengthen their
                partnership and gain a better understanding of each other.
                Marriage counseling can also help couples who plan to get
                married. Premarital counseling can help couples achieve a deeper
                understanding of each other and iron out differences before
                marriage.
              </p>

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

            <div>
              <img className="h-auto w-full object-cover" src={Right}></img>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default CoupleConsulting;
