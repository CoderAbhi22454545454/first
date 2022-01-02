$('select').each(function() {
    $(this).wrap('<div class="select-box"></div>');
});

$('[type="time"]').each(function() {
    $(this).wrap('<div class="time-box"></div>');
});

$('[type="date"]').each(function() {
    $(this).wrap('<div class="date-box"></div>');
});

$('.nav-toggle').click(function() {
    $('.page-header .nav-primary').fadeToggle();
    $(this).toggleClass('close-menu');
});
$('.big-nav a').click(function() {
    $('.big-nav').addClass('close-menu');
});
$('.menu .big-nav > ul > li > a').click(function() {
    $(this).parent().toggleClass('sub-menu-open');
});

$('.big-nav2 a').click(function() {
    $('.big-nav2').addClass('close-menu');
});
$('.menu .big-nav2 > ul > li > a').click(function() {
    $(this).parent().toggleClass('sub-menu-open');
});




$('.form-field-link-increement-button').click(function() {
    var url_value = $(this).parent().find("input").val();
    if (url_value == 0) {
        alert("Please Enter URL");
    } else {
        $('.form-field-link-wrapper').append('<div class="form-field-link-realtive"><input type="text" name="" value="' + url_value + '"><a href="Javascript:void(0);" class="form-field-link-increement-button form-field-link-decreement-button"><span class="icon-plus-outline"></span></a></div>');
    }
    return false;
});

$('.js-append-content').click(function() {
    $(this).parent().next().append('<div class="grid-item-bottom"><div class="item-box"><div class="top"><h5>Godzina od</h5></div><div class="bottom"><div class="left-panel"><span>8:00</span></div><div class="right-panel"><i class="fa fa-clock-o "></i></div></div></div><div class="item-box"><div class="top"><h5>Godzina od</h5></div><div class="bottom"><div class="left-panel"><span>20:00</span></div><div class="right-panel"><i class="fa fa-clock-o "></i></div></div></div><div class="item-box"><div class="top"><h5>Cena netto</h5></div><div class="bottom"><div class="left-panel"><span>100,00</span></div><div class="right-panel"><i class="fa fa-clock-o "></i></div></div></div><div class="item-box"><div class="top"><h5>Cena brutto</h5></div><div class="bottom"><div class="left-panel"><span>123,00</span></div><div class="right-panel"><i class="fa fa-clock-o "></i></div></div></div><div class="item-box"><div class="top"><h5>Stawka VAT</h5></div><div class="bottom"><div class="left-panel"><span>23%</span></div><div class="right-panel"><i class="fa fa-clock-o "></i></div></div></div></div>');
});

$(document).on("click", ".form-field-link-decreement-button", function() {
    $(this).parents(".form-field-link-realtive").fadeOut();
});

$(document).ready(function() {
    $('input[type="file"]').change(function(e) {
        var geekss = e.target.files[0].name;
        $("h4").text(geekss + ' is the selected file.');
    });
});

$('.js-button-search').click(function() {
    $('.js-search-bar').fadeToggle('fast');
    $(this).toggleClass('close-menu');
});

// use for popup
$(document).ready(function() {
    $(".js-open-popup").click(function() {
        $(".popup").fadeToggle();
    });

    $(".close-popup").click(function() {
        $(".popup").fadeToggle();
    });
});
// for search table 
function jsSearch() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("js-search-input");
    filter = input.value.toUpperCase();
    table = document.getElementById("js-data-table");
    no_data = document.getElementById("js-no-data-table");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
                no_data.style.display = "none";
            } else {
                tr[i].style.display = "none";
                no_data.style.display = "block";
            }
        }
    }
}

function sortTable() {
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("js-data-table");
    switching = true;
    while (switching) {
        switching = false;
        rows = table.rows;
        for (i = 1; i < (rows.length - 1); i++) {
            shouldSwitch = false;
            x = rows[i].getElementsByTagName("TD")[0];
            y = rows[i + 1].getElementsByTagName("TD")[0];
            if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                shouldSwitch = true;
                break;
            }
        }
        if (shouldSwitch) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
        }
    }
}

