import { Link } from "react-router-dom";

function AboutPage() {
  return (
    <main style={{background: 'var(--bg)', paddingBottom: '60px'}}>
      {/* 1. Hero Section -> Modeled exactly after CareersPage */}
      <section style={{padding: '60px 0 80px 0', overflow: 'hidden', background: 'var(--shadow-blue)'}}>
        <div className="container split-section" style={{alignItems: 'center'}}>
          <div style={{paddingBottom: '0'}}>
            <p style={{color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '4px', fontWeight: 700, marginBottom: '16px', fontSize: '0.85rem'}}>About Us</p>
            <h1 style={{fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', color: 'var(--navy)', marginBottom: '16px', lineHeight: 1.1}}>
              Empowering Growth Through <span style={{color: 'var(--accent)'}}>Technology & Trade</span>
            </h1>
            <p style={{fontSize: '1rem', color: 'var(--text)', marginBottom: '24px', lineHeight: 1.7}}>
              SHNOOR International LLC is a dynamic organization bridging the worlds of technology and trade. With expertise spanning IT Consulting, Product Development, and SAP Outsourcing, we empower businesses with cutting-edge digital solutions.
            </p>
            <div style={{display: 'flex', gap: '16px'}}>
              <Link to="/contact" className="primary-button" style={{padding: '12px 24px', fontSize: '0.9rem'}}>Discuss your requirements</Link>
            </div>
          </div>
          
          <div style={{height: '100%', display: 'flex', alignItems: 'flex-end'}}>
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800" 
              alt="Team collaboration"
              style={{width: '100%', maxHeight: '400px', objectFit: 'cover', objectPosition: 'top', borderTopLeftRadius: '16px', borderTopRightRadius: '16px', boxShadow: '-10px -10px 40px rgba(0,0,0,0.05)'}}
            />
          </div>
        </div>
      </section>

      <div className="container" style={{display: 'flex', flexDirection: 'column', gap: '32px', marginTop: '-60px', position: 'relative', zIndex: 10}}>
        
        {/* 2. Our Approach Split Section -> Wrapped in content-card */}
        <div className="content-card split-section" style={{alignItems: 'center'}}>
          <div>
            <h2 style={{fontSize: '2rem', marginBottom: '16px', color: 'var(--navy)'}}>Expertise Meets Innovation</h2>
            <p style={{fontSize: '1rem', lineHeight: '1.7', color: 'var(--text)', marginBottom: '16px'}}>
              Our team combines industry expertise with innovative thinking to deliver solutions that are tailored, scalable, and future-ready. 
            </p>
            <p style={{fontSize: '1rem', lineHeight: '1.7', color: 'var(--text)', marginBottom: '24px'}}>
              Whether you’re seeking end-to-end product development, specialized IT talent, or application design that blends functionality with creativity—SHNOOR International is here to help you achieve success.
            </p>
            
            <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px'}}>
              <div style={{background: '#F8FAFC', padding: '16px', borderRadius: '8px', borderLeft: '4px solid var(--accent)', border: '1px solid var(--line)'}}>
                <div style={{fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--navy)', marginBottom: '4px'}}>100+</div>
                <div style={{fontSize: '0.85rem', color: 'var(--muted)'}}>Global Clients</div>
              </div>
              <div style={{background: '#F8FAFC', padding: '16px', borderRadius: '8px', borderLeft: '4px solid var(--accent)', border: '1px solid var(--line)'}}>
                <div style={{fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--navy)', marginBottom: '4px'}}>15+</div>
                <div style={{fontSize: '0.85rem', color: 'var(--muted)'}}>Years Experience</div>
              </div>
            </div>
          </div>
          <div>
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000" 
              alt="Business team collaborating" 
              style={{width: '100%', height: '400px', objectFit: 'cover', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)'}}
            />
          </div>
        </div>

        {/* 3. Mission & Vision - Image Cards */}
        <div className="split-section">
          <div className="simple-card" style={{padding: '0', overflow: 'hidden'}}>
            <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800" alt="Mission" style={{width: '100%', height: '200px', objectFit: 'cover'}}/>
            <div style={{padding: '32px', flex: 1}}>
              <h2 style={{fontSize: '1.5rem', color: 'var(--navy)', marginBottom: '12px'}}>Our Mission</h2>
              <p style={{fontSize: '0.95rem', color: 'var(--text)', lineHeight: '1.7', margin: 0}}>
                To provide innovative IT solutions and seamless global trade services that empower our clients to grow, adapt, and succeed in an ever-changing business landscape. We aim to deliver excellence through expertise, reliability, and customer-centric service.
              </p>
            </div>
          </div>
          
          <div className="simple-card" style={{padding: '0', overflow: 'hidden'}}>
            <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800" alt="Vision" style={{width: '100%', height: '200px', objectFit: 'cover'}}/>
            <div style={{padding: '32px', flex: 1}}>
              <h2 style={{fontSize: '1.5rem', color: 'var(--navy)', marginBottom: '12px'}}>Our Vision</h2>
              <p style={{fontSize: '0.95rem', color: 'var(--text)', lineHeight: '1.7', margin: 0}}>
                To be a global leader in uniting technology and trade—transforming businesses with smart IT solutions and fostering stronger international connections that drive economic growth and mutual success.
              </p>
            </div>
          </div>
        </div>

        {/* 4. Why Choose Us (Dark Background Grid) - Wrapped in a card */}
        <div className="content-card" style={{background: 'var(--navy)', color: 'white', border: 'none'}}>
          <div style={{textAlign: 'center', maxWidth: '800px', margin: '0 auto 40px'}}>
            <h2 style={{fontSize: '2rem', color: 'white', marginBottom: '16px'}}>Why Choose SHNOOR?</h2>
            <p style={{fontSize: '1rem', color: 'rgba(255,255,255,0.8)', lineHeight: 1.7}}>
              At SHNOOR International LLC, we don’t just offer services—we build long-term partnerships that help businesses thrive in both the digital and global marketplace.
            </p>
          </div>

          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px', width: '100%'}}>
            {[
              {title: 'Proven Record', text: 'Demonstrated excellence across multiple IT Domains and global markets.'},
              {title: 'Quality & Innovation', text: 'Unwavering commitment to quality, innovative practices, and absolute client satisfaction.'},
              {title: 'Global Trade Network', text: 'A strong, reliable international network ensuring seamless cross-border operations.'},
              {title: 'Seamless Delivery', text: 'Flawless service execution across diverse industries and geographies.'}
            ].map((feature, idx) => (
              <div key={idx} style={{background: '#162032', border: '1px solid rgba(255,255,255,0.05)', padding: '24px', borderRadius: '12px'}}>
                <div style={{height: '32px', width: '32px', borderRadius: '50%', background: 'var(--accent)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.9rem', fontWeight: 'bold', marginBottom: '16px'}}>✓</div>
                <h3 style={{color: 'white', fontSize: '1.1rem', marginBottom: '8px'}}>{feature.title}</h3>
                <p style={{color: 'rgba(255,255,255,0.7)', lineHeight: 1.5, fontSize: '0.9rem', margin: 0}}>{feature.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 5. Footer Closing Statement */}
        <div className="content-card" style={{background: 'var(--accent)', textAlign: 'center', border: 'none'}}>
          <h2 style={{color: 'var(--navy)', fontSize: 'clamp(1.5rem, 3vw, 2rem)', maxWidth: '800px', margin: '0 auto', lineHeight: 1.3}}>
            In a world where connections matter, we bring technology, trust, and trade together.
          </h2>
        </div>

      </div>
    </main>
  );
}

export default AboutPage;
