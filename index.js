const menuToggle = document.querySelector('.toggle');
const showcase = document.querySelector('.showcase');
const vid = document.querySelector('.video');

vid.playbackRate = 0.7;

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active');
  showcase.classList.toggle('active');
})