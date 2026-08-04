document.getElementById("loginForm").addEventListener("submit", function(event){

    event.preventDefault();

    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if(username=="" || email=="" || password=="")
    {
        alert("Please fill all fields.");
    }
    else
    {
        alert("Login Successful!");

        document.getElementById("loginForm").reset();

        window.location.href="index.html";
    }

});