var i = 0 //this is the index.js

const ButtonOne = document.querySelector("#dark_mode");             //first button that changes to dark mode
const ButtonTwo = document.querySelector("#resumeButton");          //second button for resume

const TitleSec = document.querySelector("#title");                  //title

const BigBody = document.querySelector("body")                      //body 
BigBody.classList.add("dark_mode_background");

const ContactSec = document.querySelector("#contact");              //footer
const ContactSecUL = document.querySelectorAll('#contactSecUL');    //UL element from ContactSec
const ContactSecP = document.getElementById('contactP');            //P element from ContactSec

const ContactSecMilk = document.getElementById('milk');
const ContactSecSilk = document.getElementById('silk');


const TitleH1 = document.getElementById("EepyTwo");                  //title H1
const TitleHeader = document.getElementById('EepyOne');              //title header


ButtonOne.addEventListener("click", handleClick)

function handleClick() {
    if(i == 0){

        TitleH1.style.color = "yellow";
        TitleHeader.style.setProperty('color', 'yellow', 'important'); 
       
        ButtonOne.classList.remove("gradient-background-blue");
        ButtonTwo.classList.remove("gradient-background-blue");

        
        ButtonOne.style.color = 'yellow';
        ButtonTwo.style.color = 'yellow';


        ContactSecP.style.setProperty('color', 'yellow', 'important'); 


        TitleSec.classList.remove("gradient-background-blue");
        ContactSec.classList.remove("gradient-background-blue");

        ButtonOne.innerHTML = "Light Mode";


        BigBody.classList.remove("dark_mode_background");  
        BigBody.classList.add("light_mode_background");


        ButtonOne.classList.add("gradient-background-light-blue");
        ButtonTwo.classList.add("gradient-background-light-blue");


        if (ContactSecMilk) {
            ContactSecMilk.style.setProperty('color', 'yellow', 'important');
        }

        if (ContactSecSilk) {
            ContactSecSilk.style.setProperty('color', 'yellow', 'important');
        }


        TitleSec.classList.add("gradient-background-light-blue");
        ContactSec.classList.add("gradient-background-light-blue");

        i = i + 1;
    }else if (i == 1){ 
        
        ButtonOne.classList.remove("gradient-background-light-blue");
        ButtonTwo.classList.remove("gradient-background-light-blue");

        ButtonOne.style.color = 'black';
        ButtonTwo.style.color = 'black';


        ContactSecP.style.setProperty('color', 'black', 'important'); 


        TitleSec.classList.remove("gradient-background-light-blue");
        ContactSec.classList.remove("gradient-background-light-blue");

        ButtonOne.innerHTML = "Dark Mode";


        BigBody.classList.add("dark_mode_background");  
        BigBody.classList.remove("light_mode_background");


        ButtonOne.classList.add("gradient-background-blue");
        ButtonTwo.classList.add("gradient-background-blue");

        
        if (ContactSecMilk) {
            ContactSecMilk.style.setProperty('color', 'black', 'important');
        }

        if (ContactSecSilk) {
            ContactSecSilk.style.setProperty('color', 'black', 'important');
        }
        //Overrides elements with inline style directly from JS


        TitleSec.classList.add("gradient-background-blue");
        ContactSec.classList.add("gradient-background-blue");

        TitleH1.style.color = "black";
        TitleHeader.style.setProperty('color', 'black', 'important'); 

        i = i - 1;
    }
}
