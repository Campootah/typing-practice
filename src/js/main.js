function redirectWebpage(num) {
    window.location = "typing.html";
    localStorage.setItem("lessonNumber", num.toString());
}
window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new window.SpeechRecognition();
recognition.interimResults = true; // gives live display - false would wait till we stop talking then display

let p = document.createElement('p');

recognition.addEventListener('result', (e) => {
    const text = Array.from(e.results).map(result => result[0]).map(result => result.transcript).join('');

    p.innerText = text;

    if (e.results[0].isFinal){
        if (text.includes('one')){
            redirectWebpage(1);
        }
        if (text.includes('two')){
            redirectWebpage(2);
        }
        if (text.includes('three')){
            redirectWebpage(3);
        }
        if (text.includes('four')){
            redirectWebpage(4);
        }
        if (text.includes('five')){
            redirectWebpage(5);
        }
        if (text.includes('six')){
            redirectWebpage(6);
        }
        if (text.includes('back') || text.includes('home') || text.includes('menu')){
            window.location = "../index.html";
        }
        if (text.includes('help')){
            speak('Welcome to the level selection screen. There are 40 levels at the moment. To open a level, say the level number.');
        }
    }
});

recognition.addEventListener('end', () => {
    recognition.start();
})

recognition.start();


function speak(text) {
    if('speechSynthesis' in window) {
      const speech = new SpeechSynthesisUtterance(text); // Use the text parameter
      speech.lang = 'en-US'; // Set language
      speech.pitch = 1; // Voice pitch (1 = normal)
      speech.rate = 1.5; // Voice rate (1 = normal)
      window.speechSynthesis.speak(speech); // Speak the text
    } else {
      console.error('Sorry, your browser does not support text-to-speech.');
    } 
}