  // 現在のページのファイル名を取得する関数
  function getCurrentPageFileName() {
    var path = window.location.pathname;
    return path.split('/').pop();
  }

  // href属性が現在のページのファイル名と一致する場合に、is-activeクラスを追加する関数
  function setActiveLink() {
    var currentPageFileName = getCurrentPageFileName();
    var links = document.querySelectorAll('.y24-bread__link');

    links.forEach(function(link) {
      var href = link.getAttribute('href');
      if (href === currentPageFileName) {
        link.classList.add('is-active');
      }
    });
  }

  // ページの読み込み後に実行する
  document.addEventListener('DOMContentLoaded', function() {
    setActiveLink();
  });
