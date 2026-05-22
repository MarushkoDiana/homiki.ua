function scrollCatalog(){

document
.getElementById(
"catalog"
)
.scrollIntoView({

behavior:"smooth"

})

}

window.addEventListener(

"load",

()=>{

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

)

const topBtn=

document
.getElementById(
"topBtn"
)

window.addEventListener(

"scroll",

()=>{

if(

window.scrollY>

400

){

topBtn.style.display=

"block"

}

else{

topBtn.style.display=

"none"

}

}

)

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

})

}
