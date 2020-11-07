$(document).ready(function () {
    function showCurrentDay() {
      $("#currentDay").text(moment().format("dddd MMMM Do, YYYY"));
    }
  
    showCurrentDay();
  
    function timeEquals() {
      var realHour = parseInt(moment().hour());
  
      $(".text-input").each(function () {
        var scheduleHour = parseInt($(this).attr("id"));
        if (scheduleHour < realHour) {
          $(this).addClass("past");
          $(this).removeClass("future");
          $(this).removeClass("present");
        } else if (scheduleHour == realHour) {
          $(this).removeClass("past");
          $(this).addClass("present");
          $(this).removeClass("future");
        } else {
          $(this).removeClass("present");
          $(this).removeClass("past");
          $(this).addClass("future");
        }
      });
    }
    timeEquals();

    $(".saveBtn").on("click", function () {
      var input = $(this).siblings(".text-input").val();
      var time = $(this).parent().attr("id");
      localStorage.setItem(time, input);
    });
  
    $("#hour9.text-input").val(localStorage.getItem("nine"));
    $("#hour10.text-input").val(localStorage.getItem("ten"));
    $("#hour11.text-input").val(localStorage.getItem("eleven"));
    $("#hour12.text-input").val(localStorage.getItem("twelve"));
    $("#hour13.text-input").val(localStorage.getItem("thirteen"));
    $("#hour14.text-input").val(localStorage.getItem("fourteen"));
    $("#hour15.text-input").val(localStorage.getItem("fifteen"));
    $("#hour16.text-input").val(localStorage.getItem("sixteen"));
    $("#hour17.text-input").val(localStorage.getItem("seventeen"));
  });