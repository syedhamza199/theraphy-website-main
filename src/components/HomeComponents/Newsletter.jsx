import Background from "../../assets/images/Hn.png";
import Right from "../../assets/images/newsright.png";
import ButtonIcon from "../../assets/images/buttonicon.png";

const Newsletter = () => {
  return (
    <>
    <div className="subs">
      <div className="relative isolate overflow-hidden bg-[#f1f1f1] py-24 sm:py-32">
        <img
          src={Background}
          alt=""
          className="absolute inset-0 -z-10 h-auto w-full object-cover object-right md:object-center"
        />

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-4">
            <div className="w-full max-w-xl lg:shrink-0 xl:max-w-2xl mt-24">
              <h1 className="font-normal text-6xl font-neuton mb-0 tracking-tight text-[#4B5D80] sm:text-6xl">
                Would you like to<br></br> join our team?
              </h1>
              {/* <p className="relative mt-6 text-base leading-8 mb-10 text-[#4B5D80] font-inter sm:max-w-md lg:max-w-none">
                Some couples seek marriage counseling to strengthen their
                partnership and gain a better understanding of each other.
                Marriage counseling can also help couples who plan to get
                married. Premarital counseling can help couples achieve a deeper
                understanding of each other and iron out differences before
                marriage.
              </p> */}
              <div className="flex">
                <input type="email" placeholder="E-mail" id="news"></input>

                <div className="hidden lg:flex lg:flex-1 lg:justify-start">
                  <a
                    href="#"
                    className="text-sm font-semibold leading-6 px-6 py-4 text-white bg-[#426853] rounded-full flex items-center newsletter-button"
                  >
                    <span className="text-center">Sign Up</span>
                    <img src={ButtonIcon} alt="Arrow Image" className="ml-2" />
                  </a>
                </div>
              </div>

              <div class="flex items-center checkbox">
                <input
                  id="link-checkbox"
                  type="checkbox"
                  value=""
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="link-checkbox"
                  class="ml-2 text-sm font-medium text-black"
                >
                  I agree to recieving promo details and offers.
                </label>
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

export default Newsletter;
