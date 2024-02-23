document.addEventListener('DOMContentLoaded', function() {
    var splideRootHeroClassName = '.y24-blog-splide';
    var splide = new Splide(splideRootHeroClassName, {
        type: "slide",
        perPage: 1,
        gap: 34,
        perMove: 1,
        trimSpace: false,
        focus: 'center',
    }).mount();

    // 'updated'イベントリスナーを追加
    splide.on('updated', adjustSlideHeights);

    // 全画像の読み込みが完了した後に高さ調整を行う
    window.addEventListener('load', adjustSlideHeights);

    function adjustSlideHeights() {
        var maxHeight = 0;
        splide.Components.Elements.list.querySelectorAll('.y24-splide_card').forEach(function(card) {
            var cardHeight = card.offsetHeight;
            maxHeight = Math.max(maxHeight, cardHeight);
        });
        splide.Components.Elements.list.querySelectorAll('.y24-splide_card').forEach(function(card) {
            card.style.height = maxHeight + 'px';
        });
    }
});
