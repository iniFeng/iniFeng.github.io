"use strict";function scrollToElement(o,n){var t=$(o).offset();$("body,html").animate({scrollTop:t.top+(n||0),easing:"swing"})}function debounce(a,r,l){var s;return function(){var o=this,n=arguments,t=l&&!s;clearTimeout(s),s=setTimeout(function(){s=null,l||a.apply(o,n)},r),t&&a.apply(o,n)}}function navbarScrollEvent(){var o=$("#navbar");0<o.offset().top&&(o.addClass("navbar-custom"),o.removeClass("navbar-dark")),$(window).scroll(debounce(function(){$(".scrolling-navbar")[50<o.offset().top?"addClass":"removeClass"]("top-nav-collapse"),0<o.offset().top?(o.addClass("navbar-custom"),o.removeClass("navbar-dark")):o.addClass("navbar-dark")},20)),$("#navbar-toggler-btn").on("click",function(){$(".animated-icon").toggleClass("open"),$("#navbar").toggleClass("navbar-col-show")})}function parallaxEvent(){function o(){var o=$(window).scrollTop()/5,n=96+parseInt($("#board").css("margin-top"),0);n<o&&(o=n),t.css({transform:"translate3d(0,"+o+"px,0)","-webkit-transform":"translate3d(0,"+o+"px,0)","-ms-transform":"translate3d(0,"+o+"px,0)","-o-transform":"translate3d(0,"+o+"px,0)"}),$("#toc")&&$("#toc-ctn").css({"padding-top":o+"px"})}var t=$('#background[parallax="true"]');0<t.length&&(o(),$(window).scroll(o))}function scrollDownArrowEvent(){$(".scroll-down-bar").on("click",function(){scrollToElement("#board",-$("#navbar").height())})}function scrollTopArrowEvent(){var t,a,o,n,r=$("#scroll-top-button");r&&(a=t=!1,(o=function(){var o=document.getElementById("board").getClientRects()[0].right,n=document.body.offsetWidth-o;t=50<=n,r.css({bottom:t&&a?"20px":"-60px",right:n-64+"px"})})(),$(window).resize(o),n=$("#board").offset().top,$(window).scroll(debounce(function(){var o=document.body.scrollTop+document.documentElement.scrollTop;a=n<=o,r.css({bottom:t&&a?"20px":"-60px"})},20)),r.on("click",function(){$("body,html").animate({scrollTop:0,easing:"swing"})}))}$(document).ready(function(){navbarScrollEvent(),parallaxEvent(),scrollDownArrowEvent(),scrollTopArrowEvent()});