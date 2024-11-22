"use strict";

window.testList = ['Grave', 'One', 'Two', 'Three', 'Four', 'Five','Six','Seven', 'Eight', 'Nine',  'Zero', 'Hyphen', 'Equal', 'Backspace', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'Open Bracket', 'Close Bracket', 'Pipe', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'Semicolon', "Single Quote", 'Double  Quote', 'z', 'x', 'c', 'v', 'b', 'n', 'm', 'Comma', 'Dot', 'Slash', 'Asterisk', 'Addition', 'Exclamation', 'At', 'Pound', 'Dollar Sign', 'Percent', 'Carat', 'And', 'Left Bracket', 'Right Bracket', 'Underscore', 'Open Brace', 'Close Brace', 'Backslash', 'Colon', 'Less Than', 'Greater Than', 'Question Mark', 'Tilde', 'Spacebar', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U','I','O', 'P', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Z', 'X', 'C', 'V', 'B', 'N', 'M']

const LETTERS_LOWER = "abcdefghijklmnopqrstuvwxyz";
const TOP_ROW = "qwertyuiop"
const HOME_ROW = "asdfghjkl;"
const BOTTOM_ROW = "zxcvbnm,./"
const LEFT_HAND = "qwertasdfgzxcvb"
const RIGHT_HAND = "jkl;uiopm,./nhy"
const LETTERS_UPPER = LETTERS_LOWER.toUpperCase();
const DIGITS = "0123456789";
const PUNCTUATION = "`~!@#$%^&*()_+-=[]{};':\",./<>?";
const wordLessons = [6,12,18,34,3000,3001,3002,3003,3004,4000]
const LESSONS = new Map([
  //Lessons
  ["Lesson 0", ["xcghasdjlcgysjlcgsjcygsljdcsdlyfgasdlycgslycgsdycs", " "]],
  ["Lesson 1", ["f j", "ff jj", "fj fj jf jf"]],
  ["Lesson 2", ["d k", "dd kk", "dk dk kd kd"]],
  ["Lesson 3", ["s l", "ss ll", "sl sl ls ls"]],
  ["Lesson 4", ["a ;", "aa ;;", "a; a; ;a ;a"]],
  ["Lesson 5", ["g h", "gg hh", "gh gh hg hg"]],
  ["Lesson 6", ["hall ask slash gas dash flag saga gals all ash gala had flash flask lash sad fall alas klad glass has salad"]],
  ["Lesson 7", ["r u", "rr uu", "ru ru ur ur"]],
  ["Lesson 8", ["e i", "ee ii", "ei ei ie ie"]],
  ["Lesson 9", ["w o", "ww oo", "wo wo ow ow"]],
  ["Lesson 10", ["q p", "qq pp", "qp qp pq pq"]],
  ["Lesson 11", ["t y", "tt yy", "ty ty yt yt"]],
  ["Lesson 12", ["poetry wipeout tie pity your quite equip trope euro twirp our quote write wrote tire power trio pie you route"]],
  ["Lesson 13", ["v m", "vv mm", "vm vm mv mv"]],
  ["Lesson 14", ["c ,", "cc ,,", "c, c, ,c ,c"]],
  ["Lesson 15", ["x .", "xx ..", "x. x. .x .x"]],
  ["Lesson 16", ["z /", "zz //", "z/ z/ /z /z"]],
  ["Lesson 17", ["b n", "bb nn", "bn bn nb nb"]],
  ["Lesson 18", ["cabin banjo bacon venom vocation combine men mankind ban can vaccine bin zen maven bum zebra mimic cabal balcony bazooka nexus"]],
  ["Lesson 19", ["F J", "FF JJ", "FJ FJ JF JF"]],
  ["Lesson 20", ["D K", "DD KK", "DK DK KD KD"]],
  ["Lesson 21", ["S L", "SS LL", "SL SL LS LS"]],
  ["Lesson 22", ["A ;", "AA ;;", "A; A; ;A ;A"]],
  ["Lesson 23", ["G H", "GG HH", "GH GH HG HG"]],
  ["Lesson 24", ["R U", "RR UU", "RU RU UR UR"]],
  ["Lesson 25", ["E I", "EE II", "EI EI IE IE"]],
  ["Lesson 26", ["W O", "WW OO", "WO WO OW OW"]],
  ["Lesson 27", ["q p", "qq pp", "QP QP PQ PQ"]],
  ["Lesson 28", ["T Y", "TT YY", "TY TY YT YT"]],
  ["Lesson 29", ["V M", "VV MM", "VM VM MV MV"]],
  ["Lesson 30", ["C ,", "CC ,,", "C, C, ,C ,C"]],
  ["Lesson 31", ["X .", "XX ..", "X. X. .X .X"]],
  ["Lesson 32", ["Z /", "ZZ //", "Z/ Z/ /Z /Z"]],
  ["Lesson 33", ["B N", "BB NN", "BN BN NB NB"]],
  ["Lesson 34", ["Lisbon, The Capital City Of Portugal, Is Home To The Longest Bridge In Europe. The Vasco Da Gama Bridge In Lisbon Is Seventeen Kilometers Or Ten And A Half Miles Long."]],
  ["Lesson 35", ["4 7", "44 77", "47 47 74 74"]],
  ["Lesson 36", ["3 8", "33 88", "38 38 83 83"]],
  ["Lesson 37", ["2 9", "22 99", "29 29 92 92"]],
  ["Lesson 38", ["1 0", "11 00", "10 10 01 01"]],
  ["Lesson 39", ["5 6", "55 66", "56 56 65 65"]],
  ["Lesson 40", ["2131 237068 98 32 123 834 03824 49 0394 83 576 3 75 3477 74 3 783 2138 1988 1984 82 3025678419"]],
  
  //Practice
  ["lesson 1000", ["dad"]],
  ["lesson 2000", ["TOP_ROW"]],
  ["lesson 2001", ["HOME_ROW"]],
  ["lesson 2002", ["BOTTOM_ROW"]],
  ["lesson 2003", ["LEFT_HAND"]],
  ["lesson 2004", ["RIGHT_HAND"]],
  ["lesson 2005", ["LETTERS_UPPER"]],
  ["lesson 2006", ["DIGITS"]],
  ["lesson 2007", ["PUNCTUATION"]],
  ["lesson 3000", ["top words"]],
  ["lesson 3001", ["home words"]],
  ["lesson 3002", ["left words"]], 
  ["lesson 3003", ["right words"]], 
  ["lesson 3004", ["All words"]], 

  ["lesson 4000", ["All words"]]
 
])
var lessonNum = parseInt(localStorage.getItem("lessonNumber"));
var lessonPhase = 0;//changes as lesson progresses
var lessonCompleted = false;
var lessonStart = false;
var wordCount = 15;
var wordList = [
  "the", "be", "and", "a", "of", "to", "in", "i", "you", "it", "have", "to", 
  "that", "for", "do", "he", "with", "on", "this", "not", "we", "that", "not", 
  "but", "they", "say", "at", "what", "his", "from", "go", "or", "by", "get", 
  "she", "my", "can", "as", "know", "if", "me", "your", "all", "who", "about", 
  "their", "will", "so", "would", "make", "just", "up", "think", "time", "there", 
  "see", "her", "as", "out", "one", "come", "people", "take", "year", "him", 
  "them", "some", "want", "how", "when", "which", "now", "like", "other", "could", 
  "our", "into", "here", "then", "than", "look", "way", "more", "these", "no", 
  "thing", "well", "because", "also", "two", "use", "tell", "good", "first", 
  "man", "day", "find", "give", "more", "new", 
  "one", "us", "any", "those", "very", "her", "need", "back", "there", "should", 
  "even", "only", "many", "really", "work", "life", "why", "right", "down", "on", 
  "try", "let", "something", "too", "call", "woman", "may", "still", "through", 
  "mean", "after", "never", "no", "world", "in", "feel", "yeah", "great", "last", 
  "child", "oh", "over", "ask", "when", "as", "school", "state", "much", "talk", 
  "out", "keep", "leave", "put", "like", "help", "big", "where", "same", "all", 
  "own", "while", "start", "three", "high", "every", "another", "become", "most", 
  "between", "happen", "family", "over", "president", "old", "yes", "house", "show", 
  "again", "student", "so", "seem", "might", "part", "hear", "its", "place", 
  "problem", "where", "believe", "country", "always", "week", "point", "hand", "off", 
  "play", "turn", "few", "group", "such"
];
var topWordList = [
"type", "try", "true", "quite", "quit", "quiet", 
  "yet", "query", "tie", "tip", "toy", "rye", 
  "rip", "pure", "pie", "peer", "port", "pout", 
  "poetry", "rope", "route", "queue", "pope", 
  "top", "tour", "power", "pour", "peer", "quota", 
  "quip"
];
var homeWordList = [
"sad", "had", "lad", "fall", "hall", "dash", 
  "all", "ask", "half", "lash", "flask", "salad", 
  "gas", "hag", "lag", "gal", "alas", "skid", "shall", 
  "aids", "kills", "saga", "gala", "hassle"
];
var leftWordList = [
  "bag", "bed", "bad", "tab", "bat", 
  "vase", "vast", "bar", "base", "cab", "cart", 
  "cat", "crate", "fad", "fast", "far", "grate", 
  "gate", "grab", "rat", "rate", "tar", "tear", 
  "wage", "war", "wear", "web", "wet", "zest"
];
var rightWordList = [
"him", "hop", "how", "hum", "yum", "you", 
"nip", "hip", "pin", "pun",  
"join", "joke", "pink", "link", "moon", 
"noon", "noun", "plum", "pool", "poll", 
"pull", "loom", "lion", "mile", "mill", "monk"
];
let startDate;
let wordStorage = "";
let initialMessage = "";
let initialWord = "";


