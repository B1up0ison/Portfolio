var i = 0 //this is the index.js

const $ButtonOne = $("#dark_mode");             //first button that changes to dark mode
const $ButtonTwo = $("#resumeButton");          //second button for resume

const $TitleSec = $("#title");                  //title

const $BigBody = $("body");                     //body 
$BigBody.addClass("dark_mode_background");

const $ContactSec = $("#contact");              //footer
const $ContactSecUL = $("#contactSecUL");       //UL element from ContactSec
const $ContactSecP = $("#contactP");            //P element from ContactSec

const $ContactSecMilk = $("#milk");
const $ContactSecSilk = $("#silk");

const $TitleH1 = $("#EepyTwo");                 //title H1
const $TitleHeader = $("#EepyOne");             //title header


$ButtonOne.on("click", function () {
    if(i == 0){

        $TitleH1.css("color", "yellow");
        $TitleHeader.attr('style', 'color: yellow !important'); 
    
        $ButtonOne.removeClass("gradient-background-blue");
        $ButtonTwo.removeClass("gradient-background-blue");

        $ButtonOne.css("color", "yellow");
        $ButtonTwo.css("color", "yellow");

        $ContactSecP.attr('style', 'color: yellow !important'); 

        $TitleSec.removeClass("gradient-background-blue");
        $ContactSec.removeClass("gradient-background-blue");

        $ButtonOne.text("Light Mode");

        $BigBody.removeClass("dark_mode_background").addClass("light_mode_background");

        $ButtonOne.addClass("gradient-background-light-blue");
        $ButtonTwo.addClass("gradient-background-light-blue");


        if ($ContactSecMilk.length) {
            $ContactSecMilk.attr('style', 'color: yellow !important'); 
        }

        if ($ContactSecSilk.length) {
            $ContactSecSilk.attr('style', 'color: yellow !important'); 
        }

        $TitleSec.addClass("gradient-background-light-blue");
        $ContactSec.addClass("gradient-background-light-blue");

        i=1;
    }else if (i == 1){ 
        $TitleH1.css("color", "black");
        $TitleHeader.attr('style', 'color: black !important'); 
        
        $ButtonOne.removeClass("gradient-background-light-blue");
        $ButtonTwo.removeClass("gradient-background-light-blue");

        $ButtonOne.css('color', 'black');
        $ButtonTwo.css('color', 'black');

        $ContactSecP.attr('style', 'color: black !important'); 

        $TitleSec.removeClass("gradient-background-light-blue");
        $ContactSec.removeClass("gradient-background-light-blue");

        $ButtonOne.text("Dark Mode");

        $BigBody.removeClass("light_mode_background").addClass("dark_mode_background");

        $ButtonOne.addClass("gradient-background-blue");
        $ButtonTwo.addClass("gradient-background-blue");

        
        if ($ContactSecMilk.length) {
            $ContactSecMilk.attr('style', 'color: black !important'); 
        }

        if ($ContactSecSilk.length) {
            $ContactSecSilk.attr('style', 'color: black !important'); 
        }
        //Overrides elements with inline style directly from JS

        $TitleSec.addClass("gradient-background-blue");
        $ContactSec.addClass("gradient-background-blue");

        i=0;
    }
});
