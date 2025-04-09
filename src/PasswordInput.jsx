import { useState } from 'react';

export default function PasswordInput({ password, setPassword, onCopy, onGenerate }) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div>
      <input
        type={showPassword ? "text" : "password"}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Ingrese su contraseña"
      />
      <div style={{ marginTop: "10px" }}>
        <button onClick={() => setShowPassword(!showPassword)}>
          {showPassword ? "Ocultar" : "Mostrar"}
        </button>
        <button onClick={onCopy}>Copiar</button>
        <button onClick={onGenerate}>Generar</button>
      </div>
    </div>
  );
}
