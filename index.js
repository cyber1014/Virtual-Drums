//this for loop adds a mouse click listener to all the buttons
for (var i=0;i<7;i++)
{
    document.querySelectorAll("button")[i].addEventListener("click", function (){
        var x=this.innerHTML;
        makeSound(x);
        buttonAnimation(x);
    });

}

document.addEventListener("keydown", function(event){
    //event is just a variable here
    //console.log(event) tells a lot of info about keyboard button clicked. usme key wala part tells which button is clicked.
    //so event.key tells which button was clicked. 
    makeSound (event.key);
    buttonAnimation(event.key);
});

function makeSound(val)
{
    switch (val) {
        case "w":
            new Audio("sounds/tom-1.mp3").play();
            break;

        case "a":
            new Audio("sounds/tom-2.mp3").play();
            break;
            
        case "s":
            new Audio("sounds/tom-3.mp3").play();
            break;
            
        case "d":
            new Audio("sounds/tom-4.mp3").play();
            break; 
            
        case "j":
            new Audio("sounds/snare.mp3").play();
            break;
            
        case "k":
            new Audio("sounds/crash.mp3").play();
            break;
                
        case "l":
            new Audio("sounds/kick-bass.mp3").play();
            break;
    
        default:
            break;
    }

}

function buttonAnimation (currKey)
{
    var activeButton = document.querySelector("."+currKey);
    activeButton.classList.add("pressed");

    setTimeout(function()
    {
        activeButton.classList.remove("pressed");
    }, 100);
}