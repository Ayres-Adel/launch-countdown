const dateElement = document.getElementById("date");
const hourElement = document.getElementById("hour");
const minuteElement = document.getElementById("minute");
const secondsElement = document.getElementById("seconds");

let NewSeconds = parseInt(secondsElement.textContent);
let NewMinute = parseInt(minuteElement.textContent);
let NewHour = parseInt(hourElement.textContent);
let NewDate = parseInt(dateElement.textContent);

function updateClock() {
    if (NewSeconds > 0) {
        NewSeconds--;
    } else {
        if (NewMinute > 0) {
            NewMinute--;
            NewSeconds = 59;
        } else {
            if (NewHour > 0) {
                NewHour--;
                NewMinute = 59;
                NewSeconds = 59;
            } else {
                if (NewDate > 0) {
                    NewDate--;
                    NewHour = 23;
                    NewMinute = 59;
                    NewSeconds = 59;
                }
            }
        }
    }
    
    // Update the DOM elements
    secondsElement.textContent = NewSeconds.toString().padStart(2, '0');
    minuteElement.textContent = NewMinute.toString().padStart(2, '0');
    hourElement.textContent = NewHour.toString().padStart(2, '0');
    dateElement.textContent = NewDate.toString().padStart(2, '0');
}

// Initial call to update the clock immediately
updateClock();

// Set the interval to call the updateClock function every second
setInterval(updateClock, 1000);