let button;
var seconds = 60;
var minutes = getNumMins();
var current_mins;
// creates a timer according to the amount of time selected in timed tests page
function createTimer(){
  lessonStart = true;
  button.style.display = "none";
  // starts at 60 secs

  // every 1 sec
  function tick(){
    // doesn't work for some reason
      let counter = document.getElementById('timer');
      // ex. 4 mins --> 3 min 59 secs
      current_mins = minutes - 1;
      seconds--;

      // updates the HTML displaying timer
      // makes sure that 1 sec is displayed as 0:01 instead of 0:1
      if(seconds < 10){
        counter.innerHTML = current_mins.toString() + ":0" + seconds.toString();
      }
      else{
          counter.innerHTML = current_mins.toString() + ":" + seconds.toString();
      }
      
      // recursive until time runs out
      if(seconds > 0){
          setTimeout(tick, 1000);
      }
      else{
          if(current_mins >= 1){
            saveNumMins(current_mins);
            createTimer();
          }
      }
  }
  tick();
}

if(lessonNum == 4000){
  
  wordCount = 10000;
  document.addEventListener('DOMContentLoaded', (event) => {
    console.log("in lessonNum")
    // Timer button 
    button = document.createElement('button'); 
    button.className = 'timer_btn'; 
    button.textContent = 'Start Timer'; 
    button.onclick = createTimer; 
    // Timer
    const timerDiv = document.createElement('div'); 
    const timerHeader = document.createElement('h3');
    timerHeader.id = 'timer';
    timerHeader.style.textAlign = 'center';
    timerHeader.style.fontSize = '3rem';
    timerHeader.style.fontWeight = '600';
    timerHeader.style.color = '#16325B';
    
    // Find the element after the navbar 
    const h3 = document.querySelector('h3'); 
    const firstElementAfterH3 = h3.nextElementSibling;

    timerDiv.appendChild(timerHeader);
    // Insert the button and timer after the navbar 
    h3.parentNode.insertBefore(button, firstElementAfterH3); 
    button.parentNode.insertBefore(timerDiv, button.nextSibling);

  })
}



