 const sidmool = {
  topTitle : "개인 프로젝트",
  date : "2023.10 - 2023.11",
  projectNum : "PROJECT 01",
  projectTitle : "시드물",
  projectDesc : "웹사이트 디자인 수정을 통해 기존 시드물의 친환경적이고 저렴한 브랜드 이미지를<br>소비자에게 구체화시키고 정보 전달력이 떨어지는 기존 레이아웃과 눈에 띄지 않는로고를 현대 디자인 트렌드에 맞게 변경하였으며, 시드물에서 트래픽이 높은 페이지를<br>중심으로 메인 페이지를 재구성하여 소비자에게 브랜드 제품을 효율적으로<br>노출시키는 데 프로젝트 목적을 두었습니다.",
  projectDesc2 :["1명(기여도100%)", "기획/개발", "Visual Studio Code, 피그마"],
  skills : ["HTML5", "CSS3"],
  address : ["https://github.com/hwangjinyoung14/sidmool.git", "https://hwangjinyoung14.github.io/sidmool/"],
  images : "images/project/mockup.png?version=1"
}

const animalSystem = {
  topTitle : "개인 프로젝트",
  date : "2024.01. - 2024.02",
  projectNum : "PROJECT 02",
  projectTitle : "동물보호시스템",
  projectDesc : "기존 동물보호시스템 페이지에서 느껴지는 딱딱한 분위기를 동적이고 포근한 분위기로<br>바꾸는 데 중점을 두었으며, 정보 전달의 중요도 분석을 통한 레이아웃 재구성으로<br>사용자에게 기능성 및 편리성을 제공하고자 했습니다. CSS 키프레임으로<br>메인 비주얼의 애니메이션을 구현하고 JavaScript의 이벤트리스너를<br> 활용하여 모달창과 탭메뉴 등을 구현하였습니다.",
  projectDesc2 :["1명(기여도100%)", "기획/개발", "Visual Studio Code, 피그마"],
  skills : ["HTML5", "CSS3", "JavaScript"],
  address : ["https://github.com/hwangjinyoung14/animal.git", "https://hwangjinyoung14.github.io/animal/"],
  images : "images/project/mockup2.png?version=1"
}

const bestSleep = {
  topTitle : "팀 프로젝트",
  date : "2024.01 - 2024.03",
  projectNum : "PROJECT 03",
  projectTitle : "베스트 슬립",
  projectDesc : "기존 홈페이지에서 브랜드 방향성을 반영하지 못한 레이아웃 구성과 주된 타겟층인<br>젊은 층을 고려하지 않은 노후되고 트렌디하지 않은 디자인을 보완 및 개선하여<br>베스트슬립이 추구하는 홈페이지를 구축하는 데 목적을 두었습니다. 또한 시각적으로<br>볼거리가 풍부한 섹션을 추가하기 위해 지도 API와 Swiper 라이브러리를 사용했습니다.",
  projectDesc2 :["3명(기여도35%)", "기획/개발", "Visual Studio Code, 피그마"],
  skills : ["HTML5", "SCSS", "JavaScript"],
  address : ["https://github.com/hwangjinyoung14/best-sleep.git", "https://hwangjinyoung14.github.io/best-sleep/"],
  images : "images/project/mockup3.png?version=1"
}

const cpgn = {
  topTitle : "개인 프로젝트",
  date : "2024.03 - 2024.04",
  projectNum : "PROJECT 04",
  projectTitle : "꼼파뇨",
  projectDesc : "사용자에게 더 나은 환경 서비스를 제공하기 위해 프로젝트를 제작했습니다.<br>불필요한 섹션은 과감히 삭제하고 장바구니 넣기, 다양한 체험 및 프로그램 생사를<br>꼼파뇨가 추구하는 홈페이지를 구축하는 데 목적을 두었습니다.또한 꼼파뇨 상세페이지<br>추가하여 전체적인 홈페이지 가독성을 높이고자 했으며 기본에 충실했습니다.",
  projectDesc2 :["1명(기여도100%)", "기획/개발", "Visual Studio Code, 피그마"],
  skills : ["React"],
  address : ["https://github.com/hwangjinyoung14/cpgn-studio.git", "https://mellifluous-meringue-b210b7.netlify.app/"],
  images : "images/project/mockup4.png?version=1"
}

