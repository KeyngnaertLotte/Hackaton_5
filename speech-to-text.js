const texts = document.querySelector(".text");

window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new window.SpeechRecognition();
recognition.interimResult = true;

let p = document.createElement("p");

recognition.addEventListener("result", (e) => {
  const text = Array.from(e.results)
    .map((result) => result[0])
    .map((result) => result.transcript)
    .join("");

  p.innerText = text;
  document.querySelector(".text").appendChild(p);

  if (e.result[0].isFinal) {
    p = document.createElement("p");
  }
  console.log(text);
});

recognition.addEventListener("end", () => {
  recognition.start();
});

recognition.start();
