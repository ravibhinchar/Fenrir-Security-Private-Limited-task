import { useState, useEffect } from 'react';
import { Login } from './components/Login/Login';
import { Sidebar } from './components/Sidebar/Sidebar';
import { Dashboard } from './components/Dashboard/Dashboard';
import { ActiveScan } from './components/ActiveScan/ActiveScan';
import './App.css';

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const [currentScreen, setCurrentScreen] = useState<'login' | 'dashboard' | 'scan'>('login');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  if (currentScreen === 'login') {
    return (
      <div className="app-container">
        <button className="theme-toggle-btn" onClick={toggleTheme}>
          {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
        </button>
        <Login onLogin={() => setCurrentScreen('dashboard')} />
      </div>
    );
  }

  return (
    <div className="app-layout">
      <Sidebar currentScreen={currentScreen} onNavigate={(screen) => setCurrentScreen(screen as any)} />
      <main className="main-content">
        <button className="theme-toggle-btn" onClick={toggleTheme}>
          {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
        </button>
        {currentScreen === 'dashboard' && <Dashboard onNewScan={() => setCurrentScreen('scan')} />}
        {currentScreen === 'scan' && <ActiveScan onBack={() => setCurrentScreen('dashboard')} />}
      </main>
    </div>
  );
}

export default App;
