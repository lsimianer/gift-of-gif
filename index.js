


// https://api.giphy.com/v1/gifs/search?api_key=B9XGGzdHohUagG4MtS6gQfhRuXHXYTzJ&q=varhere&limit=10&offset=0&rating=G&lang=en  




// $( document ).ready(function() {
//     console.log( "ready!" );
// });
// lets make arrAdd, only ad to the array and then trigger the print button

var btnArr = ['Hyena', 'hound', 'doggo', 'oops', 'no', 'yes', 'nope', 'always',
'love', 'food', 'hungry', 'strong', 'workout', 'sleep', 'gains', 'code', 'computer', 'crazy', 'drinks',];
//the array 
function printBtn(){
for(var i = 0; i < btnArr.length; i++){
    var btn = document.createElement("button");
    btn.className = 'gifbtn';
    var t = document.createTextNode(btnArr[i]);
    btn.appendChild(t);
    $('#btnHolder').append(btn);
    //  getText();
    }
}
printBtn();
console.log('btns printed foo');

// on click gimme that button..
$('#submit').on('click',arrAdd);

function arrAdd(){
    event.preventDefault();

    // get value from input text
     var btn = document.createElement("button");
         btn.className = 'gifbtn';

    var inputText = document.getElementById('inputS').value;
    // append the data to array btnArr
    btnArr.push(inputText);    
    
    // $('#btnHolder').empty(); // empty the div before fetching and adding new data
       var z = document.createTextNode(inputText);
         btn.appendChild(z);
       $('#btnHolder').append(btn);

    //    getText();
     console.log('new btn new me foo')

}


//on btn click run gif search
// api >>>>done
// btn inner text = input
console.log("test");
$(document).on('click', '.gifbtn',queryAPI);

var api = "https://api.giphy.com/v1/gifs/search?api_key=";

var apiKey ="B9XGGzdHohUagG4MtS6gQfhRuXHXYTzJ&q=";



// function getText(){

// var buttons = document.querySelectorAll("[class ='gifbtn'");
// var buttontext;
//     for(var i=0; i<buttons.length; i++){
//         buttons[i].addEventListener("click", function(){document.querySelector('.gifbtn').textContent.innerHTML
//         // buttontext= this.innerHTML;
//         console.log(buttontext)}
//       )
//     }

// }


var buttontext = document.querySelector('.gifbtn').textContent.innerHTML;




var lims = "&limit=10&offset=0&rating=G&lang=en";


// get the innertext from buttons to be my input = var input for my query... 
// var input = 
// queries the API
function queryAPI(){

    // getText()

    buttontext = $(this).text();
    // build the url for the api call
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=" + apiKey + buttontext + lims;

    $('#displayHere').empty(); // empty the div before fetching and adding new data

    console.log(queryAPI);
    console.log(apiKey);

    // api call
    $.ajax({
        url: queryURL,
        method: 'GET'
    }).then(function(response) {
            // Storing an array of results in the results variable
            var results = response.data;
        
            console.log(response);
            // Looping over every result item
            for (var i = 0; i < results.length; i++) {
  
              // Only taking action if the photo has an appropriate rating
              if (results[i].rating !== "r" && results[i].rating !== "pg-13") {
                // Creating a div for the gif
                var gifDiv = $("<div>");
  
                // Storing the result item's rating
                var rating = results[i].rating;
  
                // Creating a paragraph tag with the result item's rating
                var p = $("<p>").text("Rating: " + rating);
  
                // Creating an image tag
                var gifResult = $("<img>");
  
                // Giving the image tag an src attribute of a proprty pulled off the
                // result item
                gifResult.attr("src", results[i].images.fixed_height.url);
  
                // Appending the paragraph and gifResult we created to the "gifDiv" div we created
                gifDiv.append(p);
                gifDiv.append(gifResult);
  
                // Prepending the gifDiv to the div in the HTML
                $("#displayHere").append(gifDiv);
              }
            }
          });
      };