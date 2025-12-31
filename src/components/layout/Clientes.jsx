import './Clientes.css';

const Clientes = () => {
    return (
        <section className="clientes" id="clientes">
            <div className="encabezado">
                <h3 className="titulo">Mis empleos</h3>
                <p className="subtitulo">
                    Estas empresas han confiado en mis servicios como profesional en sistemas.
                </p>
            </div>

            <div className="logos">
                <img src="./assets/logos/TCS.svg" className="logo" alt="Tata Consultancy Service" />
                <img src="./assets/logos/grupo-salinas.webp" className="logo" alt="Grupo Salinas" />
                <img src="./assets/logos/Zimag.jpg" className="logo" alt="Zimag Logistic" />
                <img src="./assets/logos/freelance.jpeg" className="logo" alt="Waveless" />
            </div>
        </section>
    );
};

export default Clientes;
