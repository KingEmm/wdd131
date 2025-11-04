console.log("Hi there from Emmanuel");

let menu_btn = document.getElementById('menu');
let menu = document.querySelector('nav');


menu_btn.addEventListener('click', ()=>{
    // let msg = prompt('menu Clicked \n What is your name? ');
    // document.querySelector('h1').innerText = `Hello ${msg}`;
    
    menu_btn.classList.toggle('open')
    menu.classList.toggle('open')
    menu.style.top =  `${document.querySelector('header').offsetHeight}px`;
})