function myFunction() {
	let topNavigation = document.getElementById("myTopNav");
	
	if (topNavigation.className === "topNav") {
		topNavigation.className += " responsive";
	} else {
		topNavigation.className = "topNav";
	}
}