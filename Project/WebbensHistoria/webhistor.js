// Hitta all text på sidan som du vill läsa upp
var theText = document.body.innerText;

// Skapa en funktion som läser upp texten
function speak() {
    if ('speechSynthesis' in window) 
    {
        console.log(theText.toString())
        var msg = new SpeechSynthesisUtterance(theText);
        window.speechSynthesis.speak(msg);
    }
    else    
    {
        alert("Sorry, your browser doesn't support text to speech!");
    }
}

// Skapa en funktion för att avbryta uppläsningen
function stopReading() {
    if ('speechSynthesis' in window) 
    {
        console.log("Button 2 Clicked")
        window.speechSynthesis.cancel();
    }
    else    
    {
        alert("Sorry, your browser doesn't support text to speech!");
    }
}