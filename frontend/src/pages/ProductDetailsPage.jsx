import { useParams, Link } from "react-router-dom";
import { productsData } from "../data/products";
import { useStore } from "../storeContext";

function ProductDetailsPage() {
  const { id } = useParams();
  const { addToCart } = useStore();
  const product = productsData.find(p => p.id === parseInt(id));

  if (!product) return <div className="container" style={{padding: '100px 0'}}>Product not found</div>;

  const relatedProducts = productsData.filter(p => p.id !== product.id).slice(0, 3);

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
            <img src={product.image} alt={product.title} style={{ width: '100%', borderRadius: '16px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }} />
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
                <img src={rel.image} alt={rel.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
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
