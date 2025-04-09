import React, { useState } from 'react';
import PasswordInput from './PasswordInput';
import PasswordStrengthIndicator from './PasswordStrengthIndicator';
import CopyMessage from './CopyMessage';
import AdvancedOptionsPanel from './AdvancedOptionsPanel';
import evaluatePasswordStrength from './evaluatePasswordStrength';
import generatePassword from './generatePassword';
import './App.css';

function App() {
  const [password, setPassword] = useState("");
  const [showCopied, setShowCopied] = useState(false);
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [config, setConfig] = useState({
    length: 12,
    lowercase: true,
    uppercase: true,
    numbers: true,
    symbols: false,
  });

  const strength = evaluatePasswordStrength(password);

  const handleCopy = () => {
    navigator.clipboard.writeText(password);
    setShowCopied(true);
    setTimeout(() => setShowCopied(false), 3000);
  };

  const handleGenerate = () => {
    const newPassword = generatePassword(config);
    setPassword(newPassword);
  };

  return (
    <div className="container">
      <div className="card">
        <h2>Verificador de Contraseñas</h2>

        <PasswordInput
          password={password}
          setPassword={setPassword}
          onCopy={handleCopy}
          onGenerate={handleGenerate}
        />

        <PasswordStrengthIndicator strength={strength} />
        <CopyMessage visible={showCopied} />

        <button onClick={() => setShowAdvanced(!showAdvanced)}>
          {showAdvanced ? "Ocultar opciones avanzadas" : "Mostrar opciones avanzadas"}
        </button>

        {showAdvanced && (
          <AdvancedOptionsPanel config={config} setConfig={setConfig} />
        )}
      </div>
    </div>
  );
}

export default App;