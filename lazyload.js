/*
* @Author: Administrator
* @Date:   2017-04-14 09:20:27
* @Last Modified by:   chysxslt
* @Last Modified time: 2017-04-14 15:53:42
*/

requirejs.config({
  baseUrl:'js',
  path:{
    jQuery:'jquery',
    img:'img'
  }
});


require(['img','jquery'],function (img,$) {
  // img.imgAlert();
  // console.log($(window).height());
  img.checkShow();
  $(window).on('scroll', function(){//监听滚动事件
    img.checkShow();
  });
  $('button').click(function() {
    img.backTop();
  });
});

