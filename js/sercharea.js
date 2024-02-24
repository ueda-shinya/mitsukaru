document.addEventListener('DOMContentLoaded', function () {
  const submitButton = document.getElementById('y24-submitButton');
  const formElements = document.querySelectorAll('#y24-searchForm select, #y24-searchForm input[type="text"]');
  const calendar = document.getElementById("y24-calendar");
  const datePicker = document.getElementById("y24-datePicker");

  // 日付入力のデフォルト値を設定しない

  function updateSubmitButtonState() {
    let allSelected = true;
    formElements.forEach(function (element) {
      if ((element.type === 'text' && element.value === '') || (element.tagName === 'SELECT' && element.value === '')) {
        allSelected = false;
      }
    });

    submitButton.disabled = !allSelected;
    submitButton.style.cursor = allSelected ? 'pointer' : 'not-allowed';
    submitButton.classList.toggle('enabled', allSelected);
  }

  formElements.forEach(function (element) {
    element.addEventListener('change', updateSubmitButtonState);
  });

  // カレンダーの表示・非表示を制御するイベント
  datePicker.addEventListener("click", function (event) {
    event.stopPropagation();
    calendar.style.display = "grid"; // カレンダーを表示
  });

  document.addEventListener("click", function () {
    calendar.style.display = "none"; // カレンダーを非表示
    updateSubmitButtonState(); // ここで状態を更新
  });

  calendar.addEventListener("click", function (event) {
    event.stopPropagation(); // カレンダー内のイベント伝播を停止
  });

  updateSubmitButtonState(); // 初期ロード時にも状態をチェック
});

window.selectDate = function (event, year, month, day) {
  event.stopPropagation();
  selectedDate = new Date(year, month, day);
  datePicker.value = `${year}-${month + 1}-${day}`.replace(/-(\d)\b/g, "-0$1");
  calendar.style.display = "none"; // カレンダーを非表示に設定
  updateSubmitButtonState(); // 日付選択後にボタンの状態を更新
  // drawCalendars(); // 必要に応じてカレンダーを再描画
};
