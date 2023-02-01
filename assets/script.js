$(document).ready(function () {

  // * Displays the current day at the top of the calender when a user opens the planner.
  var timeDisplayEl = $('#currentDay');
  function displayTime() {
    var rightNow = moment().format('dddd, MMMM Do');
    timeDisplayEl.text(rightNow);
  }
  setInterval(displayTime, 1000);

  // * Color-codes each timeblock based on past, present, and future when the timeblock is viewed.

  // function to set the colour code dependent on whether the current days time for the hour block is in the past, now, or in the future 
  function setColorCode() {
    var currentHour = parseInt(moment().format('HH'));
    // function to run through each time id attribute 
    $('.textBox').each(function () {
      var rowHour = parseInt($(this).attr('id'));
      // if the current hour is greater than the row hour in the planner it sets the colour to grey, in the past 
      if (rowHour < currentHour) {
        // this adds the attribute of class and past 
        $(this).addClass("past");
      }
      // if the current hour matches the row hour then the colour is set to red, present 
      else if (rowHour === currentHour) {
        // this removes the attribute of class and past 
        $(this).removeClass("past"); $(this).addClass("present");
        // and adds the attribute of class and present 
      }
      // if the current hour is less than the row hour then the colour is set to green, in the future 
      else {
        // this removes the attribute of class and present 
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
        // and sets the attribute of class and future 
      }
      // this calls for the function of set colour code to be actioned 
    });
  } setColorCode();

  // * Saves the event in local storage when the save button is clicked in that timeblock.

  $(".saveBtn").on("click", function () {

    // Get nearby values of the description in JQuery

    var text9 = $('#9').val();
    localStorage.setItem('9am Schedule', text9);

    var text10 = $('#10').val();
    localStorage.setItem('10am Schedule', text10);

    var text11 = $('#11').val();
    localStorage.setItem('11am Schedule', text11);

    var text12 = $('#12').val();
    localStorage.setItem('12pm Schedule', text12);

    var text13 = $('#13').val();
    localStorage.setItem('1pm Schedule', text13);

    var text14 = $('#14').val();
    localStorage.setItem('2pm Schedule', text14);

    var text15 = $('#15').val();
    localStorage.setItem('3pm Schedule', text15);

    var text16 = $('#16').val();
    localStorage.setItem('4pm Schedule', text16);


    var text17 = $('#17').val();
    localStorage.setItem('5pm Schedule', text17);

  });

  function loadFromLs() {
    $('#9').val(localStorage.getItem("9am Schedule"));
    $('#10').val(localStorage.getItem("10am Schedule"));
    $('#11').val(localStorage.getItem("11am Schedule"));
    $('#12').val(localStorage.getItem("12pm Schedule"));
    $('#13').val(localStorage.getItem("1pm Schedule"));
    $('#14').val(localStorage.getItem("2pm Schedule"));
    $('#15').val(localStorage.getItem("3pm Schedule"));
    $('#16').val(localStorage.getItem("4pm Schedule"));
    $('#17').val(localStorage.getItem("5pm Schedule"));
  }

  loadFromLs();

});