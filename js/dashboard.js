$(function () {
	
    "use strict";
	
	$("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
    });
     $("#menu-toggle-2").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled-2");
        $('#menu ul').hide();
    });
 
     function initMenu() {
      $('#menu ul').hide();
      $('#menu ul').children('.current').parent().show();
      //$('#menu ul:first').show();
      $('#menu li a').click(
        function() {
          var checkElement = $(this).next();
			if((checkElement.is('ul')) && (checkElement.is(':visible'))) {	
            return false;
            }
          if((checkElement.is('ul')) && (!checkElement.is(':visible'))) {
            $('#menu ul:visible').slideUp('normal');
            checkElement.slideDown('normal');
            return false;
            }
          }
        );
      }
    $(document).ready(function() {initMenu();});
	
	$('.W1').on('click',function(e){
		e.preventDefault();
		console.log('clicked');
		$('.widget').hide();
		setTimeout(function(){
			$('.widget1').show();
			$('.widget1 .progress').addClass('activeWidget');
		},10);
	});
	
	$('.W2').on('click',function(e){
		e.preventDefault();
		$('.widget').hide();
		setTimeout(function(){
			$('.widget2').show();
			$('.widget2 .progress').addClass('activeWidget');
		},10);
	});
	$('.W3').on('click',function(e){
		e.preventDefault();
		$('.widget').hide();
		setTimeout(function(){
			$('.widget3').show();
			$('.widget3 .progress').addClass('activeWidget');
		},10);
	});
	
	
	
});