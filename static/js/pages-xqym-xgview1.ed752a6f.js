(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-xqym-xgview1"],{"052f":function(t,n,a){var e=a("c47b");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var s=a("4f06").default;s("8dded88e",e,!0,{sourceMap:!1,shadowMode:!1})},"1ca4":function(t,n,a){"use strict";var e=a("052f"),s=a.n(e);s.a},4052:function(t,n,a){"use strict";a.d(n,"b",(function(){return s})),a.d(n,"c",(function(){return r})),a.d(n,"a",(function(){return e}));var e={uniPopup:a("8771").default},s=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("v-uni-view",{staticClass:"content"},[a("v-uni-view",{staticClass:"top"},[a("v-uni-image",{attrs:{src:t.mz.icon}}),a("v-uni-view",{staticClass:"body"},[a("v-uni-view",{staticClass:"title"},[t._v(t._s(t.mz.name))])],1)],1),a("v-uni-view",{staticClass:"intro"},[a("v-uni-view",{staticClass:"body"},["17"==t.info.type?a("v-uni-view",{},[t._v("针次："),a("v-uni-radio-group",["0"==t.info.times?a("v-uni-label",{staticClass:"radio"},[a("v-uni-radio",{attrs:{value:"0",checked:"0"==t.info.times}}),t._v("第一针")],1):t._e(),"1"==t.info.times?a("v-uni-label",{staticClass:"radio"},[a("v-uni-radio",{attrs:{value:"1",checked:"1"==t.info.times}}),t._v("第二针")],1):t._e()],1)],1):t._e(),a("v-uni-view",{},[t._v("姓名："),a("v-uni-input",{attrs:{type:"text",value:"",placeholder:"请输入您的姓名"},model:{value:t.yyInfo.name,callback:function(n){t.$set(t.yyInfo,"name",n)},expression:"yyInfo.name"}})],1),a("v-uni-view",{},[t._v("电话："),a("v-uni-input",{attrs:{type:"number",value:"",maxlength:"11",placeholder:"请输入您的手机号码"},model:{value:t.yyInfo.phone,callback:function(n){t.$set(t.yyInfo,"phone",n)},expression:"yyInfo.phone"}})],1),t.info.lx.indexOf("sfz")>=0?a("v-uni-view",{},[t._v("身份证："),a("v-uni-input",{attrs:{type:"text",value:"",placeholder:"请输入您的身份证"},model:{value:t.yyInfo.crsfz,callback:function(n){t.$set(t.yyInfo,"crsfz",n)},expression:"yyInfo.crsfz"}})],1):t._e(),t.info.lx.indexOf("sex")>=0?a("v-uni-view",{},[t._v("性别："),a("v-uni-radio-group",{on:{change:function(n){arguments[0]=n=t.$handleEvent(n),t.sexChange.apply(void 0,arguments)}}},[a("v-uni-label",{staticClass:"radio"},[a("v-uni-radio",{attrs:{value:"0",checked:"0"===t.yyInfo.sex}}),t._v("男")],1),a("v-uni-label",{staticClass:"radio"},[a("v-uni-radio",{attrs:{value:"1",checked:"1"===t.yyInfo.sex}}),t._v("女")],1)],1)],1):t._e(),a("v-uni-view",{},[t._v("时间："),a("v-uni-picker",{attrs:{mode:"multiSelector",value:t.yymultiIndex,range:t.yymultiArray},on:{columnchange:function(n){arguments[0]=n=t.$handleEvent(n),t.setpeople.apply(void 0,arguments)},change:function(n){arguments[0]=n=t.$handleEvent(n),t.getDate.apply(void 0,arguments)},click:function(n){arguments[0]=n=t.$handleEvent(n),t.getPeople.apply(void 0,arguments)}}},[a("v-uni-view",[t._v(t._s(t.yyInfo.date))])],1)],1),a("v-uni-view",{},[t._v("备注："),a("v-uni-textarea",{attrs:{value:"",placeholder:"若有其他说明,请备注"},model:{value:t.yyInfo.bz,callback:function(n){t.$set(t.yyInfo,"bz",n)},expression:"yyInfo.bz"}})],1)],1),a("v-uni-view",{staticClass:"bodyzy"},[a("v-uni-rich-text",{attrs:{nodes:t.mz.simpleIntro}})],1)],1),a("v-uni-view",{staticClass:"btn"},[a("v-uni-label",{on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.xycheck.apply(void 0,arguments)}}},[a("v-uni-checkbox",{staticStyle:{transform:"scale(0.8)"},attrs:{value:"xycheck",checked:t.info.xy}}),t._v("我已知晓并同意注意事项")],1),a("v-uni-button",{attrs:{type:"primary"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.save.apply(void 0,arguments)}}},[t._v("提交")])],1),t.mz.simpleIntro?a("uni-popup",{ref:"popup",attrs:{type:"center",maskClick:!1}},[a("uni-popup-dialog",{attrs:{type:"info",title:"注意事项",content:t.mz.simpleIntro,"before-close":!0},on:{confirm:function(n){arguments[0]=n=t.$handleEvent(n),t.iconfirm.apply(void 0,arguments)},close:function(n){arguments[0]=n=t.$handleEvent(n),t.iclose.apply(void 0,arguments)}}})],1):t._e()],1)},r=[]},"4fb3":function(t,n,a){"use strict";a.r(n);var e=a("b1e0"),s=a.n(e);for(var r in e)"default"!==r&&function(t){a.d(n,t,(function(){return e[t]}))}(r);n["default"]=s.a},b1e0:function(t,n,a){"use strict";(function(t){var e=a("4ea4");a("4160"),a("c975"),a("fb6a"),a("d3b7"),a("e25e"),a("ac1f"),a("5319"),a("1276"),a("498a"),a("159b"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0,a("96cf");var s=e(a("1da1")),r=e(a("2e26")),i=e(a("3632")),o=a("1507"),l=e(a("3a3d")),p=e(a("8771")),d=e(a("5b23")),c=e(a("20a3")),u={components:{uParse:l.default,uniPopup:p.default,uniPopupMessage:d.default,uniPopupDialog:c.default},data:function(){return{mz:{},info:{org:"",timeType:{},circle:6,endDate:"",lx:"null",type:"",xy:!1,times:"0"},yyRules:{},yyInfo:{id:"",name:"",crsfz:"",phone:"",date:"请选择预约时间",bz:"",child:"",sex:"",childsfz:"请选择儿童出生日期"},yyNumMap:{},nowPeoplelist:[],yymultiArray:[],yymultiIndex:[0,0],yyTime2:[],yyWeek:[],yyJzsj:""}},onLoad:function(t){(t.mzid||t.type)&&t.org?(t.lx&&(this.info.lx=t.lx),t.mzid?this.info.mzid=t.mzid:this.info.type=t.type,this.info.times=t.times?t.times:"0",this.info.org=t.org,uni.setStorageSync("org",{id:t.org}),this.getmz(this.info.type),this.getZdGz()):uni.reLaunch({url:"../index/index"})},methods:{bindDateChange:function(t){this.yyInfo.childsfz=t.target.value},timesChange:function(n){var a=this;this.info.times=n.detail.value,1==n.detail.value?uni.showModal({showCancel:!1,title:"提示",content:"第二针不需要预约，请按照接种单时间直接前往社区医院进行接种",confirmText:"预约第一针",success:function(t){a.info.times="0"},complete:function(){n.detail.value=0}}):t.log(0)},getDate:function(t){var n=this;return(0,s.default)(regeneratorRuntime.mark((function a(){var e;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,n.getyyStatus(n.yymultiArray[0][t.detail.value[0]],n.yymultiArray[1][t.detail.value[1]]);case 2:e=a.sent,e&&(n.yymultiIndex=t.detail.value,n.yyInfo.date=n.yymultiArray[0][n.yymultiIndex[0]]+" "+n.yymultiArray[1][n.yymultiIndex[1]].split("(")[0]);case 4:case"end":return a.stop()}}),a)})))()},getPeople:function(){var t=this;return(0,s.default)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:t.$request.get("/cms/number/getCounts",{data:{deptid:t.info.org,type:t.info.type}}).then((function(n){if(0==n.code){t.nowPeoplelist=n.data;var a={detail:{column:0,value:t.yymultiIndex[0]}};t.setpeople(a)}}));case 1:case"end":return n.stop()}}),n)})))()},setpeople:function(t){var n=this;if(0==t.detail.column){var a=this.yytimelist[t.detail.value].time,e=[],s=this.yymultiArray[0][t.detail.value].split("(")[0];a.forEach((function(t){var a=t+"";a.indexOf("(")>=0&&(a=a.split("(")[0]);var r=n.yyNumMap[a]?n.yyNumMap[a]:0;if(n.nowPeoplelist.length>0){for(var i=0;i<n.nowPeoplelist.length;i++){var o=n.nowPeoplelist[i],l=new Date(o.yyTime),p=s.replace(/\-/g,"/")+" "+a.split("~")[0];if(new Date(p).valueOf()==l.valueOf()){if(r<=o.counts){a+="(已满)";break}a+="("+(r-o.counts)+"人)";break}}-1==a.indexOf("(")&&(a=a+"("+r+"人)")}else a=a+"("+r+"人)";e.push(a)})),this.yymultiArray[1]=e}},xycheck:function(){this.info.xy=!this.info.xy,this.info.xy&&uni.pageScrollTo({scrollTop:1e3,duration:100})},iclose:function(){this.$refs.popup.close()},iconfirm:function(){this.$refs.popup.close()},getmz:function(t){var n=this,a={msg:"加载成功",code:0,data:{children:[],detailIntro:'<div class="WordSection1">\r\n\t<p class="MsoNormal" style="text-align:center;">\r\n\t\t<span style="font-size:14px;color:#E53333;">新冠疫苗预约（第一针）</span><span></span>\r\n\t</p>\r\n\t<p class="MsoNormal">\r\n\t\t<b>接种禁忌：</b><b></b> \r\n\t</p>\r\n\t<p class="MsoNormal">\r\n\t\t<span>1. </span>对疫苗中任何成分过敏者，既往发生过疫苗严重过敏反应（如过敏性休克、急性过敏反应、荨麻疹、皮肤湿疹、呼吸困难、血管神经性水肿或腹痛）者； <span></span> \r\n\t</p>\r\n\t<p class="MsoNormal" style="margin-left:0cm;text-indent:0cm;">\r\n\t\t<span>2. </span>患急性疾病、严重慢性疾病、慢性疾病的急性发病期和发热者； <span></span> \r\n\t</p>\r\n\t<p class="MsoNormal" style="margin-left:0cm;text-indent:0cm;">\r\n\t\t<span>3. </span>妊娠期妇女和哺乳期妇女，接种<span>3</span>个月内有生育计划； <span></span> \r\n\t</p>\r\n\t<p class="MsoNormal" style="margin-left:0cm;text-indent:0cm;">\r\n\t\t<span>4. </span>有惊厥、癫痫、脑病或精神疾病史或家族史；患未控制的癫痫和其他进行性神经系统疾病者，有格林巴利综合症病史者； <span></span> \r\n\t</p>\r\n\t<p class="MsoNormal" style="margin-left:0cm;text-indent:0cm;">\r\n\t\t<span>5. </span>已被诊断为患有先天性或获得性免疫缺陷、<span>HIV</span>感染、淋巴瘤、白血病或其他自身免疫疾病；<span></span> \r\n\t</p>\r\n\t<p class="MsoNormal" style="margin-left:0cm;text-indent:0cm;">\r\n\t\t<span>6. </span>已知或怀疑患有严重呼吸系统疾病、严重心血管疾病、肝肾疾病、恶性肿瘤者。 <span></span> \r\n\t</p>\r\n\t<p class="MsoNormal" style="margin-left:0cm;text-indent:0cm;">\r\n\t\t<span>7. </span>使用抗肿瘤药物等免疫调节剂者。 <span></span> \r\n\t</p>\r\n\t<p class="MsoNormal" style="margin-left:0cm;text-indent:0cm;">\r\n\t\t<span>8. </span>新冠病毒感染史者。 <span></span> \r\n\t</p>\r\n\t<p class="MsoNormal">\r\n\t\t<span>9. </span>临床医师或接种工作人员认为不适合接种者。<span></span> \r\n\t</p>\r\n\t<p class="MsoNormal">\r\n\t\t<b>接种须知：</b><b></b> \r\n\t</p>\r\n\t<p class="MsoNormal" style="margin-left:0cm;text-indent:0cm;">\r\n\t\t<span>1. </span>预约成功后需携带身份证、预约短信按预约时间前来接种，逾期需重新预约。<span></span> \r\n\t</p>\r\n\t<p class="MsoNormal" style="margin-left:0cm;text-indent:0cm;">\r\n\t\t<span>2.&nbsp;&nbsp;&nbsp;&nbsp; </span>进入医疗机构需正确佩戴一次性医用口罩，出示绿色苏康码。<span></span> \r\n\t</p>\r\n\t<p class="MsoNormal" style="margin-left:0cm;text-indent:0cm;">\r\n\t\t<span>3.&nbsp;&nbsp;&nbsp;&nbsp; </span>本次接种新冠疫苗是附条件上市，暂未正式上市。<span></span> \r\n\t</p>\r\n\t<p class="MsoNormal" style="margin-left:0cm;text-indent:0cm;">\r\n\t\t<span>4.&nbsp;&nbsp;&nbsp;&nbsp; </span>接种后应在接种单位的留观区域留观<span>30</span>分钟。<span></span> \r\n\t</p>\r\n\t<p class="MsoNormal" style="margin-left:0cm;text-indent:0cm;">\r\n\t\t<span>5.&nbsp;&nbsp;&nbsp;&nbsp; </span>注射过免疫球蛋白者，应间隔<span>1</span>个月以上再接种本疫苗，以免影响免疫效果。<span></span> \r\n\t</p>\r\n\t<p class="MsoNormal" style="margin-left:0cm;text-indent:0cm;">\r\n\t\t<span>6.&nbsp;&nbsp;&nbsp;&nbsp; </span>截至目前，任何疫苗的保护效果都不能达到<span>100%</span>。少数人接种后未产生保护力，或者仍然发病，与疫苗本身特性和受种者个人体质有关。<span></span> \r\n\t</p>\r\n\t<p class="MsoNormal">\r\n\t\t<span>7.</span>来前请仔细阅读下方健康询问单。<span></span> \r\n\t</p>\r\n\t<p class="MsoNormal" align="center" style="text-align:center;">\r\n\t\t成人预防接种健康状况询问表\r\n\t</p>\r\n\t<p class="MsoNormal" align="left">\r\n\t\t为保证疫苗接种安全和效果，在疫苗接种前，您需要配合接种单位如实回答以下相关健康问题。如对有些问题不清楚，可请医务人员说明，如有其它健康问题也请向医务人员主动说明，以便为您提出科学的疫苗接种建议。<span></span> \r\n\t</p>\r\n\t<table class="MsoNormalTable" border="1" cellspacing="0" cellpadding="0" style="border:none;">\r\n\t\t<tbody>\r\n\t\t\t<tr>\r\n\t\t\t\t<td width="412" valign="top" style="border:solid black 1.0pt;">\r\n\t\t\t\t\t<p class="MsoNormal">\r\n\t\t\t\t\t\t<span style="font-family:宋体;">健康状况</span><span></span> \r\n\t\t\t\t\t</p>\r\n\t\t\t\t</td>\r\n\t\t\t\t<td width="106" valign="top" style="border:solid black 1.0pt;">\r\n\t\t\t\t\t<p class="MsoNormal">\r\n\t\t\t\t\t\t<span style="font-family:宋体;">询问结果</span><span></span> \r\n\t\t\t\t\t</p>\r\n\t\t\t\t</td>\r\n\t\t\t\t<td width="110" valign="top" style="border:solid black 1.0pt;">\r\n\t\t\t\t\t<p class="MsoNormal">\r\n\t\t\t\t\t\t<span style="font-family:宋体;">备注</span><span></span> \r\n\t\t\t\t\t</p>\r\n\t\t\t\t</td>\r\n\t\t\t</tr>\r\n\t\t\t<tr>\r\n\t\t\t\t<td width="412" valign="top" style="border:solid black 1.0pt;">\r\n\t\t\t\t\t<p class="MsoNormal">\r\n\t\t\t\t\t\t<span>1</span><span style="font-family:宋体;">、近几天有无发热、咳嗽、腹泻等不适？</span><span></span> \r\n\t\t\t\t\t</p>\r\n\t\t\t\t</td>\r\n\t\t\t\t<td width="106" valign="top" style="border:solid black 1.0pt;">\r\n\t\t\t\t\t<p class="MsoNormal">\r\n\t\t\t\t\t\t<span>&nbsp;</span> \r\n\t\t\t\t\t</p>\r\n\t\t\t\t</td>\r\n\t\t\t\t<td width="110" valign="top" style="border:solid black 1.0pt;">\r\n\t\t\t\t\t<p class="MsoNormal">\r\n\t\t\t\t\t\t<span>&nbsp;</span> \r\n\t\t\t\t\t</p>\r\n\t\t\t\t</td>\r\n\t\t\t</tr>\r\n\t\t\t<tr>\r\n\t\t\t\t<td width="412" valign="top" style="border:solid black 1.0pt;">\r\n\t\t\t\t\t<p class="MsoNormal">\r\n\t\t\t\t\t\t<span>2</span><span style="font-family:宋体;">、既往对药物、食物、疫苗等有无过敏史？</span><span></span> \r\n\t\t\t\t\t</p>\r\n\t\t\t\t</td>\r\n\t\t\t\t<td width="106" valign="top" style="border:solid black 1.0pt;">\r\n\t\t\t\t\t<p class="MsoNormal">\r\n\t\t\t\t\t\t<span>&nbsp;</span> \r\n\t\t\t\t\t</p>\r\n\t\t\t\t</td>\r\n\t\t\t\t<td width="110" valign="top" style="border:solid black 1.0pt;">\r\n\t\t\t\t\t<p class="MsoNormal">\r\n\t\t\t\t\t\t<span>&nbsp;</span> \r\n\t\t\t\t\t</p>\r\n\t\t\t\t</td>\r\n\t\t\t</tr>\r\n\t\t\t<tr>\r\n\t\t\t\t<td width="412" valign="top" style="border:solid black 1.0pt;">\r\n\t\t\t\t\t<p class="MsoNormal">\r\n\t\t\t\t\t\t<span>3</span><span style="font-family:宋体;">、以往接种疫苗有无严重不良反应？</span><span></span> \r\n\t\t\t\t\t</p>\r\n\t\t\t\t</td>\r\n\t\t\t\t<td width="106" valign="top" style="border:solid black 1.0pt;">\r\n\t\t\t\t\t<p class="MsoNormal">\r\n\t\t\t\t\t\t<span>&nbsp;</span> \r\n\t\t\t\t\t</p>\r\n\t\t\t\t</td>\r\n\t\t\t\t<td width="110" valign="top" style="border:solid black 1.0pt;">\r\n\t\t\t\t\t<p class="MsoNormal">\r\n\t\t\t\t\t\t<span>&nbsp;</span> \r\n\t\t\t\t\t</p>\r\n\t\t\t\t</td>\r\n\t\t\t</tr>\r\n\t\t\t<tr>\r\n\t\t\t\t<td width="412" valign="top" style="border:solid black 1.0pt;">\r\n\t\t\t\t\t<p class="MsoNormal">\r\n\t\t\t\t\t\t<span>4</span><span style="font-family:宋体;">、有无惊厥、脑病或神经系统疾病？</span><span></span> \r\n\t\t\t\t\t</p>\r\n\t\t\t\t</td>\r\n\t\t\t\t<td width="106" valign="top" style="border:solid black 1.0pt;">\r\n\t\t\t\t\t<p class="MsoNormal">\r\n\t\t\t\t\t\t<span>&nbsp;</span> \r\n\t\t\t\t\t</p>\r\n\t\t\t\t</td>\r\n\t\t\t\t<td width="110" valign="top" style="border:solid black 1.0pt;">\r\n\t\t\t\t\t<p class="MsoNormal">\r\n\t\t\t\t\t\t<span>&nbsp;</span> \r\n\t\t\t\t\t</p>\r\n\t\t\t\t</td>\r\n\t\t\t</tr>\r\n\t\t\t<tr>\r\n\t\t\t\t<td width="412" valign="top" style="border:solid black 1.0pt;">\r\n\t\t\t\t\t<p class="MsoNormal">\r\n\t\t\t\t\t\t<span>5</span><span style="font-family:宋体;">、是否患有癌症、白血病、</span><span>HIV</span><span style="font-family:宋体;">感染、艾滋病或其它免疫</span> <span style="font-family:宋体;">系统疾病？</span><span></span> \r\n\t\t\t\t\t</p>\r\n\t\t\t\t</td>\r\n\t\t\t\t<td width="106" valign="top" style="border:solid black 1.0pt;">\r\n\t\t\t\t\t<p class="MsoNormal">\r\n\t\t\t\t\t\t<span>&nbsp;</span> \r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class="MsoNormal">\r\n\t\t\t\t\t\t<span>&nbsp;</span> \r\n\t\t\t\t\t</p>\r\n\t\t\t\t</td>\r\n\t\t\t\t<td width="110" valign="top" style="border:solid black 1.0pt;">\r\n\t\t\t\t\t<p class="MsoNormal">\r\n\t\t\t\t\t\t<span>&nbsp;</span> \r\n\t\t\t\t\t</p>\r\n\t\t\t\t</td>\r\n\t\t\t</tr>\r\n\t\t\t<tr>\r\n\t\t\t\t<td width="412" valign="top" style="border:solid black 1.0pt;">\r\n\t\t\t\t\t<p class="MsoNormal">\r\n\t\t\t\t\t\t<span>6</span><span style="font-family:宋体;">、有无哮喘、肺部疾病、心脏疾病、肾脏疾病、代谢性疾</span> <span style="font-family:宋体;">病或血液系统疾病？</span><span></span> \r\n\t\t\t\t\t</p>\r\n\t\t\t\t</td>\r\n\t\t\t\t<td width="106" valign="top" style="border:solid black 1.0pt;">\r\n\t\t\t\t\t<p class="MsoNormal">\r\n\t\t\t\t\t\t<span>&nbsp;</span> \r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class="MsoNormal">\r\n\t\t\t\t\t\t<span>&nbsp;</span> \r\n\t\t\t\t\t</p>\r\n\t\t\t\t</td>\r\n\t\t\t\t<td width="110" valign="top" style="border:solid black 1.0pt;">\r\n\t\t\t\t\t<p class="MsoNormal">\r\n\t\t\t\t\t\t<span>&nbsp;</span> \r\n\t\t\t\t\t</p>\r\n\t\t\t\t</td>\r\n\t\t\t</tr>\r\n\t\t\t<tr>\r\n\t\t\t\t<td width="412" valign="top" style="border:solid black 1.0pt;">\r\n\t\t\t\t\t<p class="MsoNormal">\r\n\t\t\t\t\t\t<span>7</span><span style="font-family:宋体;">、近</span><span>3</span><span style="font-family:宋体;">个月是否使用过可的松、强的松、其它类固醇、抗</span> <span style="font-family:宋体;">肿瘤药物或进行过放射性治疗？</span><span></span> \r\n\t\t\t\t\t</p>\r\n\t\t\t\t</td>\r\n\t\t\t\t<td width="106" valign="top" style="border:solid black 1.0pt;">\r\n\t\t\t\t\t<p class="MsoNormal">\r\n\t\t\t\t\t\t<span>&nbsp;</span> \r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class="MsoNormal">\r\n\t\t\t\t\t\t<span>&nbsp;</span> \r\n\t\t\t\t\t</p>\r\n\t\t\t\t</td>\r\n\t\t\t\t<td width="110" valign="top" style="border:solid black 1.0pt;">\r\n\t\t\t\t\t<p class="MsoNormal">\r\n\t\t\t\t\t\t<span>&nbsp;</span> \r\n\t\t\t\t\t</p>\r\n\t\t\t\t</td>\r\n\t\t\t</tr>\r\n\t\t\t<tr>\r\n\t\t\t\t<td width="412" valign="top" style="border:solid black 1.0pt;">\r\n\t\t\t\t\t<p class="MsoNormal">\r\n\t\t\t\t\t\t<span>8</span><span style="font-family:宋体;">、近</span><span>1</span><span style="font-family:宋体;">年是否接受过输血或免疫球蛋白制剂？</span><span></span> \r\n\t\t\t\t\t</p>\r\n\t\t\t\t</td>\r\n\t\t\t\t<td width="106" valign="top" style="border:solid black 1.0pt;">\r\n\t\t\t\t\t<p class="MsoNormal">\r\n\t\t\t\t\t\t<span>&nbsp;</span> \r\n\t\t\t\t\t</p>\r\n\t\t\t\t</td>\r\n\t\t\t\t<td width="110" valign="top" style="border:solid black 1.0pt;">\r\n\t\t\t\t\t<p class="MsoNormal">\r\n\t\t\t\t\t\t<span>&nbsp;</span> \r\n\t\t\t\t\t</p>\r\n\t\t\t\t</td>\r\n\t\t\t</tr>\r\n\t\t\t<tr>\r\n\t\t\t\t<td width="412" valign="top" style="border:solid black 1.0pt;">\r\n\t\t\t\t\t<p class="MsoNormal">\r\n\t\t\t\t\t\t<span>9</span><span style="font-family:宋体;">、最近</span><span>1</span><span style="font-family:宋体;">个月内是否接种过其它疫苗？</span><span></span> \r\n\t\t\t\t\t</p>\r\n\t\t\t\t</td>\r\n\t\t\t\t<td width="106" valign="top" style="border:solid black 1.0pt;">\r\n\t\t\t\t\t<p class="MsoNormal">\r\n\t\t\t\t\t\t<span>&nbsp;</span> \r\n\t\t\t\t\t</p>\r\n\t\t\t\t</td>\r\n\t\t\t\t<td width="110" valign="top" style="border:solid black 1.0pt;">\r\n\t\t\t\t\t<p class="MsoNormal">\r\n\t\t\t\t\t\t<span>&nbsp;</span> \r\n\t\t\t\t\t</p>\r\n\t\t\t\t</td>\r\n\t\t\t</tr>\r\n\t\t\t<tr>\r\n\t\t\t\t<td width="412" valign="top" style="border:solid black 1.0pt;">\r\n\t\t\t\t\t<p class="MsoNormal">\r\n\t\t\t\t\t\t<span>10</span><span style="font-family:宋体;">、是否有怀孕或近期有备孕计划？</span><span></span> \r\n\t\t\t\t\t</p>\r\n\t\t\t\t</td>\r\n\t\t\t\t<td width="106" valign="top" style="border:solid black 1.0pt;">\r\n\t\t\t\t\t<p class="MsoNormal">\r\n\t\t\t\t\t\t<span>&nbsp;</span> \r\n\t\t\t\t\t</p>\r\n\t\t\t\t</td>\r\n\t\t\t\t<td width="110" valign="top" style="border:solid black 1.0pt;">\r\n\t\t\t\t\t<p class="MsoNormal">\r\n\t\t\t\t\t\t<span>&nbsp;</span> \r\n\t\t\t\t\t</p>\r\n\t\t\t\t</td>\r\n\t\t\t</tr>\r\n\t\t\t<tr>\r\n\t\t\t\t<td width="412" valign="top" style="border:solid black 1.0pt;">\r\n\t\t\t\t\t<p class="MsoNormal">\r\n\t\t\t\t\t\t<span>11</span><span style="font-family:宋体;">、有无其它健康问题？</span><span></span> \r\n\t\t\t\t\t</p>\r\n\t\t\t\t</td>\r\n\t\t\t\t<td width="106" valign="top" style="border:solid black 1.0pt;">\r\n\t\t\t\t\t<p class="MsoNormal">\r\n\t\t\t\t\t\t<span>&nbsp;</span> \r\n\t\t\t\t\t</p>\r\n\t\t\t\t</td>\r\n\t\t\t\t<td width="110" valign="top" style="border:solid black 1.0pt;">\r\n\t\t\t\t\t<p class="MsoNormal">\r\n\t\t\t\t\t\t<span>&nbsp;</span> \r\n\t\t\t\t\t</p>\r\n\t\t\t\t</td>\r\n\t\t\t</tr>\r\n\t\t\t<tr>\r\n\t\t\t\t<td width="412" valign="top" style="border:solid black 1.0pt;">\r\n\t\t\t\t\t<p class="MsoNormal">\r\n\t\t\t\t\t\t<span>12</span><span style="font-family:宋体;">、</span><span>14</span><span style="font-family:宋体;">天内是否有新冠疫情国内中高风险地区旅居史？</span><span></span> \r\n\t\t\t\t\t</p>\r\n\t\t\t\t</td>\r\n\t\t\t\t<td width="106" valign="top" style="border:solid black 1.0pt;">\r\n\t\t\t\t\t<p class="MsoNormal">\r\n\t\t\t\t\t\t<span>&nbsp;</span> \r\n\t\t\t\t\t</p>\r\n\t\t\t\t</td>\r\n\t\t\t\t<td width="110" valign="top" style="border:solid black 1.0pt;">\r\n\t\t\t\t\t<p class="MsoNormal">\r\n\t\t\t\t\t\t<span>&nbsp;</span> \r\n\t\t\t\t\t</p>\r\n\t\t\t\t</td>\r\n\t\t\t</tr>\r\n\t\t\t<tr>\r\n\t\t\t\t<td width="412" valign="top" style="border:solid black 1.0pt;">\r\n\t\t\t\t\t<p class="MsoNormal">\r\n\t\t\t\t\t\t<span>13</span><span style="font-family:宋体;">、</span><span>28</span><span style="font-family:宋体;">天内是否有境外旅居史（澳门除外）？</span><span></span> \r\n\t\t\t\t\t</p>\r\n\t\t\t\t</td>\r\n\t\t\t\t<td width="106" valign="top" style="border:solid black 1.0pt;">\r\n\t\t\t\t\t<p class="MsoNormal">\r\n\t\t\t\t\t\t<span>&nbsp;</span> \r\n\t\t\t\t\t</p>\r\n\t\t\t\t</td>\r\n\t\t\t\t<td width="110" valign="top" style="border:solid black 1.0pt;">\r\n\t\t\t\t\t<p class="MsoNormal">\r\n\t\t\t\t\t\t<span>&nbsp;</span> \r\n\t\t\t\t\t</p>\r\n\t\t\t\t</td>\r\n\t\t\t</tr>\r\n\t\t</tbody>\r\n\t</table>\r\n</div>\r\n<br />',icon:"https://cdn.jsdelivr.net/gh/cooleephone/sqyy/pic/07019d30-df50-42ad-8afe-ee271f1730de.jpeg",id:102,name:"新冠疫苗",status:1,tag:null,type:17}};0==a.code&&1==a.data.status?(this.mz={id:a.data.id,type:a.data.type,name:a.data.name,tag:a.data.tag,icon:a.data.icon.indexOf("http")>=0?a.data.icon:this.$myprop.imgUrlPre+a.data.icon,simpleIntro:a.data.detailIntro,css:'background:url("'+this.$myprop.imgUrlPre+a.data.icon+'") cover'},this.info.type=a.data.type,uni.setNavigationBarTitle({title:a.data.name}),this.info.mzid=a.data.id,this.getTime2(this.info.org,this.mz.type)):uni.showModal({showCancel:!1,title:"提示",content:"暂未开通此功能",success:function(t){uni.reLaunch({url:"../index/index?org="+n.info.org})}})},getZdGz:function(){var t=this,n={msg:"操作成功",code:0,data:[{dictLabel:"1-50",dictValue:"age",remark:""}]};0==n.code&&null!=n.data&&void 0!=n.data&&n.data.forEach((function(n){if("age"==n.dictValue){var a=n.dictLabel.split("-");t.yyRules["age"]={max:a[1],min:a[0]}}else n.dictValue}))},testRules:function(t){for(var n in t){if("age"==n&&void 0!=t[n].min&&void 0!=t[n].max){var a=this.GetAge(this.yyInfo.crsfz);if(a>=t[n].min&&a<=t[n].max)return!0;uni.showToast({title:"仅支持年龄在"+t[n].min+"-"+t[n].max+"之间",icon:"none",duration:3e3})}return!1}return!0},GetAge:function(t){var n=(t+"").length,a="";if(18==n&&(a=t.substr(6,4)+"/"+t.substr(10,2)+"/"+t.substr(12,2)),15==n){var e="";e=t.charAt(6)+t.charAt(7),a=parseInt(e)<10?"20"+t.substr(6,2)+"/"+t.substr(8,2)+"/"+t.substr(10,2):"19"+t.substr(6,2)+"/"+t.substr(8,2)+"/"+t.substr(10,2)}var s=new Date(a),r=new Date,i=r.getFullYear()-s.getFullYear();return(r.getMonth()<s.getMonth()||r.getMonth()==s.getMonth()&&r.getDate()<s.getDate())&&i--,i},save:function(){var t=this;return(0,s.default)(regeneratorRuntime.mark((function n(){var a,e,s,r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(uni.showLoading({title:"保存中……",mask:!0}),a=uni.getSystemInfoSync(),t.info.xy){n.next=5;break}return uni.showToast({title:"请同意注意事项",icon:"none",duration:3e3}),n.abrupt("return",!1);case 5:if(""!=t.yyInfo.name.trim()&&""!=t.yyInfo.phone.trim()){n.next=9;break}uni.showToast({title:"姓名、手机号码必填",icon:"none",duration:3e3}),n.next=43;break;case 9:if(11==t.yyInfo.phone.trim().length){n.next=13;break}uni.showToast({title:"手机号码格式不正确",icon:"none",duration:3e3}),n.next=43;break;case 13:if(""!=t.yyInfo.crsfz.trim()||!(t.info.lx.indexOf("sfz")>=0||t.info.lx.indexOf("child")>=0)){n.next=17;break}uni.showToast({title:"请填写身份证",icon:"none",duration:3e3}),n.next=43;break;case 17:if((0,o.IDCardCheck)(t.yyInfo.crsfz.trim())){n.next=21;break}uni.showToast({icon:"none",title:"身份证格式不正确"}),n.next=43;break;case 21:if("请选择预约时间"!=t.yyInfo.date){n.next=25;break}uni.showToast({title:"请选择预约时间",icon:"none",duration:3e3}),n.next=43;break;case 25:if(!("请选择儿童出生日期"==t.yyInfo.childsfz&&t.info.lx.indexOf("child")>=0)){n.next=29;break}uni.showToast({title:"请选择儿童出生日期",icon:"none",duration:3e3}),n.next=43;break;case 29:if(!(""==t.yyInfo.sex&&t.info.lx.indexOf("sex")>=0)){n.next=33;break}uni.showToast({title:"请选择性别",icon:"none",duration:3e3}),n.next=43;break;case 33:if(t.testRules(t.yyRules)){n.next=37;break}return n.abrupt("return");case 37:return n.next=39,t.getyyStatus(t.yymultiArray[0][t.yymultiIndex[0]],t.yymultiArray[1][t.yymultiIndex[1]]);case 39:e=n.sent,s=t.yyInfo.date,r=a.deviceId,e?(!1,t.$request.get("/cms/number/getTime",{data:{deptid:t.info.org,type:t.mz.type}}).then((function(n){if(0==n.code){var e=!0;if(null!=n.data[0].other2&&n.data[0].other2.length>0&&new Date<new Date(n.data[0].other2))return uni.showToast({title:"还未到预约时间（"+n.data[0].other2+"）",mask:!0,icon:"none",duration:2500}),!1;if(""!=n.data[0].qztime){var o=n.data[0].qztime.substring(0,10).replace(/\-/g,"/"),l=s.substring(0,10).replace(/\-/g,"/");e=new Date(l+" 0:0:0")>=new Date(o+" 0:0:0")}if(e){!0;var p=t.yyInfo.phone.trim()+"-"+t.yyInfo.crsfz.trim()+"-"+(t.yyInfo.date.substring(0,10)+" "+t.yyInfo.date.substring(15,20)).trim()+"-"+r,d=(0,i.default)(p);t.$request.post("/cms/ptmz/yyxgym",{data:{deptid:t.info.org,ksId:t.info.mzid,username:t.yyInfo.name,phone:t.yyInfo.phone,sfz:t.yyInfo.crsfz,date:t.yyInfo.date.substring(0,10)+" "+t.yyInfo.date.substring(15,20),stime:t.yyInfo.date.substring(15,20),etime:t.yyInfo.date.substring(21,26),timetype:t.info.timeType[t.yyInfo.date.substring(15,26)],sex:t.yyInfo.sex,remark:t.yyInfo.bz,childname:t.yyInfo.child,childsfz:t.yyInfo.childsfz,auth:a.model+a.deviceId,sign:d},header:{"content-type":"application/x-www-form-urlencoded",etag:r}}).then((function(n){if(0==n.code){var a=t;uni.showModal({showCancel:!1,title:"预约成功！",content:"重要提示:因个人原因未能参加接种，请及时取消预约，未取消也未参加接种者一周内将禁止预约。",confirmText:"查看预约情况",success:function(t){uni.redirectTo({url:"../search/search?phone="+a.yyInfo.phone})}})}else uni.showToast({title:n.msg,icon:"none",duration:3e3})}))}else uni.hideLoading(),uni.showModal({title:"提示",content:"当前预约时间有误，请刷新重试",mask:!0,icon:"none",showCancel:!1,success:function(t){uni.navigateBack()}})}else uni.showToast({title:n.msg,icon:"none",duration:3e3})}))):(uni.showToast({title:"当前时间预约已满",icon:"none"}),t.yyInfo.date="请选择预约时间");case 43:case"end":return n.stop()}}),n)})))()},sexChange:function(t){this.yyInfo.sex=t.detail.value},getYyStatus:function(t,n){var a=this;this.$request.get("/cms/card/getFwzt",{data:{deptid:t,type:n}}).then((function(n){0==n.code&&1==n.data.yxbz?(a.tjInfo.name=n.data.name,a.tjInfo.info=n.data.simpleIntro,a.info.cardid=n.data.id):uni.showModal({showCancel:!1,title:"提示",content:"暂未开通此功能",success:function(n){uni.reLaunch({url:"../index/index?org="+t})}})}))},getTime2:function(t,n){var a=this;this.$request.get("/cms/number/getTime",{data:{deptid:t,type:n}}).then((function(n){if(0==n.code)if(n.data.length>0){var e=0;n.data.forEach((function(t,n){if(0==n){var s=t.other;e=s.substr(s.indexOf("-")+1,s.indexOf("|")-2)}var i=r.default.getTimeAna(t.other,t.qztime),o=r.default.addCalu(a.yytimelist,i);a.yytimelist=o;var l=t.other.split("|");l[2].replace(/-/g,"~").split(",").forEach((function(n){a.info.timeType[n]=t.timetype,a.yyNumMap[n]=t.num}))})),a.yytimelist=a.yytimelist.slice(0,e),a.gettimelist(),a.getPeople()}else uni.showModal({showCancel:!1,title:"提示",content:"暂未开通此功能",success:function(n){uni.reLaunch({url:"../index/index?org="+t})}})}))},getyyStatus:function(t,n){var a=this;return new Promise((function(e,s){n=n.split("(")[0];var r=n.split("~");a.$request.get("/cms/number/getStatus",{data:{date:t.substring(0,t.indexOf("(")),deptid:a.info.org,sdate:r[0],edate:r[1],timetype:a.info.timeType[n],type:a.mz.type}}).then((function(t){0==t.code?e(!0):(""!=t.msg?uni.showToast({title:t.msg,icon:"none"}):uni.showToast({title:"当前时间预约已满",icon:"none"}),a.yyInfo.date="请选择预约时间",e(!1))}))}))},gettimelist:function(t){var n=this;null!=t&&void 0!=t||(t=0);var a=[];if(this.yytimelist.forEach((function(t){a.push(t.day)})),a.length>0){var e=[];this.yytimelist[t].time.forEach((function(t){e.push(t+"("+n.yyNumMap[t]+"人)")})),this.yymultiArray=[a,e]}else uni.showModal({showCancel:!1,title:"提示",content:"未开放预约",success:function(t){uni.reLaunch({url:"../index/index?org="+n.info.org})}})}},computed:{noData:function(){return""},imgprop:function(){var t={lozyLoad:!0,domain:""};return t}}};n.default=u}).call(this,a("5a52")["default"])},bf8a:function(t,n,a){"use strict";a.r(n);var e=a("4052"),s=a("4fb3");for(var r in s)"default"!==r&&function(t){a.d(n,t,(function(){return s[t]}))}(r);a("1ca4");var i,o=a("f0c5"),l=Object(o["a"])(s["default"],e["b"],e["c"],!1,null,"7115a19f",null,!1,e["a"],i);n["default"]=l.exports},c47b:function(t,n,a){var e=a("24fb");n=e(!1),n.push([t.i,'@charset "UTF-8";\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */uni-page-body[data-v-7115a19f]{background-color:#fff}.content[data-v-7115a19f]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.top[data-v-7115a19f]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-flow:row nowrap;flex-flow:row nowrap;-webkit-justify-content:space-around;justify-content:space-around;-webkit-box-align:center;-webkit-align-items:center;align-items:center;width:100%;padding:%?20?% 0 %?50?%;border-radius:0 0 %?30?% %?30?%;position:relative;height:%?360?%}.top .body[data-v-7115a19f]{background:hsla(0,0%,100%,.8);position:relative;padding:%?20?% 0;width:%?750?%}.top .body .title[data-v-7115a19f]{color:#333;font-size:%?50?%;text-align:center}.top .body .tag[data-v-7115a19f]{margin-top:%?10?%;font-size:%?26?%;color:#333;padding:0 %?40?%;max-height:%?160?%;overflow:scroll}.top uni-image[data-v-7115a19f]{width:100%;height:%?360?%;position:absolute;top:0;left:0}.intro[data-v-7115a19f]{width:%?680?%;background-color:#fff;-webkit-box-shadow:0 0 %?30?% #cfcfcf;box-shadow:0 0 %?30?% #cfcfcf;border-radius:%?10?%;margin-top:%?-50?%;padding-bottom:%?60?%;margin-bottom:%?290?%}.intro .title[data-v-7115a19f]{padding:%?30?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.intro .title .more[data-v-7115a19f]{font-size:%?30?%}.intro .body[data-v-7115a19f]{padding:0 %?30?% %?30?%;font-size:%?35?%;color:#999}.intro .body uni-input[data-v-7115a19f]{color:#000;border-bottom:1px solid #666;padding:%?10?% 0;font-size:%?35?%}.intro .body uni-textarea[data-v-7115a19f]{border:1px dashed #dadada;border-bottom:1px solid #666;font-size:%?35?%;padding:%?10?%;height:5em;width:%?600?%}.intro .body uni-picker uni-view[data-v-7115a19f]{border-bottom:1px solid #666}.intro .body .uni-label-pointer[data-v-7115a19f]{margin-right:%?80?%}.intro .body > uni-view[data-v-7115a19f]{margin-top:1em}.intro .bodyzy[data-v-7115a19f]{border-top:%?10?% solid #e6e6e6;border-radius:%?5?% %?5?%;padding:%?35?% %?30?%;font-size:%?30?%;color:#999}.btn[data-v-7115a19f]{width:%?680?%;padding-left:%?35?%;padding-right:%?35?%;position:fixed;bottom:0;padding-bottom:1em;padding-top:.5em;z-index:100;overflow:hidden;background-color:#ececec}.btn uni-label[data-v-7115a19f]{margin-top:%?50?%;font-size:%?30?%;color:#007aff}.btn uni-button[data-v-7115a19f]{margin-top:%?20?%}body.?%PAGE?%[data-v-7115a19f]{background-color:#fff}',""]),t.exports=n}}]);