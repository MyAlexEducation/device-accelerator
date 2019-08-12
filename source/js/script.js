'use strict';

var overlay = document.querySelector('.overlay');
var feedbackPopup = document.querySelector('.modal-feedback');
var feedbackPopupOpen = document.querySelector('.feedback-popup-open');
var feedbackPopupClose = document.querySelector('.modal-feedback__close');

feedbackPopupOpen.addEventListener('clic', function () {
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
