const button = document.querySelector("button");

// show / error position 정의
const showPosition = (position) => {
  console.log(position);
  const result = document.querySelector("#result");
  result.innerHTML = `
  <b>위도 : </b>${position.coords.latitude}
  <br/>
  <b>경도 : </b> ${position.coords.longitude}
  `;
};
const errorPosition = (err) => {
  alert(err.message);
};

// 버튼 클릭 이벤트
button.addEventListener("click", () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, errorPosition);

    const options = {
      enableHighAccuracy: true, //위치정보에 대한 정확도
      timeout: 5000, //사용자의 정보확인을 위한 유효시간 설정하는 옵션
      maximumAge: 0, //사용자의 바뀐 위치값을 즉각 확인하도록 하는 옵션
    }; //option 정의

    // 지정한 시간에 따라 이동에 따라 정보값 확인
    const watchId = navigator.geolocation.watchPosition(
      showPosition,
      errorPosition,
      options
    ); //개발자가 설정한 값에 따라

    setTimeout(() => {
      navigator.geolocation.clearWatch(watchId);
    }, 30000); //특정 시간 이후에 종료 :clearWatch
  } else {
    alert("Geolocation을 지원하지 않습니다");
  } // navigatior의 geolocation이 없다면
});
