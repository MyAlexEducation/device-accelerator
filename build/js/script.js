'use strict';

var overlay = document.querySelector('.overlay');
var feedbackPopup = document.querySelector('.modal-feedback');
var feedbackPopupOpen = document.querySelector('.feedback-popup-open');
var feedbackPopupClose = document.querySelector('.modal-feedback__close');

feedbackPopupOpen.addEventListener('click', function () {
  feedbackPopup.classList.remove('no-display');
  overlay.classList.remove('no-display');
});

feedbackPopupClose.addEventListener('click', function () {
  feedbackPopup.classList.add('no-display');
  overlay.classList.add('no-display');
});

overlay.addEventListener('click', function () {
  feedbackPopup.classList.add('no-display');
  overlay.classList.add('no-display');
});

var pageHeader = document.querySelector('.page-header');
var headerToggle = document.querySelector('.page-header__toggle');

pageHeader.classList.remove('page-header--nojs');

headerToggle.addEventListener('click', function () {
  if (pageHeader.classList.contains('page-header--closed')) {
    pageHeader.classList.remove('page-header--closed');
    pageHeader.classList.add('page-header--opened');
  } else {
    pageHeader.classList.add('page-header--closed');
    pageHeader.classList.remove('page-header--opened');
  }
});
