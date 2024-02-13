document
  .getElementById("y24-sp-menu-btn")
  .addEventListener("click", function () {
    var element1 = document.querySelector(".y24-sp-menu-btn_span");
    var element2 = document.querySelector(".y24-sp-menu");

    // .y24-sp-menu-open クラスをトグルする
    element1.classList.toggle("y24-sp-menu-open");
    element2.classList.toggle("y24-sp-menu-open");

    // クラスが存在するかどうかで条件分岐
    toggleScroll(element1.classList.contains("y24-sp-menu-open"));
  });

// y24-sp-menuの中のaタグにイベントリスナーを設定
document.querySelectorAll(".y24-sp-menu a").forEach(function (link) {
  link.addEventListener("click", function () {
    // y24-sp-menu-open クラスを削除
    var element1 = document.querySelector(".y24-sp-menu-btn_span");
    var element2 = document.querySelector(".y24-sp-menu");
    element1.classList.remove("y24-sp-menu-open");
    element2.classList.remove("y24-sp-menu-open");

    // スクロールを有効にする
    toggleScroll(false);
  });
});

// スクロールの有効/無効を切り替える関数
function toggleScroll(isDisabled) {
  document.body.style.overflow = isDisabled ? "hidden" : "";
}
