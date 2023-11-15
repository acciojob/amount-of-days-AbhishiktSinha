//your JS code here. If required.
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