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
$(".order").click(function () {
  $(".order-list").slideToggle(300);
});

// button disable
$("button.unable").attr("disabled", "true");

// picture upload
var input = document.querySelector('#upload-btn1');
input.addEventListener('change',function(e){
  readURL(e.target);
});
var input2 = document.querySelector('#upload-btn2');
input2.addEventListener('change',function(e){
  readURL(e.target);
});
var input3 = document.querySelector('#upload-btn3');
input3.addEventListener('change',function(e){
  readURL(e.target);
});
var input4 = document.querySelector('#upload-btn4');
input4.addEventListener('change',function(e){
  readURL(e.target);
});
function readURL(input) {
  var imgId = input.getAttribute('data-target');
  var img = document.querySelector('#' + imgId);
  var textId = input.getAttribute('data-text');
  var text = document.querySelector('#' + textId);
  var btnId = input.getAttribute('data-btn');
  var btn = document.querySelector('#' + btnId);
    if(input.files && input.files[0]){
      var reader = new FileReader();
      reader.onload = function (e) {
        img.setAttribute('src', '');
        img.setAttribute('src', e.target.result);
        img.style="opacity:1";
        text.style="display:none";
        btn.style="display:block";
      }
      reader.readAsDataURL(input.files[0]);
    }
}


var input_reset1 = document.querySelector('#reset-btn1');
input_reset1.addEventListener('change',function(e){
  readURL_reset(e.target);
})
var input_reset2 = document.querySelector('#reset-btn2');
input_reset2.addEventListener('change',function(e){
  readURL_reset(e.target);
})
var input_reset3 = document.querySelector('#reset-btn3');
input_reset3.addEventListener('change',function(e){
  readURL_reset(e.target);
})
var input_reset4 = document.querySelector('#reset-btn4');
input_reset4.addEventListener('change',function(e){
  readURL_reset(e.target);
})
function readURL_reset(input_reset) {
  var imgId = input_reset.getAttribute('data-target');
  var img = document.querySelector('#' + imgId);
    if(input.files && input.files[0]){
      var reader = new FileReader();
      reader.onload = function (e) {
        console.log("upload");
        img.setAttribute('src', '');
        img.setAttribute('src', e.target.result);
      }
      reader.readAsDataURL(input_reset.files[0]);
    }
}
