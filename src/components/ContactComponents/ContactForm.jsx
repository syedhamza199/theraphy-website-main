const ContactForm = () => {
  return (
    <>
      <section className="bg-[#f1f1f1] pt-32">
        <div className="p-10 mx-auto max-w-3xl mt-10">
          <form class="w-full max-w-xl">
            {/* 1st column */}
            <div class="flex flex-wrap -mx-3 mb-6" id="two">
              <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  class="block tracking-wide text-[#4B5D80] opacity-0.4 text-sm font-inter font-light mb-2"
                  id="input1"
                  for="grid-first-name"
                >
                  Full Name
                </label>
                <input
                  class="appearance-none block w-full bg-[#b6ccb1] text-gray-700 rounded-full py-3 px-6 mb-3 leading-tight focus:outline-none focus:bg-[#b6ccb1]"
                  id="grid-first-name"
                  type="text"
                />
              </div>
              <div class="w-full md:w-1/2 px-3">
                <label
                  class="block tracking-wide text-[#4B5D80] text-sm font-light font-inter mb-2"
                  for="grid-last-name"
                >
                  E-mail address
                </label>
                <input
                  class="appearance-none block w-full bg-[#b6ccb1] text-gray-700 border border-gray-200 rounded-full py-3 px-4 leading-tight focus:outline-none focus:bg-[#b6ccb1]"
                  id="grid-last-name"
                  type="text"
                />
              </div>
            </div>
            {/* 2nd column */}
            <div class="flex flex-wrap -mx-3 mb-6" id="two">
              <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  class="block tracking-wide text-[#4B5D80] text-sm font-inter font-light mb-2"
                  id="input1"
                  for="grid-first-name"
                >
                  Phone
                </label>
                <input
                  class="appearance-none block w-full bg-[#b6ccb1] text-gray-700 rounded-full py-3 px-6 mb-3 leading-tight focus:outline-none focus:bg-[#b6ccb1]"
                  id="grid-first-name"
                  type="text"
                />
              </div>
              <div class="w-full md:w-1/2 px-3">
                <label
                  class="block tracking-wide text-[#4B5D80] text-sm font-inter font-light mb-2"
                  for="grid-last-name"
                >
                  Name of Insurance
                </label>
                <input
                  class="appearance-none block w-full bg-[#b6ccb1] text-gray-700 border border-gray-200 rounded-full py-3 px-4 leading-tight focus:outline-none focus:bg-[#b6ccb1]"
                  id="grid-last-name"
                  type="text"
                />
              </div>
            </div>

            {/* 3rd column */}
            <div class="flex flex-wrap -mx-3 mb-6" id="two">
              <div class="w-full mx-auto md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  class="block tracking-wide text-[#4B5D80] text-sm font-inter font-light mb-2"
                  id="input1"
                  for="grid-first-name"
                >
                  Insurance Policy
                </label>
                <input
                  class="appearance-none block w-full bg-[#b6ccb1] text-gray-700 rounded-full py-3 px-6 mb-3 leading-tight focus:outline-none focus:bg-[#b6ccb1]"
                  id="grid-first-name"
                  type="text"
                />
              </div>
            </div>

            {/* 4th column */}
            <div class="flex flex-wrap -mx-3 mb-6" id="two">
              <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  class="block tracking-wide text-[#4B5D80] opacity-0.4 text-sm font-inter font-light mb-2"
                  id="input1"
                  for="grid-first-name"
                >
                  PREFERRED LOCATION FOR SERVICES
                </label>
                <select type="text" class="appearance-none block w-full bg-[#b6ccb1] text-gray-700 rounded-md py-3 px-6 mb-3 leading-tight focus:outline-none focus:bg-[#b6ccb1]">
                    <option className="text-[#4B5D80]">Select</option>
                    <option className="text-[#4B5D80]">1</option>
                    <option className="text-[#4B5D80]">2</option>
                    <option className="text-[#4B5D80]">3</option>
                    <option className="text-[#4B5D80]">4</option>
                </select>
              </div>
              <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  class="block tracking-wide text-[#4B5D80] opacity-0.4 text-sm font-inter font-light mb-2"
                  id="input1"
                  for="grid-first-name"
                >
                  PREFERRED METHOD OF SERVICES
                </label>
                <select type="text" class="appearance-none block w-full bg-[#b6ccb1] text-gray-700 rounded-md py-3 px-6 mb-3 leading-tight focus:outline-none focus:bg-[#b6ccb1]">
                    <option className="text-[#4B5D80]">Select</option>
                    <option className="text-[#4B5D80]">1</option>
                    <option className="text-[#4B5D80]">2</option>
                    <option className="text-[#4B5D80]">3</option>
                    <option className="text-[#4B5D80]">4</option>
                </select>
              </div>
            </div>

            {/* 5th column */}
            <div class="flex flex-wrap -mx-3 mb-6" id="two">
              <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  class="block tracking-wide text-[#4B5D80] opacity-0.4 text-sm font-inter font-light mb-2"
                  id="input1"
                  for="grid-first-name"
                >
                  THE TYPE OF TECHNOLOGY AVAILABLE TO YOU
                </label>
                <select type="text" class="appearance-none block w-full bg-[#b6ccb1] text-gray-700 rounded-md py-3 px-6 mb-3 leading-tight focus:outline-none focus:bg-[#b6ccb1]">
                    <option className="text-[#4B5D80]">Select</option>
                    <option className="text-[#4B5D80]">1</option>
                    <option className="text-[#4B5D80]">2</option>
                    <option className="text-[#4B5D80]">3</option>
                    <option className="text-[#4B5D80]">4</option>
                </select>
              </div>
              <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  class="block tracking-wide text-[#4B5D80] opacity-0.4 text-sm font-inter font-light mb-2"
                  id="input1"
                  for="grid-first-name"
                >
                  APPOINTMENT REQUEST
                </label>
                <select type="text" class="appearance-none block w-full bg-[#b6ccb1] text-gray-700 rounded-md py-3 px-6 mb-3 leading-tight focus:outline-none focus:bg-[#b6ccb1]">
                    <option className="text-[#4B5D80]">Select</option>
                    <option className="text-[#4B5D80]">1</option>
                    <option className="text-[#4B5D80]">2</option>
                    <option className="text-[#4B5D80]">3</option>
                    <option className="text-[#4B5D80]">4</option>
                </select>
              </div>
            </div>

            <div className="hidden lg:flex lg:flex-1 lg:justify-center ml-48">
                <a
                  href=""
                  className="text-sm font-semibold leading-6 w-32 px-6 py-4 text-white bg-[#426853] rounded-full flex justify-center"
                >
                  <span className="text-center">Submit</span>
                </a>
              </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default ContactForm;
