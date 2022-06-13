const menu = document.querySelector(".menu-mobile")
var navlist = document.querySelector(".nav-list")
menu.addEventListener("click", function(){
    navlist.classList.toggle("active")
})

/* =============================== SLIDER =================================== */
var balls = document.querySelector('.balls')
var quant = document.querySelectorAll('.slides .images')
var atual = 0
var images = document.getElementById('atual')
var next = document.getElementById('next')
var voltar = document.getElementById('voltar')

for(let i=0; i< quant.length; i++){
    var div = document.createElement('div')
    div.id = i
    balls.appendChild(div)
}
document.getElementById('0').classList.add('imgAtual')

var pos = document.querySelectorAll('.balls div')
for(let i=0; i<pos.length; i++){
    pos[i].addEventListener('click', function(){
        atual = pos[i].id
        slide()
    })
}

function slide(){
    if (atual >= quant.length){
        atual = 0
    }else if(atual<0){
        atual = quant.length-1
    }
    document.querySelector('.imgAtual').classList.remove('.imgAtual')
    images.style.marginLeft = -100*atual+'vw'
    document.getElementById(atual).classList.add('imgAtual')
}

setInterval(()=>{
    atual++
    slide()
}, 7000)