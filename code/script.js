// Variables that point to selected DOM elements
const chat = document.querySelector("#chat");
const inputWrapper = document.querySelector("#input-wrapper");
const nameInput = document.querySelector("#name-input");
const nameForm = document.querySelector("#name-form");
// If you need any global variables that you can use across different functions, declare them here:
//let userAnswer;

// Declare your functions after this comment

// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  // the if statement checks if the sender is 'user' and if that's the case it inserts an html senction inside the chat with the posted message
  if (sender === "user") {
    console.log("user som skriver");
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/girldrinking.png" alt="User" />  
      </section>
    `;
    // the else if statement checks if the sender is a bot and if that's the case it inserts an html senction inside the chat with the posted message
  } else if (sender === "bot") {
    console.log("bot som skriver");

    chat.innerHTML += `
      <section class="bot-msg">
        <img src="assets/cuterobot.jpg" alt="Bot" />
        <div class="bubble bot-bubble">
          <p>${message}</p>
        </div>
      </section>
    `;
  }
  // This little thing makes the chat scroll to the last message when there are too many to be shown in the chat box
  chat.scrollTop = chat.scrollHeight;
};

// Starts here

//Greeting
const greeting = () => {
  // here we call the function showMessage, that we declared earlier with the argument "Hello there, What's your name?" for message, and the argument "bot" for sender
  showMessage("Hello and welcome to the Coffee by PS! What's your name?", "bot");
  console.log("greeting"); //can be omitted
};


//User answering his name
const handleInput = (event) => {
  event.preventDefault(); //prevents refreshing the page
  let userName = nameInput.value;
  showMessage(`${userName}.`, "user"); //calling on function
  console.log("Handle input name given");
  nameInput.value = ""; //erases the answer field
  setTimeout(() => question1(userName), 500);
};

//Bot asking the users mood
const question1 = (userName) => {
  showMessage(`Hello ${userName}! How are you today?`, "bot");
  console.log("user mood asking from bot"); //can be omitted
  nameForm.removeEventListener("submit", handleInput);
  nameForm.addEventListener("submit", handleInput2);
};

//User answering how thei'r doing.
const handleInput2 = (event) => {
  event.preventDefault(); //prevents refreshing the page
  let moodChoice = nameInput.value;
  showMessage(`${moodChoice}`, "user"); //calling on function
  console.log("User answering his mood"); //can be omitted
  nameInput.value = ""; //erases the answer field
  setTimeout(() => question2(), 500);
};

//Bot asking to make a coffee order
const question2 = (event) => {
  showMessage(`Mmm 😏 your day can always get better with a cup of coffee! Would you like some?`, "bot");
  console.log("Bot asking to make a coffee order"); //can be omitted
  inputWrapper.innerHTML = `
  <button id="ofCourse" type="submit" class="chat-btn">Yes, please!</button>
  <button id="noThanks" type="submit" class="chat-btn">No, thank you!</button>
  `
  document.getElementById("ofCourse").addEventListener("click", ofCourseChoice);
  document.getElementById("noThanks").addEventListener("click", noThanksChoice);
};

//User denying coffee order
const noThanksChoice = (event) => {
  event.preventDefault(); //prevents refreshing the page
  let denierAnswer = inputWrapper.value;
  showMessage("No, thank you!", "user");
  inputWrapper.value = "";
  console.log("Denied coffee wish from use"); //can be omitted
  setTimeout(() => byeChat(denierAnswer), 1000);
};

//Bot ending the chat
const byeChat = () => {
  showMessage("Acknowledged! I am closing down the chat,then. I hope to see you soon!", "bot");
  console.log("Ending chat"); //can be omitted
  inputWrapper.innerHTML = " "
};

//User confirming a coffee order
const ofCourseChoice = (event) => {
  event.preventDefault(); //prevents refreshing the page
  let doerAnswer = inputWrapper.value;
  showMessage("Yes, please!", "user");
  inputWrapper.value = "";
  console.log("User confirmed coffee wish"); //can be omitted
  setTimeout(() => question4(doerAnswer), 1000);
};

//Bot asking which coffee user wants to order
const question4 = (answerName) => {
  showMessage("What kind of coffee would you like to order?", "bot");
  console.log("Bot asking which coffee user wants to order"); //can be omitted
  inputWrapper.innerHTML = `
  <button id="blackCoffee" type="submit" class="chat-btn">Black coffee</button>
  <button id="espresso" type="submit" class="chat-btn">Espresso</button>
  <button id="latte" type="submit" class="chat-btn">Latte</button>
  `
  document.getElementById("blackCoffee").addEventListener("click", blackChoice);
  document.getElementById("espresso").addEventListener("click", espressoChoice);
  document.getElementById("latte").addEventListener("click", latteChoice);
};


// 3 different choices
const blackCoffeeChoice = (event) => {
  event.preventDefault(); //prevents refreshing the page
  let coffeeAnswer = inputWrapper.value;
  showMessage(`Black coffee`, "user");
  inputWrapper.value = "";
  console.log("black coffee"); //can be omitted
  setTimeout(() => question5(coffeeAnswer), 1000);
};

const espressoChoice = (event) => {
  event.preventDefault(); //prevents refreshing the page
  let coffeeAnswer = inputWrapper.value;
  showMessage(`Espresso`, "user");
  inputWrapper.value = "";
  console.log("espresso"); //can be omitted
  setTimeout(() => question5(coffeeAnswer), 1000);
};

const latteChoice = (event) => {
  event.preventDefault(); //prevents refreshing the page
  let coffeeAnswer = inputWrapper.value;
  showMessage('Latte', "user");
  inputWrapper.value = '';
  console.log("latte"); //can be omitted
  setTimeout(() => question5(coffeeAnswer), 1000);
};

//Bot asking take away or drink here
const question5 = () => {
  showMessage("Take away or drink here?", "bot");
  console.log("Bot asking take away or drink here"); //can be omitted
  inputWrapper.innerHTML = `
  <button id="takeAwayBtn">Take away</button>
  <button id="drinkHereBtn">Drink here</button>
  `

  document.getElementById("takeAwayBtn").addEventListener("click", () => finalDecision("Take away"))
  document.getElementById("drinkHereBtn").addEventListener("click", () => finalDecision("Drink here"))
  ;}

//Final decision and video 
const finalDecision = (finalDecision) => {

  if (finalDecision === "take away"){
    setTimeout(() => inputWrapper.innerHTML = `<span>`, 0);
    setTimeout(() => showMessage("Take away", "user"), 500);
    setTimeout(() => inputWrapper.innerHTML = `<p>Please wait<p>`, 1500);
    setTimeout(() => showMessage("...", "bot"), 1500);
    setTimeout(() => chat.innerHTML = `
  <video src="https://assets.mixkit.co/videos/preview/mixkit-coffee-maker-making-coffee-3578-large.mp4" width=100% height="552" autoplay></video>
    `, 4500);
    setTimeout(() => showMessage("Your coffee is preparing...", "bot"), 4500);
    setTimeout(() => chat.innerHTML = `
    <img src="assets/thanks.jpg" alt="Thank you image"/>
    `, 15500);
    setTimeout(() => inputWrapper.innerHTML = `<span>`, 15500);
  } else { 
    setTimeout(() => inputWrapper.innerHTML = `<span>`, 0);
    setTimeout(() => showMessage("Drink here", "user"), 500);
    setTimeout(() => inputWrapper.innerHTML = `<p>"Sit down and relax!..."<p>`, 1500);
    setTimeout(() => showMessage("...", "bot"), 1500);
    setTimeout(() => chat.innerHTML = `
  <video src="https://assets.mixkit.co/videos/preview/mixkit-coffee-maker-making-coffee-3578-large.mp4" width=100% height="552" autoplay></video>
    `, 4500);
    setTimeout(() => showMessage("Your coffee is preparing", "bot"), 4500);
  }
  setTimeout(() => chat.innerHTML = `
  <img src="assets/thanks.jpg" alt="Thank you image"/>
    `, 15500);
    setTimeout(() => inputWrapper.innerHTML = `<span>`, 15500);
}

// Set up your eventlisteners here
nameForm.addEventListener("submit", handleInput);

setTimeout(greeting, 0);

