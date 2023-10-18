import React from "react";
import {
  FaSuperpowers,
  FaStopwatch20,
  FaGaugeSimpleHigh,
  FaArrowLeft,
} from "react-icons/fa6";
const SingleCar = ({ dataCar, handleChangePage }) => {
  return (
    <div className="single-car">
      <button onClick={handleChangePage} className="change-page">
        <FaArrowLeft /> powrót do panelu
      </button>
      <div className="single-car-box">
        <div className="single-car-left">
          <img src={dataCar.img} alt={dataCar.name} className="car-img" />
          <h2 className="single-car-performance">Osiągi</h2>
          <div className="icons-single-car">
            <div className="icon">
              <FaSuperpowers />
              <p>{dataCar.performance.hp}</p>
            </div>
            <div className="icon">
              <FaGaugeSimpleHigh />
              <p>{dataCar.performance.nm}</p>
            </div>
            <div className="icon">
              <FaStopwatch20 />
              <p>{dataCar.performance.acc}</p>
            </div>
          </div>
        </div>
        <div className="single-car-right">
          <h2>{dataCar.name}</h2>
          <p className="price price-single-car">od {dataCar.price}</p>
          <p>{dataCar.description}</p>
        </div>
      </div>
    </div>
  );
};
export default SingleCar;
