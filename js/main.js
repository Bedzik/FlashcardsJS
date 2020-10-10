var good = document.getElementById('good');
var card = document.getElementById('card');

function test() {
    alert(good);
} 
good.onclick = function () {
    card.innerHTML = "Samochód";
    //test();
} 