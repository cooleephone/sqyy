(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-xqym-jhInfo"],{"0358":function(e,t,n){"use strict";(function(e){var i=n("4ea4");n("498a"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("96cf");var o=i(n("1da1")),a=n("1507"),d=i(n("3a3d")),r=i(n("8771")),c=i(n("5b23")),s=i(n("20a3")),u={components:{uParse:d.default,uniPopup:r.default,uniPopupMessage:c.default,uniPopupDialog:s.default},data:function(){return{ym:{num:""},xlList:[],info:{dl:"",xl:"",org:"",timeType:{},circle:6,endDate:"",child:!1,xy:!1},yyInfo:{ymid:"",name:"",phone:"",idCard:"",bz:"",child:"",childcsrq:"请选择儿童出生日期"}}},onLoad:function(e){e.id&&e.deptid?(this.info.id=e.id,this.info.org=e.deptid,this.getYm(this.info.org,this.info.id),void 0!=e.child&&"1"==e.child&&(this.info.child=!0)):uni.navigateBack()},methods:{bindDateChange:function(e){this.yyInfo.childcsrq=e.target.value},getYm:function(e,t){var n=this;this.$request.get("/cms/pdyy/getPdYmById",{data:{deptid:e,id:t}}).then((function(t){0==t.code&&(n.ym={name:t.data.name,tag:t.data.tag,icon:n.$myprop.imgUrlPre+t.data.icon,color:t.data.color,simpleInfro:t.data.simpleIntro,detailIntro:t.data.detailIntro,num:0},""==n.ym?uni.showModal({showCancel:!1,title:"提示",content:"暂未开通此功能",success:function(t){uni.reLaunch({url:"../index/index?org="+e})}}):n.getpdNum(n.info.org,n.info.id))}))},save:function(){var t=this;return(0,o.default)(regeneratorRuntime.mark((function n(){var i;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(t.info.xy){n.next=3;break}return uni.showToast({title:"请同意注意事项",icon:"none",duration:3e3}),n.abrupt("return",!1);case 3:if(uni.showLoading({title:"保存中……",mask:!0}),i=!0,!i){n.next=24;break}if(t.info.child){n.next=12;break}if((0,a.IDCardCheck)(t.yyInfo.idCard.trim())){n.next=10;break}return uni.showToast({title:"身份证格式不正确",icon:"none",duration:3e3}),n.abrupt("return");case 10:n.next=18;break;case 12:if(""!=t.yyInfo.child){n.next=15;break}return uni.showToast({title:"请选择填写儿童姓名",icon:"none",duration:3e3}),n.abrupt("return");case 15:if("请选择儿童出生日期"!=t.yyInfo.childcsrq){n.next=18;break}return uni.showToast({title:"请选择儿童出生日期",icon:"none",duration:3e3}),n.abrupt("return");case 18:if(""==t.yyInfo.name||11!=t.yyInfo.phone.length){n.next=22;break}t.$request.post("/cms/pdyy/pd",{data:{deptid:t.info.org,ymId:t.info.id,username:t.yyInfo.name,phone:t.yyInfo.phone,childName:t.yyInfo.child,childBirthday:t.yyInfo.childcsrq,sfz:t.yyInfo.idCard},header:{"content-type":"application/x-www-form-urlencoded"}}).then((function(n){if(e.log(n),uni.setStorageSync("myPhone",t.yyInfo.phone),0==n.code){var i=t;uni.showModal({showCancel:!1,title:"提示",content:"提交成功，请等待放号成功进行预约",success:function(e){uni.redirectTo({url:"./myJh?org="+i.info.org+"&phone="+i.yyInfo.phone})}})}else uni.showToast({title:n.msg,icon:"none",duration:3e3})})),n.next=24;break;case 22:return uni.showToast({title:"姓名、手机号码必填",icon:"none",duration:3e3}),n.abrupt("return");case 24:case"end":return n.stop()}}),n)})))()},xycheck:function(){this.info.xy=!this.info.xy,this.ym.simpleInfro&&(uni.hideToast(),this.$refs.popup.open())},iclose:function(){this.$refs.popup.close()},iconfirm:function(){this.$refs.popup.close()},getpdNum:function(e,t){var n=this;this.$request.get("/cms/pdyy/getMyNum",{data:{deptid:e,ymId:t}}).then((function(e){1==e.code?n.ym.num=e.data:n.ym.num="?"}))}},computed:{noData:function(){return""},imgprop:function(){var e={lozyLoad:!0,domain:""};return e}}};t.default=u}).call(this,n("5a52")["default"])},"0a1b":function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return i}));var i={uniPopup:n("8771").default},o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"content"},[n("v-uni-view",{staticClass:"top",style:"background-image: linear-gradient(to right, #ebe1e1 , "+this.ym.color+")"},[n("v-uni-view",{},[n("v-uni-view",{staticClass:"title"},[e._v(e._s(e.ym.name))]),n("v-uni-view",{staticClass:"tag",style:"color:"+this.ym.color},[e._v(e._s(e.ym.tag))])],1),n("v-uni-image",{attrs:{src:e.ym.icon}})],1),n("v-uni-view",{staticClass:"intro"},[n("v-uni-view",{staticClass:"title"},[n("v-uni-view",{style:"color:"+this.ym.color},[e._v(e._s(e.ym.name))])],1),n("v-uni-view",{staticClass:"title jh"},[n("v-uni-view",{staticClass:"more",domProps:{textContent:e._s("当前排队："+e.ym.num+"人")}})],1),n("v-uni-view",{staticClass:"body"},[e.info.child?n("v-uni-view",{},[e._v("儿童姓名："),n("v-uni-input",{attrs:{type:"text",value:"",placeholder:"请输入儿童姓名"},model:{value:e.yyInfo.child,callback:function(t){e.$set(e.yyInfo,"child",t)},expression:"yyInfo.child"}})],1):e._e(),e.info.child?n("v-uni-view",{},[e._v("儿童出生日期："),n("v-uni-picker",{attrs:{mode:"date"},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.bindDateChange.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"uni-input"},[e._v(e._s(e.yyInfo.childcsrq))])],1)],1):e._e(),n("v-uni-view",{},[e.info.child?n("v-uni-text",[e._v("家长")]):e._e(),e._v("姓名："),n("v-uni-input",{attrs:{type:"text",value:"",placeholder:"请输入您的姓名"},model:{value:e.yyInfo.name,callback:function(t){e.$set(e.yyInfo,"name",t)},expression:"yyInfo.name"}})],1),e.info.child?e._e():n("v-uni-view",{},[e._v("身份证号："),n("v-uni-input",{attrs:{type:"text",value:"",placeholder:"请输入您的身份证"},model:{value:e.yyInfo.idCard,callback:function(t){e.$set(e.yyInfo,"idCard",t)},expression:"yyInfo.idCard"}})],1),n("v-uni-view",{},[e._v("电话："),n("v-uni-input",{attrs:{type:"text",value:"",maxlength:"11",placeholder:"请输入您的手机号码"},model:{value:e.yyInfo.phone,callback:function(t){e.$set(e.yyInfo,"phone",t)},expression:"yyInfo.phone"}})],1)],1)],1),n("v-uni-view",{staticClass:"btn"},[n("v-uni-label",{on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.xycheck.apply(void 0,arguments)}}},[n("v-uni-checkbox",{staticStyle:{transform:"scale(0.8)"},attrs:{checked:e.info.xy}}),e._v("我已知晓并同意注意事项")],1),n("v-uni-button",{attrs:{type:"primary"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.save.apply(void 0,arguments)}}},[e._v("确 定")])],1),e.ym.simpleInfro?n("uni-popup",{ref:"popup",attrs:{type:"center",maskClick:!1}},[n("uni-popup-dialog",{attrs:{type:"info",title:"注意事项",content:e.ym.simpleInfro,"before-close":!0},on:{confirm:function(t){arguments[0]=t=e.$handleEvent(t),e.iconfirm.apply(void 0,arguments)},close:function(t){arguments[0]=t=e.$handleEvent(t),e.iclose.apply(void 0,arguments)}}})],1):e._e()],1)},a=[]},"3df1":function(e,t,n){var i=n("e59f");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var o=n("4f06").default;o("3151d5b8",i,!0,{sourceMap:!1,shadowMode:!1})},"62ab":function(e,t,n){"use strict";n.r(t);var i=n("0358"),o=n.n(i);for(var a in i)"default"!==a&&function(e){n.d(t,e,(function(){return i[e]}))}(a);t["default"]=o.a},"978c":function(e,t,n){"use strict";n.r(t);var i=n("0a1b"),o=n("62ab");for(var a in o)"default"!==a&&function(e){n.d(t,e,(function(){return o[e]}))}(a);n("b493");var d,r=n("f0c5"),c=Object(r["a"])(o["default"],i["b"],i["c"],!1,null,"7add4dae",null,!1,i["a"],d);t["default"]=c.exports},b493:function(e,t,n){"use strict";var i=n("3df1"),o=n.n(i);o.a},e59f:function(e,t,n){var i=n("24fb");t=i(!1),t.push([e.i,'@charset "UTF-8";\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */uni-page-body[data-v-7add4dae]{background-color:#fff}.content[data-v-7add4dae]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.top[data-v-7add4dae]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-flow:row nowrap;flex-flow:row nowrap;-webkit-justify-content:space-around;justify-content:space-around;-webkit-box-align:center;-webkit-align-items:center;align-items:center;width:100%;padding:%?60?% 0 %?80?%;border-radius:0 0 %?30?% %?30?%}.top .title[data-v-7add4dae]{color:#fff;font-size:%?50?%}.top .tag[data-v-7add4dae]{border-radius:%?25?%;background-color:#ebe1e1;font-size:%?25?%;padding:%?10?% 0;text-align:center}.top uni-image[data-v-7add4dae]{width:%?200?%;height:%?200?%}.intro[data-v-7add4dae]{width:%?680?%;background-color:#fff;box-shadow:0 0 %?30?% #cfcfcf;border-radius:%?10?%;margin-top:%?-50?%;padding-bottom:%?40?%;margin-bottom:%?160?%}.intro .title[data-v-7add4dae]{padding:%?40?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.intro .title .more[data-v-7add4dae]{font-size:%?30?%}.intro .jh[data-v-7add4dae]{padding:0 %?30?%}.intro .body[data-v-7add4dae]{padding:0 %?30?% %?30?%;font-size:%?35?%;color:#999}.intro .body uni-input[data-v-7add4dae]{color:#000;border-bottom:1px solid #666;padding:%?10?% 0;font-size:%?35?%}.intro .body uni-textarea[data-v-7add4dae]{border:1px dashed #dadada;border-bottom:1px solid #666;font-size:%?35?%;padding:%?10?%;height:5em;width:%?600?%}.intro .body uni-picker uni-view[data-v-7add4dae]{border-bottom:1px solid #666}.intro .body > uni-view[data-v-7add4dae]{margin-top:1.2em}.intro .bodyzy[data-v-7add4dae]{border-top:%?10?% solid #e6e6e6;border-radius:%?5?% %?5?%;padding:%?35?% %?30?%;font-size:%?30?%;color:#999}.btn[data-v-7add4dae]{width:%?680?%;padding-left:%?35?%;padding-right:%?35?%;position:fixed;bottom:0;padding-bottom:1em;padding-top:.5em;z-index:1;overflow:hidden;background-color:#ececec}.btn uni-label[data-v-7add4dae]{margin-top:%?50?%;font-size:%?30?%;color:#007aff}.btn uni-button[data-v-7add4dae]{margin-top:%?20?%}body.?%PAGE?%[data-v-7add4dae]{background-color:#fff}',""]),e.exports=t}}]);