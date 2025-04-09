export default function PasswordStrengthIndicator({ strength }) {
  const getColor = () => {
    if (strength === "Muy segura") return "green";
    if (strength === "Segura") return "orange";
    return "red";
  };

  return <p style={{ color: getColor() }}>Fortaleza: {strength}</p>;
}
