(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-xqym-myJh"],{"105e":function(i,t,e){"use strict";var n;e.d(t,"b",(function(){return o})),e.d(t,"c",(function(){return a})),e.d(t,"a",(function(){return n}));var o=function(){var i=this,t=i.$createElement,e=i._self._c||t;return e("v-uni-view",[e("v-uni-view",{staticClass:"search_box"},[e("v-uni-input",{attrs:{type:"text",placeholder:"请输入手机号码"},model:{value:i.phone,callback:function(t){i.phone=t},expression:"phone"}}),e("v-uni-button",{attrs:{type:"primary"},on:{click:function(t){arguments[0]=t=i.$handleEvent(t),i.getList.apply(void 0,arguments)}}},[i._v("查询排队记录")])],1),e("v-uni-view",{staticClass:"show_box"},[i._l(i.yyList,(function(t,n){return e("v-uni-view",{key:n,on:{click:function(e){arguments[0]=e=i.$handleEvent(e),i.qxyy(t)}}},[e("v-uni-view",{staticClass:"inshow"},[e("v-uni-view",{staticClass:"type"},[e("v-uni-view",{staticClass:"zfont"},[i._v(i._s(t.name))])],1),e("v-uni-view",{},[e("v-uni-view",{staticClass:"title"},[i._v("排队人：")]),e("v-uni-view",{staticClass:"info"},[i._v(i._s(t.userName))])],1),t.pdtime?e("v-uni-view",{},[e("v-uni-view",{staticClass:"title"},[i._v("排队时间：")]),e("v-uni-view",{staticClass:"info"},[i._v(i._s(t.pdtime))])],1):i._e(),e("v-uni-view",{},[e("v-uni-view",{staticClass:"title"},[i._v("状态：")]),e("v-uni-view",{staticClass:"info"},[i._v(i._s(0==t.pdFlag?"排队中("+t.yyNum+")":1==t.pdFlag?"已排队到号，请去预约":3==t.pdFlag?"已排队到号，已预约":"排队预约失败"))])],1)],1),e("v-uni-view",{staticClass:"ibuton"},["1"==t.pdFlag?e("v-uni-view",{on:{click:function(e){arguments[0]=e=i.$handleEvent(e),i.qxyy(t)}}},[i._v("去 预 约")]):i._e(),"3"==t.pdFlag?e("v-uni-view",{on:{click:function(e){arguments[0]=e=i.$handleEvent(e),i.goYy(t)}}},[i._v("查 看 预 约")]):i._e()],1)],1)})),0==i.yyList.length?e("v-uni-view",{domProps:{textContent:i._s(i.phone.length>0&&i.flag?"暂无叫号记录":"请先查询")}}):i._e()],2)],1)},a=[]},"29a1":function(i,t,e){"use strict";(function(i){e("4160"),e("159b"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={data:function(){return{phone:"",org:"",yyList:[],flag:!1}},onLoad:function(i){i.org?this.org=i.org:uni.reLaunch({url:"../index/index"}),i.phone&&(this.phone=i.phone)},methods:{getList:function(){var i=this;uni.showLoading({title:"查询中…"}),this.phone.length>0?this.$request.get("/cms/pdyy/getMyPd",{data:{deptid:this.org,phone:this.phone}}).then((function(t){if(i.flag||(i.flag=!i.flag),i.yyList=[],0==t.code){var e="";t.data.forEach((function(t,n){i.yyList.push({userName:t.userName,id:t.id,name:t.pdymName,time:t.createTime,pdtime:t.pdTime,pdFlag:t.pdFlag,phone:t.userPhone,idCard:t.userSfz,ymid:t.pdymId,org:t.hid,yyNum:"?",child:!!(t.childName&&t.childName.length>1),childname:t.childName,childsr:t.childBirthday,show:!0,bz:null==t.yybz?e:t.yybz}),0==t.pdFlag&&i.$request.get("/cms/pdyy/getMyNum",{data:{deptid:t.hid,id:t.id,ymId:t.pdymId}}).then((function(t){1==t.code&&(i.yyList[n].yyNum=t.data)}))})),0==i.yyList.length&&uni.showToast({title:"暂无预约记录",icon:"none"})}else uni.showToast({title:"暂无预约记录",icon:"none"});uni.hideLoading()})):uni.showToast({title:"请先输入手机号",icon:"none"})},qxyy:function(i){if(1==i.pdFlag){var t="";t=i.child||null!=i.childName?"&child=1&childname="+i.childname+"&childcsrq="+i.childsr:"&lx=14&sfz="+i.idCard,uni.redirectTo({url:"./yyView?org="+this.org+"&phone="+i.phone+"&id="+i.id+"&userName="+i.userName+"&ymid="+i.ymid+"&yyid="+i.id+t})}},goYy:function(i){3==i.pdFlag&&uni.redirectTo({url:"./yyrecord?org="+this.org+"&phone="+i.phone})},getNowNum:function(t){this.$request.get("/cms/pdyy/getMyNum",{data:{deptid:t.org,id:t.id,ymId:t.ymid}}).then((function(t){if(0==t.code){var e=t.msg;uni.showModal({showCancel:!1,title:"提示",content:e,success:function(t){i.log("ok")}})}else 1==t.code&&uni.showModal({showCancel:!1,title:"提示",content:"前面排队人数: "+t.data,success:function(t){i.log("ok")}})}))}}};t.default=n}).call(this,e("5a52")["default"])},"64b6":function(i,t,e){"use strict";e.r(t);var n=e("105e"),o=e("a0c9");for(var a in o)"default"!==a&&function(i){e.d(t,i,(function(){return o[i]}))}(a);e("6d83");var d,s=e("f0c5"),r=Object(s["a"])(o["default"],n["b"],n["c"],!1,null,"61840289",null,!1,n["a"],d);t["default"]=r.exports},"6d83":function(i,t,e){"use strict";var n=e("c795"),o=e.n(n);o.a},a0c9:function(i,t,e){"use strict";e.r(t);var n=e("29a1"),o=e.n(n);for(var a in n)"default"!==a&&function(i){e.d(t,i,(function(){return n[i]}))}(a);t["default"]=o.a},aead:function(i,t,e){var n=e("24fb");t=n(!1),t.push([i.i,'@charset "UTF-8";\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.search_box[data-v-61840289]{margin-top:2em;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.search_box uni-input[data-v-61840289]{width:90%;color:#000;border-bottom:1px solid #666;padding:%?10?% 0;font-size:%?35?%;margin-bottom:1em}.search_box uni-button[data-v-61840289]{width:90%}.show_box[data-v-61840289]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.show_box > uni-view[data-v-61840289]{margin-top:%?20?%;margin-bottom:10px;border:1px solid #efefef;border-radius:%?10?%;width:90%}.show_box > uni-view .inshow[data-v-61840289]{padding:%?20?% %?30?%}.show_box > uni-view[data-v-61840289]{font-size:%?30?%;line-height:%?45?%}.show_box > uni-view .title[data-v-61840289]{text-align:right;width:5em;display:inline-block;color:#666}.show_box > uni-view .info[data-v-61840289]{width:calc(100% - 5em);display:inline-block}.show_box .type[data-v-61840289]{color:#333;border-bottom:1px solid #efefef;padding-bottom:%?10?%;margin-bottom:%?10?%;overflow:hidden}.show_box .type .zfont[data-v-61840289]{float:left;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;max-width:16em;color:#000;border-bottom:none}.show_box .type uni-view[data-v-61840289]{float:right;color:#0081ff;border-bottom:1px solid #0081ff}.show_box .name .info[data-v-61840289]{font-weight:700}.show_box .result .info[data-v-61840289]{color:#ed1c24}.show_box .ibuton[data-v-61840289]{background-color:#007aff;font-size:%?35?%;text-align:center;color:#fff;padding:8px 0;margin-bottom:-10px;margin-top:5px;border-radius:0 0 %?15?% %?15?%}',""]),i.exports=t},c795:function(i,t,e){var n=e("aead");"string"===typeof n&&(n=[[i.i,n,""]]),n.locals&&(i.exports=n.locals);var o=e("4f06").default;o("4c4c0505",n,!0,{sourceMap:!1,shadowMode:!1})}}]);