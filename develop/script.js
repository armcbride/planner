//GLOBAL VARIABLES:

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
//array of time
var dayHours = [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23,];
var savedTimes = JSON.parse(localStorage.getItem('times')) || {}

//FUNCTIONS:

//function to paste time blocks on page
function setTimeBlocks (){
    var times = "";

    dayHours.forEach(function (hour) {
      console.log(hour);

      times += `
        <div class="input-group input-group-lg">
          <div class="input-group-prepend">
            <span class="input-group-text">${hour}:00</span>
          </div>
          <input type="text" class="form-control ${timeSlotStatus(hour)}" id="${hour}" value="${savedTimes[hour] || ""}"/>
          <div class="input-group-append">
            <button onclick="saveNote(${hour})" class="btn btn-outline-primary saveButton " data-time="${hour}"><i class="fa fa-save"></i></button>
          </div>
        </div>
      `
    })

    timeBlocks.append(times);
}

//setting color to time blocks
function timeSlotStatus(hour) {
  console.log('creating color class', hour);
  if (currentHour === hour) {
    return 'present'
  }
  if (currentHour > hour) {
    return 'past'
  }
  if (currentHour < hour) {
    return 'future'
  }
}

console.log(setTimeBlocks());


//Local Storage
function saveNote(hour) {
  const note = $(`#${hour}`).val()
  savedTimes[hour] = note
  localStorage.setItem('times', JSON.stringify(savedTimes))
}



//bottom of code