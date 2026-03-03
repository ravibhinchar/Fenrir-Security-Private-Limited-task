import { Check, Loader2, Square, AlertTriangle, ShieldAlert } from 'lucide-react';
import './ActiveScan.css';

export function ActiveScan({ onBack }: { onBack: () => void }) {
    const steps = [
        { id: 1, label: 'Initialization', status: 'completed' },
        { id: 2, label: 'Discovery', status: 'completed' },
        { id: 3, label: 'Vulnerability Analysis', status: 'active' },
        { id: 4, label: 'Exploitation', status: 'pending' },
        { id: 5, label: 'Reporting', status: 'pending' },
    ];

    return (
        <div className="scan-container">
            <div className="scan-header">
                <div className="scan-title-area">
                    <button
                        onClick={onBack}
                        style={{
                            background: 'transparent',
                            border: 'none',
                            color: 'var(--text-secondary)',
                            cursor: 'pointer',
                            fontSize: '1.5rem'
                        }}
                    >
                        ←
                    </button>
                    <h1>Scan SCN-002</h1>
                    <span className="scan-badge">Running</span>
                </div>
                <button className="btn-stop">
                    <Square size={16} fill="currentColor" />
                    Stop Scan
                </button>
            </div>

            <div className="progress-section">
                <div className="circular-progress">
                    <svg viewBox="0 0 100 100">
                        <circle className="circular-bg" cx="50" cy="50" r="45" />
                        <circle className="circular-bar" cx="50" cy="50" r="45" />
                    </svg>
                    <div className="progress-text">
                        <div className="progress-percent">75%</div>
                        <div className="progress-label">Complete</div>
                    </div>
                </div>

                <div className="steps-container">
                    <div className="steps-line"></div>
                    <div className="steps-line-active"></div>

                    {steps.map((step) => (
                        <div key={step.id} className={`step-item step-${step.status}`}>
                            <div className="step-icon">
                                {step.status === 'completed' && <Check size={24} />}
                                {step.status === 'active' && <Loader2 size={24} className="animate-spin" style={{ animation: 'spin 2s linear infinite' }} />}
                                {step.status === 'pending' && <span>{step.id}</span>}
                            </div>
                            <span className="step-label">{step.label}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="console-section">
                <div className="console-panel">
                    <div className="console-tabs">
                        <div className="console-tab active">Live Log</div>
                        <div className="console-tab">Network</div>
                        <div className="console-tab">Payloads</div>
                    </div>
                    <div className="console-output">
                        <div className="log-line"><span className="log-time">[10:42:01]</span> <span className="log-info">[INFO]</span> Starting vulnerability analysis phase...</div>
                        <div className="log-line"><span className="log-time">[10:42:05]</span> <span className="log-info">[INFO]</span> Scanning frontend-web-app endpoints...</div>
                        <div className="log-line"><span className="log-time">[10:42:12]</span> <span className="log-warn">[WARN]</span> Detected outdated TLS version on port 8443</div>
                        <div className="log-line"><span className="log-time">[10:42:15]</span> <span className="log-info">[INFO]</span> Injecting SQL map payloads into /api/users/search</div>
                        <div className="log-line"><span className="log-time">[10:42:28]</span> <span className="log-error">[CRIT]</span> SQL Injection vulnerability confirmed at parameter 'query'</div>
                        <div className="log-line"><span className="log-time">[10:42:30]</span> <span className="log-info">[INFO]</span> Documenting payload execution results...</div>
                        <div className="log-line"><span className="log-time">[10:42:35]</span> <span className="log-info">[INFO]</span> Proceeding to Next Gen WAF bypass checks...</div>
                    </div>
                </div>

                <div className="findings-panel">
                    <div className="findings-header">
                        Recent Findings
                        <span style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>2 New</span>
                    </div>
                    <div className="findings-list">
                        <div className="finding-item" style={{ borderLeft: '4px solid var(--danger)' }}>
                            <div className="finding-title">
                                SQL Injection (Time-Based)
                                <ShieldAlert size={16} color="var(--danger)" />
                            </div>
                            <div className="finding-desc">Endpoint /api/users/search is vulnerable to time-based blind SQLi via 'query' parameter.</div>
                        </div>

                        <div className="finding-item" style={{ borderLeft: '4px solid var(--warning)' }}>
                            <div className="finding-title">
                                Outdated TLS Version
                                <AlertTriangle size={16} color="var(--warning)" />
                            </div>
                            <div className="finding-desc">Port 8443 is accepting TLS v1.1 connections.</div>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
        </div>
    );
}
