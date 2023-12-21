import CallIcon from "../../assets/images/callicon.png";
import LocationIcon from "../../assets/images/locationicon.png";
import FaxIcon from "../../assets/images/faxicon.png";
import Box from "../../assets/images/box.png";
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import { BiLogoFacebookCircle, BiLogoPinterest } from "react-icons/bi";

const ServiceFooter = () => {
  return (
    <>
      <div className="relative isolate overflow-hidden bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-6 lg:px-8 border-b-2 border-[#6C6D72] mb-10">
          {/* Footer Top Section */}
          <div className="flex mb-10">
            <h1 className="font-poppins text-[#59914C] font-bold text-lg">
              NewBeginnings
            </h1>
            <div className="flex items-center">
              <img className="w-12 ms-32" src={CallIcon}></img>
              <h1 className="text-[#4B5D80] ms-3 font-poppins">
                Call Us <br></br>{" "}
                <span className="underline">(856) 378 7830</span>
              </h1>
            </div>

            <div className="flex items-center">
              <img className="w-12 ms-10" src={FaxIcon}></img>
              <h1 className="text-[#4B5D80] ms-3 font-poppins">
                Fax <br></br> <span>(856) 378 7830</span>
              </h1>
            </div>

            <div className="flex items-center wid">
              <img className="w-12 ms-10" src={LocationIcon}></img>
              <h1 className="text-[#4B5D80] ms-3 font-poppins">
                Location <br></br>{" "}
                <span>130 White Horse Pike ClementonNJ 08021</span>
              </h1>
            </div>
          </div>
        </div>

        {/* Flex links section */}

        <div className="mx-auto max-w-7xl px-6 lg:px-8 border-b-2 border-[#6C6D72]">
          {/* Footer Top Section */}
          <div className="grid grid-cols-4 mb-10">
            <div>
              <h1 className="flex items-start text-[#E8E753] font-poppins font-semibold mb-4">
                <img className="h-full me-1" src={Box}></img>
                <span className="position-set text-[#59914C]">Quick Link</span>
              </h1>
              <ul>
                <li className="font-inter mb-3 text-[#4B5D80]">Home</li>
                <li className="font-inter mb-3 text-[#4B5D80]">About Us</li>
                <li className="font-inter mb-3 text-[#4B5D80]">Blog</li>
                <li className="font-inter mb-3 text-[#4B5D80]">Services</li>
                <li className="font-inter mb-3 text-[#4B5D80]">Contact</li>
              </ul>
            </div>

            <div>
              <h1 className="flex items-start text-[#E8E753] font-poppins font-semibold mb-4">
                <img className="h-full me-1" src={Box}></img>
                <span className="position-set text-[#59914C]">
                  Our Services
                </span>
              </h1>
              <ul>
                <li className="font-inter mb-3 text-[#4B5D80]">
                  Individual Counseling
                </li>
                <li className="font-inter mb-3 text-[#4B5D80]">
                  Couple And Family Counseling
                </li>
                <li className="font-inter mb-3 text-[#4B5D80]">
                  Group Therapy
                </li>
                <li className="font-inter mb-3 text-[#4B5D80]">
                  Psychiatric Evaluations
                </li>
                <li className="font-inter mb-3 text-[#4B5D80]">
                  Medication Management{" "}
                </li>
              </ul>
            </div>

            <div>
              <ul className="mt-10">
                <li className="font-inter mb-3 text-[#4B5D80]">
                  Pediatric Treatment
                </li>
                <li className="font-inter mb-3 text-[#4B5D80]">
                  Addiction Treatment
                </li>
                <li className="font-inter mb-3 text-[#4B5D80]">
                  Telepsychiatry
                </li>
                <li className="font-inter mb-3 text-[#4B5D80]">
                  Pharmacogenomic Testing
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl h-60 custom-w-h p-10">
              <h1 className="text-[#636465] font-semibold text-lg font-poppins mb-4">
                Subscribe
              </h1>
              <p className="text-[#636465] font-inter font-light">
                Join Our Mailing List & to get our news.
              </p>

              <form>
                <div className="flex">
                  <input
                    className="input"
                    type="email"
                    placeholder="your email address"
                  ></input>

                  <div>
                    <button
                      type="submit"
                      class="py-3 px-5 w-full text-sm font-medium text-center text-[#636465] rounded-lg border cursor-pointer bg-[#E8E753]"
                    >
                      Subscribe
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Copywrite section */}
        <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-6">
          {/* Footer Top Section */}
          <div className="grid grid-cols-2">
            <div>
              <p className="text-[#4B5D80] font-inter text-md">
                Copyright © 2022 New Beginnings Behavioral Healthcare. All
                rights reserved.
              </p>
            </div>

            <div className="flex justify-end">
              <h1 className="text-[#4B5D80] me-2">Follow:</h1>
              <div className="flex">
                <AiOutlineInstagram
                  color="#4b5d80"
                  size={24}
                ></AiOutlineInstagram>
                <BiLogoFacebookCircle
                  size={24}
                  color="#4b5d80"
                ></BiLogoFacebookCircle>
                <AiOutlineTwitter size={24} color="#4b5d80"></AiOutlineTwitter>
                <BiLogoPinterest size={24} color="#4b5d80"></BiLogoPinterest>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceFooter;
