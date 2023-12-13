const setButton = document.getElementById("btn");
const setButton2 = document.getElementById("btn2");
// const titleInput = document.getElementById('title')
setButton.addEventListener("click", () => {
  //   const title = titleInput.value
  window.electronAPI.startPython();
});

setButton2.addEventListener("click", () => {
  //   const title = titleInput.value
  window.electronAPI.startTalk();
});
