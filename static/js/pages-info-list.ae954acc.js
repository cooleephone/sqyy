(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-info-list"],{"200e":function(t,n,e){"use strict";e.r(n);var i=e("3477"),o=e("9191");for(var a in o)"default"!==a&&function(t){e.d(n,t,(function(){return o[t]}))}(a);e("dd3b");var r,s=e("f0c5"),c=Object(s["a"])(o["default"],i["b"],i["c"],!1,null,"615035bf",null,!1,i["a"],r);n["default"]=c.exports},"2a6e":function(t,n,e){var i=e("24fb");n=i(!1),n.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.title[data-v-615035bf]{text-align:center;border-bottom:1px solid #eee;padding:10px 0;font-weight:800}.box[data-v-615035bf]{margin:10px 15px;border-bottom:1px solid #eee}.box .name[data-v-615035bf]{padding:5px 0;font-weight:700;font-size:18px}.box .inbox[data-v-615035bf]{overflow:hidden;padding:5px 0}.box .inbox uni-view[data-v-615035bf]{font-size:13px;color:#666}.box .inbox .time[data-v-615035bf]{float:left}.box .inbox .clicks[data-v-615035bf]{float:right}',""]),t.exports=n},3477:function(t,n,e){"use strict";var i;e.d(n,"b",(function(){return o})),e.d(n,"c",(function(){return a})),e.d(n,"a",(function(){return i}));var o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",[e("v-uni-view",{staticClass:"title"},[t._v("紧缺疫苗信息")]),t._l(t.newsList,(function(n,i){return e("v-uni-view",{key:i,staticClass:"box",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.view(n)}}},[e("v-uni-view",{staticClass:"name",domProps:{textContent:t._s(n.title)}}),e("v-uni-view",{staticClass:"inbox"},[e("v-uni-view",{staticClass:"time",domProps:{textContent:t._s(n.createTime)}}),e("v-uni-view",{staticClass:"clicks",domProps:{textContent:t._s(n.clicks+"已读")}})],1)],1)}))],2)},a=[]},9191:function(t,n,e){"use strict";e.r(n);var i=e("9f40"),o=e.n(i);for(var a in i)"default"!==a&&function(t){e.d(n,t,(function(){return i[t]}))}(a);n["default"]=o.a},"9f40":function(t,n,e){"use strict";e("4160"),e("159b"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i={data:function(){return{org:"",pageInfo:{pageno:1,pagesize:10,total:0},newsList:[]}},onLoad:function(t){t.org&&(this.org=t.org,this.getList(1,20))},methods:{getList:function(t,n){var e=this;this.$request.get("/xxfb/getList",{data:{deptid:this.org,pageno:t,pagesize:n}}).then((function(t){0==t.code?(e.pageInfo={pageno:t.data.pageno,total:t.data.total},t.data.list.forEach((function(t,n){e.newsList.push({id:t.id,title:t.title,createTime:t.createTime,clicks:t.clicks})}))):uni.showToast({title:t.msg,icon:"none"})}))},view:function(t){uni.navigateTo({url:"./info?org="+this.org+"&id="+t.id})}}};n.default=i},d93e:function(t,n,e){var i=e("2a6e");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=e("4f06").default;o("0ccbb969",i,!0,{sourceMap:!1,shadowMode:!1})},dd3b:function(t,n,e){"use strict";var i=e("d93e"),o=e.n(i);o.a}}]);