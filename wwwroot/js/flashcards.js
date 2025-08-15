var script = document.createElement('script');
script.src = 'https://code.jquery.com/ui/1.13.3/jquery-ui.js';  
document.getElementsByTagName('head')[0].appendChild(script);


$( document ).ready(function() {



var cards=[
{id:0,
 question:'http://res.cloudinary.com/aliencharm/image/upload/v1494668181/Flashcards/js/JS_Q1.png',
 answer:'http://res.cloudinary.com/aliencharm/image/upload/v1494668173/Flashcards/js/JS_A1.png'},

{id:1,
 question:'http://res.cloudinary.com/aliencharm/image/upload/v1494668182/Flashcards/js/JS_Q2.png',
 answer:'http://res.cloudinary.com/aliencharm/image/upload/v1494668172/Flashcards/js/JS_A2.png'},

{id:2,
 question:'http://res.cloudinary.com/aliencharm/image/upload/v1494668182/Flashcards/js/JS_Q3.png',
 answer:'http://res.cloudinary.com/aliencharm/image/upload/v1494668175/Flashcards/js/JS_A3.png'},

{id:3,
 question:'http://res.cloudinary.com/aliencharm/image/upload/v1494668182/Flashcards/js/JS_Q4.png',
 answer:'http://res.cloudinary.com/aliencharm/image/upload/v1494668174/Flashcards/js/JS_A4.png'},

{id:4,
 question:'http://res.cloudinary.com/aliencharm/image/upload/v1494668182/Flashcards/js/JS_Q5.png',
 answer:'http://res.cloudinary.com/aliencharm/image/upload/v1494668173/Flashcards/js/JS_A5.png'},
{id:5,
 question:'http://res.cloudinary.com/aliencharm/image/upload/v1494668183/Flashcards/js/JS_Q6.png',
 answer:'http://res.cloudinary.com/aliencharm/image/upload/v1494668174/Flashcards/js/JS_A6.png'},

{id:6,
 question:'http://res.cloudinary.com/aliencharm/image/upload/v1494668183/Flashcards/js/JS_Q7.png',
 answer:'http://res.cloudinary.com/aliencharm/image/upload/v1494668173/Flashcards/js/JS_A7.png'},

{id:7,
 question:'http://res.cloudinary.com/aliencharm/image/upload/v1494668183/Flashcards/js/JS_Q8.png',
 answer:'http://res.cloudinary.com/aliencharm/image/upload/v1494668175/Flashcards/js/JS_A8.png'},

{id:8,
 question:'http://res.cloudinary.com/aliencharm/image/upload/v1494668184/Flashcards/js/JS_Q9.png',
 answer:'http://res.cloudinary.com/aliencharm/image/upload/v1494668175/Flashcards/js/JS_A9.png'},

 {id:9,
 question:'http://res.cloudinary.com/aliencharm/image/upload/v1494668183/Flashcards/js/JS_Q10.png',
 answer:'http://res.cloudinary.com/aliencharm/image/upload/v1494668176/Flashcards/js/JS_A10.png'},

{id:10,
 question:'http://res.cloudinary.com/aliencharm/image/upload/v1494668183/Flashcards/js/JS_Q11.png',
 answer:'http://res.cloudinary.com/aliencharm/image/upload/v1494668176/Flashcards/js/JS_A11.png'},

{id:11,
 question:'http://res.cloudinary.com/aliencharm/image/upload/v1494668184/Flashcards/js/JS_Q12.png',
 answer:'http://res.cloudinary.com/aliencharm/image/upload/v1494668176/Flashcards/js/JS_A12.png'},

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
