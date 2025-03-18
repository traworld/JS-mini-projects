const increment = document.getElementById("increment");
const decrement = document.getElementById("decrement");
const erase = document.getElementById("erase");
const counts = document.getElementById("counts");


let value = 0;

increment.onclick = function (){
    value++;
    counts.textContent = value;
    
}
decrement.onclick = function (){
    value--;
    counts.textContent = value;

}
erase.onclick = function (){
    value = 0;
    counts.textContent = value;

}