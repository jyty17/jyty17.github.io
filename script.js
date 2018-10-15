function myFunction() {
	var x = document.getElementById("floattext");
	var y = document.getElementById("stonehenge");
	if (x.style.display === "none" ) {
		x.style.display = "block";
		y.style.display = "none"
	} else {
		x.style.display = "none";
		y.style.display = "block";
	}
	// document.body.style.backgroundColor = "#F1F0FF";
	return true;
};
