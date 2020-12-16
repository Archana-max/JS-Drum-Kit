window.addEventListener("keydown",function(e){
    //console.log(e.key);
    const audio = document.querySelector(`audio[data-key="${e.key}"]`);
    const key = document.querySelector(`.key[data-key="${e.key}"]`);
    // console.log(key);
    //console.log(audio); 
    if(!audio) return; //stop the function from running altogether
    audio.currentTime=0;
    key.classList.add("playing");
    audio.play();
    
});

 function removeTransition(e){
     if(e.propertyName!=="transform")return;//Skip if its not transform

   this.classList.remove("playing");
 //console.log(e.propertyName);
}
 

const keys=document.querySelectorAll(".key");
//console.log(keys);
keys.forEach(key => key.addEventListener("transitionend", removeTransition));