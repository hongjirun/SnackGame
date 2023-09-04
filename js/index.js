// 游戏的开始入口
function main() {
  let startBtn = document.querySelector(".startBtn");
  // 点击开始按钮进行游戏
  startBtn.addEventListener("click", function (e) { 
    e.stopPropagation();
    startBtn.style.display = "none";
    // 初始化游戏内容
    initGame();
  })
}
main();