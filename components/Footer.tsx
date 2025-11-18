import React from 'react';
import { Link } from 'react-router-dom';
import { FOOTER_LINKS } from '../constants';

const FooterLink: React.FC<{ href: string; name: string }> = ({ href, name }) => {
  const className = "text-sm text-neutral-400 hover:text-white transition-colors";
  if (href.startsWith('/')) {
    return <Link to={href} className={className}>{name}</Link>;
  }
  return <a href={href} className={className}>{name}</a>;
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-800 text-neutral-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Logo */}
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold text-secondary-light">{FOOTER_LINKS.company.name}</h3>
          <p className="mt-2 text-sm text-neutral-400">{FOOTER_LINKS.company.description}</p>
        </div>

        {/* Terms in One Line */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
          {FOOTER_LINKS.legal.map((link, index) => (
            <React.Fragment key={link.name}>
              <FooterLink href={link.href} name={link.name} />
              {index < FOOTER_LINKS.legal.length - 1 && (
                <span className="text-neutral-600">|</span>
              )}
            </React.Fragment>
          ))}
        </div>

        <div className="mt-6 text-center text-sm text-neutral-500">
          <p>&copy; {new Date().getFullYear()} {FOOTER_LINKS.company.name}. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;