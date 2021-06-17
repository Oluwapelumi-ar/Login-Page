const menu = document.querySelector('.icon')
const nav =  document.querySelector('nav')

menu.addEventListener('click', function() {

    this.classList.toggle("active");

    if (nav.style.maxHeight) {
        nav.style.maxHeight = null
    } else {
        nav.style.maxHeight = nav.scrollHeight + 'vh'
    }

    console.log('hi')
    })
