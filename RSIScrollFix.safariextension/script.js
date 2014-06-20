/* jshint browser: true */

/*
 *
 * RSI Scroll Fix
 *
 * Author: Harald Glatt code@hachre.de (hachre on RSI forums)
 * Description: Fixes laggy scrolling on the official StarCitizen website!
 * License: BSD 3-Clause
 *
 * Thanks to: Baryn (on the official StarCitizen forums) and his thread at:
 * https://forums.robertsspaceindustries.com/discussion/40670/
 *
 * My code is a 95% copy and paste of his original code for Chrome.
 *
 */

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
