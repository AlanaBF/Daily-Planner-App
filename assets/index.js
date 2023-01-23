// * Displays the current day at the top of the calender when a user opens the planner.
var timeDisplayEl = $('#currentDay');


function displayTime() {
    var rightNow = moment().format('dddd MMMM Do, YYYY [at] HH:mm:ss');
    timeDisplayEl.text(rightNow);
}
setInterval(displayTime, 1000);

// * Presents timeblocks for standard business hours when the user scrolls down.



// * Color-codes each timeblock based on past, present, and future when the timeblock is viewed.
function setColorCode () {
var rowHour = $('.hour')
var currentHour = parseInt(moment().format('HH'));    
    if (rowHour) {
      // Compares row id to current hour and sets color accordingly
      if (currentHour === rowHour) {
        setColor('<tr>', "#ff6961");
      } else if ((currentHour < rowHour)) {
        setColor('<tr>', "#d3d3d3");
      } else if ((currentHour > rowHour)) {
        setColor('<tr>', "#77dd77");
      } 
    }
}

$('setColor').append("<tr>");


// * Allows a user to enter an event when they click a timeblock
// function printScheduleData() {
//     var scheduleTimeEl = $('.hour');
//     var scheduleDescription = $('.description');


// }

// var scheduleEvents = {
   
    
// };
// * Saves the event in local storage when the save button is clicked in that timeblock.

// * Persists events between refreshes of a page
