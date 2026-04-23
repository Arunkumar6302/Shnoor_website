import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import BrandLogo from "./BrandLogo";
import { useCompany } from "../company";

function Layout() {
  const { siteSettings } = useCompany();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);
  
  return (
    <div className="site-shell">
      <div className="site-header-wrapper">
        <header className="site-header container">
          <NavLink className="brand-lockup" to="/">
            <BrandLogo />
            <span className="brand-text-group">
              <span className="brand-mark">SHNOOR</span>
              <span className="brand-subtitle">International LLC</span>
            </span>
          </NavLink>

          <button 
            className={`mobile-menu-toggle ${isMenuOpen ? 'active' : ''}`} 
            onClick={toggleMenu}
            aria-label="Toggle navigation"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <nav className={`site-nav ${isMenuOpen ? 'mobile-active' : ''}`}>
            <NavLink to="/" onClick={closeMenu}>Home</NavLink>
            <NavLink to="/about" onClick={closeMenu}>About</NavLink>
            
            <div className="nav-dropdown">
              <NavLink to="/services" className="dropdown-trigger" onClick={closeMenu}>
                Services <span className="dropdown-arrow">▼</span>
              </NavLink>
              <div className="dropdown-menu">
                <NavLink to="/services/cloud-management" onClick={closeMenu}>Cloud</NavLink>
                <NavLink to="/services/enterprise-management" onClick={closeMenu}>Enterprise Management</NavLink>
                <NavLink to="/services/data-and-artificial-intelligence" onClick={closeMenu}>Data & Artificial Intelligence</NavLink>
                <NavLink to="/services/consulting-and-staffing" onClick={closeMenu}>Consulting & Staffing</NavLink>
                <NavLink to="/services/background-verification" onClick={closeMenu}>Background verification</NavLink>
                <NavLink to="/services/network-management" onClick={closeMenu}>Network Management</NavLink>
                <NavLink to="/services/healthcare" onClick={closeMenu}>Health Care</NavLink>
              </div>
            </div>

            <NavLink to="/logistics-management" onClick={closeMenu}>Logistics</NavLink>
            <NavLink to="/export-management" onClick={closeMenu}>Export</NavLink>
            <NavLink to="/careers" onClick={closeMenu}>Careers</NavLink>
            <NavLink to="/contact" onClick={closeMenu}>Contact</NavLink>
          </nav>
        </header>
      </div>

      <Outlet />

      <footer className="site-footer bg-alt">
        <div className="container site-footer-inner">
          <div>
            <p className="footer-title">SHNOOR INTERNATIONAL LLC</p>
            <p className="footer-copy">©Copyrights 2025. All Rights Reserved.</p>
            <div className="footer-links" style={{marginTop: '24px'}}>
              <NavLink to="/privacy-policy">Privacy Policy.</NavLink>
              <NavLink to="/terms-conditions">Terms & Conditions.</NavLink>
              <NavLink to="/about">Company Profile.</NavLink>
            </div>
            <div style={{display: 'flex', gap: '16px', marginTop: '24px'}}>
              <a href={siteSettings.instagram} target="_blank" rel="noreferrer" className="social-icon" aria-label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href={`mailto:${siteSettings.generalEmail}`} className="social-icon" aria-label="Email">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              </a>
              <a href={siteSettings.twitter} target="_blank" rel="noreferrer" className="social-icon" aria-label="Twitter">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
              </a>
              <a href={siteSettings.linkedin} target="_blank" rel="noreferrer" className="social-icon" aria-label="LinkedIn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
            </div>
          </div>

          <div className="footer-links">
            <h4 style={{color: 'var(--navy)', marginBottom: '8px'}}>Services</h4>
            <NavLink to="/services/cloud-management">Cloud</NavLink>
            <NavLink to="/services/enterprise-management">Enterprise Management</NavLink>
            <NavLink to="/services/data-and-artificial-intelligence">Data & Artificial Intelligence</NavLink>
            <NavLink to="/services/consulting-and-staffing">Consulting & Staffing</NavLink>
            <NavLink to="/services/background-verification">Background verification</NavLink>
            <NavLink to="/services/network-management">Network Management</NavLink>
            <NavLink to="/services/healthcare">Health Care</NavLink>
          </div>



          <div className="footer-links">
            <h4 style={{color: 'var(--navy)', marginBottom: '8px'}}>Contacts</h4>
            <a href={`mailto:${siteSettings.generalEmail}`}>📧 {siteSettings.generalEmail} (General)</a>
            <a href={`mailto:${siteSettings.salesEmail}`}>📧 {siteSettings.salesEmail} (Sales)</a>
            
            <h4 style={{color: 'var(--navy)', marginTop: '24px', marginBottom: '8px'}}>Location</h4>
            <p style={{color: 'var(--muted)', fontSize: '0.95rem'}}>{siteSettings.address}</p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Action Button */}
      <a 
        href={`https://wa.me/${siteSettings.whatsapp.replace(/[^0-9]/g, '')}`} 
        target="_blank" 
        rel="noopener noreferrer"
        style={{
          position: 'fixed',
          bottom: '30px',
          right: '30px',
          backgroundColor: '#25D366',
          color: 'white',
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
          zIndex: 1000,
          transition: 'transform 0.3s ease'
        }}
        onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
        onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
        aria-label="Chat on WhatsApp"
      >
        <svg width="35" height="35" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.031 0C5.385 0 0 5.388 0 12.034c0 2.12.553 4.195 1.603 6.012L.416 23.584l5.688-1.492c1.761.968 3.754 1.477 5.927 1.477 6.646 0 12.031-5.388 12.031-12.034S18.677 0 12.031 0zm.006 21.657c-1.802 0-3.567-.484-5.114-1.402l-.367-.217-3.8.997.994-3.704-.238-.378a10.158 10.158 0 0 1-1.554-5.466c0-5.613 4.567-10.181 10.18-10.181s10.18 4.568 10.18 10.181c0 5.614-4.568 10.181-10.181 10.181zm5.586-7.625c-.306-.153-1.812-.894-2.093-.997-.28-.103-.485-.153-.689.153-.205.306-.791.997-.97 1.201-.179.204-.357.23-.663.076-.306-.153-1.291-.476-2.459-1.517-.908-.81-1.52-1.81-1.699-2.116-.179-.306-.019-.472.134-.625.137-.137.306-.357.459-.536.153-.178.204-.306.306-.51.102-.204.051-.383-.026-.536-.076-.153-.689-1.66-.944-2.272-.249-.596-.502-.515-.689-.524-.179-.009-.383-.01-.587-.01-.204 0-.536.076-.816.383-.28.306-1.071 1.047-1.071 2.553s1.097 2.962 1.25 3.166c.153.204 2.158 3.294 5.23 4.616 2.378 1.021 3.205.996 3.844.843.73-.175 2.155-.882 2.461-1.734.306-.852.306-1.583.214-1.736-.091-.153-.346-.245-.652-.398z"/>
        </svg>
      </a>
    </div>
  );
}

export default Layout;
