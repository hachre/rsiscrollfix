/* jshint browser: true */

var allElements = document.querySelectorAll('*');
for (var i = 0, len = allElements.length; i < len; i++) {
	var element = allElements[i];

	element.style.boxShadow = "none";
	element.style.backgroundAttachment = "scroll";

	if (getComputedStyle(element).position === "fixed") {
		element.style.webkitTransform += " translateZ(0)";
		element.style.transform += " translateZ(0)";
	}
}