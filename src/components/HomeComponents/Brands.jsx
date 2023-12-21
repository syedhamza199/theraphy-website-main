import Sponsors from "../../assets/images/brands.png";

const Brands = () => {
  return (
    <>
    <div className="brand-section">
      <div className="container mt-24 mb-24">
        <div className="grid grid-cols-12">
          <div className="col-span-3"></div>
          <div className="col-span-8">
            <img className="mx-auto" src={Sponsors} alt="Sponsors" style={{marginLeft: '160px'}} />
          </div>
          <div className="col-span-3"></div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Brands;
