function scrollToCatalog(){

document
.getElementById("catalog")
.scrollIntoView({
behavior:"smooth"
});

}

/* FILTER */

function filterHouses(){

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
.querySelectorAll(".house");

houses.forEach(house=>{

let text =
house
.textContent
.toLowerCase();

let hPrice =
Number(house.dataset.price);

let hRooms =
house.dataset.rooms;

let show = true;

if(search && !text.includes(search))
show = false;

if(price && hPrice > Number(price))
show = false;

if(rooms && hRooms != rooms)
show = false;

house.style.display =
show ? "block" : "none";

});

}

/* FAVORITES */

function addFav(btn){

btn.innerHTML = "✔ Додано";

btn.style.background =
"linear-gradient(to right,#16a34a,#22c55e)";

btn.disabled = true;

}

/* MOBILE MENU */

function toggleMenu(){

let menu =
document.getElementById("mobileMenu");

if(menu.style.display === "flex"){

menu.style.display = "none";

}else{

menu.style.display = "flex";

}

}

/* REGISTER */

function register(event){

event.preventDefault();

alert("✅ Реєстрація успішна!");

}
