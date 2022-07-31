let buttons=document.querySelectorAll(".set > div");

console.log(buttons);

for(items of buttons){
    items.addEventListener("click" , function(){
        let str=this.getAttribute("data-value");
        let audio
        switch(str){
            case 'w':
                audio=new Audio("Sounds/tom-1.mp3");
                audio.play();
                break;

            case 'a':
                audio=new Audio("Sounds/tom-2.mp3");
                audio.play();
                break;

            case 's':
                audio=new Audio("Sounds/tom-3.mp3");
                audio.play();
                break;

             case 'd':
                audio=new Audio("Sounds/tom-4.mp3");
                audio.play(); 
                break;

            case 'j':
                audio=new Audio("Sounds/snare.mp3");
                audio.play();
                break;
            
            case 'k':
                audio=new Audio("Sounds/crash.mp3");
                audio.play();
                break;

            case 'l':
                audio=new Audio("Sounds/kick-bass.mp3");
                audio.play();
        }
    });



    window.addEventListener('keypress' , function(e){
        console.log(e.key);
        let audio;
        switch(e.key){
            case 'w':
                audio=new Audio("Sounds/tom-1.mp3");
                audio.play();
                break;

            case 'a':
                audio=new Audio("Sounds/tom-2.mp3");
                audio.play();
                break;

            case 's':
                audio=new Audio("Sounds/tom-3.mp3");
                audio.play();
                break;

             case 'd':
                audio=new Audio("Sounds/tom-4.mp3");
                audio.play(); 
                break;

            case 'j':
                audio=new Audio("Sounds/snare.mp3");
                audio.play();
                break;
            
            case 'k':
                audio=new Audio("Sounds/crash.mp3");
                audio.play();
                break;

            case 'l':
                audio=new Audio("Sounds/kick-bass.mp3");
                audio.play();
                break;
            
        }
    });
    

}



  
// for(items of buttons){
    //     window.addEventListener('keypress' , function(e){
    //         console.log(e.key);
    //         let audio;
    //         switch(e.key){
    //             case 'w':
    //                 audio=new Audio("Sounds/tom-1.mp3");
    //                 audio.play();
    //                 break;
    
    //             case 'a':
    //                 audio=new Audio("Sounds/tom-2.mp3");
    //                 audio.play();
    //                 break;
    
    //             case 's':
    //                 audio=new Audio("Sounds/tom-3.mp3");
    //                 audio.play();
    //                 break;
    
    //              case 'd':
    //                 audio=new Audio("Sounds/tom-4.mp3");
    //                 audio.play(); 
    //                 break;
    
    //             case 'j':
    //                 audio=new Audio("Sounds/snare.mp3");
    //                 audio.play();
    //                 break;
                
    //             case 'k':
    //                 audio=new Audio("Sounds/crash.mp3");
    //                 audio.play();
    //                 break;
    
    //             case 'l':
    //                 audio=new Audio("Sounds/kick-bass.mp3");
    //                 audio.play();
    //                 break;
                
    //         }
    // })
// }