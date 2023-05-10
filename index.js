function darkMode() {
    var elem = document.getElementById("nav");
    var button = document.getElementById("thisButton1");
    var auth = document.getElementById("auth");
    var auth2 = document.getElementById("auth2");
    var bar = document.getElementsByName("Bar");

    console.log(button.value)
    if (button.value == "Light Mode") 
    {
        button.value = "Dark Mode";
        elem.style.backgroundColor = "#ffffff";
        button.style.color = "#000000";
        button.style.backgroundColor = "#a0a0a0";
        auth.style.color = "#000000";
        auth.style.backgroundColor = "#a0a0a0";
        auth2.style.color = "#000000";
        auth2.style.backgroundColor = "#a0a0a0";
        bar.style.backgroundColor = "#a0a0a0";
    }
    else 
    {
        button.value = "Light Mode";
        elem.style.backgroundColor = "#212121";
        button.style.color = "#ffffff";
        button.style.backgroundColor = "#000000";
        auth.style.color = "#ffffff";
        auth.style.backgroundColor = "#000000";
        auth2.style.color = "#ffffff";
        auth2.style.backgroundColor = "#000000";
        bar.style.backgroundColor = "#000000";
    }
}