const userDataString = localStorage.getItem("userData");
var userData = JSON.parse(userDataString);


const navbar = document.getElementById("navbarC");
const loginElement = document.createElement('li');
const profileElement = document.createElement('li');

if (userData && userData.id != null) {
  profileElement.textContent = userData.login;
  profileElement.classList.add('navbar');
  navbar.appendChild(profileElement);
} else {
  loginElement.textContent = 'Login';
  loginElement.classList.add('navbar');
  navbar.appendChild(loginElement);
}

profileElement.addEventListener("click", (e) => {
  e.preventDefault();

  localStorage.removeItem("userData");

  window.location.replace("../Login-RegisterPage/index.html");
});

loginElement.addEventListener("click", (e) => {
  e.preventDefault();

  window.location.replace("../Login-RegisterPage/index.html");
});
