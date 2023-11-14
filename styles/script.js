const sections = document.querySelectorAll('.section');
const secButtons = document.querySelector('.controlls');
const controls = document.querySelectorAll('.control');
const body = document.querySelector('.main-content');


const pageTransition = () => {
    for (let i in controls) {
        controls[i].addEventListener('click', function() {
            let currentBtn = document.querySelector('.active-btn');
            currentBtn.className = currentBtn.className.replace('active-btn', '');
            controls[i].className += ' active-btn';
            console.log(controls[i]);
        });
    }
};

pageTransition();