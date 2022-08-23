buttons = document.querySelectorAll(".drum")
for (i = 0; i < buttons.length; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function () {

       var  buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML)
    })
}
document.addEventListener("keypress", function (event) {
    makeSound(event.key);
    buttonAnimation(event.key)

})
function makeSound(key) {
    switch (key) {
        case "w":
            audio = new Audio("/music/my.wav")
            audio.play()

            break;
        case "a":
            audio = new Audio("/music/mya.wav")
            audio.play()

            break;
        case "s":
            audio = new Audio("/music/mys.wav")
            audio.play()

            break;
        case "d":
            audio = new Audio("/music/myd.wav")
            audio.play()

            break;

        case "f":
            audio = new Audio("/music/myf.wav")
            audio.play()

            break;
        case "j":
            audio = new Audio("/music/myj.wav")
            audio.play()

            break;
        case "k":
            audio = new Audio("/music/myk.wav")
            audio.play()

            break;
        case "l":
            audio = new Audio("/music/myl.wav")
            audio.play()

            break;

        default:

    }
}
function buttonAnimation(cuurentKey){
   activeButton =  document.querySelector("." + cuurentKey);
   activeButton.classList.add("pressed");
   setTimeout(function(){
       activeButton.classList.remove("pressed")
   },100)

}
