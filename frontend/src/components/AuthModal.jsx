import { useState } from "react";
import { useStore } from "../storeContext";

function AuthModal() {
  const { isAuthModalOpen, setIsAuthModalOpen, loginUser, registerUser } = useStore();
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  if (!isAuthModalOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    
    let success = false;
    if (isLogin) {
      success = await loginUser(email, password);
      if (!success) setError("Invalid email or password");
    } else {
      if (!name) {
        setError("Name is required");
        setLoading(false);
        return;
      }
      success = await registerUser(name, email, password);
      if (!success) setError("Failed to register. Email may be taken.");
    }
    
    setLoading(false);
  };

  return (
    <div style={{
      position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
      background: 'rgba(0,0,0,0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1100
    }}>
      <div style={{
        background: 'white', width: '90%', maxWidth: '400px', borderRadius: '16px', padding: '32px', position: 'relative', boxShadow: '0 20px 40px rgba(0,0,0,0.2)', boxSizing: 'border-box'
      }}>
        <button 
          onClick={() => setIsAuthModalOpen(false)}
          style={{ position: 'absolute', top: '16px', right: '16px', background: 'none', border: 'none', cursor: 'pointer', color: 'var(--muted)' }}
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
        </button>
        
        <h2 style={{ fontSize: '1.5rem', color: 'var(--navy)', marginBottom: '24px', fontWeight: 800 }}>
          {isLogin ? "Welcome Back" : "Create Account"}
        </h2>
        
        {error && <div style={{ background: '#fef2f2', color: '#ef4444', padding: '12px', borderRadius: '8px', marginBottom: '16px', fontSize: '0.9rem' }}>{error}</div>}
        
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {!isLogin && (
            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.9rem', color: 'var(--navy)', fontWeight: 600 }}>Name</label>
              <input 
                type="text" value={name} onChange={e => setName(e.target.value)} required={!isLogin}
                style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #e2e8f0', outline: 'none', boxSizing: 'border-box' }}
              />
            </div>
          )}
          
          <div>
            <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.9rem', color: 'var(--navy)', fontWeight: 600 }}>Email Address</label>
            <input 
              type="email" value={email} onChange={e => setEmail(e.target.value)} required
              style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #e2e8f0', outline: 'none', boxSizing: 'border-box' }}
            />
          </div>
          
          <div>
            <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.9rem', color: 'var(--navy)', fontWeight: 600 }}>Password</label>
            <input 
              type="password" value={password} onChange={e => setPassword(e.target.value)} required
              style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #e2e8f0', outline: 'none', boxSizing: 'border-box' }}
            />
          </div>
          
          <button type="submit" disabled={loading} style={{
            width: '100%', padding: '14px', background: 'var(--accent)', color: 'white', border: 'none', borderRadius: '8px', fontSize: '1rem', fontWeight: 700, cursor: loading ? 'not-allowed' : 'pointer', marginTop: '8px', boxSizing: 'border-box'
          }}>
            {loading ? "Please wait..." : (isLogin ? "Login" : "Sign Up")}
          </button>
        </form>
        
        <div style={{ marginTop: '24px', textAlign: 'center', fontSize: '0.95rem', color: 'var(--muted)' }}>
          {isLogin ? "Don't have an account? " : "Already have an account? "}
          <button onClick={() => { setIsLogin(!isLogin); setError(""); }} style={{ background: 'none', border: 'none', color: 'var(--navy)', fontWeight: 700, cursor: 'pointer' }}>
            {isLogin ? "Sign Up" : "Login"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default AuthModal;
