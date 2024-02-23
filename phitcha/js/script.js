var menubtn = document.getElementById('menubtn');
var hamburger_1 = document.getElementById('hamburger_1');
var hamburger_2 = document.getElementById('hamburger_2');
var hamburger_3 = document.getElementById('hamburger_3');


function showpageham(){
    menubtn.style.display='none';
    hamburger_1.style.display='block';
    console.log("hols");
}
function closepageham(){
    menubtn.style.display='block';
    hamburger_1.style.display='none';
    console.log("hols");
}

function calendarbtn(){
    hamburger_1.style.display='none';
    hamburger_2.style.display='block';
}

function calendarback(){
    hamburger_1.style.display='block';
    hamburger_2.style.display='none';
}

function membersbtn(){
    hamburger_1.style.display='none';
    hamburger_3.style.display='block';
}
function membersback(){
    hamburger_1.style.display='block';
    hamburger_3.style.display='none';
}

// 
var information_page_1 = document.getElementById('information_page_1');
var information_page_2 = document.getElementById('information_page_2');
var information_page_3 = document.getElementById('information_page_3');
var information_page_4 = document.getElementById('information_page_4');
var idle = document.getElementById('idle');

function STSbtn(){
    information_page_1.style.display='block';
    information_page_2.style.display='none';
    information_page_3.style.display='none';
    information_page_4.style.display='none';
    idle.style.display='none';
}
function SCGbtn(){
    information_page_2.style.display='block';
    information_page_1.style.display='none';
    information_page_3.style.display='none';
    information_page_4.style.display='none';
    idle.style.display='none';
}
function ERPbtn(){
    information_page_3.style.display='block';
    information_page_1.style.display='none';
    information_page_2.style.display='none';
    information_page_4.style.display='none';
    idle.style.display='none';
}
function ITbtn(){
    information_page_4.style.display='block';
    information_page_1.style.display='none';
    information_page_2.style.display='none';
    information_page_3.style.display='none';
    idle.style.display='none';
}

