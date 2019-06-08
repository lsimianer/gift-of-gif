


// https://api.giphy.com/v1/gifs/search?api_key=B9XGGzdHohUagG4MtS6gQfhRuXHXYTzJ&q=varhere&limit=10&offset=0&rating=G&lang=en  




$( document ).ready(function() {
    console.log( "ready!" );
});


var btnArr = ['Hyena', 'hound', 'doggo', 'oops', 'no', 'yes', 'nope', 'always',
'love', 'food', 'hungry', 'strong', 'workout', 'sleep', 'gains', 'code', 'computer', 'crazy', 'drinks',];
//the array 
function printBtn(){
for(var i = 0; i < btnArr.length; i++){
    var btn = document.createElement("button");
    var t = document.createTextNode(btnArr[i]);
    btn.appendChild(t);
    $('#btnHolder').append(btn);
    // document.body.appendChild(btn);
    // l.innerHTML = btnArr[i];
    // l.className = 'btnLetter';
    // div_available.appendChild(l);
    }
}
printBtn();
console.log('btns printed foo');

// on click gimme that button..
$('#submit').on('click',arrAdd);

function arrAdd(){
    event.preventDefault();
    // get value from input text
    var inputText = document.getElementById('inputS').value;
    // append the data to array btnArr
    btnArr.push(inputText);

        var btn = document.createElement("button");
        var z = document.createTextNode(inputText);
        btn.appendChild(z);
        $('#btnHolder').append(btn);
    console.log('new btn new me foo')
}



//on btn click run gif search
document.getElementsByClassName('.sBtns').click(gifsearch);
// api >>>>done
// btn inner text = input

var api = "https://api.giphy.com/v1/gifs/search?api_key=B9XGGzdHohUagG4MtS6gQfhRuXHXYTzJ&q=";
// var TITLE = "the terminator";
var input = document.getElementsByClassName('sBtns').innerHTML;
console.log(input);

var lims = "&limit=10&offset=0&rating=G&lang=en";


// var theBtn = document.getElementsByClassName('.sBtns').value;

// function gifSearch() {
//     event.preventDefault();

// var url = api + input.val() + lims;
// console.log(url);
// $.ajax({
//     url: url,
//     method: "GET"
// })
// // .then(function(response) {

// // }