class TypingPractice {
  constructor(root) {
    this.dom = {
      root: root,
      given: root.querySelector(".given"),
      typed: root.querySelector(".typed"),
      input: root.querySelector("input"),
      count: root.querySelector(".count"),
      weights: root.querySelector(".weights"),
    };


    this.bufferSize = 35;
    this.focused = false;
    this.maxWordLength = 9;
    this.totalCharsTyped = getLocal("totalCharsTyped") || 0;


    this._initWeights();
    this._initEvents();
    this._initBuffers();
    this._initLines();
    this.render();
  }


  _initWeights() {
    const keys = ["lettersLower", "lettersUpper", "digits", "punctuation"];
    this.weights = keys.reduce((obj, k) => {
      const v = getLocal(k);
      return { ...obj, [k]: typeof v === "undefined" ? 1 : v };
    }, {});
  }


  _saveWeights() {
    Object.getOwnPropertyNames(this.weights).forEach((k) =>
      setLocal(k, this.weights[k])
    );
  }


  _initEvents() {
    this.dom.input.addEventListener("focus", () => {
      document.getElementById("typedIn").focus();
    });


    this.dom.input.addEventListener("blur", () => {
      document.getElementById("typedIn").focus();
    });


    this._charsetRegExp = new RegExp(
      `^[a-zA-Z0-9 ${escapeSpecialRegExpChars(PUNCTUATION)}]\$`
    );


    this.dom.input.addEventListener("keydown", (e) => {
      if(lessonStart){
      if (e.key === "Backspace") {
        if (lessonNum == 0 && lessonPhase == 0) {
          this.nextPhase();
        }
        if (lessonCompleted) {
          if(lessonNum<1000){
          location.href = "../html/lessons.html";
          }
          else if(lessonNum!=3004){
            location.href = "../html/practice.html";
          }
          else{
            location.href = "../index.html";
          }
          lessonCompleted = false;
          lessonStart = false;
        }
        else{
          this.backup();
        }
        if(this.typed.length == 0){
          //TEXT TO SPEECH
          if(wordLessons.indexOf(lessonNum)>0){
            getWords("next word is " + this.given.split(" ")[0])
          }
          else{
            let tempWord = this.given.split(" ")[0].split("")
            let tempSpeaker = "";
            for(let i = 0; i<tempWord.length; i++){
              tempSpeaker += tempWord[i];
              if(i+1!=tempWord.length){
                tempSpeaker+= " ";
              }
            }
            getWords("next word is " + characterReplace(tempSpeaker));
          }
        }
      } else if(e.keyCode == 32 && lessonCompleted && lessonNum<1000){
        lessonNum++;
        lessonPhase = 0;
        this._resetCells();
        this._initBuffers();
        this.render();
        lessonCompleted = false;
        lessonStart = false;

      } else if(e.keyCode == 32 && lessonCompleted && lessonNum>=1000){
        this._resetCells();
        this._initBuffers();
        this.render();
        lessonCompleted = false;
        lessonStart = false;

      }else if (!e.ctrlKey && e.key.match(this._charsetRegExp)) {
        if(startDate == null){
          startDate = new Date();
        }
        if(lessonCompleted!=true){
          this.advance(e.key);
        }
      } else {
        return;
      }
      e.preventDefault();
      }
      else{
        if(lessonNum == 4000 && lessonStart == false){
          createTimer();
        }
        lessonStart = true;
        if(lessonPhase == 0){
        startUpSpeech(initialMessage + " " + initialWord);
        }
        else{
          startUpSpeech(initialWord);
        }

      }
    });


    this.dom.weights.querySelectorAll(":scope > div").forEach((div) => {
      const getWeightKey = (child) => {
        let elem = child;
        while (elem.parentNode.className !== "weights") {
          elem = elem.parentNode;
        }
        const key = elem.className;
        if (!Object.getOwnPropertyNames(this.weights).includes(key)) {
          throw Error(`Unknown user setting '${key}'.`);
        }
        return key;
      };


      div.addEventListener("wheel", (e) => {
        const key = getWeightKey(e.target);
        const v = this.weights[key] - Math.sign(e.deltaY);
        if (v >= 0 && v <= 99) {
          this.weights[key] = v;
          this._saveWeights();
          this._initBuffers();
          this.render();
        }
        e.preventDefault();
      });


      div.querySelector("button.incr").addEventListener("click", (e) => {
        const key = getWeightKey(e.target);
        const v = this.weights[key] + 1;
        if (v <= 99) {
          this.weights[key] = v;
          this._saveWeights();
          this._initBuffers();
          this.render();
        }
      });


      div.querySelector("button.decr").addEventListener("click", (e) => {
        const key = getWeightKey(e.target);
        const v = this.weights[key] - 1;
        if (v >= 0) {
          this.weights[key] = v;
          this._saveWeights();
          this._initBuffers();
          this.render();
        }
      });
    });
  }


