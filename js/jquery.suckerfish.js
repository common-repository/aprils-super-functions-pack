/* 
 * jquery.suckerfish.js
 * Description: So that the rollover menus work in IE
 * Note: be sure #mainnav is on the UL
 */

sfHover = function() {
	var sfEls = document.getElementById("mainnav").getElementsByTagName("LI");
	for (var i=0; i<sfEls.length; i++) {
		sfEls[i].onmouseover=function() {
			this.className+=" sfhover";
		}
		sfEls[i].onmouseout=function() {
			this.className=this.className.replace(new RegExp(" sfhover\\b"), "");
		}
	}
}
if (window.attachEvent) window.attachEvent("onload", sfHover);

