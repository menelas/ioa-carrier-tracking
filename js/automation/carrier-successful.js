$(document).ready(function(){
    $('input[type="radio"]').click(function(){
		var inputValue = $(this).attr("value");	
		console.log('inputValue', inputValue);
        var targetBox = $(this).parents(".form-group").siblings(".targetPremium");
		if(inputValue == "Yes"){
			targetBox.show();
		}
		else
			targetBox.hide();
    });
});