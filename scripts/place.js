console.log('Hey welcome to Nigeria 🌞')
function calculateWIndChill(T, V){
    return 13.12 + (0.6215 * T) - 11.37 * (V ** 0.16) + 0.3965 * T * (V ** 0.16)
}



// console.dir(document.querySelectorAll('.weather li')[3])

document.querySelectorAll('.weather li')[3].lastElementChild.lastElementChild.innerText = ` ${calculateWIndChill(30, 7).toFixed(1)} °C` 