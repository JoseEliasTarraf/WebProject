const userInput = document.querySelector("#userReg");
const passInput = document.querySelector("#passReg");
const regBtn = document.querySelector("#btn-reg")

//Funções
function RegisterUser(user,pass){
    let BaseUrl = "https://localhost:7204";

    let URL = BaseUrl +`/api/User?login=${user}&password=${pass}`;

    var headers = new Headers();
    headers.append("Content-Type", "application/json");


    var parameter ={ method: 'Post', headers: headers, body: JSON.stringify(URL)};

    fetch(URL, parameter).then(function(response){
        console.log(response);
    }).catch(function(err){
        console.log(err);
    })
}
//Eventos
regBtn.addEventListener("click",(e)=>{
    e.preventDefault();

    const user = userInput.value;
    const pass = passInput.value;

    RegisterUser(user,pass);
})