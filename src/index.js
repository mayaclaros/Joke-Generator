function showAnswer(response) {
  console.log(response);
}

let apiKey = "24b9b3ae0f6ea728ao45f6et261b0962";
let context = "be kind and funny";
let prompt = "Tell a funny joke";
let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=Q${apiKey}`;

axios.get(apiUrl).then(showAnswer);

function handleClick() {
  alert("hooray");
}

let buttonElement = document.querySelector("#special-button");
buttonElement.addEventListener("click", handleClick);
