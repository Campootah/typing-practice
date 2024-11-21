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

    if (e.results[0].isFinal) {
        alert(text);

        switch (true) {
            case text.includes('top words'):
                redirectWebpage(3000);
                break;
            case text.includes('home words'):
                redirectWebpage(3001);
                break;
            case text.includes('right words'):
                redirectWebpage(3002);
                break;
            case text.includes('left words'):
                redirectWebpage(3003);
                break;
            case text.includes('all words'):
                redirectWebpage(3004);
                break;

            case text.includes('one'):
                redirectWebpage(1);
                break;
            case text.includes('two'):
                redirectWebpage(2);
                break;
            case text.includes('three'):
                redirectWebpage(3);
                break;
            case text.includes('four'):
                redirectWebpage(4);
                break;
            case text.includes('five'):
                redirectWebpage(5);
                break;
            case text.includes('six'):
                redirectWebpage(6);
                break;
            case text.includes('seven'):
                redirectWebpage(7);
                break;            
            case text.includes('28'):
                redirectWebpage(28);
            break;
            case text.includes('random'):
                redirectWebpage(1000);
                break;       
            case text.includes('top'):
                redirectWebpage(2000);
                break;  
            case text.includes('home'):
                redirectWebpage(2001)
                break;   
            case text.includes('bottom'):
                redirectWebpage(2002);
                break;     
            case text.includes('left'):
            redirectWebpage(2003);
            break;    
            case text.includes('right'):
                redirectWebpage(2004);
                break;    
            case text.includes('uppercase'):
                redirectWebpage(2005);
                break;  
            case text.includes('numbers'):
                redirectWebpage(2006);
                break;
            case text.includes('punctuation'):
                redirectWebpage(2007);
                break;
            case text.includes('back'):
            case text.includes('menu'):
                window.location = "../index.html";
                break;
            case text.includes('help'):
                speak('Welcome to the level selection screen. There are 40 levels at the moment. To open a level, say the level number.');
                break;
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
      window.speechSynthesis.speak(text); // Speak the text
    } else {
      console.error('Sorry, your browser does not support text-to-speech.');
    } 
}