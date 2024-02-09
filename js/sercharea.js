document.addEventListener('DOMContentLoaded', function () {
  const submitButton = document.getElementById('y24-submitButton');
  const formElements = document.querySelectorAll(
    '#y24-searchForm select, #y24-searchForm input[type="date"]'
  );
  // 日付入力のデフォルト値を設定しない

  function updateSubmitButtonState() {
    let allSelected = true;
    formElements.forEach(function (element) {
      if (element.type === 'date' && element.value === '') {
        // 日付が未選択の場合は、allSelectedをfalseに設定
        allSelected = false;
      } else if (element.tagName === 'SELECT' && element.value === '') {
        // ドロップダウンが未選択の場合も、allSelectedをfalseに設定
        allSelected = false;
      }
    });

    submitButton.disabled = !allSelected; // allSelectedがtrueの場合のみ、ボタンを活性化
    submitButton.style.cursor = allSelected ? 'pointer' : 'not-allowed';
    if (allSelected) {
      submitButton.classList.add('enabled');
    } else {
      submitButton.classList.remove('enabled');
    }
  }

  formElements.forEach(function (element) {
    element.addEventListener('change', updateSubmitButtonState);
  });

  updateSubmitButtonState(); // 初期ロード時にも状態をチェック
});
