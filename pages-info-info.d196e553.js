(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-info-info"],{"0d96":function(t,n,e){"use strict";var a;e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return o})),e.d(n,"a",(function(){return a}));var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",[e("v-uni-view",{staticClass:"title"},[t._v(t._s(t.info.title))]),e("v-uni-view",{staticClass:"inbox"},[e("v-uni-view",{staticClass:"time",domProps:{textContent:t._s(t.info.createTime)}}),e("v-uni-view",{staticClass:"clicks",domProps:{textContent:t._s(t.info.clicks+"已读")}})],1),e("v-uni-view",{staticClass:"body"},[e("v-uni-rich-text",{attrs:{nodes:t.info.content}})],1)],1)},o=[]},2245:function(t,n,e){"use strict";e.r(n);var a=e("0d96"),i=e("da35");for(var o in i)"default"!==o&&function(t){e.d(n,t,(function(){return i[t]}))}(o);e("a5e3");var c,r=e("f0c5"),s=Object(r["a"])(i["default"],a["b"],a["c"],!1,null,"b9a2316a",null,!1,a["a"],c);n["default"]=s.exports},"8bcf":function(t,n,e){"use strict";var a=e("4ea4");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=a(e("3a3d")),o={data:function(){return{info:{}}},onLoad:function(t){t.id&&(this.org=t.org,this.getInfo(t.id))},methods:{getInfo:function(t){var n=this;this.$request.get("/xxfb/getNews",{data:{id:t}}).then((function(t){0==t.code?n.info={id:t.data.id,clicks:t.data.clicks,content:t.data.content,createTime:t.data.createTime,title:t.data.title}:uni.showToast({title:t.msg,icon:"none"})}))}},computed:{noData:function(){return""},imgprop:function(){var t={lozyLoad:!0,domain:""};return t}},components:{uParse:i.default}};n.default=o},a5e3:function(t,n,e){"use strict";var a=e("cb7e"),i=e.n(a);i.a},b56c:function(t,n,e){var a=e("24fb");n=a(!1),n.push([t.i,'@charset "UTF-8";\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.title[data-v-b9a2316a]{padding:20px 0 0;font-weight:700;font-size:18px;text-align:center}.inbox[data-v-b9a2316a]{overflow:hidden;padding:0 0 5px;border-bottom:1px solid #eee;padding:10px 10px}.inbox uni-view[data-v-b9a2316a]{font-size:13px;color:#666}.inbox .time[data-v-b9a2316a]{float:left}.inbox .clicks[data-v-b9a2316a]{float:right}',""]),t.exports=n},cb7e:function(t,n,e){var a=e("b56c");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=e("4f06").default;i("c6f28058",a,!0,{sourceMap:!1,shadowMode:!1})},da35:function(t,n,e){"use strict";e.r(n);var a=e("8bcf"),i=e.n(a);for(var o in a)"default"!==o&&function(t){e.d(n,t,(function(){return a[t]}))}(o);n["default"]=i.a}}]);