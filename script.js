const brandsImg = [
    {imgLink: './img/logo/lenovo.png', imgName: 'Lenovo'},
    {imgLink: './img/logo/samsung.png', imgName: 'Samsung'},
    {imgLink: './img/logo/apple.png', imgName: 'Apple'},
    {imgLink: './img/logo/Sonic.png', imgName: 'ViewSonic'},
    {imgLink: './img/logo/bosch.png', imgName: 'Bosch'},
    {imgLink: './img/logo/hp.png', imgName: 'Hp'},
    {imgLink: './img/logo/acer.png', imgName: 'Acer'},
    {imgLink: './img/logo/sony.png', imgName: 'Sony'},
    {imgLink: './img/logo/lenovo.png', imgName: 'Lenovo'},
    {imgLink: './img/logo/samsung.png', imgName: 'Samsung'},
    {imgLink: './img/logo/apple.png', imgName: 'Apple'}
];

let brandsList = document.querySelector('.swiper-wrapper');
let tempBrandBox = document.querySelector('#brand-box').content;
let brandBox = tempBrandBox.querySelector('.swiper-slide');

let j = 0;
for (let i = 0; i < brandsImg.length; i++) {
    let brandBoxClone = brandBox.cloneNode(true);
    let brandBoxImg = brandBoxClone.querySelector('.content__brand-imag');

    if (j === 8) {
        j = 0;
    }
    enterData(brandBoxImg, brandsImg[j]);
    
    function enterData(item, data) {
    item.src = data.imgLink;
    item.alt = data.imgName;
    }

    brandsList.appendChild(brandBoxClone);
    j++;
}

let revealButton = document.querySelector('.content__button');

revealButton.addEventListener('click', function () {
    if (revealButton.textContent === 'Показать все') {
        brandsList.classList.remove('hidden');
        revealButton.classList.remove('content__button--reveal');
        revealButton.classList.add('content__button--hide');
        revealButton.textContent = 'Скрыть';
    } else {
        brandsList.classList.add('hidden');
        revealButton.classList.remove('content__button--hide');
        revealButton.classList.add('content__button--reveal');
        revealButton.textContent = 'Показать все';
    }
});

window.addEventListener('DOMContentLoaded', () => {
    const resizableSwiper = (breakpoint, swiperClass, swiperSettings) => {
        let swiper;

        breakpoint = window.matchMedia(breakpoint);

        const enableSwiper = function(className, settings) {
            swiper = new Swiper(className, settings);
        }

        const checker = function() {
            if (breakpoint.matches) {
                return enableSwiper(swiperClass, swiperSettings);
            } else {
                if (swiper !== undefined) swiper.destroy(true, true);
                return;
            }
        };
        breakpoint.addEventListener('change', checker);
        checker();
    }

    resizableSwiper(
        '(max-width: 760px)',
        '.swiper',
        {
            spaceBetween: 16,
            slidesPerView: 'auto',

            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        }
    );
});