  _initBuffers() {

    const words = [];
    // while (words.join(" ").length < this.bufferSize * 5) {
    words.push(this._makeRandomWord());
    // }
    
    
    switch(lessonNum){
      case 1:
        initialMessage = "The backspace key is the bigger key that is top right of the keyboard. The big long bar at the bottom middle of the keyboard is the space bar. Place your index fingers on the two keys in the middle of the keyboard with bumps on them. The key with the bump on the left is F, and on the right is J. Use only your index fingers for these keys.";
        break;
      case 2:
        initialMessage = "The key directly left of F is the D key. The key directly right of J is the K key. Use only your middle fingers for these keys.";
        break;
      case 3:
        initialMessage = "The key directly left of D is the S key. The key directly right of K is the L key. Use only your ring fingers for these keys.";
        break;
      case 4:
        initialMessage = "The key directly left of S is the A key. The key directly right of L is the ; key. Use only your pinky fingers for these keys.";
        break;
      case 5:
        initialMessage = "The key directly right of F is the G key. The key directly left of J is the H key. Use only your index fingers for these keys.";
        break;
      case 6:
        initialMessage = "Type what you hear and put a space in between every word.";
        break;
      case 7:
        initialMessage = "The left key above F is the R key. The left key above J is the U key. Use only your index fingers for these keys.";
        break;
      case 8:
        initialMessage = "The left key above D is the E key. The left key above K is the I key. Use only your middle fingers for these keys.";
        break;
      case 9:
        initialMessage = "The left key above S is the W key. The left key above L is the O key. Use only your ring fingers for these keys.";
        break;
      case 10:
        initialMessage = "The left key above A is the Q key. The left key above ; is the P key. Use only your pinky fingers for these keys.";
        break;
      case 11:
        initialMessage = "The key directly right of R is the T key. The key directly left of U is the Y key. Use only your index fingers for these keys";
        break;
      case 12:
        initialMessage = "Type what you hear and put a space in between every word.";
        break;
      case 13:
        initialMessage = "The right key below F is the V key. The right key below J is the M key. Use onnly your index fingers for these keys.";
        break;
      case 14:
        initialMessage = "The key directly to the left of V is the C key. The key directly to the right of M is the , key. Use only your middle fingers for these keys.";
        break;
      case 15:
        initialMessage = "The key directly to the left of C is the X key. The key directly to the right of , is the . key. Use only your ring fingers for these keys.";
        break;
      case 16:
        initialMessage = "The key directly to the left of X is the Z key. The key directly to the right of . is the / key. Use only your pinky fingers for these keys.";
        break;
      case 17:
        initialMessage = "The key directly to the right of V is the B key. The key directly to the left of M is the N key. Use only your index fingers for these keys.";
        break;
      case 18:
        initialMessage = "Type what you hear and put a space in between every word.";
        break;
      case 19:
        initialMessage = "There are two shift keys both on the bottom row. One at the very left and one at the very right of the keyboard. If you need to make a character capital, hold down the shift key in the opposite hand with your pinky. For example, hold down right shift when typing uppercase F and left shift when typing uppercase J.";
        break;
      case 20: case 21: case 22: case 23: case 24: case 25: case 26: case 27: case 28: case 29: case 30: case 31: case 32: case 33:
        initialMessage = "All letters are capital but do not use caps lock.";
        break;
      case 34:
        initialMessage = "The first letter in every word is capitalized. The rest of the word will be in lower case. Put a space between each word.";
        break;
      case 35:
        initialMessage = "The key directly above R is the 4 key. The key directly above U is the 7 key. Use only your index fingers for these keys.";
        break;
      case 36:
        initialMessage = "The key directly above E is the 3 key. The key directly above I is the 8 key. Use only your middle fingers for these keys.";
        break;
      case 37:
        initialMessage = "The key directly above W is the 2 key. The key directly above O is the 9 key. Use only your ring fingers for these keys.";
        break;
      case 38:
        initialMessage = "The key directly above Q is the 1 key. The key directly above P is the 0 key. Use only your pinky fingers for these keys.";
        break;
      case 39:
        initialMessage = "The key directly above T is the 5 key. The key directly above Y is the 6 key. Use only your index fingers for these keys.";
        break;
      case 40:
        initialMessage = "A lot of numbers.";
        break;
      case 1000: case 2000: case 2001: case 2002: case 2003: case 2004: case 2005: case 2006: case 2007: case 2008:
        initialMessage = "There is a space after every five characters."
        break;
      case 3000: case 3001: case 3002: case 3003: case 3004: case 4000:
        initialMessage = "There is a space in between each word.";
        break;
    }
    //SAYS THINGS THAT EXPLAIN LESSON, FOR EXAMPLE: F AND J ARE THE THINGS WITH THE UNDERLINE THINGS
    //SAYS FIRST WORD
    let tempSpeaker = "";
    if(wordLessons.indexOf(lessonNum)>0){
       tempSpeaker = words[0].split(" ")[0];
    }
    else{
      let tempWord = words[0].split(" ")[0].split("")
      
      for(let i = 0; i<tempWord.length; i++){
        tempSpeaker += tempWord[i];
        if(i+1!=tempWord.length){
          tempSpeaker+= " ";
        }
      }
      tempSpeaker = characterReplace(tempSpeaker);
    }
    initialWord = " first word is " + tempSpeaker;
    this.given = words.join(" ");
    this.typed = "";
  }


