let sentences = ['ten ate neite ate nee enet ite ate inet ent eate', 'Too ato too nOt enot one totA not anot tOO aNot', 'oat itain oat tain nate eate tea anne inant nean', 'itant eate anot eat nato inate eat anot tain eat', 'nee ene ate ite tent tiet ent ine ene ete ene ate'];
let sentencecount = 0;
let charcount = 0;

$(document).ready(function () {
    $('#keyboard-upper-container').css("display", "none");
    $('#sentence').append(sentences[sentencecount]);
    $('#target-letter').append(sentences[sentencecount].charAt(charcount));
});
//use shiftkey to show the right keyboard
$(document).keydown(function (e) {
    if (e.shiftKey == true) {
        $('#keyboard-upper-container').css("display", "block");
        $('#keyboard-lower-container').css("display", "none");
    }
});

$(document).keyup(function (e) {
    if (e.shiftKey == false) {
        $('#keyboard-upper-container').css("display", "none");
        $('#keyboard-lower-container').css("display", "block");
    }
});


//highlight letter that is pressed and see if it is the right key
let margin = 16;
$('#target-letter').append(sentences[sentencecount].charCodeAt(charcount));
$(document).keypress(function (e) {
    let letter = e.keyCode;
    $("#" + letter).addClass('highlight');
    if(letter == sentences[sentencecount].charCodeAt(charcount)){
        $('#yellow-block').css('margin-left', margin + 'px');
        $('#feedback').append('<span class="glyphicon glyphicon-ok"></span>');
        charcount++;
        $('#target-letter').text(sentences[sentencecount].charAt(charcount));
        margin+=18;
        let checknewline = sentences[sentencecount].length;
        if(charcount > checknewline){
            $('#feedback').empty();
        };
    }else{
        $('#yellow-block').css('margin-left', margin + 'px');
        $('#feedback').append('<span class="glyphicon glyphicon-remove"></span>');
        charcount++;
        $('#target-letter').text(sentences[sentencecount].charAt(charcount));
        margin+=18;
        let checknewline = sentences[sentencecount].length;
        if(charcount > checknewline){
            $('#feedback').empty();
            $('#sentence').empty();
            sentencecount++;
            $('#sentence').append(sentences[sentencecount]);
            charcount = 0;
            margin = 0;
            $('#yellow-block').css('margin-left', margin + 'px');
        };
    };
    console.log(sentences[sentencecount].charAt(charcount));
    console.log(sentences[sentencecount].length);
});
$(document).keyup(function () {
    $('.highlight').removeClass('highlight');
});
