/*
* @Author: Administrator
* @Date:   2017-04-14 09:20:27
* @Last Modified by:   Administrator
* @Last Modified time: 2017-04-14 11:49:53
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
});

