/*intro1*/
function title(){
  const text = document.querySelector(".typing");
  // Text to be typed

  const letters = [
    "Hello, Portfolio!"
  ];

  // 입력 속도
  const speed = 70;
  let i = 0;

  // 타이핑 효과
  const typing = async () => {  
    const letter = letters[i].split("");
    
    while (letter.length) {
      await wait(speed);
      text.innerHTML += letter.shift(); 
    }
  }

  // 딜레이 기능 ( 마이크로초 )
  function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
  }
  // 초기실행
  setTimeout(typing, 1000);

  setTimeout(() => {
    const speechBubble = document.querySelector(".speech_bubble");
    speechBubble.classList.add("veiw_bubble");
  }, 3300 + (letters[0].length * speed));
}

function subTitle(){
  const bubbleTyping = document.querySelector(".bubble_typing");
  // 글자 모음 - 개행문자(\n)로 줄바꿈
  const letters = [
    "어서오세요! Hello, Portfolio \n 전시회에 오신 것을 환영합니다. "
  ];
  
  // 글자 입력 속도
  const speed = 70;
  let i = 0;
  
  // 줄바꿈을 위한 <br> 치환
  const changeLineBreak = (letter) => {
    return letter.map(text => text === "\n" ? "<br>" : text);
  }
  
  // 타이핑 효과
  async function typing() {  
    // 기존코드에서 개행치환코드 추가
    const letter = changeLineBreak(letters[i].split(""));
    
    while (letter.length) {
      await wait(speed);
      bubbleTyping.innerHTML += letter.shift(); 
    }
  }
  
  // 딜레이 기능 ( 마이크로초 )
  function wait(ms) {
    return new Promise(res => setTimeout(res, ms))
  }
  // 초기 실행
  setTimeout(typing, 100);
}

/*intro2로 넘어가기*/
function subTitle2(){
  const bubbleTyping2 = document.querySelector(".bubble_typing2");
  // 글자 모음 - 개행문자(\n)로 줄바꿈
  const letters = [
    "매표 도와드리겠습니다! \n '프론트엔드 개발자 황진영의 \n포트폴리오' 1장 맞으실까요?"
  ];
  
  // 글자 입력 속도
  const speed = 75;
  let i = 0;
  
  // 줄바꿈을 위한 <br> 치환
  const changeLineBreak = (letter) => {
    return letter.map(text => text === "\n" ? "<br>" : text);
  }
  
  // 타이핑 효과
  async function typing() {  
    // 기존코드에서 개행치환코드 추가
    const letter = changeLineBreak(letters[i].split(""));
    
    while (letter.length) {
      await wait(speed);
      bubbleTyping2.innerHTML += letter.shift(); 
    }
  }
  
  // 딜레이 기능 ( 마이크로초 )
  function wait(ms) {
    return new Promise(res => setTimeout(res, ms))
  }
  // 초기 실행
  setTimeout(typing, 200);
}

function intro02(){
  const typing = document.querySelector('.typing');
  const speechBubble = document.querySelector(".speech_bubble");
  const entering = document.querySelector(".entering");
  const bgChange = document.querySelector(".bg_gif");
  const theji = document.querySelector(".intro_desc2_images");

  entering.addEventListener('click', function(){
    bgChange.innerHTML = `<img src="images/intro/gif02.gif?version=1" alt="gif02">`;
    speechBubble.classList.add('gone_ani2');
    typing.classList.add('gone_ani');
    theji.classList.add('intro2_ani');

    setTimeout(() => {
      const speechBubble2 = document.querySelector(".speech_bubble2");
      speechBubble2.classList.add("veiw_bubble2");

      // introGone 내에서 subTitle2 함수 호출
      subTitle2();
    }, 3000);
  });
}

/**쿠폰 생성*/
function subTitle3(){
  const bubbleTyping3 = document.querySelector(".bubble_typing3");
  // 글자 모음 - 개행문자(\n)로 줄바꿈
  const letters = [
    "확인 감사합니다! \n '입장하기'를 클릭해주세요!"
  ];
  
  // 글자 입력 속도
  const speed = 60;
  let i = 0;
  
  // 줄바꿈을 위한 <br> 치환
  const changeLineBreak = (letter) => {
    return letter.map(text => text === "\n" ? "<br>" : text);
  }
  
  // 타이핑 효과
  async function typing() {  
    // 기존코드에서 개행치환코드 추가
    const letter = changeLineBreak(letters[i].split(""));
    
    while (letter.length) {
      await wait(speed);
      bubbleTyping3.innerHTML += letter.shift(); 
    }
  }
  
  // 딜레이 기능 ( 마이크로초 )
  function wait(ms) {
    return new Promise(res => setTimeout(res, ms))
  }
  // 초기 실행
  setTimeout(typing, 500);
}

function intromiddle(){
  const entering2 = document.querySelector(".speech_bubble2>.entering");
  const ticket = document.querySelector(".intro_desc2_ticket");
  const speechBubble2 = document.querySelector(".speech_bubble2");

  entering2.addEventListener('click', function(){
    speechBubble2.style.display = 'none';

    setTimeout(() => {
      const speechBubble3 = document.querySelector(".speech_bubble3");
      speechBubble3.classList.add("veiw_bubble3");

      // introGone 내에서 subTitle2 함수 호출
      subTitle3();
    }, 200);

    setTimeout(() => {
      ticket.classList.add('ticket_veiw');
    }, 3100);

    //티켓이 좀 늦게 나와야되는데 애니메이션 걸어야 겠다.
  });
}

/**쿠폰 클릭 및 intro-end */
function subTitle4(){
  const bubbleTyping4 = document.querySelector(".bubble_typing4");
  // 글자 모음 - 개행문자(\n)로 줄바꿈
  const letters = [
    "감사합니다^^! \n 즐거운 관람하세요!"
  ];
  
  // 글자 입력 속도
  const speed = 60;
  let i = 0;
  
  // 줄바꿈을 위한 <br> 치환
  const changeLineBreak = (letter) => {
    return letter.map(text => text === "\n" ? "<br>" : text);
  }
  
  // 타이핑 효과
  async function typing() {  
    // 기존코드에서 개행치환코드 추가
    const letter = changeLineBreak(letters[i].split(""));
    
    while (letter.length) {
      await wait(speed);
      bubbleTyping4.innerHTML += letter.shift(); 
    }
  }
  
  // 딜레이 기능 ( 마이크로초 )
  function wait(ms) {
    return new Promise(res => setTimeout(res, ms))
  }
  // 초기 실행
  setTimeout(typing, 500);
}

function introLast(){
  const ticketAni = document.querySelector(".ticket_ani");
  const ticketAni2 = document.querySelector(".ticket_ani2");
  const thejiImages = document.querySelector(".intro_desc2_images");
  const speechBubble3 = document.querySelector(".speech_bubble3");

  ticketAni.addEventListener('click', function(){
    ticketAni.classList.add('release');
    ticketAni2.classList.add('release2');
    //인사를 좀 늦게하는 gif 만들기
    thejiImages.innerHTML = `<img src="images/intro/gif05.gif?version=1" alt="gif05">`;
    speechBubble3.style.display = 'none';

    setTimeout(() => {
      const speechBubble4 = document.querySelector(".speech_bubble4");
      speechBubble4.classList.add("veiw_bubble4");

      subTitle4();
    }, 200);
  });
}

title();
setTimeout(subTitle, 4600);
intro02();
intromiddle();
introLast();


















