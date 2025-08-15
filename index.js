const scoreHome = document.querySelector('.score-home');
const scoreGuest = document.querySelector('.score-guest');

let homeCount = 0;
let guestCount = 0;

const increment = () => {
  const btnHome1 = document.querySelector('#btn-home');
  const btnGuest1 = document.querySelector('#btn-guest');
  const btnHome2 = document.querySelector('#btn-home2');
  const btnGuest2 = document.querySelector('#btn-guest2');
  const btnHome3 = document.querySelector('#btn-home3');
  const btnGuest3 = document.querySelector('#btn-guest3');

  btnHome1.addEventListener('click', () => {
    homeCount++;
    scoreHome.textContent = String(homeCount).padStart(2, '0');
  });

  btnGuest1.addEventListener('click', () => {
    guestCount++;
    scoreGuest.textContent = String(guestCount).padStart(2, '0');
  });

  btnHome2.addEventListener('click', () => {
    homeCount += 2;
    scoreHome.textContent = String(homeCount).padStart(2, '0');
  });

  btnGuest2.addEventListener('click', () => {
    guestCount += 2;
    scoreGuest.textContent = String(guestCount).padStart(2, '0');
  });

  btnHome3.addEventListener('click', () => {
    homeCount += 3;
    scoreHome.textContent = String(homeCount).padStart(2, '0');
  });

  btnGuest3.addEventListener('click', () => {
    guestCount += 3;
    scoreGuest.textContent = String(guestCount).padStart(2, '0');
  });

  reset();
};

const reset = () => {
  const resetBtn = document.querySelector('#reset-btn');
  resetBtn.addEventListener('click', () => {
    homeCount = 0;
    guestCount = 0;

    scoreHome.textContent = '00';
    scoreGuest.textContent = '00';
  });
};

increment();
