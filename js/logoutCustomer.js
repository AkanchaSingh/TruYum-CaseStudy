if(localStorage.getItem('customerLogin')!=null){
    localStorage.removeItem('customerLogin');
    window.location.href = 'index.html';
}