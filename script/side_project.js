const project = document.querySelector('.project');
const sideProject = document.querySelector('.side_project');
const slider = document.getElementsByClassName('slider')[0];
const s_wid = slider.offsetWidth;
const s_li = slider.children;
const indi_bar = document.getElementById('indi_bar');
let win_wid = window.innerWidth;
let s_move_max = (s_wid - (win_wid/2)) * -1;
let s_pos = 0;
let li_pos = 0;
let pct = 0;

project.addEventListener('wheel',function(e){
    e.preventDefault;
    if(e.deltaY > 0){
      sideProject.style.top = `0%`;
    }
});

sideProject.addEventListener('wheel',function(e){
    e.preventDefault;
    if(e.deltaY < 0 && s_pos >= 0){
        setTimeout(()=>{
          sideProject.style.top = `100%`;
        },500);
        return;
    }
    move_slider(e.deltaY);
    on_indicator();
});

function move_slider(amount){
    scrolling =true;
    s_pos -= amount;
    if(s_pos < s_move_max){
        s_pos = s_move_max;
        scrolling =false;
        return;
    }else if(s_pos > 0){
        s_pos = 0;
        return;
    }
    slider.style.transform = `translateX(${s_pos}px)`;
    li_upDown(amount);
}

function li_upDown(amount){
    li_pos += amount;
    for(let i=0; i<s_li.length; i++){
        if(i%2 != 0){
            s_li[i].style.transform = `translateY(${li_pos / (i*8)}px)`;
        }else{
            s_li[i].style.transform = `translateY(${-li_pos / (i*8)}px)`;
        }
    }
}

function on_indicator(){
    pct = s_pos * 100 / s_move_max;
    indi_bar.style.clipPath  =`
        polygon(0% 0%, ${pct}% 0%, ${pct}% 100%, 0% 100%)
    `;
}

/* 끝을 감지하여 그 이후에 세로 스크롤을 적용하는 로직*/
document.addEventListener('wheel', function (event) {
if (Math.abs(event.deltaX) > Math.abs(event.deltaY)) {
    event.preventDefault(); 

    if (!scrolling) { 
        if (event.deltaX < 0) {
            enableVerticalScroll();
        } else if (event.deltaX > 0 && isVerticalScrollEnabled()) {
            disableVerticalScroll();
        }
    }
    } else {
        if (!scrolling) { 
            if (event.deltaY > 0) { 
                if (currentSectionIndex === sections.length - 1) {
                    return;
                }
                scrollToNextSection(); 
            } else {
                scrollToPreviousSection();
            }
            setTimeout(function () {
                scrolling = false;
            }, 1000);
        }
    }
});

function enableVerticalScroll() {
document.body.style.overflowY = 'auto';
document.body.style.overflowX = 'hidden';
}

function disableVerticalScroll() {
document.body.style.overflowY = 'hidden';
}

function isVerticalScrollEnabled() {
return document.body.style.overflowY === 'auto';
}

