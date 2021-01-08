

    

var textar=document.querySelector("textarea")
var keyboard=document.getElementById("keyboard")

textar.addEventListener("focus",function(){

    
    //keyboard
    keyboard.style.bottom="50px"

    //character
    var character=document.getElementsByClassName("character");

    for(var i=0; i< character.length; i++){

        character[i].addEventListener("click",function(){
            textar.value +=this.value
        })
    }

    //backspace
    var backspace=document.getElementById("backspace");

    backspace.addEventListener("click",function(){

        textar.value=textar.value.substring(0,textar.value.length-1)
    })


    //enter
    var enter=document.getElementById("enter")

    enter.addEventListener("click",function(){

        textar.value +="\n";
    })


    //capsloak
    var capsloak=document.getElementById("capsloak")

    capsloak.addEventListener("click",function(){
    
        textar.classList.toggle("uppercase")
    })


    //spacebar
    var spacebar=document.getElementById("spacebar")

    spacebar.addEventListener("click",function(){
        
        textar.value +=" ";
    })


    //check
    var check=document.getElementById("check");

    check.addEventListener("click",function(){
    
        keyboard.style.bottom="-50%"

    })




})


/*
   var capsloak=document.getElementById("capsloak")

    capsloak.addEventListener("click",function(){
    
        var character=document.getElementsByClassName("character");

        for(var i=0; i< character.length; i++){

            character[i].classList.toggle("uppercase")
        }

        textar.classList.add("uppercase")
    })
*/