  _initLines() {
    const svg = this.dom.weights.querySelector(".lines");
    const x1 = Math.round(svg.clientWidth / 2) - 0.5;
    const y1 = -0.5;
    const bg = "#16325B";
    const stroke = "#16325B";
    const strokeWidth = 3;


    const makePath = (x1, y1, x2, y2) => {
      const radius = 20;
      const path = makeConnectingPath(x1, y1, x2, y2, radius);
      path.setAttributeNS(null, "stroke", stroke);
      path.setAttributeNS(null, "stroke-width", strokeWidth * 0.75);
      path.setAttributeNS(null, "fill", "none");
      return path;
    };


    const makePoint = (x, y) => {
      const radius = 3;
      const circle = makeSvgElement("circle");
      circle.setAttributeNS(null, "cx", x);
      circle.setAttributeNS(null, "cy", y);
      circle.setAttributeNS(null, "stroke", stroke);
      circle.setAttributeNS(null, "stroke-width", strokeWidth);
      circle.setAttributeNS(null, "fill", bg);
      circle.setAttributeNS(null, "r", radius);
      return circle;
    };


    this.dom.weights.querySelectorAll(":scope > div").forEach((d) => {
      const x2 =
        Math.round(d.offsetLeft + d.clientWidth / 2 + strokeWidth / 2) + 0.5;
      const y2 = Math.round(d.offsetTop) + 0.5;
      svg.append(makePath(x1, y1, x2, y2), makePoint(x2, y2));
    });


    svg.append(makePoint(x1, y1));
  }


  _makeCharset() {
    const s = this.weights;


        if(lessonNum >= 1000){
        if(lessonNum < 2000){
          return (
            LETTERS_LOWER.repeat(s.lettersLower) +
            LETTERS_UPPER.repeat(s.lettersUpper) +
            DIGITS.repeat(s.digits) +
            PUNCTUATION.repeat(s.punctuation)
            );
        }else{
          switch(lessonNum){
            case 2000: return TOP_ROW;
            case 2002: return BOTTOM_ROW;
            case 2001: return HOME_ROW;
            case 2003: return LEFT_HAND;
            case 2004: return RIGHT_HAND;
            case 2005: return LETTERS_UPPER;
            case 2006: return DIGITS;
            case 2007: return PUNCTUATION;
            case 3000: return wordList;
            case 3001: return topWordList;
            case 3002: return middleWordList;
            case 3003: return leftWordList;
            case 3004: return rightWordList;
            case 4000: return wordList;
          }


        }


      }else{
         return (LESSONS.get(`Lesson ${lessonNum}`)[lessonPhase]);
      }


  }


  _makeRandomWord() {
    // let length = Math.floor(Math.random() * this.maxWordLength + 1);
    let length = 5;
    const charset = this._makeCharset();
   
    // return [...new Array(length)].map(() => charset + "
    if(lessonNum >= 1000 && lessonNum <3000){
      let typingString = ""
      for(let i = 0; i < wordCount; i++ ){
        typingString += [...new Array(length)].map(() => randomChoice(charset)).join("")
        if(i!=wordCount-1){
          typingString+=" "
        }
      }
      return typingString;
    }
    else if (lessonNum >= 3000){
      let typingString = ""
      for(let i = 0; i < wordCount; i++ ){
        typingString += charset[Math.floor(Math.random()*charset.length)];
        if(i!=wordCount-1){
          typingString+=" "
        }
      }
      return typingString;
    }
    else{
      return charset;
    }                                                                  
   
  }


