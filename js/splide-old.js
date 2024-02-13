document.addEventListener('DOMContentLoaded', function () {
  // Splideのインスタンスを作成
  var pickupsplide = new Splide('.y24-pickup-splide', {
    // ここにオプションを設定
    perPage: 3,
    perMove: 1,
    //   height: '9rem',
    width: '280px',
    height: '306px',
    focus: 'center',
    trimSpace: false,
    breakpoints: {
      600: {
        perPage: 1,
        width: '280px',
        height: '306px',
      },
    },
  });

  // URLHashエクステンションをマウント
  pickupsplide.mount(window.splide.Extensions);

  var blogsplide = new Splide('.y24-blog-splide', {
    // ここにオプションを設定
    perPage: 3,
    perMove: 1,
    //   height: '9rem',
    width: '280px',
    height: '306px',
    focus: 'center',
    trimSpace: false,
    breakpoints: {
      600: {
        perPage: 1,
        width: '280px',
        height: '306px',
      },
    },
  });

  // URLHashエクステンションをマウント
  blogsplide.mount(window.splide.Extensions);
});
