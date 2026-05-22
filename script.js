function scrollToCatalog(){

document
.getElementById("catalog")
.scrollIntoView({
behavior:"smooth"
});

}

function filter(){

let search =
document
.getElementById("search")
.value
.toLowerCase();

let price =
document
.getElementById("price")
.value;

let rooms =
document
.getElementById("rooms")
.value;

let houses =
document
.getElementsByClassName("house");

for(let i=0;i<houses.length;i++){

let text =
houses[i]
.textContent
.toLowerCase();

let hPrice =
Number(houses[i].dataset.price);

let hRooms =
houses[i].dataset.rooms;

let show = true;

if(search && !text.includes(search))
show = false;

if(price && hPrice > Number(price))
show = false;

if(rooms && hRooms != rooms)
show = false;

houses[i].style.display =
show ? "block" : "none";

}

}

function addFav(btn){

btn.innerHTML = "✔ Додано";

btn.style.background = "green";

}