import React, { useState, useEffect } from 'react';
import { getUnresolvedQueries, teachBot } from '../services/chatApi';

const AdminLearningPage = () => {
    const [unresolved, setUnresolved] = useState([]);
    const [loading, setLoading] = useState(true);
    const [answers, setAnswers] = useState({});
    const [submitting, setSubmitting] = useState({});

    useEffect(() => {
        fetchQueries();
    }, []);

    const fetchQueries = async () => {
        setLoading(true);
        try {
            const data = await getUnresolvedQueries();
            setUnresolved(data || []);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    const handleAnswerChange = (query, value) => {
        setAnswers(prev => ({ ...prev, [query]: value }));
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

    return (
        <div className="section" style={{ minHeight: '80vh' }}>
            <div className="container content-card">
                <div className="section-heading text-left" style={{ marginBottom: '30px' }}>
                    <h2 style={{ fontSize: '2rem' }}>Chatbot Learning Dashboard</h2>
                    <p>Review questions the chatbot couldn't answer and teach it new responses. It will remember these forever!</p>
                </div>

                {loading ? (
                    <p style={{ fontSize: '1.1rem' }}>Loading unresolved queries...</p>
                ) : unresolved.length === 0 ? (
                    <div className="simple-card text-center" style={{ padding: '60px 20px', background: '#f8fafc' }}>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>All Caught Up! 🎉</h3>
                        <p style={{ color: '#64748b' }}>There are no unresolved queries for the chatbot at the moment. Ask the bot something it doesn't know to see it appear here!</p>
                    </div>
                ) : (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                        {unresolved.map((item, index) => (
                            <div key={index} className="simple-card" style={{ display: 'flex', flexDirection: 'column', gap: '15px', borderLeft: '4px solid var(--accent)' }}>
                                <div>
                                    <span className="eyebrow" style={{ marginBottom: '8px' }}>Website Knowledge Base: {item.website_id.toUpperCase()}</span>
                                    <h3 style={{ fontSize: '1.3rem', margin: 0, color: 'var(--navy)' }}>"{item.query}"</h3>
                                </div>
                                <textarea 
                                    style={{ 
                                        width: '100%', padding: '16px', borderRadius: '8px', 
                                        border: '1px solid #cbd5e1', minHeight: '120px', resize: 'vertical',
                                        fontSize: '1rem', fontFamily: 'inherit', background: '#fff'
                                    }}
                                    placeholder="Type the exact answer you want the bot to learn for this question..."
                                    value={answers[item.query] || ""}
                                    onChange={(e) => handleAnswerChange(item.query, e.target.value)}
                                ></textarea>
                                <div style={{ alignSelf: 'flex-end' }}>
                                    <button 
                                        className="primary-button" 
                                        onClick={() => handleTeach(item)}
                                        disabled={submitting[item.query] || !answers[item.query]?.trim()}
                                        style={{ 
                                            opacity: (submitting[item.query] || !answers[item.query]?.trim()) ? 0.5 : 1,
                                            cursor: (submitting[item.query] || !answers[item.query]?.trim()) ? 'not-allowed' : 'pointer'
                                        }}
                                    >
                                        {submitting[item.query] ? "Teaching..." : "Teach Bot"}
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default AdminLearningPage;
