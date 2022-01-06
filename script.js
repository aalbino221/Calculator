
let funções = {
    add:  function add(a,b) {return a + b},
    menos:  function menos(a,b) {return a -b},
    multi:  function multi(a,b) {return a*b},
    div:  function div(a,b) { if (b == 0) {return 'ERROR'}
     else {return a/b}},
    remain:  function remain(a,b){return a%b},}

function c() {let final = resultado.textContent.length - 1 ;
    resultado.textContent = resultado.textContent.slice(0,final)}  
    
const funcArray = Object.keys(funções)
const body = document.body
const resultado = document.querySelector('.result')
const operations = document.querySelector('.operations')
body.addEventListener('keydown' ,  (e)=> {
    console.log(e.key)}) 

const botão = document.querySelectorAll('button') ;

let a = 0 ; let b = 0 ; let func;


 for (let key of botão) {key.addEventListener('click', (e)=> {

    if(false == isNaN(Number(key.textContent))) {
            (resultado.textContent == a) ? (resultado.textContent = '' , resultado.textContent += key.textContent) : resultado.textContent += key.textContent  }

    else if (key.classList == '.') {resultado.textContent += key.textContent }

    else if (key.classList == 'ac') {resultado.textContent = '' ; a = 0}

    else if (key.classList == 'c') {c()}

    else if (key.classList == 'add') {a = Number(resultado.textContent) ;func = funções.add; resultado.textContent = '+';}

    else if (key.classList == 'menos') {a = Number(resultado.textContent) ;func = funções.menos; resultado.textContent = '-';}

    else if (key.classList == 'multi') {a = Number(resultado.textContent) ;func = funções.multi; resultado.textContent = 'x';}

    else if (key.classList == 'div') {a = Number(resultado.textContent) ;func = funções.div; resultado.textContent = '/';}

    else if (key.classList == 'remain') {a = Number(resultado.textContent) ;func = funções.remain; resultado.textContent = '%';}

    else if (key.classList == 'igual') {b = Number(resultado.textContent.slice(1));
        resultado.textContent = func(a,b) , a = func(a,b)}})}


