//About
const aboutBtn = document.querySelector('.about-me');
const aboutMe = document.querySelector('#about');
const hero = document.querySelector('.hero');

aboutBtn.addEventListener('click',()=>{
  if(projects.classList.contains("show-projects")){
    projects.classList.toggle("show-projects");
    aboutMe.classList.toggle("show-about");
    hero.classList.toggle("move-right");
    hero.classList.toggle("move-left");
  }else if(contact.classList.contains('show-contact')){
    contact.classList.toggle('show-contact');
    aboutMe.classList.toggle("show-about");
    hero.classList.toggle("move-left");
  }
  else{
    aboutMe.classList.toggle("show-about");
    hero.classList.toggle("move-left");
  }
});

//Projects
const projectsBtn = document.querySelector('.projects');
const projects = document.querySelector('#projects');
const projectsContent = document.querySelector('.projects-content')

projectsBtn.addEventListener('click',()=>{
  if(aboutMe.classList.contains("show-about")){
    aboutMe.classList.toggle("show-about");
    hero.classList.toggle("move-left");
    projects.classList.toggle("show-projects");
    hero.classList.toggle("move-right");
    projectsContent.style = "visibility:visible;"
  }else if(contact.classList.contains('show-contact')){
    contact.classList.toggle('show-contact');
    projects.classList.toggle("show-projects");
    hero.classList.toggle("move-right");
    projectsContent.style = "display:inline-block"
    projectsContent.style = "visibility:visible;"
  }
  else{
    projects.classList.toggle("show-projects");
    hero.classList.toggle("move-right");
    projectsContent.style = "visibility:visible;"
  }
});

//Contact

const contactBtn = document.querySelector('.contact-me');
const contact = document.querySelector('.contact');


contactBtn.addEventListener('click', ()=>{
  if(aboutMe.classList.contains("show-about")){
    aboutMe.classList.toggle("show-about");
    hero.classList.toggle("move-left");
    contact.classList.toggle('show-contact');
  }else if(projects.classList.contains("show-projects")){
    projects.classList.toggle("show-projects");
    hero.classList.toggle("move-right");
    contact.classList.toggle('show-contact');
  }else{
    contact.classList.toggle('show-contact');
  }
});