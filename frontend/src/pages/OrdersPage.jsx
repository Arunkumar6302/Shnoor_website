import { useStore } from "../storeContext";

function OrdersPage() {
  const { orders } = useStore();

  return (
    <main style={{ background: '#f8fafc', paddingBottom: '80px', paddingTop: '40px', minHeight: '80vh' }}>
      <div className="container">
        <h1 style={{ fontSize: '2.5rem', color: 'var(--navy)', marginBottom: '40px', fontWeight: 800 }}>My Requests & Orders</h1>
        
        {orders.length === 0 ? (
          <p style={{ color: 'var(--muted)' }}>You have no requests or orders yet.</p>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {orders.map(order => (
              <div key={order.id} style={{ background: 'white', borderRadius: '16px', padding: '32px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #f0f0f0', paddingBottom: '16px', marginBottom: '24px' }}>
                  <div>
                    <h3 style={{ fontSize: '1.2rem', color: 'var(--navy)', margin: '0 0 8px 0', fontWeight: 700 }}>Order {order.order_number ? `#${order.order_number}` : `#${order.id}`}</h3>
                    <p style={{ fontSize: '0.85rem', color: 'var(--muted)', margin: 0 }}>
                      {order.created_at ? new Date(order.created_at).toLocaleString() : order.date}
                    </p>
                  </div>
                  <span style={{ 
                    background: order.status === 'Approved' ? '#d1fae5' : (order.status === 'Paid' ? '#dbeafe' : '#fef3c7'), 
                    color: order.status === 'Approved' ? '#059669' : (order.status === 'Paid' ? '#1d4ed8' : '#d97706'), 
                    padding: '6px 16px', borderRadius: '20px', fontSize: '0.9rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '6px' 
                  }}>
                    {order.status === 'Approved' && <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>}
                    {order.status === 'Paid' && <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>}
                    {(!order.status || order.status === 'Pending') && <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>}
                    {order.status === 'Approved' ? 'Approved - Ready to Pay' : (order.status || 'Pending')}
                  </span>
                </div>
                
                <div>
                  <h4 style={{ fontSize: '1rem', color: 'var(--navy)', marginBottom: '16px', fontWeight: 600 }}>Requested Items:</h4>
                  <ul style={{ listStyle: 'disc', paddingLeft: '20px', margin: 0, color: 'var(--text)', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {order.items.map(item => (
                      <li key={item.id} style={{ fontSize: '0.95rem' }}>
                        {item.title} <span style={{ color: 'var(--muted)' }}>x{item.qty}</span> - <strong style={{ color: 'var(--navy)' }}>${Number(item.price).toFixed(2)}</strong>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div style={{ marginTop: '24px', paddingTop: '24px', borderTop: '1px solid #f0f0f0', display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '16px' }}>
                  <h3 style={{ fontSize: '1.2rem', color: 'var(--navy)', margin: 0, fontWeight: 700 }}>Total: ${Number(order.total).toFixed(2)}</h3>
                  {order.status === 'Approved' && (
                    <button 
                      onClick={() => window.location.href = `/checkout/${order.id}`}
                      style={{ background: '#f59e0b', color: 'white', border: 'none', padding: '12px 24px', borderRadius: '8px', fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px' }}
                    >
                      <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path></svg>
                      Proceed to Checkout
                    </button>
                  )}
                  {order.status === 'Paid' && (
                    <button 
                      onClick={() => window.location.href = `/payment-success/${order.id}`}
                      style={{ background: '#10b981', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '8px', fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px' }}
                    >
                      View Receipt
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}

export default OrdersPage;
