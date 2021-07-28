// publish upload picture
var input = document.querySelector('#product-upload1');
input.addEventListener('change',function(e){
  readURL(e.target);
});
var reset = document.querySelector('#product-reset1');
reset.addEventListener('change',function(e){
  readURL(e.target);
});
var input2 = document.querySelector('#product-upload2');
input2.addEventListener('change',function(e){
  readURL(e.target);
});
var reset2 = document.querySelector('#product-reset2');
reset2.addEventListener('change',function(e){
  readURL(e.target);
});
var input3 = document.querySelector('#product-upload3');
input3.addEventListener('change',function(e){
  readURL(e.target);
});
var reset3 = document.querySelector('#product-reset3');
reset3.addEventListener('change',function(e){
  readURL(e.target);
});
var input4 = document.querySelector('#product-upload4');
input4.addEventListener('change',function(e){
  readURL(e.target);
});
var reset4 = document.querySelector('#product-reset4');
reset4.addEventListener('change',function(e){
  readURL(e.target);
});
var input5 = document.querySelector('#product-upload5');
input5.addEventListener('change',function(e){
  readURL(e.target);
});
var reset5 = document.querySelector('#product-reset5');
reset5.addEventListener('change',function(e){
  readURL(e.target);
});
function readURL(input) {
  var imgId = input.getAttribute('data-target');
  var img = document.querySelector('#' + imgId);
  var iconId = input.getAttribute('data-icon');
  var icon = document.querySelector('#' + iconId);
    if(input.files && input.files[0]){
      var reader = new FileReader();
      reader.onload = function (e) {
        img.setAttribute('src', '');
        img.setAttribute('src', e.target.result);
        img.style="display:block";
        icon.style="display:block";
      }
      reader.readAsDataURL(input.files[0]);
    }
}

$(".clear").click(function(){
    console.log("clear~");
    $(this).parents(".icon-box").hide();
    $(this).parents(".file-outer").children(".file-box").children(".pic").attr("src","").hide();
})

  
//         ;(function(i){
//             reader.onload = function(e){
//                 console.log(e)
//                 var _src = e.target.result;
  
//                 var divItem = document.createElement('div');
//                 divItem.setAttribute('class','pic');
//                 var img = document.createElement('img');
//                 img.setAttribute('class','publish-pic');
//                 img.setAttribute('src',_src);
//                 divItem.appendChild(img);
  
//                 if($("#cp").children(".pic").length<20) {
//                     var groupTu =  document.getElementById('cp');
//                     groupTu.insertBefore(divItem, groupTu.firstChild);
//                 }else {
//                     alert("照片已超過上限");
//                 }
  
//             };
//         })(i)
  
//         reader.onloadstart=function(){
  
//         }
//         reader.onprogress=function(e){
//             if(e.lengthComputable){
//                console.log("正在讀取文件")
//             }
//         };
//         reader.readAsDataURL(obj.files[i]);
//     }
  
//   })