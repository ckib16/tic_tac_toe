/* global $ */

$(document).ready(function () {
  $('.square').on('click', function (evt) {
    $(this).toggleClass('red')
  })
})
