const slides = document.querySelector('.slides');
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');

let index = 0;

function showSlide(direction) {
  const slideCount = slides.children.length;
  const slideWidth = slides.children[0].offsetWidth;

  if (direction === 'next') {
    index = (index + 1) % slideCount;
  } else if (direction === 'prev') {
    index = (index - 1 + slideCount) % slideCount;
  }

  slides.style.transform = `translateX(-${index * slideWidth}px)`;
}

next.addEventListener('click', () => showSlide('next'));
prev.addEventListener('click', () => showSlide('prev'));
