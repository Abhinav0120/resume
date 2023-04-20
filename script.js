var navMenuAnchorTags = document.querySelectorAll('.nav-menu a');
var interval;

for(var i = 0; i<navMenuAnchorTags.length; i++){
    navMenuAnchorTags[i].addEventListener('click', function(event){
        event.preventDefault();
        var targetSectionID = this.textContent.trim().toLowerCase();
        var targetSection = document.getElementById(targetSectionID);
        console.log(targetSection);
        interval = setInterval(softScroll, 0, targetSection);
    });
}

function softScroll(targetSection){
    var targetSectionCoordinates = targetSection.getBoundingClientRect();
    if(targetSectionCoordinates.top<=0)
    {
        clearInterval(interval);
        return;
    }
    window.scrollBy(0, 10);
}

// Handle scroll event on window
// Check that skills sections cintainer is visible or not
// ensure that initial width of colored skill width from 0 to skill level
// store skill level -> HTML with the help data attribute

// var progressBars = document.querySelectorAll('.skill-progress > div');
// var skillsContainer = document.getElementById('skills-container');
// window.addEventListener('scroll', checkScroll);
// var animationDone = false;

// function initialiseBars(){
//     for(let bar of progressBars)
//     {
//         bar.style.width = 0 + '%';
//     }
// }

// initialiseBars();

// function fillBars(){

//     for(let bar of progressBars){
//         let targetWidth = bar.getAttribute('data-bar-width');
//         let currentWidth = 0;
//         let interval = setInterval(function(){
//             if(currentWidth> targetWidth)
//             {
//                 clearInterval(interval);
//                 return;
//             }
//             currentWidth++;
//             bar.style.width = currentWidth + '%';

//         }, 5);
//     }
// }

// function checkScroll(){
//     //You have to check whwther sill conntainer is visible
//     var coordinates = skillsContainer.getBoundingClientRect();
//     if(!animationDone && coordinates.top <= window.innerHeight){
//         animationDone = true;
//         console.log('skills Section Visible');
//         fillBars();
//     }
//     else if(coordinates.top>window.innerHeight){
//         animationDone = false;
//         initialiseBars();
//     }

// }


// var progressBars = document.querySelectorAll('.skill-progress > div');

// function initialiseBar(bar)
// {
//     bar.style.width = 0 + '%';
// }

// for(let bar of progressBars){
//     initialiseBar(bar);
// }

// function fillBars(bar){
//         let currentWidth = 0;
//         let targetWidth = bar.getAttribute('data-bar-width'); // assuming a data-width attribute is set on each bar element
//         let intervalId = setInterval(() => {
//             if(currentWidth >= targetWidth){
//                 clearInterval(intervalId);
//             }
//             else{
//                 currentWidth++;
//                 bar.style.width = currentWidth + '%';
//             }
//         }, 10);
// }

// function checkScroll(){
//     for(let bar of progressBars){
//         let coordinates = bar.getBoundingClientRect();
//         if(coordinates.top <= window.innerHeight && parseInt(bar.style.width) === 0)
//         {
//             console .log('skills section Visible');
//             fillBars(bar);
//         }
//         else if(coordinates.top>window.innerHeight && parseInt(bar.style.width) != 0){
//             initialiseBar(bar);
//         }
//     }
// }

// window.addEventListener('scroll', checkScroll);



var progressBars = document.querySelectorAll(".skill-progress > div");



function initialiseBar(bar) {
    bar.setAttribute("data-visited", false);
    bar.style.width = 0 + '%';
}

for (var bar of progressBars) {
    initialiseBar(bar);
}



function fillBar(bar) {

    var currentWidth = 0;
    var targetWidth = bar.getAttribute("data-bar-width");
    var interval = setInterval(function () {
        if (currentWidth >= targetWidth) {
            clearInterval(interval);
            return;
        }
        currentWidth++;
        bar.style.width = currentWidth + '%';
    }, 5);

}



// This function uses a for loop for individual progress bars.
function checkScroll() {

    for (let bar of progressBars) {
        var barCoordinates = bar.getBoundingClientRect();
        if ((bar.getAttribute("data-visited") == "false") &&
            (barCoordinates.top <= (window.innerHeight - barCoordinates.height))) {
            bar.setAttribute("data-visited", true);
            console.log("filled");
            fillBar(bar);
        } else if (barCoordinates.top > window.innerHeight) {
            bar.setAttribute("data-visited", false);
            initialiseBar(bar);
        }

    }
}



window.addEventListener("scroll", checkScroll);

// This event fills the progress bars if they are displayed on the screen when the page is loaded.
window.addEventListener("load", checkScroll);