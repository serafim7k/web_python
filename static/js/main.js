var answer_1 = document.getElementById('answer_1');
var answer_2 = document.getElementById('answer_2');
var answer_3 = document.getElementById('answer_3');
var answer_4 = document.getElementById('answer_4');
var answer_5 = document.getElementById('answer_5');
var answer_6 = document.getElementById('answer_6');
var answer_7 = document.getElementById('answer_7');
var answer_8 = document.getElementById('answer_8');
var answer_9 = document.getElementById('answer_9');
var answer_10 = document.getElementById('answer_10');
var True = true;
var False = false;

let questions = []
let points_score = 0;
let points = document.getElementById('text');
let send_poits = document.getElementById('btn');
function func(){
  // points_score = 11;
  points.value = parseInt(points_score);
}
send_poits.addEventListener('click', func);


$(".menu a, .go-top").on("click", function (event){
  event.preventDefault();
  var id = $(this).attr('href'),
  top = $(id).offset().top;
  $('body,html').animate({scrollTop: top}, 500);
});

// $('#answer_1_true').on('click', function() {
//   $('#answer_1_true').addClass('input--active');
// })


//11111111111111111//////////////////////////////////////////////////////////////

function its_false(param) {
  if (answer_1 == True) {
    False = True;
  }
  else{
    True = False;
  }

  if (questions.includes(1) != true){
    $('#answer_1_false').addClass('input--active');
  }
  questions.push(1);
  param.innerHTML = False;
}

function its_true(param) {
  if (answer_1 == False) {
    True = False;
  }
  else{
    False = True;
  }

  if (questions.includes(1) != true) {
    points_score = points_score +  10;
    questions.push(1);
    $('#answer_1_true').addClass('input--active');
  }
  param.innerHTML = True;
}

//22222222222222222222222222222/////////////////////////////////////////////////////////

var True_2 = true;
var False_2 = false;

function its_false_2(param) {
  if (answer_2 == True_2) {
    False_2 = True_2;
  }
  else{
    True_2 = False_2;
  }

  if (questions.includes(2) != true){
    $('#answer_2_false').addClass('input--active');
  }
  questions.push(2);
  param.innerHTML = False_2;
}

function its_true_2(param) {
  if (answer_2 == False_2) {
    True_2 = False_2;
  }
  else{
    False_2 = True_2;
  }

  if (questions.includes(2) != true) {
    points_score = points_score +  10;
    questions.push(2);
    $('#answer_2_true').addClass('input--active');
  }
  param.innerHTML = True_2;
}

//33333333333333333333333333333/////////////////////////////////////////////////////////

var True_3 = true;
var False_3 = false;

function its_false_3(param) {
  if (answer_3 == True_3) {
    False_3 = True_3;
  }
  else{
    True_3 = False_3;
  }

  if (questions.includes(3) != true){
    $('#answer_3_false').addClass('input--active');
  }
  questions.push(3);
  param.innerHTML = False_3;
}

function its_true_3(param) {
  if (answer_3 == False_3) {
    True_3 = False_3;
  }
  else{
    False_3 = True_3;
  }

  if (questions.includes(3) != true) {
    points_score = points_score +  10;
    questions.push(3);
    $('#answer_3_true').addClass('input--active');
  }
  param.innerHTML = True_3;
}

//444444444444444444444444444444/////////////////////////////////////////////////////////

var True_4 = true;
var False_4 = false;

function its_false_4(param) {
  if (answer_4 == True_4) {
    False_4 = True_4;
  }
  else{
    True_4 = False_4;
  }

  if (questions.includes(4) != true){
    $('#answer_4_false').addClass('input--active');
  }
  questions.push(4);
  param.innerHTML = False_4;
}

function its_true_4(param) {
  if (answer_4 == False_4) {
    True_4 = False_4;
  }
  else{
    False_4 = True_4;
  }

  if (questions.includes(4) != true) {
    points_score = points_score +  10;
    questions.push(4);
    $('#answer_4_true').addClass('input--active');
  }
  param.innerHTML = True_4;
}

//555555555555555555555555555555/////////////////////////////////////////////////////////

var True_5 = true;
var False_5 = false;

