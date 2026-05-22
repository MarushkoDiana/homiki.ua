function scrollCatalog(){

document

.getElementById(

"catalog"

)

.scrollIntoView({

behavior:"smooth"

});

}

window.onload=()=>{

setTimeout(

()=>{

loader.style.display=

"none";

},

1500

)

}

window.addEventListener(

"scroll",

()=>{

let btn=

document

.getElementById(

"topBtn"

);

btn.style.display=

window.scrollY>400

?

"block"

:

"none";

}

)

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

})

}
