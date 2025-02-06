const stars = document.querySelectorAll(".fa-star");
const print = document.querySelector(".print");

stars.forEach((star, index) => {
  star.addEventListener("click", () => {
    stars.forEach((s, i) => {
      if (i <= index) {
        s.classList.add("active");
      } else {
        s.classList.remove("active");
      }
    });
    let message = "";
    let imgageURL = "";

    switch (index) {
      case 0:
        message = "별로입니다!";
        imgageURL = "./img/star-lv1.png";
        break;
      case 1:
        message = "보통이에요!";
        imgageURL = "./img/star-lv2.png";
        break;
      case 2:
        message = "그냥 그래요!";
        imgageURL = "./img/star-lv3.png";
        break;
      case 3:
        message = "맘에들어요!";
        imgageURL = "./img/star-lv4.png";
        break;
      case 4:
        message = "아주좋아요!";
        imgageURL = "./img/star-lv5.png";
        break;
    }
    print.innerHTML = `<img src="${imgageURL}"> ${message}`;
  });
});
