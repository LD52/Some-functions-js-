function convert(hours, minutes) {
	let one_hour = 3600; 
	var hour= hours * one_hour;
	let one_min = 60;
	var minute= minutes * one_min
	return hour + minute
}