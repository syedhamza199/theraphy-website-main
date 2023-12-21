import Background from "../../assets/images/bg.png";
import CallIcon from "../../assets/images/callicon.png";
import LocationIcon from "../../assets/images/locationicon.png";
import FaxIcon from "../../assets/images/faxicon.png";
import Box from "../../assets/images/box.png";
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import { BiLogoFacebookCircle, BiLogoPinterest } from "react-icons/bi";

const Footer = () => {
  return (
    <>
      <div className="relative isolate overflow-hidden bg-[#f1f1f1] py-24 sm:py-32">
        <img
          src={Background}
          alt=""
          className="absolute inset-0 -z-10 h-auto w-full object-cover object-right md:object-center"
        />

        <div className="mx-auto max-w-6xl px-6 lg:px-8 border-b-2 border-[#6C6D72] mb-10">
          {/* Footer Top Section */}
          <div className="flex mb-10">
            <h1 className="font-poppins text-[#E8E753] font-bold text-lg">
              NewBeginnings
            </h1>
            <div className="flex items-center">
              <img className="w-12 ms-32" src={CallIcon}></img>
              <h1 className="text-white ms-3 font-poppins">
                Call Us <br></br>{" "}
                <span className="underline">(856) 378 7830</span>
              </h1>
            </div>

            <div className="flex items-center">
              <img className="w-12 ms-10" src={FaxIcon}></img>
              <h1 className="text-white ms-3 font-poppins">
                Fax <br></br> <span>(856) 378 7830</span>
              </h1>
            </div>

            <div className="flex items-center wid">
              <img className="w-12 ms-10" src={LocationIcon}></img>
              <h1 className="text-white ms-3 font-poppins">
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
                <span className="position-set">Quick Link</span>
              </h1>
              <ul>
                <li className="font-inter mb-3 text-[#FEFEFE]">Home</li>
                <li className="font-inter mb-3 text-[#FEFEFE]">About Us</li>
                <li className="font-inter mb-3 text-[#FEFEFE]">Blog</li>
                <li className="font-inter mb-3 text-[#FEFEFE]">Services</li>
                <li className="font-inter mb-3 text-[#FEFEFE]">Contact</li>
              </ul>
            </div>

            <div>
              <h1 className="flex items-start text-[#E8E753] font-poppins font-semibold mb-4">
                <img className="h-full me-1" src={Box}></img>
                <span className="position-set">Our Services</span>
              </h1>
              <ul>
                <li className="font-inter mb-3 text-[#FEFEFE]">
                  Individual Counseling
                </li>
                <li className="font-inter mb-3 text-[#FEFEFE]">
                  Couple And Family Counseling
                </li>
                <li className="font-inter mb-3 text-[#FEFEFE]">
                  Group Therapy
                </li>
                <li className="font-inter mb-3 text-[#FEFEFE]">
                  Psychiatric Evaluations
                </li>
                <li className="font-inter mb-3 text-[#FEFEFE]">
                  Medication Management{" "}
                </li>
              </ul>
            </div>

            <div>
              <ul className="mt-10">
                <li className="font-inter mb-3 text-[#FEFEFE]">
                  Pediatric Treatment
                </li>
                <li className="font-inter mb-3 text-[#FEFEFE]">
                  Addiction Treatment
                </li>
                <li className="font-inter mb-3 text-[#FEFEFE]">
                  Telepsychiatry
                </li>
                <li className="font-inter mb-3 text-[#FEFEFE]">
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
                    id="footer-input"
                    placeholder="your email address"
                  ></input>

                  <div id="btn-subs">
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
              <p className="text-white font-inter text-md">
                Copyright © 2022 New Beginnings Behavioral Healthcare. All
                rights reserved.
              </p>
            </div>

            <div className="flex justify-end">
              <h1 className="text-white me-2">Follow:</h1>
              <div className="flex">
                <AiOutlineInstagram
                  color="white"
                  size={24}
                ></AiOutlineInstagram>
                <BiLogoFacebookCircle
                  size={24}
                  color="white"
                ></BiLogoFacebookCircle>
                <AiOutlineTwitter size={24} color="white"></AiOutlineTwitter>
                <BiLogoPinterest size={24} color="white"></BiLogoPinterest>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
