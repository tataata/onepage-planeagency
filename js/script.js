/* 

Author: Tania Abanina 
Web: http://taniaabanina.com

*/

$(document).ready(function() {

  $(".input")
  .focus(function () {
    $(this).prev("label").removeClass("show").addClass("hide");
  })
  .blur(function() {
    if ($(this).val() === '') {
      $(this).prev("label").addClass("show").removeClass("hide");
    }
  });

});