const sinjeon = {
  topTitle : "개인 프로젝트",
  date : "2024.04 - 2024.05",
  projectNum : "PROJECT 05",
  projectTitle : "신전떡볶이",
  projectDesc : "신전떡볶이가 브랜드 리뉴얼을 진행했으나, 아직 홈페이지의 모바일 및 반응형이<br>구축되지 않은 부분을 고려하여 모바일이 우선되는 원페이지 홈페이지를 제작했습니다.<br>새롭게 선정된 캐릭터, 로고, 그리고 브랜드 색깔을 활용하여 신전떡볶이의<br>아이덴티티를 적극적으로 반영했습니다.",
  projectDesc2 :["1명(기여도100%)", "기획/개발", "Visual Studio Code, 피그마"],
  skills : ["HTML5", "CSS3", "jQuery"],
  address : ["https://github.com/hwangjinyoung14/sinjeon.git", "https://hwangjinyoung14.github.io/sinjeon/"],
  images : "images/project/mockup5.png?version=1"
}

function projectInner(item) {
  return `
    <div class="project_left">
      <div class="project_left_top">
        <h5>${item.topTitle}</h5>
        <span></span>
        <h5>${item.date}</h5>
      </div>
      <div class="project_left_middle">
        <h4>${item.projectNum}</h4>
        <h3>${item.projectTitle}</h3>
        <p>
          ${item.projectDesc}
        </p>
      </div>
      <div class="project_left_bottom">
        <div class="project_desc_wrap">
          <ul class="project_desc_title">
            <li>개발인원</li>
            <li>역할</li>
            <li>SKILLS</li>
            <li>TOOLS</li>
          </ul>
          <ul class="project_desc">
            <li>${item.projectDesc2[0]}</li>
            <li>${item.projectDesc2[1]}</li>
            <li>
              ${item.skills.length > 0 ? `<span>${item.skills[0]}</span>` : ''}
              ${item.skills.length > 1 ? `<span>${item.skills[1]}</span>` : ''}
              ${item.skills.length > 2 ? `<span>${item.skills[2]}</span>` : ''}
            </li>
            <li>${item.projectDesc2[2]}</li>
          </ul>
        </div>
        <div class="project_shortcut">
          <a class="shortcut_box" href="${item.address[0]}" target="_blank">
            <img src="images/project/git_icon.svg" alt="git_icon">
            <p>깃허브 바로가기</p>
          </a>
          <a class="shortcut_box" href="${item.address[1]}" target="_blank">
            <img src="images/project/home_icon.svg" alt="home_icon">
            <p>사이트 바로가기</p>
          </a>
        </div>
      </div>
    </div>
    <div class="project_right project_ani2">
      <img src="${item.images}" alt="mockup">
    </div>
  `;
}

const projectWrapText= document.querySelector('.project_wrap_innerText');
const projectNav = document.querySelectorAll('.project_nav li');
const projectLeftText = document.querySelector('.project_left');
const projectNavPointer = document.querySelectorAll('.project_nav_pointer');


projectNav.forEach(function(item, index) {
  item.addEventListener('click', function() {
    switch(index) {
      case 0:
        projectWrapText.innerHTML = projectInner(sidmool);
        project.style.backgroundImage = `url(./images/project/bg.png?version=1)`;
        break;
      case 1:
        projectWrapText.innerHTML = projectInner(animalSystem);
        project.style.backgroundImage = `url(./images/project/bg2.png?version=1)`;
        break;
      case 2:
        projectWrapText.innerHTML = projectInner(bestSleep);
        project.style.backgroundImage = `url(./images/project/bg3.png?version=1)`;
        break;
      case 3:
        projectWrapText.innerHTML = projectInner(cpgn);
        project.style.backgroundImage = `url(./images/project/bg4.png?version=1)`;
        break;
      case 4:
        projectWrapText.innerHTML = projectInner(sinjeon);
        project.style.backgroundImage = `url(./images/project/bg5.png?version=1)`;
        break;
      default:
    }
  });
});

for (let i = 0; i < projectNav.length; i++) {
  projectNav[i].addEventListener('click', function() {
    for (let j = 0; j < projectNavPointer.length; j++) { 
      if (i !== j) {
        projectNavPointer[j].classList.remove("view_pointer");
      }
      if (i === j){
        projectNavPointer[j].classList.toggle("view_pointer");
      }
    }
  });
}

