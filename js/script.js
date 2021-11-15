$(document).ready(function () {
    //MenuScrollFixed
    $(function ($) {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 540) {
                $("#top").addClass("top-fixed");
            } else if ($(this).scrollTop() < 540) {
                $("#top").removeClass("top-fixed");
            }
        });
    });
    //Select Form 
    $(function() {
        $('.media-press__select').styler();
    });
    $('#year-select').on('change', function(e){
        $(e.currentTarget).closest('form').submit();
    });
    //Owl Carousel
    $("#owl-carousel1").owlCarousel({
        rtl: false,
        loop: true,
        dots: false,
        margin: 10,
        items: 1,
        nav: true,
        navText: ["<img src='/wp-content/themes/drivenets-new/img/arrow-right.png'>", "<img src='/wp-content/themes/drivenets-new/img/arrow-left.png'>"],
    });
    //Owl Carousel on events.html
    $('#owl-carousel-events').owlCarousel({
        loop:true,
        nav:false,
        margin: 0,
        responsive:{
            0: {
                items:1
            },		 
            1400: {
                items: 2
            },
        }
    });
    //Owl Carousel on company.html
    $('#owl-carousel-awards').owlCarousel({
        loop:true,
        dots: false,
        margin: 0,
        navText: ["<img src='/wp-content/themes/drivenets-new/img/arrow-right.png'>", "<img src='/wp-content/themes/drivenets-new/img/arrow-left.png'>"],
        responsive:{
            0: {
                items:1,
                nav: true,
            },       
            1550: {
                nav: true,
                items:3
            },
        }
    });
    $('#owl-carousel-investors').owlCarousel({
        loop:true,
        nav: true,
        margin: 50,
        dots: false,
        nav: true,
        navText: ["<img src='/wp-content/themes/drivenets-new/img/arrow-right.png'>", "<img src='/wp-content/themes/drivenets-new/img/arrow-left.png'>"],
        responsive:{
            0: {
                items:1,
                nav: false,
            },       
                1201: {
                items:2
            },
        }
    });
    //FancyBox
    $(".fancy").fancybox({});
    $(".various").fancybox({
        type: "iframe",
    });
    //Menu opener
    $(".burger__btn").click(function () {
        $(".burger__btn").toggleClass("d-none");
        $(".burger__exit").toggleClass("d-block");
        $(".menu-collapse").toggleClass("d-none order");
        $(".menu").toggleClass("menu-opend");
    });
    //Subject__list opener
    $(".arrow_down").click(function () {
        $(this).parent().find(".subject__list").toggleClass("d-none subject__list_open");
        $(this).toggleClass("down_f");
    });
    $(document).ready(function () {
        function checkWidth() {
            var windowWidth = $("body").innerWidth(),
                elem = $(".subject__list_pr");
            elem2 = $(".subject__list_news"); // лучше сохранять объект в переменную, многократно чтобы не насиловать
            // страницу для поиска нужного элемента
            if (windowWidth < 1119) {
                elem.removeClass("drop");
                elem2.removeClass("drop");
            } else {
                elem.addClass("drop");
                elem2.addClass("drop");
            }
        }

        checkWidth(); // проверит при загрузке страницы

        $(window).resize(function () {
            checkWidth(); // проверит при изменении размера окна клиента
        });
    });
    //Search opener
    $(".search").click(function () {
        $(".search-forma").toggleClass("d-none order");
    });
    
    $("#resource_sort").on("change", function(){
        updateQueryStringParam("sort", $("#resource_sort").val());
    });
    
    var updateQueryStringParam = function (key, value) {
        var baseUrl = [location.protocol, '//', location.host, location.pathname].join(''),
            urlQueryString = document.location.search,
            newParam = key + '=' + value,
            params = '?' + newParam;

        // If the "search" string exists, then build params from it
        if (urlQueryString) {
            keyRegex = new RegExp('([\?&])' + key + '[^&]*');

            // If param exists already, update it
            if (urlQueryString.match(keyRegex) !== null) {
                params = urlQueryString.replace(keyRegex, "$1" + newParam);
            } else { // Otherwise, add it to end of query string
                params = urlQueryString + '&' + newParam;
            }
        }
        window.location.href=baseUrl + params;
    };
    //Slick rndomize
    $.fn.randomize = function (selector) {
    var $elems = selector ? $(this).find(selector) : $(this).children(),
        $parents = $elems.parent();

    $parents.each(function () {
        $(this).children(selector).sort(function (childA, childB) {
            // * Prevent last slide from being reordered
            if($(childB).index() !== $(this).children(selector).length - 1) {
                return Math.round(Math.random()) - 0.5;
            }
        }.bind(this)).detach().appendTo(this);
    });

      return this;
  };
    //Fade in slider
    $('.slider_fi').randomize().slick({
      dots: false,
      infinite: true,
      speed: 500,
      nav: false,
      arrows: false,
      fade: true,
      autoplay: true,
      cssEase: 'linear'
    });
    $('.slider_fi-mobile').randomize().slick({
      dots: false,
      infinite: true,
      speed: 500,
      nav: false,
      arrows: false,
      fade: true,
      autoplay: true,
      cssEase: 'linear'
    });
    $('.slider_fi-2').randomize().slick({
      dots: false,
      infinite: true,
      speed: 500,
      nav: false,
      arrows: false,
      fade: true,
      autoplay: true,
      cssEase: 'linear',
    });
    $('.career-gallery_3-1').randomize().slick({
      dots: false,
      infinite: true,
      speed: 700,
      nav: false,
      arrows: false,
      fade: true,
      autoplay: true,
      cssEase: 'linear'
    });
    $('.career-gallery_3-2').randomize().slick({
      dots: false,
      infinite: true,
      speed: 400,
      nav: false,
      arrows: false,
      fade: true,
      autoplay: true,
      cssEase: 'linear'
    });
    $('.career-gallery_3-3').randomize().slick({
      dots: false,
      infinite: true,
      speed: 600,
      nav: false,
      arrows: false,
      fade: true,
      autoplay: true,
      cssEase: 'linear'
    });
    $('.career-gallery_2-2').randomize().slick({
      dots: false,
      infinite: true,
      speed: 700,
      nav: false,
      arrows: false,
      fade: true,
      autoplay: true,
      cssEase: 'linear'
    });
    $('.career-gallery_2-1').randomize().slick({
      dots: false,
      infinite: true,
      speed: 800,
      nav: false,
      arrows: false,
      fade: true,
      autoplay: true,
      cssEase: 'linear'
    });
    $('.career-gallery_1-1').randomize().slick({
      dots: false,
      infinite: true,
      speed: 500,
      nav: false,
      arrows: false,
      fade: true,
      autoplay: true,
      cssEase: 'linear'
    });
    $('.career-gallery_1-2').randomize().slick({
      dots: false,
      infinite: true,
      speed: 800,
      nav: false,
      arrows: false,
      fade: true,
      autoplay: true,
      cssEase: 'linear'
    });
    $('.career-gallery_1-3').randomize().slick({
      dots: false,
      infinite: true,
      speed: 500,
      nav: false,
      arrows: false,
      fade: true,
      autoplay: true,
      cssEase: 'linear'
    });
    //ScrollBar
    new SimpleBar(document.getElementById('position__table__list'), {
        autoHide: false,
        scrollbarMinSize: 100
    });
    //Selector positions
    $(function() {
        $('.positions__select').styler();
    });
    $('#positions__select').on('change', function(e){
        $(e.currentTarget).closest('form').submit();
    });
});
