import React, { useEffect, useState, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useStore } from '../storeContext';
import { productsData } from '../data/products';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

const PaymentSuccessPage = () => {
    const { orderId } = useParams();
    const { orders, user } = useStore();
    const [order, setOrder] = useState(null);
    const receiptRef = useRef(null);
    const [isDownloading, setIsDownloading] = useState(false);

    useEffect(() => {
        if (orders.length > 0) {
            const foundOrder = orders.find(o => o.id === parseInt(orderId) || o.id === orderId);
            setOrder(foundOrder);
        }
    }, [orders, orderId]);

    const downloadPDF = async () => {
        if (!receiptRef.current) return;
        setIsDownloading(true);
        try {
            const canvas = await html2canvas(receiptRef.current, { scale: 2, useCORS: true });
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF({
                orientation: 'portrait',
                unit: 'px',
                format: [canvas.width / 2, canvas.height / 2]
            });
            pdf.addImage(imgData, 'PNG', 0, 0, canvas.width / 2, canvas.height / 2);
            pdf.save(`Receipt_${order.order_number || order.id}.pdf`);
        } catch (error) {
            console.error("Failed to generate PDF", error);
        } finally {
            setIsDownloading(false);
        }
    };

    if (!order) return <div style={{ padding: '100px', textAlign: 'center' }}>Loading Receipt...</div>;

    // Get a few random products for "You might also like"
    const suggestedProducts = productsData.filter(p => !order.items.find(i => i.id === p.id)).slice(0, 3);

    return (
        <div style={{ background: '#f8fafc', minHeight: '100vh', padding: '60px 20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            
            <div ref={receiptRef} style={{ background: 'white', borderRadius: '16px', padding: '40px', width: '100%', maxWidth: '700px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', textAlign: 'center', marginBottom: '24px' }}>
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '16px' }}>
                    <div style={{ width: '64px', height: '64px', borderRadius: '50%', border: '3px solid #10b981', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#10b981' }}>
                        <svg width="32" height="32" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                    </div>
                </div>
                
                <h1 style={{ fontSize: '2.5rem', color: 'var(--navy)', margin: '0 0 8px 0', fontWeight: 800 }}>Payment Successful!</h1>
                <p style={{ color: 'var(--muted)', marginBottom: '40px' }}>Thank you for your purchase.</p>

                <div style={{ display: 'flex', justifyContent: 'space-between', textAlign: 'left', marginBottom: '32px', flexWrap: 'wrap', gap: '24px' }}>
                    <div>
                        <h3 style={{ fontSize: '1.1rem', color: 'var(--navy)', margin: '0 0 12px 0' }}>Order Details</h3>
                        <div style={{ fontSize: '0.9rem', color: 'var(--muted)', lineHeight: '1.6' }}>
                            <div><strong style={{ color: 'var(--navy)' }}>Order ID:</strong> {order.order_number || `ORD-${order.id}`}</div>
                            <div><strong style={{ color: 'var(--navy)' }}>Date:</strong> {new Date(order.created_at || Date.now()).toLocaleString()}</div>
                            <div><strong style={{ color: 'var(--navy)' }}>Status:</strong> <span style={{ color: '#f59e0b', fontWeight: 600 }}>Paid</span></div>
                        </div>
                    </div>
                    <div>
                        <h3 style={{ fontSize: '1.1rem', color: 'var(--navy)', margin: '0 0 12px 0' }}>Delivery Address</h3>
                        <div style={{ fontSize: '0.9rem', color: 'var(--navy)', lineHeight: '1.6' }}>
                            <div style={{ fontWeight: 600 }}>{user?.email || 'arun@gmail.com'}</div>
                            <div style={{ color: 'var(--muted)' }}>3-3, G.A Kottala ,Pamidi<br/>Anantapur, 515775<br/>India</div>
                        </div>
                    </div>
                </div>

                <div style={{ borderTop: '1px dashed #cbd5e1', borderBottom: '1px dashed #cbd5e1', padding: '24px 0', marginBottom: '24px', textAlign: 'left' }}>
                    <h3 style={{ fontSize: '1.1rem', color: 'var(--navy)', margin: '0 0 16px 0' }}>Purchased Items</h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                        {order.items.map((item, idx) => (
                            <div key={idx} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: '#f8fafc', padding: '16px', borderRadius: '12px' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                                    <img src={item.image || "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=100"} alt={item.title} style={{ width: '60px', height: '60px', objectFit: 'cover', borderRadius: '8px' }} />
                                    <div>
                                        <div style={{ fontWeight: 700, color: 'var(--navy)', fontSize: '0.95rem' }}>{item.title}</div>
                                        <div style={{ color: 'var(--muted)', fontSize: '0.85rem' }}>Quantity: {item.qty}</div>
                                    </div>
                                </div>
                                <div style={{ fontWeight: 700, color: 'var(--navy)' }}>${(item.price * item.qty).toFixed(2)}</div>
                            </div>
                        ))}
                    </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '24px', fontWeight: 700, color: 'var(--navy)', fontSize: '1.1rem' }}>
                    <span>Total Items: {order.items.reduce((acc, item) => acc + item.qty, 0)}</span>
                    <span>Total Amount: ${Number(order.total).toFixed(2)}</span>
                </div>
            </div>

            <button onClick={downloadPDF} disabled={isDownloading} aria-label="Download Receipt PDF" style={{ background: 'var(--navy)', color: 'white', border: 'none', padding: '12px 24px', borderRadius: '8px', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '8px', cursor: isDownloading ? 'not-allowed' : 'pointer', opacity: isDownloading ? 0.7 : 1, marginBottom: '40px' }}>
                <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                {isDownloading ? 'Downloading...' : 'Download Receipt'}
            </button>

            <div style={{ width: '100%', maxWidth: '900px' }}>
                <h2 style={{ textAlign: 'center', color: 'var(--navy)', fontSize: '1.8rem', fontWeight: 800, marginBottom: '24px' }}>You might also like</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '24px' }}>
                    {suggestedProducts.map(p => (
                        <div key={p.id} style={{ background: 'white', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
                            <div style={{ height: '200px' }}>
                                <img src={p.image} alt={p.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                            <div style={{ padding: '20px', textAlign: 'center' }}>
                                <h4 style={{ margin: '0 0 12px 0', color: 'var(--navy)', fontSize: '1rem', fontWeight: 700 }}>{p.title}</h4>
                                <Link to={`/store/${p.id}`} style={{ color: '#f59e0b', textDecoration: 'none', fontWeight: 600, fontSize: '0.9rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px' }}>
                                    View Details <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default PaymentSuccessPage;
