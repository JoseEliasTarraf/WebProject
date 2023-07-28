const element = document.getElementById("section1");

const about = document.getElementById("menu1");

const element2 = document.getElementById("section2");

const tutorial = document.getElementById("menu2");

const element3 = document.getElementById("section3");

const recruit = document.getElementById("menu3");

const toTopElemnt = document.getElementById("section");

const toTopBtn = document.getElementById("toTopbtn");

about.addEventListener("click", (e) => {
  e.preventDefault();

  element.scrollIntoView({ behavior: "smooth" });
});

tutorial.addEventListener("click", (e) => {
  e.preventDefault();

  element2.scrollIntoView({ behavior: "smooth" });
});

recruit.addEventListener("click", (e) => {
  e.preventDefault();

  element3.scrollIntoView({ behavior: "smooth" });
});

toTopBtn.addEventListener("click", (e) => {
  e.preventDefault();

  toTopElemnt.scrollIntoView({ behavior: "smooth" });
});


const recruitElement = document.getElementById("btnRecruit");

recruitElement.addEventListener('click', (e) =>{
  e.preventDefault();

  if(userData && userData.id != null){
    alert("Recruit Feito com Sucesso");
  }
  else{
    alert("Necessario fazer o Login");
  }
})
