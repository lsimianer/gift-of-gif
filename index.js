


https://api.giphy.com/v1/gifs/search?api_key=B9XGGzdHohUagG4MtS6gQfhRuXHXYTzJ&q=varhere&limit=10&offset=0&rating=G&lang=en  




( document ).ready(function() {
    console.log( "ready!" );
});

var api = "https://api.giphy.com/v1/gifs/search?api_key=B9XGGzdHohUagG4MtS6gQfhRuXHXYTzJ&q=";
// var TITLE = "the terminator";
var lims = "&limit=10&offset=0&rating=G&lang=en";

var input = $('#mtitle');

$('#submit').on('click',arrAdd);

console.log($("#submit"))


function arrAdd() {
    event.preventDefault();

var url = api + input.val() + lims;
console.log(url);
$.ajax({
    url: url,
    method: "GET"
}).then(function(response) {