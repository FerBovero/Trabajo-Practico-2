export default function evaluatePasswordStrength(password) {
  const hasMinLength = password.length >= 8;
  const hasLowercase = /[a-z]/.test(password);
  const hasUppercase = /[A-Z]/.test(password);
  const hasNumber = /\d/.test(password);
  const hasSpecialChar = /[^A-Za-z0-9]/.test(password);

  if (!hasMinLength) return "Poco segura";

  let score = 0;
  if (hasLowercase) score++;
  if (hasUppercase) score++;
  if (hasNumber) score++;
  if (hasSpecialChar) score++;

  if (score >= 3) return "Muy segura";
  if (score >= 2) return "Segura";
  return "Poco segura";
}

