import "../css/aboutus.css";
import teamwork from "../img/teamwork.jpg";
const Aboutus = () => {
  return (
    <section className="aboutus">
      <div className="aboutus-info">
        <div className="workers">
          <img src={teamwork} alt="praca w zespole" />
        </div>
        <div className="about">
          <div className="info_aboutus">
            <span className="textColor">Poznaj nas!</span>
            <h2>Co warto o nas wiedzieć?</h2>
          </div>
          <p>
            Jesteśmy pasjonatami motoryzacji i chcielibyśmy podzielić się tą
            pasją z Tobą. Nasza wypożyczalnia aut sportowych to miejsce, gdzie
            marzenia stają się rzeczywistością. Oferujemy szeroki wybór
            luksusowych i ekscytujących pojazdów, które pozwolą Ci poczuć
            adrenalinę i przekroczyć granice prędkości. Niezależnie od tego, czy
            to wyjątkowa okazja, wakacyjna przygoda czy po prostu chęć
            wypróbowania czegoś nowego, jesteśmy gotowi dostarczyć Ci
            niezapomniane wrażenia za kierownicą. Odkryj z nami świat aut
            sportowych i zanurz się w emocjach, jakie daje jazda nimi.
          </p>
        </div>
      </div>
    </section>
  );
};
export default Aboutus;
