
export default function CopyMessage({ visible }) {
    if (!visible) return null;
    return <p style={{ color: "green" }}>¡Contraseña copiada!</p>;
}
  