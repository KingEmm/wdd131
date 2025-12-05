const words =  ['Web Developer', 'Web Designer', 'Software Engineer']

let strongText  = document.querySelector('strong');
// strongText.innerText =''

let i = 0;

let myInterval = setInterval(()=>{
    let j = words[i].length;
    let word = words[i];

    let clean = setInterval(()=>{
        word = word.slice(0, j-1)
        strongText.innerText = word
        j--
        if (j <= 0){
            clearInterval(clean)
            let write = setInterval(()=>{
                word += words[i][j]
                strongText.innerText = word
                j++
                if (j >= words[i].length){
                    clearInterval(write)
                }
            },2500/words[1].length)
        }
    },2500/words[1].length)

    
    i++
    if (i >= words.length){
        i = 0
    }
},9000)



