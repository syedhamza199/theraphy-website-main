import Service2Left from "../../assets/images/service2left.png";

const Service2Section = () => {
  return (
    <>
      <div className="relative isolate -z-10 bg-white some-css mt-32">
        <div className="overflow-hidden">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl mb-16 gap-x-5 lg:mx-0 lg:flex lg:max-w-none lg:items-center gaper">
              <div className="w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
                <img src={Service2Left}></img>
              </div>
              {/* Right column */}
              <div className="">
                <p className="font-inter font-semibold text-xl text-[#426853]">
                  Service
                </p>
                <h1 className="font-neuton font-normal text-5xl mb-5 text-[#4B5D80]">
                  What is a psychiatric evaluation?
                </h1>
                <p className="text-[#4B5D80] font-inter font-normal text-lg">
                  A psychiatric evaluation may be necessary for diagnosing{" "}
                  <br></br>
                  emotional, behavioral, or developmental disorders. This
                  <br></br>
                  assessment, conducted for individuals of all age groups,{" "}
                  <br></br> takes into account the observed behaviors and their
                  potential <br></br> impact on various aspects, including
                  physical health, <br></br> genetics, environment, social
                  interactions, cognitive <br></br> processes, emotional
                  well-being, and educational <br></br> functioning. It aims to
                  examine how these behaviors may <br></br> affect or be
                  influenced by these multifaceted factors.
                </p>
              </div>
            </div>

            <h1 className="text-[#4B5D80] font-inter font-bold text-center text-2xl mb-5">
              Who is assessed?
            </h1>
            <p className="text-center font-inter text-lg mb-10 font-normal text-[#4B5D80]">
              Many times, families, spouses, teachers, or friends are the first
              to suspect that their loved one is challenged by feelings,{" "}
              <br></br>
              behaviors, or environmental conditions that cause him or her to
              act disruptive, rebellious, or sad. This may include problems with{" "}
              <br></br>
              relationships with friends or family members, work, school,
              sleeping, eating, substance abuse, emotional expression,
              development, <br></br> coping, attentiveness, and responsiveness.
              It's important for families who suspect a problem in any of these
              areas to seek <br></br> treatment as soon as possible. A
              psychiatric evaluation at a Mental health clinic can provide the
              necessary insights and guidance <br></br> for addressing these
              concerns. Treatment for mental health disorders is available.
            </p>

            <h1 className="text-[#4B5D80] font-inter font-bold text-2xl mb-5">
              What is involved in a psychiatric evaluation
            </h1>
            <p className="text-[#4B5D80] font-inter font-normal text-lg mb-6">
              These are the most common components of a comprehensive,
              diagnostic psychiatric evaluation. However, each evaluation is
              unique, tailored to the individual's distinct symptoms and
              behaviors.
            </p>

            <p className="text-[#4B5D80] font-inter font-normal text-lg mb-6">
              Evaluation may encompass:
            </p>

            <ul className="list-decimal ms-6 mb-16">
              <li className="text-[#4B5D80] font-inter text-lg mb-2">
                Description of behaviors (including when they occur, duration,
                and typical conditions)
              </li>
              <li className="text-[#4B5D80] font-inter text-lg mb-2">
                Description of symptoms (both physical and psychiatric)
              </li>
              <li className="text-[#4B5D80] font-inter text-lg mb-2">
                Assessment of the impact of behaviors or symptoms on:
              </li>
              <ul className="list-disc">
                <li className="text-[#4B5D80] font-inter text-lg mb-2">
                  Work performance
                </li>
                <li className="text-[#4B5D80] font-inter text-lg mb-2">
                  School performance
                </li>
                <li className="text-[#4B5D80] font-inter text-lg mb-2">
                  Relationships and interactions with others (spouse, coworkers,
                  family members, or neighbors)
                </li>
                <li className="text-[#4B5D80] font-inter text-lg mb-2">
                  Family involvement
                </li>
                <li className="text-[#4B5D80] font-inter text-lg mb-2">
                  Activity involvement
                </li>
              </ul>
              <li className="text-[#4B5D80] font-inter text-lg mb-2">
                Psychiatric interview
              </li>
              <li className="text-[#4B5D80] font-inter text-lg mb-2">
                Personal and family history of emotional, behavioral, or
                developmental disorders
              </li>

              <li className="text-[#4B5D80] font-inter text-lg mb-2">
                A comprehensive medical history, covering overall physical
                health, a list of any other illnesses or conditions, and current
                treatments
              </li>
              <li className="text-[#4B5D80] font-inter text-lg mb-2">
                Lab tests, when necessary (used to identify underlying medical
                conditions), including:
              </li>
              <ul className="list-disc">
                <li className="text-[#4B5D80] font-inter text-lg mb-2">
                  Blood panel and urine toxicology tests
                </li>
                <li className="text-[#4B5D80] font-inter text-lg mb-2">
                  Radiology studies to examine brain structures for
                  abnormalities
                </li>
              </ul>
              <li className="text-[#4B5D80] font-inter text-lg mb-2">
                Educational assessments
              </li>
              <li className="text-[#4B5D80] font-inter text-lg mb-2">
                Speech and language assessments
              </li>
              <li className="text-[#4B5D80] font-inter text-lg mb-2">
                Psychological assessments
              </li>
            </ul>

            <h3 className="font-neuton text-center text-3xl font-bold text-[#4B5D80]">
              If you suspect a need for a psychiatric evaluation and mental
              health <br></br> assessment, it's essential to consult a
              healthcare professional for guidance <br></br> and support. A
              Mental health clinic can offer the necessary expertise and{" "}
              <br></br>
              resources to address your concerns effectively.
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service2Section;
