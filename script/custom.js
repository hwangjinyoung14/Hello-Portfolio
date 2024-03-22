/**scroll */
function navScroll(){

  /**
   * 1. nav바 생기기
   */

  document.addEventListener('DOMContentLoaded', function(){
    const windowSection = window;
    const aboutMeTitle = document.querySelector('.about_me_right_title');
    const marker = document.querySelector('.marker');
    const trigger = document.querySelector('.trigger');
    const aboutMe = document.querySelector('.about_me');
    const aboutMeTOP = aboutMe.offsetTop;
  
    window.addEventListener('scroll',function(){
    if(windowSection.scrollY >= aboutMeTOP){
      aboutMeTitle.classList.add('marginTop250');
      marker.classList.add('markerAni');
      trigger.style.display ='block'
    }
    });
  });
  
}

function aboutModal(){
  const moreInfo = document.querySelector('.more_info');
  const moreModal = document.querySelector('.about_me_modal');
  const modalCloseBtn = document.querySelector('.modal_close_btn');

  moreInfo.addEventListener('click', function(){
    moreModal.style.display = 'block';
  });

  modalCloseBtn.addEventListener('click', function(){
    moreModal.style.display = 'none';
  });
}

aboutModal();

navScroll()
/**nav/trigger */
function trigger(){
  const trigger = document.querySelector('.trigger');
  const sideNav = document.querySelector('.side_nav');

  /* trigger */
  trigger.addEventListener('click', function(){
    trigger.classList.toggle('triggerX');
    sideNav.classList.toggle('right468');
  });
}

trigger()



