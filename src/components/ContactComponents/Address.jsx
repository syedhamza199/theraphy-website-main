import Map from "../../assets/images/map.png";
import LocationIcon from "../../assets/images/location.png";

const Address = () => {
  return (
    <>
      <h1 className="text-center text-[#4B5D80] font-neuton text-7xl mt-36">
        Office Addresses
      </h1>
      <div className="relative isolate overflow-hidden py-24 sm:py-32">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-4">
            <div className="me-28">
              <img className="h-auto w-full object-cover" src={Map}></img>
            </div>

            <div className="w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
              <div className="flex gap-44">
                <div>
                  {/* 1st office */}
                  <div>
                    <h4 className="text-[#426853] font-inter font-semibold mb-3 text-md">
                      Office 1
                    </h4>
                    <div className="flex mb-3">
                      <img src={LocationIcon} className="me-4"></img>
                      <h1 className="text-[#4B5D80] font-poppins font-semibold text-xl">
                        Location
                      </h1>
                    </div>
                    <p className="text-[#4B5D80] font-inter font-semibold text-lg mb-3">
                      130 White Horse <br></br> Pike ClementonNJ <br></br> 08021
                    </p>
                    <h1 className="text-[#4B5D80] font-extrabold	font-poppins text-xl">
                      Call Us
                    </h1>
                    <p className="text-[#4B5D80] font-inter font-semibold text-lg mb-3 underline">
                      (856) 378 7830
                    </p>

                    <h1 className="text-[#4B5D80] font-extrabold	font-poppins text-xl">
                      Fax
                    </h1>
                    <p className="text-[#4B5D80] font-inter font-semibold text-lg mb-3 underline">
                      (856) 378 7830
                    </p>
                  </div>

                  <div>
                    <h4 className="text-[#426853] font-inter font-semibold mb-3 text-md">
                      Office 3
                    </h4>
                    <div className="flex mb-3">
                      <img src={LocationIcon} className="me-4"></img>
                      <h1 className="text-[#4B5D80] font-poppins font-semibold text-xl">
                        Location
                      </h1>
                    </div>
                    <p className="text-[#4B5D80] font-inter font-semibold text-lg mb-3">
                      1851 West End <br></br> AvePottsvillePA <br></br> 17901
                    </p>
                    <h1 className="text-[#4B5D80] font-extrabold	font-poppins text-xl">
                      Call Us
                    </h1>
                    <p className="text-[#4B5D80] font-inter font-semibold text-lg mb-3 underline">
                      (570) 622 9101
                    </p>

                    <h1 className="text-[#4B5D80] font-extrabold	font-poppins text-xl">
                      Fax
                    </h1>
                    <p className="text-[#4B5D80] font-inter font-semibold text-lg mb-3 underline">
                      (570) 622 9101
                    </p>
                  </div>
                </div>

                <div>
                  {/* 1st office */}
                  <div>
                    <h4 className="text-[#426853] font-inter font-semibold mb-3 text-md">
                      Office 2
                    </h4>
                    <div className="flex mb-3">
                      <img src={LocationIcon} className="me-4"></img>
                      <h1 className="text-[#4B5D80] font-poppins font-semibold text-xl">
                        Location
                      </h1>
                    </div>
                    <p className="text-[#4B5D80] font-inter font-semibold text-lg mb-3">
                      564 Main Street <br></br> StroudsburgPA <br></br> 18360
                    </p>
                    <h1 className="text-[#4B5D80] font-extrabold	font-poppins text-xl">
                      Call Us
                    </h1>
                    <p className="text-[#4B5D80] font-inter font-semibold text-lg mb-3 underline">
                      (570) 622 9101
                    </p>

                    <h1 className="text-[#4B5D80] font-extrabold	font-poppins text-xl">
                      Fax
                    </h1>
                    <p className="text-[#4B5D80] font-inter font-semibold text-lg mb-3 underline">
                      (570) 622 9101
                    </p>
                  </div>

                  <div>
                    <h4 className="text-[#426853] font-inter font-semibold mb-3 text-md">
                      Office 4
                    </h4>
                    <div className="flex mb-3">
                      <img src={LocationIcon} className="me-4"></img>
                      <h1 className="text-[#4B5D80] font-poppins font-semibold text-xl">
                        Location
                      </h1>
                    </div>
                    <p className="text-[#4B5D80] font-inter font-semibold text-lg mb-3">
                      1 W. Centre  <br></br> StreetMahanoy <br></br> CityPA 17948-0082
                    </p>
                    <h1 className="text-[#4B5D80] font-extrabold	font-poppins text-xl">
                      Call Us
                    </h1>
                    <p className="text-[#4B5D80] font-inter font-semibold text-lg mb-3 underline">
                      (570) 622 9101
                    </p>

                    <h1 className="text-[#4B5D80] font-extrabold	font-poppins text-xl">
                      Fax
                    </h1>
                    <p className="text-[#4B5D80] font-inter font-semibold text-lg mb-3 underline">
                      (570) 300 2778
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Address;
