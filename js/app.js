/*const arrowRight = document.querySelector('.projets-box .navigation .arrow-right');
const arrowLeft = document.querySelector('.projets-box .navigation .arrow-left');

let index = 0;

const activeProjets = () => {
    const imgSlide = document.querySelector('.projet-caroussel .img-slide');

    imgSlide.style.transform = `translateX(calc(-${index * -100}% - ${index * 2}rem))`;
}

arrowRight.addEventListener('click', () => {
    if(index < 4) {
        index++;
    }else{
        index = 5;
    }
        activeProjets();
});

arrowLeft.addEventListener('click', () => {
    if(index > 0) {
        index--;
    }else{
        index = 5;
    }
        activeProjets();
});*/




document.addEventListener('DOMContentLoaded', () => {
    const arrowRight = document.querySelector('.projets-box .navigation .arrow-right');
    const arrowLeft = document.querySelector('.projets-box .navigation .arrow-left');

    let index = 0;
    const totalProjets = 3;

    const activeProjets = () => {

        const imgSlide = document.querySelector('.projet-caroussel .img-slide');
        const projetsDetails = document.querySelectorAll('.projets-detail');

        imgSlide.style.transform = `translateX(calc(-${index * 100}% - ${index * 2}rem))`;

        projetsDetails.forEach(detail => {
            detail.classList.remove('active');
        });
        projetsDetails[index].classList.add('active');
    }

    // Arrow-RIGHT → défilement vers la GAUCHE
    arrowRight.addEventListener('click', () => {
        if(index < totalProjets-1) {
            index++;
            arrowLeft.classList.remove('disabled');
        } else {
            index = totalProjets;
            arrowRight.classList.add('disabled');
        }
        activeProjets();
    });

    // Arrow-LEFT → défilement vers la DROITE
    arrowLeft.addEventListener('click', () => {
        if(index > 1) {
            index--;
            arrowRight.classList.remove('disabled');
        } else {
            index = 0;
            arrowLeft.classList.add('disabled');
        }
        activeProjets();
    });
});