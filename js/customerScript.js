customerCred = {
  id : "akancha",
  password : "aaaa"
};
function credentialCheck(){
    document.getElementById("result").innerHTML = "";
    var id = document.getElementById("id").value;
    var password = document.getElementById("password").value;
    if(id === customerCred["id"] && password === customerCred["password"]){
        localStorage.setItem('customerLogin',"true");
        window.location.href = "customerHome.html";
    }else{
        document.getElementById("result").innerHTML = "Id or password does not match";
    }
}