'use strict';

document.querySelector('.wall').addEventListener('click', (e) => {
  const positionX = e.offsetX;
  const positionY = e.offsetY;
  const spider = document.querySelector('.spider');

  spider.style.top = `${positionY}px`;
  spider.style.left = `${positionX}px`;
});
