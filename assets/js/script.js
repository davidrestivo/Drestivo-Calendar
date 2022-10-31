var TOD = moment().format('dddd, MMM Do YYYY');
$("#currentTD").html(TOD);
// Set the Time of Day on the page

$(document).ready(function () {
    $(".saveBtn").on("click", function () {
      // Setting the inputs for each block after save is pressed     
        var enteredTxt = $(this).siblings(".description").val();
        var blockSelected = $(this).parent().attr("id");
       
        localStorage.setItem(blockSelected, enteredTxt);
    })
   
    function timeTracker() {
        var currentTIme = moment().hour();

        $(".time-block").each(function () {
            var Time = parseInt($(this).attr("id").split("hour")[1]);

            if (Time < currentTIme) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            }
            else if (blockTime === currentTIme) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");

            }
        })
    }


    $("#hour9 .description").val(localStorage.getItem("9am"));
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    $("#hour11 .description").val(localStorage.getItem("hour11"));
    $("#hour12 .description").val(localStorage.getItem("hour12"));
    $("#hour13 .description").val(localStorage.getItem("hour13"));
    $("#hour14 .description").val(localStorage.getItem("hour14"));
    $("#hour15 .description").val(localStorage.getItem("hour15"));
    $("#hour16 .description").val(localStorage.getItem("hour16"));
    $("#hour17 .description").val(localStorage.getItem("hour17"));

    timeTracker();
})