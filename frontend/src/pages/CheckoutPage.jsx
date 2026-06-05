import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useStore } from '../storeContext';

const CheckoutPage = () => {
    const { orderId } = useParams();
    const navigate = useNavigate();
    const { orders, user, fetchOrders } = useStore();
    const [order, setOrder] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (orders.length > 0) {
            const foundOrder = orders.find(o => o.id === parseInt(orderId) || o.id === orderId);
            setOrder(foundOrder);
        }
    }, [orders, orderId]);

    const handlePay = async (e) => {
        e.preventDefault();
        setLoading(true);
        // Simulate payment processing
        setTimeout(async () => {
            try {
                const token = localStorage.getItem('token');
                const res = await fetch(`http://localhost:4000/api/orders/${order.id}/pay`, {
                    method: 'PUT',
                    headers: { 
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}` 
                    }
                });
                
                if (res.ok && fetchOrders) {
                    await fetchOrders(token);
                }
                
                navigate(`/payment-success/${order.id}`);
            } catch (error) {
                console.error("Payment error", error);
                navigate(`/payment-success/${order.id}`);
            }
        }, 1500);
    };

    if (!order) return <div style={{ padding: '100px', textAlign: 'center' }}>Loading Order...</div>;

    return (
        <div style={{ background: '#f8fafc', minHeight: '100vh', padding: '60px 20px' }}>
            <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
                <h1 style={{ fontSize: '2rem', color: 'var(--navy)', marginBottom: '32px', fontWeight: 800 }}>Checkout</h1>

                <div style={{ background: 'white', borderRadius: '16px', padding: '32px', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
                    
                    {/* Order Summary */}
                    <div style={{ background: '#f8fafc', borderRadius: '12px', padding: '24px', marginBottom: '32px', border: '1px solid #f0f0f0' }}>
                        <h3 style={{ margin: '0 0 16px 0', fontSize: '1.1rem', color: 'var(--navy)' }}>Order Summary</h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            {order.items.map((item, idx) => (
                                <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', color: 'var(--muted)' }}>
                                    <span>{item.title} <span style={{ color: '#94a3b8' }}>x{item.qty}</span></span>
                                    <span>${Number(item.price).toFixed(2)}</span>
                                </div>
                            ))}
                        </div>
                        <div style={{ borderTop: '1px dashed #cbd5e1', margin: '16px 0', paddingTop: '16px', display: 'flex', justifyContent: 'space-between', fontWeight: 700, fontSize: '1.1rem', color: 'var(--navy)' }}>
                            <span>Total Amount</span>
                            <span style={{ color: 'var(--navy)' }}>${Number(order.total).toFixed(2)}</span>
                        </div>
                    </div>

                    <form onSubmit={handlePay}>
                        {/* Delivery Details */}
                        <div style={{ marginBottom: '32px' }}>
                            <h3 style={{ margin: '0 0 16px 0', fontSize: '1.2rem', color: 'var(--navy)' }}>Delivery Details</h3>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
                                <div>
                                    <label htmlFor="fullName" style={{ display: 'block', fontSize: '0.85rem', color: 'var(--muted)', marginBottom: '8px' }}>Full Name</label>
                                    <input id="fullName" type="text" required defaultValue={user?.name || ""} style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #e2e8f0', boxSizing: 'border-box' }} />
                                </div>
                                <div>
                                    <label htmlFor="email" style={{ display: 'block', fontSize: '0.85rem', color: 'var(--muted)', marginBottom: '8px' }}>Email</label>
                                    <input id="email" type="email" required defaultValue={user?.email || ""} style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #e2e8f0', boxSizing: 'border-box' }} />
                                </div>
                            </div>
                            <div style={{ marginBottom: '16px' }}>
                                <label htmlFor="address" style={{ display: 'block', fontSize: '0.85rem', color: 'var(--muted)', marginBottom: '8px' }}>Address</label>
                                <input id="address" type="text" required style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #e2e8f0', boxSizing: 'border-box' }} />
                            </div>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '16px' }}>
                                <div>
                                    <label htmlFor="city" style={{ display: 'block', fontSize: '0.85rem', color: 'var(--muted)', marginBottom: '8px' }}>City</label>
                                    <input id="city" type="text" required style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #e2e8f0', boxSizing: 'border-box' }} />
                                </div>
                                <div>
                                    <label htmlFor="zip" style={{ display: 'block', fontSize: '0.85rem', color: 'var(--muted)', marginBottom: '8px' }}>ZIP Code</label>
                                    <input id="zip" type="text" required style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #e2e8f0', boxSizing: 'border-box' }} />
                                </div>
                                <div>
                                    <label htmlFor="country" style={{ display: 'block', fontSize: '0.85rem', color: 'var(--muted)', marginBottom: '8px' }}>Country</label>
                                    <input id="country" type="text" required style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #e2e8f0', boxSizing: 'border-box' }} />
                                </div>
                            </div>
                        </div>

                        {/* Payment Information */}
                        <div style={{ marginBottom: '32px' }}>
                            <h3 style={{ margin: '0 0 16px 0', fontSize: '1.2rem', color: 'var(--navy)' }}>Payment Information</h3>
                            
                            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '24px' }}>
                                <label htmlFor="pay-cc" style={{ padding: '12px 20px', border: '1px solid var(--accent)', background: '#eff6ff', borderRadius: '8px', color: 'var(--accent)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                                    <input id="pay-cc" type="radio" name="payment" defaultChecked style={{ accentColor: 'var(--accent)' }} aria-label="Credit or Debit Card" /> Credit / Debit Card
                                </label>
                                <label htmlFor="pay-paypal" style={{ padding: '12px 20px', border: '1px solid #e2e8f0', borderRadius: '8px', color: 'var(--muted)', display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                                    <input id="pay-paypal" type="radio" name="payment" aria-label="PayPal" /> PayPal
                                </label>
                                <label htmlFor="pay-bank" style={{ padding: '12px 20px', border: '1px solid #e2e8f0', borderRadius: '8px', color: 'var(--muted)', display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                                    <input id="pay-bank" type="radio" name="payment" aria-label="Bank Transfer" /> Bank Transfer
                                </label>
                                <label htmlFor="pay-cod" style={{ padding: '12px 20px', border: '1px solid #e2e8f0', borderRadius: '8px', color: 'var(--muted)', display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', textTransform: 'uppercase', fontSize: '0.9rem' }}>
                                    <input id="pay-cod" type="radio" name="payment" aria-label="Cash on Delivery" /> Cash on Delivery
                                </label>
                            </div>

                            <div style={{ marginBottom: '16px' }}>
                                <label htmlFor="card-number" style={{ display: 'block', fontSize: '0.85rem', color: 'var(--muted)', marginBottom: '8px' }}>Card Number</label>
                                <input id="card-number" type="text" placeholder="XXXX XXXX XXXX XXXX" style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #e2e8f0', boxSizing: 'border-box' }} />
                            </div>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                                <div>
                                    <label htmlFor="exp-date" style={{ display: 'block', fontSize: '0.85rem', color: 'var(--muted)', marginBottom: '8px' }}>Expiry Date</label>
                                    <input id="exp-date" type="text" placeholder="MM/YY" style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #e2e8f0', boxSizing: 'border-box' }} />
                                </div>
                                <div>
                                    <label htmlFor="cvv" style={{ display: 'block', fontSize: '0.85rem', color: 'var(--muted)', marginBottom: '8px' }}>CVV</label>
                                    <input id="cvv" type="text" placeholder="XXX" style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #e2e8f0', boxSizing: 'border-box' }} />
                                </div>
                            </div>
                        </div>

                        <button type="submit" disabled={loading} style={{
                            width: '100%', padding: '16px', background: '#f59e0b', color: 'white', border: 'none', borderRadius: '8px', fontSize: '1.1rem', fontWeight: 700, cursor: loading ? 'not-allowed' : 'pointer'
                        }}>
                            {loading ? "Processing..." : `Pay $${Number(order.total).toFixed(2)} Now`}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CheckoutPage;
