(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-ptmzPlus-view"],{"46b5":function(t,e,n){"use strict";n.r(e);var i=n("f29a"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},"75c4":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */uni-page-body[data-v-c192910a]{background-color:#fff}.content[data-v-c192910a]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.top[data-v-c192910a]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-flow:row nowrap;flex-flow:row nowrap;-webkit-justify-content:space-around;justify-content:space-around;-webkit-box-align:center;-webkit-align-items:center;align-items:center;width:100%;padding:%?20?% 0 %?50?%;border-radius:0 0 %?30?% %?30?%;position:relative;height:%?360?%}.top .body[data-v-c192910a]{background:hsla(0,0%,100%,.8);position:relative;padding:%?20?% 0;width:%?750?%}.top .body .title[data-v-c192910a]{color:#333;font-size:%?50?%;text-align:center}.top .body .tag[data-v-c192910a]{margin-top:%?10?%;font-size:%?26?%;color:#333;padding:0 %?40?%;max-height:%?160?%;overflow:scroll}.top uni-image[data-v-c192910a]{width:100%;height:%?360?%;position:absolute;top:0;left:0}.intro[data-v-c192910a]{width:%?680?%;background-color:#fff;-webkit-box-shadow:0 0 %?30?% #cfcfcf;box-shadow:0 0 %?30?% #cfcfcf;border-radius:%?10?%;margin-top:%?-50?%;padding-bottom:%?60?%;margin-bottom:%?290?%}.intro .title[data-v-c192910a]{padding:%?30?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.intro .title .more[data-v-c192910a]{font-size:%?30?%}.intro .body[data-v-c192910a]{padding:0 %?30?% %?30?%;font-size:%?35?%;color:#999}.intro .body uni-input[data-v-c192910a]{color:#000;border-bottom:1px solid #666;padding:%?10?% 0;font-size:%?35?%}.intro .body uni-textarea[data-v-c192910a]{border:1px dashed #dadada;border-bottom:1px solid #666;font-size:%?35?%;padding:%?10?%;height:5em;width:%?600?%}.intro .body uni-picker uni-view[data-v-c192910a]{border-bottom:1px solid #666}.intro .body .uni-label-pointer[data-v-c192910a]{margin-right:%?80?%}.intro .body > uni-view[data-v-c192910a]{margin-top:1em}.intro .bodyzy[data-v-c192910a]{border-top:%?10?% solid #e6e6e6;border-radius:%?5?% %?5?%;padding:%?35?% %?30?%;font-size:%?30?%;color:#999}.btn[data-v-c192910a]{width:%?680?%;padding-left:%?35?%;padding-right:%?35?%;position:fixed;bottom:0;padding-bottom:1em;padding-top:.5em;z-index:100;overflow:hidden;background-color:#ececec}.btn uni-label[data-v-c192910a]{margin-top:%?50?%;font-size:%?30?%;color:#007aff}.btn uni-button[data-v-c192910a]{margin-top:%?20?%}body.?%PAGE?%[data-v-c192910a]{background-color:#fff}',""]),t.exports=e},"7ac8":function(t,e,n){"use strict";var i=n("82c8"),a=n.n(i);a.a},"82c8":function(t,e,n){var i=n("75c4");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("381b56f4",i,!0,{sourceMap:!1,shadowMode:!1})},"84c5":function(t,e,n){"use strict";n.r(e);var i=n("9a9f"),a=n("46b5");for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("7ac8");var r,s=n("f0c5"),u=Object(s["a"])(a["default"],i["b"],i["c"],!1,null,"c192910a",null,!1,i["a"],r);e["default"]=u.exports},"9a9f":function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}));var i={uniPopup:n("8771").default},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"content"},[n("v-uni-view",{staticClass:"top"},[n("v-uni-image",{attrs:{src:t.mz.icon}}),n("v-uni-view",{staticClass:"body"},[n("v-uni-view",{staticClass:"title"},[t._v(t._s(t.mz.name))])],1)],1),n("v-uni-view",{staticClass:"intro"},[n("v-uni-view",{staticClass:"body"},["17"==t.info.type?n("v-uni-view",{},[t._v("针次："),n("v-uni-radio-group",{on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.timesChange.apply(void 0,arguments)}}},[n("v-uni-label",{staticClass:"radio"},[n("v-uni-radio",{attrs:{value:"0",checked:"0"==t.info.times}}),t._v("第一针")],1),n("v-uni-label",{staticClass:"radio"},[n("v-uni-radio",{attrs:{value:"1",checked:"1"==t.info.times}}),t._v("第二针")],1)],1)],1):t._e(),n("v-uni-view",{},[t._v("姓名："),n("v-uni-input",{attrs:{type:"text",value:"",placeholder:"请输入您的姓名"},model:{value:t.yyInfo.name,callback:function(e){t.$set(t.yyInfo,"name",e)},expression:"yyInfo.name"}})],1),n("v-uni-view",{},[t._v("电话："),n("v-uni-input",{attrs:{type:"number",value:"",maxlength:"11",placeholder:"请输入您的手机号码"},model:{value:t.yyInfo.phone,callback:function(e){t.$set(t.yyInfo,"phone",e)},expression:"yyInfo.phone"}})],1),t.info.lx.indexOf("sfz")>=0?n("v-uni-view",{},[t._v("身份证："),n("v-uni-input",{attrs:{type:"text",value:"",placeholder:"请输入您的身份证"},model:{value:t.yyInfo.crsfz,callback:function(e){t.$set(t.yyInfo,"crsfz",e)},expression:"yyInfo.crsfz"}})],1):t._e(),t.info.lx.indexOf("sex")>=0?n("v-uni-view",{},[t._v("性别："),n("v-uni-radio-group",{on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.sexChange.apply(void 0,arguments)}}},[n("v-uni-label",{staticClass:"radio"},[n("v-uni-radio",{attrs:{value:"0",checked:"0"===t.yyInfo.sex}}),t._v("男")],1),n("v-uni-label",{staticClass:"radio"},[n("v-uni-radio",{attrs:{value:"1",checked:"1"===t.yyInfo.sex}}),t._v("女")],1)],1)],1):t._e(),n("v-uni-view",{},[t._v("时间："),n("v-uni-picker",{attrs:{mode:"multiSelector",value:t.yymultiIndex,range:t.yymultiArray},on:{columnchange:function(e){arguments[0]=e=t.$handleEvent(e),t.setpeople.apply(void 0,arguments)},change:function(e){arguments[0]=e=t.$handleEvent(e),t.getDate.apply(void 0,arguments)},click:function(e){arguments[0]=e=t.$handleEvent(e),t.getPeople.apply(void 0,arguments)}}},[n("v-uni-view",[t._v(t._s(t.yyInfo.date))])],1)],1),n("v-uni-view",{},[t._v("备注："),n("v-uni-textarea",{attrs:{value:"",placeholder:"若有其他说明,请备注"},model:{value:t.yyInfo.bz,callback:function(e){t.$set(t.yyInfo,"bz",e)},expression:"yyInfo.bz"}})],1)],1),n("v-uni-view",{staticClass:"bodyzy"},[n("v-uni-rich-text",{attrs:{nodes:t.mz.simpleIntro}})],1)],1),n("v-uni-view",{staticClass:"btn"},[n("v-uni-label",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.xycheck.apply(void 0,arguments)}}},[n("v-uni-checkbox",{staticStyle:{transform:"scale(0.8)"},attrs:{value:"xycheck",checked:t.info.xy}}),t._v("我已知晓并同意注意事项")],1),n("v-uni-button",{attrs:{type:"primary"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.save.apply(void 0,arguments)}}},[t._v("提交")])],1),t.mz.simpleIntro?n("uni-popup",{ref:"popup",attrs:{type:"center",maskClick:!1}},[n("uni-popup-dialog",{attrs:{type:"info",title:"注意事项",content:t.mz.simpleIntro,"before-close":!0},on:{confirm:function(e){arguments[0]=e=t.$handleEvent(e),t.iconfirm.apply(void 0,arguments)},close:function(e){arguments[0]=e=t.$handleEvent(e),t.iclose.apply(void 0,arguments)}}})],1):t._e()],1)},o=[]},f29a:function(t,e,n){"use strict";(function(t){var i=n("4ea4");n("4160"),n("c975"),n("fb6a"),n("d3b7"),n("e25e"),n("ac1f"),n("5319"),n("1276"),n("498a"),n("159b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("96cf");var a=i(n("1da1")),o=i(n("2e26")),r=i(n("3632")),s=n("1507"),u=i(n("3a3d")),c=i(n("8771")),l=i(n("5b23")),d=i(n("20a3")),f={components:{uParse:u.default,uniPopup:c.default,uniPopupMessage:l.default,uniPopupDialog:d.default},data:function(){return{mz:{},info:{org:"",timeType:{},circle:6,endDate:"",lx:"null",type:"",xy:!1,times:"0"},yyRules:{},yyInfo:{id:"",name:"",crsfz:"",phone:"",date:"请选择预约时间",bz:"",child:"",sex:"",childsfz:"请选择儿童出生日期"},yyNumMap:{},nowPeoplelist:[],yymultiArray:[],yymultiIndex:[0,0],yyTime2:[],yyWeek:[],yyJzsj:""}},onLoad:function(t){(t.mzid||t.type)&&t.org?(t.lx&&(this.info.lx=t.lx),t.mzid?this.info.mzid=t.mzid:this.info.type=t.type,this.info.org=t.org,uni.setStorageSync("org",{id:t.org}),this.getmz(this.info.type),this.getZdGz()):uni.reLaunch({url:"../index/index"})},methods:{bindDateChange:function(t){this.yyInfo.childsfz=t.target.value},timesChange:function(e){var n=this;this.info.times=e.detail.value,1==e.detail.value?uni.showModal({showCancel:!1,title:"提示",content:"第二针不需要预约，请按照接种单时间直接前往社区医院进行接种",confirmText:"预约第一针",success:function(t){n.info.times="0"},complete:function(){e.detail.value=0}}):t.log(0)},getDate:function(t){var e=this;return(0,a.default)(regeneratorRuntime.mark((function n(){var i;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,e.getyyStatus(e.yymultiArray[0][t.detail.value[0]],e.yymultiArray[1][t.detail.value[1]]);case 2:i=n.sent,i&&(e.yymultiIndex=t.detail.value,e.yyInfo.date=e.yymultiArray[0][e.yymultiIndex[0]]+" "+e.yymultiArray[1][e.yymultiIndex[1]].split("(")[0]);case 4:case"end":return n.stop()}}),n)})))()},getPeople:function(){var t=this;return(0,a.default)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.$request.get("/cms/number/getCounts",{data:{deptid:t.info.org,type:t.info.type}}).then((function(e){if(0==e.code){t.nowPeoplelist=e.data;var n={detail:{column:0,value:t.yymultiIndex[0]}};t.setpeople(n)}}));case 1:case"end":return e.stop()}}),e)})))()},setpeople:function(t){var e=this;if(0==t.detail.column){var n=this.yytimelist[t.detail.value].time,i=[],a=this.yymultiArray[0][t.detail.value].split("(")[0];n.forEach((function(t){var n=t+"";n.indexOf("(")>=0&&(n=n.split("(")[0]);var o=e.yyNumMap[n]?e.yyNumMap[n]:0;if(e.nowPeoplelist.length>0){for(var r=0;r<e.nowPeoplelist.length;r++){var s=e.nowPeoplelist[r],u=new Date(s.yyTime),c=a.replace(/\-/g,"/")+" "+n.split("~")[0];if(new Date(c).valueOf()==u.valueOf()){if(o<=s.counts){n+="(已满)";break}n+="("+(o-s.counts)+"人)";break}}-1==n.indexOf("(")&&(n=n+"("+o+"人)")}else n=n+"("+o+"人)";i.push(n)})),this.yymultiArray[1]=i}},xycheck:function(){this.info.xy=!this.info.xy,this.info.xy&&uni.pageScrollTo({scrollTop:1e3,duration:100})},iclose:function(){this.$refs.popup.close()},iconfirm:function(){this.$refs.popup.close()},getmz:function(t){var e=this,n="/cms/ptmz/getPtmzXq",i={id:this.info.mzid};""!=t&&(n+="2",i={deptid:this.info.org,type:this.info.type}),this.$request.get(n,{data:i}).then((function(t){0==t.code&&1==t.data.status?(e.mz={id:t.data.id,type:t.data.type,name:t.data.name,tag:t.data.tag,icon:t.data.icon.indexOf("http")>=0?t.data.icon:e.$myprop.imgUrlPre+t.data.icon,simpleIntro:t.data.detailIntro,scss:'background:url("'+e.$myprop.imgUrlPre+t.data.icon+'") cover'},e.info.type=t.data.type,uni.setNavigationBarTitle({title:t.data.name}),e.info.mzid=t.data.id,e.getTime2(e.info.org,e.mz.type)):uni.showModal({showCancel:!1,title:"提示",content:"暂未开通此功能",success:function(t){uni.reLaunch({url:"../index/index?org="+e.info.org})}})}))},getZdGz:function(){var e=this,n={deptid:this.info.org,type:this.info.type},i="/dictData/getDataList";this.$request.get(i,{data:n}).then((function(n){t.log(n),0==n.code&&null!=n.data&&void 0!=n.data&&n.data.forEach((function(t){if("age"==t.dictValue){var n=t.dictLabel.split("-");e.yyRules["age"]={max:n[1],min:n[0]}}else t.dictValue}))}))},testRules:function(t){for(var e in t){if("age"==e&&void 0!=t[e].min&&void 0!=t[e].max){var n=this.GetAge(this.yyInfo.crsfz);if(n>=t[e].min&&n<=t[e].max)return!0;uni.showToast({title:"仅支持年龄在"+t[e].min+"-"+t[e].max+"之间",icon:"none",duration:3e3})}return!1}return!0},GetAge:function(t){var e=(t+"").length,n="";if(18==e&&(n=t.substr(6,4)+"/"+t.substr(10,2)+"/"+t.substr(12,2)),15==e){var i="";i=t.charAt(6)+t.charAt(7),n=parseInt(i)<10?"20"+t.substr(6,2)+"/"+t.substr(8,2)+"/"+t.substr(10,2):"19"+t.substr(6,2)+"/"+t.substr(8,2)+"/"+t.substr(10,2)}var a=new Date(n),o=new Date,r=o.getFullYear()-a.getFullYear();return(o.getMonth()<a.getMonth()||o.getMonth()==a.getMonth()&&o.getDate()<a.getDate())&&r--,r},save:function(){var t=this;return(0,a.default)(regeneratorRuntime.mark((function e(){var n,i,a,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(uni.showLoading({title:"保存中……",mask:!0}),n=uni.getSystemInfoSync(),t.info.xy){e.next=5;break}return uni.showToast({title:"请同意注意事项",icon:"none",duration:3e3}),e.abrupt("return",!1);case 5:if(""!=t.yyInfo.name.trim()&&""!=t.yyInfo.phone.trim()){e.next=9;break}uni.showToast({title:"姓名、手机号码必填",icon:"none",duration:3e3}),e.next=43;break;case 9:if(11==t.yyInfo.phone.trim().length){e.next=13;break}uni.showToast({title:"手机号码格式不正确",icon:"none",duration:3e3}),e.next=43;break;case 13:if(""!=t.yyInfo.crsfz.trim()||!(t.info.lx.indexOf("sfz")>=0||t.info.lx.indexOf("child")>=0)){e.next=17;break}uni.showToast({title:"请填写身份证",icon:"none",duration:3e3}),e.next=43;break;case 17:if((0,s.IDCardCheck)(t.yyInfo.crsfz.trim())){e.next=21;break}uni.showToast({icon:"none",title:"身份证格式不正确"}),e.next=43;break;case 21:if("请选择预约时间"!=t.yyInfo.date){e.next=25;break}uni.showToast({title:"请选择预约时间",icon:"none",duration:3e3}),e.next=43;break;case 25:if(!("请选择儿童出生日期"==t.yyInfo.childsfz&&t.info.lx.indexOf("child")>=0)){e.next=29;break}uni.showToast({title:"请选择儿童出生日期",icon:"none",duration:3e3}),e.next=43;break;case 29:if(!(""==t.yyInfo.sex&&t.info.lx.indexOf("sex")>=0)){e.next=33;break}uni.showToast({title:"请选择性别",icon:"none",duration:3e3}),e.next=43;break;case 33:if(t.testRules(t.yyRules)){e.next=37;break}return e.abrupt("return");case 37:return e.next=39,t.getyyStatus(t.yymultiArray[0][t.yymultiIndex[0]],t.yymultiArray[1][t.yymultiIndex[1]]);case 39:i=e.sent,a=t.yyInfo.date,o=n.deviceId,i?(!1,t.$request.get("/cms/number/getTime",{data:{deptid:t.info.org,type:t.mz.type}}).then((function(e){if(0==e.code){var i=!0;if(null!=e.data[0].other2&&e.data[0].other2.length>0&&new Date<new Date(e.data[0].other2))return uni.showToast({title:"还未到预约时间（"+e.data[0].other2+"）",mask:!0,icon:"none",duration:2500}),!1;if(""!=e.data[0].qztime){var s=e.data[0].qztime.substring(0,10).replace(/\-/g,"/"),u=a.substring(0,10).replace(/\-/g,"/");i=new Date(u+" 0:0:0")>=new Date(s+" 0:0:0")}if(i){!0;var c=t.yyInfo.phone.trim()+"-"+t.yyInfo.crsfz.trim()+"-"+(t.yyInfo.date.substring(0,10)+" "+t.yyInfo.date.substring(15,20)).trim()+"-"+o,l=(0,r.default)(c);t.$request.post("/cms/ptmz/yyptmz",{data:{deptid:t.info.org,ksId:t.info.mzid,username:t.yyInfo.name,phone:t.yyInfo.phone,sfz:t.yyInfo.crsfz,date:t.yyInfo.date.substring(0,10)+" "+t.yyInfo.date.substring(15,20),stime:t.yyInfo.date.substring(15,20),etime:t.yyInfo.date.substring(21,26),timetype:t.info.timeType[t.yyInfo.date.substring(15,26)],sex:t.yyInfo.sex,remark:t.yyInfo.bz,childname:t.yyInfo.child,childsfz:t.yyInfo.childsfz,auth:n.model+n.deviceId,sign:l},header:{"content-type":"application/x-www-form-urlencoded",etag:o}}).then((function(e){if(0==e.code){var n=t;uni.showModal({showCancel:!1,title:"预约成功！",content:"重要提示:因个人原因未能参加接种，请及时取消预约。",confirmText:"查看预约情况",success:function(t){uni.redirectTo({url:"../search/search?phone="+n.yyInfo.phone})}})}else uni.showToast({title:e.msg,icon:"none",duration:3e3})}))}else uni.hideLoading(),uni.showModal({title:"提示",content:"当前预约时间有误，请刷新重试",mask:!0,icon:"none",showCancel:!1,success:function(t){uni.navigateBack()}})}else uni.showToast({title:e.msg,icon:"none",duration:3e3})}))):(uni.showToast({title:"当前时间预约已满",icon:"none"}),t.yyInfo.date="请选择预约时间");case 43:case"end":return e.stop()}}),e)})))()},sexChange:function(t){this.yyInfo.sex=t.detail.value},getYyStatus:function(t,e){var n=this;this.$request.get("/cms/card/getFwzt",{data:{deptid:t,type:e}}).then((function(e){0==e.code&&1==e.data.yxbz?(n.tjInfo.name=e.data.name,n.tjInfo.info=e.data.simpleIntro,n.info.cardid=e.data.id):uni.showModal({showCancel:!1,title:"提示",content:"暂未开通此功能",success:function(e){uni.reLaunch({url:"../index/index?org="+t})}})}))},getTime2:function(t,e){var n=this;this.$request.get("/cms/number/getTime",{data:{deptid:t,type:e}}).then((function(e){if(0==e.code)if(e.data.length>0){var i=0;e.data.forEach((function(t,e){if(0==e){var a=t.other;i=a.substr(a.indexOf("-")+1,a.indexOf("|")-2)}var r=o.default.getTimeAna(t.other,t.qztime),s=o.default.addCalu(n.yytimelist,r);n.yytimelist=s;var u=t.other.split("|");u[2].replace(/-/g,"~").split(",").forEach((function(e){n.info.timeType[e]=t.timetype,n.yyNumMap[e]=t.num}))})),n.yytimelist=n.yytimelist.slice(0,i),n.gettimelist(),n.getPeople()}else uni.showModal({showCancel:!1,title:"提示",content:"暂未开通此功能",success:function(e){uni.reLaunch({url:"../index/index?org="+t})}})}))},getyyStatus:function(t,e){var n=this;return new Promise((function(i,a){e=e.split("(")[0];var o=e.split("~");n.$request.get("/cms/number/getStatus",{data:{date:t.substring(0,t.indexOf("(")),deptid:n.info.org,sdate:o[0],edate:o[1],timetype:n.info.timeType[e],type:n.mz.type}}).then((function(t){0==t.code?i(!0):(""!=t.msg?uni.showToast({title:t.msg,icon:"none"}):uni.showToast({title:"当前时间预约已满",icon:"none"}),n.yyInfo.date="请选择预约时间",i(!1))}))}))},gettimelist:function(t){var e=this;null!=t&&void 0!=t||(t=0);var n=[];if(this.yytimelist.forEach((function(t){n.push(t.day)})),n.length>0){var i=[];this.yytimelist[t].time.forEach((function(t){i.push(t+"("+e.yyNumMap[t]+"人)")})),this.yymultiArray=[n,i]}else uni.showModal({showCancel:!1,title:"提示",content:"未开放预约",success:function(t){uni.reLaunch({url:"../index/index?org="+e.info.org})}})}},computed:{noData:function(){return""},imgprop:function(){var t={lozyLoad:!0,domain:""};return t}}};e.default=f}).call(this,n("5a52")["default"])}}]);