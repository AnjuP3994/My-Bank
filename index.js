
function login(){
    acno=log_acno.value
    pswd=log_pswd.value
    console.log(acno,pswd);
    accountDetails={
        acno,
        pswd
    }
    if (acno in localStorage) {
        accountDetails=JSON.parse(localStorage.getItem(acno))
        if (pswd==accountDetails.pswd) {
            // alert("Login Successfull")
            window.location='./home.html'
        }else{
            alert("Incorrect Password")
        }
    }
    else{
        alert("Invalid account number")
    }
}

