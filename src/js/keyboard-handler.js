var mode = 'enter'
const head = document.getElementById('head')
const Current = document.getElementById('Current')
const New = document.getElementById('New')
soundBase = window.testList
const Keys = ['`', '1', '2', '3', '4', '5','6','7', '8', '9',  '0', '-', '=', 'Backspace', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '|', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", '"', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '*', '+', '!', '@', '#', '$', '%', '^', '&', '(', ')', '_', '{', '}', '\\', ':', '<', '>', '?', '~', ' ', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U','I','O', 'P', 'A', 'S', 'D', 'F', 'G', 'G', 'H', 'J', 'K', 'L', 'Z', 'X', 'C', 'V', 'B', 'N', 'M']




if (mode == 'enter'){
    head.textContent = 'Choose a key'
    Current.textContent = 'Current Key Audio:'
    New.textContent = 'New Key Audio:'
    let utterance = new SpeechSynthesisUtterance("Choose a key to change it's audio or press escape to leave, then press any key to continue");
    console.log('speaking')
    speechSynthesis.speak(utterance);
    utterance.onend = () => {
        mode = 'selection'; // Change mode to 'selection' after the utterance ends
    };
}


document.addEventListener("keydown", e =>{
    if (mode == 'enter'){
        head.textContent = 'Choose a key'
        Current.textContent = 'Current Key Audio:'
        New.textContent = 'New Key Audio:'
        let utterance = new SpeechSynthesisUtterance("Choose a key to change it's audio or press escape to leave, then press any key to continue");
        console.log('speaking')
        speechSynthesis.speak(utterance);
        utterance.onend = () => {
            mode = 'selection'; // Change mode to 'selection' after the utterance ends
        };
    }
    if (e.key === "Escape") {
        window.location.href = "https://www.example.com"; // Replace with your specific URL
    }
})
var tempIndex;
var vocalInput;
if ('speechSynthesis' in window) {
   
    console.log('supported')
    document.addEventListener('keydown', e => {
        if (mode == 'selection'){
            console.log(soundBase[Keys.indexOf(e.key)])
            const speech = new SpeechSynthesisUtterance(soundBase[Keys.indexOf(e.key)] + '. Press any button to continue.');
            if (typeof soundBase[Keys.indexOf(e.key)] != 'undefined') {
                head.textContent = e.key
                tempIndex = Keys.indexOf(e.key)
                Current.textContent = 'New Key Audio: ' + soundBase[Keys.indexOf(e.key)]
                if (window.speechSynthesis.speaking) {
                    window.speechSynthesis.cancel();
                }
                speech.lang = "en-US";
                window.speechSynthesis.speak(speech);
                console.log('speaking')
                speech.onend = ()=>{
                    mode = 'changing'
                }


            }else{
                console.log('invalid')
                if (window.speechSynthesis.speaking) {
                    window.speechSynthesis.cancel();
                }
                let utterance = new SpeechSynthesisUtterance("This key cannot be changed, press any key to continue");
                speechSynthesis.speak(utterance);
                utterance.onend = () => {
                    mode = 'enter'; // Change mode to 'selection' after the utterance ends
                };
            }
    }
    if (mode == 'changing'){
        if (window.speechSynthesis.speaking) {
            window.speechSynthesis.cancel();
        }
        let utterance = new SpeechSynthesisUtterance("press enter, then press Tab twice, then press spacebar to start recording");
        speechSynthesis.speak(utterance);
        utterance.onend = () =>{
            mode = 'record'
        }
    }
    if (e.key == 'Enter'){
        console.log('enter 101')
        if (mode == 'record'){


            let recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
            let isListening = false;


            // Set up the recognition event handlers
            recognition.onresult = (event) => {
                console.log(event.results[0][0])
               
            };


            recognition.onend = () => {
                isListening = false; // Mark listening as false when recognition ends
                recognition.stop();
                mode = 'confirmation'
            };


            recognition.onresult = (result) => {
                vocalInput = result.results[0][0].transcript;
                console.log(vocalInput);
                New.textContent = 'New Key Audio: ' + vocalInput
            }


            recognition.start()
        }
    }
    if(mode == 'confirmation'){
        console.log('confirmation')
        if (window.speechSynthesis.speaking) {
            window.speechSynthesis.cancel();
        }
        let utterance = new SpeechSynthesisUtterance("The new audio is " + vocalInput + ". Press spacebar to confirm change or press backspace to cancel change, then press any button to continue");
        speechSynthesis.speak(utterance);
        utterance.onend = () =>{
            mode = 'end'
        }
    }
    if(e.key == ' '){
        console.log('spacebar')
        if(mode == 'end'){
            if (window.speechSynthesis.speaking) {
                window.speechSynthesis.cancel();
            }
            let utterance = new SpeechSynthesisUtterance("Change confirmed, press any button to continue");
            speechSynthesis.speak(utterance);
            utterance.onend = () =>{
                console.log(mode)
                console.log('on end')
                soundBase[tempIndex] = vocalInput
                window.testList = soundBase
                mode = 'enter'
            }
        }
    }
    if(e.key == 'Backspace'){
        if(mode == 'end'){
            let utterance = new SpeechSynthesisUtterance("Change cancelled, press any button to continue");
            speechSynthesis.speak(utterance);
            utterance.onend = () =>{
                mode = 'enter'
            }
        }
    }
   
  })
  // Speech Synthesis supported 🎉
} else {
  // Speech Synthesis Not Supported 😣
  alert("Sorry, your browser doesn't support text to speech!");
}