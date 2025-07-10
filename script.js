const toggle = document.querySelector('.toggle-menu')
const menu = document.querySelector('nav>ul')
const icon =document.querySelectorAll('.toggle-menu>i')

let flag = 1

function resMenu() {
    if (flag % 2) {
        menu.style.left = '0'
        icon[1].style.display='block'
        icon[0].style.display='none'
    } else {
        menu.style.left = '-300px'
        icon[1].style.display='none'
        icon[0].style.display='block'
    }
    flag++
}