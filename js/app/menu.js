

$(document).ready(function(){
  $('.dropdown-submenu a.menu-item').on("click", function(e){
    $(this).next('ul').toggle();
    e.stopPropagation();
    e.preventDefault();
  });
});

    $(document).ready(function(){
      $(".menu-item").click(function(){
        $(this).toggleClass("active");
      });
    });
