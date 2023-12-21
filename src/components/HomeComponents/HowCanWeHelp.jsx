import Background from "../../assets/images/maskgroup.png";
import ButtonIcon from "../../assets/images/buttonicon.png";

const HowCanWeHelp = () => {
  return (
    <>
    <div className="help">
      <div className="helpbg relative isolate overflow-hidden bg-[#f1f1f1] py-24 sm:py-32 mb-28">
        {/* <img
          src={Background}
          alt=""
          className="absolute inset-0 -z-10 h-auto w-full object-cover object-right md:object-center"
        /> */}

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-4">
            <div className="w-full max-w-xl lg:shrink-0 xl:max-w-2xl mt-24">
              <h1 className="font-normal text-6xl font-neuton mb-0 tracking-tight text-white sm:text-6xl">
                How Can{" "}
                <span className="border-b-4 border-[#EDE54A]">We Help?</span>
              </h1>
              <p className="relative mt-6 text-base leading-8 mb-10 text-white font-inter sm:max-w-md lg:max-w-none">
                All appointments at New Beginnings will remain the same,
                <br></br> once registered for Telehealth your appointment will
                not <br></br> show up on the telehealth app or web portal.
              </p>

              <div className="hidden lg:flex lg:flex-1 lg:justify-start">
                <a
                  href="#"
                  className="text-sm font-semibold leading-6 px-6 py-4 text-white bg-[#426853] rounded-full flex items-center"
                >
                  <div className="text-center uppercase mx-auto">
                    Book Now
                    <br />
                    <span className="font-bold text-2xl underline">
                      (856) 378 7830
                    </span>
                  </div>
                </a>
              </div>
            </div>
            {/* Right section */}
            {/* <div className="bg-[#979490] rounded-xl">
              <form></form>
            </div> */}

            <div class="leftb block max-w-sm rounded-lg bg-[#9b9794] p-10 mt-20 ms-60">
              <form>
                <div class="relative mb-6" data-te-input-wrapper-init>
                  <input
                    type="text"
                    className="peer block min-h-[auto] w-full rounded border-0 border-b-2 border-[#dadada] bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                    id="exampleInput90"
                    placeholder="Name"
                  />
                  <label
                    htmlFor="exampleInput90"
                    className="pointer-events-none text-white font-inter absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                  >
                    Name
                  </label>
                </div>

                <div class="relative mb-6" data-te-input-wrapper-init>
                  <input
                    type="text"
                    className="peer block min-h-[auto] w-full font-inter border-b-2 border-[#dadada] rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                    id="exampleInput90"
                    placeholder="E-mail"
                  />
                  <label
                    htmlFor="exampleInput90"
                    className="pointer-events-none text-white absolute font-inter left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6]  transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                  >
                    E-mail
                  </label>
                </div>

                <div class="relative mb-6" data-te-input-wrapper-init>
                  <select className="peer block min-h-[auto] w-full font-inter rounded border-0 border-b-2 border-[#dadada] bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0">
                    <option>Select</option>
                    <option>1</option>
                    <option>1</option>
                    <option>1</option>
                  </select>
                </div>

                <div class="relative mb-6" data-te-input-wrapper-init>
                  <textarea
                    type="text"
                    className="peer block min-h-[auto] w-full border-b-2 border-[#dadada] font-inter rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                    id="exampleInput90"
                    placeholder="Message"
                  />
                  <label
                    htmlFor="exampleInput90"
                    className="pointer-events-none text-white absolute font-inter left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                  >
                    Message
                  </label>
                </div>

                <div className="hidden lg:flex lg:flex-1 lg:justify-center">
                  <a
                    href="#"
                    className="text-sm w-64 font-semibold leading-6 px-6 py-4 text-white bg-[#426853] rounded-full flex justify-center"
                  >
                    <span className="text-center">Book a Session</span>
                    <img src={ButtonIcon} alt="Arrow Image" className="ml-2" />
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default HowCanWeHelp;