document.addEventListener('DOMContentLoaded', function () {
    var chartElement = document.querySelector('.chart');
    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                chartElement.classList.add('show');
            }
        });
    });
    observer.observe(chartElement);
});
document.addEventListener('DOMContentLoaded', function () {
    var chartElement = document.querySelector('.announce-total');
    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                chartElement.classList.add('show');
            }
        });
    });
    observer.observe(chartElement);
});
document.addEventListener('DOMContentLoaded', function () {
    var chartElement = document.querySelector('.announce-image img');
    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                chartElement.classList.add('show');
            }
        });
    });
    observer.observe(chartElement);
});
document.addEventListener('DOMContentLoaded', function () {
    var chartElement = document.querySelector('.text-top-3');
    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                chartElement.classList.add('show');
            }
        });
    });
    observer.observe(chartElement);
});
document.addEventListener('DOMContentLoaded', function () {
    var chartElement = document.querySelector('.text-top-4');
    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                chartElement.classList.add('show');
            }
        });
    });
    observer.observe(chartElement);
});
document.addEventListener('DOMContentLoaded', function () {
    var chartElement = document.querySelector('.footer-content h4');
    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                chartElement.classList.add('show');
            }
        });
    });
    observer.observe(chartElement);
});
document.addEventListener('DOMContentLoaded', function () {
    var chartElement = document.querySelector('.footer-contents h4');
    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                chartElement.classList.add('show');
            }
        });
    });
    observer.observe(chartElement);
});
document.addEventListener('DOMContentLoaded', function () {
    var chartElement = document.querySelector('.footer-content img');
    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                chartElement.classList.add('show');
            }
        });
    });
    observer.observe(chartElement);
});
document.addEventListener('DOMContentLoaded', function () {
    var chartElement = document.querySelector('.footer-contents h4 a');
    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                chartElement.classList.add('show');
            }
        });
    });
    observer.observe(chartElement);
});
document.addEventListener('DOMContentLoaded', function () {
    var chartElement = document.querySelector('.text-top-2');
    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                chartElement.classList.add('show');
            }
        });
    });
    observer.observe(chartElement);
});
document.addEventListener('DOMContentLoaded', function () {
    var chartElement = document.querySelector('.title-down-2 p');
    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                chartElement.classList.add('show');
            }
        });
    });
    observer.observe(chartElement);
});
document.addEventListener('DOMContentLoaded', function () {
    var chartElement = document.querySelector('.accident-2');
    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                chartElement.classList.add('show');
            }
        });
    });
    observer.observe(chartElement);
});
document.addEventListener('DOMContentLoaded', function () {
    var chartElement = document.querySelector('.text-top-5');
    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                chartElement.classList.add('show');
            }
        });
    });
    observer.observe(chartElement);
});
document.addEventListener('DOMContentLoaded', function () {
    var chartElement = document.querySelector('.activity-card');
    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                chartElement.classList.add('show');
            }
        });
    });
    observer.observe(chartElement);
});
document.addEventListener('DOMContentLoaded', function () {
    var chartElement = document.querySelector('.cell-activity img');
    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                chartElement.classList.add('show');
            }
        });
    });
    observer.observe(chartElement);
});
document.addEventListener('DOMContentLoaded', function () {
    var chartElement = document.querySelector('.activity-card');
    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                chartElement.classList.add('show');
            }
        });
    });
    observer.observe(chartElement);
});
document.addEventListener('DOMContentLoaded', function () {
    var chartElement = document.querySelector('.cell-activity1');
    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                chartElement.classList.add('show');
            }
        });
    });
    observer.observe(chartElement);
});
document.addEventListener('DOMContentLoaded', function () {
    var chartElement = document.querySelector('.cell-activity2');
    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                chartElement.classList.add('show');
            }
        });
    });
    observer.observe(chartElement);
});
document.addEventListener('DOMContentLoaded', function () {
    var chartElement = document.querySelector('.cell-activity3');
    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                chartElement.classList.add('show');
            }
        });
    });
    observer.observe(chartElement);
});
document.addEventListener('DOMContentLoaded', function () {
    var chartElement = document.querySelector('.cell-activity4');
    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                chartElement.classList.add('show');
            }
        });
    });
    observer.observe(chartElement);
});
document.addEventListener('DOMContentLoaded', function () {
    var chartElement = document.querySelector('.cell-activity5');
    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                chartElement.classList.add('show');
            }
        });
    });
    observer.observe(chartElement);
});
document.addEventListener('DOMContentLoaded', function () {
    var chartElement = document.querySelector('.cell-news');
    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                chartElement.classList.add('show');
            }
        });
    });
    observer.observe(chartElement);
});
document.addEventListener('DOMContentLoaded', function () {
    var chartElement = document.querySelector('.cell-news1');
    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                chartElement.classList.add('show');
            }
        });
    });
    observer.observe(chartElement);
});
document.addEventListener('DOMContentLoaded', function () {
    var chartElement = document.querySelector('.cell-news2');
    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                chartElement.classList.add('show');
            }
        });
    });
    observer.observe(chartElement);
});
document.addEventListener('DOMContentLoaded', function () {
    var chartElement = document.querySelector('.cell-news3');
    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                chartElement.classList.add('show');
            }
        });
    });
    observer.observe(chartElement);
});
document.addEventListener('DOMContentLoaded', function () {
    var chartElement = document.querySelector('.cell-news4');
    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                chartElement.classList.add('show');
            }
        });
    });
    observer.observe(chartElement);
});
document.addEventListener('DOMContentLoaded', function () {
    var chartElement = document.querySelector('.cell-news5');
    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                chartElement.classList.add('show');
            }
        });
    });
    observer.observe(chartElement);
});
document.addEventListener('DOMContentLoaded', function () {
    var chartElement = document.querySelector('.cell-news6');
    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                chartElement.classList.add('show');
            }
        });
    });
    observer.observe(chartElement);
});
document.addEventListener('DOMContentLoaded', function () {
    var chartElement = document.querySelector('.cell-activity');
    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                chartElement.classList.add('show');
            }
        });
    });
    observer.observe(chartElement);
});
document.addEventListener('DOMContentLoaded', function () {
    var chartElements = document.querySelectorAll('.newss-card');

    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    chartElements.forEach(function (chartElement) {
        observer.observe(chartElement);
    });
});


var TrandingSlider = new Swiper('.tranding-slider', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 2.5,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });
$(document).ready(function(){
    var currentIndex = 0;
    var items = $('.new-member a');
  
    function updateSlide() {
      var marginLeft = currentIndex * -100 + '%';
      $('.new-member').css('margin-left', marginLeft);
    }
  
    function slideRight() {
      currentIndex = (currentIndex + 1) % items.length;
      updateSlide();
    }
  
    function slideLeft() {
      currentIndex = (currentIndex - 1 + items.length) % items.length;
      updateSlide();
    }
  
    $('.new-member').on('swipeleft', function() {
      slideRight();
    });
  
    $('.new-member').on('swiperight', function() {
      slideLeft();
    });
  
    $('.new-member a').on('click', function() {
      slideRight();
    });
  
    updateSlide(); 
    setInterval(slideRight, 600); 
  });
  function zoomOut50() {
    var canvas = document.querySelector('canvas');
    canvas.classList.add('zoom-out-50');
}

function zoomOut75() {
    var canvas = document.querySelector('canvas');
    canvas.classList.add('zoom-out-75');
}

function zoomOut90() {
    var canvas = document.querySelector('canvas');
    canvas.classList.add('zoom-out-90');
}
