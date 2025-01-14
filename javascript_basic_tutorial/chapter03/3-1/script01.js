window.onload = initAll;
// 声明包含76个对象的数组， 对象可以是任何东西
var usedNums = new Array(76);

function initAll() {
  // object detection 对象探测  检查浏览器是否理解你要使用的对象
  if (document.getElementById) {
    for (let i = 0; i < 24; i++) {
      setSquare(i);
    }
  } else {
    alert("Sorry, your browser doesn`t support the script.");
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
}

function getNewNum() {
  return Math.floor(Math.random()*15);  // 返回0-14的随机值  可以返回任何值。字符串 布尔值 数字
}

