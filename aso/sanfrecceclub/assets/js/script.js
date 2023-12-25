function headerFixed() {
    // Select all links with hashes
    $(document).ready(function () {
        var headerHeight = $(".header").height();
        // console.log(headerHeight);
        $(".main").css("margin-top", headerHeight);
    });
        // });
}

$(function() {
    var topBtn = $('#pagetop');
    topBtn.hide();
    //スクロールが100に達したらボタン表示
    $(window).scroll(function () {
        if ($(this).scrollTop() > 150) {
            topBtn.fadeIn();
        } else {
            topBtn.fadeOut();
        }
    });
    //スクロールしてトップ
    topBtn.click(function (e) {
        e.preventDefault();
        $('body,html').animate({
            scrollTop: 0
        }, 200);
    });
});

// jQuery(function($){
// var current_menu = function(){
//   $("#js-nav>ul>li>a").each(function(){ 
//     var $this = $(this),
//         pageURL = location.href, 
//         menuURL = $this.attr("href");

//         console.log(pageURL);
//         console.log(indexOf(menuURL));

//     if ( pageURL.indexOf(menuURL) !== -1 ) {
//       $this.addClass("current"); 
//     } else {
//       $this.removeClass("current");
//     }
//   });
// };

// current_menu();

// $(document).ajaxComplete(current_menu); 

// $(document).on("click", "#js-nav>ul>li>a", function(){
//   setTimeout(function(){
//     current_menu();
//   },200);
// });

// });

// var current_menu = function(){
//     const navLinkEls = document.querySelectorAll(".nav_link");
//     const windowPathname = window.location.pathname;

//     navLinkEls.forEach(navLinkEl => {
//         if(navLinkEl.href.includes(windowPathname)) {
//             navLinkEl.classList.toggle("current");
//         }
//     });
//   }

const navIcon = document.getElementById("js-navIcon");
const nav = document.getElementById("js-nav");
const navLinks = document.querySelectorAll(".js-navLink");

const toggleNavigation = () => {
    const navIcon = document.getElementById("js-navIcon");
    const nav = document.getElementById("js-nav");
    const navLinks = document.querySelectorAll(".js-navLink");
    navIcon.addEventListener("click", () => {
        navIcon.classList.toggle("active");
        nav.classList.toggle("active");
    });

    navLinks.forEach((navLink) => {
        const navIcon = document.getElementById("js-navIcon");
        const nav = document.getElementById("js-nav");
        const navLinks = document.querySelectorAll(".js-navLink");
        navLink.addEventListener("click", () => {
            navIcon.classList.remove("active");
            nav.classList.remove("active");
        });
    });
};

$(document).ready(function() {
    headerFixed();
    toggleNavigation();
    // current_menu();

});
    