function myFunction() {
	var x = document.getElementById("floattext");
	if (x.style.display === "none" ) {
		x.style.display = "block";
    console.log("block");
	} else {
		x.style.display = "none";
    console.log("none");
	}
	return true;
};
