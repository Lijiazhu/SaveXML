/*! FileSaver.js demo script
 *  2012-01-23
 *
 *  By Eli Grey, http://eligrey.com
 *  License: X11/MIT
 *    See LICENSE.md
 */

/*! @source http://purl.eligrey.com/github/FileSaver.js/blob/master/demo/demo.js */

/*jshint laxbreak: true, laxcomma: true, smarttabs: true*/
/*global saveAs, self*/

(function(view) {
"use strict";
// The canvas drawing portion of the demo is based off the demo at
// http://www.williammalone.com/articles/create-html5-canvas-javascript-drawing-app/
var
	  document = view.document
	, $ = function(id) {
		return document.getElementById(id);
	}
	, session = view.sessionStorage
	// only get URL when necessary in case Blob.js hasn't defined it yet
	, get_blob = function() {
		return view.Blob;
	}
	, text = $("text")
	, text_options_form = $("text-options")
	, text_filename = $("text-filename")
text_options_form.onsubmit=function(event) {
	event.preventDefault();
	var BB = get_blob();
	saveAs(
		  new BB(
			  [text.value || text.placeholder]
			, {type: "text/plain;charset=" + document.characterSet}
		)
		, (text_filename.value || text_filename.placeholder) + ".xml"
	);
};
}(self));
