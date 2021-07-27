
$(".cb").click(function () {
  if ($(this).hasClass("active")) {
    $(this).removeClass("active");
  } else {
    $(this).addClass("active");
  }
});

// 喜歡、不喜歡
$(".lb").click(function () {
  $(this).parents(".like-box").children(".lb").removeClass("active");
  if ($(this).hasClass("active")) {
    $(this).removeClass("active");
  } else {
    $(this).addClass("active");
  }
});

$("#menu-icon").click(function () {
  $(".mobile-nav").slideToggle(300);
});

// 簡訊驗證倒數
var setSecond;
var mm;

$("#send-message").click(function () {
  clearInterval(mm);
  setSecond = 60;
  $("#verti").attr("disabled", null).css("background-color", "transparent");
  mm = window.setInterval(function () {
    setSecond -= 1;
    var Check_i = document.getElementById("remain");
    var Cal_Minute = Math.floor(Math.floor(setSecond) / 60);
    var Cal_Second = setSecond % 60;
    Check_i.innerHTML = Cal_Minute + "分" + Cal_Second + "秒";
    if (setSecond === 0) {
      clearInterval(mm);
      $("#verti")
        .attr("disabled", "disabled")
        .css("background-color", "#f1f1f1");
    }
  }, 1000);
});

// member-btn
if ($(window).width() < 1025) {
  $(".member-btn").click(function () {
    $(this).children(".dropdown").slideToggle(300);
  });
}

// order list
$(".order-icon").click(function () {
  $(".order-list").slideToggle(150);
});
$(".order-list li").click(function(){
  $(".order-list li").removeClass("active");
  $(this).addClass("active");
  $(".order-list").slideUp(150);
  var orderName = $(this).text();
  console.log(orderName);
  $(".order-name").empty().text(orderName);
})

// button disable
$("button.unable").attr("disabled", "true");




