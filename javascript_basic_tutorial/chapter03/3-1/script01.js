window.onload = initAll;

function initAll() {
  for (let i = 0; i < 24; i++) {
    document.getElementById("square" + i).innerHTML = Math.floor(Math.random() * 75) + 1;
  }
}