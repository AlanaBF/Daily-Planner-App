// * Displays the current day at the top of the calender when a user opens the planner.
var timeDisplayEl = $('#currentDay');


function displayTime() {
    var rightNow = moment().format('dddd MMMM Do, YYYY [at] HH:mm:ss');
    timeDisplayEl.text(rightNow);
}
setInterval(displayTime, 1000);

// * Presents timeblocks for standard business hours when the user scrolls down.



// * Color-codes each timeblock based on past, present, and future when the timeblock is viewed.


var currentHour = parseInt(moment().format('HH'));  
var row = document.getElementsByClass(".row");

$('.hour').each(function() {
  var  rowHour = parseInt(
    $(this)
    .attr('id')
  );
  
  // COLOR CHANGING FUNCTION 
function setColorCode() {
  
    if (rowHour) {
      // Compares row id to current hour and sets color accordingly
      if (currentHour === rowHour) {
        setColor(row, "red");
        console.log('red');
      } else if ((currentHour < rowHour)) {
        setColor(row, "white");
        console.log('white');
      } else if ((currentHour > rowHour)) {
        setColor(row, "green");
        console.log('green');
      } 
   
}
}
setColorCode();
});
 
function setColor(element, color) {
element.style.backgroundColor = color;
};



// * Allows a user to enter an event when they click a timeblock
// function printScheduleData() {
//     var scheduleTimeEl = $('.hour');
//     var scheduleDescription = $('.description');


// }

// var scheduleEvents = {
   
    
// };
// * Saves the event in local storage when the save button is clicked in that timeblock.

// * Persists events between refreshes of a page
