const myProjects = [
    {
        imageUrl : 'images/me.png',
        desription: 'This was my first brief portfolio website showcasing my skills in web develoment.',
        link : '../'
    },
    {
        imageUrl : 'images/places.png',
        desription: 'This project  provides clear temperature insight, climate trends and eazy to read calculations about my country Nigeria',
        link : '../place.html'
    },
    {
        imageUrl : 'images/image_gallery.png',
        desription: 'Dynamic layout experiment that presents one photo in different grid format, exploring creative composition and responsive design.',
        link : '../temples.html'
    },
    {
        imageUrl : 'images/productreview.png',
        desription: 'Dynamic product review form that follows industry form best practices all together with local storage intergration.',
        link : '../form.html'
    },
]


let projectContainer = document.querySelector('.project div')

// let figure  =  document.createElement('figure')

// for (projec in myProjects){
    // }
myProjects.forEach(element => {
    let figure = document.createElement('figure');
    figure.innerHTML = `<img src="${element.imageUrl}" alt="project" width="250" height="250">
                        <p>${element.desription}</p>
                        <a href="${element.link}">View This Project</a>`
    projectContainer.appendChild(figure);
});

myProjects.forEach(element => {
    console.log(element)
});