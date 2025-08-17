const characters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '~',
  '`',
  '!',
  '@',
  '#',
  '$',
  '%',
  '^',
  '&',
  '*',
  '(',
  ')',
  '_',
  '-',
  '+',
  '=',
  '{',
  '[',
  '}',
  ']',
  ',',
  '|',
  ':',
  ';',
  '<',
  '>',
  '.',
  '?',
  '/',
];

const generatePassword = (length = 12) => {
  let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }
  return password;
};

const passwordBtn = document.querySelector('.btn-password');
const passwordField1 = document.querySelector('#copy-btn1');
const passwordField2 = document.querySelector('#copy-btn2');

passwordBtn.addEventListener('click', () => {
  const password1 = generatePassword(12);
  const password2 = generatePassword(12);
  passwordField1.textContent = password1;
  passwordField2.textContent = password2;
});

function toggleMode() {
  const btn = document.querySelector('.btn');
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    const section = document.querySelector('section');
    const content = document.querySelector('.content');
    const softLine = document.querySelector('.soft-line');
    section.classList.toggle('dark');
    section.classList.toggle('light');
    btn.classList.toggle('dark');
    btn.classList.toggle('light');
    btn.textContent = section.classList.contains('dark')
      ? 'Light mode'
      : 'Dark mode';

    content.classList.toggle('dark');
    content.classList.toggle('light');

    softLine.classList.toggle('dark');
    softLine.classList.toggle('light');
  });
}

function init() {
  toggleMode();
}

init();
