    // 페이지가 로드될 때 실행되는 이벤트 핸들러
    document.addEventListener('DOMContentLoaded', function () {

      // 모든 섹션과 내비게이션 링크를 선택
      const sections = document.querySelectorAll('section');
      const navLinks = document.querySelectorAll('nav a');

      // 현재 활성화된 섹션의 인덱스를 저장하는 변수
      let currentSectionIndex = 0;

      // 스크롤 중인지 여부를 나타내는 변수
      let scrolling = false;

      // 다음 섹션으로 스크롤하는 함수
      function scrollToNextSection() {
        scrolling = true;
        currentSectionIndex++;
        if (currentSectionIndex >= sections.length) {
          currentSectionIndex = 0;
        }
        // 다음 섹션으로 스무스하게 스크롤
        sections[currentSectionIndex].scrollIntoView({
          behavior: 'smooth'
        });
      }

      // 이전 섹션으로 스크롤하는 함수
      function scrollToPreviousSection() {
        scrolling = true;
        currentSectionIndex--;
        if (currentSectionIndex < 0) {
          currentSectionIndex = sections.length - 1;
        }
        // 이전 섹션으로 스무스하게 스크롤
        sections[currentSectionIndex].scrollIntoView({
          behavior: 'smooth'
        });
      }

      // 마우스 휠 스크롤 이벤트 리스너
      document.addEventListener('wheel', function (event) {
        event.preventDefault(); // 기본 스크롤 동작 방지
        if (!scrolling) { // 스크롤 중이 아닌 경우에만 실행
          if (event.deltaY > 0) { // 마우스 휠이 아래로 스크롤될 때
            if (currentSectionIndex === sections.length - 1) {
              // 현재 섹션이 마지막 섹션인 경우 스크롤 이벤트 무시
              return;
            }
            scrollToNextSection(); // 다음 섹션으로 스크롤
          } else { // 마우스 휠이 위로 스크롤될 때
            scrollToPreviousSection(); // 이전 섹션으로 스크롤
          }
          // 스크롤 후 1초 후에 다시 스크롤 가능하도록 설정
          setTimeout(function () {
            scrolling = false;
          }, 1000);
        }
      }); // 내비게이션 링크에 클릭 이벤트 리스너 추가
      navLinks.forEach(function (link, index) {
        link.addEventListener('click', function (event) {
          event.preventDefault(); // 링크 기본 동작 방지
          scrollToSection(index); // 해당 섹션으로 스크롤
        });
      });

      // 섹션으로 스크롤하는 함수
      function scrollToSection(index) {
        scrolling = true;
        // 해당 섹션으로 스무스하게 스크롤
        sections[index].scrollIntoView({
          behavior: 'smooth'
        });
        // 현재 활성화된 섹션 인덱스 업데이트
        currentSectionIndex = index;
        // 스크롤 후 1초 후에 다시 스크롤 가능하도록 설정
        setTimeout(function () {
          scrolling = false;
        }, 1000);
        activateNavLink(index); // 활성 내비게이션 링크 클래스 추가
      }

      // 활성 내비게이션 링크 설정 함수
      function activateNavLink(index) {
        navLinks.forEach(function (link, i) {
          if (i === index) {
            link.classList.add('active'); // 선택된 링크에 활성 클래스 추가
          } else {
            link.classList.remove('active'); // 선택되지 않은 링크의 활성 클래스 제거
          }
        });
      }

      // 스크롤 이벤트 리스너
      window.addEventListener('scroll', function () {
        let currentSection = 0;
        let minDistance = Math.abs(window.scrollY - sections[0].offsetTop);
        // 모든 섹션에 대해 반복하여 가장 가까운 섹션을 찾음
        sections.forEach(function (section, index) {
          const distance = Math.abs(window.scrollY - section.offsetTop);
          if (distance < minDistance) {
            minDistance = distance;
            currentSection = index;
          }
        });
        activateNavLink(currentSection); // 현재 활성화된 섹션에 해당하는 내비게이션 링크 활성화
      });

      // "고투탑" 버튼 클릭 이벤트 리스너
      const goToTopButton = document.getElementById('goToTop');
      goToTopButton.addEventListener('click', function () {
        scrolling = true;
        // 페이지 맨 위로 스무스하게 스크롤
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
        setTimeout(function () {
          scrolling = false;
        }, 1000); // 스크롤 후 1초 후에 다시 스크롤 가능하도록 설정
      });

    });

  // ***사용된 주요 자바스크립트 함수
  // scrollToNextSection(): 다음 섹션으로 스크롤하는 함수. 현재 활성화된 섹션의 다음 섹션으로 스무스하게 스크롤

  // scrollToPreviousSection(): 이전 섹션으로 스크롤하는 함수. 현재 활성화된 섹션의 이전 섹션으로 스무스하게 스크롤

  // scrollToSection(index): 특정 섹션으로 스크롤하는 함수. 인덱스를 매개변수로 받아 해당 인덱스의 섹션으로 스무스하게 스크롤

  // activateNavLink(index): 내비게이션 링크에 활성 클래스를 추가하거나 제거하는 함수. 현재 활성화된 섹션의 인덱스를 받아 해당 인덱스의 내비게이션 링크에 활성 클래스를 추가하고 나머지 링크에서는 활성 클래스를 제거

  // ***전체 로직:
  // 1 페이지가 로드될 때, 모든 섹션과 내비게이션 링크를 선택

  // 2 스크롤 중인지를 나타내는 scrolling 변수와 현재 활성화된 섹션의 인덱스를 저장하는 currentSectionIndex 변수를 초기화

  // 3 마우스 휠 스크롤 이벤트 리스너를 추가하여 스크롤 동작을 감지하고, 이벤트가 발생할 때마다 스크롤 방향에 따라 다음 또는 이전 섹션으로 스크롤

  // 4 내비게이션 링크에 클릭 이벤트 리스너를 추가하여 링크를 클릭하면 해당 섹션으로 스크롤

  // 5 스크롤 이벤트 리스너를 추가하여 페이지가 스크롤될 때마다 현재 활성화된 섹션을 감지하고, 해당 섹션에 대응하는 내비게이션 링크에 활성 클래스를 추가

  // 6 페이지 맨 위로 스크롤하는 "고투탑" 버튼에 클릭 이벤트 리스너를 추가하여 버튼을 클릭하면 페이지가 맨 위로 스무스하게 스크롤

  // 이것이 페이지 내비게이션 및 스크롤 기능을 구현하기 위한 전체 자바스크립트 로직.

  // ***추가로
  // addEventListener(event, listener): 지정한 이벤트가 대상에 전달될 때마다 호출할 함수를 설정. 이를 사용하여 페이지 로드 시, 마우스 휠 스크롤, 내비게이션 링크 클릭, 스크롤 이벤트 등에 대한 이벤트 리스너를 추가.

  // scrollIntoView(options): 요소가 부모 컨테이너에 표시되도록 스크롤. 이를 사용하여 스크롤 위치를 조정하여 특정 섹션으로 이동.

  // Math.abs(number): 주어진 숫자의 절대값을 반환. 이를 사용하여 스크롤 위치와 섹션의 위치 간의 거리를 계산.

  // setTimeout(callback, delay): 지정된 시간(밀리초)이 지난 후에 함수를 실행. 이를 사용하여 스크롤 후 일정 시간이 지나면 스크롤 가능하도록 설정.
