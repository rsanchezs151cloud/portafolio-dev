import { useEffect, useRef, useState } from 'react';
import './Header.css';
import DarkModeSwitch from '../DarkModeSwitch';
import LanguageSwitcher from '../LanguageSwitcher';
import { useLanguage } from '../../context/LanguageContext';

const Header = () => {

    const { t } = useLanguage();
  

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
                rootMargin: '-160px 0px -60% 0px',
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
            headerHeight - 10;

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
                    <h2 className="titulo">{t("name")}</h2>
                    <p className="subtitulo">{t("nav.subtitle")}</p>
                </div>

                <nav className="navbar">
                    <a
                        href="#hero"
                        onClick={handleNavClick}
                        className={active === 'hero' ? 'active' : ''}
                    >
                        {t("nav.home")}
                    </a>
                    <a
                        href="#clientes"
                        onClick={handleNavClick}
                        className={active === 'clientes' ? 'active' : ''}
                    >
                        {t("nav.jobs")}
                    </a>
                     <a
                        href="#proyectos"
                        onClick={handleNavClick}
                        className={active === 'proyectos' ? 'active' : ''}
                    >
                        {t("nav.projects")}
                    </a>
                    <a
                        href="#acerca-de"
                        onClick={handleNavClick}
                        className={active === 'acerca-de' ? 'active' : ''}
                    >
                        {t("nav.about")}
                    </a>
                    <a
                        href="#contacto"
                        onClick={handleNavClick}
                        className={active === 'contacto' ? 'active' : ''}
                    >
                        {t("nav.contact")}
                    </a>
                </nav>
                <div className="toolbar">
                    <LanguageSwitcher />
                    <DarkModeSwitch />
                </div>

                
            </div>
        </header>
    );
};

export default Header;
