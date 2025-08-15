var script = document.createElement('script');
script.src = 'https://code.jquery.com/ui/1.13.3/jquery-ui.js';  
document.getElementsByTagName('head')[0].appendChild(script);


$( document ).ready(function() {



var cards=[
{id:0,
 question:'https://drive.google.com/file/d/1Am48MtruzhgrePwtH6KhbP5M-6gj2p0G/view?usp=drive_link',
 answer:'https://drive.google.com/file/d/1Fj4MVlgzuh5ltbuIx2qusfqlYo1QmbXl/view?usp=drive_link'},

{id:1,
 question:'https://drive.google.com/file/d/1Am48MtruzhgrePwtH6KhbP5M-6gj2p0G/view?usp=drive_link',
 answer:'https://drive.google.com/file/d/1Fj4MVlgzuh5ltbuIx2qusfqlYo1QmbXl/view?usp=drive_link'},

{id:2,
 question:'https://drive.google.com/file/d/1Am48MtruzhgrePwtH6KhbP5M-6gj2p0G/view?usp=drive_link',
 answer:'https://drive.google.com/file/d/1Fj4MVlgzuh5ltbuIx2qusfqlYo1QmbXl/view?usp=drive_link'},
{id:3,
 question:'https://drive.google.com/file/d/1Am48MtruzhgrePwtH6KhbP5M-6gj2p0G/view?usp=drive_link',
 answer:'https://drive.google.com/file/d/1Fj4MVlgzuh5ltbuIx2qusfqlYo1QmbXl/view?usp=drive_link'},

{id:4,
 question:'https://drive.google.com/file/d/1Am48MtruzhgrePwtH6KhbP5M-6gj2p0G/view?usp=drive_link',
 answer:'https://drive.google.com/file/d/1Fj4MVlgzuh5ltbuIx2qusfqlYo1QmbXl/view?usp=drive_link'},
{id:5,
 question:'https://drive.google.com/file/d/1Am48MtruzhgrePwtH6KhbP5M-6gj2p0G/view?usp=drive_link',
 answer:'https://drive.google.com/file/d/1Fj4MVlgzuh5ltbuIx2qusfqlYo1QmbXl/view?usp=drive_link'},

{id:6,
 question:'https://drive.google.com/file/d/1Am48MtruzhgrePwtH6KhbP5M-6gj2p0G/view?usp=drive_link',
 answer:'https://drive.google.com/file/d/1Fj4MVlgzuh5ltbuIx2qusfqlYo1QmbXl/view?usp=drive_link'},

{id:7,
 question:'https://drive.google.com/file/d/1Am48MtruzhgrePwtH6KhbP5M-6gj2p0G/view?usp=drive_link',
 answer:'https://drive.google.com/file/d/1Fj4MVlgzuh5ltbuIx2qusfqlYo1QmbXl/view?usp=drive_link'},

{id:8,
 question:'https://drive.google.com/file/d/1Am48MtruzhgrePwtH6KhbP5M-6gj2p0G/view?usp=drive_link',
 answer:'https://drive.google.com/file/d/1Fj4MVlgzuh5ltbuIx2qusfqlYo1QmbXl/view?usp=drive_link'},

 {id:9,
 question:'https://drive.google.com/file/d/1Am48MtruzhgrePwtH6KhbP5M-6gj2p0G/view?usp=drive_link',
 answer:'https://drive.google.com/file/d/1Fj4MVlgzuh5ltbuIx2qusfqlYo1QmbXl/view?usp=drive_link'},

{id:10,
 question:'https://drive.google.com/file/d/1Am48MtruzhgrePwtH6KhbP5M-6gj2p0G/view?usp=drive_link',
 answer:'https://drive.google.com/file/d/1Fj4MVlgzuh5ltbuIx2qusfqlYo1QmbXl/view?usp=drive_link'},

{id:11,
 question:'https://drive.google.com/file/d/1Am48MtruzhgrePwtH6KhbP5M-6gj2p0G/view?usp=drive_link',
 answer:'https://drive.google.com/file/d/1Fj4MVlgzuh5ltbuIx2qusfqlYo1QmbXl/view?usp=drive_link'},

{id:12,
 question:'http://res.cloudinary.com/aliencharm/image/upload/v1494668184/Flashcards/js/JS_Q13.png',
 answer:'http://res.cloudinary.com/aliencharm/image/upload/v1494668176/Flashcards/js/JS_A13.png'},

{id:13,
 question:'http://res.cloudinary.com/aliencharm/image/upload/v1494668184/Flashcards/js/JS_Q14.png',
 answer:'http://res.cloudinary.com/aliencharm/image/upload/v1494668178/Flashcards/js/JS_A14.png'},

{id:14,
 question:'http://res.cloudinary.com/aliencharm/image/upload/v1494668185/Flashcards/js/JS_Q15.png',
 answer:'http://res.cloudinary.com/aliencharm/image/upload/v1494668177/Flashcards/js/JS_A15.png'},

{id:15,
 question:'http://res.cloudinary.com/aliencharm/image/upload/v1494668184/Flashcards/js/JS_Q16.png',
 answer:'http://res.cloudinary.com/aliencharm/image/upload/v1494668171/Flashcards/js/JS_A16.png'},

{id:16,
 question:'http://res.cloudinary.com/aliencharm/image/upload/v1494668187/Flashcards/js/JS_Q17.png',
 answer:'http://res.cloudinary.com/aliencharm/image/upload/v1494668171/Flashcards/js/JS_A17.png'},

{id:17,
 question:'http://res.cloudinary.com/aliencharm/image/upload/v1494668185/Flashcards/js/JS_Q18.png',
 answer:'http://res.cloudinary.com/aliencharm/image/upload/v1494668170/Flashcards/js/JS_A18.png'},

{id:18,
 question:'http://res.cloudinary.com/aliencharm/image/upload/v1494668185/Flashcards/js/JS_Q19.png',
 answer:'http://res.cloudinary.com/aliencharm/image/upload/v1494668171/Flashcards/js/JS_A19.png'},

{id:19,
 question:'http://res.cloudinary.com/aliencharm/image/upload/v1494668181/Flashcards/js/JS_Q1.png',
 answer:'http://res.cloudinary.com/aliencharm/image/upload/v1494668172/Flashcards/js/JS_A20.png'},

{id:20,
 question:'',
 answer:'http://res.cloudinary.com/aliencharm/image/upload/v1494668172/Flashcards/js/JS_A20.png'}

];
/*for (var i=0;i<cards.length;i++) {
var randomcard = Math.floor(Math.random() * cards.id);
console.log(randomcard);

}*/


var ran;
ran= Math.round(Math.random()*20);
/*var blindcard=cards[20].question;
    var el=document.getElementById('card');
    //el[0].classList.add('img-responsive');//+=' flashtext';
    el.src=blindcard;
*/
    $('.flashcard').hide();
    $('#checkanswer').show();
 var displaycard=cards[ran].question;
    var el=document.getElementById('card');
    el.src=displaycard;


$('#question').on('click',function(){

    ran= Math.round(Math.random()*20);

    //console.log(ran);

    var displaycard=cards[ran].question;
    var el=document.getElementById('card');
    el.src=displaycard;

    $('.flashcard').show();
    $('.flashcard').effect("bounce",{ times: 3 },"slow");
    $('#checkanswer').show();
    });

    $('#question').on("mousedown",function(){
            $('#question').css("background-color","#f2551d");
    });
    $('#question').on("mouseleave",function(){
            $('#question').css("background-color","orange");
    });
    $('#question').on("mouseenter",function(){
            $('#question').css("background-color","#f2551d");
        });


$('#checkanswer').on('click',function(){

    var displayanswer=cards[ran].answer;
    var el1=document.getElementById('card');
    el1.src=displayanswer;

    $('.flashcard').show();
    $('.flashcard').effect("bounce",{ times: 3 },"slow");

    });

    $('#checkanswer').on("mousedown",function(){
            $('#checkanswer').css("background-color","#f2551d");
    });
    $('#checkanswer').on("mouseleave",function(){
            $('#checkanswer').css("background-color","orange");
    });
    $('#checkanswer').on("mouseenter",function(){
            $('#checkanswer').css("background-color","#f2551d");
        });


})
