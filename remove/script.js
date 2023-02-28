// Constantes
const body = document.querySelector('body')
const list = document.querySelectorAll(".nav");
const navigations = document.querySelectorAll('.navigation')
const dropzones = document.querySelectorAll('.dropzone')
const indicator = document.querySelector('.indicator')
const menuItems = document.querySelectorAll('.nav a[href^="#"]');
const mainTitle = document.querySelector('.main-title .title')
const mainSubTitle = document.querySelector('.main-title .subtitle')

// Variaveis
let menuToggle = document.querySelector(".menuToggle")
let navigation = document.querySelector(".navigation")

// Home




// Menu Indicator
    function activeLink(){
        list.forEach((item) => item.classList.remove("active"));
        this.classList.add("active");
   }
list.forEach((item) => item.addEventListener("click", activeLink));

// Menu Position

navigations.forEach(card => {
    card.addEventListener('dragstart', dragstart)
    card.addEventListener('drag', () => {})
    card.addEventListener('dragend', dragend)
})

function dragstart() {
    dropzones.forEach( dropzone => dropzone.classList.add('highlight'))
    this.classList.add('is-dragging')
}

function dragend() {
    dropzones.forEach( dropzone => dropzone.classList.remove('highlight'))
    this.classList.remove('is-dragging')
}
dropzones.forEach( dropzone => {
    dropzone.addEventListener('dragenter', () => {})
    dropzone.addEventListener('dragover', dragover)
    dropzone.addEventListener('dragleave', () => dropzone.classList.remove('over'))
    dropzone.addEventListener('drop', () => dropzone.classList.remove('over'))
})

function dragover() {
    this.classList.add('over')

    const cardBeingDragged = document.querySelector('.is-dragging')

    this.appendChild(cardBeingDragged)
}


menuItems.forEach(item => item.addEventListener('click', scrollToIdOnClick))

function scrollToIdOnClick(event) {
    event.preventDefault();
    const to = getScrollTopByHref(event.target);
    scrollToPosition(to);
  }

function getScrollTopByHref(element) {
  const id = element.getAttribute('href');
  return document.querySelector(id).offsetTop;
}

function scrollToPosition(to) {
  smoothScrollTo(0, to);
}

function smoothScrollTo(endX, endY, duration) {
  const startX = window.scrollX || window.pageXOffset;
  const startY = window.scrollY || window.pageYOffset;
  const distanceX = endX - startX;
  const distanceY = endY - startY;
  const startTime = new Date().getTime();

  duration = typeof duration !== 'undefined' ? duration : 400;

  // Easing function
  const easeInOutQuart = (time, from, distance, duration) => {
    if ((time /= duration / 2) < 1) return distance / 2 * time * time * time * time + from;
    return -distance / 2 * ((time -= 2) * time * time * time - 2) + from;
  };

  const timer = setInterval(() => {
    const time = new Date().getTime() - startTime;
    const newX = easeInOutQuart(time, startX, distanceX, duration);
    const newY = easeInOutQuart(time, startY, distanceY, duration);
    if (time >= duration) {
      clearInterval(timer);
    }
    window.scroll(newX, newY);
  }, 1000 / 60);
};


menuToggle.onclick = () => navigation.classList.toggle("active")

document.querySelector('.toggle').onclick = () => body.classList.toggle('dark')




    

  

