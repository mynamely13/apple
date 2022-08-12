function closeModel() {
    const close1 = document.getElementsByClassName('close')[0];
    const model1 = document.getElementsByClassName('model1')[0];
    console.log(close1);
    console.log(model1);
    close1.style.display = 'none';
    model1.style.display = 'none';
}

function openModel() {
    const close1 = document.getElementsByClassName('close')[0];
    const model1 = document.getElementsByClassName('model1')[0];
    console.log(close1);
    console.log(model1);
    close1.style.display = 'block';
    model1.style.display = 'flex';
}

window.addEventListener('scroll', () => {
    const arrow = document.getElementsByClassName('arrow')[0];

    if (window.scrollY >= 20) {
        arrow.style.display = 'block';
    } else {
        arrow.style.display = 'none ';
    }
});

const arrayLists = ['home', 'about', 'resume', 'services', 'portfolio', 'contact'];

const active = (code) => {
    arrayLists.map((arrayList) => {
        if (arrayLists.includes(code, arrayLists)) {
            const el = document.getElementById(code);
            el.style.color = '#34b7a7';
        }
    });
};

const menu = document.getElementsByClassName('menu');

// Array.from(menu).map((element) => {
//     element.addEventListener('click', (e) => {
//         console.log(element);
//     });
// });

Array.from(menu).map((element) => {
    element.addEventListener('click', (e) => {
        console.log(element);
        for (let i = 0; i < menu.length; i++) {
            if (menu[i].dataset.filter === element.name) {
                menu[i].classList.add('active2');
            } else {
                menu[i].classList.remove('active2');
            }
        }
        const img = document.getElementsByClassName('element_img');
        Array.from(img).map((im) => {
            for (let i = 0; i < img.length; i++) {
                if (img[i].dataset.item === element.dataset.filter || element.dataset.filter === 'all') {
                    img[i].style.display = 'block';
                } else {
                    img[i].style.display = 'none';
                }
            }
        });
    });
});
