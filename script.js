function scrollCatalog(){

document

.getElementById(

"catalog"

)

.scrollIntoView({

behavior:"smooth"

})

}

window.onload=()=>{

setTimeout(

()=>{

document

.getElementById(

"loader"

)

.style.display=

"none"

},

1200

)

}

window.addEventListener(

"scroll",

()=>{

let btn=

document

.getElementById(

"topBtn"

)

btn.style.display=

window.scrollY>400

?

"block"

:

"none"

}

)

document

.getElementById(

"topBtn"

)

.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

})

}
