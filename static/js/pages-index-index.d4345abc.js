(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-index"],{"090c":function(t,e,a){"use strict";a.r(e);var i=a("4b22"),n=a("8a2d");for(var o in n)"default"!==o&&function(t){a.d(e,t,(function(){return n[t]}))}(o);a("8ff0");var r,s=a("f0c5"),d=Object(s["a"])(n["default"],i["b"],i["c"],!1,null,"7e320aea",null,!1,i["a"],r);e["default"]=d.exports},"4b22":function(t,e,a){"use strict";a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return o})),a.d(e,"a",(function(){return i}));var i={uniNoticeBar:a("942c").default},n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"content",style:t.mainHeight},[a("v-uni-view",{staticClass:"head"},[a("v-uni-image",{attrs:{src:t.hospital.banner}})],1),a("uni-notice-bar",{attrs:{single:"true",text:t.hospital.name+" 欢迎您"}}),a("v-uni-view",{staticClass:"moreFw"},[t._e(),a("v-uni-view",{staticClass:"body"},t._l(t.menuList,(function(e,i){return a("v-uni-view",{key:i,staticClass:"item",class:1==e.lx?"sclass":"hclass",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.toXm(e)}}},[a("v-uni-view",[a("v-uni-view",{staticClass:"title",domProps:{innerHTML:t._s(e.name)}}),a("v-uni-view",{staticClass:"tag",domProps:{innerHTML:t._s(e.tag)}})],1),a("v-uni-image",{class:e.icon.indexOf("/icon/sea.png")>0?"cx":"",attrs:{src:e.icon}})],1)})),1)],1),t.newsInfo.show?a("v-uni-view",{staticClass:"moreFw mynote"},[a("v-uni-view",{staticClass:"title"},[t._v("预约说明"),a("v-uni-view",[t._v("("+t._s(t.newsInfo.time)+")")])],1),a("v-uni-view",{staticClass:"body"},[a("v-uni-rich-text",{attrs:{nodes:t.newsInfo.content}})],1)],1):t._e(),a("v-uni-view",{staticClass:"foot"},[a("v-uni-text",[t._v("南京瑞达锋范")]),t._v("提供技术支持")],1)],1)},o=[]},"80f2":function(t,e,a){"use strict";(function(t){var i=a("4ea4");a("4160"),a("159b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i(a("3a3d")),o={data:function(){return{hospital:{banner:"../../static/banner.jpg"},menuList:[],myPhone:"",newsInfo:{show:!1,title:"",time:"",content:""}}},onLoad:function(t){t.org||(t.org="207"),t.org&&(uni.setStorageSync("org",t.org),this.hospital.id=t.org,this.gethospital(t.org));var e=uni.getStorageSync("phone");e&&(this.myPhone=e)},onShow:function(){var t=uni.getStorageSync("org");t&&t.id?this.gethospital(t.id):uni.setNavigationBarTitle({title:t.deptName})},methods:{gethospital:function(t){var e=this;this.$request.get("/cms/dept/getDept",{data:{deptid:t}}).then((function(t){if(0==t.code){e.hospital.logo=t.data.logo,e.hospital.name=t.data.deptName,e.hospital.id=t.data.deptId;var a=JSON.parse(t.data.leader);a.banner&&(e.hospital.banner=a.banner),e.menuList.length=0,a.menu.forEach((function(t){e.menuList.push(t)})),a.notice&&e.getyyyyxx(e.hospital.id),uni.setNavigationBarTitle({title:t.data.deptName})}else uni.showToast({title:"未获取到医院，请重新尝试",icon:"none"})}))},getNavYm:function(t){var e=this;this.$request.get("/cms/ym/getYmDl",{data:{deptid:t}}).then((function(t){0==t.code&&t.data.forEach((function(t,a){a<7?e.ymlist.push({id:t.id,icon:e.$myprop.imgUrlPre+t.icon,name:t.name,tag:t.tag,type:1==t.type?"推荐":2==t.type?"Hot":""}):e.ymlist.push({id:0,icon:"/static/icon/more.png",name:"更多",tag:"",type:""})}))}))},toXm:function(t){t.title&&t.title.length>1&&uni.setNavigationBarTitle({title:t.title}),uni.navigateTo({url:t.url+"?org="+this.hospital.id+(t.param&&t.param.length>3?"&"+t.param:""),success:function(){}})},getyyyyxx:function(t){var e=this;this.$request.get("/xxfb/getList",{data:{deptid:t,pageno:1,pagesize:1}}).then((function(t){if(0==t.code&&t.data.list.length>0){var a=t.data.list[0];e.newsInfo={id:a.id,title:a.title,time:a.createTime,show:!0,content:a.content}}}))}},computed:{mainHeight:function(){var e=500;uni.getSystemInfo({success:function(t){e=t.windowHeight}});return t.log(e),"min-height:"+e+"px"},noData:function(){return""},imgprop:function(){var t={lozyLoad:!0,domain:""};return t}},components:{uParse:n.default}};e.default=o}).call(this,a("5a52")["default"])},"8a2d":function(t,e,a){"use strict";a.r(e);var i=a("80f2"),n=a.n(i);for(var o in i)"default"!==o&&function(t){a.d(e,t,(function(){return i[t]}))}(o);e["default"]=n.a},"8ff0":function(t,e,a){"use strict";var i=a("c24f"),n=a.n(i);n.a},aa3d:function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.content[data-v-7e320aea]{width:%?750?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-flow:column nowrap;flex-flow:column nowrap;-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start;-webkit-box-align:center;-webkit-align-items:center;align-items:center;background-color:#efefef}.head1[data-v-7e320aea]{padding:%?50?% %?10?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-flow:row nowrap;flex-flow:row nowrap;-webkit-justify-content:space-around;justify-content:space-around;width:%?730?%;background-color:#fff}.head1 .hislogo[data-v-7e320aea]{height:%?150?%;width:%?150?%}.head1 .content[data-v-7e320aea]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:start;-webkit-align-items:flex-start;align-items:flex-start;-webkit-align-content:center;align-content:center;background-color:#fff;font-size:%?35?%;width:%?500?%}.uni-noticebar[data-v-7e320aea]{margin-bottom:0}.head[data-v-7e320aea]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-flow:row nowrap;flex-flow:row nowrap;-webkit-justify-content:space-around;justify-content:space-around;width:%?750?%;background-color:#fff;height:%?300?%}.head uni-image[data-v-7e320aea]{width:100%;height:100%}.navBar[data-v-7e320aea]{margin-top:%?20?%;width:%?750?%;background-color:#fff;border-radius:%?10?%}.navBar > .title[data-v-7e320aea]{padding:%?20?% %?30?%;border-bottom:1px solid #efefef}.navBar .navBarbody[data-v-7e320aea]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-flow:row wrap;flex-flow:row wrap}.navBar .navBarbody .item[data-v-7e320aea]{width:%?155?%;margin:%?15?%}.navBar .navBarbody .item uni-image[data-v-7e320aea]{width:%?150?%;height:%?150?%}.navBar .navBarbody .item .title[data-v-7e320aea]{font-size:%?30?%;text-align:center;margin-top:0}.navBar .navBarbody .item .tag[data-v-7e320aea]{font-size:%?25?%;text-align:center;color:#aaa}.navBar .navBarbody .item[data-v-7e320aea]:nth-child(4n-3){padding-left:%?9?%}.moreFw[data-v-7e320aea]{width:%?730?%;margin-top:0;padding:%?30?% %?10?% %?3?%;background-color:#fff}.moreFw > .title[data-v-7e320aea]{margin-left:%?20?%;margin-bottom:%?20?%}.moreFw .body[data-v-7e320aea]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-flow:row wrap;flex-flow:row wrap;width:100%}.moreFw .body .item[data-v-7e320aea]{width:%?340?%;position:relative;margin-left:%?18?%;margin-bottom:%?30?%;height:%?200?%;background-color:#fff;box-shadow:0 0 10px #eee}.moreFw .body .item uni-image[data-v-7e320aea]{width:%?140?%;height:%?150?%;position:absolute;z-index:1;right:%?20?%;top:%?25?%}.moreFw .body .item .cx[data-v-7e320aea]{width:%?200?%;height:%?200?%;right:0;top:0}.moreFw .body .item > uni-view[data-v-7e320aea]{z-index:100;position:absolute;top:%?50?%;left:%?15?%}.moreFw .body .item > uni-view .title[data-v-7e320aea]{font-size:%?35?%;text-align:center}.moreFw .body .item > uni-view .tag[data-v-7e320aea]{font-size:%?25?%;color:#aaa}.moreFw .body .item.sclass[data-v-7e320aea]{width:%?700?%}.moreFw .body .item.sclass uni-image[data-v-7e320aea]{right:1.5em;top:0}.moreFw .body .item.sclass > uni-view[data-v-7e320aea]{top:%?50?%;left:1.5em}.moreFw .body .item.sclass > uni-view .title[data-v-7e320aea]{font-size:%?40?%}.moreFw .body .item.sclass > uni-view .tag[data-v-7e320aea]{font-size:%?25?%;color:#aaa}.mynote .title[data-v-7e320aea]{width:%?670?%;margin:0 auto;font-size:18px;background-color:#efefef;color:#f50;font-weight:600px;padding:%?10?% %?20?%;border-radius:%?10?% %?10?% 0 0;border:1px solid #efefef}.mynote .title uni-view[data-v-7e320aea]{font-size:%?12?%;float:right;color:#6b6b6b;margin-top:%?10?%}.mynote .body[data-v-7e320aea]{width:%?670?%;margin:0 auto;font-size:18px;padding:%?10?% %?20?%;border-radius:0 0 %?10?% %?10?%;border:1px solid #efefef;border-top:none;min-height:%?100?%}.foot[data-v-7e320aea]{-webkit-align-self:flex-end;align-self:flex-end;-webkit-box-flex:1;-webkit-flex-grow:1;flex-grow:1;background-color:#fff;width:%?750?%;font-size:%?25?%;color:#aaa;padding:1em 0;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-flow:row nowrap;flex-flow:row nowrap;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:end;-webkit-align-items:flex-end;align-items:flex-end}.foot uni-text[data-v-7e320aea]{color:#0081ff;padding-right:.5em}',""]),t.exports=e},c24f:function(t,e,a){var i=a("aa3d");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("443519bd",i,!0,{sourceMap:!1,shadowMode:!1})}}]);