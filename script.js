function scrollToCatalog(){

document
.getElementById(
"catalog"
)
.scrollIntoView({

behavior:"smooth"

});

}

function filter(){

let search=

document
.getElementById(
"search"
)
.value
.toLowerCase();

let price=

document
.getElementById(
"price"
)
.value;

let houses=

document
.getElementsByClassName(
"house"
);

for(

let i=0;

i<houses.length;

i++

){

let text=

houses[i]
.textContent
.toLowerCase();

let hPrice=

Number(
houses[i]
.dataset
.price
);

let show=true;

if(

search &&
!text.includes(search)

)

show=false;

if(

price &&
hPrice>
Number(price)

)

show=false;

houses[i]
.style.display=

show

?

"block"

:

"none";

}

}

function addFav(btn){

btn.innerHTML=

"✔ Додано";

btn.style.background=

"#22c55e";

}

window.addEventListener(

"scroll",

()=>{

let btn=

document
.getElementById(
"topBtn"
);

if(

window.scrollY>

500

){

btn.style.display=

"block";

}

else{

btn.style.display=

"none";

}

}

);

function topPage(){

window.scrollTo({

top:0,

behavior:"smooth"

});

}
