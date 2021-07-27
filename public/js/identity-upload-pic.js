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