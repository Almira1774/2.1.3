document.addEventListener("DOMContentLoaded", function () {
    const swiper = new Swiper(".swiper", {
        slidesPerView: 1.2, 
        slidesPerGroup: 1,
        centeredSlides: false, 
        loop: true,        
               /*autoplay: {
          delay: 5000, // Автопрокрутка каждые 5 секунд
          disableOnInteraction: false, // Автопрокрутка не останавливается при взаимодействии
        },*/

        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        effect: 'coverflow',
        coverflowEffect: {
            slideShadows: true,
            modifier: 0,
        },
        on: {
            init: function () {
                // Показываем контент на первом активном слайде
                document
                    .querySelectorAll(".swiper-slide-active .slide-content")
                    .forEach((el) => {
                        el.style.opacity = "1";
                        el.style.transform = "translateY(0)";
                    });
            },
        },
    });
});
const button = document.querySelector('button')
const icon = button.querySelector('.icon');

const iconChange = function () {
    const buttonOpened = button.classList.contains('showAll');
    const buttonClosed = button.classList.contains('closeAll');
    if (buttonOpened) {
        button.classList.remove('showAll');
        button.classList.add('closeAll');
        button.textContent = 'Скрыть';
        icon.classList.remove('icon--Show');
        icon.classList.add('icon--Hide');
        button.insertBefore(icon, button.firstChild);
        console.log(icon.classList);


    }
    else if (buttonClosed) {
        button.classList.remove('closeAll');
        button.classList.add('showAll');
        icon.classList.remove('icon--Hide');
        icon.classList.add('icon--Show');
        button.textContent = 'Показать все';
        button.insertBefore(icon, button.firstChild);
        console.log(icon.classList);


    }
    console.log(icon.classList);

}


button.addEventListener('click', function () {
    const screen = window.innerWidth;
    const slides = document.querySelectorAll('.swiper-slide');
   const navHeight = document.querySelector('.servicesBrands')
    if (screen > 767 && screen < 1119) {
    iconChange();
    for (let i = slides.length-1; i >=6; i--) {
        const slide = slides[i];
        navHeight.style.height='auto';
        slide.classList.toggle('hidden');

    }

}});