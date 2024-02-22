document.addEventListener('DOMContentLoaded', function() {
    // ボタンとポップアップのペアを検出するためのプレフィックス
    const btnPrefix = 'y24-h-btn-';
    const popupPrefix = 'y24-h-popup-';

    // ボタンとポップアップの関係を管理するマップ
    let relations = {};

    // ボタン要素をすべて取得
    document.querySelectorAll('[id^="y24-h-btn-"]').forEach(btn => {
        const identifier = btn.id.substring(btnPrefix.length);
        const relatedPopup = document.getElementById(`${popupPrefix}${identifier}`);

        if (relatedPopup) {
            // マウスがボタン上にある場合
            btn.addEventListener('mouseenter', function() {
                relatedPopup.style.display = 'block';
            });
            btn.addEventListener('mouseleave', function() {
                setTimeout(() => { // ホバー状態の確認に少し時間を設ける
                    if (!relations[identifier]) {
                        relatedPopup.style.display = 'none';
                    }
                }, 100);
            });

            // マウスがポップアップ上にある場合
            relatedPopup.addEventListener('mouseenter', function() {
                relations[identifier] = true;
                this.style.display = 'block';
            });
            relatedPopup.addEventListener('mouseleave', function() {
                delete relations[identifier];
                this.style.display = 'none';
            });
        }
    });
});
