import ServiceLeft from "../../assets/images/service7left.png";

const Service5Section = () => {
  return (
    <div className="relative isolate -z-10 bg-white some-css mt-24">
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
              <h1 className="font-neuton font-normal text-4xl mb-5 text-[#4B5D80]">
                Telepsychiatry can be used for:
              </h1>
              <ul>
                <li className="text-[#4B5D80] font-inter text-lg mb-3">
                  On-site/Off-site Psychiatric Evaluation
                </li>
                <li className="text-[#4B5D80] font-inter text-lg mb-3">
                  On-site/Off-site Medication Check-up / Follow-up
                </li>
                <li className="text-[#4B5D80] font-inter text-lg mb-3">
                  On-site/Off-site Behavioral Consultation
                </li>
                <li className="text-[#4B5D80] font-inter text-lg mb-3">
                  On-site/Off-site Urgent Care via Telepsychiatry
                </li>
                <li className="text-[#4B5D80] font-inter text-lg mb-3">
                  Telepsychiatric Care Available for Facilities and
                  Organizations
                </li>
              </ul>
            </div>
          </div>

          <p className="text-center mb-16 font-inter text-xl font-normal text-[#4B5D80]">
            Telepsychiatry is a pioneering practice in healthcare that applies
            telemedicine to the field of psychiatry. It refers to the delivery
            of psychiatric mental health services and care through
            telecommunications technology, most commonly through
            videoconferencing. If you're searching for a psychiatrist near me,
            telepsychiatry can offer a convenient and accessible way to access
            mental health<br></br> services.
          </p>

          <p className="text-center mb-16 font-inter text-xl font-normal text-[#4B5D80]">
            One main issue within the American public health system is the lack
            of access to proper psychiatric mental health services and care.
            Telepsychiatry services have helped bridge the accessibility of
            psychiatric services to patients around the country. This method
            integrates effective interventions that are patient-centered and
            affordable.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Service5Section;