  _resetCells() {
    const bs = this.bufferSize;


    const reset = (parent) => {
      const cells = parent.querySelectorAll("div");
      if (cells.length !== bs) {
        // Clear the parent and create new cells.
        cells.forEach((c) => c.remove());
        parent.append(
          ...[...new Array(bs)].map(() => document.createElement("div"))
        );
      } else {
        // Reset existing cells.
        cells.forEach((c) => {
          c.className = "";
          c.innerHTML = "";
        });
      }
    };


    reset(this.dom.given);
    reset(this.dom.typed);
  }


  get totalCharsTyped() {
    return this._totalCharsTyped || 0;
  }


  set totalCharsTyped(v) {
    this._totalCharsTyped = v;
    setLocal("totalCharsTyped", v);
  }


  _renderPractice() {
    this._resetCells();


    const bs = this.bufferSize;
    const mid = Math.floor(bs / 2);
    const d = this.typed.length - mid;
    const given = d < 0 ? this.given.slice(0, bs) : this.given.slice(d, d + bs);
    const typed = d < 0 ? this.typed : this.typed.slice(d);


    let cellsGiven = this.dom.given.querySelectorAll("div");
    let cellsTyped = this.dom.typed.querySelectorAll("div");


    // Fill the cells.
    [...given].forEach((c, i) => (cellsGiven[i].innerHTML = c));
    [...typed].forEach((c, i) => (cellsTyped[i].innerHTML = c));


    // Highlight the current top-row cell.
    cellsGiven[typed.length].classList.add("hl");


    // Highlight and animate the current bottom-row cell.
    if (this.focused) {
      // Trick the browser into restarting the animation.
      cellsTyped[typed.length].replaceWith(document.createElement("div"));
      cellsTyped = this.dom.typed.querySelectorAll("div");
      cellsTyped[typed.length].classList.add("hl", "animated");
    }


    // Highlight errors.
    
    [...typed].forEach((c, i) => {
      if (given[i] !== c) {
        cellsGiven[i].classList.add("err");
        cellsTyped[i].classList.add("err");
      }
    });
    const totalGiven = this.given.slice("");
    const totalTyped = this.typed.slice("");

    let corrects = 0;
    let wronger = "";
    [...totalTyped].forEach((c, i) => {
      if (totalGiven[i] == c) {
        corrects++;
      }
      if(i == totalTyped.length-1 && totalGiven[i] != totalTyped[i]){
        //text to speech
        wronger += "  Wrong"
      }
      if(lessonNum < 1000){
        if (corrects == LESSONS.get(`Lesson ${lessonNum}`)[lessonPhase].length) {
          getWords("  next phase")
          this.nextPhase();
        }
      }
      else if(lessonNum >= 1000 && totalGiven.length == totalTyped.length && totalTyped.length-1 == i){
        let endDate = new Date();
        let finalDate = endDate - startDate 
        let accuracy = Math.floor(corrects/totalTyped.length)
        let wpm = Math.floor((wordCount*accuracy)/(finalDate/60000))
        //SAY WPM AND ACCURACY
        getWords(" your words per minute is " + wpm + "   your accuracy is  "+ accuracy*100 + "%");
        //exit practice
        this.nextPhase();
      }
    });
    if(lessonNum == 4000 && seconds <=0 && current_mins <= 0){
      let endDate = new Date();
        let finalDate = endDate - startDate 
        let accuracy = Math.floor(corrects/totalTyped.length)
        let wpm = Math.floor((corrects)/(finalDate/60000))
        //SAY WPM AND ACCURACY
        console.log(" your characters per minute is " + wpm + "   your accuracy is  "+ accuracy*100 + "%");
       
        getWords(" your characters per minute is " + wpm + "   your accuracy is  "+ accuracy*100 + "%");
        //exit practice
        this.nextPhase();
    }
    if(corrects!=totalTyped.length && lessonNum < 1000 && this.typed.length>1){
      //text to speech
      wronger += "   you still have a mistake!"
    }
    if(wronger!= ""){
      getWords(wronger);
    }
    const wordProgressGiven = this.given.split(" ");
    const wordProgressTyped = this.typed.split(" ");
    let wordArray = [];
    for(let i = 0; i<wordProgressGiven.length; i++){
      for(let j = 0; j < wordProgressGiven[i].length; j++){
        wordArray.push(wordProgressGiven[i]);
      }
      if(i+1!=wordProgressGiven.length){
        wordArray.push(" ")
      }
    }
    if(totalGiven[totalTyped.length] == " "){
      //TEXT TO SPEECH THE WORD
      if(wordLessons.indexOf(lessonNum)>0){
        getWords("next word is " +  wordArray[totalTyped.length+1]);

      }
      else{
        let tempWord = wordArray[totalTyped.length+1].split("")
        let tempSpeaker = "";
        for(let i = 0; i<tempWord.length; i++){
          tempSpeaker += tempWord[i];
          if(i+1!=tempWord.length){
            tempSpeaker+= " ";
          }
        }
        getWords("next word is " + characterReplace(tempSpeaker));
      }
    }
    

    


    this.dom.count.innerHTML = this.totalCharsTyped;
  }


  _renderWeights() {
    Object.getOwnPropertyNames(this.weights).forEach((k) => {
      const elem = this.dom.weights.querySelector(`.${k} .weight span`);
      elem.innerHTML = this.weights[k];
    });
  }


