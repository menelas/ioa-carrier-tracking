$(function() {
	$(document).on('click', 'a.add-carrier-row', function(e){
		e.preventDefault();
		var appended_row = $('#add-additional-carrier-container > .carrier-row').first().clone();

		// Clear all fields
		appended_row.find('input').val('');

		$(appended_row).appendTo('#add-additional-carrier-container');
		$(appended_row).find('.remove-carrier-row').removeClass('hidden');
		$(appended_row).find('.chosen-container-single').remove();
		$('html, body').animate({ scrollTop: $("#add-additional-carrier-container .carrier-row:last-child").offset().top }, 1000);
		$(appended_row).find('.other-carrier').addClass('hidden');
		$(appended_row).find('textarea').val("");
		appended_row.find('.carrier').css({ display: 'block' }).chosen();
        $('div.chosen-container-multi')[$('div.chosen-container-multi').length - 1].remove();
        var otherCarrier = appended_row.parent().parent().parent().parent().find('.other-coverage')[appended_row.parent().parent().parent().parent().find('.other-coverage').length -1];    
        otherCarrier = $(otherCarrier);
		otherCarrier.removeClass('d-block').addClass('hidden');
		appended_row.find('.coverages-selected').css({ display: 'block' }).chosen();
        var containerM = appended_row.find('.chosen-container-multi')[0];
        containerM.setAttribute('style','width:100%');
	});

	$(document).on('click', 'a.remove-carrier-row', function() {
		$(this).closest('.carrier-row').remove();

		return false;
	});
    var otherIsSelected = false;
	//Submitter Role
	$(document).on('change', '#submitterRole', function() {
		var value = $('#submitterRole option:selected').text();
		var otherSubmitterRole = $('#otherSubmitterRole');

		if(value === 'Other' ) {
			otherSubmitterRole.removeClass('hidden').addClass('d-block');
		} else {
			otherSubmitterRole.removeClass('d-block').addClass('hidden');
		}

		return false;
	});

	//Carriers Submitted To
	$(document).on('change', '.carrier-submitted', function() {
		
		var value = $(this).find('option:selected').text();
		var othercarrierSubmitted = $(this).parent().parent().parent().parent().find('.other-carrier');
		if(value === 'Other' ) {
			othercarrierSubmitted.removeClass('hidden').addClass('d-block');
		} else {
			othercarrierSubmitted.removeClass('d-block').addClass('hidden');
		}

		return false;
	});

	//Coverages 
	$(document).on('change', '.coverages-selected', function() {
		
		var value = $(this).find('option:selected').text();
		var othercarrierSubmitted = $(this).parent().parent().parent().parent().find('.other-coverage');
		if(value.search('Other') != -1) {
			othercarrierSubmitted.removeClass('hidden').addClass('d-block');
            otherIsSelected = true;
		} else if(otherIsSelected == false){
			othercarrierSubmitted.removeClass('d-block').addClass('hidden');
		}
        if(value == ''){
			othercarrierSubmitted.removeClass('d-block').addClass('hidden');            
        }
		return false;
	});

    $('.chosen-select-width').chosen();
});
