const bg = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f', 'g'];

function newColor() {
  let color = '#';

  for (let i = 0; i < 6; i++) {
    const index = Math.floor(Math.random() * 16);
    color += bg[index];
  }

  document.body.style.backgroundColor = color;
}

document.querySelector('#start').addEventListener('click', function () {
  let setTime = setInterval(newColor, 100);
  document.querySelector('#stop').addEventListener('click', function () {
    clearInterval(setTime);
    setTime = null;
  });
});
