const quizForm = document.querySelector(".quiz-form");
const submitBtn = document.querySelector("#submit-ans-btn");
const showOutput = document.querySelector("#output");

const correctAnswers=["90°","right angled"];

function calculateScore(){
    let score = 0;
    let index = 0;
    
    const userInput = new FormData(quizForm);
    console.log(userInput);
    for(let value of userInput.values()){
         if(value === correctAnswers[index]){
             score = score + 1;
          }
      index = index+1;
    }
    console.log(score);
    showOutput.innerText="Your total score is "+score;
}

submitBtn.addEventListener("click",calculateScore);