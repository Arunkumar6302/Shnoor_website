import React, { useState, useEffect } from 'react';
import { getUnresolvedQueries, teachBot } from '../services/chatApi';
import { productsData as mockProducts } from '../data/products';

const API_URL = import.meta.env.VITE_API_BASE_URL || (import.meta.env.MODE === 'production' ? 'https://shnoor-website-l4pf.onrender.com' : 'http://localhost:4000');

const AdminLearningPage = () => {
    const [token, setToken] = useState(localStorage.getItem('adminToken') || null);
    const [loginPassword, setLoginPassword] = useState("");
    const [loginError, setLoginError] = useState("");
    const [loading, setLoading] = useState(false);

    const [activeTab, setActiveTab] = useState('knowledge_base');
    const [unresolved, setUnresolved] = useState([]);
    const [orders, setOrders] = useState([]);
    const [answers, setAnswers] = useState({});
    const [submitting, setSubmitting] = useState({});

    // Product Management State
    const [productsList, setProductsList] = useState(() => {
        const saved = localStorage.getItem('shnoor_catalog_v4');
        return saved ? JSON.parse(saved) : mockProducts;
    });
    const [isAddingProduct, setIsAddingProduct] = useState(false);
    const [editingProduct, setEditingProduct] = useState(null);
    const [productForm, setProductForm] = useState({ title: '', price: '', image: '', description: '' });

    useEffect(() => {
        localStorage.setItem('shnoor_catalog_v4', JSON.stringify(productsList));
    }, [productsList]);

    const handleProductSubmit = (e) => {
        e.preventDefault();
        if (editingProduct) {
            setProductsList(prev => prev.map(p => p.id === editingProduct.id ? { ...p, ...productForm, price: parseFloat(productForm.price) } : p));
        } else {
            setProductsList(prev => [{ id: Date.now(), ...productForm, price: parseFloat(productForm.price), category: 'Groceries' }, ...prev]);
        }
        setIsAddingProduct(false);
        setEditingProduct(null);
        setProductForm({ title: '', price: '', image: '', description: '' });
    };

    const handleDeleteProduct = (id) => {
        if(window.confirm('Are you sure you want to delete this product?')) {
            setProductsList(prev => prev.filter(p => p.id !== id));
        }
    };
    
    const openEditProduct = (p) => {
        setEditingProduct(p);
        setProductForm({ title: p.title, price: p.price, image: p.image || '', description: p.description || '' });
        setIsAddingProduct(true);
    };

    useEffect(() => {
        if (token) {
            fetchQueries();
            fetchOrders();
        }
    }, [token]);

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const res = await fetch(`${API_URL}/api/auth/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email: 'admin@shnoor.com', password: loginPassword })
            });
            if (res.ok) {
                const data = await res.json();
                localStorage.setItem('adminToken', data.token);
                setToken(data.token);
                setLoginError("");
            } else {
                setLoginError("Invalid master password");
            }
        } catch (e) {
            setLoginError("Server connection error");
        } finally {
            setLoading(false);
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('adminToken');
        setToken(null);
    };

    const fetchQueries = async () => {
        try {
            const data = await getUnresolvedQueries();
            setUnresolved(data || []);
        } catch (error) {
            console.error(error);
        }
    };

    const fetchOrders = async () => {
        try {
            const res = await fetch(`${API_URL}/api/admin/orders`, {
                headers: { Authorization: `Bearer ${token}` }
            });
            if (res.ok) {
                const data = await res.json();
                setOrders(data);
            }
        } catch (error) {
            console.error(error);
        }
    };

    const updateOrderStatus = async (id, status) => {
        try {
            const res = await fetch(`${API_URL}/api/admin/orders/${id}/status`, {
                method: 'PUT',
                headers: { 
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify({ status })
            });
            if (res.ok) {
                fetchOrders();
            }
        } catch (error) {
            console.error(error);
        }
    };

    const handleTeach = async (item) => {
        const answer = answers[item.query];
        if (!answer?.trim()) return;

        setSubmitting(prev => ({ ...prev, [item.query]: true }));
        try {
            await teachBot(item.query, answer, item.website_id);
            setAnswers(prev => {
                const newAnswers = { ...prev };
                delete newAnswers[item.query];
                return newAnswers;
            });
            await fetchQueries();
            alert("Bot successfully learned the new response!");
        } catch (error) {
            alert("Failed to teach the bot. Please try again.");
        } finally {
            setSubmitting(prev => ({ ...prev, [item.query]: false }));
        }
    };

    if (!token) {
        return (
            <div style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f8fafc' }}>
                <div style={{ background: 'white', padding: '40px', borderRadius: '16px', boxShadow: '0 10px 25px rgba(0,0,0,0.05)', width: '100%', maxWidth: '400px', textAlign: 'center' }}>
                    <h2 style={{ color: 'var(--navy)', marginBottom: '16px', fontSize: '1.5rem', fontWeight: 800 }}>Admin Login</h2>
                    <p style={{ color: 'var(--muted)', marginBottom: '24px', fontSize: '0.95rem' }}>Enter the master password to access the control panel.</p>
                    
                    {loginError && <div style={{ background: '#fef2f2', color: '#ef4444', padding: '10px', borderRadius: '8px', marginBottom: '16px', fontSize: '0.9rem' }}>{loginError}</div>}
                    
                    <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                        <input 
                            type="password" 
                            placeholder="••••••••" 
                            value={loginPassword} 
                            onChange={(e) => setLoginPassword(e.target.value)}
                            required
                            style={{ width: '100%', padding: '14px', borderRadius: '8px', border: '1px solid #e2e8f0', outline: 'none', boxSizing: 'border-box', fontSize: '1.2rem', letterSpacing: '4px', textAlign: 'center' }}
                        />
                        <button type="submit" disabled={loading} style={{
                            width: '100%', padding: '14px', background: 'var(--navy)', color: 'white', border: 'none', borderRadius: '8px', fontSize: '1rem', fontWeight: 700, cursor: loading ? 'not-allowed' : 'pointer'
                        }}>
                            {loading ? "Logging in..." : "Login"}
                        </button>
                    </form>
                </div>
            </div>
        );
    }

    const pendingOrders = orders.filter(o => o.status === 'Pending');
    const approvedOrders = orders.filter(o => o.status === 'Approved');
    const paidOrders = orders.filter(o => o.status === 'Paid');

    return (
        <div style={{ display: 'flex', minHeight: '100vh', background: '#f8fafc' }}>
            {/* Sidebar */}
            <div style={{ width: '260px', background: 'white', borderRight: '1px solid #f0f0f0', display: 'flex', flexDirection: 'column' }}>
                <div style={{ padding: '24px', borderBottom: '1px solid #f0f0f0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <h1 style={{ fontSize: '1.2rem', margin: 0, color: 'var(--navy)', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <img src="/logo.svg" alt="Logo" style={{ width: '24px', height: '24px' }} onError={(e) => e.target.style.display='none'} />
                        Control Panel
                    </h1>
                </div>

                <div style={{ padding: '24px 16px', flex: 1, display: 'flex', flexDirection: 'column', gap: '32px' }}>
                    <div>
                        <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#94a3b8', letterSpacing: '1px', marginBottom: '12px', paddingLeft: '8px', textTransform: 'uppercase' }}>Menu</div>
                        <button 
                            onClick={() => setActiveTab('knowledge_base')}
                            style={{ width: '100%', display: 'flex', alignItems: 'center', gap: '12px', padding: '10px 16px', background: activeTab === 'knowledge_base' ? '#f1f5f9' : 'transparent', color: activeTab === 'knowledge_base' ? 'var(--navy)' : '#64748b', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: activeTab === 'knowledge_base' ? 600 : 500, textAlign: 'left', marginBottom: '4px' }}
                        >
                            <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path></svg>
                            Knowledge Base
                        </button>
                        <button 
                            onClick={() => setActiveTab('products')}
                            style={{ width: '100%', display: 'flex', alignItems: 'center', gap: '12px', padding: '10px 16px', background: activeTab === 'products' ? '#f1f5f9' : 'transparent', color: activeTab === 'products' ? 'var(--navy)' : '#64748b', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: activeTab === 'products' ? 600 : 500, textAlign: 'left' }}
                        >
                            <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path></svg>
                            Products
                        </button>
                    </div>

                    <div>
                        <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#94a3b8', letterSpacing: '1px', marginBottom: '12px', paddingLeft: '8px', textTransform: 'uppercase' }}>Orders</div>
                        <button 
                            onClick={() => setActiveTab('pending')}
                            style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 16px', background: activeTab === 'pending' ? '#f1f5f9' : 'transparent', color: activeTab === 'pending' ? 'var(--navy)' : '#64748b', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: activeTab === 'pending' ? 600 : 500, textAlign: 'left', marginBottom: '4px' }}
                        >
                            <span style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                Pending
                            </span>
                            <span>({pendingOrders.length})</span>
                        </button>
                        <button 
                            onClick={() => setActiveTab('approved')}
                            style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 16px', background: activeTab === 'approved' ? '#f1f5f9' : 'transparent', color: activeTab === 'approved' ? 'var(--navy)' : '#64748b', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: activeTab === 'approved' ? 600 : 500, textAlign: 'left', marginBottom: '4px' }}
                        >
                            <span style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                Approved
                            </span>
                            <span>({approvedOrders.length})</span>
                        </button>
                        <button 
                            onClick={() => setActiveTab('paid')}
                            style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 16px', background: activeTab === 'paid' ? '#f1f5f9' : 'transparent', color: activeTab === 'paid' ? 'var(--navy)' : '#64748b', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: activeTab === 'paid' ? 600 : 500, textAlign: 'left' }}
                        >
                            <span style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                Paid Orders
                            </span>
                            <span>({paidOrders.length})</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                <div style={{ padding: '16px 40px', display: 'flex', justifyContent: 'flex-end', alignItems: 'center', borderBottom: '1px solid #f0f0f0', background: 'white' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                        <span style={{ color: 'var(--muted)', fontSize: '0.95rem' }}>Hello, Admin</span>
                        <button onClick={handleLogout} style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#ef4444', border: '1px solid #fee2e2', background: '#fef2f2', padding: '6px 12px', borderRadius: '8px', fontWeight: 600, cursor: 'pointer', fontSize: '0.85rem' }}>
                            <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
                            Logout
                        </button>
                    </div>
                </div>
                
                <div style={{ padding: '40px', overflowY: 'auto', flex: 1 }}>
                    {activeTab === 'knowledge_base' && (
                        <div>
                            <h2 style={{ fontSize: '1.8rem', color: 'var(--navy)', marginBottom: '8px', fontWeight: 800 }}>Chatbot Learning Dashboard</h2>
                            <p style={{ color: 'var(--muted)', marginBottom: '32px' }}>Review questions the chatbot couldn't answer and teach it new responses.</p>
                            
                            {unresolved.length === 0 ? (
                                <div style={{ background: 'white', padding: '60px 20px', borderRadius: '16px', textAlign: 'center', border: '1px dashed #cbd5e1' }}>
                                    <h3 style={{ fontSize: '1.3rem', color: 'var(--navy)', marginBottom: '8px' }}>All Caught Up! 🎉</h3>
                                    <p style={{ color: 'var(--muted)', margin: 0 }}>There are no unresolved queries for the chatbot at the moment.</p>
                                </div>
                            ) : (
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                                    {unresolved.map((item, index) => (
                                        <div key={index} style={{ background: 'white', padding: '24px', borderRadius: '16px', borderLeft: '4px solid var(--accent)', boxShadow: '0 4px 15px rgba(0,0,0,0.02)' }}>
                                            <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '1px' }}>Website: {item.website_id}</span>
                                            <h3 style={{ fontSize: '1.3rem', margin: '8px 0 16px 0', color: 'var(--navy)' }}>"{item.query}"</h3>
                                            <textarea 
                                                style={{ width: '100%', padding: '16px', borderRadius: '8px', border: '1px solid #e2e8f0', minHeight: '100px', resize: 'vertical', fontFamily: 'inherit', boxSizing: 'border-box' }}
                                                placeholder="Type the exact answer you want the bot to learn..."
                                                value={answers[item.query] || ""}
                                                onChange={(e) => setAnswers(prev => ({ ...prev, [item.query]: e.target.value }))}
                                            ></textarea>
                                            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '16px' }}>
                                                <button 
                                                    onClick={() => handleTeach(item)}
                                                    disabled={submitting[item.query] || !answers[item.query]?.trim()}
                                                    style={{ padding: '10px 24px', background: 'var(--accent)', color: 'white', border: 'none', borderRadius: '8px', fontWeight: 600, cursor: (submitting[item.query] || !answers[item.query]?.trim()) ? 'not-allowed' : 'pointer', opacity: (submitting[item.query] || !answers[item.query]?.trim()) ? 0.5 : 1 }}
                                                >
                                                    {submitting[item.query] ? "Teaching..." : "Teach Bot"}
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    )}

                    {activeTab === 'products' && (
                        <div>
                            {isAddingProduct ? (
                                <div style={{ background: 'white', borderRadius: '16px', padding: '32px', border: '1px solid #f0f0f0' }}>
                                    <h2 style={{ fontSize: '1.5rem', color: 'var(--navy)', margin: '0 0 24px 0', fontWeight: 800 }}>{editingProduct ? 'Edit Product' : 'Add New Product'}</h2>
                                    <form onSubmit={handleProductSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                        <div>
                                            <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--navy)', marginBottom: '8px', fontWeight: 600 }}>Product Name</label>
                                            <input type="text" required value={productForm.title} onChange={e => setProductForm({...productForm, title: e.target.value})} placeholder="e.g. Organic Oats" style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #e2e8f0', boxSizing: 'border-box' }} />
                                        </div>
                                        <div>
                                            <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--navy)', marginBottom: '8px', fontWeight: 600 }}>Price ($)</label>
                                            <input type="number" step="0.01" required value={productForm.price} onChange={e => setProductForm({...productForm, price: e.target.value})} placeholder="e.g. 19.99" style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #e2e8f0', boxSizing: 'border-box' }} />
                                        </div>
                                        <div>
                                            <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--navy)', marginBottom: '8px', fontWeight: 600 }}>Product Image</label>
                                            <div style={{ display: 'flex', gap: '12px' }}>
                                                <input type="text" value={productForm.image} onChange={e => setProductForm({...productForm, image: e.target.value})} placeholder="Image URL (e.g., /oats.png)" style={{ flex: 1, padding: '12px', borderRadius: '8px', border: '1px solid #e2e8f0', boxSizing: 'border-box' }} />
                                                <button type="button" style={{ padding: '0 24px', background: 'var(--navy)', color: 'white', border: 'none', borderRadius: '8px', fontWeight: 600, cursor: 'pointer' }}>Upload Pic</button>
                                            </div>
                                        </div>
                                        <div>
                                            <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--navy)', marginBottom: '8px', fontWeight: 600 }}>Description</label>
                                            <textarea rows="4" value={productForm.description} onChange={e => setProductForm({...productForm, description: e.target.value})} style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #e2e8f0', boxSizing: 'border-box', fontFamily: 'inherit' }}></textarea>
                                        </div>
                                        <div style={{ display: 'flex', gap: '16px', marginTop: '16px' }}>
                                            <button type="submit" style={{ padding: '12px 32px', background: '#3b82f6', color: 'white', border: 'none', borderRadius: '8px', fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                                <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"></path></svg>
                                                Save Product
                                            </button>
                                            <button type="button" onClick={() => { setIsAddingProduct(false); setEditingProduct(null); setProductForm({ title: '', price: '', image: '', description: '' }); }} style={{ padding: '12px 32px', background: 'white', color: 'var(--muted)', border: '1px solid #e2e8f0', borderRadius: '8px', fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                                <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                                                Cancel
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            ) : (
                                <>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
                                        <h2 style={{ fontSize: '1.5rem', color: 'var(--navy)', margin: 0, fontWeight: 800 }}>Product Catalog</h2>
                                        <div style={{ display: 'flex', gap: '16px' }}>
                                            <input type="text" placeholder="Search products..." style={{ padding: '10px 16px', borderRadius: '8px', border: '1px solid #e2e8f0', width: '250px' }} />
                                            <button onClick={() => setIsAddingProduct(true)} style={{ padding: '10px 20px', background: 'var(--navy)', color: 'white', border: 'none', borderRadius: '8px', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                                                <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg>
                                                Add New Product
                                            </button>
                                        </div>
                                    </div>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                                        {productsList.map(product => (
                                            <div key={product.id} style={{ background: 'white', padding: '24px', borderRadius: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', border: '1px solid #f0f0f0' }}>
                                                <div>
                                                    <h3 style={{ margin: '0 0 8px 0', color: 'var(--navy)', fontSize: '1.1rem' }}>{product.title} - ${Number(product.price).toFixed(2)}</h3>
                                                    <p style={{ margin: 0, color: 'var(--muted)', fontSize: '0.9rem', lineHeight: '1.5' }}>{product.description || `High-quality ${product.title} packed with essential nutrients and carefully sourced. Ideal for all your daily needs.`}</p>
                                                </div>
                                                <div style={{ display: 'flex', gap: '12px', color: '#94a3b8' }}>
                                                    <svg onClick={() => openEditProduct(product)} width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ cursor: 'pointer' }}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>
                                                    <svg onClick={() => handleDeleteProduct(product.id)} width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ cursor: 'pointer' }}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </>
                            )}
                        </div>
                    )}

                    {activeTab === 'pending' && (
                        <div>
                            <h2 style={{ fontSize: '1.5rem', color: 'var(--navy)', marginBottom: '32px', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '12px' }}>
                                <svg width="24" height="24" fill="none" stroke="#d97706" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                Pending Approvals
                            </h2>
                            {pendingOrders.length === 0 ? (
                                <div style={{ textAlign: 'center', padding: '60px', color: 'var(--muted)', background: 'white', borderRadius: '16px', border: '1px dashed #cbd5e1' }}>No pending orders.</div>
                            ) : (
                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '24px' }}>
                                    {pendingOrders.map(order => (
                                        <div key={order.id} style={{ background: 'white', borderRadius: '16px', padding: '24px', boxShadow: '0 4px 15px rgba(0,0,0,0.03)', border: '1px solid #f0f0f0' }}>
                                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
                                                <div>
                                                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--navy)', fontWeight: 700 }}>
                                                        <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                                                        {order.user_email}
                                                    </div>
                                                    <div style={{ fontSize: '0.8rem', color: 'var(--muted)', marginTop: '4px' }}>ID: {order.order_number || order.id}</div>
                                                    <div style={{ fontSize: '0.8rem', color: 'var(--muted)' }}>{new Date(order.created_at).toLocaleString()}</div>
                                                </div>
                                                <span style={{ background: '#fef3c7', color: '#d97706', padding: '4px 12px', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 600, height: 'fit-content' }}>Pending</span>
                                            </div>
                                            
                                            <div style={{ background: '#f8fafc', padding: '16px', borderRadius: '8px', marginBottom: '16px' }}>
                                                <div style={{ fontSize: '0.85rem', color: 'var(--muted)', display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '12px' }}>
                                                    <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path></svg>
                                                    Order Items
                                                </div>
                                                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                                    {order.items.map((item, i) => (
                                                        <div key={i} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem' }}>
                                                            <span style={{ color: 'var(--navy)' }}>{item.title} <span style={{ color: 'var(--muted)' }}>x{item.qty}</span></span>
                                                            <strong style={{ color: 'var(--navy)' }}>${Number(item.price).toFixed(2)}</strong>
                                                        </div>
                                                    ))}
                                                </div>
                                                <div style={{ borderTop: '1px solid #e2e8f0', marginTop: '12px', paddingTop: '12px', display: 'flex', justifyContent: 'space-between', fontWeight: 700, color: 'var(--navy)' }}>
                                                    <span>Total:</span>
                                                    <span>${Number(order.total).toFixed(2)}</span>
                                                </div>
                                            </div>
                                            
                                            <div style={{ display: 'flex', gap: '12px' }}>
                                                <button onClick={() => updateOrderStatus(order.id, 'Rejected')} style={{ flex: 1, padding: '10px', background: 'white', color: '#ef4444', border: '1px solid #ef4444', borderRadius: '8px', fontWeight: 600, cursor: 'pointer' }}>Reject</button>
                                                <button onClick={() => updateOrderStatus(order.id, 'Approved')} style={{ flex: 1, padding: '10px', background: 'var(--navy)', color: 'white', border: 'none', borderRadius: '8px', fontWeight: 600, cursor: 'pointer' }}>Approve Order</button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    )}

                    {activeTab === 'approved' && (
                        <div>
                            <h2 style={{ fontSize: '1.5rem', color: 'var(--navy)', marginBottom: '32px', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '12px' }}>
                                <svg width="24" height="24" fill="none" stroke="#3b82f6" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                Waiting For Payment
                            </h2>
                            {approvedOrders.length === 0 ? (
                                <div style={{ textAlign: 'center', padding: '60px', color: 'var(--muted)', background: 'white', borderRadius: '16px', border: '1px dashed #cbd5e1' }}>No approved orders waiting for payment.</div>
                            ) : (
                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '24px' }}>
                                    {approvedOrders.map(order => (
                                        <div key={order.id} style={{ background: 'white', borderRadius: '16px', padding: '24px', boxShadow: '0 4px 15px rgba(0,0,0,0.03)', border: '1px solid #f0f0f0' }}>
                                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
                                                <div>
                                                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--navy)', fontWeight: 700 }}>
                                                        <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                                                        {order.user_email}
                                                    </div>
                                                    <div style={{ fontSize: '0.8rem', color: 'var(--muted)', marginTop: '4px' }}>ID: {order.order_number || order.id}</div>
                                                    <div style={{ fontSize: '0.8rem', color: 'var(--muted)' }}>{new Date(order.created_at).toLocaleString()}</div>
                                                </div>
                                                <span style={{ color: '#3b82f6', background: '#eff6ff', padding: '4px 12px', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 600, height: 'fit-content' }}>Approved</span>
                                            </div>
                                            
                                            <div style={{ background: '#f8fafc', padding: '16px', borderRadius: '8px' }}>
                                                <div style={{ fontSize: '0.85rem', color: 'var(--muted)', display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '12px' }}>
                                                    <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path></svg>
                                                    Order Items
                                                </div>
                                                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                                    {order.items.map((item, i) => (
                                                        <div key={i} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem' }}>
                                                            <span style={{ color: 'var(--navy)' }}>{item.title} <span style={{ color: 'var(--muted)' }}>x{item.qty}</span></span>
                                                            <strong style={{ color: 'var(--navy)' }}>${Number(item.price).toFixed(2)}</strong>
                                                        </div>
                                                    ))}
                                                </div>
                                                <div style={{ borderTop: '1px solid #e2e8f0', marginTop: '12px', paddingTop: '12px', display: 'flex', justifyContent: 'space-between', fontWeight: 700, color: 'var(--navy)' }}>
                                                    <span>Total:</span>
                                                    <span>${Number(order.total).toFixed(2)}</span>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    )}

                    {activeTab === 'paid' && (
                        <div>
                            <h2 style={{ fontSize: '1.5rem', color: 'var(--navy)', marginBottom: '32px', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '12px' }}>
                                <svg width="24" height="24" fill="none" stroke="#10b981" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                Paid & Ready for Fulfillment
                            </h2>
                            {paidOrders.length === 0 ? (
                                <div style={{ textAlign: 'center', padding: '80px 20px', color: 'var(--muted)', background: 'white', borderRadius: '16px', border: '1px dashed #cbd5e1' }}>
                                    <svg width="48" height="48" fill="none" stroke="#cbd5e1" viewBox="0 0 24 24" style={{ marginBottom: '16px' }}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                    <h3 style={{ color: 'var(--navy)', marginBottom: '8px' }}>No paid orders yet</h3>
                                    <p style={{ margin: 0 }}>Orders will appear here once customers complete their payments.</p>
                                </div>
                            ) : (
                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '24px' }}>
                                    {paidOrders.map(order => (
                                        <div key={order.id} style={{ background: 'white', borderRadius: '16px', padding: '24px', boxShadow: '0 4px 15px rgba(0,0,0,0.03)', border: '1px solid #f0f0f0' }}>
                                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
                                                <div>
                                                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--navy)', fontWeight: 700 }}>
                                                        <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                                                        {order.user_email}
                                                    </div>
                                                    <div style={{ fontSize: '0.8rem', color: 'var(--muted)', marginTop: '4px' }}>ID: {order.order_number || order.id}</div>
                                                    <div style={{ fontSize: '0.8rem', color: 'var(--muted)' }}>{new Date(order.created_at).toLocaleString()}</div>
                                                </div>
                                                <span style={{ color: '#10b981', background: '#d1fae5', padding: '4px 12px', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 600, height: 'fit-content' }}>Paid</span>
                                            </div>
                                            
                                            <div style={{ background: '#f8fafc', padding: '16px', borderRadius: '8px' }}>
                                                <div style={{ fontSize: '0.85rem', color: 'var(--muted)', display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '12px' }}>
                                                    <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path></svg>
                                                    Order Items
                                                </div>
                                                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                                    {order.items.map((item, i) => (
                                                        <div key={i} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem' }}>
                                                            <span style={{ color: 'var(--navy)' }}>{item.title} <span style={{ color: 'var(--muted)' }}>x{item.qty}</span></span>
                                                            <strong style={{ color: 'var(--navy)' }}>${Number(item.price).toFixed(2)}</strong>
                                                        </div>
                                                    ))}
                                                </div>
                                                <div style={{ borderTop: '1px solid #e2e8f0', marginTop: '12px', paddingTop: '12px', display: 'flex', justifyContent: 'space-between', fontWeight: 700, color: 'var(--navy)' }}>
                                                    <span>Total:</span>
                                                    <span>${Number(order.total).toFixed(2)}</span>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AdminLearningPage;
