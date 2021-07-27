// publish upload picture

document.getElementById("file-box").addEventListener("change",function(){
    var obj = this,
        length = obj.files.length,
        arrTitle = []; //存標題名
        _html = '';
  
    for(var i=0; i<length; i++) {
        var reader = new FileReader();
        if (!reader) {
           console.log('對不起，您的瀏覽器不支持！請更換瀏覽器試一下');
            return
        }
        //存儲上傳的多張圖片名字
        arrTitle.push(obj.files[i].name)
  
        reader.error=function(e){
            console.log("讀取異常")
        }
  
  
        //iffi語法
        ;(function(i){
              //讀取成功
            reader.onload = function(e){
                console.log(e)
                var _src = e.target.result;
  
                //節點
                var divItem = document.createElement('div');
                divItem.setAttribute('class','pic');
                var img = document.createElement('img');
                img.setAttribute('class','publish-pic');
                img.setAttribute('src',_src);
                divItem.appendChild(img);
  
                //增加節點
                if($("#cp").children(".pic").length<20) {
                    var groupTu =  document.getElementById('cp');
                    groupTu.insertBefore(divItem, groupTu.firstChild);
                }else {
                    alert("照片已超過上限");
                }
  
            };
        })(i)
  
        reader.onloadstart=function(){
  
        }
        reader.onprogress=function(e){
            if(e.lengthComputable){
               console.log("正在讀取文件")
            }
        };
        reader.readAsDataURL(obj.files[i]);
    }
  
  })