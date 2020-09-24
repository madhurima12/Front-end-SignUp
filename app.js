function validateform()
{
const firstname=document.Sign_up.firstname.value;
const lastname=document.Sign_up.lastname.value;   
const email = document.Sign_up.emailaddress.value;
    const password = document.Sign_up.password.value;
    var mailformat = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (email === '' || email == null) {
        alert('Email is required');
        var b = 0;
    }
    if (email.match(mailformat)) {  //email format given above should match
        var b = 1;
    }
    else {
        alert("You have entered an invalid email address. Follow format abc@gmail.com");
    }
    if(firstname.length==0)
    {
        alert("FirstName cannot be null");//name cannot be null
        var a=0;
    }
    else{
        var a=1;
    }
    if(lastname.length==0)
    {
        alert("LastName cannot be null");
        var d=0;
    }
    else{
        var d=1;
    }
    if (password.length <= 6) {
        alert('Password must be longer than 6 characters');//password must be longer than 6 characters
        var c = 0;
    }
    else if (password.length >= 20) {
        alert('Password must be less than 20 characters');
        var c = 0;
    }
    else if (password === 'password') {
        alert('Password cannot be password');
        var c = 0;
    }
    else {
        return c = 1;
    }
    if (a+b + c +d== 4) {
        return true;
    }
    else {
        return false;
    }
}