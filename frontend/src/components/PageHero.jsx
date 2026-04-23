import { Link } from "react-router-dom";

function PageHero({ eyebrow, title, description, actions, aside, image }) {
  // Use a professional tech/business default image if none is provided
  const heroImage = image || "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800";
  
  // Highlight the second half of the title for that sleek modern look
  const words = title.split(' ');
  const midIndex = Math.ceil(words.length / 2);
  const firstPart = words.slice(0, midIndex).join(' ');
  const secondPart = words.slice(midIndex).join(' ');

  return (
    <section style={{padding: '80px 0 100px 0', overflow: 'hidden', background: 'var(--shadow-blue)'}}>
      <div className="container" style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', alignItems: 'center'}}>
        <div style={{paddingBottom: '0'}}>
          {eyebrow && <p style={{color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '4px', fontWeight: 700, marginBottom: '16px', fontSize: '0.85rem'}}>{eyebrow}</p>}
          
          <h1 style={{fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--navy)', marginBottom: '16px', lineHeight: 1.1}}>
            {firstPart} {secondPart && <span style={{color: 'var(--accent)'}}>{secondPart}</span>}
          </h1>
          
          <p style={{fontSize: '1rem', color: 'var(--text)', marginBottom: '24px', lineHeight: 1.7}}>
            {description}
          </p>
          
          <div style={{display: 'flex', gap: '16px'}}>
            {actions || (
              <Link to="/contact" className="primary-button" style={{padding: '12px 24px', fontSize: '0.9rem'}}>
                Request Information
              </Link>
            )}
          </div>
        </div>
        
        <div style={{height: '100%', display: 'flex', alignItems: 'flex-end', position: 'relative'}}>
          <img 
            src={heroImage} 
            alt="Hero Graphic"
            style={{width: '100%', height: '400px', objectFit: 'cover', objectPosition: 'center', borderTopLeftRadius: '16px', borderTopRightRadius: '16px', boxShadow: '-10px -10px 40px rgba(0,0,0,0.05)'}}
          />
          {aside && (
            <div style={{position: 'absolute', bottom: '24px', right: '24px', maxWidth: '300px'}}>
              {aside}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default PageHero;
