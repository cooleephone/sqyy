(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-util-signature"],{"204f":function(t,n,i){"use strict";var e;i.d(n,"b",(function(){return a})),i.d(n,"c",(function(){return o})),i.d(n,"a",(function(){return e}));var a=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("v-uni-view",{staticClass:"signa"},[i("v-uni-view",{staticClass:"btn"},[i("v-uni-view",{staticClass:"back-btn",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.back.apply(void 0,arguments)}}},[t._v("返回")]),i("v-uni-view",{staticClass:"cancel-btn",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.clear.apply(void 0,arguments)}}},[t._v("重写")]),i("v-uni-view",{staticClass:"save-btn",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.save.apply(void 0,arguments)}}},[t._v("保存")])],1),i("v-uni-canvas",{staticClass:"canvas",style:{width:t.width,height:t.height},attrs:{"disable-scroll":"true","canvas-id":"designature"},on:{touchstart:function(n){arguments[0]=n=t.$handleEvent(n),t.starts.apply(void 0,arguments)},touchmove:function(n){arguments[0]=n=t.$handleEvent(n),t.moves.apply(void 0,arguments)},touchend:function(n){arguments[0]=n=t.$handleEvent(n),t.end.apply(void 0,arguments)}}})],1)},o=[]},"37ff":function(t,n,i){"use strict";var e=i("ba4f"),a=i.n(e);a.a},"3d18":function(t,n,i){"use strict";i.r(n);var e=i("204f"),a=i("401e");for(var o in a)"default"!==o&&function(t){i.d(n,t,(function(){return a[t]}))}(o);i("37ff");var s,r=i("f0c5"),c=Object(r["a"])(a["default"],e["b"],e["c"],!1,null,"04fc5b9e",null,!1,e["a"],s);n["default"]=c.exports},"401e":function(t,n,i){"use strict";i.r(n);var e=i("dfff"),a=i.n(e);for(var o in e)"default"!==o&&function(t){i.d(n,t,(function(){return e[t]}))}(o);n["default"]=a.a},ba4f:function(t,n,i){var e=i("d1a4");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var a=i("4f06").default;a("3fc38a26",e,!0,{sourceMap:!1,shadowMode:!1})},d1a4:function(t,n,i){var e=i("24fb");n=e(!1),n.push([t.i,'@charset "UTF-8";\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.signa[data-v-04fc5b9e]{position:relative;overflow:hidden;background-color:#fbfbfb;height:100vh;width:100vw}.signa .canvas[data-v-04fc5b9e]{background-color:#fff;position:absolute;z-index:9999;left:45px;border:1px solid #d6d6d6}.signa .btn[data-v-04fc5b9e]{height:100vh;position:fixed;background-color:#007aff;font-size:%?32?%}.signa .btn > uni-view[data-v-04fc5b9e]{width:27vh;position:fixed;left:%?36?%;-webkit-transform:rotate(90deg);transform:rotate(90deg);margin-left:-13vh;height:%?65?%;line-height:%?65?%;border-radius:3px;text-align:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;z-index:999}.signa .btn .back-btn[data-v-04fc5b9e]{margin-top:14vh;border:%?1?% solid #a9a1a1;color:#666}.signa .btn .cancel-btn[data-v-04fc5b9e]{border:%?1?% solid #a9a1a1;margin-top:48vh;color:#666}.signa .btn .save-btn[data-v-04fc5b9e]{margin-top:80vh;background:#a91f52;border:%?1?% solid #a91f52;color:#fff}',""]),t.exports=n},dfff:function(t,n,i){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i={data:function(){return{resultUrl:"",dom:null,line:[],width:"0px",height:"0px",radius:0,oW:500,oH:250,oQ:1,oParams:"img"}},created:function(){var t=this;uni.getSystemInfo({success:function(n){t.width=n.windowWidth-50+"px",t.height=n.windowHeight-15+"px",t.oW=n.windowWidth-50,t.oH=n.windowHeight-15}}),this.dom=uni.createCanvasContext("designature",this)},onLoad:function(t){t.oW&&(this.oW=t.oW),t.oH&&(this.oH=t.oH),t.oQ&&(this.oQ=t.oQ/100),t.oParams&&(this.oParams=t.oParams)},methods:{end:function(t){},distance:function(t,n){var i=n.x-t.x,e=n.y-t.y;return Math.sqrt(i*i+e*e)},starts:function(n){t.log(n),this.line.push({points:[{time:(new Date).getTime(),x:n.touches[0].x,y:n.touches[0].y,dis:0}]});var i={x:n.touches[0].x,y:n.touches[0].y};this.currentPoint=i,this.drawer(this.line[this.line.length-1])},moves:function(t){var n={x:t.touches[0].x,y:t.touches[0].y};this.lastPoint=this.currentPoint,this.currentPoint=n,this.line[this.line.length-1].points.push({time:(new Date).getTime(),x:t.touches[0].x,y:t.touches[0].y,dis:this.distance(this.currentPoint,this.lastPoint)}),this.drawer(this.line[this.line.length-1])},drawer:function(t){var n,i,e,a,o,s,r,c,d=.5,u=0;if(t.points.length>2){var h=t.points[t.points.length-3],l=t.points[t.points.length-2],f=t.points[t.points.length-1];r=l.x,c=l.y,n=h.x,e=h.y,i=f.x,a=f.y;var v=0;u=l.time-h.time+(f.time-l.time),v=l.dis+h.dis+f.dis;var p=this.dom;Math.min(u/v*this.linePressure+this.lineMin,this.lineMax);o=(r-Math.pow(1-d,2)*n-Math.pow(d,2)*i)/(2*d*(1-d)),s=(c-Math.pow(1-d,2)*e-Math.pow(d,2)*a)/(2*d*(1-d)),p.setLineCap("round"),p.beginPath(),p.setStrokeStyle("black"),p.setLineWidth(5),p.moveTo(n,e),p.quadraticCurveTo(o,s,i,a),p.stroke(),p.draw(!0)}},clear:function(){this.dom.clearRect(0,0,1e3,1e3),this.dom.draw()},back:function(){uni.navigateBack()},save:function(){var n=this;uni.canvasToTempFilePath({canvasId:"designature",fileType:"png",quality:n.oQ,destWidth:n.oW,destHeight:n.oH,success:function(t){var i=getCurrentPages(),e=i[i.length-2];e.$vm[n.oParams]=t.tempFilePath,uni.navigateBack({delta:1})},fail:function(n){t.log(n)}},this)}}};n.default=i}).call(this,i("5a52")["default"])}}]);