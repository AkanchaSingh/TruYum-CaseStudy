if(localStorage.getItem('adminLogin')!=null){
    localStorage.removeItem('adminLogin');
    window.location.href = 'adminLogin.html';
}