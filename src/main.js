'use strict';

function counter() {
  let seconds = 0;
  setInterval(() => {
    seconds += 1;
    document.getElementById('app').innerHTML = `<p>Neeru You have been here for ${seconds} seconds.</p>`;
  }, 1000);
}

counter();
