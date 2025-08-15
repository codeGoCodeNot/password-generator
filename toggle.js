document.addEventListener('DOMContentLoaded', () => {
  const toggle = () => {
    const body = document.body;
    const btn = document.querySelector('.toggle-btn');
    btn.addEventListener('click', () => {
      body.classList.toggle('dark');
      body.classList.toggle('light');

      body.classList.contains('light')
        ? (btn.textContent = 'Dark mode')
        : (btn.textContent = 'Light mode');
    });
  };
  toggle();
});
