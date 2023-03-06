const generateBtn = document.getElementById('generate');
const passwordEl = document.getElementById('password');

generateBtn.addEventListener('click', () => {
  const length = document.getElementById('length').value;
  const uppercase = document.getElementById('uppercase').checked;
  const lowercase = document.getElementById('lowercase').checked;
  const numbers = document.getElementById('numbers').checked;
  const symbols = document.getElementById('symbols').checked;

  const password = generatePassword(length, uppercase, lowercase, numbers, symbols);

  passwordEl.textContent = password;
});

function generatePassword(length, uppercase, lowercase, numbers, symbols) {
  let chars = '';

  if (uppercase) {
    chars += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }

  if (lowercase) {
    chars += 'abcdefghijklmnopqrstuvwxyz';
  }

  if (numbers) {
    chars += '0123456789';
  }

  if (symbols) {
    chars += '!@#$%^&*()_+';
  }

  let password = '';

  for (let i = 0; i < length; i++) {
    password += chars[Math.floor(Math.random() * chars.length)];
  }

  return password;
}