  render() {
    this._renderPractice();
    this._renderWeights();
  }


  advance(char) {
    this.typed += char;
    this.totalCharsTyped++;
    // const bs = this.bufferSize;
    // if (this.given.length < this.typed.length + Math.floor(bs / 2)) {
    //   this.given += " " + this._makeRandomWord();
    // }
    this.render();
  }


  backup() {
    if (this.typed.length > 0) {
      this.typed = this.typed.slice(0, -1);
      this.totalCharsTyped--;
      this.render();
    }
  }


  focus() {
    this.dom.input.focus();
    this.focused = true;
    this.render();
  }


  blur() {
    this.dom.input.blur();
    this.focused = false;
    this.render();
  }
  nextPhase() {
    if(lessonNum<1000){
      if (LESSONS.get(`Lesson ${lessonNum}`).length-1 <= lessonPhase) {
        //text to speech
        getWords("press space to go to the next lesson, press backspace to exit")
        lessonCompleted = true;
      }
      else {
        lessonPhase++;
        this._resetCells();
        this._initBuffers();
        this.render();
        lessonStart = false;
      }
    }
    else if(lessonNum>=1000){
      getWords("press space to go to restart, press backspace to exit")
      lessonCompleted = true;
    }


    
  }
}


class Metronome {
  constructor(root) {
    this.dom = {
      root: root,
      text: root.querySelector("span"),
      btnToggle: root.querySelector(".toggle"),
      btnFaster: root.querySelector(".faster"),
      btnSlower: root.querySelector(".slower"),
    };


    const bpm = getLocal("metronomeBPM");
    this.bpm = typeof bpm === "undefined" ? 90 : bpm;
    this._intervalID = null;
    this._initEvents();
    this.render();
  }


  _initEvents() {
    this.dom.root.addEventListener("wheel", (e) => {
      if (this.ticking) {
        this.bpm -= Math.sign(e.deltaY) * 5;
        e.preventDefault();
      }
    });
    this.dom.btnToggle.addEventListener("click", () => this.toggle());
    this.dom.btnFaster.addEventListener("click", () => (this.bpm += 5));
    this.dom.btnSlower.addEventListener("click", () => (this.bpm -= 5));
  }


  get bpm() {
    return this._bpm;
  }


  set bpm(value) {
    const v = parseInt(value);
    if (v >= 15 && v <= 600) {
      this._bpm = v;
      this.render();
      setLocal("metronomeBPM", v);
    }
  }


  _scheduleTick(time) {
    const osc = this._ac.createOscillator();
    const envelope = this._ac.createGain();


    osc.frequency.value = 800;
    envelope.gain.value = 1;
    envelope.gain.exponentialRampToValueAtTime(1, time + 0.001);
    envelope.gain.exponentialRampToValueAtTime(0.001, time + 0.02);
    osc.connect(envelope);
    envelope.connect(this._ac.destination);


    osc.start(time);
    osc.stop(time + 0.03);
  }


  get ticking() {
    return this._intervalID !== null;
  }


  start() {
    if (this.ticking) {
      throw Error("Metronome is already running");
    }
    this._ac = new (window.AudioContext || window.webkitAudioContext)();
    this._nextTickTime = this._ac.currentTime + 60 / this.bpm;
    this._intervalID = setInterval(() => {
      while (this._nextTickTime < this._ac.currentTime + 0.1) {
        this._scheduleTick(this._nextTickTime);
        this._nextTickTime += 60 / this.bpm;
      }
    }, 25);
    this.render();
  }


  stop() {
    if (this.ticking) {
      clearInterval(this._intervalID);
      this._ac = null;
      this._nextTickTime = 0;
      this._intervalID = null;
    }
    this.render();
  }


  toggle() {
    return this.ticking ? this.stop() : this.start();
  }


  render() {
    this.dom.root.className = this.ticking ? "on" : "off";
    this.dom.text.innerHTML = this.ticking ? `${this.bpm} BPM` : "metronome";
  }
}


//
// BEGIN utils
//


function randomChoice(collection) {
  const n = Math.floor(Math.random() * collection.length);
  return collection[n];
}


function setLocal(key, value) {
  return window.localStorage.setItem(key, JSON.stringify(value));
}


function getLocal(key) {
  const item = window.localStorage.getItem(key);
  return item === null ? undefined : JSON.parse(item);
}


