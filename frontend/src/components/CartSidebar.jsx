import { useStore } from "../storeContext";
import { useNavigate } from "react-router-dom";

function CartSidebar() {
  const { cart, removeFromCart, user, login, placeOrder, isCartOpen, setIsCartOpen } = useStore();
  const navigate = useNavigate();

  if (!isCartOpen) return null;

  const handleRequestToBuy = () => {
    if (placeOrder()) {
      setIsCartOpen(false);
      navigate("/orders");
    }
  };

  return (
    <>
      <div 
        style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.4)', zIndex: 999 }}
        onClick={() => setIsCartOpen(false)}
      ></div>
      <div style={{
        position: 'fixed', top: 0, right: 0, bottom: 0, width: '400px', maxWidth: '100vw',
        background: 'white', zIndex: 1000, display: 'flex', flexDirection: 'column',
        boxShadow: '-10px 0 30px rgba(0,0,0,0.1)', animation: 'slideIn 0.3s ease-out forwards'
      }}>
        <div style={{ padding: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #f0f0f0' }}>
          <h2 style={{ margin: 0, fontSize: '1.5rem', color: 'var(--navy)', fontWeight: 800 }}>Your Cart</h2>
          <button onClick={() => setIsCartOpen(false)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--navy)' }}>
            <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
          </button>
        </div>

        <div style={{ flex: 1, overflowY: 'auto', padding: '24px' }}>
          {cart.length === 0 ? (
            <p style={{ color: 'var(--muted)', textAlign: 'center', marginTop: '40px' }}>Your cart is empty.</p>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {cart.map(item => (
                <div key={item.id} style={{ display: 'flex', gap: '16px', alignItems: 'center', paddingBottom: '20px', borderBottom: '1px solid #f0f0f0' }}>
                  <img src={item.image || "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=100"} alt={item.title} style={{ width: '60px', height: '60px', objectFit: 'cover', borderRadius: '8px' }} />
                  <div style={{ flex: 1 }}>
                    <h4 style={{ margin: '0 0 4px 0', fontSize: '0.95rem', color: 'var(--navy)', fontWeight: 700 }}>{item.title}</h4>
                    <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--muted)' }}>Qty: {item.qty}</p>
                  </div>
                  <button onClick={() => removeFromCart(item.id)} style={{ background: 'none', border: 'none', color: '#ef4444', cursor: 'pointer', padding: '4px' }}>
                    <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        <div style={{ padding: '24px', borderTop: '1px solid #f0f0f0' }}>
          {cart.length > 0 && (
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '24px' }}>
              <span style={{ fontSize: '1.2rem', fontWeight: 600, color: 'var(--navy)' }}>Total</span>
              <span style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--navy)' }}>${cart.reduce((sum, item) => sum + (item.price * item.qty), 0).toFixed(2)}</span>
            </div>
          )}
          {!user ? (
            <button 
              onClick={login}
              style={{ width: '100%', padding: '16px', background: 'var(--navy)', color: 'white', border: 'none', borderRadius: '8px', fontSize: '1rem', fontWeight: 700, cursor: 'pointer' }}
            >
              Login to Continue
            </button>
          ) : (
            <button 
              onClick={handleRequestToBuy}
              disabled={cart.length === 0}
              style={{ width: '100%', padding: '16px', background: cart.length === 0 ? '#cbd5e1' : 'var(--navy)', color: 'white', border: 'none', borderRadius: '8px', fontSize: '1rem', fontWeight: 700, cursor: cart.length === 0 ? 'not-allowed' : 'pointer' }}
            >
              Request to Buy
            </button>
          )}
        </div>
      </div>
      <style>
        {`
          @keyframes slideIn {
            from { transform: translateX(100%); }
            to { transform: translateX(0); }
          }
        `}
      </style>
    </>
  );
}

export default CartSidebar;
