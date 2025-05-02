const PopBtn = document.querySelector('#show-size');
const PopCloseBtn = document.querySelector('#PopBtn');
const PopBox = document.querySelector('.popup');

PopBtn.addEventListener('click', () => PopBox.classList.add('show'));
PopCloseBtn.addEventListener('click', () => PopBox.classList.remove('show'));

const track = document.querySelector('.carousel-track');
let isDragging = false;
let startX;
let scrollLeft;

track.addEventListener('mousedown', (e) => {
  isDragging = true;
  track.classList.add('dragging');
  startX = e.pageX - track.offsetLeft;
  scrollLeft = track.scrollLeft;
});

track.addEventListener('mouseleave', () => {
  isDragging = false;
  track.classList.remove('dragging');
});

track.addEventListener('mouseup', () => {
  isDragging = false;
  track.classList.remove('dragging');
});

track.addEventListener('mousemove', (e) => {
  if (!isDragging) return;
  e.preventDefault();
  const x = e.pageX - track.offsetLeft;
  const walk = (x - startX) * 1.5;
  track.scrollLeft = scrollLeft - walk;
});
