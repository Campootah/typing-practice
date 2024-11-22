// EventListener for buttons on main menu, brings user to respective pages
function redirectWebpage(url){
    console.log("in redirectWebpage");
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

// timer for speed typing
// saves the number of minutes selected for the timer
function saveNumMins(mins){
    // saving to sessionStorage (temporary)
    sessionStorage.setItem('minutes', mins);
  }
  // gets the number of minutes selected for the timer
  function getNumMins(){
    return sessionStorage.getItem('minutes');
  }