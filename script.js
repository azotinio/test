// ensure DOM is ready before attaching listeners
document.addEventListener('DOMContentLoaded', function () {
  function changeContent() {
    document.getElementById("azat").src = "fireworks.gif";
  }

  document.getElementById("yesBtn").addEventListener("click", changeContent);
});
