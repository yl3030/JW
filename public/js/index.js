
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


// 搜尋其他
$(".other-option").click(function(){
  if($(this).children(".dropdown-list").hasClass("active")){
    $(".other-option").children(".dropdown-list").removeClass("active");
    $(this).children(".dropdown-list").removeClass("active");
  }else {
    $(".other-option").children(".dropdown-list").removeClass("active");
    $(this).children(".dropdown-list").addClass("active");
  }
})

// 搜尋標籤
$(".select-item").click(function(){
  // 存取select-item順序
  var indexItem = $(".dropdown-list .select-item").index(this);
  // 存取內容值
  var selectItemText = $(this).text();
  // 新增label，其中的input value = item_ + "select-item順序"
  var choiceLabel = $("<div></div>").addClass("choice-label d-flex align-items-center justify-content-center");
  var choiceText = $("<span></span>").text(selectItemText);
  var crossBtn = $("<img>").attr("src","./public/img/icon_cross.svg").addClass("cross");
  var choiceInput = $("<input>").attr("value","item_" + indexItem);
  choiceLabel.append(choiceText,crossBtn,choiceInput);
  $(".choice-inner").append(choiceLabel);
  // 新增class = item_ + "select-item順序"
  // 改變其中的input value = 1，代表已選取
  $(this).addClass("item_" + indexItem).children("input").attr("value","1");
})

$(document).on("click",".cross",function(){
  // 刪除label
  $(this).parents(".choice-label").remove();
  // 存取其中的input value
  var removeName = $(this).parents(".choice-label").children("input").val();
  // select-item的class name有和其input value相同者，其中的input value改為0，代表未選取
  $(".select-item." + removeName).children("input").attr("value","0");
});

