window.onload = rolloverInit;

function rolloverInit() {
  for (let i=0; i < window.links.length; i++) {
    let linkObj = document.links[i];
    if (linkObj.className) {
      // link className = image.ID
      let imageObj = document.getElementById((linkObj.className))
      // image element exist
      if (imageObj) {
        setupRollover(linkObj, imageObj);
      }
    }
  }
}

function setupRollover(theLink, textImage) {
  theLink.imgToChange = textImage;
  theLink.onmouseout = function() {
    this.imgToChange.src = this.outImage.src;
  }

  theLink.onmouseover = function() {
    this.imgToChange.src = this.overImage.src;
  }

  theLink.outImage = new Image();
  theLink.outImage.src = textImage.src;

  theLink.overImage = new Image();
  theLink.overImage.src = "../images/over.png" + theLink.id+ "Text.gif";
}

function roll(theLink, textImage) {
  theLink.imgToChange = [];
  theLink.outImage = [];
  theLink.overImage = [];

  theLink.imgToChange[0] = textImage;
  theLink.onmouseout = rollOut;
  theLink.onmouseover = rollOver;

  theLink.outImage[0] = new Image();
  theLink.outImage[0].src = textImage.src;

  theLink.overImage[0] = new Image();
  theLink.overImage[0].src = "../images/" + theLink.id+ "Text.gif";

  let rollOverObj = document.getElementById(theLink.id + "Img");
  if (rollOverObj) {
    theLink.imgToChange[1] = rollOverObj;

    theLink.outImage[1] = new Image();
    theLink.outImage[1].src = rollOverObj.src;

    theLink.overImage[1] = new Image();
    theLink.overImage[1].src = "../images/" + theLink.id+ "_on.gif";
  }

  function rollOut() {
    for (let i=0; i < this.ImgToChange.length; i++) {
      this.imgToChange[i].src = this.overImage[i].src
    }
  }
  function rollOver() {
    for (let i=0; i < this.ImgToChange.length; i++) {
      this.imgToChange[i].src = this.outImage[i].src
    }
  }

}