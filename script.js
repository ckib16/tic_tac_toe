/* global $ */

$(document).ready(function () {
  var totalNumberOfTurns = 8
  for (var playCount = 0; playCount < totalNumberOfTurns; playCount++) {
    $('.square').on('click', function (evt) {
      if ($(this).hasClass('red' || 'blue')) {
        // alert('that square has already been taken!')
        return
      } else if (!$(this).hasClass('red') === true) {
        $(this).addClass('red')
        // $(this).append('<h1>X</h1')
      } else if (!$(this).hasClass('blue') === true) {
        $(this).addClass('blue')
      }
    })
    $('button').on('click', function (evt) {
      $('.square').removeClass('red')
      // console.log($('h1'))
      $('.square').detach('h1')
    })
  }
})

// playCount = 0
// for playCount <= 8
  // if playCount == odd
    // Alert Blue Player turn
    // toggle blue
  // if playCount == even
    // Alert red player turn
    // toggle red
  // increment playCount
// this.text
