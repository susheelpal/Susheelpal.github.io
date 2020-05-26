$(document).ready(function () {

  $('.skills-bar-container li').each(function () {

    var $barContainer = $(this).find('.bar-container');
    var dataPercent = parseInt($barContainer.data('percent'));
    var elem = $(this).find('.progressbar');
    var percent = $(this).find('.percent');
    var width = 0;

    var id = setInterval(frame, 15);

    function frame() {
      if (width >= dataPercent) {
        clearInterval(id);
      } else {
        width++;
        elem.css("width", width + "%");
        percent.html(width + " %");
      }
    }
  });
  developmentIsVisible = true;
});