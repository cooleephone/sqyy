(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-xqym-myJh"],{"105e":function(t,i,e){"use strict";var n;e.d(i,"b",(function(){return o})),e.d(i,"c",(function(){return a})),e.d(i,"a",(function(){return n}));var o=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",[e("v-uni-view",{staticClass:"search_box"},[e("v-uni-input",{attrs:{type:"text",placeholder:"请输入手机号码"},model:{value:t.phone,callback:function(i){t.phone=i},expression:"phone"}}),e("v-uni-button",{attrs:{type:"primary"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.getList.apply(void 0,arguments)}}},[t._v("查询排队记录")])],1),e("v-uni-view",{staticClass:"show_box"},[t._l(t.yyList,(function(i,n){return e("v-uni-view",{key:n,on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.qxyy(i)}}},[e("v-uni-view",{staticClass:"inshow"},[e("v-uni-view",{staticClass:"type"},[e("v-uni-view",{staticClass:"zfont"},[t._v(t._s(i.name))])],1),e("v-uni-view",{},[e("v-uni-view",{staticClass:"title"},[t._v("排队人：")]),e("v-uni-view",{staticClass:"info"},[t._v(t._s(i.userName))])],1),i.pdtime?e("v-uni-view",{},[e("v-uni-view",{staticClass:"title"},[t._v("排队时间：")]),e("v-uni-view",{staticClass:"info"},[t._v(t._s(i.pdtime))])],1):t._e(),e("v-uni-view",{},[e("v-uni-view",{staticClass:"title"},[t._v("状态：")]),e("v-uni-view",{staticClass:"info"},[t._v(t._s(0==i.pdFlag?"排队中("+i.yyNum+")":1==i.pdFlag?"已排队到号，请去预约":3==i.pdFlag?"已排队到号，已预约":"排队预约失败"))])],1)],1),e("v-uni-view",{staticClass:"ibuton"},["1"==i.pdFlag?e("v-uni-view",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.qxyy(i)}}},[t._v("去 预 约")]):t._e(),"3"==i.pdFlag?e("v-uni-view",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goYy(i)}}},[t._v("查 看 预 约")]):t._e()],1)],1)})),0==t.yyList.length?e("v-uni-view",{domProps:{textContent:t._s(t.phone.length>0&&t.flag?"暂无叫号记录":"请先查询")}}):t._e()],2)],1)},a=[]},"29a1":function(t,i,e){"use strict";e("4160"),e("159b"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n={data:function(){return{phone:"",org:"",yyList:[],flag:!1}},onLoad:function(t){t.org?this.org=t.org:uni.reLaunch({url:"../index/index"}),t.phone&&(this.phone=t.phone)},methods:{getList:function(){var t=this;uni.showLoading({title:"查询中…"}),this.phone.length>0?this.$request.get("/cms/pdyy/getMyPd",{data:{deptid:this.org,phone:this.phone}}).then((function(i){if(t.flag||(t.flag=!t.flag),t.yyList=[],0==i.code){var e="";i.data.forEach((function(i,n){t.yyList.push({userName:i.userName,id:i.id,name:i.pdymName,time:i.createTime,pdtime:i.pdTime,pdFlag:i.pdFlag,phone:i.userPhone,idCard:i.userSfz,ymid:i.pdymId,org:i.hid,yyNum:"?",child:!!(i.childName&&i.childName.length>1),childname:i.childName,childsr:i.childBirthday,show:!0,bz:null==i.yybz?e:i.yybz}),0==i.pdFlag&&t.$request.get("/cms/pdyy/getMyNum",{data:{deptid:i.hid,id:i.id,ymId:i.pdymId}}).then((function(i){1==i.code&&(t.yyList[n].yyNum=i.data)}))})),0==t.yyList.length&&uni.showToast({title:"暂无预约记录",icon:"none"})}else uni.showToast({title:"暂无预约记录",icon:"none"});uni.hideLoading()})):uni.showToast({title:"请先输入手机号",icon:"none"})},qxyy:function(t){if(1==t.pdFlag){var i="";i=t.child||null!=t.childName?"&child=1&childname="+t.childname+"&childcsrq="+t.childsr:"&lx=14&sfz="+t.idCard,uni.redirectTo({url:"./yyView?org="+this.org+"&phone="+t.phone+"&id="+t.id+"&userName="+t.userName+"&ymid="+t.ymid+"&yyid="+t.id+i})}},goYy:function(t){3==t.pdFlag&&uni.redirectTo({url:"./yyrecord?org="+this.org+"&phone="+t.phone})},getNowNum:function(t){this.$request.get("/cms/pdyy/getMyNum",{data:{deptid:t.org,id:t.id,ymId:t.ymid}}).then((function(t){if(0==t.code){var i=t.msg;uni.showModal({showCancel:!1,title:"提示",content:i,success:function(t){console.log("ok")}})}else 1==t.code&&uni.showModal({showCancel:!1,title:"提示",content:"前面排队人数: "+t.data,success:function(t){console.log("ok")}})}))}}};i.default=n},"64b6":function(t,i,e){"use strict";e.r(i);var n=e("105e"),o=e("a0c9");for(var a in o)"default"!==a&&function(t){e.d(i,t,(function(){return o[t]}))}(a);e("6d83");var r,s=e("f0c5"),d=Object(s["a"])(o["default"],n["b"],n["c"],!1,null,"61840289",null,!1,n["a"],r);i["default"]=d.exports},"6d83":function(t,i,e){"use strict";var n=e("c795"),o=e.n(n);o.a},a0c9:function(t,i,e){"use strict";e.r(i);var n=e("29a1"),o=e.n(n);for(var a in n)"default"!==a&&function(t){e.d(i,t,(function(){return n[t]}))}(a);i["default"]=o.a},aead:function(t,i,e){var n=e("24fb");i=n(!1),i.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.search_box[data-v-61840289]{margin-top:2em;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.search_box uni-input[data-v-61840289]{width:90%;color:#000;border-bottom:1px solid #666;padding:%?10?% 0;font-size:%?35?%;margin-bottom:1em}.search_box uni-button[data-v-61840289]{width:90%}.show_box[data-v-61840289]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.show_box > uni-view[data-v-61840289]{margin-top:%?20?%;margin-bottom:10px;border:1px solid #efefef;border-radius:%?10?%;width:90%}.show_box > uni-view .inshow[data-v-61840289]{padding:%?20?% %?30?%}.show_box > uni-view[data-v-61840289]{font-size:%?30?%;line-height:%?45?%}.show_box > uni-view .title[data-v-61840289]{text-align:right;width:5em;display:inline-block;color:#666}.show_box > uni-view .info[data-v-61840289]{width:calc(100% - 5em);display:inline-block}.show_box .type[data-v-61840289]{color:#333;border-bottom:1px solid #efefef;padding-bottom:%?10?%;margin-bottom:%?10?%;overflow:hidden}.show_box .type .zfont[data-v-61840289]{float:left;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;max-width:16em;color:#000;border-bottom:none}.show_box .type uni-view[data-v-61840289]{float:right;color:#0081ff;border-bottom:1px solid #0081ff}.show_box .name .info[data-v-61840289]{font-weight:700}.show_box .result .info[data-v-61840289]{color:#ed1c24}.show_box .ibuton[data-v-61840289]{background-color:#007aff;font-size:%?35?%;text-align:center;color:#fff;padding:8px 0;margin-bottom:-10px;margin-top:5px;border-radius:0 0 %?15?% %?15?%}',""]),t.exports=i},c795:function(t,i,e){var n=e("aead");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=e("4f06").default;o("4c4c0505",n,!0,{sourceMap:!1,shadowMode:!1})}}]);