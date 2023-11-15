const formSubmitButton = document.getElementById("submit-button-form");
formSubmitButton.addEventListener("click", showYear);

function showYear(){
    alert(daysOfAYear());
}

function getYear(){
    let year = Number(document.getElementById("year-input").innerHTML);
    return year;
}
let year = getYear();

function daysOfAYear(year) {
    
	if(isLeapYear(year)) {
		return 366;
	}
	else return 365;
}
function isLeapYear(year){
	if(year % 4 == 0) {
		if(year % 100 != 0) {
			return true;
		}
		else if(year % 400 == 0) {
			return true;
		}
		else return false;
	}
	else return false;
}

