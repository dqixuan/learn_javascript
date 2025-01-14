window.onload = initAll;
// 声明包含76个对象的数组， 对象可以是任何东西
var usedNums = new Array(76);

function initAll() {
  // object detection 对象探测  检查浏览器是否理解你要使用的对象
  if (document.getElementById) {
    document.getElementById("reload").onclick = anotherCard;
    newCard();
  } else {
    alert("Sorry, your browser doesn`t support the script.");
  }
}

function newCard() {
  for (var i=0; i < 24; i++) {
    setSquare(i)
  }
}

function setSquare(thisSquare) {
  let currSquare = "square" + thisSquare;
  let colPlace = [0,0,0,0,0,1,1,1,1,1,2,2,2,2,2,3,3,3,3,3,4,4,4,4,4];
  console.log(colPlace);
  let colBasis = colPlace[thisSquare]*15;
  let newNum = colBasis + getNewNum() + 1;

  // if (!usedNums[newNum]) {
  //   usedNums[newNum] = true;
  //   document.getElementById(currSquare).innerHTML = newNum;
  // }

  // do  while  do至少执行一次， while condition
  do {
    newNum = colBasis + getNewNum() + 1;
  } while (usedNums[newNum]);
  usedNums[newNum] = true;
  document.getElementById(currSquare).innerHTML = newNum;
  document.getElementById(currSquare).className = "";
  document.getElementById(currSquare).onmousedown = toggleColor;
}

function getNewNum() {
  return Math.floor(Math.random()*15);  // 返回0-14的随机值  可以返回任何值。字符串 布尔值 数字
}

function anotherCard() {
  for (var i=1; i < usedNums.length; i++) {
    usedNums[i] = false;
  }
  newCard();
  return false;  // return false, 浏览器不会尝试加载连接href中指定的页面
}

function toggleColor(evt) {
  if (evt) {
    var thisSquare = evt.target;
  } else {
    var thisSquare = window.event.srcElement;
  }
  if (thisSquare.className == "") {
    thisSquare.className = "pickedBG";
  } else {
    thisSquare.className = "";
  }
  checkWin();
}

function checkWin() {
  var winningOption = -1;
  var setSquare = 0;
  var winners = [31,992,15360,507904,541729,557328,1083458,
    2162820,4329736,8519745,8659472,16252928];
  for (var i=0; i < 24; i++) {
    var currSquare = "square" + i;
    if (document.getElementById(currSquare).className !=="") {
      document.getElementById(currSquare).className = "pickedBG";
      setSquare = setSquare | Math.pow(2, i);
    }
  }
  for (var i=0; i < winners.length; i++) {
    if ((winners[i] & setSquare) === winners[i]) {
      winningOption = i
    }
  }
  if (winningOption > -1) {
    for (var i=0; i < 24; i++ ) {
      if (winners[winningOption] & Math.pow(2, 0)) {
        currSquare = "square" + i;
        document.getElementById(currSquare).className = "winningBG";
      }
    }
  }
}

