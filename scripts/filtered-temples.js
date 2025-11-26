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
// menu_btn.innerHTML = ''

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  // Add more temple objects here...
  {
    templeName: "Hong Kong China",
    location: "Hong Kong, China",
    dedicated: "1996, May, 26–27",
    area: 51921,
    imageUrl:
    'https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/hong-kong-china/400x640/hong-kong-china-temple-lds-39528-wallpaper.jpg'
  },
  {
    templeName: "Accra Ghana Temple",
    location: "Accra, Ghana",
    dedicated: "2004, January, 11",
    area:  17500,
    imageUrl:
    'https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/accra-ghana/800x450/accra-ghana-temple-detail-249022-2400x1200.jpg'
    // "https://churchofjesuschristtemples.org/assets/img/temples/accra-ghana-temple/accra-ghana-temple-15503.jpg"
  },
  {
    templeName: "Tokyo Japan",
    location: "Minato-ku Tokyo Japan",
    dedicated: "1980, October, 27–29",
    area: 53997,
    imageUrl:
    'https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/tokyo-japan/320x200/tokyo_japan_temple-brides.jpeg'
    // "https://churchofjesuschristtemples.org/assets/img/temples/tokyo-japan-temple/tokyo-japan-temple-8154.jpg"
  },
  // Add more temple objects here...
];

let main = document.querySelector('#container');

const old =  temples.filter((temple) => temple.dedicated.slice(0,4) <= 1900)
const _new = temples.filter((temple) => temple.dedicated.slice(0,4) >= 2000)
let large = temples.filter((temple) => temple.area >= 90000)
let small = temples.filter((temple) => temple.area <= 10000)

function render(arr){
    main.innerHTML = ''
    for(let i=0; i<arr.length; i++){
        let name = arr[i].templeName;
        let location = arr[i].location;
        let dedicated = arr[i].dedicated;
        let area = arr[i].area;
        let url = arr[i].imageUrl;
        
        let card = document.createElement('div');
        card.innerHTML = `
                            <h2>${name}</h2>
                        <ul>
                                <li>Location: <strong>${location}</strong></li>
                                <li>Dedicated: <strong>${dedicated}</strong></li>
                                <li>Size: <strong>${area}</strong></li>
                            </ul>
                            <img width="400" height="250" loading='lazy' fetchpriority='high' src="${url}" alt="${name}">
                        `                     
          main.appendChild(card);
    }
}

let homeBtn = document.querySelector('#home')
let oldBtn = document.querySelector('#old')
let newBtn= document.querySelector('#new')
let largeBtn = document.querySelector('#large')
let smallBtn = document.querySelector('#small')

homeBtn.addEventListener('click', ()=> {render(temples)})
oldBtn.addEventListener('click', ()=> {render(old)})
newBtn.addEventListener('click', ()=> {render(_new)})
largeBtn.addEventListener('click', ()=>{ render(large)})
smallBtn.addEventListener('click', ()=> {render(small)})

render(temples)


