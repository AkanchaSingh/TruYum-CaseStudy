const adminCred = {
    id : "akancha",
    password : "aaaa"
}
function credentialCheck(){
    document.getElementById("result").innerHTML = "";
    var id = document.getElementById("id").value;
    var password = document.getElementById("password").value;
    if(id === adminCred["id"] && password === adminCred["password"]){
        localStorage.setItem('adminLogin',"true");
        window.location.href = "adminHome.html";
    }else{
        document.getElementById("result").innerHTML = "Id or password does not match";
    }
}