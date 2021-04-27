const boxes = document.querySelectorAll('.box')

window.addEventListener('Scroll', checkBoxes)

function checkBoxes() {
    console.log(window.innerHeight)
}