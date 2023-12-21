import ServiceLeft from "../../assets/images/service1left.png";

const Service6Section = () => {
  return (
    <>
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
                <h1 className="font-neuton font-normal text-5xl mb-5 text-[#4B5D80]">
                  Pharmacogenomics
                </h1>
                <ul>
                  <li className="text-[#4B5D80] font-inter text-lg mb-3">
                    Understanding the Basics
                  </li>
                  <li className="text-[#4B5D80] font-inter text-lg mb-3">
                    Pharmacogenomics (phar·ma·co·ge·no·mics) may be a
                    multisyllabic. However, the relatively
                  </li>
                  <li className="text-[#4B5D80] font-inter text-lg mb-3">
                    new field already has helped many, many people
                  </li>
                </ul>
              </div>
            </div>

            <h1 className="text-[#4B5D80] font-inter font-bold text-start text-2xl mb-5">
              How might my genes impact how well my drugs might work?
            </h1>

            <p className="text-start mb-16 font-inter text-xl font-normal text-[#4B5D80]">
              Some medications may work better with your unique genetic profile,
              and some medicines might not work at all for you. Your genes can
              affect how quickly your body breaks down (metabolizes) medicine
              and gets medicine into your bloodstream. Genesight testing and
              pharmacogenomic testing, which examine your genetic makeup, can
              provide valuable insights into how your body processes
              medications.
            </p>

            <p className="text-start mb-16 font-inter text-xl font-normal text-[#4B5D80]">
              When a medication doesn’t work well with your genes, you may not
              get the relief you need, and you may have unwanted side effects.
              By gathering information about your genetic profile through
              Genesight testing and pharmacogenomic testing, you and your
              healthcare provider can make better-informed decisions regarding
              your treatment. Medicines that align well with your genes may work
              better and with fewer side effects.
            </p>

            <h1 className="text-[#4B5D80] font-inter font-bold text-start text-2xl mb-5">
              What is pharmacogenomics?
            </h1>

            <p className="text-start mb-16 font-inter text-xl font-normal text-[#4B5D80]">
              Pharmacogenomics uses information about a person’s genetic makeup,
              or genome, to choose the medication and dosage that are likely to
              work best for that person.2
            </p>
            <p className="text-start mb-16 font-inter text-xl font-normal text-[#4B5D80]">
              The field of pharmacogenomic testing, including Genesight testing,
              has revolutionized how medications are prescribed and taken. Until
              recently, drugs have been developed in a “one size fits all” kind
              of approach. Pharmacogenomic tests, often discussed in Genesight
              reviews for their effectiveness, evaluate a person’s DNA to
              determine how they may metabolize or respond to medications. This
              type of testing helps guide healthcare providers in choosing
              medications and dosing. While it cannot confirm which medications
              or doses will work for a patient, it can point out which
              medications to avoid.
            </p>

            <h1 className="text-[#4B5D80] font-inter font-bold text-start text-2xl mb-5">
              Do genetics and genomics overlap?
            </h1>

            <p className="text-start mb-10 font-inter text-xl font-normal text-[#4B5D80]">
              No, though it is a common mistake to use genetics and genomics
              interchangeably. Genetics is the study of a single gene and its
              role in how conditions are passed from one generation to the next.
              Genomics is the study of all parts of an organism’s genes.1
              Genesight testing and pharmacogenomic testing, a subset of
              genomics, explores how variations in an individual's genes can
              influence their response to specific medications.
            </p>

            <p className="text-start mb-10 font-inter text-xl font-normal text-[#4B5D80]">
              There are two types of genes studied in pharmacogenomics:
            </p>

            <p className="text-start mb-10 font-inter text-xl font-normal text-[#4B5D80]">
              Pharmacodynamic: these genes make proteins that affect how a
              medication works and what it does to the body
            </p>

            <p className="text-start mb-10 font-inter text-xl font-normal text-[#4B5D80]">
              Pharmacokinetic: these genes make proteins that affect the
              movement of the medication through the body (i.e., enzymes in the
              liver that break down the medications)
            </p>

            <p className="text-start mb-10 font-inter text-xl font-normal text-[#4B5D80]">
              Pharmacogenomic testing, which examines an individual's genetic
              makeup, plays a crucial role in understanding how these genes can
              impact medication response and effectiveness.
            </p>
          </div>

          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <div className="grid gird-col-2 mb-6">
              <div className="flex gap-4">
                <div className="bg-[#59914C] p-6 rounded-lg h-w">
                  <h1 className="text-white font-inter font-bold text-lg mb-4">
                    Abnormal
                  </h1>

                  <h1 className="text-white font-inter font-bold text-lg mb-4">
                    Ultra Rapid Metabolizers (UM)
                  </h1>

                  <p className="text-white font-normal font-inter text-lg mb-10">
                    Increased risk of toxicity from a prodrug due toexcessive
                    formation of active metabolites. Consider reducing the
                    starting dose and monitor for ADE.
                  </p>

                  <p className="text-white font-normal font-inter text-lg">
                    Increased risk of treatment failure from nonprodrugs,
                    consider starting at a higher dose and monitor for lack of
                    efficacy
                  </p>
                </div>

                <div className="bg-[#59914C] p-6 rounded-lg h-w">
                  <h1 className="text-white font-inter font-bold text-lg mb-4">
                    Normal
                  </h1>

                  <h1 className="text-white font-inter font-bold text-lg mb-4">
                    Extensive Metabolizers (EM)
                  </h1>

                  <p className="text-white font-normal font-inter text-lg mb-10">
                    Normal drug metabolism should be expected
                  </p>
                </div>
              </div>
            </div>

            <div className="grid gird-col-2">
              <div className="flex gap-4">
                <div className="bg-[#59914C] p-6 rounded-lg h-w">
                  <h1 className="text-white font-inter font-bold text-lg mb-4">
                    Abnormal
                  </h1>

                  <h1 className="text-white font-inter font-bold text-lg mb-4">
                    Intermediate Metabolizers (IM)
                  </h1>

                  <p className="text-white font-normal font-inter text-lg mb-10">
                    Avoid inhibitors, which would functionally result in poor
                    metabolizer ability
                  </p>

                  <p className="text-white font-normal font-inter text-lg mb-10">
                    Inducers may improve metabolism
                  </p>

                  <p className="text-white font-normal font-inter text-lg">
                    Inconclusive and varied data, often a reduced dose is
                    suggested with close monitoring for ADE
                  </p>
                </div>

                <div className="bg-[#59914C] p-6 rounded-lg h-w">
                  <h1 className="text-white font-inter font-bold text-lg mb-4">
                    Abnormal
                  </h1>

                  <h1 className="text-white font-inter font-bold text-lg mb-4">
                    Poor Metabolizers (PM)
                  </h1>

                  <p className="text-white font-normal font-inter text-lg mb-10">
                    Unlikely to benefi t from a prodrug, consider an alternative
                    drug
                  </p>

                  <p className="text-white font-normal font-inter text-lg mb-10">
                    Increased risk of toxicity from non-prodrugs, consider
                    reducing the starting dose and monitor for ADE
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service6Section;
