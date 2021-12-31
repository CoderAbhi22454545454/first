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