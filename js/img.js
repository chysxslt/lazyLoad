/*
 * @Author: Administrator
 * @Date:   2017-04-14 09:23:18
 * @Last Modified by:   chysxslt
 * @Last Modified time: 2017-04-14 14:47:36
 */


define(['jquery'], function($) {
  function imgAlert() {
    alert("Lazyload.Start");
  }
  //判断目标是否在视窗内
  function isShow($el) {
    var winH = $(window).height(), //获取窗口高度
      scrollH = $(window).scrollTop(), //获取窗口滚动高度
      top = $el.offset().top; //获取元素距离窗口顶部偏移高度
    if (top < scrollH + winH) {
      return true; //在可视范围
    } else {
      return false; //不在可视范围
    }
  }
  //
  function checkShow() { //检查元素是否在可视范围内
    $('img').each(function() { //遍历每一个元素
      var $cur = $(this);
      if ($cur.attr('isloaded') == 'true') {
        return; //判断是否已加载
      } else {
        if (isShow($cur)) {
          setTimeout(function() {
              showImg($cur);
            }, 500) //设置时间是为了更好的看出效果
        }
      }
    });
  }

  function showImg($el) {
    $el.attr('src', $el.attr('data-src'));
    $el.attr('isloaded', 'true');
  }

  return {
    imgAlert: imgAlert,
    isShow: isShow,
    checkShow: checkShow,
    showImg: showImg
  };
});



