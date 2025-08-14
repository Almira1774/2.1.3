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

const toggleSlides = function(shown, count){
    const slides = document.querySelectorAll('.swiper-slide');
    const navHeight = document.querySelector('.swiper');
    const paddingBottom = document.querySelector('.swiper-wrapper')

    const totalSlides = slides.length;
    const slidesToToggle = Math.min(count, totalSlides);

    if (shown) {
        navHeight.style.height = '342px'
        paddingBottom.style.paddingBottom = '60px'
        for (let i = totalSlides - slidesToToggle; i < totalSlides; i++) {
            slides[i].classList.remove('hidden');
            slides[i].classList.add('visible')
           
        }
    } else {
        navHeight.style.height = '232px'
        for (let i = totalSlides - slidesToToggle; i < totalSlides; i++) {
            slides[i].classList.remove('visible')
            slides[i].classList.add('hidden');
        }
    }

}

const iconChange = function (shown, count) {
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
        toggleSlides(shown, count)


    }
    else if (buttonClosed) {
        button.classList.remove('closeAll');
        button.classList.add('showAll');
        icon.classList.remove('icon--Hide');
        icon.classList.add('icon--Show');
        button.textContent = 'Показать все';
        button.insertBefore(icon, button.firstChild);
        console.log(icon.classList);
        toggleSlides(shown, count)


    }
    console.log(icon.classList);

}


button.addEventListener('click', function () {
    const screen = window.innerWidth;
   
    if (screen > 767 && screen < 1119) {
        const slidesCount = 2;
        const toShow = button.classList.contains('showAll');

    iconChange(toShow, slidesCount);
   
}});