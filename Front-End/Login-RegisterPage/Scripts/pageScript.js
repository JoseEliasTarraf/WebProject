const Invite = document.getElementById('invite');
const Register = document.getElementById('register');

Invite.addEventListener('click',(e)=>{
    e.preventDefault();

    window.location.href="../Home/index.html";
    history.replaceState(null,null,window.location.href);
})

Register.addEventListener('click', (e)=>{
    e.preventDefault();

    window.location.href="register.html"
})