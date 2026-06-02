import React, { useState, useEffect } from 'react';
import { UploadCloud, Database, CheckCircle, AlertCircle } from 'lucide-react';
import { uploadKB, checkKBStatus } from '../services/api';

const KBUploader = () => {
    const [status, setStatus] = useState(null);
    const [message, setMessage] = useState('');
    const [isUploading, setIsUploading] = useState(false);
    const [kbStats, setKbStats] = useState({ active: false, count: 0 });

    const fetchStatus = async () => {
        try {
            const data = await checkKBStatus();
            setKbStats({ active: true, count: data.total_questions });
        } catch (error) {
            setKbStats({ active: false, count: 0 });
        }
    };

    useEffect(() => {
        fetchStatus();
    }, []);

    const handleFileUpload = async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        if (!file.name.endsWith('.csv')) {
            setStatus('error');
            setMessage('Please upload a valid CSV file.');
            return;
        }

        setIsUploading(true);
        setStatus(null);
        
        try {
            const res = await uploadKB(file);
            setStatus('success');
            setMessage(res.message || 'Knowledge base updated successfully!');
            fetchStatus();
        } catch (error) {
            setStatus('error');
            setMessage(error.response?.data?.detail || 'Failed to upload knowledge base.');
        } finally {
            setIsUploading(false);
            e.target.value = null; // Reset input
        }
    };

    return (
        <div className="kb-manager">
            <div className="kb-header">
                <Database className="kb-icon" />
                <h2>Knowledge Base Management</h2>
            </div>
            
            <div className="kb-stats">
                <div className="stat-item">
                    <span className="stat-label">Status</span>
                    <span className={`stat-value ${kbStats.active ? 'active' : 'inactive'}`}>
                        {kbStats.active ? 'Active' : 'Offline'}
                    </span>
                </div>
                <div className="stat-item">
                    <span className="stat-label">Total Q&A Pairs</span>
                    <span className="stat-value">{kbStats.count}</span>
                </div>
            </div>

            <div className="upload-section">
                <label className="upload-area">
                    <input 
                        type="file" 
                        accept=".csv" 
                        onChange={handleFileUpload} 
                        disabled={isUploading}
                        hidden 
                    />
                    <div className="upload-content">
                        <UploadCloud size={48} className={isUploading ? 'pulsing' : ''} />
                        <h3>{isUploading ? 'Uploading...' : 'Upload CSV File'}</h3>
                        <p>Drag and drop or click to browse</p>
                        <p className="hint">File must contain 'Question' and 'Answer' columns</p>
                    </div>
                </label>
            </div>

            {status && (
                <div className={`status-message ${status}`}>
                    {status === 'success' ? <CheckCircle size={20} /> : <AlertCircle size={20} />}
                    <span>{message}</span>
                </div>
            )}
        </div>
    );
};

export default KBUploader;
