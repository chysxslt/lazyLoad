/*
* @Author: chysxslt
* @Date:   2017-04-14 16:11:54
* @Last Modified by:   chysxslt
* @Last Modified time: 2017-04-14 16:13:33
*/



requirejs.config({
  baseUrl:'js',
  path:{
    add:'add.js'
  }
});


require(['add'],function (add) {
  add.test();
})
