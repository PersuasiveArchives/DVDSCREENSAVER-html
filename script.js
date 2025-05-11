const dvd = document.getElementById('dvd');
const speed = 3;

let x = 100;
let y = 100;
let dx = speed;
let dy = speed;

function updatePosition() {
  const dvdRect = dvd.getBoundingClientRect();
  const winWidth = window.innerWidth;
  const winHeight = window.innerHeight;

  if (x + dvdRect.width >= winWidth || x <= 0) {
    dx = -dx;
    changeColor();
  }

  if (y + dvdRect.height >= winHeight || y <= 0) {
    dy = -dy;
    changeColor();
  }

  x += dx;
  y += dy;

  dvd.style.left = x + 'px';
  dvd.style.top = y + 'px';

  requestAnimationFrame(updatePosition);
}

function changeColor() {
 
 
  const r = Math.floor(100 + Math.random() * 155);
  const g = Math.floor(100 + Math.random() * 155);
  const b = Math.floor(100 + Math.random() * 155);
  dvd.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}

updatePosition();
