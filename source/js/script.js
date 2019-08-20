'use strict';

var overlay = document.querySelector('.overlay');
var feedbackPopup = document.querySelector('.modal-feedback');
var feedbackPopupOpen = document.querySelector('.js-feedback-popup-open');
var feedbackPopupClose = document.querySelector('.modal-feedback__close');

var siteNavList = document.querySelector('.site-nav__list');
var siteNavSwith = document.querySelector('.site-nav__switch');

var contactsOfficeText = document.querySelector('.contacts-office__text');
var contactsOfficeSwith = document.querySelector('.contacts-office__switch');

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

if (siteNavList.classList.contains('site-nav__list--no-js')) {
  siteNavList.classList.remove('site-nav__list--no-js');
}

siteNavSwith.addEventListener('click', function () {
  siteNavSwith.classList.toggle('site-nav__switch--close');
  siteNavList.classList.toggle('site-nav__list--close');
});

if (contactsOfficeText.classList.contains('contacts-office__text--no-js')) {
  contactsOfficeText.classList.remove('contacts-office__text--no-js');
}

contactsOfficeSwith.addEventListener('click', function () {
  contactsOfficeSwith.classList.toggle('contacts-office__switch--close');
  contactsOfficeText.classList.toggle('contacts-office__text--close');
});
