var e2 = "admin@hotmail.com"
var p2 = "admin"

var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


function clearing()
{
    var e1 = null;
    var p1 = null;
}

function redirect()
{
    window.location.replace("login.html");
    clearing();
}

function verify()
{   
        var e1 = document.getElementById("email").value;
        var p1 = document.getElementById("password").value;
        if (e1 != null && p1 != null)
        {

            console.log("Email: " + e1 + " - " + e2 + "   Password: " + p1 + " - " + p2)

            if (e1 == e2 && p1 == p2)
            {   
                window.location.replace("index.html");
                clearing();
            }
            else if (!emailPattern.test(email))
            {
                alert("Ogiltikt email!")
            }
            else
            {
                alert("Wrong email or password.");
                clearing();
            }
        }
        else
        {
            console.log("Email or password is not defined.");
            alert("Email or password is not defined.");
        }
}

function darkMode()
{
    const elem = domcument.getElementById("body");
    elem.style.backgroundColor = black;
}

function omvandling()
{
    
}