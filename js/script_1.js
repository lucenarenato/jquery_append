$(document).ready(function() {
    var max_fields      = 10; //maximum input boxes allowed
    var wrapper         = $(".input_fields_wrap"); //Fields wrapper    
    var x = 1; //initlal text box count
    
    $('body').on("click",".add_field_button", function(e){
        e.preventDefault();
        if(x < max_fields){ //max input box allowed
            x++; //text box increment
            $(".add_field_button").hide();
           
           $(wrapper).append('<div> <button id='+x+' class="add_field_button"> Add More Fields </button> <input type="text" name="mytext[]"/><a href="#" class="remove_field">Remove</a></div>'); //add input box
           
            $("#"+x).show();
        }
    });
    
    $(wrapper).on("click",".remove_field", function(e){ //user click on remove text
        e.preventDefault(); $(this).parent('div').remove(); x--;
        $("#"+x).show();
    })
});
