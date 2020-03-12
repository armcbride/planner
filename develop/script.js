$(document).ready(function(){ 
// Get current date and time from Moment 
var currentDay= moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
var currentHour= moment().hour();
console.log(currentHour);
// Display current time in proper HTML
$('#currentDay').text(currentDay);
var display= $('currentDay');
display.text(currentDay);

//pushing timeblocks to HTML
var timeBlocks = $('#timeBlocks');
var userAddendum = "";
var hourSlot= "";
//array of time
var dayHours = [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23,];

//function to paste time blocks on page
function setTimeBlocks (){
    var times = "";
    for (var i = 0; i < dayHours.length; i++) {
        var setHours = "" +
            '<div class="input-group input-group-lg">' +
            '<div class="input-group-prepend">' +
            '<span class="input-group-text">' + dayHours[i]+ ":00" +
             '</span>' +
            '</div>' +
            '<input type="text" class="form-control" id="' + dayHours[i] + '" value=""/>' +
            '<div class="input-group-append">' +
            '<button class="btn btn-outline-primary saveButton" data-time="' + dayHours[i] + '"><i class="fa fa-save"></i></button>' +
            '</div>' +
            '</div>';

        times += setHours;

        for (var j = 0; j < dayHours.length; j++) {
            $('#' + dayHours[i]).text(hourSlot);
        }
    }
    timeBlocks.append(times);
}

console.log(setTimeBlocks());

//setting colors to time blocks

for (i = 0; i < dayHours.length; i++) {

    if (currentHour === dayHours[i]) {
        $("#" + dayHours[i]).addClass('present');
    }
    if (currentHour > dayHours[i]) {
        $("#" + dayHours[i]).addClass('past');
    }
    if (currentHour < dayHours[i]) {
        $("#" + dayHours[i]).addClass('future');
    }
    
}
console.log(currentHour);


//Local Storage beast goes below




//bottom of code
});

