window.onload = rolloverInit;

function rolloverInit() {
  for (let i = 0; i < document.images.length; i++) {
    /*
      document.images is a HTMLCollection of all <img> elements on the page
      parentNode gets the parent node (the immediate container) of the current <img> element.
      The tagName property returns the tag name of the parent element as an uppercase string.
      For example, A for <a>, DIV for <div>
     */
    if (document.images[i].parentNode.tagName === 'A') {
     setupRollover(document.images[i]);
    }
  }
}

function setupRollover(theImage) {
  theImage.outImage = new Image(); // new a property named outImage
  theImage.outImage.src = theImage.src;
  theImage.onmouseout = function() {
    this.src = this.outImage.src;
  }

  theImage.overImage = new Image();
  theImage.overImage.src = "images/" + theImage.id + "_on.gif";
  theImage.onmouseover = function() {
    this.src = this.overImage.src;
  }
}