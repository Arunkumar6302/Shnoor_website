import { useParams, Link } from "react-router-dom";
import { useStore } from "../storeContext";
import { useState, useEffect } from "react";

function ProductDetailsPage() {
  const { id } = useParams();
  const { addToCart } = useStore();
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem('productsList');
    if (saved) {
      const parsed = JSON.parse(saved);
      const found = parsed.find(p => p.id === parseInt(id) || p.id === id);
      setProduct(found);
      setRelatedProducts(parsed.filter(p => p.id !== (found ? found.id : null)).slice(0, 3));
    }
  }, [id]);

  if (!product) return <div className="container" style={{padding: '100px 0'}}>Product not found</div>;

  const getImage = (p) => p.image || ({
    "Almond Butter": "https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?auto=format&fit=crop&q=80&w=400",
    "Morning Harvest Whole Grain Oats": "https://images.unsplash.com/photo-1517673132405-a56a62b18caf?auto=format&fit=crop&q=80&w=400",
    "Aqua-Pure Moisturizing Hand Wash": "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=400",
    "Plantation Crops Assortment": "https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?auto=format&fit=crop&q=80&w=400",
    "Organic Cold-Pressed Coconut Oil": "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&q=80&w=400",
    "Healthy Organic Cereals": "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?auto=format&fit=crop&q=80&w=400"
  }[p.title] || "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=400");

  return (
    <main style={{ background: '#ffffff', paddingBottom: '80px', paddingTop: '40px' }}>
      <div className="container">
        <Link to="/store" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--muted)', textDecoration: 'none', marginBottom: '40px', fontSize: '0.9rem', fontWeight: 600 }}>
          <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
          BACK TO CATALOG
        </Link>

        {/* Product Hero */}
        <div style={{ display: 'flex', gap: '60px', flexWrap: 'wrap', alignItems: 'flex-start', marginBottom: '80px' }}>
          <div style={{ flex: '1 1 400px', background: '#f8fafc', borderRadius: '32px', padding: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img src={getImage(product)} alt={product.title} style={{ width: '100%', borderRadius: '16px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }} />
          </div>
          <div style={{ flex: '1 1 400px', paddingTop: '20px' }}>
            <h1 style={{ fontSize: '2.5rem', color: 'var(--navy)', marginBottom: '16px', fontWeight: 800, lineHeight: 1.2 }}>{product.title}</h1>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '32px' }}>
              <span style={{ color: 'var(--accent)', fontSize: '1.2rem', fontWeight: 700 }}>Gentle protection for your family</span>
              <span style={{ background: 'var(--navy)', color: 'white', padding: '6px 16px', borderRadius: '20px', fontSize: '1.2rem', fontWeight: 700 }}>${product.price.toFixed(2)}</span>
            </div>
            <p style={{ fontSize: '1.1rem', color: 'var(--text)', lineHeight: 1.8, marginBottom: '40px' }}>
              {product.desc}
            </p>
            <button 
              onClick={() => addToCart(product)}
              style={{
                padding: '16px 32px',
                background: 'var(--accent)',
                border: 'none',
                color: 'white',
                borderRadius: '8px',
                fontWeight: 700,
                fontSize: '1rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                boxShadow: '0 4px 15px rgba(245, 158, 11, 0.3)',
                transition: 'transform 0.2s'
              }}
            >
              <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
              ADD TO CART
            </button>
          </div>
        </div>

        <hr style={{ border: 'none', borderTop: '1px solid #e2e8f0', marginBottom: '60px' }} />

        {/* Related Products */}
        <h2 style={{ fontSize: '2rem', color: 'var(--navy)', marginBottom: '40px', fontWeight: 800 }}>
          Related <span style={{ color: 'var(--accent)' }}>Products</span>
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '24px' }}>
          {relatedProducts.map(rel => (
            <Link key={rel.id} to={`/store/${rel.id}`} style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', background: 'white', borderRadius: '16px', border: '1px solid #f0f0f0', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
              <div style={{ height: '200px' }}>
                <img src={getImage(rel)} alt={rel.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ padding: '20px' }}>
                <h3 style={{ fontSize: '1rem', color: 'var(--navy)', margin: '0 0 8px 0', fontWeight: 700 }}>{rel.title}</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--muted)', margin: 0 }}>{rel.category}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}

export default ProductDetailsPage;
