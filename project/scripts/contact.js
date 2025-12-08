const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/kingemm",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/your-username",
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/linkedin.svg"
  },
  {
    name: "Instagram",
    url: "https://instagram.com/ek0nice",
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/instagram.svg"
  },
  {
    name: "Email",
    url: "mailto:kinge7916@gmail.com",
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/maildotru.svg"
  },
  {
    name: "WhatsApp",
    url: "https://wa.me/+2349055516727",
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/whatsapp.svg"
  },
  {
    name: "Phone",
    url: "tel:+2349055516272",
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/phonepe.svg"
  },
  {
    name: "Facebook",
    url: "https://facebook.com/your-username",
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/facebook.svg"
  }
];


const pro = document.querySelector('.project ul')

socialLinks.forEach(e=>{
    const sp = document.createElement('span');
    const li = document.createElement('li');
    const anchor = document.createElement('a');
    sp.innerText = e.name
    anchor.href = e.url
    anchor.target = '_blank'

    const img = document.createElement('img')
    img.src = e.icon
    img.width = 250
    img.height = 250
    img.loading = 'lazy'

    anchor.appendChild(img);
    anchor.appendChild(sp);
    li.appendChild(anchor);
    pro.appendChild(li);

})