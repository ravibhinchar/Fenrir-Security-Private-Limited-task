import { Search, Filter, Columns, Plus, Home, Ban, AlertTriangle, ArrowUp, ArrowDown, Activity } from 'lucide-react';
import './Dashboard.css';

export function Dashboard({ onNewScan }: { onNewScan: () => void }) {
    const scans = [
        { id: 1, name: 'Web App Servers', type: 'Greybox', status: 'Completed', progress: 100, vulns: [5, 12, 23, 18], lastScan: '4d ago' },
        { id: 2, name: 'Web App Servers', type: 'Greybox', status: 'Completed', progress: 100, vulns: [5, 12, 23, 18], lastScan: '4d ago' },
        { id: 3, name: 'Web App Servers', type: 'Greybox', status: 'Completed', progress: 100, vulns: [5, 12, 23, 18], lastScan: '4d ago' },
        { id: 4, name: 'Web App Servers', type: 'Greybox', status: 'Completed', progress: 100, vulns: [5, 12, 23, 18], lastScan: '4d ago' },
        { id: 5, name: 'Web App Servers', type: 'Greybox', status: 'Completed', progress: 100, vulns: [5, 12, 23, 18], lastScan: '4d ago' },
        { id: 6, name: 'Web App Servers', type: 'Greybox', status: 'Completed', progress: 100, vulns: [5, 12, 23, 18], lastScan: '4d ago' },
        { id: 7, name: 'Web App Servers', type: 'Greybox', status: 'Scheduled', progress: 100, vulns: [5, 12, 0, 0], lastScan: '4d ago' },
        { id: 8, name: 'Web App Servers', type: 'Greybox', status: 'Scheduled', progress: 100, vulns: [5, 12, 0, 0], lastScan: '4d ago' },
        { id: 9, name: 'IoT Devices', type: 'Blackbox', status: 'Failed', progress: 10, vulns: [2, 4, 8, 1], lastScan: '3d ago' },
        { id: 10, name: 'Temp Data', type: 'Blackbox', status: 'Failed', progress: 10, vulns: [2, 4, 8, 1], lastScan: '3d ago' },
    ];

    return (
        <div className="dashboard-container">
            <div className="dashboard-top-bar">
                <div className="breadcrumbs">
                    <span className="breadcrumb-item">Scan</span>
                    <span className="breadcrumb-separator"><Home size={14} /></span>
                    <span className="breadcrumb-separator">/</span>
                    <span className="breadcrumb-separator">Private Assets</span>
                    <span className="breadcrumb-separator">/</span>
                    <span className="breadcrumb-active">New Scan</span>
                </div>
                <div className="top-actions">
                    <button className="btn-secondary">Export Report</button>
                    <button className="btn-danger">Stop Scan</button>
                </div>
            </div>

            <div className="stats-section">
                <div className="scan-meta">
                    <span className="meta-item">Org: <span className="meta-value">Project X</span></span>
                    <div className="meta-divider"></div>
                    <span className="meta-item">Owner: <span className="meta-value">Nammagiri</span></span>
                    <div className="meta-divider"></div>
                    <span className="meta-item">Total Scans: <span className="meta-value">100</span></span>
                    <div className="meta-divider"></div>
                    <span className="meta-item">Scheduled: <span className="meta-value">1000</span></span>
                    <div className="meta-divider"></div>
                    <span className="meta-item">Rescans: <span className="meta-value">100</span></span>
                    <div className="meta-divider"></div>
                    <span className="meta-item">Failed Scans: <span className="meta-value">100</span></span>
                    <div className="meta-divider"></div>
                    <span className="meta-item"><Activity size={16} color="var(--success)" /> 10 mins ago</span>
                </div>

                <div className="stats-grid">
                    <div className="stat-card">
                        <div className="stat-header">
                            <span className="stat-title">Critical Severity</span>
                            <div className="stat-icon stat-icon-critical"><Ban size={14} /></div>
                        </div>
                        <div className="stat-value-group">
                            <span className="stat-value">86</span>
                            <span className="stat-trend trend-up"><ArrowUp size={12} /> 2% increase than yesterday</span>
                        </div>
                    </div>

                    <div className="stat-card">
                        <div className="stat-header">
                            <span className="stat-title">High Severity</span>
                            <div className="stat-icon stat-icon-high"><AlertTriangle size={14} /></div>
                        </div>
                        <div className="stat-value-group">
                            <span className="stat-value">16</span>
                            <span className="stat-trend trend-up"><ArrowUp size={12} /> 0.9% increase than yesterday</span>
                        </div>
                    </div>

                    <div className="stat-card">
                        <div className="stat-header">
                            <span className="stat-title">Medium Severity</span>
                            <div className="stat-icon stat-icon-medium"><AlertTriangle size={14} /></div>
                        </div>
                        <div className="stat-value-group">
                            <span className="stat-value">26</span>
                            <span className="stat-trend trend-down"><ArrowDown size={12} /> 0.9% decrease than yesterday</span>
                        </div>
                    </div>

                    <div className="stat-card">
                        <div className="stat-header">
                            <span className="stat-title">Low Severity</span>
                            <div className="stat-icon stat-icon-low"><Search size={14} /></div>
                        </div>
                        <div className="stat-value-group">
                            <span className="stat-value">16</span>
                            <span className="stat-trend trend-up"><ArrowUp size={12} /> 0.9% increase than yesterday</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="dashboard-content">
                <div className="table-controls">
                    <div className="search-bar">
                        <Search size={18} color="var(--text-secondary)" />
                        <input type="text" placeholder="Search scans by name or type..." />
                    </div>
                    <div className="table-actions">
                        <button className="btn-icon">
                            <Filter size={16} />
                            Filter
                        </button>
                        <button className="btn-icon">
                            <Columns size={16} />
                            Column
                        </button>
                        <button className="btn-primary" onClick={onNewScan}>
                            <Plus size={16} />
                            New scan
                        </button>
                    </div>
                </div>

                <table>
                    <thead>
                        <tr>
                            <th>Scan Name</th>
                            <th>Type</th>
                            <th>Status</th>
                            <th>Progress</th>
                            <th>Vulnerability</th>
                            <th style={{ textAlign: 'right' }}>Last Scan</th>
                        </tr>
                    </thead>
                    <tbody>
                        {scans.map((scan) => (
                            <tr key={scan.id}>
                                <td>{scan.name}</td>
                                <td style={{ color: 'var(--text-secondary)' }}>{scan.type}</td>
                                <td><span className={`badge badge-${scan.status.toLowerCase()}`}>{scan.status}</span></td>
                                <td>
                                    <div className="progress-cell">
                                        <div className="progress-bar">
                                            <div className={`progress-fill ${scan.status === 'Completed' || scan.status === 'Scheduled' ? 'completed' : 'failed'}`} style={{ width: `${scan.progress}%` }}></div>
                                        </div>
                                        <span style={{ fontSize: '0.875rem' }}>{scan.progress}%</span>
                                    </div>
                                </td>
                                <td>
                                    <div className="vuln-blocks">
                                        {scan.vulns[0] > 0 && <div className="vuln-block vuln-crit">{scan.vulns[0]}</div>}
                                        {scan.vulns[1] > 0 && <div className="vuln-block vuln-high">{scan.vulns[1]}</div>}
                                        {scan.vulns[2] > 0 && <div className="vuln-block vuln-med">{scan.vulns[2]}</div>}
                                        {scan.vulns[3] > 0 && <div className="vuln-block vuln-low">{scan.vulns[3]}</div>}
                                    </div>
                                </td>
                                <td style={{ textAlign: 'right', color: 'var(--text-secondary)' }}>{scan.lastScan}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
