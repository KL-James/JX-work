window._agl = window._agl || [];
(function () {
	_agl.push(
		['production', '_f7L2XwGXjyszb4d1e2oxPybgD']
	);
	(function () {
		var agl = document.createElement('script');
		agl.type ='text/javascript';
		agl.async = true;
		agl.src = 'https://fxgate.baidu.com/angelia/fcagl.js?production=_f7L2XwGXjyszb4d1e2oxPybgD';
		var s = document.getElementsByTagName('script')[0];
		s.parentNode.insertBefore(agl, s);
	})();
})();
$(function(){
  $(".copyWxItem").click(function(){
    const range = document.createRange();
    range.selectNode(document.getElementById("content"));
    const selection = window.getSelection();
    if(selection.rangeCount > 0){selection.removeAllRanges();}
    selection.addRange(range);
    document.execCommand("copy");
    //弹出框弹出跳转
    document.getElementById("copysuccess").style.display="block";
    //清空复制选中框
    selection.removeAllRanges();			
  });
  $("#name").val("");
  $("#tel").val("");
  $("#name1").val("");
  $("#tel1").val("");
  //头部轮播图
  var swiper = new Swiper('.scrollImg', {
    paginationClickable: true,
    autoplay:5000,
    autoplayDisableOnInteraction:false
  });
  $(".headLt").click(function(){
    $("#BgMt").show();	
  });
  $("#closeBg").click(function(){
    $("#BgMt").hide();	
  });
  //复制微信号
  $(document).on("copy",".copyWx",function(){
    window.location.href="weixin://";
  });
  $(".selePeopleNum").find("a").click(function(){
    $(this).parent(".selePeopleNum").find("a").removeClass("active");
    $(this).addClass("active");
    var html = $(this).text();
    var i = $(this).parent().siblings(".classInput").find("input[value="+html+"]").index();
    if($(this).hasClass("active")){
      $(this).parent().siblings(".classInput").find("input:eq("+i+")").prop("checked",true);
    }else{
      $(this).parent().siblings(".classInput").find("input:eq("+i+")").prop("checked",false);
    }
  });
  $(".seleFollow").find("a").click(function(){
    $(this).toggleClass("active");
    var html = $(this).text();
    var i = $(this).parent().siblings(".classCheckbox").find("input[value="+html+"]").index();
    if($(this).hasClass("active")){
      $(this).parent().siblings(".classCheckbox").find("input:eq("+i+")").prop("checked",true);
    }else{
      $(this).parent().siblings(".classCheckbox").find("input:eq("+i+")").prop("checked",false);
    }
  });
});
function openWWW(){ 
  ajax();
  if(!/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent) && / baiduboxapp/i.test(navigator.userAgent)){
    // window.location.href="bdbox://utils?action=sendIntent&minver=7.4&params=%7b%22intent%22%3a%22weixin%3a%2f%2f%23Intent%3bend%22%7d";
    window.location.href="weixin://"
  }else{
    window.location.href="weixin://";
  }   
  document.getElementById('copysuccess').style.display='none';
}
var setEvent=0;//定时器 
var id;
var url= window.location.href;
var preurl=document.referrer;
console.log(url)
var num=1;
$('body').on('touchstart','.copyWx',function(){
setEvent = setTimeout("longPress()",500);})
$('body').on('touchend','.copyWx',function(){
 clearTimeout(setEvent); 
  if(setEvent!=0){ 
       console.log('长按住失败');
  } else{
  }
})
$('body').on('touchmove','.copyWx',function(){
  clearTimeout(setEvent);
  setEvent = 0; 
})
function longPress(){ 
  setEvent = 0; 
  console.log('长按住');
  if(num==1){
    num=0;
    ajax();
  }
}
window.onload=function(){
   var that=this;
   browser();
}
function browser(){
  var b_version=navigator.appVersion
  console.log(b_version,typeof(b_version))
  var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
  var isOpera = userAgent.indexOf("Opera") > -1;
  //判断是否Opera浏览器
  if (isOpera) {
    return Opera
  }; 
  //判断是否Firefox浏览器
  if (userAgent.indexOf("Firefox") > -1) {
    return "Firefox";
  } 
  //判断是否chorme浏览器
  if (userAgent.indexOf("Chrome") > -1){
  return "Chrome";
  }
  //判断是否Safari浏览器

  if (userAgent.indexOf("Safari") > -1) {
    return "Safari";
  } 
  //判断是否IE浏览器
  if (userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera) {
  console.log("ie")
    return "IE";
  }
  //判断是否Edge浏览器
  if (userAgent.indexOf("Trident") > -1) {
    return "Edge";
  }
  if(userAgent.indexOf('UCBrowser') > -1) {
  return("uc");
  }
}
function GetQueryString(name) {
  var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
  var r = window.location.search.substr(1).match(reg);
  if (r != null) {
    return unescape(r[2]);
  }
  return null;
}
function ajax() {
  $.ajax({
    url:'https://click.gzqxxz.net/api/CopyData/PostCopyData',
    type:'POST',
    data:{
      "Id": 0,                                      
      "AdUrl": url,                                 
      "CopyMessage":"13361777144",            
      "AdId":"SGYE02-1",            
      "SourceURL": url,  
      "SourceRegion": "",   
      "ip": "",           
      "CreateTime": "",        
      "GroupCode": "00030001",    
      "Browser":browser() ,       
      "Source": "百度",  
      "Keyword":GetQueryString("Keyword"), 
      "Type": "长按"
    },
    success:function(){
       num=0;
    }
   });
}


var _hmt = _hmt || [];
(function() {
var hm = document.createElement("script");
hm.src = "https://hm.baidu.com/hm.js?25e15f093c12a4ee57508780aa424a60";
var s = document.getElementsByTagName("script")[0]; 
s.parentNode.insertBefore(hm, s);
})();