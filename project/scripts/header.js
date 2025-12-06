const project = document.querySelector('.project')
const body = document.querySelector('body')
const header = document.querySelector('header')
const h2 = document.querySelector('h3')
const toggleBtn  = document.getElementById('t_btn');
const toggleBg  = document.getElementById('toggle');

let darkmode = Boolean(localStorage.getItem('my_mode')) || false;

console.log("Hi there from Emmanuel");

let menu_btn = document.getElementById('menu');
let menu = document.querySelector('nav');

let modeImg = document.createElement('img')



menu_btn.addEventListener('click', ()=>{
    // let msg = prompt('menu Clicked \n What is your name? ');
    // document.querySelector('h1').innerText = `Hello ${msg}`;
    
    menu_btn.classList.toggle('open')
    menu.classList.toggle('open')
    menu.style.top =  `${document.querySelector('header').offsetHeight}px`;
})
// menu_btn.innerHTML = ''



const updateUI = ()=>{
    if (Boolean(Number(localStorage.getItem('my_mode')))){
        toggleBtn.style.right = '30px';
        body.style.backgroundColor = 'var(--text-dark)';
        body.style.color = 'var(--bg-light)';
        header.style.borderBottom = '0.5px solid var(--yellow-light)';
        toggleBtn.style.background = 'var(--text-grey)';
        h2.style.background = 'var(--text-dark)';
        modeImg.src = 'images/dark.svg';
        modeImg.alt = 'Dark icon';
        toggleBtn.appendChild(modeImg);
    }
    else{
        modeImg.src = 'images/light.svg';
        modeImg.alt = 'light icon';
        toggleBtn.appendChild(modeImg);
        toggleBtn.style.background = '';
        toggleBtn.style.right = '0px';
        body.style.background = 'var(--bg-light)';
        body.style.color = 'var(--text-dark)';
        header.style.backgroundColor = 'var(--text-dark)'
        project.style.border = '1px solid var(--yellow-light)'
        h2.style.background = 'var(--bg-light)'
    }
}

const checkState = () =>{
    if (Boolean(Number(localStorage.getItem('my_mode')))){
        darkmode = Boolean(Number(localStorage.setItem('my_mode', 0)));
    }
    else{
        darkmode = Boolean(Number(localStorage.setItem('my_mode', 1)));
    }
}

updateUI()

toggleBtn.addEventListener('click', ()=>{
    checkState();
    updateUI();
}
);

document.getElementById('lastModified').innerHTML = document.lastModified;
document.getElementById('currentyear').innerHTML = new Date().getFullYear();