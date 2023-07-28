const userDataString = localStorage.getItem("userData");
var userData = JSON.parse(userDataString);

const loginElement = document.getElementById("loginPage");
const profileElement = document.getElementById("profile");

if (userData && userData.id != null) {
  profileElement.classList.remove("hidden");
  profileElement.classList.add("links");
  loginElement.classList.add("hidden");
  console.log(userData.login);
} else {
  profileElement.classList.add("hidden");
  loginElement.classList.remove("hidden");
  loginElement.classList.add("links");
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
