var good = document.getElementById('good');
var card = document.getElementById('card');
var bad = document.getElementById('bad');
var lack = document.getElementById('lack');

function test() {
    alert(good);
}
good.onclick = function() {
    card.innerHTML = "Samochód";
    //test();
}
bad.onclick = function() {
    card.innerHTML = "Samochód";
}
lack.onclick = function() {
    card.innerHTML = "Samochód";
}