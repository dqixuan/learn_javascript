// 完成页面加载时，会触发initAll函数
window.onload = initAll;

function initAll() {
  //
  document.getElementById("Lincoln").onclick = saySomething;
  document.getElementById("Kennedy").onclick = saySomething;
  document.getElementById("Nixon").onclick = saySomething;
}

function saySomething() {
  switch (this.id) {
    case "Lincoln":
      alert("Four score and seven years ago...");
      break
    case "Kennedy":
      alert("Ask not what your country can do for you ...");
      break;
    case "Nixon":
      alert("I am not a crook");
      break;
    default:
  }
}

function tryCatchError() {
  var ans = prompt("Please enter a valid number");
  try {
    if (!ans || isNaN(ans) || ans < 0 ) {
      throw new Error("Not a valid number");
    }
    alert("The square root of is " + ans + " is ", Math.sqrt(ans));
  } catch (error) {
    alert(error.message);
  }
}