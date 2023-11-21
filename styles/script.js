const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controlls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelectorAll('.main-content');


const pageTransition = () => {

    // buton click active-btn class

    for (let i of sectBtn) {
        i.addEventListener('click', function () {
            let currentBtn = document.querySelector('.active-btn');
            currentBtn.className = currentBtn.className.replace('active-btn', ' ');
            i.className += ' active-btn';
            // console.log("current : ", currentBtn);
            //console.log(i.className);
        });

    }

    //section active class
    for (let i of allSections) {
        i.addEventListener('click', (event) => {
            // console.log(event.target.dataset.id);
            const id = event.target.dataset.id;
            if (id) {
                //remove active from the other element
                sectBtn.forEach((s) => {
                    s.classList.remove('active');
                });
                event.target.classList.add('active');

                //remove active from the other section
                sections.forEach((s) => {
                    s.classList.remove('active');
                });
                const element = document.getElementById(id);
                element.classList.add('active');
            }
        });

    }

    // toggle theme (tema gecisi)
    const themeBtn = document.querySelector('.theme-btn');
    themeBtn.addEventListener('click', () => {
        let element = document.body;
        element.classList.toggle('light-mode');
    });
};

pageTransition();