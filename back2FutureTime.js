let date = new Date();
let result = undefined;

function presentMonth(id) {
	let month = date.getMonth();
	let months = new Array('JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUNE', 'JULY', 'AUG', 'SEPT', 'OCT', 'NOV', 'DEC');
	result = months[month];
	document.getElementById(id).innerHTML = result;
	return true;
}

function presentDay(id) {
	let day = date.getDay();
	let days = new Array('SUN', 'MON', 'TUES', 'WED', 'THUR', 'FRI', 'SAT');
	result = days[day];
	document.getElementById(id).innerHTML = result;
	return true;
}

function presentYear(id) {
	let year = date.getFullYear();
	result = year;
	document.getElementById(id).innerHTML = result;
	return true;
}

function presentHour(id) {
	let hour = date.getHours();
	
	if (hour < 10) {
		hour = "0" + hour;
	}
	
	result = hour;
	document.getElementById(id).innerHTML = result;
	return true;
}

function presentMinute(id) {
	let minute = date.getMinutes();
	
	if (minute < 10) {
		minute = "0" + minute;
	}
	
	result = minute;
	document.getElementById(id).innerHTML = result;
	return true;
}

function timeOfDay(am, pm) {
	let hour = date.getHours();
	if (hour >= 12) {
		let elems = document.getElementsByClassName(pm);
		for(let i = 0; i < elems.length; i++) {
			elems[i].style.display = "block";
		}
	} else {
		let elems = document.getElementsByClassName(am);
		for(let i = 0; i < elems.length; i++) {
			elems[i].style.display = "block";
		}
	}
}