import { useState } from "react";
import "./Clientes.css";

const Clientes = () => {
  const [stopScroll, setStopScroll] = useState(false);


  const cardData = [
    {
      title: "Tata Consultancy Services",
      image: "./assets/logos/TCS.svg",
    },
    {
      title: "Design Your Digital Future",
      image: "./assets/logos/grupo-salinas.webp",
    },
    {
      title: "Build with Passion, Ship with Pride",
      image: "./assets/logos/Zimag.jpg",
    },
    {
      title: "Think Big, Code Smart",
      image: "./assets/logos/freelance.jpeg",
    },
  ];

  return (
    <section className="clientes" id="clientes">
        <div className="encabezado">
                <h3 className="titulo">Mis empleos</h3>
                <p className="subtitulo">
                    Estas empresas han confiado en mis servicios como profesional en sistemas.
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
