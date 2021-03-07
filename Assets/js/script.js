
// add time to top of page

$("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'));

// array for work times 

var times = ["8AM", "9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];

// loop through work hours 
// i = 8 becuase we're starting at 8 am 
// i < 18 becuase military time 18 = 6 pm

for (var i = 8; i < 18; i++) {
    $(".container").append(`
    <div class = "row time-block" id="hour-${i}">
    <div class = "col-1 hour">
    ${times[i-8]}
    </div>
    <textarea class="col-10 description"></textarea>
    <button class="col-1 saveBtn"> <i class="far fa-save"></i> </button> 
    </div 
    `)

    if (moment().format("H") == i) {
        $(`#hour-${i}`).addClass("present");
    }

    else if (moment().format("H") > i) {
        $(`#hour-${i}`).addClass("past");
    }

    else {
        $(`#hour-${i}`).addClass("future");
    }

    $(`#hour-${i} .description`).val(localStorage.getItem(`hour-${i}`));
}

// local storage 

$(".saveBtn").on("click", function() {
    var key = $(this).parent().attr("id");
    var value = $(this).siblings(".description").val();
    localStorage.setItem(key, value); 
});