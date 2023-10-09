//Create account - Register a new account

function register(){

    //1. Fetch the values from the html
    acno=reg_acno.value
    uname=reg_uname.value
    pswd=reg_pswd.value
    console.log(acno,uname,pswd);

    //2. Create acno details object
    accountDetails={
        acno,
        uname,
        pswd
    }

    //3. Check if acno is already present in the localstorage
    if (acno in localStorage) {
        alert("User already registered")
    }
    //To set details in localstorage
    else{
        localStorage.setItem(acno,JSON.stringify(accountDetails))
        alert("Registration Successfull")
        //redirect to login page
        window.location='./index.html';
    }

}