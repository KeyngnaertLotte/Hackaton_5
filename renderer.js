const setButton = document.getElementById("btn");
const setButton2 = document.getElementById("btn2");
const loading = document.getElementById("loading");
// const titleInput = document.getElementById('title')
setButton.addEventListener("click", () => {
  loading.style.display = 'none';
setButton2.style.display = 'none';
setButton.style.display = 'none';
setTimeout(() => {
  // Hide loading sign
  document.getElementById('loading').classList.add('hidden');
}, 2000);
  //   const title = titleInput.value
  window.electronAPI.startPython();
});

setButton2.addEventListener("click", () => {
  //   const title = titleInput.value
  loading.style.display = 'none';
setButton2.style.display = 'none';
setButton.style.display = 'none';
setTimeout(() => {
  // Hide loading sign
  document.getElementById('loading').classList.add('hidden');
}, 2000);
  window.electronAPI.startTalk();
});


