$(document).ready(function(){
    $('#keyboard-upper-container').css("display", "none");
});
//use shiftkey to show the right keyboard
$(document).keydown(function(e){
    if (e.shiftKey == true) {
        $('#keyboard-upper-container').css("display", "block");
        $('#keyboard-lower-container').css("display", "none");
      }
});

$(document).keyup(function(e){
    if (e.shiftKey == false) {
        $('#keyboard-upper-container').css("display", "none");
        $('#keyboard-lower-container').css("display", "block");
      }
});

//highlight letter that is pressed
$(document).keypress(function(e){
    let letter = e.keyCode;
    $("#"+ letter).css('background-color', 'yellow');
    console.log('keypress' + letter);
    $(document).keyup(function(e){
        console.log('keyup' + letter);
        $("#"+ letter).css('background-color', '#f5f5f5');
    });
});

$(document).keyup(function(e){
    
    let letter2 = e.keyCode;
    console.log('keyup' + letter2);
    $("#"+ letter2).css('background-color', '#f5f5f5');
});