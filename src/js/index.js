// EventListener for buttons on main menu, brings user to respective pages
function redirectWebpage(url){
    location.replace(url);
}

// when TTS icon in navbar is clicked on, it changes to mute symbol (and mutes TTS)
function muteTTS(){
    const icon = document.getElementById("TTSIcon");

    // Mutes
    if(icon.textContent == 'volume_up'){
        icon.textContent = 'volume_off';
    }
    // Unmutes
    else{
        icon.textContent = 'volume_up';
    }
}

// ----------------- speech recognition ----------------------

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new window.SpeechRecognition();
recognition.interimResults = true; // gives live display - false would wait till we stop talking then display

let p = document.createElement('p');

recognition.addEventListener('result', (e) => {
    const text = Array.from(e.results).map(result => result[0]).map(result => result.transcript).join('');

    p.innerText = text;

    if (e.results[0].isFinal) {
        switch (true) {
            case text.includes('lessons'):
                window.location = "../html/lessons.html";
                break;
            case text.includes('practice'):
                window.location = "../html/practice.html";
                break;
            case text.includes('speed'):
                alert("opening speed type");
                break;
        }
    }
});

recognition.addEventListener('end', () => {
    recognition.start();
})

recognition.start();
