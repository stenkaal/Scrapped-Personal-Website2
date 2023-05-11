function Kg_To_lbs(x) {
    //1kg är 2.20462262lbs
    var number = Math.round(parseFloat(x) * 2.20462262).toFixed(2);
    return number
}

function omvandla() {
    var value = document.getElementsByName("enhet")[0].value;

    if (value.value == "kg")
    {
        text = document.getElementById("input")
        document.getElementById("num").innerHTML = text
    }
    else if (value.value == "lbs")
    {
        
    }
}