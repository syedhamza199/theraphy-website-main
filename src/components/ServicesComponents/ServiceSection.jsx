import ServiceLeft from "../../assets/images/leftservice.png";

const ServiceSection = () => {
  return (
    <>
      <div className="relative isolate -z-10 bg-white some-css">
        <div className="overflow-hidden">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl mb-16 gap-x-5 lg:mx-0 lg:flex lg:max-w-none lg:items-center gaper">
              <div className="w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
                <img src={ServiceLeft}></img>
              </div>
              {/* Right column */}
              <div className="">
                <p className="font-inter font-semibold text-xl text-[#426853]">
                  Service
                </p>
                <h1 className="font-neuton font-normal text-6xl mb-5 text-[#4B5D80]">
                  Individual Counseling
                </h1>
                <p className="text-[#4B5D80] font-inter font-normal text-lg">
                  Our stated values of integrity, dignity, respect, <br></br>{" "}
                  teamwork, and responsiveness guide our care. These <br></br>{" "}
                  values xemplify who we are at New Beginnings and <br></br>{" "}
                  also make us unique providers of mental health care <br></br>{" "}
                  in Central Pennsylvania.
                </p>
              </div>
            </div>

            <p className="text-center font-inter text-lg font-normal text-[#4B5D80]">
              Your first step in getting started with individual counseling is
              to call us and schedule your initial appointment. During this{" "}
              <br></br>
              appointment, which may last up to two hours, you will build
              rapport with the therapist and provide them with background{" "}
              <br></br>
              information about your counseling needs. The intake therapist will
              also address any questions you may have regarding services,{" "}
              <br></br> fees, confidentiality, and what to expect in therapy. We
              aim to establish a collaborative relationship with you, where we
              work <br></br> together to determine the most suitable treatment
              for your needs. It's important to note that not everyone will be
              referred for <br></br> continuing therapy at our clinic, as we
              make decisions based on what we believe is best for the client.
              If, at the end of the first <br></br> session, it is determined
              that working with the assigned therapist is in your best interest,
              you will mutually agree on a time slot for <br></br> your therapy
              sessions. Typically, clients and therapists meet once a week for
              one hour per session. During your second <br></br> appointment,
              individual therapy begins, working with your set goals for your
              therapy experience and starting to work together <br></br> towards
              achieving them. This is an important part as it helps to provide
              direction and focus for your sessions. Your therapist will{" "}
              <br></br> help guide you through this process, offering support,
              insight, and strategies to assist you in making progress towards
              identified <br></br> goals. It is through the process of
              individualized counseling that meaningful change and growth can
              occur.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceSection;
