/*document.addEventListener("DOMContentLoaded", init);

function init() {

    let newCircleSection = document.createElement("section");
    newCircleSection.className = "circle";
    newCircleSection.textContent = "A Circle";
    // append the new element to the parent element with the id "circles"
    let circles = document.getElementById("circles");
    circles.appendChild(newCircleSection);
   
    // add some event listeners:

    newCircleSection.addEventListener("click", circleClick);
    newCircleSection.addEventListener("mouseover", mouseOver);
    newCircleSection.addEventListener("mouseout", mouseOut);
}


function circleClick() {
    this.style.borderColor = "blue";
    this.style.backgroundColor = "aqua";
    console.log(this);
}

function mouseOver(e) {
    e.target.classList.toggle("focus");
    console.log(e);
    console.log(e.target);
}

function mouseOut(e) {
    e.target.classList.toggle("focus");
    e.target.removeAttribute('style'); // remove any style added by the click event
    console.log(e);
    console.log(e.target);
}

*/

//document.addEventListener("DOMContentLoaded", init);


var SZUT0003 = {
    init: function () {
        let newSquare = document.createElement("div");
        newSquare.className = "box";
        newSquare.textContent = "szut0003";

        let boxes = document.getElementById("boxes");
        boxes.appendChild(newSquare);

        newSquare.addEventListener("mouseout", function () {
            e.target.className.toggle("highlight");
            e.target.removeAttribute("style");
        });

        newSquare.addEventListener("mouseover", function () {
            e.target.className.toggle("highlight");
        });

        newSquare.addEventListener("click", function () {
            newSquare.style.borderColor = "hsl(176, 40%, 50%)";
            newSquare.style.backgroundColor = "hsl(357, 52%, 50%)";
        });
    }

};




//function mouseClick {
//    this.style.borderColor = "hsl(176, 40%, 50%)";
//    this.style.backgroundColor = "hsl(357, 52%, 50%)";
//}
//
//function mouseOver(e) {
//    e.target.className.toggle("highlight");
//}
