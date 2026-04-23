import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import { ServiceIcon } from "../data/icons";
import { useCompany } from "../company";

function ServicesPage() {
  const { company } = useCompany();

  return (
    <main style={{background: 'var(--bg)', paddingBottom: '60px'}}>
      {/* 1. Hero Section -> Modeled exactly after CareersPage */}
      <section style={{padding: '80px 0 100px 0', overflow: 'hidden', background: 'var(--shadow-blue)'}}>
        <div className="container" style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', alignItems: 'center'}}>
          <div style={{paddingBottom: '0'}}>
            <h1 style={{fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', color: 'var(--navy)', marginBottom: '16px', lineHeight: 1.1}}>
              Our <span style={{color: 'var(--accent)'}}>services</span>
            </h1>
            
            <p style={{fontSize: '1rem', color: 'var(--text)', marginBottom: '24px', lineHeight: 1.7}}>
              {company.servicesIntro}
            </p>
            
            <div style={{display: 'flex', gap: '16px'}}>
              <Link to="/contact" className="primary-button" style={{padding: '12px 24px', fontSize: '0.9rem'}}>Request service details</Link>
            </div>
          </div>
          
          <div style={{height: '100%', display: 'flex', alignItems: 'flex-end'}}>
            <img 
              src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=800" 
              alt="Services Overview"
              style={{width: '100%', maxHeight: '400px', objectFit: 'cover', objectPosition: 'top', borderTopLeftRadius: '16px', borderTopRightRadius: '16px', boxShadow: '-10px -10px 40px rgba(0,0,0,0.05)'}}
            />
          </div>
        </div>
      </section>

      <div className="container" style={{display: 'flex', flexDirection: 'column', gap: '32px', marginTop: '-40px', position: 'relative', zIndex: 10}}>
        
        {/* Core Capabilities - Grid of simple cards inside a transparent wrapper */}
        <div className="content-card" style={{background: 'transparent', boxShadow: 'none', border: 'none', padding: 0}}>
          <div style={{textAlign: 'center', marginBottom: '32px'}}>
            <p style={{color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 600, fontSize: '0.85rem', marginBottom: '8px'}}>Service Pillars</p>
            <h2 style={{color: 'var(--navy)', margin: '0 0 12px 0', fontSize: '2rem'}}>Core Capabilities</h2>
            <p style={{fontSize: '1rem', color: 'var(--muted)'}}>Services and descriptions are aligned to the live SHNOOR website.</p>
          </div>

          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px'}}>
            {company.services.map((service) => (
              <article className="simple-card" key={service.id} style={{padding: '32px'}}>
                <div style={{width: '48px', height: '48px', borderRadius: '12px', background: '#F8FAFC', color: 'var(--navy)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', marginBottom: '20px', border: '1px solid var(--line)'}}>
                  <ServiceIcon type={service.icon} />
                </div>
                <h3 style={{fontSize: '1.2rem', color: 'var(--navy)', marginBottom: '12px'}}>{service.title}</h3>
                <p style={{fontSize: '0.95rem', color: 'var(--text)', lineHeight: 1.6, flex: 1, marginBottom: '24px'}}>{service.description}</p>
                <Link className="secondary-button" to={`/services/${service.slug}`} style={{alignSelf: 'flex-start', padding: '8px 20px', fontSize: '0.85rem', background: '#F8FAFC', border: '1px solid var(--line)'}}>
                  Learn More &rsaquo;
                </Link>
              </article>
            ))}
          </div>
        </div>

        {/* Business Fit Split Section - Wrapped in content card */}
        <div className="content-card" style={{display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '40px', alignItems: 'center'}}>
          <div>
            <p style={{color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 600, fontSize: '0.85rem', marginBottom: '8px'}}>Business Fit</p>
            <h2 style={{fontSize: '2rem', color: 'var(--navy)', marginBottom: '20px'}}>Helping businesses operate smarter, grow faster, and reach global markets.</h2>
            <p style={{fontSize: '1rem', color: 'var(--text)', lineHeight: '1.7', margin: 0}}>{company.extendedSummary}</p>
          </div>
          
          <div style={{display: 'flex', flexDirection: 'column', gap: '24px'}}>
            <div style={{background: '#F8FAFC', padding: '24px', borderRadius: '12px', border: '1px solid var(--line)'}}>
              <h3 style={{fontSize: '1.1rem', color: 'var(--navy)', marginBottom: '8px'}}>Cloud, ERP, and SAP</h3>
              <p style={{color: 'var(--muted)', margin: 0, fontSize: '0.95rem'}}>Support for cloud migration, enterprise management, and SAP outsourcing.</p>
            </div>
            <div style={{background: '#F8FAFC', padding: '24px', borderRadius: '12px', border: '1px solid var(--line)'}}>
              <h3 style={{fontSize: '1.1rem', color: 'var(--navy)', marginBottom: '8px'}}>AI and consulting</h3>
              <p style={{color: 'var(--muted)', margin: 0, fontSize: '0.95rem'}}>AI-driven solutions, consulting expertise, and staffing support for real execution.</p>
            </div>
            <div style={{background: '#F8FAFC', padding: '24px', borderRadius: '12px', border: '1px solid var(--line)'}}>
              <h3 style={{fontSize: '1.1rem', color: 'var(--navy)', marginBottom: '8px'}}>Trade and logistics</h3>
              <p style={{color: 'var(--muted)', margin: 0, fontSize: '0.95rem'}}>Export management and logistics services for reliable cross-border operations.</p>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}

export default ServicesPage;
