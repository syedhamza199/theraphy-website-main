import Service1Left from "../../assets/images/service1left.png";

const Service1Section = () => {
  return (
    <>
      <div className="relative isolate -z-10 bg-white some-css mt-32">
        <div className="overflow-hidden">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl mb-16 gap-x-5 lg:mx-0 lg:flex lg:max-w-none lg:items-center gaper">
              <div className="w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
                <img src={Service1Left}></img>
              </div>
              {/* Right column */}
              <div className="">
                <p className="font-inter font-semibold text-xl text-[#426853]">
                  Service
                </p>
                <h1 className="font-neuton font-normal text-5xl mb-5 text-[#4B5D80]">
                  Common topics include:
                </h1>
                <ul className="list-disc ms-6">
                  <li className="text-[#4B5D80] font-inter text-lg">
                    Alcoholism
                  </li>
                  <li className="text-[#4B5D80] font-inter text-lg">
                    Peer Relations
                  </li>
                  <li className="text-[#4B5D80] font-inter text-lg">LBQGT</li>
                  <li className="text-[#4B5D80] font-inter text-lg">
                    Depression & Anxiety
                  </li>
                  <li className="text-[#4B5D80] font-inter text-lg">
                    Parenting Challenges
                  </li>
                </ul>
              </div>
            </div>

            <p className="text-center font-inter text-lg mb-10 font-normal text-[#4B5D80]">
              Group therapy is a therapeutic approach that brings together
              individuals with similar concerns or challenges in a supportive
              and <br></br> structured setting. In group therapy, participants,
              guided by a trained therapist, share their experiences, thoughts,
              and emotions, <br></br> fostering a sense of community and
              understanding. It offers a unique opportunity for individuals to
              gain insights, explore coping <br></br> strategies, and receive
              feedback from peers facing comparable issues. Group therapy
              sessions typically involve a small number of <br></br>{" "}
              participants, allowing for meaningful interactions and the
              development of a supportive network. The group dynamic encourages
              a <br></br> sense of belonging, reducing feelings of isolation and
              enhancing personal growth. Through active participation and mutual
              support, <br></br> individuals in group therapy can work
              collaboratively towards their shared goals, ultimately leading to
              improved mental and <br></br> emotional well-being. If you're
              looking for "group therapy near me" or adult therapy, it can be a
              valuable resource to find local <br></br> sessions and engage in
              this transformative therapeutic experience.
            </p>

            <h3 className="font-neuton text-center text-2xl font-normal text-[#4B5D80]">
              Consult your current therapist or ask our receptionist about the
              upcoming group therapy’s scheduled.
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service1Section;
