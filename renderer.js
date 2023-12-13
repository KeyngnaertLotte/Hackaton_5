const setButton = document.getElementById("btn");
const setButton2 = document.getElementById("btn2");
const loading = document.getElementById("text");
// const titleInput = document.getElementById('title')
setButton.addEventListener("click", () => {
  loading.innerHTML = "Loading...";
setButton2.style.display = 'none';
setButton.style.display = 'none';
  //   const title = titleInput.value
  window.electronAPI.startPython();
});

setButton2.addEventListener("click", () => {
  //   const title = titleInput.value
  loading.innerHTML = "Loading...";
setButton2.style.display = 'none';
setButton.style.display = 'none';
  window.electronAPI.startTalk();
});


