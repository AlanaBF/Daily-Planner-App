$(document).ready(function () {

  // * Displays the current day at the top of the calender when a user opens the planner.
  var timeDisplayEl = $('#currentDay');
  function displayTime() {
    var rightNow = moment().format('dddd MMMM Do, YYYY [at] HH:mm:ss');
    timeDisplayEl.text(rightNow);
  }
  setInterval(displayTime, 1000);

  // * Color-codes each timeblock based on past, present, and future when the timeblock is viewed.

  var currentHour = parseInt(moment().format('HH'));
  console.log(currentHour);
  // function to run through each time id attribute
  $('.hour').each(function () {
    var rowHour = parseInt(
      $(this)
        .parent().attr('id')
    );
    // function to set the colour code dependent on whether the current days time for the hour block is in the past, now, or in the future
    function setColorCode() {
      var textBox = document.querySelector(".description");
      console.log(rowHour);
      // if the current hour is greater than the row hour in the planner it sets the colour to grey, in the past
      if (currentHour > rowHour) {
        // this adds the attribute of class and past
        textBox.setAttribute("class", "past");
      }
      // if the current hour matches the row hour then the colour is set to red, present
      else if (currentHour === rowHour) {
        // this removes the attribute of class and past
        textBox.classList.remove("past");
        // and adds the attribute of class and present
        textBox.setAttribute("class", "present");
      }
      // if the current hour is less than the row hour then the colour is set to green, in the future
      else if (currentHour < rowHour) {
        // this removes the attribute of class and present
        textBox.classList.remove("present");
        // and sets the attribute of class and future
        textBox.setAttribute("class", "future");
      }
    }
    // this calls for the function of set colour code to be actioned
    setColorCode();
  });

  // * Allows a user to enter an event when they click a timeblock

  // * Saves the event in local storage when the save button is clicked in that timeblock.
  var button = document.querySelector(".saveBtn");

  $('.saveBtn').on('click', function () {
    // get nearby values
    console.log("click");

    var value = $(this)
      .siblings('textarea')
      .val();
    var time = $(this)
      .parent()
      .attr('id');
    console.log(value, time);
    // save in localStorage
    // localStorage.setItem("schedule", JSON.stringify(schedule));
    localStorage.setItem("Schedule time", time);
    localStorage.setItem("Schedule text", value);
  });

});


localStorage.getItem("Schedule time");
localStorage.getItem("Schedule text");

