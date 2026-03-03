import { LayoutDashboard, Folder, Shield, Calendar, Bell, Settings, HelpCircle, ChevronRight, Activity, Moon, Sun } from 'lucide-react';
import './Sidebar.css';

export function Sidebar({ currentScreen, onNavigate, theme, toggleTheme }: { currentScreen: string, onNavigate: (screen: string) => void, theme: 'light' | 'dark', toggleTheme: () => void }) {
    return (
        <aside className="sidebar">
            <div className="sidebar-header">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Activity size={28} style={{ color: 'var(--success)' }} />
                    <span style={{ color: 'var(--success)' }}>aps</span>
                </div>
                <button
                    onClick={toggleTheme}
                    className="theme-btn-sidebar"
                    title="Toggle Theme"
                >
                    {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                </button>
            </div>

            <ul className="nav-list">
                <li className={`nav-item ${currentScreen === 'dashboard' ? 'active' : ''}`} onClick={() => onNavigate('dashboard')}>
                    <LayoutDashboard size={20} />
                    <span>Dashboard</span>
                </li>
                <li className={`nav-item ${currentScreen === 'projects' ? 'active' : ''}`}>
                    <Folder size={20} />
                    <span>Projects</span>
                </li>
                <li className={`nav-item ${currentScreen === 'scan' ? 'active' : ''}`} onClick={() => onNavigate('scan')}>
                    <Shield size={20} />
                    <span>Scans</span>
                </li>
                <li className={`nav-item ${currentScreen === 'schedule' ? 'active' : ''}`}>
                    <Calendar size={20} />
                    <span>Schedule</span>
                </li>

                <div className="sidebar-divider"></div>

                <li className={`nav-item ${currentScreen === 'notifications' ? 'active' : ''}`}>
                    <Bell size={20} />
                    <span>Notifications</span>
                </li>
                <li className={`nav-item ${currentScreen === 'settings' ? 'active' : ''}`}>
                    <Settings size={20} />
                    <span>Settings</span>
                </li>
                <li className={`nav-item ${currentScreen === 'support' ? 'active' : ''}`}>
                    <HelpCircle size={20} />
                    <span>Support</span>
                </li>
            </ul>

            <div className="sidebar-footer" onClick={() => onNavigate('login')}>
                <div className="profile-info">
                    <div className="profile-avatar">👨</div>
                    <div className="profile-details">
                        <span className="profile-email">admin@edu.com</span>
                        <span className="profile-role">Security Lead</span>
                    </div>
                </div>
                <ChevronRight size={16} color="var(--text-secondary)" />
            </div>
        </aside>
    );
}
