export default function AdvancedOptionsPanel({ config, setConfig }) {
    return (
      <div className="panel-avanzado">
        <label>
          Largo:
          <input
            type="number"
            min="8"
            value={config.length}
            onChange={(e) => setConfig({ ...config, length: Number(e.target.value) })}
          />
        </label>
        <label>
          <input
            type="checkbox"
            checked={config.lowercase}
            onChange={(e) => setConfig({ ...config, lowercase: e.target.checked })}
          />
          Incluir minúsculas
        </label>
        <label>
          <input
            type="checkbox"
            checked={config.uppercase}
            onChange={(e) => setConfig({ ...config, uppercase: e.target.checked })}
          />
          Incluir mayúsculas
        </label>
        <label>
          <input
            type="checkbox"
            checked={config.numbers}
            onChange={(e) => setConfig({ ...config, numbers: e.target.checked })}
          />
          Incluir números
        </label>
        <label>
          <input
            type="checkbox"
            checked={config.symbols}
            onChange={(e) => setConfig({ ...config, symbols: e.target.checked })}
          />
          Incluir símbolos
        </label>
      </div>
    );
  }
  