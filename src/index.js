function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 40,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-input");
  let apiKey = "add7bbca2cd4cbf0f933tb30o24aa8bd";
  let context =
    "You are a romantic poem expert and love to write short poems. Your mission is to generate a 4 line poem and provide the answer in basic HTML format and separate each line with a <br />. Never display the word `HTML`, quotation marks or backticks. Make sure to follow the user instructions. Do not include a title for the poem. Sign the poem with `SheCodes AI` inside a <strong> element at the end of the poem and NEVER at the beginning";
  let prompt = `User instructions: Generate a poem about ${instructionsInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="generating">⌛ Generating a poem about ${instructionsInput.value}</div>`;

  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
