(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-view-downpdf"],{"1c9d":function(t,i,n){var e=n("24fb");i=e(!1),i.push([t.i,'@charset "UTF-8";\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */uni-page-body[data-v-2f67af8d]{background-color:#969696;opacity:1}.wxpage uni-image[data-v-2f67af8d]{width:%?407?%;height:%?245?%;margin-right:1em;margin-top:.5em;float:right}.wxpage .tips[data-v-2f67af8d]{position:fixed;left:12%;top:%?350?%;color:#fff}body.?%PAGE?%[data-v-2f67af8d]{background-color:#969696}',""]),t.exports=i},"259c":function(t,i,n){"use strict";n.r(i);var e=n("6ca7c"),a=n.n(e);for(var r in e)"default"!==r&&function(t){n.d(i,t,(function(){return e[t]}))}(r);i["default"]=a.a},"693b":function(t,i,n){"use strict";var e=n("e9ea"),a=n.n(e);a.a},"6ca7c":function(t,i,n){"use strict";(function(t){n("c975"),n("ac1f"),n("466d"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var e={data:function(){return{isios:!0}},onLoad:function(t){if(t.url){var i=this.$myprop.baseUrl+t.url;this.isWeiXin()?0==this.ismobile(1)?this.isios=!0:this.isios=!1:location.href=i}else uni.reLaunch({url:"../search/tjsea"})},methods:{isWeiXin:function(){var i=window.navigator.userAgent.toLowerCase();return t.log(i),"micromessenger"==i.match(/MicroMessenger/i)},downloadPdfClick:function(){if("app"!=this.from)this.from;else{var t="http://自己的域名/hybrid/html/web/pdf.html?shareUrl="+encodeURIComponent(this.bgUrl)+"&shareTitle=PDF文件";window.open(t)}},ismobile:function(t){var i=navigator.userAgent;navigator.appVersion;if(!/AppleWebKit.*Mobile/i.test(navigator.userAgent)&&!/MIDP|SymbianOS|NOKIA|SAMSUNG|LG|NEC|TCL|Alcatel|BIRD|DBTEL|Dopod|PHILIPS|HAIER|LENOVO|MOT-|Nokia|SonyEricsson|SIE-|Amoi|ZTE/.test(navigator.userAgent))return i.indexOf("iPad")>-1?"0":"1";if(window.location.href.indexOf("?mobile")<0)try{return/iPhone|mac|iPod|iPad/i.test(navigator.userAgent)?"0":"1"}catch(n){}}}};i.default=e}).call(this,n("5a52")["default"])},"8eb7":function(t,i,n){"use strict";n.r(i);var e=n("a2ab"),a=n("259c");for(var r in a)"default"!==r&&function(t){n.d(i,t,(function(){return a[t]}))}(r);n("693b");var o,s=n("f0c5"),c=Object(s["a"])(a["default"],e["b"],e["c"],!1,null,"2f67af8d",null,!1,e["a"],o);i["default"]=c.exports},a2ab:function(t,i,n){"use strict";var e;n.d(i,"b",(function(){return a})),n.d(i,"c",(function(){return r})),n.d(i,"a",(function(){return e}));var a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"rt"},[e("v-uni-view",{staticClass:"wxpage"},[e("v-uni-image",{attrs:{src:n("c3d5"),mode:""}}),t.isios?e("v-uni-view",{staticClass:"tips"},[t._v("苹果手机打开浏览器后请按下列步骤操作:"),e("br"),t._v("1、分享（下面中间的操作）->"),e("br"),t._v("2、选项（弹出框上边） ->"),e("br"),t._v("3、（选择PDF） ->"),e("br"),t._v('4、存储到"文件"')]):t._e()],1)],1)},r=[]},c3d5:function(t,i,n){t.exports=n.p+"static/img/ttip.9d80d6de.png"},e9ea:function(t,i,n){var e=n("1c9d");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var a=n("4f06").default;a("744fe4da",e,!0,{sourceMap:!1,shadowMode:!1})}}]);