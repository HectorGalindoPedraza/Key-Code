const root = document.querySelector("#root");
const clickSound = document.querySelector("audio");

window.addEventListener("keydown", (e) => {
  let keys = {};
  keys["Key"] = e.key === " " ? (e.key = "[SPACE]") : e.key;
  keys["KeyCode"] = e.keyCode;
  newP(keys);
});

async function newP(keys) {
  const li = document.createElement("li");
  li.innerText = `${keys.Key}: ${keys.KeyCode}`;
  root.append(li);
  clickSound.currentTime = 0;
  await clickSound.play();
}