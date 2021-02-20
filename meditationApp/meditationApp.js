import { LightningElement } from 'lwc';
import vid_res from '@salesforce/contentAssetUrl/rainVideo';
import vid_res1 from '@salesforce/contentAssetUrl/beachmp4';
import rainAud_res from '@salesforce/resourceUrl/MedRainAudio'; 
import beachAud_res from '@salesforce/resourceUrl/beachAudio';

export default class MeditationApp extends LightningElement {
rainVideo = vid_res;
isPlay= true;
fakeDuration= 600;
time = 0.00;
rainAud = rainAud_res;
outline;
outlineLength;
timeDisplay;

connectedCallback(){
    
}
renderedCallback(){
    this.outline = this.template.querySelector(".moving-outline circle");
    this.outlineLength = this.outline.getTotalLength();
    this.outline.style.strokeDasharray = this.outlineLength;
    //this.outline.style.strokeDashoffset  = this.outlineLength;
    this.audio = this.template.querySelector(".song");
    this.rainVid = this.template.querySelector('.video');
    this.time = `${Math.floor(this.fakeDuration / 60)}:${Math.floor(this.fakeDuration % 60 )}`;
}

handleClick(event){
    const value = event.target.value;  
    if(value === 'Play'){
        this.isPlay = false;
        this.audio.play();
        this.rainVid .play();
    }else if(value === 'Pause'){     
        this.audio.pause();
        this.rainVid.pause();
        this.isPlay= true;
    }else if(value === '120' || value == '300' || value == '600'){
        this.fakeDuration = value;
        this.time = `${Math.floor(this.fakeDuration / 60)}:${Math.floor(this.fakeDuration % 60)}`;
    }else if(value === 'beach'){
        this.rainVid.src = vid_res1;
        this.audio.src = beachAud_res;
        this.isPlay = true;
        checkPlaying(this.audio);
    }else if(value === 'rain'){
        this.rainVid.src = vid_res;
        this.audio.src = rainAud_res;
        this.isPlay = true;
        checkPlaying(this.audio);         
    }  
}

updateTime(event){
let currentTime = event.target.currentTime;
let elapsed = this.fakeDuration - currentTime;
let seconds = Math.floor(elapsed % 60);
let minutes = Math.floor(elapsed / 60);
this.time = `${minutes}:${seconds}`;
let progress = this.outlineLength - (currentTime / this.fakeDuration) * this.outlineLength;
this.outline.style.strokeDashoffset = progress;

if (currentTime >= this.fakeDuration) {
    this.audio.pause();
    this.rainVid.pause();
    this.audio.currentTime = 0;
    this.isPlay = true;
}
}

checkPlaying(song){        
    this.rainVid.pause();
    this.audio.pause();
    this.loaded = false;
}
}