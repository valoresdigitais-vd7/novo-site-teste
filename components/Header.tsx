import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { SITE_NAV_LINKS, LANDING_NAV_LINKS } from '../constants';
import type { NavLink } from '../types';
import minhaImagem from '../src/assets/logo.webp';

const Header: React.FC = () => {
    const location = useLocation();
    const isLandingPage = location.pathname === '/landing';
    const isHomePage = location.pathname === '/';
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [filteredLandingLinks, setFilteredLandingLinks] = useState<NavLink[]>(LANDING_NAV_LINKS);

    // Detectar seções existentes na landing page
    useEffect(() => {
        if (isLandingPage) {
            // Aguardar a renderização completa da página
            const checkSections = () => {
                const availableLinks = LANDING_NAV_LINKS.filter(link => {
                    if (link.href.startsWith('#')) {
                        const sectionId = link.href.substring(1);
                        const element = document.getElementById(sectionId);
                        return element !== null;
                    }
                    return true; // Manter links que não são âncoras
                });
                setFilteredLandingLinks(availableLinks);
            };

            // Executar após um pequeno delay para garantir que o DOM está pronto
            const timer = setTimeout(checkSections, 100);

            // Também verificar quando a página é completamente carregada
            if (document.readyState === 'complete') {
                checkSections();
            } else {
                window.addEventListener('load', checkSections);
            }

            return () => {
                clearTimeout(timer);
                window.removeEventListener('load', checkSections);
            };
        }
    }, [isLandingPage]);

    const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const targetId = href.substring(1);
        const element = document.getElementById(targetId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMobileMenuOpen(false);
    };
    
    const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        if (isHomePage || isLandingPage) {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    const navLinks = isLandingPage ? filteredLandingLinks : SITE_NAV_LINKS;

    return (
        <header className="sticky top-0 z-50 bg-neutral-100/80 backdrop-blur-sm border-b border-neutral-200 transition-colors">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                            <Link to="/" onClick={handleLogoClick}>
                            <img src={minhaImagem} alt="zapvoice" className="h-8 w-auto" />
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex md:space-x-8">
                        {navLinks.map((link: NavLink) => (
                           link.href.startsWith('#')
                            ? <a
                                key={link.name}
                                href={link.href}
                                onClick={(e) => handleAnchorClick(e, link.href)}
                                className="text-neutral-600 hover:text-primary font-medium transition-colors"
                              >
                                {link.name}
                              </a>
                            : <Link
                                key={link.name}
                                to={link.href}
                                className="text-neutral-600 hover:text-primary font-medium transition-colors"
                              >
                                {link.name}
                              </Link>
                        ))}
                    </nav>

                    <div className="flex items-center">
                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="md:hidden p-2 rounded-md text-neutral-600 hover:bg-neutral-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                            aria-label="Toggle menu"
                        >
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                {isMobileMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isMobileMenuOpen && (
                    <nav className="md:hidden py-4 border-t border-neutral-200">
                        <div className="flex flex-col space-y-3">
                            {navLinks.map((link: NavLink) => (
                                link.href.startsWith('#')
                                    ? <a
                                        key={link.name}
                                        href={link.href}
                                        onClick={(e) => handleAnchorClick(e, link.href)}
                                        className="px-3 py-2 text-neutral-600 hover:text-primary hover:bg-neutral-200 rounded-md font-medium transition-colors"
                                    >
                                        {link.name}
                                    </a>
                                    : <Link
                                        key={link.name}
                                        to={link.href}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="px-3 py-2 text-neutral-600 hover:text-primary hover:bg-neutral-200 rounded-md font-medium transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                            ))}
                        </div>
                    </nav>
                )}
            </div>
        </header>
    );
};

export default Header;
