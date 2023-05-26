// Hitta all text på sidan som du vill läsa upp
var theText = document.body.innerText;

// Skapa en funktion som läser upp texten
function speak() {
    console.log(theText.toString())
    var msg = new SpeechSynthesisUtterance(theText);
    window.speechSynthesis.speak(msg);
}

// Skapa en funktion för att avbryta uppläsningen
function stopReading() {
    console.log("Button 2 Clicked")
    window.speechSynthesis.cancel();
}

// Skapa en funktion för att återuppta uppläsningen
function resumeReading() {
    console.log("Button 1 Clicked")
    window.speechSynthesis.speak(currentUtterance);
}