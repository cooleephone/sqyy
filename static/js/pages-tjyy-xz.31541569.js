(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-tjyy-xz"],{"397f":function(t,n,i){"use strict";var a;i.d(n,"b",(function(){return e})),i.d(n,"c",(function(){return r})),i.d(n,"a",(function(){return a}));var e=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("v-uni-view",[a("v-uni-view",{staticClass:"title"},[t._v("请选择你的性别")]),a("v-uni-view",{staticClass:"box"},[a("v-uni-view",{staticClass:"sex",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.goUrl("male")}}},[a("v-uni-image",{attrs:{src:i("5002"),mode:""}}),a("v-uni-view",{staticClass:"text"},[t._v("男")])],1),a("v-uni-view",{staticClass:"sex",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.goUrl("madam")}}},[a("v-uni-image",{attrs:{src:i("e0a6"),mode:""}}),a("v-uni-view",{staticClass:"text"},[t._v("女")])],1)],1)],1)},r=[]},5002:function(t,n,i){t.exports=i.p+"static/img/male.d86f699d.png"},5079:function(t,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a={data:function(){return{info:{org:""}}},onLoad:function(t){t.org?(this.info.org=t.org,uni.setStorageSync("org",{id:t.org})):uni.reLaunch({url:"../index/index"})},methods:{goUrl:function(t){"male"==t?uni.navigateTo({url:"../tjyy/tjyy?org="+this.info.org+"&sex=1"}):uni.navigateTo({url:"../tjyy/tjyy?org="+this.info.org+"&sex=2"})},tapYy:function(t){uni.navigateTo({url:"./info?org="+this.info.org+"&tjid="+t})},changeStatus:function(t){this.tjList[t].status=!this.tjList[t].status}}};n.default=a},8677:function(t,n,i){"use strict";i.r(n);var a=i("397f"),e=i("bae6");for(var r in e)"default"!==r&&function(t){i.d(n,t,(function(){return e[t]}))}(r);i("e857");var o,s=i("f0c5"),u=Object(s["a"])(e["default"],a["b"],a["c"],!1,null,"1fc0d967",null,!1,a["a"],o);n["default"]=u.exports},bae6:function(t,n,i){"use strict";i.r(n);var a=i("5079"),e=i.n(a);for(var r in a)"default"!==r&&function(t){i.d(n,t,(function(){return a[t]}))}(r);n["default"]=e.a},dfe8:function(t,n,i){var a=i("eada");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var e=i("4f06").default;e("f8907d0c",a,!0,{sourceMap:!1,shadowMode:!1})},e0a6:function(t,n,i){t.exports=i.p+"static/img/madam.9eff3f10.png"},e857:function(t,n,i){"use strict";var a=i("dfe8"),e=i.n(a);e.a},eada:function(t,n,i){var a=i("24fb");n=a(!1),n.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.title[data-v-1fc0d967]{width:%?550?%;margin:20% auto 15%;text-align:center;padding-bottom:%?40?%;border-bottom:1px solid #00bfff}.box[data-v-1fc0d967]{width:%?750?%;overflow:hidden}.box .sex[data-v-1fc0d967]{float:left;width:%?300?%;height:%?400?%}.box .sex[data-v-1fc0d967]:nth-child(1){margin-left:%?75?%}.box .sex[data-v-1fc0d967]:nth-child(0){margin-right:%?75?%}.box .sex uni-image[data-v-1fc0d967]{width:%?200?%;height:%?200?%;margin:%?50?% auto;display:block}.box .sex .text[data-v-1fc0d967]{text-align:center}',""]),t.exports=n}}]);