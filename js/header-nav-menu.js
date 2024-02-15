document.addEventListener('DOMContentLoaded', function() {
  // スクロールを無効化する関数
  function disableScroll(event) {
    event.preventDefault();
  }

  // スクロールを再び有効にする関数
  function enableScroll() {
    window.removeEventListener('wheel', disableScroll, { passive: false });
    window.removeEventListener('touchmove', disableScroll, { passive: false });
  }

  // スクロールをロックする関数
  function lockScroll() {
    window.addEventListener('wheel', disableScroll, { passive: false });
    window.addEventListener('touchmove', disableScroll, { passive: false });
  }

  // 全てのボタンに対する処理
  document.querySelectorAll('[id^="y24-h-btn-"]').forEach(function(btn) {
    const popupId = btn.id.replace('btn', 'popup');
    const popup = document.getElementById(popupId);

    btn.addEventListener('click', function(event) {
      event.stopPropagation();
      const isPopupVisible = popup.style.display === 'block';

      // 全てのポップアップを非表示にし、全てのボタンの背景色をリセット
      document.querySelectorAll('.y24-popup').forEach(function(p) {
        p.style.display = 'none';
      });
      document.querySelectorAll('[id^="y24-h-btn-"]').forEach(function(otherBtn) {
        otherBtn.style.backgroundColor = ''; // 他のボタンの背景色をリセット
      });

      // このボタンに対応するポップアップのみをトグル
      if (!isPopupVisible) {
        btn.style.backgroundColor = 'rgba(255, 255, 255, 0.4)';
        popup.style.display = 'block';
        lockScroll(); // スクロールをロックするが、スクロールバーはそのまま
      } else {
        btn.style.backgroundColor = ''; // このボタンの背景色をリセット
        enableScroll(); // スクロールを有効にする
      }
    });
  });

  // ポップアップ外のクリックで全てのポップアップを閉じ、スクロールを有効にする
  document.addEventListener('click', function() {
    document.querySelectorAll('.y24-popup').forEach(function(popup) {
      popup.style.display = 'none';
    });
    document.querySelectorAll('[id^="y24-h-btn-"]').forEach(function(btn) {
      btn.style.backgroundColor = ''; // ボタンの背景色をリセット
    });
    enableScroll();
  });

  // ポップアップ内のクリックイベントが伝播しないようにする
  document.querySelectorAll('.y24-popup').forEach(function(popup) {
    popup.addEventListener('click', function(event) {
      event.stopPropagation();
    });
  });
});
