// console.log(document.querySelector("h1").innerText);
// console.log(document.querySelector("#profile"));
// console.log(document.querySelector(".imgSrc"));
// console.log(document.querySelectorAll(".user"));

// console.log(document.getElementById("profile"));
// console.log(document.getElementsByClassName("imgSrc"));
// console.log(document.getElementsByTagName("h1"));

// console.log(document.querySelector("#desc").innerText);
// console.log(document.querySelector("#desc").textContent);

const title = document.querySelector("h1");
const userName = document.querySelectorAll("#desc > p")[0];
const pfImg = document.querySelector("#profile > img");
// title.onclick = () => {
//   title.innerText = "나의 프로필";
// };

title.addEventListener("click", () => {
  title.innerText = "마이 프로필";
  title.style.backgroundColor = "#000";
  title.style.color = "#fff";
});

userName.addEventListener("click", () => {
  userName.innerHTML = "이름 : <b>태연</b>";
  pfImg.src =
    "https://lh3.googleusercontent.com/proxy/fFQCA6eJ35atPiMLgUbdH0vCSNw_dV82N7E0-dlQW_ZRCCDoHYXVaj1jMXc9K1o47txHtJZlFMyrqg47OEvRhiSV6fqPm5H7uRjDFTi50JM6";
  if (!userName.classList.contains("active")) {
    userName.classList.add("active");
  } else {
    userName.classList.remove("active");
  }
  // userName.classList.add("active");
});

// console.log(document.querySelectorAll("#desc p")[0].classList);
// console.log(userName.classList.contains("active"));
