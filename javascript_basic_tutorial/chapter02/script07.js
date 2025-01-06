// 完成页面加载时，会触发initAll函数
window.onload = initAll;

function initAll() {
  // 告诉id = redirect的元素，在它被点击的时候调用 initRedirect函数。
  document.getElementById("redirect").onclick = initRedirect;
}

function initRedirect() {
  // 弹窗提醒
  alert("We are not responsible for the content of pages outside our site.");
  // 浏览器显示的页面 设置为一个新页面
  window.location = 'jswelcome.html';
  return false;
}