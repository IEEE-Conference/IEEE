function shrink(){
    document.querySelector(".popup").style.bottom="-208px";
    document.querySelector(".popupHeading").style.borderRadius=("48px 48px 0 0");
    document.querySelector(".cross").style.opacity="0";


}
function pop(){
    document.querySelector(".popup").style.bottom="0";
    document.querySelector(".popupHeading").style.borderRadius=("48px 0 0 0");
    document.querySelector(".cross").style.opacity="1";
}


// navbar hover effects

function homeHover(){
    document.querySelector(".aboutUsNav").style.opacity="0.6";
    document.querySelector(".authorsNav").style.opacity="0.6";
    document.querySelector(".contactNav").style.opacity="0.6";
    document.querySelector(".speakerNav").style.opacity="0.6";
}
function aboutUsHover(){
    document.querySelector(".homeNav").style.opacity="0.6";
    document.querySelector(".authorsNav").style.opacity="0.6";
    document.querySelector(".contactNav").style.opacity="0.6";
    document.querySelector(".speakerNav").style.opacity="0.6";
}
function authorsHover(){
    document.querySelector(".aboutUsNav").style.opacity="0.6";
    document.querySelector(".homeNav").style.opacity="0.6";
    document.querySelector(".contactNav").style.opacity="0.6";
    document.querySelector(".speakerNav").style.opacity="0.6";
}
function contactHover(){
    document.querySelector(".aboutUsNav").style.opacity="0.6";
    document.querySelector(".authorsNav").style.opacity="0.6";
    document.querySelector(".homeNav").style.opacity="0.6";
    document.querySelector(".speakerNav").style.opacity="0.6";
}
function speakerHover(){
    document.querySelector(".aboutUsNav").style.opacity="0.6";
    document.querySelector(".authorsNav").style.opacity="0.6";
    document.querySelector(".homeNav").style.opacity="0.6";
    document.querySelector(".contactNav").style.opacity="0.6";
}


function hoverend(){
    document.querySelector(".homeNav").style.opacity="1";
    document.querySelector(".aboutUsNav").style.opacity="1";
    document.querySelector(".authorsNav").style.opacity="1";
    document.querySelector(".contactNav").style.opacity="1";
    document.querySelector(".speakerNav").style.opacity="1";
}

function unchk(){
    document.getElementById("chk").checked = false;
}
