$(document).ready(function() {
   $('input[type="radio"]').click(function() {
       if($(this).attr('id') == 'new-business-wins-yes') {
            $('#new-business-wins-container').show();           
       }

       else {
            $('#new-business-wins-container').hide();   
       }
   });
});