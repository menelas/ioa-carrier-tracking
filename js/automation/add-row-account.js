$(function() {

        $(document).on('click', 'a.add-account-row', function(e){
            e.preventDefault();
                        
            var appended_row = $('#add-additional-account-container > .carrier-row').first().clone();
            
            // Clear all fields
            appended_row.find('input').val('');
    
            $(appended_row).appendTo('#add-additional-account-container');
            $(appended_row).find('.otherprospecting-strategy').addClass('hidden');
            $(appended_row).find('.other-industry').addClass('hidden');
            $(appended_row).find('.textarea').val("");
            $(appended_row).find('.remove-account-row').removeClass('hidden');
            $(appended_row).find('.chosen-container-single').remove();
            $('html, body').animate({ scrollTop: $("#add-additional-account-container .carrier-row:last-child").offset().top }, 1000);
            $(".chosen-select-width").chosen()
            appended_row.find('.carrier').css({ display: 'block' }).chosen();
            $('#add-additional-account-container .carrier-row').last().removeClass('hidden');
        });     
    
    $(document).on('click', 'a.remove-account-row', function() {
        $(this).closest('.carrier-row').remove();
        return false;
    });

//Prospecting Strategy
    $(document).on('change', '.prospectingStrategy', function() {
        var value = $(this).find('option:selected').text();
        var otherprospectingStrategy = $(this).parent().parent().find('.otherprospecting-strategy');

        if(value === 'Other' ) {
            otherprospectingStrategy.removeClass('hidden').addClass('d-block');
        } else {
            otherprospectingStrategy.removeClass('d-block').addClass('hidden');
        }

        return false;
    });

//Industries

    $(document).on('change', '.industry', function() {
        var value = $(this).find('option:selected').text();
        var otherIndustry = $(this).parent().parent().find('.other-industry');
        if(value === 'Other' ) {
            otherIndustry.removeClass('hidden').addClass('d-block');
        } else {
            otherIndustry.removeClass('d-block').addClass('hidden');
        }
        return false;
    });
});