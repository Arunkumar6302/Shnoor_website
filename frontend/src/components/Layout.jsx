import { useState } from "react";
import { NavLink, Outlet, Link } from "react-router-dom";
import BrandLogo from "./BrandLogo";
import { useCompany } from "../company";
import { useStore } from "../storeContext";

function Layout() {
  const { siteSettings } = useCompany();
  const { user, login, logout } = useStore();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

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
            
            {/* User Dropdown */}
            <div className="nav-dropdown" onMouseEnter={() => setIsUserMenuOpen(true)} onMouseLeave={() => setIsUserMenuOpen(false)}>
              {!user ? (
                <button onClick={login} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.95rem', fontWeight: 500, fontFamily: 'Inter, sans-serif', padding: '12px 0', marginLeft: '8px', transition: 'color 0.2s' }} onMouseOver={(e) => e.target.style.color = 'var(--accent)'} onMouseOut={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.8)'}>
                  Login / Signup
                </button>
              ) : (
                <>
                  <button aria-label="User Menu" style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', padding: '8px', color: 'rgba(255, 255, 255, 0.8)', marginLeft: '8px' }}>
                    <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                  </button>
                  <div className="dropdown-menu user-menu-dropdown" style={{ display: isUserMenuOpen ? 'flex' : 'none', right: '-10px', left: 'auto', minWidth: '220px', padding: '8px 0', borderRadius: '12px', boxShadow: '0 10px 25px rgba(0,0,0,0.1)', background: 'white' }}>
                    <Link to="/orders" onClick={() => { closeMenu(); setIsUserMenuOpen(false); }} style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 20px', color: 'var(--navy)', textDecoration: 'none', fontSize: '0.95rem', fontWeight: 500 }}>
                      <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg>
                      My Orders
                    </Link>
                    <Link to="/orders" onClick={() => { closeMenu(); setIsUserMenuOpen(false); }} style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 20px', color: 'var(--navy)', textDecoration: 'none', fontSize: '0.95rem', fontWeight: 500 }}>
                      <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                      My Receipts
                    </Link>
                    <Link to="#" onClick={() => { closeMenu(); setIsUserMenuOpen(false); }} style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 20px', color: 'var(--navy)', textDecoration: 'none', fontSize: '0.95rem', fontWeight: 500 }}>
                      <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                      Profile Settings
                    </Link>
                    <div style={{ height: '1px', background: '#f0f0f0', margin: '4px 0' }}></div>
                    <button onClick={() => { logout(); closeMenu(); setIsUserMenuOpen(false); }} style={{ display: 'flex', alignItems: 'center', gap: '12px', background: 'none', border: 'none', width: '100%', padding: '12px 20px', textAlign: 'left', cursor: 'pointer', color: '#ef4444', fontSize: '0.95rem', fontWeight: 500 }}>
                      <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
                      Logout
                    </button>
                  </div>
                </>
              )}
            </div>

            <NavLink to="/contact" className="get-in-touch-btn" onClick={closeMenu} style={{ background: 'transparent', color: 'rgba(255, 255, 255, 0.8)', padding: '10px 0', textDecoration: 'none', fontWeight: 600, marginLeft: '16px', border: 'none' }}>Get in Touch</NavLink>
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
