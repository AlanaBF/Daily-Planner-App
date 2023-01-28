$(document).ready(function () {

  // * Displays the current day at the top of the calender when a user opens the planner.
  var timeDisplayEl = $('#currentDay');
  function displayTime() {
    var rightNow = moment().format('dddd MMMM Do, YYYY [at] HH:mm:ss');
    timeDisplayEl.text(rightNow);
  }
  setInterval(displayTime, 1000);

  // * Color-codes each timeblock based on past, present, and future when the timeblock is viewed.

  // function to set the colour code dependent on whether the current days time for the hour block is in the past, now, or in the future 
  function setColorCode() {
    var currentHour = parseInt(moment().format('HH'));
    // function to run through each time id attribute 
    $('.time').each(function () {
      var rowHour = parseInt($(this).attr('id'));
      //var textBox = document.querySelector(".hour");
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

  // * Allows a user to enter an event when they click a timeblock

  // * Saves the event in local storage when the save button is clicked in that timeblock.

  $(".saveBtn").on("click", function () {

    // Get nearby values of the description in JQuery

    var text9 = $('#h9input').val();
    localStorage.setItem('9am Schedule', text9);

    if (typeof (Storage) !== "undefined") {
      // Store
      $("#h9input").val(localStorage.getItem("9am Schedule"));
    } else {
      $("#h9input").val("Undefined");
    }

    var text10 = $('#h10input').val();
    localStorage.setItem('10am Schedule', text10);

    if (typeof (Storage) !== "undefined") {
      // Store
      $("#h10input").val(localStorage.getItem("10am Schedule"));
    } else {
      $("#h10input").val("Undefined");
    }

    var text11 = $('#h11input').val();
    localStorage.setItem('11am Schedule', text11);

    if (typeof (Storage) !== "undefined") {
      // Store
      $("#h11input").val(localStorage.getItem("11am Schedule"));
    } else {
      $("#h11input").val("Undefined");
    }

    var text12 = $('#h12input').val();
    localStorage.setItem('12pm Schedule', text12);

    if (typeof (Storage) !== "undefined") {
      // Store
      $("#h12input").val(localStorage.getItem("12pm Schedule"));
    } else {
      $("#h12input").val("Undefined");
    }

    var text13 = $('#h13input').val();
    localStorage.setItem('1pm Schedule', text13);

    if (typeof (Storage) !== "undefined") {
      // Store
      $("#h13input").val(localStorage.getItem("1pm Schedule"));
    } else {
      $("#h13input").val("Undefined");
    }

    var text14 = $('#h14input').val();
    localStorage.setItem('2pm Schedule', text14);

    if (typeof (Storage) !== "undefined") {
      // Store
      $("#h14input").val(localStorage.getItem("2pm Schedule"));
    } else {
      $("#h14input").val("Undefined");
    }

    var text15 = $('#h15input').val();
    localStorage.setItem('3pm Schedule', text15);

    if (typeof (Storage) !== "undefined") {
      // Store
      $("#h15input").val(localStorage.getItem("3pm Schedule"));
    } else {
      $("#h15input").val("Undefined");
    }

    var text16 = $('#h16input').val();
    localStorage.setItem('4pm Schedule', text16);

    if (typeof (Storage) !== "undefined") {
      // Store
      $("#h16input").val(localStorage.getItem("4pm Schedule"));
    } else {
      $("#h16input").val("Undefined");
    }

    var text17 = $('#h17input').val();
    localStorage.setItem('5pm Schedule', text17);

    if (typeof (Storage) !== "undefined") {
      // Store
      $("#h17input").val(localStorage.getItem("5pm Schedule"));
    } else {
      $("#h17input").val("Undefined");
    }

  });

});

