import { useEffect, useRef, useState } from 'react';
import './Header.css';
import DarkModeSwitch from '../DarkModeSwitch';

const Header = () => {
    const headerRef = useRef(null);
    const [isFixed, setIsFixed] = useState(false);
    const [active, setActive] = useState('');

    /* ===============================
       Sticky header suave
    =============================== */
    useEffect(() => {
        const clientes = document.getElementById('clientes');
        if (!clientes) return;

        const onScroll = () => {
            const trigger = clientes.offsetTop - 140;
            setIsFixed(window.scrollY >= trigger);
        };

        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    /* ===============================
       Scroll spy (subrayado activo)
    =============================== */
    useEffect(() => {
        const sections = document.querySelectorAll('section[id]');

        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setActive(entry.target.id);
                    }
                });
            },
            {
                rootMargin: '-140px 0px -60% 0px',
                threshold: 0.2
            }
        );

        sections.forEach(section => observer.observe(section));
        return () => observer.disconnect();
    }, []);

    /* ===============================
       Scroll suave al hacer click
    =============================== */
    const handleNavClick = e => {
        e.preventDefault();
        const id = e.currentTarget.getAttribute('href');
        const target = document.querySelector(id);
        if (!target) return;

        const headerHeight = headerRef.current.offsetHeight;

        const y =
            target.getBoundingClientRect().top +
            window.pageYOffset -
            headerHeight -
            20;

        window.scrollTo({
            top: y,
            behavior: 'smooth'
        });
    };

    return (
        <header
            ref={headerRef}
            className={`header ${isFixed ? 'fixed' : ''}`}
        >
            <div className="header-inner">
                <div className="logo">
                    <h2 className="titulo">Carlos Arturo</h2>
                    <p className="subtitulo">Desarrollador Web & Freelance</p>
                </div>

                <nav className="navbar">
                    <a
                        href="#clientes"
                        onClick={handleNavClick}
                        className={active === 'clientes' ? 'active' : ''}
                    >
                        Clientes
                    </a>
                    <a
                        href="#trabajos"
                        onClick={handleNavClick}
                        className={active === 'trabajos' ? 'active' : ''}
                    >
                        Trabajos
                    </a>
                    <a
                        href="#acerca-de"
                        onClick={handleNavClick}
                        className={active === 'acerca-de' ? 'active' : ''}
                    >
                        Acerca de
                    </a>
                    <a
                        href="#contacto"
                        onClick={handleNavClick}
                        className={active === 'contacto' ? 'active' : ''}
                    >
                        Contacto
                    </a>
                </nav>

                <DarkModeSwitch />
            </div>
        </header>
    );
};

export default Header;
