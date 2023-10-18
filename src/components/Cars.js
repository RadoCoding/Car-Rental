import React, { useState } from "react";
import CarPanel from "./CarPanel";
import SingleCar from "../components/SingleCar";
import "../css/Cars.css";
import audi from "../img/audirs6.jpg";
import bwm_m4 from "../img/bmwm4.jpg";
import mercedes from "../img/mercedes-benz-1470115_1280.jpg";
import lamborghini from "../img/lamborgini-4565343_1280.jpg";
import mercedes_s_coupe from "../img/mercedes_s_coupe.jpg";
import mustang from "../img/mustang-mobile.jpg";

const Cars = () => {
  const [isActiveCar, setIsActiveCar] = useState(false);
  const [dataCar, setDataCar] = useState([]);
  const listCar = [
    {
      id: 0,
      name: "Mercedes AMG GTS",
      img: mercedes,
      price: "3000 zł",
      performance: {
        hp: "456km",
        nm: "700Nm",
        acc: "4,6 s",
      },
      description:
        "Mercedes-AMG GT to sportowy samochód produkowany przez niemieckiego producenta Mercedes-AMG, znanego ze specjalizacji w high-performance i wyścigowych wersjach Mercedes-Benz. Ten model jest dostępny w różnych wariantach, w tym coupé i kabriolet, a jego charakterystyczny wygląd i dynamiczne osiągi przyciągają uwagę miłośników sportowych samochodów. AMG GT jest napędzany mocnym silnikiem V8, który generuje znaczną ilość mocy, co pozwala na osiągnięcie bardzo imponujących osiągów. Samochód charakteryzuje się niskim profilem, muskularnymi nadkolami i charakterystycznym grillem. Wnętrze AMG GT jest luksusowe i oferuje zaawansowane technologie, a kierowca ma do dyspozycji rozbudowany system kontroli i dostosowywania parametrów jazdy. Mercedes-AMG GT to samochód stworzony z myślą o emocjonującej jeździe na torze i drogach, łączący w sobie wydajność i luksus. To model zbudowany z myślą o miłośnikach sportowego stylu życia i wyjątkowego doświadczenia za kierownicą.",
    },
    {
      id: 1,
      name: "Audi RS6",
      img: audi,
      price: "2000 zł",
      performance: {
        hp: "600km",
        nm: "800Nm",
        acc: "3,6 s",
      },
      description:
        "Audi RS6 to sportowy samochód produkowany przez niemieckiego producenta Audi. Jest to model z segmentu sportowych kombi, charakteryzujący się wyjątkową wydajnością i stylowym designem. RS6 jest napędzany mocnym silnikiem V8, który generuje znaczną ilość mocy i momentu obrotowego, co pozwala na osiągnięcie bardzo imponujących osiągów. Samochód jest wyposażony w zaawansowany system napędu na cztery koła quattro, co gwarantuje doskonałą przyczepność i stabilność na drodze. RS6 to kombi, co oznacza, że oferuje przestronne wnętrze i dużą pojemność bagażnika, co sprawia, że jest praktycznym wyborem nawet dla rodzin. To także samochód, który łączy w sobie luksusowe wykończenie i zaawansowane technologie, co czyni go jednym z flagowych modeli w gamie Audi.",
    },
    {
      id: 2,
      name: "BMW M4",
      img: bwm_m4,
      price: "1600 zł",
      performance: {
        hp: "480km",
        nm: "550Nm",
        acc: "4,2 s",
      },
      description:
        "BMW M4 to sportowy samochód produkowany przez niemieckiego producenta BMW. Jest to model z segmentu średniej wielkości coupé lub kabriolet, który wyróżnia się wyjątkową wydajnością i sportowym charakterem. M4 jest dostępny z różnymi wersjami silników, z których najpotężniejsze generują znaczną ilość mocy, co pozwala na osiągnięcie imponujących osiągów. Samochód jest wyposażony w zaawansowany system napędu na tylną oś lub opcjonalnie na wszystkie koła, co gwarantuje doskonałą przyczepność i prowadzenie. M4 charakteryzuje się również agresywnym designem, który podkreśla jego sportowy charakter. Wnętrze jest zaprojektowane z myślą o kierowcy i oferuje zaawansowane technologie oraz komfortowe wykończenie. To samochód stworzony dla miłośników szybkiej jazdy i sportowych osiągów.            ",
    },
    {
      id: 3,
      name: "Lamborghini Huracan",
      img: lamborghini,
      price: "5000 zł",
      performance: {
        hp: "640km",
        nm: "600Nm",
        acc: "3,0 s",
      },
      description:
        'Lamborghini Huracan to luksusowy supersamochód produkowany przez włoskiego producenta Lamborghini. Model ten jest znany z wyjątkowego wyglądu i niezwykłej wydajności. Huracan jest napędzany potężnym silnikiem V10, który generuje ogromną moc i pozwala na osiągnięcie imponujących osiągów. Samochód charakteryzuje się niskim profilem, agresywnym designem i charakterystycznymi drzwiami typu "skrzydło mewy". Wnętrze Huracana jest luksusowe i futurystyczne, a kierowca ma do dyspozycji zaawansowane systemy sterowania i monitorowania. To samochód stworzony dla miłośników ekstremalnej jazdy i sportowego stylu życia, a także jest jednym z symboli luksusu i prestiżu marki Lamborghini.',
    },
    {
      id: 4,
      name: "Ford Mustang",
      img: mustang,
      price: "500 zł",
      performance: {
        hp: "450km",
        nm: "529Nm",
        acc: "4,3 s",
      },
      description:
        "Ford Mustang to legendarny amerykański samochód sportowy, który zyskał ogromną popularność od swojego debiutu w 1964 roku. To coupé lub kabriolet, charakteryzujący się klasycznym i rozpoznawalnym designem, w tym charakterystycznym grillem i trzema paskami na masce. Mustang to samochód o sportowym charakterze, oferujący różne wersje silników, od oszczędnych po mocne, w tym silniki V6 i V8, co pozwala na wybór odpowiedniej mocy w zależności od preferencji. Model ten słynie z dynamicznej jazdy, świetnej przyczepności i wyjątkowo przyjemnego dźwięku silnika. Wnętrze Mustanga jest stylowe i oferuje zaawansowane technologie, a samochód jest często kojarzony z kulturą motoryzacyjną i filmową, co podkreśla jego ikoniczny status. To samochód, który nawiązuje do ducha motoryzacji i daje kierowcy wrażenia z jazdy na otwartej drodze",
    },
    {
      id: 5,
      name: "Mercedes s coupe",
      img: mercedes_s_coupe,
      price: "1800 zł",
      performance: {
        hp: "510km",
        nm: "650Nm",
        acc: "3,8 s",
      },
      description:
        "Mercedes-Benz S Coupe to luksusowe coupé produkowane przez niemieckiego producenta samochodów Mercedes-Benz. Ten model z serii S, która reprezentuje najwyższy poziom luksusu i wyrafinowania, łączy w sobie elegancki design, zaawansowane technologie i imponującą wydajność. S Coupe oferuje szeroki wybór silników, w tym mocne jednostki V8 i V12, co zapewnia doskonałą moc i osiągi. Charakteryzuje się również eleganckim i opływowym designem z charakterystycznym przednim grillem i wyraźnie zarysowanymi liniami nadwozia. Wnętrze samochodu jest luksusowe i komfortowe, wyposażone w najnowsze technologie, w tym zaawansowany system multimedialny i systemy bezpieczeństwa. Mercedes-Benz S Coupe to pojazd, który łączy w sobie sportowe osiągi i wygodę podróżowania, zapewniając kierowcy i pasażerom wyjątkowe doświadczenie jazdy. To idealna opcja dla osób poszukujących luksusu i wyjątkowego stylu.",
    },
  ];
  const handleClickCar = (e) => {
    setIsActiveCar(!isActiveCar);

    setDataCar(listCar[e.target.id]);
  };
  const handleChangePage = () => {
    setIsActiveCar(!isActiveCar);
  };

  return (
    <>
      {isActiveCar ? (
        <SingleCar handleChangePage={handleChangePage} dataCar={dataCar} />
      ) : (
        <CarPanel handleClickCar={handleClickCar} listCar={listCar} />
      )}
    </>
  );
};
export default Cars;