function escapeSpecialRegExpChars(str) {
  return str.replace(/[-[\]{}()*+!<=:?.\/\\^$|#\s,]/g, "\\$&");
}


function makeSvgElement(tagName) {
  return document.createElementNS("http://www.w3.org/2000/svg", tagName);
}


function makeConnectingPath(x1, y1, x2, y2, radius = 25) {
  const dx = x2 - x1;
  const dy = y2 - y1;
  const my = Math.round(dy / 2) + 0.5;
  const sx = Math.sign(dx);
  const sy = Math.sign(dy);
  const maxRadius = Math.min(Math.abs(dx / 2), Math.abs(dy / 2));
  const r = radius > maxRadius ? maxRadius : radius;
  const b = 0.667;


  const cmds = [
    `M ${x1} ${y1}`,
    `v ${my - sy * r}`,
    `c 0 ${sy * r * b}, ${sx * r * (1 - b)} ${sy * r}, ${sx * r} ${sy * r}`,
    `h ${dx - sx * r * 2}`,
    `c ${sx * r * b} 0, ${sx * r} ${sy * r * (1 - b)}, ${sx * r} ${sy * r}`,
    `v ${my - sy * r}`,
  ];


  const path = makeSvgElement("path");
  path.setAttributeNS(null, "d", cmds.join(" "));
  return path;
}


//
// END utils
//


const metronome = new Metronome(document.getElementById("metronome"));
const practice = new TypingPractice(document.getElementById("practice"));


practice.focus();

//recognize and tts keys

//const mode = document.getElementById('colorMode').value;

const keys = ['`', '1', '2', '3', '4', '5','6','7', '8', '9',  '0', '-', '=', 'Backspace', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '|', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", '"', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '*', '+', '!', '@', '#', '$', '%', '^', '&', '(', ')', '_', '{', '}', '\\', ':', '<', '>', '?', '~', ' ', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U','I','O', 'P', 'A', 'S', 'D', 'F', 'G', 'G', 'H', 'J', 'K', 'L', 'Z', 'X', 'C', 'V', 'B', 'N', 'M']
alert(window.testList);
const TypedInput = document.getElementById('typedIn')
var test =  ['one', 'two', 'Ben']
localStorage.setItem('keyName', JSON.stringify(test));
localStorage.setItem('test', 150);


if ('speechSynthesis' in window) {
    TypedInput.addEventListener('keydown', e =>{
      const speech = new SpeechSynthesisUtterance(soundBase[keys.indexOf(e.key)]+ " " + wordStorage);
      wordStorage = "";
      speech.rate = 1.4
      if (soundBase[keys.indexOf(e.key)]!='undefined'){
        if (window.speechSynthesis.speaking) {
          window.speechSynthesis.cancel();
        }
        speech.lang = "en-US";
        window.speechSynthesis.speak(speech);
        console.log('speaking');
      }
    })
    // Speech Synthesis supported 🎉
}else{
    // Speech Synthesis Not Supported 😣
    alert("Sorry, your browser doesn't support text to speech!");


}


function startUpSpeech(text){
  const speech = text;
  wordStorage += speech;
}

function characterReplace(string){
  string = " " + string + " ";
  let tempArray = ['`', '1', '2', '3', '4', '5','6','7', '8', '9',  '0', '-', '=', 'Backspace', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '|', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", '"', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '*', '+', '!', '@', '#', '$', '%', '^', '&', '(', ')', '_', '{', '}', '\\', ':', '<', '>', '?', '~', ' ', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U','I','O', 'P', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Z', 'X', 'C', 'V', 'B', 'N', 'M'];
  let secondArray = ['Grave', 'One', 'Two', 'Three', 'Four', 'Five','Six','Seven', 'Eight', 'Nine',  'Zero', 'Hyphen', 'Equal', 'Backspace', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'Open Bracket', 'Close Bracket', 'Pipe', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'Semicolon', "Single Quote", 'Double  Quote', 'z', 'x', 'c', 'v', 'b', 'n', 'm', 'Comma', 'Dot', 'Slash', 'Asterisk', 'Addition', 'Exclamation', 'At', 'Pound', 'Dollar Sign', 'Percent', 'Carat', 'And', 'Left Bracket', 'Right Bracket', 'Underscore', 'Open Brace', 'Close Brace', 'Backslash', 'Colon', 'Less Than', 'Greater Than', 'Question Mark', 'Tilde', 'Spacebar', 'capital Q', 'capital  W', 'capital  E', 'capital  R', 'capital  T', 'capital  Y', 'capital  U','capital  I','capital  O', 'capital  P', 'capital  A', 'capital  S', 'capital  D', 'capital  F', 'capital  G', 'capital  H', 'capital  J', 'capital  K', 'capital  L', 'capital  Z', 'capital  X', 'capital  C', 'capital  V', 'capital  B', 'capital  N', 'capital  M'];

  [...tempArray].forEach((c,i)=>{
    string = string.replace(" " + c + " ", " " + secondArray[i] + " ");
  })
  return string;
}

function getWords(text){
  wordStorage += "  " + text;
}

// ----------------SPEECH RECOGNITION-------------------------

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new window.SpeechRecognition();
recognition.interimResults = true; // gives live display - false would wait till we stop talking then display

let p = document.createElement('p');

recognition.addEventListener('result', (e) => {
    const text = Array.from(e.results).map(result => result[0]).map(result => result.transcript).join('');

    p.innerText = text;

    if (e.results[0].isFinal){
      if (lessonNum < 1000){
        if (text.includes('back') || text.includes('lessons')){
          window.location = "../html/lessons.html";
        }
      }
      else if (lessonNum > 1001 && lessonNum != 4000){
        window.location = "../html/practice.html";
      }
      if (text.includes('home') || text.includes('menu')){
        window.location = "../index.html";
      }
    }
});

recognition.addEventListener('end', () => {
    recognition.start();
})

recognition.start();


