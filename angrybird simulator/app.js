
document.querySelector('#yell').addEventListener('click',yell)

function yell() {
    const fname = document.querySelector('#fname').value

    const mname = document.querySelector('#mname').value

    const lname = document.querySelector('#lname').value

    const yellText = fname + " " +mname + " " +lname

    document.querySelector('#Result').innerHTML = yellText

    let utterance = new SpeechSynthesisUtterance(yellText);

    utterance.volume=2;

    window.speechSynthesis.speak(utterance);

    
}