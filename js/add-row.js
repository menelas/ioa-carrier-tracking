$(function() {
	$(document).on('click', 'a.add-carrier-row', function(e){
		e.preventDefault();
		var appended_row = $('#add-additional-carrier-container > .carrier-row').first().clone();

		// Clear all fields
		appended_row.find('input').val('');

		$(appended_row).appendTo('#add-additional-carrier-container');
		$(appended_row).find('.remove-carrier-row').removeClass('hidden');
		$(appended_row).find('.chosen-container-single').remove();

		appended_row.find('.carrier').css({ display: 'block' }).chosen();

	});

	$(document).on('click', 'a.remove-carrier-row', function() {
		$(this).closest('.carrier-row').remove();

		return false;
	});

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
});