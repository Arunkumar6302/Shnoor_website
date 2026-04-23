import { useState } from "react";
import { useCompany } from "../company";

function ContactPage() {
  const { addSubmission, siteSettings } = useCompany();
  const [formData, setFormData] = useState({ name: '', mobile: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    try {
      await addSubmission({ 
        name: formData.name, 
        mobile: formData.mobile, 
        email: formData.email, 
        message: formData.message, 
        service: "General Inquiry" 
      });
      
      setSubmitted(true);
      setFormData({ name: '', mobile: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    } catch (error) {
      alert("There was an error sending your message. Please try again or email us directly.");
    }
  };

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <main style={{background: 'var(--bg)', paddingBottom: '60px'}}>
      {/* 1. Hero Section -> Modeled exactly after CareersPage */}
      <section style={{padding: '60px 0 80px 0', overflow: 'hidden', background: 'var(--shadow-blue)'}}>
        <div className="container split-section" style={{alignItems: 'center'}}>
          <div style={{paddingBottom: '0'}}>
            <p style={{color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '4px', fontWeight: 700, marginBottom: '16px', fontSize: '0.85rem'}}>Get In Touch</p>
            <h1 style={{fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', color: 'var(--navy)', marginBottom: '16px', lineHeight: 1.1}}>
              Let's <span style={{color: 'var(--accent)'}}>Connect</span>
            </h1>
            <p style={{fontSize: '1rem', color: 'var(--text)', marginBottom: '24px', lineHeight: 1.7}}>
              Feel free to contact us with any questions or concerns. You can use the form on our website or email us directly. We appreciate your interest and look forward to hearing from you.
            </p>
            <div style={{display: 'flex', gap: '16px'}}>
              <a href="#contact-form" className="primary-button" style={{padding: '12px 24px', fontSize: '0.9rem'}}>Send a Message</a>
            </div>
          </div>
          
          <div style={{height: '100%', display: 'flex', alignItems: 'flex-end'}}>
            <img 
              src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&q=80&w=800" 
              alt="Contact Support"
              style={{width: '100%', maxHeight: '400px', objectFit: 'cover', objectPosition: 'top', borderTopLeftRadius: '16px', borderTopRightRadius: '16px', boxShadow: '-10px -10px 40px rgba(0,0,0,0.05)'}}
            />
          </div>
        </div>
      </section>

      <div className="container" style={{display: 'flex', flexDirection: 'column', gap: '32px', marginTop: '-60px', position: 'relative', zIndex: 10}}>
        
        {/* 2. Contact Split Layout -> Wrapped in content-card */}
        <div className="content-card split-section">
          
          {/* Left: Contact Details */}
          <div>
            <h2 style={{fontSize: '2rem', color: 'var(--navy)', marginBottom: '12px'}}>We're here to help</h2>
            <p style={{fontSize: '1rem', color: 'var(--text)', marginBottom: '32px', lineHeight: 1.6}}>
              Whether you need innovative IT solutions, SAP outsourcing, or reliable global trade logistics, our team is ready to support your business goals.
            </p>

            <div style={{display: 'flex', flexDirection: 'column', gap: '24px'}}>
              <div style={{display: 'flex', gap: '16px'}}>
                <div style={{width: '40px', height: '40px', borderRadius: '50%', background: '#F8FAFC', color: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.1rem', flexShrink: 0, border: '1px solid var(--line)'}}>📍</div>
                <div>
                  <h3 style={{fontSize: '1rem', color: 'var(--navy)', marginBottom: '4px'}}>Headquarters</h3>
                  <p style={{color: 'var(--muted)', margin: 0, lineHeight: 1.6, fontSize: '0.9rem'}}>{siteSettings.address}</p>
                </div>
              </div>

              <div style={{display: 'flex', gap: '16px'}}>
                <div style={{width: '40px', height: '40px', borderRadius: '50%', background: '#F8FAFC', color: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.1rem', flexShrink: 0, border: '1px solid var(--line)'}}>📧</div>
                <div>
                  <h3 style={{fontSize: '1rem', color: 'var(--navy)', marginBottom: '4px'}}>Email Us</h3>
                  <p style={{color: 'var(--muted)', margin: 0, lineHeight: 1.6, fontSize: '0.9rem'}}>{siteSettings.generalEmail} (General)<br/>{siteSettings.salesEmail} (Sales)</p>
                </div>
              </div>

              <div style={{display: 'flex', gap: '16px'}}>
                <div style={{width: '40px', height: '40px', borderRadius: '50%', background: '#F8FAFC', color: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.1rem', flexShrink: 0, border: '1px solid var(--line)'}}>🕒</div>
                <div>
                  <h3 style={{fontSize: '1rem', color: 'var(--navy)', marginBottom: '4px'}}>Opening Hours</h3>
                  <p style={{color: 'var(--muted)', margin: 0, lineHeight: 1.6, fontSize: '0.9rem'}}>Monday - Friday: 10:00 - 19:00<br/>Saturday - Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div style={{background: '#F8FAFC', padding: '32px', borderRadius: '12px', border: '1px solid var(--line)'}}>
            <h3 style={{fontSize: '1.3rem', color: 'var(--navy)', marginBottom: '20px'}}>Send a Message</h3>
            <form onSubmit={handleSubmit} style={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
              <div className="split-section" style={{gap: '20px'}}>
                <div style={{flex: 1, display: 'flex', flexDirection: 'column', gap: '6px'}}>
                  <label style={{color: 'var(--navy)', fontWeight: 600, fontSize: '0.85rem'}}>Name *</label>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="Your name" style={{padding: '12px 16px', border: '1px solid var(--line)', borderRadius: '6px', width: '100%', outline: 'none', background: 'white', fontSize: '0.9rem'}} />
                </div>
                <div style={{flex: 1, display: 'flex', flexDirection: 'column', gap: '6px'}}>
                  <label style={{color: 'var(--navy)', fontWeight: 600, fontSize: '0.85rem'}}>Mobile *</label>
                  <input type="text" name="mobile" value={formData.mobile} onChange={handleChange} required placeholder="Phone number" style={{padding: '12px 16px', border: '1px solid var(--line)', borderRadius: '6px', width: '100%', outline: 'none', background: 'white', fontSize: '0.9rem'}} />
                </div>
              </div>

              <div style={{display: 'flex', flexDirection: 'column', gap: '6px'}}>
                <label style={{color: 'var(--navy)', fontWeight: 600, fontSize: '0.85rem'}}>Email Address *</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="Your email" style={{padding: '12px 16px', border: '1px solid var(--line)', borderRadius: '6px', width: '100%', outline: 'none', background: 'white', fontSize: '0.9rem'}} />
              </div>

              <div style={{display: 'flex', flexDirection: 'column', gap: '6px'}}>
                <label style={{color: 'var(--navy)', fontWeight: 600, fontSize: '0.85rem'}}>Message *</label>
                <textarea name="message" value={formData.message} onChange={handleChange} required placeholder="How can we help?" rows="4" style={{padding: '12px 16px', border: '1px solid var(--line)', borderRadius: '6px', width: '100%', outline: 'none', background: 'white', fontSize: '0.9rem', resize: 'vertical'}}></textarea>
              </div>

              {submitted && (
                <div style={{padding: '12px', background: '#D1FAE5', color: '#065F46', borderRadius: '6px', fontSize: '0.9rem', fontWeight: 600, textAlign: 'center'}}>
                  ✅ Message sent successfully! Our team will contact you soon.
                </div>
              )}

              <button type="submit" className="primary-button" style={{width: '100%', padding: '14px', marginTop: '4px'}}>
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </main>
  );
}

export default ContactPage;
