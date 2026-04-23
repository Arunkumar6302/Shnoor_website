import { Link } from "react-router-dom";

function ExportPage() {
  return (
    <main style={{background: 'var(--bg)', paddingBottom: '60px'}}>
      {/* 1. Hero Section -> Modeled exactly after CareersPage */}
      <section style={{padding: '60px 0 80px 0', overflow: 'hidden', background: 'var(--shadow-blue)'}}>
        <div className="container split-section" style={{alignItems: 'center'}}>
          <div style={{paddingBottom: '0'}}>
            <p style={{color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '4px', fontWeight: 700, marginBottom: '16px', fontSize: '0.85rem'}}>Global Trade</p>
            <h1 style={{fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', color: 'var(--navy)', marginBottom: '16px', lineHeight: 1.1}}>
              Streamlining Global Trade with <span style={{color: 'var(--accent)'}}>Efficiency & Trust</span>
            </h1>
            <p style={{fontSize: '1rem', color: 'var(--text)', marginBottom: '24px', lineHeight: 1.7}}>
              At SHNOOR International LLC, we bridge markets by delivering high-quality products from India to global destinations including the United Arab Emirates, Bahrain, Qatar, Oman, and Malaysia. Our import and export services are built on trust, transparency, and timely delivery.
            </p>
            <div style={{display: 'flex', gap: '16px'}}>
              <Link to="/contact" className="primary-button" style={{padding: '12px 24px', fontSize: '0.9rem'}}>Contact Trade Team</Link>
            </div>
          </div>
          
          <div style={{height: '100%', display: 'flex', alignItems: 'flex-end'}}>
            <img 
              src="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&q=80&w=800" 
              alt="Global Shipping"
              style={{width: '100%', maxHeight: '400px', objectFit: 'cover', objectPosition: 'top', borderTopLeftRadius: '16px', borderTopRightRadius: '16px', boxShadow: '-10px -10px 40px rgba(0,0,0,0.05)'}}
            />
          </div>
        </div>
      </section>

      <div className="container" style={{display: 'flex', flexDirection: 'column', gap: '32px', marginTop: '-60px', position: 'relative', zIndex: 10}}>
        
        {/* 2. What We Do - Pinterest Image Cards wrapper */}
        <div className="content-card" style={{background: 'transparent', boxShadow: 'none', border: 'none', padding: 0}}>
          <div style={{textAlign: 'center', marginBottom: '32px'}}>
            <h2 style={{fontSize: '2rem', color: 'var(--navy)', marginBottom: '12px'}}>What We Do</h2>
            <p style={{maxWidth: '800px', margin: '0 auto', fontSize: '1rem', color: 'var(--text)', lineHeight: 1.7}}>
              We specialize in sourcing, packaging, and shipping a wide range of products while complying with international trade standards. With a strong network of suppliers, logistics partners, and compliance experts, we make global trade simple, reliable, and profitable for our clients.
            </p>
          </div>

          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px'}}>
            {/* Card 1 */}
            <div className="simple-card" style={{padding: '0', overflow: 'hidden'}}>
              <img src="https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80&w=600" alt="Workflow" style={{width: '100%', height: '180px', objectFit: 'cover'}}/>
              <div style={{padding: '24px', flex: 1, display: 'flex', flexDirection: 'column'}}>
                <h3 style={{fontSize: '1.1rem', color: 'var(--navy)', marginBottom: '12px'}}>Product Sourcing</h3>
                <p style={{fontSize: '0.9rem', color: 'var(--text)', lineHeight: 1.6, flex: 1, margin: 0}}>
                  With our deep understanding of global markets and complex supply chains, we offer complete management of your procurement process. This includes identifying reliable sources, negotiating terms, and expertly coordinating logistics.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="simple-card" style={{padding: '0', overflow: 'hidden'}}>
              <img src="https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=600" alt="Shipping" style={{width: '100%', height: '180px', objectFit: 'cover'}}/>
              <div style={{padding: '24px', flex: 1, display: 'flex', flexDirection: 'column'}}>
                <h3 style={{fontSize: '1.1rem', color: 'var(--navy)', marginBottom: '12px'}}>International Shipping</h3>
                <p style={{fontSize: '0.9rem', color: 'var(--text)', lineHeight: 1.6, flex: 1, margin: 0}}>
                  We make global trade simple by delivering reliable, efficient, and cost-effective international shipping & logistics solutions. We ensure your goods reach their destination safely, on time, and in compliance with all regulations.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="simple-card" style={{padding: '0', overflow: 'hidden'}}>
              <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600" alt="Quality" style={{width: '100%', height: '180px', objectFit: 'cover'}}/>
              <div style={{padding: '24px', flex: 1, display: 'flex', flexDirection: 'column'}}>
                <h3 style={{fontSize: '1.1rem', color: 'var(--navy)', marginBottom: '12px'}}>Quality Control</h3>
                <p style={{fontSize: '0.9rem', color: 'var(--text)', lineHeight: 1.6, flex: 1, margin: 0}}>
                  Our Quality Control & Compliance services ensure every product we source meets international standards. We work with certified inspection agencies and follow stringent testing procedures from sourcing to final delivery.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 3. Global Operations Split Section */}
        <div className="content-card split-section" style={{alignItems: 'center'}}>
          <div>
            <p className="eyebrow" style={{marginBottom: '12px', display: 'block', color: 'var(--accent)', fontWeight: 600, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px'}}>Global Operations</p>
            <h2 style={{fontSize: '2rem', color: 'var(--navy)', marginBottom: '20px'}}>From India to the world, Seamlessly</h2>
            <p style={{fontSize: '1rem', color: 'var(--text)', lineHeight: 1.7, marginBottom: '20px'}}>
              At SHNOOR International LLC, we bridge markets by delivering high-quality products from India to global destinations including the United Arab Emirates, Bahrain, Qatar, Oman, and Malaysia. Our import and export services are built on trust, transparency, and timely delivery.
            </p>
            <p style={{fontSize: '1rem', color: 'var(--text)', lineHeight: 1.7, margin: 0}}>
              We specialize in sourcing, packaging, and shipping a wide range of products while complying with international trade standards, making global trade simple, reliable, and profitable for our clients.
            </p>
          </div>
          
          <div style={{background: 'var(--navy)', color: 'white', padding: '32px', borderRadius: '12px'}}>
            <h3 style={{color: 'white', marginBottom: '24px', fontSize: '1.4rem'}}>Our Trade Solutions</h3>
            <ul style={{listStyle: 'none', padding: 0, margin: '0 0 24px 0', fontSize: '0.95rem'}}>
              {['Product Sourcing & Procurement', 'International Shipping & Logistics', 'Quality Control & Compliance', 'Market Expansion Support', 'Customized Export Strategies'].map((item, idx) => (
                <li key={idx} style={{marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '16px'}}>
                  <div style={{background: 'var(--accent)', color: 'white', width: '20px', height: '20px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.7rem', fontWeight: 'bold', flexShrink: 0}}>✓</div>
                  <span style={{opacity: 0.95}}>{item}</span>
                </li>
              ))}
            </ul>
            <p style={{fontSize: '0.9rem', opacity: 0.8, borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '20px', margin: 0, lineHeight: 1.6}}>
              Whether you’re looking to export premium products from India or import goods into growing markets, SHNOOR International is your trusted partner.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ExportPage;
