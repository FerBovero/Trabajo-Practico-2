export default function generatePassword(config) {
    const { length, lowercase, uppercase, numbers, symbols } = config;
  
    let chars = "";
    if (lowercase) chars += "abcdefghijklmnopqrstuvwxyz";
    if (uppercase) chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (numbers) chars += "0123456789";
    if (symbols) chars += "!@#$%^&*()_+-=[]{}|;:,.<>?";
  
    if (chars.length === 0) return "";
  
    let password = "";
    for (let i = 0; i < length; i++) {
      password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
  
    return password;
  }
  