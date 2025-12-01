const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
];


let selections  = document.getElementById('product_name');
selections.innerHTML = ''

for (var item in products){
  let option  = document.createElement('option');
  option.innerHTML = `<option id="${products[item].id}" value="${products[item].name}">${products[item].name}</option>`
  selections.appendChild(option)
}



// 1️⃣ Initialize display element variable

let button = document.getElementById('btn')

let numReviews = 0
// button.addEventListener('click', ()=>{
// })
document.addEventListener('DOMContentLoaded', ()=>{
  numReviews++;
  localStorage.setItem("numReviews-ls", numReviews);

})


