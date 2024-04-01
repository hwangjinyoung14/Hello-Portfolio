
function subTitle5(){
  const bubbleTyping5 = document.querySelector(".bubble_typing5");
  // 글자 모음 - 개행문자(\n)로 줄바꿈
  const letters = [
    "감사합니다. ^^ \n 다음에 또 놀러 와주세요!"
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
      bubbleTyping5.innerHTML += letter.shift(); 
    }
  }
  
  // 딜레이 기능 ( 마이크로초 )
  function wait(ms) {
    return new Promise(res => setTimeout(res, ms))
  }
  // 초기 실행
  setTimeout(typing, 1000);
}

function contactScroll(){
  document.addEventListener('DOMContentLoaded', function(){
    const windowSection = window;
    const speechBubble5 = document.querySelector('.speech_bubble5');
    const bubbleTyping5 = document.querySelector('.bubble_typing5');
    const contact = document.querySelector('.contact');
    const contactCard = document.querySelector('.contact_card');
    const contactTOP = contact.offsetTop;
  
    // project scroll
    window.addEventListener('scroll',function(){
      if(windowSection.scrollY >= contactTOP){
        speechBubble5.classList.add('view_bubble5');
        contactCard.classList.add('cardUp_ani');
        setTimeout(subTitle5, 300);
      } else{
        speechBubble5.classList.remove('view_bubble5');
        contactCard.classList.remove('cardUp_ani');
        bubbleTyping5.innerHTML = '';
      }
      });
  });
}

contactScroll();

