import "../css/Home.css";
import bmw_m4_coupe from "../img/bmw-m4-2968729_1280.jpg";
import steering_wheel from "../img/bmw-2964072_1280.jpg";
import Aboutus from "./Aboutus";
import Cars from "./Cars";

const Home = () => {
  return (
    <main>
      <section className="services">
        <div className="home">
          <h1>Wypozyczalnia aut sportowych i luksusowych</h1>
        </div>
        <div className="info info_margin">
          <span className="textColor">Jakie usługi oferjumey?</span>
          <h2>Zobacz szereg naszych, usług które oferjumey dla kilentów</h2>
        </div>
        <div className="service">
          <div className="offer1">
            <div className="left">
              <span className="number">01</span>
              <h2>Usługi</h2>
              <p>
                Oferujemy wynajem luksusowych samochodów na krótki okres,
                idealny na wyjątkowe okazje. Dostępne są również usługi
                dodatkowe, takie jak dostawa pod wskazany adres i wynajem
                długoterminowy. Skorzystaj z naszej oferty, aby przeżyć
                ekscytującą jazdę sportowym autem marzeń.
              </p>
            </div>
            <div className="right">
              <img src={bmw_m4_coupe} alt="bmw m4" className="img-service" />
            </div>
          </div>
          <hr />
          <div className="background-offer2">
            <div className="offer2">
              <div className="left">
                <span className="number">02</span>
                <h2>Dostepnę marki</h2>
                <p className="description-service">
                  W naszej wypożyczalni samochodów sportowych oferujemy szeroki
                  wybór ekskluzywnych marek, w tym Ferrari, Lamborghini,
                  Porsche, McLaren i wiele innych. Nasza flota luksusowych
                  pojazdów zapewnia niezapomniane wrażenia z jazdy, idealne na
                  specjalne okazje i wydarzenia. Wybierz swoją wymarzoną markę i
                  rozpocznij niezwykłą przygodę za kierownicą.
                </p>
              </div>
              <div className="right">
                <img
                  src={steering_wheel}
                  alt="kierownica bmw"
                  className="img-service"
                />
              </div>
            </div>
          </div>
          <hr />
          <div className="offer3">
            <span className="number">03</span>
            <h2>Loklizacje</h2>
            <p>
              Nasza wypożyczalnia samochodów sportowych oferuje dostępne
              lokalizacje w trzech miastach Polski: Opolu, Krakowie i Wrocławiu.
              Dzięki dogodnym punktom odbioru w tych miastach, zapewniamy
              klientom możliwość przeżycia niezapomnianych chwil za kierownicą
              luksusowych pojazdów sportowych. Wybierz jedno z tych miast i
              rozpocznij swoją motoryzacyjną przygodę z nami.
            </p>
          </div>
        </div>
      </section>
      <Aboutus />
      <Cars />
    </main>
  );
};
export default Home;
