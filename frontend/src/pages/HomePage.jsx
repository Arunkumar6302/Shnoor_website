import { useState } from "react";
import { Link } from "react-router-dom";

function HomePage() {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <main style={{background: 'var(--bg)', paddingBottom: '60px'}}>
      {/* 1. Hero Section -> Modeled exactly after CareersPage */}
      <section style={{padding: '60px 0 80px 0', overflow: 'hidden', background: 'var(--shadow-blue)'}}>
        <div className="container split-section" style={{alignItems: 'center'}}>
          <div style={{paddingBottom: '0'}}>
            <h1 style={{fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', color: 'var(--navy)', marginBottom: '16px', lineHeight: 1.1}}>
              Bridging Innovation and Trade with Expert IT Solutions and <span style={{color: 'var(--accent)'}}>Global Reach</span>
            </h1>
            
            <p style={{fontSize: '1rem', color: 'var(--text)', marginBottom: '16px', lineHeight: 1.7}}>
              SHNOOR INTERNATIONAL LLC works progressively in various IT needs, focusing primarily on IT Consulting & Staffing, IT Product Development, Application Designing, and SAP Outsourcing.
            </p>
            <p style={{fontSize: '1rem', color: 'var(--text)', marginBottom: '24px', lineHeight: 1.7}}>
              Headquartered in MUSCAT - Oman, beyond technology, we also specialize in the import and export of quality products from India to the UAE, Bahrain, Qatar, Oman, and Malaysia—building strong trade bridges and lasting partnerships worldwide.
            </p>
            
            <div style={{display: 'flex', gap: '16px'}}>
              <Link to="/services" className="primary-button" style={{padding: '12px 24px', fontSize: '0.9rem'}}>Discover Solutions</Link>
              <Link to="/contact" className="secondary-button" style={{background: 'white', padding: '12px 24px', fontSize: '0.9rem', border: '1px solid var(--line)', color: 'var(--navy)'}}>Contact Us</Link>
            </div>
          </div>
          
          <div style={{height: '100%', display: 'flex', alignItems: 'flex-end'}}>
            <img 
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800" 
              alt="Professional Business"
              style={{width: '100%', maxHeight: '500px', objectFit: 'cover', objectPosition: 'top', borderTopLeftRadius: '16px', borderTopRightRadius: '16px', boxShadow: '-10px -10px 40px rgba(0,0,0,0.05)'}}
            />
          </div>
        </div>
      </section>

      <div className="container" style={{display: 'flex', flexDirection: 'column', gap: '32px', marginTop: '-40px', position: 'relative', zIndex: 10}}>
        
        {/* Predict the Future Card */}
        <div className="content-card split-section" style={{alignItems: 'center'}}>
          <div>
            <img 
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1000" 
              alt="Advanced technology and future concepts" 
              style={{width: '100%', height: '350px', objectFit: 'cover', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)'}}
            />
          </div>
          <div>
            <h2 style={{color: 'var(--navy)', marginBottom: '16px', fontSize: '1.8rem'}}>Predict the future with SHNOOR</h2>
            <p style={{color: 'var(--text)', lineHeight: 1.7, marginBottom: '24px'}}>
              Our team combines industry expertise with innovative thinking to deliver solutions that are tailored, scalable, and future-ready. Whether you’re seeking end-to-end product development, specialized IT talent, or application design that blends functionality with creativity—SHNOOR International is here to help you achieve success.
            </p>
            
            <div className="stats-box" style={{display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '24px', background: '#F8FAFC', padding: '16px 24px', borderRadius: '8px', border: '1px solid var(--line)'}}>
              <div>
                <strong style={{display: 'block', fontSize: '1rem', color: 'var(--navy)', marginBottom: '4px'}}>Top rated by 100+ clients</strong>
                <div style={{ color: '#F59E0B', letterSpacing: '2px', fontSize: '1.2rem' }}>★★★★★</div>
              </div>
              <Link className="primary-button" to="/contact" style={{marginLeft: 'auto', padding: '8px 20px'}}>
                Create it
              </Link>
            </div>
          </div>
        </div>

        {/* Connecting Tech & Trade Card */}
        <div className="content-card split-section" style={{alignItems: 'center'}}>
          <div>
            <h2 style={{color: 'var(--navy)', marginBottom: '16px', fontSize: '1.8rem'}}>Connecting Technology & Trade Together</h2>
            <p style={{color: 'var(--text)', lineHeight: 1.7, marginBottom: '16px'}}>
              At SHNOOR International LLC, we believe innovation should have no borders. Our unique approach combines cutting-edge IT solutions with seamless global trade services, helping businesses thrive in both the digital space and the global marketplace.
            </p>
            <p style={{color: 'var(--text)', lineHeight: 1.7, marginBottom: '16px'}}>
              From IT Consulting, Product Development, Application Design, and SAP Outsourcing to the import and export of premium products between India and the UAE, Bahrain, Qatar, Oman, and Malaysia—we are your single partner for growth.
            </p>
            <p style={{color: 'var(--text)', lineHeight: 1.7}}>
              By blending technological expertise with international trade experience, we empower organizations to innovate faster, operate smarter, and reach new markets with confidence.
            </p>
          </div>
          <div>
            <img 
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=1000" 
              alt="man wearing black top" 
              style={{width: '100%', height: '400px', objectFit: 'cover', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)'}} 
            />
          </div>
        </div>

        {/* Latest News Container */}
        <div className="content-card" style={{background: 'transparent', boxShadow: 'none', border: 'none', padding: 0}}>
          <div style={{textAlign: 'center', marginBottom: '32px'}}>
            <p style={{color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 600, fontSize: '0.85rem', marginBottom: '8px'}}>Insights</p>
            <h2 style={{color: 'var(--navy)', margin: 0, fontSize: '2rem'}}>Latest News</h2>
          </div>
          
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px'}}>
            
            {currentPage === 1 && (
              <>
                <article className="simple-card" style={{padding: '0', overflow: 'hidden'}}>
                  <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800" alt="SAP Cloud Network" style={{width: '100%', height: '180px', objectFit: 'cover'}} />
                  <div style={{padding: '24px', display: 'flex', flexDirection: 'column', flex: 1}}>
                    <h3 style={{fontSize: '1.1rem', color: 'var(--navy)', marginBottom: '12px', lineHeight: 1.4}}>SAP MM (Materials Management): A Comprehensive Overview, Features, and Business Benefits</h3>
                    <p style={{flex: 1, color: 'var(--text)', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '20px'}}>Learn how SAP MM helps businesses manage procurement, inventory, and vendor processes efficiently.</p>
                    <div style={{display: 'flex', justifyContent: 'space-between', borderTop: '1px solid var(--line)', paddingTop: '16px', fontSize: '0.8rem'}}>
                      <span style={{color: 'var(--accent)', fontWeight: 600}}>12/16/2025</span>
                      <span style={{color: 'var(--muted)'}}>2 min read</span>
                    </div>
                  </div>
                </article>

                <article className="simple-card" style={{padding: '0', overflow: 'hidden'}}>
                  <img src="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&q=80&w=800" alt="Shipping Container" style={{width: '100%', height: '180px', objectFit: 'cover'}} />
                  <div style={{padding: '24px', display: 'flex', flexDirection: 'column', flex: 1}}>
                    <h3 style={{fontSize: '1.1rem', color: 'var(--navy)', marginBottom: '12px', lineHeight: 1.4}}>Import & Export Solutions for India & UAE: Simplifying Global Trade Operations</h3>
                    <p style={{flex: 1, color: 'var(--text)', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '20px'}}>Discover reliable import and export solutions for India and UAE. Learn about trade processes, documentation, customs clearance.</p>
                    <div style={{display: 'flex', justifyContent: 'space-between', borderTop: '1px solid var(--line)', paddingTop: '16px', fontSize: '0.8rem'}}>
                      <span style={{color: 'var(--accent)', fontWeight: 600}}>12/15/2025</span>
                      <span style={{color: 'var(--muted)'}}>3 min read</span>
                    </div>
                  </div>
                </article>

                <article className="simple-card" style={{padding: '0', overflow: 'hidden'}}>
                  <img src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80&w=800" alt="Security Lock Shield" style={{width: '100%', height: '180px', objectFit: 'cover'}} />
                  <div style={{padding: '24px', display: 'flex', flexDirection: 'column', flex: 1}}>
                    <h3 style={{fontSize: '1.1rem', color: 'var(--navy)', marginBottom: '12px', lineHeight: 1.4}}>Building Trust and Security Through Reliable Background Verification Services</h3>
                    <p style={{flex: 1, color: 'var(--text)', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '20px'}}>Protect your organization with our professional background verification solutions. We help you validate candidate credentials.</p>
                    <div style={{display: 'flex', justifyContent: 'space-between', borderTop: '1px solid var(--line)', paddingTop: '16px', fontSize: '0.8rem'}}>
                      <span style={{color: 'var(--accent)', fontWeight: 600}}>10/14/2025</span>
                      <span style={{color: 'var(--muted)'}}>2 min read</span>
                    </div>
                  </div>
                </article>
              </>
            )}

            {currentPage === 2 && (
              <>
                <article className="simple-card" style={{padding: '0', overflow: 'hidden'}}>
                  <img src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=800" alt="Background Verification" style={{width: '100%', height: '180px', objectFit: 'cover'}} />
                  <div style={{padding: '24px', display: 'flex', flexDirection: 'column', flex: 1}}>
                    <h3 style={{fontSize: '1.1rem', color: 'var(--navy)', marginBottom: '12px', lineHeight: 1.4}}>Understanding the Significance of Background Verification Services for Businesses</h3>
                    <p style={{flex: 1, color: 'var(--text)', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '20px'}}>Ensure safe and reliable hiring with our end-to-end background verification services. From employment and education checks to criminal and address verification.</p>
                    <div style={{display: 'flex', justifyContent: 'space-between', borderTop: '1px solid var(--line)', paddingTop: '16px', fontSize: '0.8rem'}}>
                      <span style={{color: 'var(--accent)', fontWeight: 600}}>10/13/2025</span>
                      <span style={{color: 'var(--muted)'}}>2 min read</span>
                    </div>
                  </div>
                </article>

                <article className="simple-card" style={{padding: '0', overflow: 'hidden'}}>
                  <img src="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&q=80&w=800" alt="Spatial Computing" style={{width: '100%', height: '180px', objectFit: 'cover'}} />
                  <div style={{padding: '24px', display: 'flex', flexDirection: 'column', flex: 1}}>
                    <h3 style={{fontSize: '1.1rem', color: 'var(--navy)', marginBottom: '12px', lineHeight: 1.4}}>Exploring Spatial Computing: The Intersection of Digital and Physical Worlds</h3>
                    <p style={{flex: 1, color: 'var(--text)', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '20px'}}>Explore how spatial computing and XR technologies are powering the metaverse. See how AR, VR, and MR are revolutionizing industries like healthcare, retail, and education.</p>
                    <div style={{display: 'flex', justifyContent: 'space-between', borderTop: '1px solid var(--line)', paddingTop: '16px', fontSize: '0.8rem'}}>
                      <span style={{color: 'var(--accent)', fontWeight: 600}}>10/3/2025</span>
                      <span style={{color: 'var(--muted)'}}>2 min read</span>
                    </div>
                  </div>
                </article>

                <article className="simple-card" style={{padding: '0', overflow: 'hidden'}}>
                  <img src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800" alt="Agentic AI" style={{width: '100%', height: '180px', objectFit: 'cover'}} />
                  <div style={{padding: '24px', display: 'flex', flexDirection: 'column', flex: 1}}>
                    <h3 style={{fontSize: '1.1rem', color: 'var(--navy)', marginBottom: '12px', lineHeight: 1.4}}>Exploring Agentic AI and Autonomous Systems: Implications for Various Industries</h3>
                    <p style={{flex: 1, color: 'var(--text)', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '20px'}}>Discover how Agentic AI is transforming the future of autonomous systems. From self-governing machines to real-world business applications, learn the opportunities and challenges.</p>
                    <div style={{display: 'flex', justifyContent: 'space-between', borderTop: '1px solid var(--line)', paddingTop: '16px', fontSize: '0.8rem'}}>
                      <span style={{color: 'var(--accent)', fontWeight: 600}}>9/28/2025</span>
                      <span style={{color: 'var(--muted)'}}>2 min read</span>
                    </div>
                  </div>
                </article>
              </>
            )}

            {currentPage === 3 && (
              <>
                <article className="simple-card" style={{padding: '0', overflow: 'hidden'}}>
                  <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800" alt="SAP Procurement" style={{width: '100%', height: '180px', objectFit: 'cover'}} />
                  <div style={{padding: '24px', display: 'flex', flexDirection: 'column', flex: 1}}>
                    <h3 style={{fontSize: '1.1rem', color: 'var(--navy)', marginBottom: '12px', lineHeight: 1.4}}>Enhancing Procurement Efficiency: The Benefits of Upgrading SAP Materials Management</h3>
                    <p style={{flex: 1, color: 'var(--text)', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '20px'}}>This blog will focus on the value of upgrading the SAP Materials Management (MM) module to strengthen procurement and inventory operations.</p>
                    <div style={{display: 'flex', justifyContent: 'space-between', borderTop: '1px solid var(--line)', paddingTop: '16px', fontSize: '0.8rem'}}>
                      <span style={{color: 'var(--accent)', fontWeight: 600}}>9/26/2025</span>
                      <span style={{color: 'var(--muted)'}}>2 min read</span>
                    </div>
                  </div>
                </article>

                <article className="simple-card" style={{padding: '0', overflow: 'hidden'}}>
                  <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800" alt="SAP Master Data" style={{width: '100%', height: '180px', objectFit: 'cover'}} />
                  <div style={{padding: '24px', display: 'flex', flexDirection: 'column', flex: 1}}>
                    <h3 style={{fontSize: '1.1rem', color: 'var(--navy)', marginBottom: '12px', lineHeight: 1.4}}>The Importance of Master Data in SAP MM for Efficient Procurement</h3>
                    <p style={{flex: 1, color: 'var(--text)', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '20px'}}>Master data is the backbone of SAP MM. Learn how material, vendor, and purchasing records form the foundation of smooth operations.</p>
                    <div style={{display: 'flex', justifyContent: 'space-between', borderTop: '1px solid var(--line)', paddingTop: '16px', fontSize: '0.8rem'}}>
                      <span style={{color: 'var(--accent)', fontWeight: 600}}>9/24/2025</span>
                      <span style={{color: 'var(--muted)'}}>2 min read</span>
                    </div>
                  </div>
                </article>

                <article className="simple-card" style={{padding: '0', overflow: 'hidden'}}>
                  <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800" alt="Automated Efficiency" style={{width: '100%', height: '180px', objectFit: 'cover'}} />
                  <div style={{padding: '24px', display: 'flex', flexDirection: 'column', flex: 1}}>
                    <h3 style={{fontSize: '1.1rem', color: 'var(--navy)', marginBottom: '12px', lineHeight: 1.4}}>Transforming Procurement: The Journey from Manual Processes to Automated Efficiency</h3>
                    <p style={{flex: 1, color: 'var(--text)', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '20px'}}>See how businesses move from slow, manual procurement to automated efficiency with SAP MM. Learn how digital transformation speeds up decision-making.</p>
                    <div style={{display: 'flex', justifyContent: 'space-between', borderTop: '1px solid var(--line)', paddingTop: '16px', fontSize: '0.8rem'}}>
                      <span style={{color: 'var(--accent)', fontWeight: 600}}>9/23/2025</span>
                      <span style={{color: 'var(--muted)'}}>2 min read</span>
                    </div>
                  </div>
                </article>
              </>
            )}

          </div>
          
          <div style={{textAlign: 'center', marginTop: '32px', display: 'flex', gap: '8px', justifyContent: 'center'}}>
            <span 
              onClick={() => setCurrentPage(1)}
              style={{cursor: 'pointer', width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '4px', fontWeight: 'bold', fontSize: '0.85rem', color: currentPage === 1 ? 'white' : 'var(--navy)', background: currentPage === 1 ? 'var(--accent)' : 'white', border: currentPage === 1 ? 'none' : '1px solid var(--line)'}}>1</span>
            <span 
              onClick={() => setCurrentPage(2)}
              style={{cursor: 'pointer', width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '4px', fontWeight: 'bold', fontSize: '0.85rem', color: currentPage === 2 ? 'white' : 'var(--navy)', background: currentPage === 2 ? 'var(--accent)' : 'white', border: currentPage === 2 ? 'none' : '1px solid var(--line)'}}>2</span>
            <span 
              onClick={() => setCurrentPage(3)}
              style={{cursor: 'pointer', width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '4px', fontWeight: 'bold', fontSize: '0.85rem', color: currentPage === 3 ? 'white' : 'var(--navy)', background: currentPage === 3 ? 'var(--accent)' : 'white', border: currentPage === 3 ? 'none' : '1px solid var(--line)'}}>3</span>
          </div>
        </div>

        {/* Testimonial Card */}
        <div className="content-card" style={{background: 'var(--navy)', textAlign: 'center', border: 'none'}}>
          <div style={{color: '#F59E0B', letterSpacing: '8px', fontSize: '1.5rem', marginBottom: '24px', display: 'flex', justifyContent: 'center'}}>
            ★★★★★
          </div>
          <p style={{fontSize: '1.1rem', lineHeight: '1.8', color: 'white', marginBottom: '32px', fontStyle: 'italic', maxWidth: '800px', margin: '0 auto 32px'}}>
            "Working with SHNOOR International LLC has been a game-changer for our business. Their IT consulting team understood our requirements perfectly and delivered a custom solution that improved our efficiency by leaps and bounds. On top of that, their import services were smooth, reliable, and hassle-free. It’s rare to find a partner who excels in both technology and trade—SHNOOR does it effortlessly."
          </p>
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px'}}>
            <img 
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150" 
              alt="Amita Khanna" 
              style={{width: '56px', height: '56px', borderRadius: '50%', objectFit: 'cover', marginBottom: '8px', border: '2px solid var(--accent)'}} 
            />
            <p style={{margin: 0, fontSize: '1rem', fontWeight: 600, color: 'white'}}>Amita Khanna - Delivery Head</p>
            <p style={{margin: 0, fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)'}}>SF Technologies - Singapore</p>
          </div>
        </div>

      </div>
    </main>
  );
}

export default HomePage;
