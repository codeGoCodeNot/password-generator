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
