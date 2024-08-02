document.addEventListener("DOMContentLoaded", function () {
  // 페이지가 로드되면 팝업창과 배경 덮개를 표시합니다.
  document.querySelector(".popup").style.display = "block";
  document.querySelector(".overlay").style.display = "block";

  // "닫기" 버튼 클릭 시 팝업창을 닫는 함수
  document
    .querySelector(".popup .button button")
    .addEventListener("click", function () {
      document.querySelector(".popup").style.display = "none";
      document.querySelector(".overlay").style.display = "none";
    });
});
