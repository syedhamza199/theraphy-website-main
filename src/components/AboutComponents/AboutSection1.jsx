import AboutLeft from "../../assets/images/aboutleft.png";
import Group1 from "../../assets/images/group1.png";
import Group2 from "../../assets/images/group2.png";
import Group3 from "../../assets/images/group3.png";
import About1 from '../../assets/images/about1.png'
import About2 from '../../assets/images/about2.png'


const AboutSection1 = () => {
  return (
    <>
      <div className="relative isolate -z-10 bg-[#f1f1f1] some-css">
        <section className="mx-auto max-w-7xl sec">
          <div className="grid grid-cols-2 s">
            <div className="">
              <img src={AboutLeft} className="pb-56"></img>
            </div>

            <div className="left">
              <div className="grid grid-cols-2 boxes">
                <div className="b11">
                  <img className="ci-about mb-3" src={Group1} alt="c1" />
                  <div className="">
                    <h3 className="font-neuton text-center text-[#4B5D80] text-2xl mb-3">
                      It's Professional
                    </h3>
                    <p className="font-inter text-[#4B5D80] text-md text-center">
                      All therapists are licensed, <br></br> accredited
                      professionals. All <br></br> you share is confidential.
                    </p>
                  </div>
                </div>
                <div className="b2 b11">
                  <img className="ci-about mb-3" src={Group2} alt="c1" />
                  <div className="">
                    <h3 className="font-neuton text-center text-2xl mb-3">
                      It's Affordable
                    </h3>
                    <p className="font-inter text-[#4B5D80] text-md text-center">
                      Best Plans/Fee <br></br> For all people
                    </p>
                  </div>{" "}
                </div>
              </div>

              <div className="grid grid-cols-2 boxes">
                <div className="b11">
                  <img className="ci-about mb-3" src={Group3} alt="c1" />
                  <div className="">
                    <h3 className="font-neuton text-center text-[#4B5D80] text-2xl mb-3">
                      It's Effective
                    </h3>
                    <p className="font-inter text-[#4B5D80] text-md text-center">
                      People found online therapy to <br></br> as effective or
                      more effective <br></br> than traditional therapy.
                    </p>
                  </div>
                </div>
                <div className="b2 b11" style={{ background: "#426853", height: '280px' }}>
                  {/* <img className="ci" src={c3} alt="c1" /> */}
                  <div className="cont">
                    <h3 className="font-neuton text-center text-2xl text-white mb-6">
                      Need More Info?
                    </h3>

                    <p className="text-center font-poppins text-white text-md font-semibold mb-10">
                      Talk to our Coordinator
                    </p>
                    <a
                      href="#"
                      className="text-sm font-semibold leading-6 px-6 py-4 text-[#4B5D80] bg-[#e8e753] rounded-full flex items-center"
                    >
                      <div className="text-center">
                        <span className="font-bold text-lg underline">
                          (856) 378 7830
                        </span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutSection1;
