
// // ----------------SPEECH RECOGNITION-------------------------
window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new window.SpeechRecognition();
recognition.interimResults = true; // gives live display - false would wait till we stop talking then display

let p = document.createElement('p');

recognition.addEventListener('result', (e) => {
    const text = Array.from(e.results).map(result => result[0]).map(result => result.transcript).join('');

    p.innerText = text;

    if (e.results[0].isFinal){
        if (text.includes('lessons')){
            window.location = "html/lessons.html";
        }
        if (text.includes('practice')){
            window.location = "html/practice.html";
        }
        if (text.includes('speed')){
            window.location = "html/time_selection.html";
        }
    }
});

recognition.addEventListener('end', () => {
    recognition.start();
})

recognition.start();