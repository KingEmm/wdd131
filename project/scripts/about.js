const skills = [
  {
    s_name: 'HTML5',
    img :'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
  },
  {
    s_name : 'CSS',
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    s_name : 'JavaScript',
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
  },
  {
    s_name : 'Python',
    img : "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
  },
  {
    s_name : 'CPP',
    img : "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg"
  },

  {
    s_name : 'Django Framework',
    img : "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg"
  },
  {
    s_name : 'MySQL',
    img : "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
  },
  {
    s_name: 'React',
     img : "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
    },
  {
    s_name: 'Solidity',
     img : "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/solidity/solidity-original.svg"
  },
];


let projects = document.querySelector('.project div');
// projects.innerHTML = ''
let projectss = document.querySelector('.project div');
let skill = 0;
for (skill in skills){
    let figure = document.createElement('figure');
    figure.innerHTML = `<img src="${skills[skill].img}" alt="project" width="250" height="250">
                        <p>${skills[skill].s_name}</p>`
    projects.appendChild(figure);
}
                      
let projectContainer = document.querySelector('.project');

const skil = document.querySelectorAll('figure');

let projectContainers = document.querySelector('.project div').clientWidth


for (let i = 0; i < skil.length; i++){
  if(window.matchMedia("(max-width: 740px)").matches){    
    skil[i].style.width = `${projectContainers}px`
  }
  else if(window.matchMedia("(min-width: 740px)").matches){
    skil[i].style.width = `${projectContainers / 2}px`
  }
  if(window.matchMedia("(min-width: 1200px)").matches){
    skil[i].style.width = `${projectContainers / 3}px`
  }
}

const changeSlide = (length, duration)=>{
  let wi = projectContainer.offsetWidth;
  
  let i = 0;
  let gap = (projectContainers - (skil[0].offsetWidth * 2) ) / skills.length
  let change = setInterval(() => {
    projectss.scroll({
      left: (wi * i) + gap,
      behavior: "smooth"
    });
  
    i++;
  
    if (i >= length) {
      i = 0;
    }
  }, duration);
}


if(window.matchMedia("(min-width: 1200px)").matches){
  changeSlide(3, 4000)
}
else if(window.matchMedia("(min-width: 740px)").matches){
  changeSlide(4, 4000)
}
else{    
  changeSlide(skil.length, 4000)
}