function its_false_5(param) {
  if (answer_5 == True_5) {
    False_5 = True_5;
  }
  else{
    True_5 = False_5;
  }

  if (questions.includes(5) != true){
    $('#answer_5_false').addClass('input--active');
  }
  questions.push(5);
  param.innerHTML = False_5;
}

function its_true_5(param) {
  if (answer_5 == False_5) {
    True_5 = False_5;
  }
  else{
    False_5 = True_5;
  }

  if (questions.includes(5) != true) {
    points_score = points_score +  10;
    questions.push(5);
    $('#answer_5_true').addClass('input--active');
  }
  param.innerHTML = True_5;
}

//6666666666666666666666666/////////////////////////////////////////////////////////

var True_6 = true;
var False_6 = false;

function its_false_6(param) {
  if (answer_6 == True_6) {
    False_6 = True_6;
  }
  else{
    True_6 = False_6;
  }

  if (questions.includes(6) != true){
    $('#answer_6_false').addClass('input--active');
  }
  questions.push(6);
  param.innerHTML = False_6;
}

function its_true_6(param) {
  if (answer_6 == False_6) {
    True_6 = False_6;
  }
  else{
    False_6 = True_6;
  }

  if (questions.includes(6) != true) {
    points_score = points_score +  10;
    questions.push(6);
    $('#answer_6_true').addClass('input--active');
  }
  param.innerHTML = True_6;
}

//77777777777777777777777777777777/////////////////////////////////////////////////////////

var True_7 = true;
var False_7 = false;

function its_false_7(param) {
  if (answer_7 == True_7) {
    False_7 = True_7;
  }
  else{
    True_7 = False_7;
  }
  if (questions.includes(7) != true){
    $('#answer_7_false').addClass('input--active');
  }
  questions.push(7);
  param.innerHTML = False_7;
}

function its_true_7(param) {
  if (answer_7 == False_7) {
    True_7 = False_7;
  }
  else{
    False_7 = True_7;
  }
  
  if (questions.includes(7) != true) {
    points_score = points_score +  10;
    questions.push(7);
    $('#answer_7_true').addClass('input--active');
  }
  param.innerHTML = True_7;
}

//8888888888888888888888888888888888/////////////////////////////////////////////////////////

var True_8 = true;
var False_8 = false;

function its_false_8(param) {
  if (answer_8 == True_8) {
    False_8 = True_8;
  }
  else{
    True_8 = False_8;
  }

  if (questions.includes(8) != true){
    $('#answer_8_false').addClass('input--active');
  }
  questions.push(8);
  param.innerHTML = False_8;
}

function its_true_8(param) {
  if (answer_8 == False_8) {
    True_8 = False_8;
  }
  else{
    False_8 = True_8;
  }

  if (questions.includes(8) != true) {
    points_score = points_score +  10;
    questions.push(8);
    $('#answer_8_true').addClass('input--active');
  }
  param.innerHTML = True_8;
}

//99999999999999999999999999999999/////////////////////////////////////////////////////////

var True_9 = true;
var False_9 = false;

function its_false_9(param) {
  if (answer_9 == True_9) {
    False_9 = True_9;
  }
  else{
    True_9 = False_9;
  }

  if (questions.includes(9) != true){
    $('#answer_9_false').addClass('input--active');
  }
  questions.push(9);
  param.innerHTML = False_9;
}

function its_true_9(param) {
  if (answer_9 == False_9) {
    True_9 = False_9;
  }
  else{
    False_9 = True_9;
  }

  if (questions.includes(9) != true) {
    points_score = points_score +  10;
    questions.push(9);
    $('#answer_9_true').addClass('input--active');
  }
  param.innerHTML = True_9;
}

//1010101010101010101010101010101010/////////////////////////////////////////////////////////

var True_10 = true;
var False_10 = false;

function its_false_10(param) {
  if (answer_10 == True_10) {
    False_10 = True_10;
  }
  else{
    True_10 = False_10;
  }

  if (questions.includes(10) != true){
    $('#answer_10_false').addClass('input--active');
  }
  questions.push(10);
  param.innerHTML = False_10;
}

function its_true_10(param) {
  if (answer_10 == False_10) {
    True_10 = False_10;
  }
  else{
    False_10 = True_10;
  }

  if (questions.includes(10) != true) {
    points_score = points_score +  10;
    questions.push(10);
    $('#answer_10_true').addClass('input--active');
  }
  param.innerHTML = True_10;
}