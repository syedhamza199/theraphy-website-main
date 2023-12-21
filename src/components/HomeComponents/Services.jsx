import Service1 from "../../assets/images/service1.png";
import Service2 from "../../assets/images/service2.png";
import Service3 from "../../assets/images/service3.png";
import Service4 from "../../assets/images/service4.png";

const Services = () => {
  return (
    <>
    <div className="serve">
      <div className="relative isolate -z-10">
        <h4 className="uppercase text-[#426853] text-xl text-center font-inter font-semibold mb-4">
          Services
        </h4>
        <h1 className="text-[#426853] text-5xl text-center mb-20 font-neuton font-bold">
          Theraphy <span className="border-b-4 border-[#426853]">Process</span>
        </h1>

        <div className="blist mx-auto max-w-8xl px-6 lg:px-8 flex">
          <div className="grid md:grid-cols-1 md:gap-6 mb-4 w-4/12 cm">
            <div className="flex flex-col me-10">
              <img className="w-20 h-24 mx-auto mb-2" src={Service1}></img>
              <p className="text-center font-inter mb-2 font-semibold text-[#426853] text-lg">
                Phase 1
              </p>
              <h1 className="text-center font-neuton font-medium mb-2 text-[#4B5D80] text-3xl">
                Initial Intake
              </h1>
              <p className="text-center text-[#4B5D80] text-lg font-inter">
                You can expect to meet one-on-one with an intake specialist to
                go over your previous medical history and identify needs for
                treatment. This may include counseling services, prescribed
                medications or refferal to other treatment services.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-1 md:gap-6 mb-4 w-4/12 cm1">
            <div className="flex flex-col me-10">
              <img className="w-20 h-24 mx-auto mb-2" src={Service2}></img>
              <p className="text-center font-inter mb-2 font-semibold text-[#426853] text-lg">
                Phase 2
              </p>
              <h1 className="text-center font-neuton font-medium mb-2 text-[#4B5D80] text-3xl">
                Treatment Plan
              </h1>
              <p className="text-center text-[#4B5D80] text-lg font-inter">
                You will meet one-on-one with a therapist to develop your course
                of treatment, treatment goals and next steps to begin treatment.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-1 md:gap-6 mb-4 w-4/12 cm2">
            <div className="flex flex-col me-10">
              <img className="w-20 h-24 mx-auto mb-2" src={Service3}></img>
              <p className="text-center font-inter mb-2 font-semibold text-[#426853] text-lg">
                Phase 3
              </p>
              <h1 className="text-center font-neuton font-medium mb-2 text-[#4B5D80] text-3xl">
                Psychiatric Evaluation
              </h1>
              <p className="text-center text-[#4B5D80] text-lg font-inter">
                You will meet with a Psychiatrist or Nurse Practitioner to
                discuss your mental health history, assess diagnosis, and
                provide necessary medical treatment including medication
                management.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-1 md:gap-6 mb-4 w-4/12">
            <div className="flex flex-col me-10">
              <img className="w-20 h-24 mx-auto mb-2" src={Service4}></img>
              <p className="text-center font-inter mb-2 font-semibold text-[#426853] text-lg">
                Phase 4
              </p>
              <h1 className="text-center font-neuton font-medium mb-2 text-[#4B5D80] text-3xl">
                Be an active participant
              </h1>
              <p className="text-center text-[#4B5D80] text-lg font-inter">
                As a patient, you are required to be an active participant in
                your treatment. We require you to attend treatment plan and care
                coordination follow-up appointments every quarter. You must be
                up-to-date with a treatment plan to be able to see a
                Psychiatrist.
              </p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Services;
