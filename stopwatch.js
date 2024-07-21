const playbtn=document.getElementsByClassName('play')[0];
const resetbtn=document.getElementsByClassName('reset')[0];
const lapbtn=document.getElementsByClassName('lap')[0];
const bg=document.getElementsByClassName('hand')[0];
const secondHand=document.getElementsByClassName('second-hand')[0];

const minDisplay = document.querySelector('.min');
const secDisplay = document.querySelector('.sec');
const msecDisplay = document.querySelector('.msec');
const laps1=document.getElementsByClassName('laps')[0];
const clearbtn=document.getElementsByClassName('lap-clear')[0];



let isplay=false;
let interval;
let min=0;
let sec=0;
let msec=0;
let lapnum=0;
let isRun=false;
let work=true;
let work1=true;

const togglebtn=()=>{
    lapbtn.classList.remove("hidden");
    resetbtn.classList.remove("hidden");
}
const transtoggle=()=>{
    lapbtn.classList.add("trans"); 
    // resetbtn.classList.add("trans"); 
}

const play=()=>{
    if(!isplay && !isRun){
        playbtn.innerHTML=" &#x2016;";
        bg.classList.add('animation-bg');
        togglebtn();
        interval=setInterval(startTimer,1);
        lapbtn.classList.remove("trans");
        resetbtn.classList.add("trans");
        isplay=true;
        isRun=true;
        work=true;
        work1=false;
        
    }
    else{
        clearInterval(interval);
        playbtn.innerHTML='&#11162;';
        resetbtn.classList.remove("trans")
        lapbtn.classList.add("trans");
        transtoggle();
        isplay=false;
        isRun=false;
        work=false;
        work1=true;
        bg.classList.remove('animation-bg');
    }
    
}
function startTimer() {
    msec++;
    if (msec >= 100) {
        msec = 0;
        sec++;
        
    }
    if (sec >= 60) {
        sec = 0;
        min++;
    }
    
    msecDisplay.innerHTML = msec< 10 ? '0' +`${msec}`  : msec;
    secDisplay.innerHTML = sec < 10 ? '0' + `${sec} .&nbsp; `: `${sec} .&nbsp;`;
    minDisplay.innerHTML = min < 10 ? '0' +`${min} :&nbsp;` : `${min} :&nbsp;`;
}

const reset=()=>{
    if(!work){
    clearInterval(interval);
    startTimer();
    min=0;
    sec=0;
    msec=0;
    minDisplay.innerHTML = `00 :`;
    secDisplay.innerHTML = '&nbsp; 00 .' ;
    msecDisplay.innerHTML = '&nbsp;00';
    lapbtn.classList.add("hidden");
    resetbtn.classList.add('hidden');
    isRun=true;
    laps1.innerHTML='';
    lapnum=0;
}
}
const lap=()=>{
    if(!work1){
    const li=document.createElement("li");
    const number=document.createElement("span");
    const timestamp=document.createElement("span");
    
    li.setAttribute('class','lap-items');
    number.setAttribute('class','num');
    timestamp.setAttribute('class','time-stamp');
    number.innerText=`#${++lapnum}`;
    timestamp.innerHTML=`+ ${min} : ${sec} . ${msec}`;
    li.append(number,timestamp);
    laps1.append(li);
}
}

const clear=()=>{
    laps1.innerHTML='';
}
playbtn.addEventListener('click',play);
resetbtn.addEventListener('click',reset);
lapbtn.addEventListener('click',lap);
clearbtn.addEventListener('click',clear);
