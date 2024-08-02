// JavaScript는 주로 인터랙션을 추가하는 데 사용됩니다.
// 기본적인 반응형 디자인은 CSS로 처리됩니다.
// 하지만 추가적인 동작이 필요할 경우 사용 가능합니다.

// 예를 들어, 브라우저 크기에 따라 클래스를 추가할 수 있습니다.
document.addEventListener("DOMContentLoaded", function () {
  function handleResize() {
    if (window.innerWidth <= 768) {
      // 모바일 화면에서의 추가적인 동작
      document.body.classList.add("mobile");
    } else {
      document.body.classList.remove("mobile");
    }
  }

  // 페이지 로드 시와 창 크기 변경 시 호출
  handleResize();
  window.addEventListener("resize", handleResize);
});
