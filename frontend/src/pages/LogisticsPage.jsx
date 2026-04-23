import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";

function LogisticsPage() {
  return (
    <main style={{ background: 'var(--bg)', paddingBottom: '60px' }}>
      {/* 1. Hero */}
      {/* 1. Hero Section -> Modeled exactly after CareersPage */}
      <section style={{ padding: '60px 0 80px 0', overflow: 'hidden', background: 'var(--shadow-blue)' }}>
        <div className="container split-section" style={{ alignItems: 'center' }}>
          <div style={{ paddingBottom: '0' }}>
            <p style={{ color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '4px', fontWeight: 700, marginBottom: '16px', fontSize: '0.85rem' }}>Logistics Management</p>
            <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', color: 'var(--navy)', marginBottom: '16px', lineHeight: 1.1 }}>
              Streamline Your <span style={{ color: 'var(--accent)' }}>Global Logistics</span>
            </h1>

            <p style={{ fontSize: '1rem', color: 'var(--text)', marginBottom: '24px', lineHeight: 1.7 }}>
              At SHNOOR International LLC, we simplify global trade. We provide expert dry container supply and end-to-end logistics operations from India's premier ports to international markets.
            </p>

            <div style={{ display: 'flex', gap: '16px' }}>
              <Link to="/contact" className="primary-button" style={{ padding: '12px 24px', fontSize: '0.9rem' }}>Request Logistics Support</Link>
            </div>
          </div>

          <div style={{ height: '100%', display: 'flex', alignItems: 'flex-end' }}>
            <img
              src="https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=800"
              alt="Global Logistics"
              style={{ width: '100%', maxHeight: '400px', objectFit: 'cover', objectPosition: 'top', borderTopLeftRadius: '16px', borderTopRightRadius: '16px', boxShadow: '-10px -10px 40px rgba(0,0,0,0.05)' }}
            />
          </div>
        </div>
      </section>

      <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '32px', marginTop: '-40px', position: 'relative', zIndex: 10 }}>

        {/* 2. End-to-End Split Section -> Wrapped in content-card */}
        <div className="content-card split-section" style={{ alignItems: 'center' }}>
          <div>
            <img
              src="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&q=80&w=1000"
              alt="Cargo ship at port"
              style={{ width: '100%', height: '350px', objectFit: 'cover', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}
            />
          </div>
          <div>
            <h2 style={{ color: 'var(--navy)', marginBottom: '16px', fontSize: '1.8rem' }}>End-to-End Logistics Services</h2>
            <p style={{ fontSize: '1rem', color: 'var(--text)', marginBottom: '20px', lineHeight: 1.7 }}>
              At Shnoor International LLC, we specialize in providing efficient, reliable logistics solutions tailored to meet the needs of businesses across global industries. With a powerful network, modern infrastructure, and highly experienced professionals, we guarantee your goods move seamlessly from origin to destination.
            </p>
            <p style={{ fontSize: '1rem', color: 'var(--text)', lineHeight: 1.7 }}>
              With strong operational bases at Mumbai Port and Mundra Port, Gujarat, we offer unmatched connectivity and efficiency. Our dedicated team ensures every shipment is handled with precision—from complex documentation to final delivery—so you can focus on growing your core business.
            </p>
          </div>
        </div>

        {/* 3. Why Choose Us Grid */}
        <div className="content-card" style={{ background: 'transparent', boxShadow: 'none', border: 'none', padding: 0 }}>
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <p style={{ color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 600, fontSize: '0.85rem', marginBottom: '8px' }}>Why Choose Us</p>
            <h2 style={{ color: 'var(--navy)', margin: '0 0 12px 0', fontSize: '2rem' }}>Moving Businesses Forward</h2>
            <p style={{ fontSize: '1rem', color: 'var(--muted)' }}>We don't just move goods—we accelerate your supply chain.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            <div className="simple-card">
              <h3 style={{ color: 'var(--navy)', marginBottom: '12px', fontSize: '1.2rem' }}>Prime Port Access</h3>
              <p style={{ color: 'var(--text)', margin: 0, fontSize: '0.95rem', lineHeight: 1.6 }}>Direct operational access to world-class ports in Mumbai and Mundra for maximum efficiency.</p>
            </div>
            <div className="simple-card">
              <h3 style={{ color: 'var(--navy)', marginBottom: '12px', fontSize: '1.2rem' }}>Container Availability</h3>
              <p style={{ color: 'var(--text)', margin: 0, fontSize: '0.95rem', lineHeight: 1.6 }}>Guaranteed and reliable dry container availability to meet demanding shipping schedules.</p>
            </div>
            <div className="simple-card">
              <h3 style={{ color: 'var(--navy)', marginBottom: '12px', fontSize: '1.2rem' }}>Secure Shipping</h3>
              <p style={{ color: 'var(--text)', margin: 0, fontSize: '0.95rem', lineHeight: 1.6 }}>Timely, highly secure shipping solutions prioritizing cargo integrity and transit speed.</p>
            </div>
            <div className="simple-card">
              <h3 style={{ color: 'var(--navy)', marginBottom: '12px', fontSize: '1.2rem' }}>Trade Support</h3>
              <p style={{ color: 'var(--text)', margin: 0, fontSize: '0.95rem', lineHeight: 1.6 }}>Comprehensive end-to-end support for international trade, customs, and regulatory compliance.</p>
            </div>
          </div>
        </div>

        {/* 4. Capabilities Split Section */}
        <div className="content-card split-section">
          <div style={{ paddingRight: '20px' }}>
            <p style={{ color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 600, fontSize: '0.85rem', marginBottom: '8px' }}>Our Capabilities</p>
            <h2 style={{ color: 'var(--navy)', fontSize: '2rem', marginBottom: '20px' }}>Logistics Operations</h2>
            <p style={{ fontSize: '1rem', color: 'var(--text)', marginBottom: '32px', lineHeight: 1.7 }}>
              We specialize in offering dry containers for import and export operations, ensuring goods are transported safely, efficiently, and on time. Whether it’s raw materials, industrial goods, or finished products.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {[
                "Dry Container Supply from Mumbai & Mundra",
                "Cargo Handling, Packing & Securing",
                "Customs Clearance & Regulatory Docs",
                "Multi-Modal Transport (Sea, Rail & Road)",
                "Real-Time Tracking & Monitoring",
                "End-to-End Supply Chain Support"
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: '#F8FAFC', color: 'var(--accent)', border: '1px solid var(--line)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '0.8rem', flexShrink: 0 }}>✓</div>
                  <h3 style={{ margin: 0, fontSize: '1rem', color: 'var(--navy)' }}>{item}</h3>
                </div>
              ))}
            </div>
          </div>

          <div style={{ background: 'var(--navy)', padding: '40px', borderRadius: '12px', color: 'white', position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div style={{ position: 'absolute', top: '-50px', right: '-50px', width: '200px', height: '200px', background: 'var(--accent)', opacity: '0.1', borderRadius: '50%' }}></div>
            <h3 style={{ color: 'var(--accent)', fontSize: '1.6rem', marginBottom: '20px', position: 'relative', zIndex: 1 }}>
              Your Cargo, Our Commitment.
            </h3>
            <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.8)', marginBottom: '32px', position: 'relative', zIndex: 1, lineHeight: 1.7 }}>
              With SHNOOR International LLC, you gain a strategic partner committed to minimizing costs, reducing delays, and maximizing efficiency. We ensure complete compliance with international standards while offering highly flexible solutions tailored to your requirements.
            </p>
            <Link to="/contact" className="primary-button" style={{ position: 'relative', zIndex: 1, alignSelf: 'flex-start', padding: '12px 28px', fontSize: '0.95rem' }}>
              Contact our team
            </Link>
          </div>
        </div>

      </div>
    </main>
  );
}

export default LogisticsPage;
