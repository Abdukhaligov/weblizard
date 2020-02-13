$(function(){
$(document).ready(function() {
    $('.temp1').hide();
    $('.contact').hide();
    $('.portfolion').hide();
    $('.preloader').hide();

    moving();

    $('.buttton').click(function () {
        if ($('.hamburger').hasClass('is-active')){
            $('.menu').removeClass('animated fadeInRight');
            $('.menu').addClass('animated fadeOutRight');
            $('.buttton').animate({
                right: 20
            }, 800);
        } else {
            $('.menu').removeClass('animated fadeOutRight');
            $('.menu').addClass('animated fadeInRight');
            $('.buttton').animate({
                right: 225
            }, 700);
        }
        $('.hamburger').toggleClass('is-active');
    });


    $('.hint').on("click", function () {
        $('body').removeClass('dragscroll');
        dragscroll.reset();
        $('.temp1').fadeIn();
        $('.temp1 .row .col-md-4').removeClass('animated fadeOutRight');
        $('.temp1 .row .col-md-4').addClass('animated fadeInRight');
        $('.temp1 .row .col-md-8').removeClass('animated fadeOutRight');
        $('.temp1 .row .col-md-8').addClass('animated fadeInRight');
    });

    $('.temp1 .row .col-md-4 img').click(function () {
        $('.temp1 .row .col-md-4').addClass('animated fadeOutRight');
       $('.temp1 .row .col-md-8').addClass('animated fadeOutRight');
       $('.wrapper').css("filter", "none");
        $('.temp1').fadeOut(600);
        $('body').addClass('dragscroll');
        dragscroll.reset();

    });

    $('.ourworks').on("click", function () {
        $('body').removeClass('dragscroll');
        dragscroll.reset();
        $('.temp1').fadeIn();
        $('.temp1 .row .col-md-4').removeClass('animated fadeOutRight');
        $('.temp1 .row .col-md-4').addClass('animated fadeInRight');
        $('.temp1 .row .col-md-8').removeClass('animated fadeOutRight');
        $('.temp1 .row .col-md-8').addClass('animated fadeInRight');
    });

    $('.contact .row .col-md-4 img').click(function () {
        $('.contact .row .col-md-4').addClass('animated fadeOutRight');
        $('.contact .row .col-md-8').addClass('animated fadeOutRight');
        $('.wrapper').css("filter", "none");
        $('.contact').fadeOut(600);
        $('body').addClass('dragscroll');
        dragscroll.reset();
    });

    $('.portfolio').on("click", function () {
        $('body').removeClass('dragscroll');
        dragscroll.reset();
        $('.temp1').fadeIn();
        $('.temp1 .row .col-md-4').removeClass('animated fadeOutRight');
        $('.temp1 .row .col-md-4').addClass('animated fadeInRight');
        $('.temp1 .row .col-md-8').removeClass('animated fadeOutRight');
        $('.temp1 .row .col-md-8').addClass('animated fadeInRight');
    });

    $('.portfolion .row .col-md-4 img').click(function () {
        $('.contact .row .col-md-4').addClass('animated fadeOutRight');
        $('.contact .row .col-md-8').addClass('animated fadeOutRight');
        $('.wrapper').css("filter", "none");
        $('.portfolion').fadeOut(600);
        $('body').addClass('dragscroll');
        dragscroll.reset();
    });

 //     var area = document.querySelector('.dragscroll');
 //
 // //And pass it to panzoom
 //
 //    function media(x) {
 //        if (x.matches) { // If media query matches
 //            panzoom(area, {
 //                maxZoom: 1,
 //                minZoom: 1,
 //                zoomSpeed: 0.1,
 //                zoomDoubleClickSpeed: 1
 //            });
 //        }   else {
 //            panzoom(area, {
 //                maxZoom: 1,
 //                minZoom: 1,
 //                zoomSpeed: 0.1,
 //                zoomDoubleClickSpeed: 1
 //            }).zoomAbs(
 //                0,
 //                0,
 //                1.5 );
 //        }
 //    }
 //
 //    var x = window.matchMedia("(max-width: 1367px)")
 //    media(x) // Call listener function at run time
 //    x.addListener(media) // Attach listener function on state changes




        canvg('field', 'img/field.svg');
        canvg('ship', 'img/ship.svg');
        canvg('warehouse', 'img/warehouse.svg');
        canvg('office', 'img/office.svg');
        canvg('parkpart1', 'img/parkpart1.svg');
        canvg('parkpart2', 'img/parkpart2.svg');
        canvg('parkpart3', 'img/parkpart3.svg');
        canvg('centralpark1', 'img/centralpark1.svg');
        canvg('centralpark2', 'img/centralpark2.svg');
        canvg('centralpark3', 'img/centralpark3.svg');
        canvg('starbucks', 'img/starbucks.svg');
        canvg('building', 'img/building.svg');
        canvg('fulltruck', 'img/fulltruck.svg');
        canvg('blueflip', 'img/blueflip.svg');
        canvg('greentruck', 'img/greentruck.svg');
        canvg('bluetruck', 'img/bluetruck.svg');
        canvg('select', 'img/selet2.svg');

function moving() {

    TweenMax.to(".greentruck", 0.9, {ease: Power0.easeNone, scale: 1, delay: 0.1, yoyo: true});
    TweenMax.to(".bluetruck", 0.9, {ease: Power0.easeNone, scale: 1, delay: 0.15, yoyo: true});
    TweenMax.to(".kran", 0.9, {ease: Power0.easeNone, scale: 1, delay: 0.2, yoyo: true});
    TweenMax.to(".ship", 0.9, {ease: Power0.easeNone, scale: 1, delay: 0.25, yoyo: true});
    TweenMax.to(".minitruck", 0.9, {ease: Power0.easeNone, scale: 1, delay: 0.28, yoyo: true});
    TweenMax.to(".opentruck", 0.9, {ease: Power0.easeNone, scale: 1, delay: 0.3, yoyo: true});
    TweenMax.to(".couple_telega", 0.9, {ease: Power0.easeNone, scale: 1, delay: 0.32, yoyo: true});
    TweenMax.to(".stolb", 0.9, {ease: Power0.easeNone, scale: 1, delay: 0.35, yoyo: true});
    TweenMax.to(".pogruz", 0.9, {ease: Power0.easeNone, scale: 1, delay: 0.36, yoyo: true});
    TweenMax.to(".twoguys", 0.9, {ease: Power0.easeNone, scale: 1, delay: 0.37, yoyo: true});
    TweenMax.to(".minipark", 0.9, {ease: Power0.easeNone, scale: 1, delay: 0.38, yoyo: true});
    TweenMax.to(".blueflip", 0.9, {ease: Power0.easeNone, scale: 1, delay: 0.39, yoyo: true});
    TweenMax.to(".house", 0.9, {ease: Power0.easeNone, scale: 1, delay: 0.39, yoyo: true});
    TweenMax.to(".field", 0.9, {ease: Power0.easeNone, scale: 1, delay: 0.4, yoyo: true});
    TweenMax.to(".apples", 0.9, {ease: Power0.easeNone, scale: 1, delay: 0.41, yoyo: true});
    TweenMax.to(".dog", 0.9, {ease: Power0.easeNone, scale: 1, delay: 0.41, yoyo: true});
    TweenMax.to(".traktor", 0.9, {ease: Power0.easeNone, scale: 1, delay: 0.42, yoyo: true});
    TweenMax.to(".chuchelo", 0.9, {ease: Power0.easeNone, scale: 1, delay: 0.43, yoyo: true});
    TweenMax.to(".seno", 0.9, {ease: Power0.easeNone, scale: 1, delay: 0.45, yoyo: true});
    TweenMax.to(".wine", 0.9, {ease: Power0.easeNone, scale: 1, delay: 0.47, yoyo: true});
    TweenMax.to(".vegetables", 0.9, {ease: Power0.easeNone, scale: 1, delay: 0.50, yoyo: true});
    TweenMax.to(".starbucks", 0.9, {ease: Power0.easeNone, scale: 1, delay: 0.55, yoyo: true});
    TweenMax.to(".building", 0.9, {ease: Power0.easeNone, scale: 1, delay: 0.60, yoyo: true});
    TweenMax.to(".ambulance", 0.9, {ease: Power0.easeNone, scale: 1, delay: 0.61, yoyo: true});
    TweenMax.to(".redcar", 0.9, {ease: Power0.easeNone, scale: 1, delay: 0.63, yoyo: true});
    TweenMax.to(".whitecat", 0.9, {ease: Power0.easeNone, scale: 1, delay: 0.66, yoyo: true});
    TweenMax.to(".police", 0.9, {ease: Power0.easeNone, scale: 1, delay: 0.70, yoyo: true});
    TweenMax.to(".shop", 0.9, {ease: Power0.easeNone, scale: 1, delay: 0.75, yoyo: true});
    TweenMax.to(".trees", 0.9, {ease: Power0.easeNone, scale: 1, delay: 1.76, yoyo: true});
    TweenMax.to(".kust", 0.9, {ease: Power0.easeNone, scale: 1, delay: 0.77, yoyo: true});
    TweenMax.to(".team", 0.9, {ease: Power0.easeNone, scale: 1, delay: 0.78, yoyo: true});
    TweenMax.to(".playground", 0.9, {ease: Power0.easeNone, scale: 1, delay: 0.80, yoyo: true});
    TweenMax.to(".policecar", 0.9, {ease: Power0.easeNone, scale: 1, delay: 0.88, yoyo: true});
    TweenMax.to(".post", 0.9, {ease: Power0.easeNone, scale: 1, delay: 0.89, yoyo: true});
    TweenMax.to(".parkpart1", 0.9, {ease: Power0.easeNone, scale: 1, delay: 0.90, yoyo: true});
    TweenMax.to(".parkpart2", 0.9, {ease: Power0.easeNone, scale: 1, delay: 0.95, yoyo: true});
    TweenMax.to(".parkpart3", 0.9, {ease: Power0.easeNone, scale: 1, delay: 0.96, yoyo: true});
    TweenMax.to(".glass", 0.9, {ease: Power0.easeNone, scale: 1, delay: 0.97, yoyo: true});
    TweenMax.to(".taxi", 0.9, {ease: Power0.easeNone, scale: 1, delay: 0.98, yoyo: true});
    TweenMax.to(".gasstation", 0.9, {ease: Power0.easeNone, scale: 1, delay: 0.99, yoyo: true});
    TweenMax.to(".gascar", 0.9, {ease: Power0.easeNone, scale: 1, delay: 1, yoyo: true});
    TweenMax.to(".gasmarket", 0.9, {ease: Power0.easeNone, scale: 1, delay: 1.02, yoyo: true});
    TweenMax.to(".littlepark", 0.9, {ease: Power0.easeNone, scale: 1, delay: 1.05, yoyo: true});
    TweenMax.to(".skyscrapper", 0.9, {ease: Power0.easeNone, scale: 1, delay: 1.12, yoyo: true});
    TweenMax.to(".bigoffice", 0.9, {ease: Power0.easeNone, scale: 1, delay: 1.16, yoyo: true});
    TweenMax.to(".fulltruck", 0.9, {ease: Power0.easeNone, scale: 1, delay: 1.20, yoyo: true});
    TweenMax.to(".smallpark1", 0.9, {ease: Power0.easeNone, scale: 1, delay: 1.82, yoyo: true});
    TweenMax.to(".park", 0.9, {ease: Power0.easeNone, scale: 1, delay: 1.26, yoyo: true});
    TweenMax.to(".centralpark", 0.9, {ease: Power0.easeNone, scale: 1, delay: 1.88, yoyo: true});
    TweenMax.to(".centralpark2", 0.9, {ease: Power0.easeNone, scale: 1, delay: 1.80, yoyo: true});
    TweenMax.to(".centralpark3", 0.9, {ease: Power0.easeNone, scale: 1, delay: 1.83, yoyo: true});
    TweenMax.to(".dcp", 0.9, {ease: Power0.easeNone, scale: 1, delay: 1.35, yoyo: true});
    TweenMax.to(".monument", 0.9, {ease: Power0.easeNone, scale: 1, delay: 1.40, yoyo: true});
    TweenMax.to(".policepark", 0.9, {ease: Power0.easeNone, scale: 1, delay: 1.42, yoyo: true});
    TweenMax.to(".business", 0.9, {ease: Power0.easeNone, scale: 1, delay: 1.45, yoyo: true});
    TweenMax.to(".sand", 0.9, {ease: Power0.easeNone, scale: 1, delay: 1.52, yoyo: true});
    TweenMax.to(".buspark", 0.9, {ease: Power0.easeNone, scale: 1, delay: 1.62, yoyo: true});
    TweenMax.to(".home", 0.9, {ease: Power0.easeNone, scale: 1, delay: 1.72, yoyo: true});
    TweenMax.to(".lastpark", 0.9, {ease: Power0.easeNone, scale: 1, delay: 1.82, yoyo: true});
    TweenMax.to(".cars", 0.9, {ease: Power0.easeNone, scale: 1, delay: 1.92, yoyo: true});

    var tl = new TimelineMax({repeat: 99, repeatDelay: 1});

    tl.add(TweenMax.to(".boat_wrapper", 8.5, {ease: Power0.easeNone, delay: 3, left: -150, top: 890}));

    var tlselect = new TimelineMax();
    tlselect.add(TweenMax.to(".select_wrapper", .5, {ease: Power0.easeNone, top: 20}));
    tlselect.add(TweenMax.to(".select_wrapper", .5, {ease: Power0.easeNone, top: 0}));
    tlselect.add(TweenMax.to(".select_wrapper", .5, {ease: Power0.easeNone, top: 20}));
    tlselect.add(TweenMax.to(".select_wrapper", .5, {ease: Power0.easeNone, top: 0}));
    tlselect.add(TweenMax.to(".select_wrapper", 0.1, {ease: Power0.easeNone, display:'none'}));


}
    var time = 1000;

    function syren() {

        setTimeout(function () {
            $(".st2").css("fill", "#ED2024");
        },time);

        setInterval(function () {

            $(".st2").css("fill", "");

            setTimeout(function () {
                $(".st2").css("fill", "#ED2024");
            },time)
        },time*2)

    }

    syren();



});
});