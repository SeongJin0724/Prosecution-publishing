$(function () {
  //-------------------------메인메뉴 JS 시작 -----------------------------
  $(".menu>li").on("mouseenter", function () {
    $(".menu > li").removeClass("on");
    $(this)
      .children(".smenu")
      .stop(1, 1)
      .slideDown()
      .parent("li")
      .addClass("on");
    // $(this).children('.smenu').stop(1,1).slideDown();
  });
  $(".menu>li").on("mouseleave", function () {
    $(".menu > li").removeClass("on");
    $(this).children(".smenu").stop(1, 1).css({
      display: "none",
    });
  });
  //------------------------메인메뉴 JS 끝 ------------------------------

  //------------------------헤더 올메뉴 창 시작-------------------------------

  $(".header_menu_btn").on("click", function () {
    $(".all_menubox").animate({
      right: "0px",
    });
    $(".all_menu_wrap").css({
      display: "block",
    });
  });

  $(".all_close a").on("click", function () {
    $(".all_menubox").animate({
      right: "-1100px",
    });
    $(".all_menu_wrap").css({
      display: "none",
    });
  });

  //------------------------헤더 올메뉴 창 끝-------------------------------
  //------------------------모바일 올메뉴 창 시작 --------------------------
  $(".header_menu_btn2").on("click", function () {
    $(".mobile_menu_box").animate({
      right: "0px",
    });
  });

  $(".mobile_close").on("click", function () {
    $(".mobile_menu_box").animate({
      right: "-360px",
    });
  });

  $(".mobile_smenu").hide().first().show();
  $(".menu").on("click", function (e) {
    e.preventDefault();
    $(this)
      .next(".mobile_smenu")
      .show()
      .parent()
      .siblings()
      .find(".mobile_smenu")
      .hide();
  });

  $(".mobile_smenu>li>a").on("click", function () {
    $(".mobile_smenu_dep").stop().slideUp();
    $(this).next(".mobile_smenu_dep").stop().slideToggle();
  });

  //------------------------모바일 올메뉴 창 끝 --------------------------

  //------------------------서비스섹션 탭메뉴 시작----------------------------
  $(".service_menu").on("click", function (e) {
    e.preventDefault();
    $(".service_tab>li").removeClass("on");
    $(".service_smenu").hide();

    $(this).next(".service_smenu").show().parent("li").addClass("on");
  });
  $(".service_menu").first().trigger("click");
  //------------------------서비스섹션 탭메뉴 끝-----------------------------

  //------------------------공지사항섹션 탭메뉴 시작--------------------------
  $(".notice_menu").on("click", function (e) {
    e.preventDefault();
    $(".notice_tab>li").removeClass("on");
    $(".notice_smenu").hide();

    $(this).next(".notice_smenu").show().parent("li").addClass("on");
  });
  $(".notice_menu").first().trigger("click");
  //------------------------공지사항섹션 탭메뉴 끝--------------------------

  //------------------------전국 검찰청 바로가기 버튼 시작----------------------
  $(".site_wrap .open").on("click", function (e) {
    e.preventDefault();
    $(".popbox").slideToggle();
  });
  //------------------------전국 검찰청 바로가기 버튼 끝----------------------

  //-----------------------메인화면 왼쪽 박스 시작-------------------------
  var swiper = new Swiper(".visual_left", {
    loop: true,
    slidesPerView: 1,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  });
  //-----------------------메인화면 왼쪽 박스 끝-------------------------

  //-----------------------메인화면 오른쪽 박스 시작-------------------------
  var swiper = new Swiper(".visual_right", {
    loop: true,
    slidesPerView: 4,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  //-----------------------메인화면 오른쪽 박스 끝-------------------------

  //----------------------브랜드 섹션 시작------------------------------
  var swiper = new Swiper(".mySwiper", {
    loop: true,
    slidesPerView: 4,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  var win_w = $(window).width();

  $(window).on("resize", function () {
    win_w = $(this).width();
    if (win_w <= 640) {
      var swiper = new Swiper(".mySwiper", {
        loop: true,
        slidesPerView: 2,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
    } else {
      var swiper = new Swiper(".mySwiper", {
        loop: true,
        slidesPerView: 4,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
      });
    }
  });
  //----------------------브랜드 섹션 끝------------------------------
});
