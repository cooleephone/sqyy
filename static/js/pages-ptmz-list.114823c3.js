(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-ptmz-list"],{"13bd":function(t,e,i){var n=i("43a6");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("6ec2ee6b",n,!0,{sourceMap:!1,shadowMode:!1})},"261d":function(t,e,i){"use strict";i.r(e);var n=i("6d39"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},"43a6":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.content[data-v-8666fc62]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.mzlist[data-v-8666fc62]{width:%?620?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-flow:row nowrap;flex-flow:row nowrap;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-align-content:space-around;align-content:space-around;padding:%?30?%;margin:%?30?% 0 %?15?%;box-shadow:0 0 %?30?% #cfcfcf;border-radius:%?15?%}.mzlist uni-image[data-v-8666fc62]{width:%?120?%;height:%?100?%}.mzlist > uni-view[data-v-8666fc62]{width:%?480?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-flow:column nowrap;flex-flow:column nowrap;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:start;-webkit-align-items:flex-start;align-items:flex-start}.mzlist > uni-view .title[data-v-8666fc62]{font-size:%?30?%}.mzlist > uni-view .title uni-text[data-v-8666fc62]:first-child{font-weight:700}.mzlist > uni-view .title uni-text[data-v-8666fc62]:last-child{font-size:%?35?%}.mzlist > uni-view .desc[data-v-8666fc62]{font-size:%?28?%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;padding-left:%?10?%;color:#666}.tips[data-v-8666fc62]{font-size:%?30?%;color:#666;margin-top:2em}.tips > uni-text[data-v-8666fc62]:last-child{color:#ed1c24}',""]),t.exports=e},"6d39":function(t,e,i){"use strict";i("4160"),i("159b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{info:{},ksList:[],imgpre:this.$myprop.imgUrlPre}},onLoad:function(t){t.org?(uni.setStorageSync("org",{id:t.org}),this.info.org=t.org,this.getTc(t.org)):uni.reLaunch({url:"../index/index"})},methods:{getTc:function(t){var e=this;this.$request.get("cms/ptmz/getPtmz",{data:{deptid:t}}).then((function(i){if(0==i.code){var n=i.data;n.forEach((function(t){e.ksList.push({name:t.name,type:t.type,id:t.id,list:t.children})}))}else uni.showModal({showCancel:!1,title:"提示",content:i.msg,success:function(e){uni.reLaunch({url:"../index/index?org="+t})}})}))},goMz:function(t,e){uni.navigateTo({url:"view?org="+this.info.org+"&mzid="+t+"&lx="+e})}}};e.default=n},"82be":function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"content"},[t._l(t.ksList,(function(e,n){return i("v-uni-view",{key:n},t._l(e.list,(function(n,a){return i("v-uni-view",{key:a,staticClass:"mzlist",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goMz(n.id,n.tag)}}},[i("v-uni-image",{attrs:{src:t.imgpre+n.icon}}),i("v-uni-view",{},[i("v-uni-view",{staticClass:"title"},[i("v-uni-text",{attrs:{space:"ensp"}},[t._v("【"+t._s(e.name)+"】")]),i("v-uni-text",[t._v(t._s(n.name))])],1)],1)],1)})),1)})),i("v-uni-view",{staticClass:"tips"},[i("v-uni-text",[t._v("*友情提示：")]),i("v-uni-text",[t._v("点击相应科室进行预约")])],1)],2)},o=[]},a28f:function(t,e,i){"use strict";var n=i("13bd"),a=i.n(n);a.a},e6a1:function(t,e,i){"use strict";i.r(e);var n=i("82be"),a=i("261d");for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("a28f");var c,r=i("f0c5"),s=Object(r["a"])(a["default"],n["b"],n["c"],!1,null,"8666fc62",null,!1,n["a"],c);e["default"]=s.exports}}]);