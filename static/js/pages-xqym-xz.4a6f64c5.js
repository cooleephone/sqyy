(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-xqym-xz"],{"00bf":function(t,i,n){var e=n("24fb");i=e(!1),i.push([t.i,'@charset "UTF-8";\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.title[data-v-3553c56e]{width:%?550?%;margin:20% auto 15%;text-align:center;padding-bottom:%?40?%;border-bottom:1px solid #00bfff}.box[data-v-3553c56e]{width:%?750?%;overflow:hidden}.box .sex[data-v-3553c56e]{float:left;width:%?300?%;height:%?400?%}.box .sex[data-v-3553c56e]:nth-child(1){margin-left:%?75?%}.box .sex[data-v-3553c56e]:nth-child(0){margin-right:%?75?%}.box .sex uni-image[data-v-3553c56e]{width:%?200?%;height:%?200?%;margin:%?50?% auto;display:block}.box .sex .text[data-v-3553c56e]{text-align:center}',""]),t.exports=i},"162f":function(t,i,n){"use strict";n.r(i);var e=n("f1e9"),o=n("3f33");for(var a in o)"default"!==a&&function(t){n.d(i,t,(function(){return o[t]}))}(a);n("705c");var s,r=n("f0c5"),c=Object(r["a"])(o["default"],e["b"],e["c"],!1,null,"3553c56e",null,!1,e["a"],s);i["default"]=c.exports},2691:function(t,i,n){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var e={data:function(){return{info:{org:"",id:""},type:1}},onLoad:function(t){t.org?(this.info.org=t.org,uni.setStorageSync("org",{id:t.org}),t.type&&2==t.type&&(this.type=2),void 0==t.id&&null==t.id||(this.info.id=t.id)):uni.reLaunch({url:"../index/index"})},methods:{goUrl:function(t){var i=""==this.info.id?"":"&id="+this.info.id;"jh"==t?uni.navigateTo({url:"./myJh?org="+this.info.org}):"yy"==t?uni.navigateTo({url:"./yyrecord?org="+this.info.org}):"et"==t?uni.navigateTo({url:"./jhInfo?child=1&deptid="+this.info.org+i}):"cr"==t&&uni.navigateTo({url:"./jhInfo?deptid="+this.info.org+i})},tapYy:function(t){uni.navigateTo({url:"./info?org="+this.info.org+"&tjid="+t})},changeStatus:function(t){this.tjList[t].status=!this.tjList[t].status}}};i.default=e},"3f33":function(t,i,n){"use strict";n.r(i);var e=n("2691"),o=n.n(e);for(var a in e)"default"!==a&&function(t){n.d(i,t,(function(){return e[t]}))}(a);i["default"]=o.a},"60ef":function(t,i,n){t.exports=n.p+"static/img/et.36414725.png"},"6b9f":function(t,i,n){t.exports=n.p+"static/img/icon_yy.e6270c67.png"},"705c":function(t,i,n){"use strict";var e=n("e290"),o=n.n(e);o.a},d183:function(t,i,n){t.exports=n.p+"static/img/icon_jh.f231e3d1.png"},e290:function(t,i,n){var e=n("00bf");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var o=n("4f06").default;o("31f254ed",e,!0,{sourceMap:!1,shadowMode:!1})},f1e9:function(t,i,n){"use strict";var e;n.d(i,"b",(function(){return o})),n.d(i,"c",(function(){return a})),n.d(i,"a",(function(){return e}));var o=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",[e("v-uni-view",{staticClass:"title"},[t._v("请选择类型")]),1==t.type?e("v-uni-view",{staticClass:"box"},[e("v-uni-view",{staticClass:"sex",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.goUrl("jh")}}},[e("v-uni-image",{attrs:{src:n("d183"),mode:""}}),e("v-uni-view",{staticClass:"text"},[t._v("我的排队")])],1),e("v-uni-view",{staticClass:"sex",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.goUrl("yy")}}},[e("v-uni-image",{attrs:{src:n("6b9f"),mode:""}}),e("v-uni-view",{staticClass:"text"},[t._v("我的预约")])],1)],1):t._e(),2==t.type?e("v-uni-view",{staticClass:"box"},[e("v-uni-view",{staticClass:"sex",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.goUrl("et")}}},[e("v-uni-image",{attrs:{src:n("60ef"),mode:""}}),e("v-uni-view",{staticClass:"text"},[t._v("3-16周岁儿童")])],1),e("v-uni-view",{staticClass:"sex",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.goUrl("cr")}}},[e("v-uni-image",{attrs:{src:n("fe14"),mode:""}}),e("v-uni-view",{staticClass:"text"},[t._v("成人")])],1)],1):t._e()],1)},a=[]},fe14:function(t,i,n){t.exports=n.p+"static/img/zj.8b439c5f.png"}}]);