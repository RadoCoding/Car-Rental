import React from "react";
import "../css/SingleCar.css";
import {
  FaSuperpowers,
  FaStopwatch20,
  FaGaugeSimpleHigh,
} from "react-icons/fa6";
const CarPanel = ({ listCar, handleClickCar }) => {
  return (
    <section className="ourCars" id="ourCars">
      <h2>Oferta</h2>
      <div className="cars">
        {listCar.map((car) => (
          <div className="car1" key={car.name}>
            <div className="mercedes">
              <img src={car.img} alt={car.name} />
            </div>
            <h3>{car.name}</h3>

            <div className="performance">
              <div className="icon">
                <FaSuperpowers />
                <p>{car.performance.hp}</p>
              </div>
              <div className="icon">
                <FaGaugeSimpleHigh />
                <p>{car.performance.nm}</p>
              </div>
              <div className="icon">
                <FaStopwatch20 />
                <p>{car.performance.acc}</p>
              </div>
            </div>
            <p className="price">od {car.price}</p>
            <p className="priceInfo">cena brutto za dobę</p>
            <br />
            <button className="btn-car" onClick={handleClickCar} id={car.id}>
              Zobacz
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};
export default CarPanel;
