import Header from "./components/layout/Header";
import Hero from "./components/layout/Hero";
import Clientes from "./components/layout/Clientes";
import AcercaDe from "./components/layout/AcercaDe";
import Contacto from "./components/layout/Contacto";
import Footer from "./components/layout/Footer";
import Proyectos from "./components/layout/Proyectos";

function App() {
    return (
        <>
            {/* Header fuera del contenedor */}
            <Header />

            <div className="contenedor">
                <Hero />
                <Clientes />
                <Proyectos />
                <AcercaDe />
                <Contacto />
                <Footer />
            </div>
        </>
    );
}

export default App;

