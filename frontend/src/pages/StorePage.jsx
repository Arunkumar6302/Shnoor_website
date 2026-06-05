import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { productsData } from "../data/products";
import { useStore } from "../storeContext";

const categories = [
  "All products",
  "Cereals",
  "Coconut Delights",
  "Elephant Yam",
  "FMCG Products",
  "Oil",
  "Personal Care",
  "Plantation Crops"
];

function StorePage() {
  const [activeCategory, setActiveCategory] = useState("All products");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("Default");
  const [productsList, setProductsList] = useState(productsData);
  const { cart, addToCart, setIsCartOpen } = useStore();

  useEffect(() => {
    const savedProducts = localStorage.getItem('shnoor_catalog_v3');
    if (savedProducts) {
      setProductsList(JSON.parse(savedProducts));
    }
  }, []);

  const filteredProducts = productsList.filter(product => {
    const matchesCategory = activeCategory === "All products" || product.category === activeCategory;
    const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main style={{ background: '#ffffff', paddingBottom: '80px' }}>
      {/* Hero Section */}
      <section style={{ padding: '80px 0 60px 0', overflow: 'hidden' }}>
        <div className="container split-section" style={{ alignItems: 'center' }}>
          {/* Left Text Content */}
          <div style={{ paddingRight: '20px' }}>
            <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: 'var(--navy)', marginBottom: '24px', lineHeight: 1.1, fontWeight: 800 }}>
              Authentic Agri-<br />
              Food &<br />
              Consumer Goods<br />
              <span style={{ color: 'var(--accent)' }}>Delivered</span>
            </h1>
            <p style={{ fontSize: '1.1rem', color: 'var(--text)', lineHeight: 1.8 }}>
              SHNOOR International LLC is a dynamic organization bridging the worlds of technology and trade. With expertise spanning IT Consulting & Staffing, IT Product Development, and global import and export, we connect India with the UAE, Bahrain, Qatar, Oman, and Malaysia—delivering quality products and building lasting partnerships.
            </p>
          </div>

          {/* Right Image Content */}
          <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
            <div style={{ 
              width: '100%', 
              maxWidth: '500px', 
              height: '550px', 
              borderRadius: '200px 200px 0 0', 
              overflow: 'hidden', 
              position: 'relative' 
            }}>
              <img
                src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=800"
                alt="Business woman presenting data"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            {/* Floating Overlay Card */}
            <div style={{
              position: 'absolute',
              bottom: '40px',
              left: '50%',
              transform: 'translateX(-50%)',
              background: '#ffffff',
              padding: '20px 30px',
              borderRadius: '20px',
              boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
              textAlign: 'center',
              width: '80%',
              maxWidth: '350px'
            }}>
              <h3 style={{ fontSize: '0.9rem', fontWeight: 800, color: 'var(--navy)', margin: '0 0 4px 0', letterSpacing: '0.5px' }}>
                AUTHENTIC AGRI-FOOD &<br />CONSUMER GOODS
              </h3>
              <p style={{ fontSize: '0.75rem', color: 'var(--muted)', margin: 0, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                Delivered Worldwide
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Store Section */}
      <section className="container" style={{ marginTop: '40px' }}>
        <div>
          {/* Product Grid Area */}
          <div style={{ flexGrow: 1 }}>
            {/* Header / Controls */}
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', gap: '16px' }}>
              <h2 style={{ fontSize: '2rem', color: 'var(--navy)', margin: 0, fontWeight: 800 }}>{activeCategory}</h2>
              
              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center' }}>
                <div style={{ position: 'relative' }}>
                  <svg style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', width: '16px', height: '16px', color: '#999' }} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                  <input 
                    type="text" 
                    placeholder="Search products" 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    style={{
                      padding: '8px 16px 8px 36px',
                      borderRadius: '20px',
                      border: '1px solid #e0e0e0',
                      outline: 'none',
                      fontSize: '0.9rem',
                      width: '200px'
                    }}
                  />
                </div>
                
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ fontSize: '0.9rem', color: 'var(--muted)' }}>Category:</span>
                  <select 
                    value={activeCategory}
                    onChange={(e) => setActiveCategory(e.target.value)}
                    style={{
                      padding: '8px 12px',
                      borderRadius: '8px',
                      border: '1px solid #e0e0e0',
                      outline: 'none',
                      fontSize: '0.9rem',
                      background: 'white',
                      cursor: 'pointer'
                    }}
                  >
                    {categories.map((cat, i) => (
                      <option key={i} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ fontSize: '0.9rem', color: 'var(--muted)' }}>Sort by:</span>
                  <select 
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    style={{
                      padding: '8px 12px',
                      borderRadius: '8px',
                      border: '1px solid #e0e0e0',
                      outline: 'none',
                      fontSize: '0.9rem',
                      background: 'white',
                      cursor: 'pointer'
            
            {/* Toolbar */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px', background: 'white', padding: '16px 24px', borderRadius: '16px', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
              <p style={{ margin: 0, color: 'var(--muted)', fontWeight: 500 }}>Showing {filteredProducts.length} results</p>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ fontSize: '0.9rem', color: 'var(--muted)', fontWeight: 600 }}>Sort by:</span>
                <div style={{ position: 'relative' }}>
                  <select 
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    style={{
                      appearance: 'none',
                      padding: '10px 40px 10px 16px',
                      borderRadius: '8px',
                      border: '1px solid #e2e8f0',
                      color: 'var(--navy)',
                      fontWeight: 600,
                      fontSize: '0.9rem',
                      background: 'white',
                      cursor: 'pointer'
                    }}
                  >
                    <option value="Default">Default</option>
                    <option value="PriceLowHigh">Price: Low to High</option>
                    <option value="PriceHighLow">Price: High to Low</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '24px' }}>
              {filteredProducts.map(product => (
                <div key={product.id} style={{
                  background: 'white',
                  borderRadius: '16px',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  border: '1px solid #f0f0f0'
                }}>
                  {/* Image Area */}
                  <div style={{ position: 'relative', height: '220px', background: '#f8f8f8' }}>
                    <img src={product.image || ({
                      "Fresh Apple": "https://cdn.dummyjson.com/product-images/groceries/apple/1.webp",
                      "Premium Beef Steak": "https://cdn.dummyjson.com/product-images/groceries/beef-steak/1.webp",
                      "Pure Cooking Oil": "https://cdn.dummyjson.com/product-images/groceries/cooking-oil/1.webp",
                      "Crisp Cucumber": "https://cdn.dummyjson.com/product-images/groceries/cucumber/1.webp",
                      "Farm Fresh Eggs": "https://cdn.dummyjson.com/product-images/groceries/eggs/1.webp",
                      "Fresh Fish Steak": "https://cdn.dummyjson.com/product-images/groceries/fish-steak/1.webp"
                    }[product.title] || "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=400")} alt={product.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    {product.badge && (
                      <span style={{
                        position: 'absolute',
                        top: '12px',
                        left: '12px',
                        background: product.badge === 'BESTSELLER' ? 'var(--accent)' : 'var(--navy)',
                        color: 'white',
                        padding: '4px 10px',
                        borderRadius: '4px',
                        fontSize: '0.7rem',
                        fontWeight: 'bold',
                        letterSpacing: '0.5px'
                      }}>
                        {product.badge}
                      </span>
                    )}
                  </div>

                  {/* Content Area */}
                  <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px', gap: '8px' }}>
                      <h3 style={{ fontSize: '1rem', color: 'var(--navy)', margin: 0, fontWeight: 700, lineHeight: 1.4 }}>{product.title}</h3>
                      <span style={{ fontSize: '1.1rem', color: 'var(--accent)', fontWeight: 700 }}>${product.price.toFixed(2)}</span>
                    </div>

                    <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      <Link to={`/store/${product.id}`} style={{
                        width: '100%',
                        padding: '10px',
                        background: 'transparent',
                        border: '1px solid var(--navy)',
                        color: 'var(--navy)',
                        borderRadius: '8px',
                        fontWeight: 600,
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                        textDecoration: 'none',
                        textAlign: 'center',
                        display: 'block',
                        boxSizing: 'border-box'
                      }}>
                        View Details
                      </Link>
                      <button onClick={() => addToCart(product)} style={{
                        width: '100%',
                        padding: '10px',
                        background: 'var(--accent)',
                        border: 'none',
                        color: 'white',
                        borderRadius: '8px',
                        fontWeight: 600,
                        cursor: 'pointer',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: '8px',
                        transition: 'opacity 0.2s ease'
                      }}>
                        <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Scroll Indication (Decorative, just visual match to image) */}
            <div style={{ marginTop: '40px', display: 'flex', justifyContent: 'center' }}>
              <div style={{ width: '200px', height: '4px', background: '#f0f0f0', borderRadius: '2px', position: 'relative' }}>
                <div style={{ position: 'absolute', left: '20%', width: '40%', height: '100%', background: '#d0d0d0', borderRadius: '2px' }}></div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Floating Cart Button (Bottom Right) */}
      <button 
        aria-label="Open Cart"
        onClick={() => setIsCartOpen(true)}
        style={{
          position: 'fixed',
          bottom: '100px', 
          right: '2rem',
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          background: 'var(--accent)',
          color: 'white',
          border: 'none',
          boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          cursor: 'pointer',
          zIndex: 99,
          transition: 'transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
      }}>
        <svg width="28" height="28" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
        {cart.length > 0 && (
          <span style={{
            position: 'absolute',
            top: '-5px',
            right: '-5px',
            background: '#ef4444',
            color: 'white',
            borderRadius: '50%',
            width: '24px',
            height: '24px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '0.8rem',
            fontWeight: 'bold',
            border: '2px solid white'
          }}>
            {cart.reduce((sum, item) => sum + item.qty, 0)}
          </span>
        )}
      </button>

    </main>
  );
}

export default StorePage;
