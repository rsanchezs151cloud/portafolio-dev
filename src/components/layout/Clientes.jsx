import { useState } from "react";
import "./Clientes.css";
import { useLanguage } from "../../context/LanguageContext";

const Clientes = () => {
  const { t } = useLanguage();
  const [stopScroll, setStopScroll] = useState(false);


  const cardData = [
    {
      title: "Tata Consultancy Services.",
      image: "./assets/logos/TCS.svg",
    },
    {
      title: "Grupo Salinas.",
      image: "./assets/logos/grupo-salinas.webp",
    },
    {
      title: "Servicios empresariales Zimag.",
      image: "./assets/logos/Zimag.jpg",
    },
    {
      title: "Freelance.",
      image: "./assets/logos/freelance.jpeg",
    },
  ];

  return (
    <section className="clientes" id="clientes">
        <div className="encabezado">
                <h3 className="titulo">{t("customers.title")}</h3>
                <p className="subtitulo">
                  {t("customers.subtitle")}
                </p>
            </div>
    <div
      className="clientes-wrapper"
      onMouseEnter={() => setStopScroll(true)}
      onMouseLeave={() => setStopScroll(false)}
    >
      <div className="fade-left" />

      <div
        className="marquee-inner"
        style={{
          animationPlayState: stopScroll ? "paused" : "running",
          animationDuration: cardData.length * 2500 + "ms",
        }}
      >
        {[...cardData, ...cardData].map((card, index) => (
          <div key={index} className="card">
            <img src={card.image} alt={card.title} />
            <div className="card-overlay">
              <p>{card.title}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="fade-right" />
    </div>
    </section>
  );
};

export default Clientes;
