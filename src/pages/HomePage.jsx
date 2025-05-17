import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';

function HomePage() {
  const navigate = useNavigate();
  const [showPasswordForm, setShowPasswordForm] = useState(false);
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const correctPassword = "Nkada123"; // Mot de passe stocké en dur

  const handleAdminClick = () => {
    setShowPasswordForm(true);
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (password === correctPassword) {
      setShowPasswordForm(false);
      navigate('/admin');
    } else {
      const audio = new Audio('/public/buzzer-or-wrong-answer-20582.mp3'); // Assurez-vous d'avoir un fichier audio
      audio.play();
    }
    setPassword(''); // Réinitialise le champ de mot de passe
  };

  return (
    <div className="homepage-container">
      <div className="logo-container">
        <img src="/pwa-192x192.png" alt="Logo Trombinoscope" className="app-logo" />
      </div>
      <h1 className="animated-text">Bienvenue sur le Trombinoscope des Étudiants de ICT4D</h1>
      <p className="description-text">Explorez les fonctionnalités de l'application Trombi-ICT4D :</p>
      <div className="button-group">
        <button onClick={handleAdminClick} className="homepage-button">
          Admin
        </button>
        <button onClick={() => navigate('/students')} className="homepage-button">
          Étudiants
        </button>
        <button onClick={() => navigate('/mobile')} className="homepage-button">
          Version Mobile
        </button>
        <button onClick={() => navigate('/blagues')} className="homepage-button">
         🤣 Blagues de dev
        </button>


      </div>

      {showPasswordForm && (
        <div className="password-form-container">
          <form onSubmit={handlePasswordSubmit} className="password-form">
            <div className="password-input-wrapper">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Mot de passe"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="password-input"
                required
                autocomplete="off" 
              />
              <button
                type="button"
                className="toggle-password-button"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "👁️" : "🙈"}
              </button>
            </div>
            <button type="submit" className="submit-button">→</button>
            <p className="password-hint">Indication de mot de passe : Chef du Groupe</p>
          </form>
        </div>
      )}
    </div>
  );
}

export default HomePage;