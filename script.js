/* global $ */

$(document).ready(function () {
  $('.square').on('click', function (evt) {
    $(this).toggleClass('red')
  })
  $('button').on('click', function (evt) {
    $('.square').removeClass('red')
  })
})
