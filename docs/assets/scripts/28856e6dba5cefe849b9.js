/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

$(document).ready(function() {

    $(".fa-search").click(function() {
        $(".container__find, .input").toggleClass("active");
        $("input[type='text']").focus();
    });

});

var instance = M.Tabs.init(el, options);

// Or with jQuery

$(document).ready(function() {
    $('.tabs').tabs();
});

var h_hght = 150; // высота шапки
var h_mrg = 0; // отступ когда шапка уже не видна

$(function() {

    var elem = $('.menu-block');
    var top = $(this).scrollTop();

    if (top > h_hght) {
        elem.css('top', h_mrg);
    }

    $(window).scroll(function() {
        top = $(this).scrollTop();

        if (top + h_mrg < h_hght) {
            elem.css('top', (h_hght - top));
        } else {
            elem.css('top', h_mrg);
        }
    });

});
var scrollMenu = (function() {
    var $news = $('.menu-block'),
        $item = $('.list__item'),
        $wrapMenu = $('.js-blog-inner'),
        body = document.body,
        isPositionArticle = [],
        offsetHeight = 200,

        positionArticle = function(element) {
            var len = element.length;
            for (var i = 0; i < len; i++) {
                isPositionArticle[i] = {};
                isPositionArticle[i].top = element
                    .eq(i)
                    .offset()
                    .top - offsetHeight;
                isPositionArticle[i].bottom = isPositionArticle[i].top + element
                    .eq(i)
                    .innerHeight();
            }
        },

        scrollPageFixMenu = function() {
            var scroll = window.pageYOffset;
            if (scroll < $news.offset().top) {
                $wrapMenu.removeClass('fixed');
            } else {
                $wrapMenu.addClass('fixed');
            }
        },

        

        addListener = function() {
            $('.js-blog-nav').on('click', clickOnMenu);

            $(document).on('scroll', scrollPage);
            $(document).on('scroll', scrollPageFixMenu);

            $(window).on('load', function(e) {
                positionArticle($news);
            });

            $(window).on('resize', function(e) {
                positionArticle($news);
            });

            $('.l-news-menu__handler').on('click', function(e) {
                e.preventDefault();
                $(this).parents('.l-news-menu').toggleClass('blocked');
            });
        };

    return {
        init: addListener
    }
}());

/***/ })
/******/ ]);