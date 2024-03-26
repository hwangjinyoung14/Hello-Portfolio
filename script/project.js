const sidmool = {
  topTitle : "개인 프로젝트",
  date : "2023.10 - 2023.11",
  projectNum : "PROJECT 01",
  projectTitle : "시드물",
  projectDesc : "사용자에게 더 나은 환경 서비스를 제동하기 위해 프로젝트를 제작했습니다.<br>불필요한 섹션은 과감히 삭제하고 장바구니 넣기, 다양한 체험 및 프로그램 생사를<br>불필요한 섹션은 과감히 삭제하고 장바구니 넣기, 다양한 체험 및 프로그램 생사를<br>추가하여 전체적인 홈페이지 가독성을 높이고자 했으며 기본에 충실했습니다.",
  projectDesc2 :["1명(기여도100%)", "기획/개발", "Visual Studio Code, 피그마"],
  skills : ["HTML5", "CSS3"],
  address : ["https://github.com/hwangjinyoung14/sidmool.git", "https://hwangjinyoung14.github.io/sidmool/"],
  images : "images/project/mockup.png"
}

const animalSystem = {
  topTitle : "개인 프로젝트",
  date : "2023.11 - 2023.12",
  projectNum : "PROJECT 02",
  projectTitle : "동물보호시스템",
  projectDesc : "사용자에게 더 나은 환경 서비스를 제동하기 위해 프로젝트를 제작했습니다.<br>불필요한 섹션은 과감히 삭제하고 장바구니 넣기, 다양한 체험 및 프로그램 생사를<br>불필요한 섹션은 과감히 삭제하고 장바구니 넣기, 다양한 체험 및 프로그램 생사를<br>추가하여 전체적인 홈페이지 가독성을 높이고자 했으며 기본에 충실했습니다.",
  projectDesc2 :["1명(기여도100%)", "기획/개발", "Visual Studio Code, 피그마"],
  skills : ["HTML5", "CSS3", "JavaScript"],
  address : ["https://github.com/hwangjinyoung14/sidmool.git", "https://hwangjinyoung14.github.io/sidmool/"],
  images : "images/project/mockup.png"
}

const bestSleep = {
  topTitle : "팀 프로젝트",
  date : "2024.01 - 2023.3",
  projectNum : "PROJECT 03",
  projectTitle : "베스트 슬립",
  projectDesc : "사용자에게 더 나은 환경 서비스를 제동하기 위해 프로젝트를 제작했습니다.<br>불필요한 섹션은 과감히 삭제하고 장바구니 넣기, 다양한 체험 및 프로그램 생사를<br>불필요한 섹션은 과감히 삭제하고 장바구니 넣기, 다양한 체험 및 프로그램 생사를<br>추가하여 전체적인 홈페이지 가독성을 높이고자 했으며 기본에 충실했습니다.",
  projectDesc2 :["3명(기여도40%)", "기획/개발", "Visual Studio Code, 피그마"],
  skills : ["HTML5", "SCSS", "JavaScript"],
  address : ["https://github.com/hwangjinyoung14/sidmool.git", "https://hwangjinyoung14.github.io/sidmool/"],
  images : "images/project/mockup.png"
}

const cpgn = {
  topTitle : "개인 프로젝트",
  date : "2024.03 - 2023.04",
  projectNum : "PROJECT 04",
  projectTitle : "꼼파뇨",
  projectDesc : "사용자에게 더 나은 환경 서비스를 제동하기 위해 프로젝트를 제작했습니다.<br>불필요한 섹션은 과감히 삭제하고 장바구니 넣기, 다양한 체험 및 프로그램 생사를<br>불필요한 섹션은 과감히 삭제하고 장바구니 넣기, 다양한 체험 및 프로그램 생사를<br>추가하여 전체적인 홈페이지 가독성을 높이고자 했으며 기본에 충실했습니다.",
  projectDesc2 :["1명(기여도100%)", "기획/개발", "Visual Studio Code, 피그마"],
  skills : ["React"],
  address : ["https://github.com/hwangjinyoung14/sidmool.git", "https://hwangjinyoung14.github.io/sidmool/"],
  images : "images/project/mockup.png"
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
              <p>${item.skills[0]}</p>
              <p>${item.skills[1]}</p>
            </li>
            <li>${item.projectDesc2[2]}</li>
          </ul>
        </div>
        <div class="project_shortcut">
          <a class="shortcut_box" href="${item.address[0]}">
            <img src="images/project/git_icon.svg" alt="git_icon">
            <p>깃허브 바로가기</p>
          </a>
          <a class="shortcut_box" href="${item.address[1]}">
            <img src="images/project/home_icon.svg" alt="home_icon">
            <p>사이트 바로가기</p>
          </a>
        </div>
      </div>
    </div>
    <div class="project_right">
      <div class="project_right-gif"></div>
      <img src="${item.images}" alt="mockup">
    </div>
  `;
}

const projectWrapText= document.querySelector('.project_wrap_innerText');
console.log(projectWrapText);
const projectNav = document.querySelectorAll('.project_nav li');
//배경이미지도 바뀌게 하기!

projectNav[0].addEventListener('click', function(){
  projectWrapText.innerHTML = projectInner(sidmool);
});

projectNav[1].addEventListener('click', function(){
  projectWrapText.innerHTML = projectInner(animalSystem);
});

projectNav[2].addEventListener('click', function(){
  projectWrapText.innerHTML = projectInner(bestSleep);
});

projectNav[3].addEventListener('click', function(){
  projectWrapText.innerHTML = projectInner(cpgn);
});

