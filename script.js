const navigations = document.querySelectorAll('.navigation')
const dropzones = document.querySelectorAll('.dropzone')
const indicator = document.querySelector('.indicator')

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


