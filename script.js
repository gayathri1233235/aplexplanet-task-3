// Quiz answer check
function checkAnswer(option) {
  const result = document.getElementById("quizResult");
  if (option === 'a') {
    result.textContent = "Correct! HTML stands for Hyper Text Markup Language.";
    result.style.color = "green";
  } else {
    result.textContent = "Oops! That's not correct. Try again!";
    result.style.color = "red";
  }
}

// API joke fetch
function fetchJoke() {
  fetch("https://official-joke-api.appspot.com/random_joke")
    .then(res => res.json())
    .then(data => {
      document.getElementById("jokeBox").textContent = `${data.setup} — ${data.punchline}`;
    })
    .catch(error => {
      document.getElementById("jokeBox").textContent = "Failed to load joke.";
    });
}
