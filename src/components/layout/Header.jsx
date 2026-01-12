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
        const trabajos = document.getElementById('clientes');
        if (!trabajos) return;

        const onScroll = () => {
            const trigger = trabajos.offsetTop - 160;
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
                    <h2 className="titulo">Roberto C. Sánchez</h2>
                    <p className="subtitulo">Lider de proyectos, Desarrollador Fullstack & Freelance</p>
                </div>

                <nav className="navbar">
                    <a
                        href="#hero"
                        onClick={handleNavClick}
                        className={active === 'hero' ? 'active' : ''}
                    >
                        inicio
                    </a>
                    <a
                        href="#clientes"
                        onClick={handleNavClick}
                        className={active === 'clientes' ? 'active' : ''}
                    >
                        Clientes
                    </a>
                     <a
                        href="#proyectos"
                        onClick={handleNavClick}
                        className={active === 'proyectos' ? 'active' : ''}
                    >
                        Proyectos
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
