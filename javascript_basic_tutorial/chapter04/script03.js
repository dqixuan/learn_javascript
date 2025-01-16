window.onload = rolloverInit;

function rolloverInit() {
  for (let i=0; i < document.images.length; i++) {
    if (document.images[i].parentNode.tagName === 'A') {
      setupRollover(document.images[i]);
    }
  }
}

function setupRollover(theImage) {
  // 处理鼠标移开
  theImage.outImage = new Image();
  theImage.outImage.src = theImage.src;
  theImage.onmouseout = function() {
    this.src = this.outImage.src;
  }

  // 处理鼠标点击事件
  theImage.clickImage = new Image();
  theImage.clickImage.src = "images/" + theImage.id + "_click.gif";
  theImage.onclick = function() {
    this.src = this.clickImage.src;
  }

  // 处理鼠标在上面
  theImage.overImage = new Image();
  theImage.overImage.src = "images/" + theImage.id + "_on.gif";
  theImage.onmouseover = function() {
    this.src = this.overImage.src;
  }
}