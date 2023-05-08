function darkMode() {
    var elem = document.getElementById("body");
    var button = document.getElementById("thisButton1");
    var auth = document.getElementById("auth");
    var auth2 = document.getElementById("auth2");

    console.log(button.value)
    if (button.value == "Dark Mode") 
    {
        button.value = "Light Mode";
        elem.style.backgroundColor = "#212121";
        button.style.color = "#ffffff";
        button.style.backgroundColor = "#000000";
        auth.style.color = "#ffffff";
        auth.style.backgroundColor = "#000000";
        auth2.style.color = "#ffffff";
        auth2.style.backgroundColor = "#000000";
    }
    else 
    {
        button.value = "Dark Mode";
        elem.style.backgroundColor = "#ffffff";
        button.style.color = "#000000";
        button.style.backgroundColor = "#a0a0a0";
        auth.style.color = "#000000";
        auth.style.backgroundColor = "#a0a0a0";
        auth2.style.color = "#000000";
        auth2.style.backgroundColor = "#a0a0a0";
    }
}