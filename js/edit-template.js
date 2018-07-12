$( function() {
    $( ".sortable, .sortable2" ).sortable({
        cancel: ".ui-state-disabled"
    });
    $( ".sortable, .sortable2" ).disableSelection();
    $("#add-new-tpl-btn").click(function(){
        var newColumnName = $("#newColumnName").val();
        if(newColumnName){
            $(".list-addable").prepend('<li class="list-group-item ui-sortable-handle">'+newColumnName+'</li>');
        }else{
            alert("The name can not be empty.");
        }
    });
    $(".add-new-tpl-form").keypress(function(event){
        var keycode = (event.keyCode ? event.keyCode : event.which);
        if(keycode == '13'){
            event.preventDefault();
            var newColumnName = $("#newColumnName").val();
            if(newColumnName){
                $(".list-addable").prepend('<li class="list-group-item ui-sortable-handle">'+newColumnName+'</li>');
            }else{
                alert("The name can not be empty.");
            }
        }
    });
    $(".move-right, .move-left").click(function(){
        $(".dual-list .list-group").each(function(){
            var liCount = $(this).children("li").length;
            var noData = $(this).children(".no-data").length;
            if( parseInt(liCount) > 0 ){
                $(this).children('.no-data').remove();
            }else{
                if( parseInt(noData) == 0 ){
                    $(this).append('<span class="no-data ui-state-disabled">No data to display.</span>');
                }
            }
        });
    });
} );