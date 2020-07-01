$(document).ready(function(){
    $(".fa-plus-circle").click(function(){
		$(this).hide();
		$(this).siblings(".fa-minus-circle").show();
		var colClass = $(this).attr("data-car-class");
		$("."+colClass).show();
	});
	$(".fa-minus-circle").click(function(){
		$(this).hide();
		$(this).siblings(".fa-plus-circle").show();
		var colClass = $(this).attr("data-car-class");
		$("."+colClass).hide();
	});
});