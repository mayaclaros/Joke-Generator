function showAnswer(response) {
  alert(response.data.answer);
}

function handleClick() {
  axios.get(apiUrl).then(showAnswer);
}
let apiKey = "24b9b3ae0f6ea728ao45f6et261b0962";
let prompt =
  "Please tell me a new funny joke every time a response is requested";
let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&key=${apiKey}`;

let buttonElement = document.querySelector("#special-button");
buttonElement.addEventListener("click", handleClick);
