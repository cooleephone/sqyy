(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-yycz-yycz"],{1373:function(t,e,n){var i=n("33cb");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var r=n("4f06").default;r("8e1e6996",i,!0,{sourceMap:!1,shadowMode:!1})},"33cb":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.content[data-v-2f54ee56]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.czlist[data-v-2f54ee56]{width:%?620?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:end;-webkit-align-items:flex-end;align-items:flex-end;-webkit-align-content:space-around;align-content:space-around;padding:%?30?%;margin:%?30?% 0 %?15?%;box-shadow:0 0 %?30?% #cfcfcf;border-radius:%?15?%}.czlist uni-image[data-v-2f54ee56]{width:%?120?%;height:%?100?%}.czlist > uni-view[data-v-2f54ee56]{width:%?460?%}.czlist > uni-view .title[data-v-2f54ee56]{font-size:%?30?%}.czlist > uni-view .desc[data-v-2f54ee56]{font-size:%?28?%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:#666}',""]),t.exports=e},6820:function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}));var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"content"},t._l(t.czlist,(function(e,i){return n("v-uni-view",{key:i,staticClass:"czlist",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.goCz(e.id)}}},[n("v-uni-image",{attrs:{src:e.icon}}),n("v-uni-view",{},[n("v-uni-view",{staticClass:"title"},[t._v(t._s(e.title))]),n("v-uni-view",{staticClass:"desc"},[t._v(t._s(e.desc))])],1)],1)})),1)},a=[]},"76cf":function(t,e,n){"use strict";n("4160"),n("159b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{org:"",czlist:[]}},onLoad:function(t){t.org?(this.org=t.org,this.getList(t.org)):uni.navigateBack()},methods:{goCz:function(t){uni.navigateTo({url:"./czInfo?czid="+t+"&org="+this.org})},getList:function(t){var e=this;this.$request.get("/cms/cz/getCzList",{data:{deptid:t}}).then((function(t){0==t.code?t.data.forEach((function(t,n){e.czlist.push({id:t.id,icon:e.$myprop.imgUrlPre+t.icon,title:t.name,desc:t.tag})})):uni.showToast({title:t.msg,icon:"none"})}))}}};e.default=i},a935:function(t,e,n){"use strict";var i=n("1373"),r=n.n(i);r.a},bf25:function(t,e,n){"use strict";n.r(e);var i=n("76cf"),r=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=r.a},ebc7:function(t,e,n){"use strict";n.r(e);var i=n("6820"),r=n("bf25");for(var a in r)"default"!==a&&function(t){n.d(e,t,(function(){return r[t]}))}(a);n("a935");var c,o=n("f0c5"),s=Object(o["a"])(r["default"],i["b"],i["c"],!1,null,"2f54ee56",null,!1,i["a"],c);e["default"]=s.exports}}]);