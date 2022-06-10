// 環境設定
$(document).ready(function() {
    // 預設值
    $('.suggest-list > a:nth-child(1)').addClass('bg-c-lakegreen text-white');

    $('.suggest-list > a:nth-child(1)').click(function(event){
        $('.suggest-list > a').removeClass('bg-c-lakegreen text-white');
        $('.suggest-list > a:nth-child(1)').addClass('bg-c-lakegreen text-white');
        $('.box > .p2:even').text('10000').append('<sub class="ms-1 fw-bold">位</sub>');
        $('.box > .p2:odd').text('600').append('<sub class="ms-1 fw-bold">TWD</sub>');
        $('.box > .s-price').text('1600').append('<sub class="ms-1 fw-bold">TWD</sub>');
    });
    $('.suggest-list > a:nth-child(2)').click(function(event){
        $('.suggest-list > a').removeClass('bg-c-lakegreen text-white');
        $('.suggest-list > a:nth-child(2)').addClass('bg-c-lakegreen text-white');
        $('.box > .p2:even').text('15000').append('<sub class="ms-1 fw-bold">位</sub>');
        $('.box > .p2:odd').text('900').append('<sub class="ms-1 fw-bold">TWD</sub>');
        $('.box > .s-price').text('1900').append('<sub class="ms-1 fw-bold">TWD</sub>');
    });
    $('.suggest-list > a:nth-child(3)').click(function(event){
        $('.suggest-list > a').removeClass('bg-c-lakegreen text-white');
        $('.suggest-list > a:nth-child(3)').addClass('bg-c-lakegreen text-white');
        $('.box > .p2:even').text('20000').append('<sub class="ms-1 fw-bold">位</sub>');
        $('.box > .p2:odd').text('1200').append('<sub class="ms-1 fw-bold">TWD</sub>');
        $('.box > .s-price').text('2200').append('<sub class="ms-1 fw-bold">TWD</sub>');
    });
    $('.suggest-list > a:nth-child(4)').click(function(event){
        $('.suggest-list > a').removeClass('bg-c-lakegreen text-white');
        $('.suggest-list > a:nth-child(4)').addClass('bg-c-lakegreen text-white');
        $('.box > .p2:even').text('25000').append('<sub class="ms-1 fw-bold">位</sub>');
        $('.box > .p2:odd').text('1500').append('<sub class="ms-1 fw-bold">TWD</sub>');
        $('.box > .s-price').text('2500').append('<sub class="ms-1 fw-bold">TWD</sub>');
    });
    $('.suggest-list > a:nth-child(5)').click(function(event){
        $('.suggest-list > a').removeClass('bg-c-lakegreen text-white');
        $('.suggest-list > a:nth-child(5)').addClass('bg-c-lakegreen text-white');
        $('.box > .p2:even').text('>25000').append('<sub class="ms-1 fw-bold">位</sub>');
        $('.box > .p2:odd').text('1800').append('<sub class="ms-1 fw-bold">TWD</sub>');
        $('.box > .s-price').text('2800').append('<sub class="ms-1 fw-bold">TWD</sub>');
    });


    $('.qaa').find('.answer').hide();
    $('.qaa:nth-child(3)').find('.answer').show();
    $('.qaa').click(function(event){
        $(this).find('.answer').slideToggle(500);
        $(this).find('.question').toggleClass('text-c-lakegreen fw-bold');
        if ($(this).find('.question').hasClass('text-c-lakegreen')) {
            $(this).find('img').attr("src", "https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/f70f00178a7f0baa31e9c01634303d8562cfe93a/chatTalker_images/icon_minus.svg");
        } else {
            $(this).find('img').attr("src", "https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/f70f00178a7f0baa31e9c01634303d8562cfe93a/chatTalker_images/icon_plus.svg");
        }
    });
    // $('.qaa:nth-child(1)').click(function(event){
    //     /* Act in the event */
    //     // $('.magic').slideToggle(1000).slideDown(3000);
    //     // $('.magic').slideUP(1000).slideDown(3000);
    //     //選擇器, 並給予事件
    //     $('.qaa:nth-child(1) > .question').toggleClass('text-c-lakegreen fw-bold');
    //     $(this).find('img').attr('src', 'https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/master/chatTalker_images/icon_minus.svg').attr('src', 'https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/master/chatTalker_images/icon_plus.svg');
    //     // $('.qaa').toggleClass(1000)
    //     // $('.magic').toggleClass('orange');
    //     // $('.magic2').fadeToggle(2000);
    // });
    // $('.qaa:nth-child(2)').click(function(event){
    //     /* Act in the event */
    //     // $('.magic').slideToggle(1000).slideDown(3000);
    //     // $('.magic').slideUP(1000).slideDown(3000);
    //     //選擇器, 並給予事件
    //     $('.qaa:nth-child(2) > .question').toggleClass('text-c-lakegreen fw-bold');
    //     // $('.qaa').toggleClass(1000)
    //     // $('.magic').toggleClass('orange');
    //     // $('.magic2').fadeToggle(2000);
    // });
    // $('.qaa:nth-child(3)').click(function(event){
    //     /* Act in the event */
    //     // $('.magic').slideToggle(1000).slideDown(3000);
    //     // $('.magic').slideUP(1000).slideDown(3000);
    //     //選擇器, 並給予事件
    //     $('.qaa:nth-child(3) > .question').toggleClass('text-c-lakegreen fw-bold');
    //     // $('.qaa:nth-child(3)').toggle($('.qaa:nth-child(3)').append('<p class="answer mb-3">當然哦！我們錢都收了，不會拋棄你的！<br>請您直接來我們公司，我們假日也都在辦公室。</p>'));
    //     // $('.qaa').toggleClass(1000)
    //     // $('.magic').toggleClass('orange');
    //     // $('.magic2').fadeToggle(2000);
    // });

    // $('h2').mouseleave(function(event){
    //     $('.magic').removeClass('orange');
    // });

    //變更屬性
    // $('a').attr('href', 'http://www.google.com');
});

// Initialize Swiper
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 16,

    /* 斷點設定 */
    breakpoints: {
      /* 螢幕寬度大於等於 992px 時切換為 3 欄 */
      992: {
        slidesPerView: 3,
      },
      /* 螢幕寬度大於等於 768px 時切換為 2 欄 */
      768: {
        slidesPerView: 2,
      },
      /* 更小時都顯示 1 欄 */
      0: {
        slidesPerView: 1,
      },
    },

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
});