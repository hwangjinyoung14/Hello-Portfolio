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

function move_slider(amount){
    s_pos -= amount;
    if(s_pos < s_move_max){
        s_pos = s_move_max;
        isHorizontal = false 
        enableVerticalScroll = true;
        scrollToNextSection();
        return;

    }else if(s_pos > 0){
        isHorizontal = false 
        scrollToPreviousSection();
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


