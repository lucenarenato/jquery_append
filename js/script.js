// Add your javascript here
$(function(){
  var wrapper = $(".input_fields_wrap"); 
    var add_button = $(".add_field_button");


    $(add_button).click(function(e){ 
        e.preventDefault();

            var append1 = $(wrapper).append('<div class="new-elemnt"><input type="text" name="mytext[]"/><button class="add_field_button1">+</button><button class="remove_field">-</button></div>'); 
        $(".add_field_button").hide();

    });

    $(wrapper).on("click",".remove_field", function(){ 

    $(this).parent('div').remove();
      if($( ".add_field_button" ).next( ".new-elemnt" ).length <= 0)
      $(".add_field_button").show();
          
    })
    $(wrapper).on("click",".add_field_button1", function(){ 

        $("#inputfield").append('<div class="new-elemnt"><input type="text" name="mytext[]"/><button class="add_field_button">+</button><button class="remove_field">-</button></div>'); 

    })
});
