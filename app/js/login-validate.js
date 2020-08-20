function loginValidate(){
    var username = document.getElementById('exampleInputUsername').value;
    var password = document.getElementById('exampleInputPassword').value;
    //console.log(username, password);
    if (username == '' || username == '' ){
        alert('Username and password must not be blank!');
    }
    else{
        alert('Login information successfully validated');
    }
}