const hamburgerBtn = document.getElementById('hamburger-btn');
const header = document.querySelector('header');
const items = document.querySelectorAll('.items');
const picture = document.querySelectorAll('.picture');
const navLinks = document.querySelector('.nav');
const abtn = navLinks.querySelectorAll('a');
const button = navLinks.querySelector('button');



hamburgerBtn.addEventListener('click', () => {
    navLinks.classList.toggle('show-menu');
});



//  hide menu on link click
abtn.forEach(buttonA => {
    buttonA.addEventListener('click', () => {
        navLinks.classList.remove('show-menu');
    });
});

button.addEventListener('click', () => {
    navLinks.classList.remove('show-menu');
});

//  change images for different screens sizes
window.addEventListener('resize', changeSize);

changeSize();
function changeSize() {
    const windowWidth = window.innerWidth;
    if (windowWidth < 640) {
        header.style.backgroundImage = 'url(./images/mobile/image-header.jpg)';
        items[1].querySelector('img').src = './images/mobile/image-transform.jpg';
        items[2].querySelector('img').src = './images/mobile/image-stand-out.jpg';
        items[4].style.backgroundImage = 'url(./images/mobile/image-graphic-design.jpg)';
        items[5].style.backgroundImage = 'url(./images/mobile/image-photography.jpg)';

        picture[0].querySelector('img').src = './images/mobile/image-gallery-milkbottles.jpg';
        picture[1].querySelector('img').src = './images/mobile/image-gallery-orange.jpg';
        picture[2].querySelector('img').src = './images/mobile/image-gallery-cone.jpg';
        picture[3].querySelector('img').src = './images/mobile/image-gallery-sugar-cubes.jpg';


    } else {
        header.style.backgroundImage = 'url(./images/desktop/image-header.jpg)';
        items[1].querySelector('img').src = './images/desktop/image-transform.jpg';
        items[2].querySelector('img').src = './images/desktop/image-stand-out.jpg';
        items[4].style.backgroundImage = 'url(./images/desktop/image-graphic-design.jpg)';
        items[5].style.backgroundImage = 'url(./images/desktop/image-photography.jpg)';

        picture[0].querySelector('img').src = './images/desktop/image-gallery-milkbottles.jpg';
        picture[1].querySelector('img').src = './images/desktop/image-gallery-orange.jpg';
        picture[2].querySelector('img').src = './images/desktop/image-gallery-cone.jpg';
        picture[3].querySelector('img').src = './images/desktop/image-gallery-sugarcubes.jpg';

    }
}