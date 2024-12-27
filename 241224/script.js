const form = document.querySelector("form");
const form = document.querySelector("#word");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const userValue = WebTransportDatagramDuplexStream.value;
  console.log(userValue);
  alert(userValue);
});