$('.MS-content').slick({
    dots: false,
    arrows: true,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});


$('.js-blog-section').slick({
    dots: false,
    arrows: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});


$('.testimonials').slick({
    dots: false,
    arrows: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});

var btn = $('#button');

$(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
        btn.addClass('show');
    } else {
        btn.removeClass('show');
    }
});

btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, '300');
});

$('.milestone-slider').slick({
    dots: false,
    arrows: true,
    infinite: true,
    speed: 300,
    slidesToShow: 7,
    slidesToScroll: 1,
    responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});

var btn = $('#button');

$(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
        btn.addClass('show');
    } else {
        btn.removeClass('show');
    }
});

btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, '300');
});


$('.MS-content').slick({
    dots: false,
    arrows: true,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});



$('.comparisons').slick({
    dots: false,
    arrows: true,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [{
            breakpoint: 1269,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 960,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});


tabControl();

var resizeTimer;
$(window).on('resize', function(e) {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() {
        tabControl();
    }, 250);
});


function tabControl() {
    var tabs = $('.tabbed-content').find('.tabs');
    if (tabs.is(':visible')) {
        tabs.find('a').on('click', function(event) {
            event.preventDefault();
            var target = $(this).attr('href'),
                tabs = $(this).parents('.tabs'),
                buttons = tabs.find('a'),
                item = tabs.parents('.tabbed-content').find('.item');
            buttons.removeClass('active');
            item.removeClass('active');
            $(this).addClass('active');
            $(target).addClass('active');
        });
    } else {
        $('.item').on('click', function() {
            var container = $(this).parents('.tabbed-content'),
                currId = $(this).attr('id'),
                items = container.find('.item');
            container.find('.tabs a').removeClass('active');
            items.removeClass('active');
            $(this).addClass('active');
            container.find('.tabs a[href$="#' + currId + '"]').addClass('active');
        });
    }
}


jQuery(function ($) {
    // Add en remove class on menu item hover  
    $('.big-nav > ul > li').mouseover(function () {
        $(this).addClass('show').siblings().removeClass('show');
    });

    // Get the minimum height the big-nav elemtn
    var min_height = 50;
    $('.big-nav > ul > li > ul').each(function () {
        var this_height = $(this).outerHeight();
        if (this_height > min_height) min_height = this_height;
    });
    $('.big-nav > ul, .nav .big-nav > ul > li > ul');

});

//FAQ
const items = document.querySelectorAll(".faq-accordion button");

const faq1 = document.querySelector(".faq-1");
const faq2 = document.querySelector(".faq-2");
const faq3 = document.querySelector(".faq-3");
const faq4 = document.querySelector(".faq-4");
const faq5 = document.querySelector(".faq-5");

const faq6 = document.querySelector(".faq-6");
const faq7 = document.querySelector(".faq-7");
const faq8 = document.querySelector(".faq-8");
const faq9 = document.querySelector(".faq-9");
const faq10 = document.querySelector(".faq-10");

const faq11 = document.querySelector(".faq-11");
const faq12 = document.querySelector(".faq-12");
const faq13 = document.querySelector(".faq-13");
const faq14 = document.querySelector(".faq-14");
const faq15 = document.querySelector(".faq-15");

const faq16 = document.querySelector(".faq-16");
const faq17 = document.querySelector(".faq-17");
const faq18 = document.querySelector(".faq-18");
const faq19 = document.querySelector(".faq-19");
const faq20 = document.querySelector(".faq-20");




function faqOpen1() {
    faq1.classList.toggle("actived");
}
function faqOpen2() {
    faq2.classList.toggle("actived");
}
function faqOpen3() {
    faq3.classList.toggle("actived");

}

function faqOpen4() {
    faq4.classList.toggle("actived");

}

function faqOpen5() {
    faq5.classList.toggle("actived");

}

function faqOpen6() {
    faq6.classList.toggle("actived");

}

function faqOpen7() {
    faq7.classList.toggle("actived");

}

function faqOpen8() {
    faq8.classList.toggle("actived");

}

function faqOpen9() {
    faq9.classList.toggle("actived");

}

function faqOpen10() {
    faq10.classList.toggle("actived");

}



function faqOpen11() {
    faq11.classList.toggle("actived");
}
function faqOpen12() {
    faq12.classList.toggle("actived");
}
function faqOpen13() {
    faq13.classList.toggle("actived");

}

function faqOpen14() {
    faq14.classList.toggle("actived");

}

function faqOpen15() {
    faq5.classList.toggle("actived");

}

function faqOpen16() {
    faq16.classList.toggle("actived");

}

function faqOpen17() {
    faq17.classList.toggle("actived");

}

function faqOpen18() {
    faq18.classList.toggle("actived");

}

function faqOpen19() {
    faq19.classList.toggle("actived");

}

function faqOpen20() {
    faq20.classList.toggle("actived");

}



function toggleAccordion() {
    const itemToggle = this.getAttribute('aria-expanded');

    for (i = 0; i < items.length; i++) {
        items[i].setAttribute('aria-expanded', 'false');
        // faq1.classList.remove("actived");
        // faq2.classList.remove("actived");
    }

    if (itemToggle == 'false') {
        this.setAttribute('aria-expanded', 'true');
        // faq1.classList.add("actived");
        // faq2.classList.add("actived");
    }
}


items.forEach(item => item.addEventListener('click', toggleAccordion));








//Progress-bar
const progress = document.querySelector('.progress-done');

progress.style.width = progress.getAttribute('data-done') + '%';
progress.style.opacity = 1;

const progress2 = document.querySelector('.progress-done-2');


progress2.style.width = progress2.getAttribute('data-done') + '%';
progress2.style.opacity = 1;

const progress3 = document.querySelector('.progress-done-3');



progress3.style.width = progress3.getAttribute('data-done') + '%';
progress3.style.opacity = 1;


const progress4 = document.querySelector('.progress-done-4');



progress4.style.width = progress4.getAttribute('data-done') + '%';
progress4.style.opacity = 1;

const progress5 = document.querySelector('.progress-done-5');



progress5.style.width = progress5.getAttribute('data-done') + '%';
progress5.style.opacity = 1;



// Read- More
function read_more() {
    var readmore = $('.read_more');
    var comment = $('.answer_comment p').text();

    //goes through each index of the array of 'review_comment p'
    $('.answer_comment p').each(function (i) {
        //calculates height of comment variable
        var commentheight = $(this).height();
        //calculates scroll height of comment on each div
        var scrollcommentheight = $('.answer_comment p')[i].scrollHeight;

        //if comment height is same as scroll height then hide read more button
        if (commentheight == scrollcommentheight) {
            $(this).siblings(readmore).hide();
        }
        //otherwise read more button shows
        else {
            $(this).siblings(readmore).text("Read More");
        }
    });


    readmore.on('click', function () {
        var $this = $(this);
        event.preventDefault();

        $this.siblings('.answer_comment p').toggleClass('active');

        if ($this.siblings('.answer_comment p').text().length < 230) {
            $this.text("Read More..");
        }
        if ($('.answer_comment p').hasClass('active')) {
            $this.text("Read Less");
        } else {
            $this.text("Read More");
        }
    });
};

$(function () {
    //Calling function after Page Load
    read_more();
});


// REview open
const modal = document.querySelector("#modal")
const openModalButton = document.querySelector("#open-modal-btn")
const closeModalButton = document.querySelector("#close-modal-btn")
const overlay = document.querySelector("#overlay")

openModalButton.addEventListener("click", () => {
    modal.classList.add("open")
    overlay.classList.add("open")
})

closeModalButton.addEventListener("click", closeModal)

overlay.addEventListener("click", closeModal)

function closeModal() {
    modal.classList.remove("open")
    overlay.classList.remove("open")
}

