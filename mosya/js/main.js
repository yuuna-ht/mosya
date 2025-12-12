//layer2のスクロールに合わせた下方向への動きを遅らせる
var rellax = new Rellax('.rellax');

//アコーディオンメニュー
$(function() {
    $('.drop-btn').hover(
        function(){
            $(this).find('.sub-menu').slideDown(230);
        },
        function(){
            $(this).find('.sub-menu').hide();
        }
    );
});

//ハンバーガーメニュー時の＋ー切り替え
$(".js-menu-li").hover(function() {
    $(this).children(".sub-btn").toggleClass('is-active');
});


//ハンバーガーボタン・メニュー
$(function() {
    $(".js-hamburger").on('click',function() {
        $(this).toggleClass('is-open');
        $(".nav__body").slideToggle(200);
    });
});

//ウィンドウのリサイズイベント
$(function() {
    $(window).on('resize', function() {
        const bp = 1200;
        const width = $(this).width();
        const nav = $(".nav__body");
        const hamburgerBtn = $(".js-hamburger");
    
        // 画面幅が1200以下の場合
        if (width <= bp) {
            nav.hide(); // ナビゲーションメニューを非表示
            hamburgerBtn.removeClass('is-open'); // ハンバーガーボタンを閉じている状態にする
        } 
        // 画面幅が1201以上の場合
        else {
            nav.show(); // ナビゲーションメニューを表示
            }
    });
});
