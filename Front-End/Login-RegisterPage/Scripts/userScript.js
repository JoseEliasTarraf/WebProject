var User = {
  id: null,
  login: null,
  password: null,
};

//Funções

//Função de Registro
function RegisterUser(user, pass) {
  let BaseUrl = "https://localhost:7204";

  let URL = BaseUrl + `/api/User?login=${user}&password=${pass}`;

  var headers = new Headers();
  headers.append("Content-Type", "application/json");

  var parameter = {
    method: "Post",
    headers: headers,
    body: JSON.stringify(URL),
  };

  fetch(URL, parameter)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (err) {
      console.log(err);
    });
}

//Função de Login + Dados para a Home
function LoginUser(user, pass) {
  let BaseUrl = "https://localhost:7204";

  let URL = BaseUrl + `/api/User?login=${user}&pass=${pass}`;

  var headers = new Headers();
  headers.append("Content-Type", "application/json");

  var parameter = { method: "Get", headers: headers };

  fetch(URL, parameter)
    .then(function (response) {
      if (response.status === 200) {
        console.log(response.status);
        response.json().then(function (data) {
          localStorage.setItem(
            "userData",
            JSON.stringify({
              login: data.login,
              id: data.id,
              password: data.password,
            })
          );
          window.location.href = "../Home/index.html";
        });
      } else {
        console.log("Login falhou. Status da resposta: " + response.status);
      }
    })
    .catch(function (err) {
      console.log("Erro na requisição: " + err);
    });
}

//Eventos

document.addEventListener("DOMContentLoaded", () => {
  const regBtn = document.querySelector("#btn-reg");
  const btnlogin = document.querySelector("#btnLogin");
  const loginInput = document.querySelector("#usuario");
  const passwordInput = document.querySelector("#senha");

  if (btnlogin) {
    btnlogin.addEventListener("click", (e) => {
      e.preventDefault();

      const user = loginInput.value;
      const pass = passwordInput.value;

      if (user == "" && pass == "") {
        const userNull = document.getElementById("userHide");
        const passNull = document.getElementById("passHide");

        userNull.classList.remove("hidden");
        passNull.classList.remove("hidden");
      } else if (user == "") {
        const userNull = document.getElementById("userHide");
        userNull.classList.remove("hidden");

        const passNull = document.getElementById("passHide");
        passNull.classList.add("hidden");
      } else if (pass == "") {
        const passNull = document.getElementById("passHide");
        passNull.classList.remove("hidden");

        const userNull = document.getElementById("userHide");
        userNull.classList.add("hidden");
      } else {
        const userNull = document.getElementById("userHide");
        const passNull = document.getElementById("passHide");

        userNull.classList.add("hidden");
        passNull.classList.add("hidden");

        LoginUser(user, pass);
      }
    });
  }

  if (regBtn) {
    const userInput = document.querySelector("#userReg");
    const passInput = document.querySelector("#passReg");
    regBtn.addEventListener("click", (e) => {
      e.preventDefault();

      const user = userInput.value;
      const pass = passInput.value;

      if (user == "" && pass == "") {
        const userNull = document.getElementById("userHide");
        const passNull = document.getElementById("passHide");

        userNull.classList.remove("hidden");
        passNull.classList.remove("hidden");
      } else if (user == "") {
        const userNull = document.getElementById("userHide");
        userNull.classList.remove("hidden");

        const passNull = document.getElementById("passHide");
        passNull.classList.add("hidden");
      } else if (pass == "") {
        const passNull = document.getElementById("passHide");
        passNull.classList.remove("hidden");

        const userNull = document.getElementById("userHide");
        userNull.classList.add("hidden");
      } else {
        const userNull = document.getElementById("userHide");
        const passNull = document.getElementById("passHide");

        userNull.classList.add("hidden");
        passNull.classList.add("hidden");

        RegisterUser(user, pass);
      }
    });
  }
});
