
var btnLogin = document.getElementById("btnlogin");
var btnSign = document.getElementById("btnsign");
var x = document.getElementById("input");
var y = document.getElementById("login");
var z = document.getElementById("loginwrapper")
btnLogin.addEventListener("click",function(){
z.style.height="300px"
y.style.transform = "translateX(0)"
x.style.transform = "translateX(-500px)"
})
btnSign.addEventListener("click",function(){
    z.style.height="500px"
    y.style.transform = "translateX(-500px)"
    x.style.transform = "translateX(0)" 
})
var Btn = document.querySelectorAll(".btns");
for(let i = 0;i<Btn.length;i++){
    Btn[i].addEventListener("click",function(){
        for(j=0;j<Btn.length;j++){
Btn[j].classList.remove("active")
        }
        this.classList.add("active")
    })
}
var btnToggle = document.getElementById("togglepwd");
var passWord = document.getElementById("password")
btnToggle.addEventListener("click",function(e){
if(passWord.type==="password"){
  passWord.type="text"
}else{
    passWord.type="password"  
}
this.classList.toggle("fa-eye-slash")
});
var btnToggle2 = document.getElementById("togglepwd2");
var password = document.getElementById("password2")
btnToggle2.addEventListener("click",function(e){
if(password.type==="password"){
  password.type="text"
}else{
    password.type="password"  
}
this.classList.toggle("fa-eye-slash")
});