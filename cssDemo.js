import { LightningElement } from 'lwc';

export default class JSDemos extends LightningElement {
    handleClick(event){
        const clickValue = event.target.value;
        if(clickValue === 'play'){this.template.querySelector('.myDiv').style.animationPlayState = "running";}
        if(clickValue === 'pause'){this.template.querySelector('.myDiv').style.animationPlayState = "paused";}
    }
}