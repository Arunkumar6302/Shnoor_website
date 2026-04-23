import { Link } from "react-router-dom";

function CareersPage() {
  return (
    <main style={{background: 'var(--bg)', paddingBottom: '60px'}}>
      {/* 1. Hero / About Section */}
      <section style={{padding: '60px 0 80px 0', overflow: 'hidden', background: 'var(--shadow-blue)'}}>
        <div className="container split-section" style={{alignItems: 'center'}}>
          <div style={{paddingBottom: '0'}}>
            <h1 style={{fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', color: 'var(--navy)', marginBottom: '16px', lineHeight: 1.1}}>
              Find your <span style={{color: 'var(--accent)'}}>future</span>
            </h1>
            <p style={{fontSize: '1.05rem', color: 'var(--navy)', marginBottom: '24px', fontWeight: 600}}>
              Are you ready to take on the challenge? SHNOOR International LLC - Get the future you want.
            </p>
            
            <p style={{fontSize: '0.95rem', color: 'var(--text)', marginBottom: '16px', lineHeight: 1.7}}>
              At SHNOOR International LLC, we believe that great companies are built by great people. We’re looking for innovators, problem-solvers, and go-getters who are passionate about making an impact in the worlds of technology and global trade.
            </p>
            <p style={{fontSize: '0.95rem', color: 'var(--text)', marginBottom: '24px', lineHeight: 1.7}}>
              Whether you’re an IT expert, software developer, SAP consultant, business strategist, or trade professional, this is your chance to be part of a company that values creativity, collaboration, and continuous growth.
            </p>
            
            <div style={{display: 'flex', gap: '16px'}}>
              <a href="#openings" className="primary-button" style={{padding: '12px 24px', fontSize: '0.9rem'}}>View Openings</a>
              <Link to="/about" className="secondary-button" style={{background: 'white', padding: '12px 24px', fontSize: '0.9rem', border: '1px solid var(--line)', color: 'var(--navy)'}}>Discover SHNOOR</Link>
            </div>
          </div>
          
          <div style={{height: '100%', display: 'flex', alignItems: 'flex-end'}}>
            <img 
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800" 
              alt="Professional"
              style={{width: '100%', maxHeight: '500px', objectFit: 'cover', objectPosition: 'top', borderTopLeftRadius: '16px', borderTopRightRadius: '16px', boxShadow: '-10px -10px 40px rgba(0,0,0,0.05)'}}
            />
          </div>
        </div>
      </section>

      <div className="container" style={{display: 'flex', flexDirection: 'column', gap: '32px', marginTop: '-60px', position: 'relative', zIndex: 10}}>
        
        {/* 2. Explore SHNOOR - Pinterest Image Cards inside a transparent wrapper */}
        <div className="content-card" style={{background: 'transparent', boxShadow: 'none', border: 'none', padding: 0}}>
          <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '24px'}}>
            <div>
              <h2 style={{fontSize: '1.8rem', color: 'var(--navy)', marginBottom: '8px'}}>Explore SHNOOR</h2>
              <p style={{color: 'var(--muted)', fontSize: '0.95rem'}}>A dynamic hub where technology meets global trade.</p>
            </div>
            <Link to="/services" className="secondary-button" style={{padding: '8px 20px', fontSize: '0.85rem', background: '#F8FAFC', border: '1px solid var(--line)'}}>View All Services &rsaquo;</Link>
          </div>

          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px'}}>
            <div className="simple-card" style={{padding: '0', overflow: 'hidden'}}>
              <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=600" alt="Team" style={{width: '100%', height: '160px', objectFit: 'cover'}}/>
              <div style={{padding: '24px', flex: 1, display: 'flex', flexDirection: 'column'}}>
                <h3 style={{fontSize: '1.1rem', color: 'var(--navy)', marginBottom: '12px'}}>IT Consulting</h3>
                <p style={{fontSize: '0.9rem', color: 'var(--text)', lineHeight: 1.6, flex: 1, margin: 0}}>
                  When you join us, you become part of a passionate, diverse, and forward-thinking team pushing boundaries and delivering excellence.
                </p>
                <div style={{display: 'flex', alignItems: 'center', gap: '16px', borderTop: '1px solid var(--line)', paddingTop: '16px', marginTop: '20px', fontSize: '0.75rem', color: 'var(--muted)', fontWeight: 600}}>
                  <span>💼 Global Reach</span>
                  <span>⭐ Excellence</span>
                </div>
              </div>
            </div>
            
            <div className="simple-card" style={{padding: '0', overflow: 'hidden'}}>
              <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=600" alt="Meeting" style={{width: '100%', height: '160px', objectFit: 'cover'}}/>
              <div style={{padding: '24px', flex: 1, display: 'flex', flexDirection: 'column'}}>
                <h3 style={{fontSize: '1.1rem', color: 'var(--navy)', marginBottom: '12px'}}>SAP Outsourcing</h3>
                <p style={{fontSize: '0.9rem', color: 'var(--text)', lineHeight: 1.6, flex: 1, margin: 0}}>
                  From Product Development to SAP Outsourcing, our work spans industries, regions, and cutting-edge technologies.
                </p>
                <div style={{display: 'flex', alignItems: 'center', gap: '16px', borderTop: '1px solid var(--line)', paddingTop: '16px', marginTop: '20px', fontSize: '0.75rem', color: 'var(--muted)', fontWeight: 600}}>
                  <span>💼 Global Reach</span>
                  <span>⭐ Excellence</span>
                </div>
              </div>
            </div>

            <div className="simple-card" style={{padding: '0', overflow: 'hidden'}}>
              <img src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=600" alt="Trade" style={{width: '100%', height: '160px', objectFit: 'cover'}}/>
              <div style={{padding: '24px', flex: 1, display: 'flex', flexDirection: 'column'}}>
                <h3 style={{fontSize: '1.1rem', color: 'var(--navy)', marginBottom: '12px'}}>Import & Export</h3>
                <p style={{fontSize: '0.9rem', color: 'var(--text)', lineHeight: 1.6, flex: 1, margin: 0}}>
                  Every career path is a journey of growth, innovation, and impact in international import & export operations.
                </p>
                <div style={{display: 'flex', alignItems: 'center', gap: '16px', borderTop: '1px solid var(--line)', paddingTop: '16px', marginTop: '20px', fontSize: '0.75rem', color: 'var(--muted)', fontWeight: 600}}>
                  <span>💼 Global Reach</span>
                  <span>⭐ Excellence</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Latest Openings Button placed under Explore SHNOOR */}
          <div style={{display: 'flex', justifyContent: 'center', marginTop: '32px'}}>
            <Link to="/latest-openings" className="secondary-button" style={{padding: '12px 32px', fontSize: '0.9rem', background: '#F8FAFC', border: '1px solid var(--line)', color: 'var(--navy)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px'}}>Latest Openings</Link>
          </div>
        </div>

        {/* 3. Recruitment Security Alert -> Content Card */}
        <div className="content-card" style={{padding: '24px', borderLeft: '4px solid #EF4444', display: 'flex', gap: '20px', alignItems: 'flex-start'}}>
          <div style={{fontSize: '1.5rem'}}>⚠️</div>
          <div>
            <h3 style={{color: 'var(--navy)', marginBottom: '8px', fontSize: '1.1rem'}}>Recruitment Security Alert</h3>
            <p style={{fontSize: '0.9rem', color: 'var(--text)', marginBottom: '4px'}}>
              At SHNOOR International LLC, integrity and transparency are at the heart of our recruitment process. We want to alert all job seekers that we <strong>never charge any fees</strong>, request payments, or ask for financial information at any stage of our hiring process.
            </p>
            <p style={{fontSize: '0.85rem', color: 'var(--muted)', marginBottom: '16px'}}>
              Ensure emails strictly come from an official <strong>@shnoor.com</strong> domain. Treat any requests for money as a scam.
            </p>
            <Link to="/recruitment-scams" className="secondary-button" style={{padding: '8px 24px', fontSize: '0.8rem', background: 'transparent', border: '1px solid var(--navy)', color: 'var(--navy)', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 600, borderRadius: '20px', display: 'inline-block', textAlign: 'center'}}>
              Read More
            </Link>
          </div>
        </div>

        {/* 4. Clients / Success Stories -> Content Card Grid */}
        <div className="content-card split-section">
          
          {/* Left Side: Image & Openings block */}
          <div style={{display: 'flex', flexDirection: 'column'}}>
            <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=800" alt="Office" style={{width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px', marginBottom: '24px'}} />
            
            <div id="openings" style={{background: '#F8FAFC', padding: '24px', borderRadius: '8px', border: '1px solid var(--line)', flex: 1}}>
              <h3 style={{fontSize: '1.1rem', color: 'var(--navy)', marginBottom: '8px'}}>Latest Openings</h3>
              <p style={{fontSize: '0.9rem', color: 'var(--text)', marginBottom: '16px'}}>No Current Openings. We are fully staffed at the moment.</p>
              <div style={{display: 'flex', gap: '16px', color: 'var(--muted)', fontSize: '0.8rem', fontWeight: 600}}>
                <span>🏢 Corporate</span>
                <span>🌍 Global Teams</span>
              </div>
            </div>
          </div>

          {/* Right Side: Avatar List of Clients */}
          <div>
            <h2 style={{fontSize: '1.8rem', color: 'var(--navy)', marginBottom: '12px'}}>Our Clients Worldwide</h2>
            <p style={{fontSize: '0.9rem', color: 'var(--muted)', marginBottom: '24px', lineHeight: 1.6}}>
              At SHNOOR International LLC, our clients are at the heart of everything we do. "Building long-term partnerships, one success story at a time."
            </p>

            <div style={{display: 'flex', flexDirection: 'column', gap: '16px'}}>
              <div style={{display: 'flex', gap: '16px', alignItems: 'center'}}>
                <div style={{width: '40px', height: '40px', borderRadius: '50%', background: '#F8FAFC', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '0.8rem', color: '#d1a454', border: '1px solid var(--line)', flexShrink: 0}}>ET</div>
                <div style={{flex: 1, borderBottom: '1px solid var(--line)', paddingBottom: '12px'}}>
                  <h4 style={{fontSize: '0.95rem', color: 'var(--navy)', margin: '0 0 4px 0'}}>ETIHAD</h4>
                  <p style={{fontSize: '0.8rem', color: 'var(--muted)', margin: 0}}>Long-term strategic partnership in global trade services.</p>
                </div>
              </div>

              <div style={{display: 'flex', gap: '16px', alignItems: 'center'}}>
                <div style={{width: '40px', height: '40px', borderRadius: '50%', background: '#F8FAFC', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '0.8rem', color: '#d71921', border: '1px solid var(--line)', flexShrink: 0}}>EM</div>
                <div style={{flex: 1, borderBottom: '1px solid var(--line)', paddingBottom: '12px'}}>
                  <h4 style={{fontSize: '0.95rem', color: 'var(--navy)', margin: '0 0 4px 0'}}>Emirates</h4>
                  <p style={{fontSize: '0.8rem', color: 'var(--muted)', margin: 0}}>Expert Flight Training Solutions and specialized support.</p>
                </div>
              </div>

              <div style={{display: 'flex', gap: '16px', alignItems: 'center'}}>
                <div style={{width: '40px', height: '40px', borderRadius: '50%', background: '#F8FAFC', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '0.8rem', color: '#004c97', border: '1px solid var(--line)', flexShrink: 0}}>CO</div>
                <div style={{flex: 1, borderBottom: '1px solid var(--line)', paddingBottom: '12px'}}>
                  <h4 style={{fontSize: '0.95rem', color: 'var(--navy)', margin: '0 0 4px 0'}}>COSCO SHIPPING</h4>
                  <p style={{fontSize: '0.8rem', color: 'var(--muted)', margin: 0}}>Global logistics, container supply, and maritime operations.</p>
                </div>
              </div>

              <div style={{display: 'flex', gap: '16px', alignItems: 'center'}}>
                <div style={{width: '40px', height: '40px', borderRadius: '50%', background: '#F8FAFC', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '0.8rem', color: '#19215c', border: '1px solid var(--line)', flexShrink: 0}}>ZM</div>
                <div style={{flex: 1, borderBottom: '1px solid var(--line)', paddingBottom: '12px'}}>
                  <h4 style={{fontSize: '0.95rem', color: 'var(--navy)', margin: '0 0 4px 0'}}>ZIM</h4>
                  <p style={{fontSize: '0.8rem', color: 'var(--muted)', margin: 0}}>International shipping and robust operational support.</p>
                </div>
              </div>
            </div>
            
            <p style={{fontSize: '0.8rem', color: 'var(--muted)', marginTop: '16px', fontStyle: 'italic', margin: '16px 0 0 0'}}>
              We take pride in earning the trust of organizations in India, UAE, Bahrain, Qatar, Oman, and Malaysia.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default CareersPage;
