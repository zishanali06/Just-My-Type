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
let timer = 0;
let wrong = 0;
$('#target-letter').append(sentences[sentencecount].charCodeAt(charcount));
$(document).keypress(function (e) {
    let letter = e.keyCode;
    if (sentencecount == 0 && charcount == 0) {
        setInterval(function () {
            timer++;
        }, 1000);
    }
    $("#" + letter).addClass('highlight');
    let yesbutton = '<button id="yes">Yes</button>';
    let nobutton = '<button id="no">No</button>';
    if (letter == sentences[sentencecount].charCodeAt(charcount)) {
        $('#yellow-block').css('margin-left', margin + 'px');
        $('#feedback').append('<span class="glyphicon glyphicon-ok"></span>');
        charcount++;
        $('#target-letter').text(sentences[sentencecount].charAt(charcount));
        margin += 17;
        let checknewline = sentences[sentencecount].length;
        if (charcount == checknewline && sentencecount == (sentences.length - 1)) {
            let minutes = timer / 60;
            let score = 54 / minutes;
            let finalscore = score - 2 * wrong;
            $('#score').append("<p>" + finalscore + "</p>")
            $('#score').append("<h3>Would you Like to play Again?</h3>")
            $('#score').append(yesbutton);
            $('#score').append(nobutton);
            sentencecount = 0;
            charcount = 0;
            $('#yes').click(function () {
                location.reload();
                // $('#yellow-block').css('margin-left', '0px');
                // $('#feedback').empty();
                // $('#sentence').empty();
                // $('#sentence').append(sentences[sentencecount]);
            });
            $('#no').click(function () {
                alert("You can't be that scared!");
            });
        } else if (charcount > checknewline && sentencecount < sentences.length) {
            $('#feedback').empty();
            $('#sentence').empty();
            sentencecount++;
            $('#sentence').append(sentences[sentencecount]);
            charcount = 0;
            margin = 0;
            $('#yellow-block').css('margin-left', margin + 'px');
            console.log(sentencecount);
        }
    } else {
        $('#yellow-block').css('margin-left', margin + 'px');
        $('#feedback').append('<span class="glyphicon glyphicon-remove"></span>');
        charcount++;
        wrong++;
        $('#target-letter').text(sentences[sentencecount].charAt(charcount));
        margin += 17;
        let checknewline = sentences[sentencecount].length;
        if (charcount == checknewline && sentencecount == (sentences.length - 1)) {
            let minutes = timer / 60;
            let score = 54 / minutes;
            let finalscore = score - 2 * wrong;
            $('#score').append("<p>" + finalscore + "</p>")
            $('#score').append("<p>" + finalscore + "</p>")
            $('#score').append("<h3>Would you Like to play Again?</h3>")
            $('#score').append(yesbutton);
            $('#score').append(nobutton);
            sentencecount = 0;
            charcount = 0;
            $('#yes').click(function () {
                location.reload();
                // $('#yellow-block').css('margin-left', '0px');
                // $('#feedback').empty();
                // $('#sentence').empty();
                // $('#sentence').append(sentences[sentencecount]);
            });
            $('#no').click(function () {
                alert("You can't be that scared!");
            });
        } else if (charcount > checknewline && sentencecount < sentences.length) {
            $('#feedback').empty();
            $('#sentence').empty();
            sentencecount++;
            $('#sentence').append(sentences[sentencecount]);
            charcount = 0;
            margin = 0;
            $('#yellow-block').css('margin-left', margin + 'px');
            console.log(sentencecount);
        };
    };
    // console.log(sentences[sentencecount].charAt(charcount));
    // console.log(sentences[sentencecount].length);
    console.log(timer);

});
$(document).keyup(function () {
    $('.highlight').removeClass('highlight');
});



// if (charcount == checknewline && sentencecount == sentences.length) {
//     alert('You are done!');
// } else if(charcount > checknewline){
//     $('#feedback').empty();
//     $('#sentence').empty();
//     sentencecount++;
//     $('#sentence').append(sentences[sentencecount]);
//     charcount = 0;
//     margin = 0;
//     $('#yellow-block').css('margin-left', margin + 'px');
// }

// if (charcount > checknewline) {
//     $('#feedback').empty();
//     $('#sentence').empty();
//     sentencecount++;
//     $('#sentence').append(sentences[sentencecount]);
//     charcount = 0;
//     margin = 0;
//     $('#yellow-block').css('margin-left', margin + 'px');
// } else if(charcount == checknewline && sentencecount == sentences.length){
//     alert('You are done!');
// }
