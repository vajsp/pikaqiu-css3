webpackJsonp([1],{38:function(n,t,e){e(81);var r=e(22)(e(40),e(93),"data-v-25c9ff86",null);n.exports=r.exports},40:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=e(23),o=e.n(r),i=e(45),s=e.n(i),a=e(44),l=e.n(a),d=e(92),c=e.n(d),u=e(91),p=e.n(u),f=e(80);e.n(f);t.default={name:"app",components:{StyleEditor:c.a,ResumeEditor:p.a},data:function(){return{interval:20,currentStyle:"",enableHtml:!1,fullStyle:["/*\n* 大家好，我是渣渣辉\n* 今天使用css画一个可爱的皮卡丘\n*/\n\n/* 首先给所有元素加上过渡效果 */\n* {\n  transition: all .3s;\n}\n/* 白色背景太单调了，我们来点背景 */\nhtml {\n  color: rgb(222,222,222);\n  background: rgb(0,43,54);\n}\n::-webkit-scrollbar {\n    width: 0;   /* 滚动条宽度为0 */\n    height: 0; /* 滚动条高度为0 */\n    display: none; /* 滚动条隐藏 */\n}\n/* 文字离边框太近了 */\n.styleEditor {\n  padding: .5em;\n  border: 1px solid;\n  margin: .5em;\n  overflow: auto;\n  width: 45vw; height: 90vh;\n}\n/* 代码高亮 */\n.token.selector{ color: rgb(133,153,0); }\n.token.property{ color: rgb(187,137,0); }\n.token.punctuation{ color: yellow; }\n.token.function{ color: rgb(42,161,152); }\n\n/* 加点 3D 效果呗 */\nhtml{\n  perspective: 1000px;\n}\n.styleEditor {\n  position: fixed; left: 0; top: 0;\n  -webkit-transition: none;\n  transition: none;\n  -webkit-transform: rotateY(10deg) translateZ(-100px) ;\n          transform: rotateY(10deg) translateZ(-100px) ;\n}\n\n/* 接下来我给自己准备一个画板 */\n.resumeEditor{\n  position: fixed; right: 0; top: 0;\n  padding: .5em;  margin: .5em;\n  width: 48vw; height: 90vh;\n  border: 1px solid;\n  background: white; color: #222;\n  overflow: auto;\n  background: #FFE600;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 100vh;\n}\n\n/* 首先初始化样式 */\n* {\n  margin: 0;\n  padding: 0;\n}\n\n* {\n  box-sizing: border-box;\n}\n\n*::before {\n  box-sizing: border-box;\n}\n\n*::after {\n  box-sizing: border-box;\n}\n\n#container {\n  height: 300px;\n  width: 460px;\n  position: relative;\n}\n\n/* 我们开始画鼻子 */\n#nose {\n  position: absolute;\n  left: 50%;\n  margin-left: -15px;\n  top: 100px;\n  border: 15px solid transparent;\n  z-index: 2;\n  border-radius: 50%;\n  border-top-color: black;\n\n}\n\n\n/* 我们开始画眼睛 */\n.eye {\n  position: absolute;\n  width: 60px;\n  height: 60px;\n  background: #2E2E2E;\n  border: 2px solid black;\n  border-radius: 30px;\n  top: 65px;\n}\n\n.eye::before {\n  content: '';\n  display: block;\n  width: 30px;\n  height: 30px;\n  background: white;\n  border-radius: 15px;\n  top: 0;\n  position: absolute;\n  left: 6px;\n  border: 2px solid black;\n}\n\n.eye-left {\n  right: 50%;\n  margin-right: 90px;\n}\n\n.eye-right {\n  left: 50%;\n  margin-left: 90px;\n}\n\n/* 开始画嘴巴 */\n.upperLip {\n  position: absolute;\n  top: 110px;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  z-index: 1;\n}\n\n.upperLip::before {\n  content: '';\n  display: block;\n  width: 80px;\n  height: 30px;\n  border: 3px solid black;\n  border-top: none;\n  border-right: none;\n  border-bottom-left-radius: 50px 30px;\n  transform: rotateZ(-20deg);\n  background: #FFE600;\n}\n\n.upperLip::after {\n  content: '';\n  display: block;\n  width: 80px;\n  height: 30px;\n  border: 3px solid black;\n  border-top: none;\n  border-left: none;\n  border-bottom-right-radius: 50px 30px;\n  transform: rotateZ(20deg);\n  background: #FFE600;\n}\n\n.lowerLip-wrapper {\n  position: absolute;\n  width: 100%;\n  top: 120px;\n  height: 200px;\n  overflow: hidden;\n}\n\n.lowerLip {\n  position: absolute;\n  border: 5px solid black;\n  width: 200px;\n  bottom: 0;\n  height: 1800px;\n  left: 50%;\n  transform: translateX(-50%);\n  border-top: none;\n  border-bottom-left-radius: 100px 900px;\n  border-bottom-right-radius: 100px 900px;\n  border-top-left-radius: 100px 100px;\n  border-top-right-radius: 100px 100px;\n  background: #FF485F;\n  box-shadow: inset 0 1610px 0 20px #9B000A;\n}\n\n/* 开始画脸蛋 */\n.face {\n  border: 3px solid black;\n  position: absolute;\n  width: 90px;\n  height: 90px;\n  border-radius: 45px;\n  top: 160px;\n  background: #FF0000;\n\n}\n\n.face-left {\n  right: 50%;\n  margin-right: 130px;\n}\n\n.face-right {\n  left: 50%;\n  margin-left: 130px;\n}\n\n/* 最后小鼻子动起来 */\n@keyframes xxx {\n  0% {\n      transform: rotateZ(-3deg);\n  }\n  100% {\n      transform: rotateZ(3deg);\n  }\n}\n\n#nose {\n  animation: 0.1s xxx 0s infinite alternate;\n}\n\n/* 好了，一只可爱的皮卡丘送给你 */\n\n\n"],currentMarkdown:"",fullMarkdown:""}},created:function(){this.makeResume()},methods:{makeResume:function(){function n(){return t.apply(this,arguments)}var t=l()(s.a.mark(function n(){return s.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.progressivelyShowStyle(0);case 2:case"end":return n.stop()}},n,this)}));return n}(),showHtml:function(){var n=this;return new o.a(function(t,e){n.enableHtml=!0,t()})},progressivelyShowStyle:function(n){var t=this;return new o.a(function(e,r){var o=t.interval,i=l()(s.a.mark(function t(){var r,a,l,d,c,u=this;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(r=this.fullStyle[n]){t.next=3;break}return t.abrupt("return");case 3:a=this.fullStyle.filter(function(t,e){return e<=n}).map(function(n){return n.length}).reduce(function(n,t){return n+t},0),l=a-r.length,this.currentStyle.length<a?(d=this.currentStyle.length-l,c=r.substring(d,d+1)||" ",this.currentStyle+=c,"\n"===r.substring(d-1,d)&&this.$refs.styleEditor&&this.$nextTick(function(){u.$refs.styleEditor.goBottom()}),setTimeout(i,o)):e();case 6:case"end":return t.stop()}},t,this)})).bind(t);i()})},progressivelyShowResume:function(){var n=this;return new o.a(function(t,e){var r=n.fullMarkdown.length,o=n.interval;!function e(){if(n.currentMarkdown.length<r){n.currentMarkdown=n.fullMarkdown.substring(0,n.currentMarkdown.length+1);n.currentMarkdown[n.currentMarkdown.length-1];"\n"===n.currentMarkdown[n.currentMarkdown.length-2]&&n.$refs.resumeEditor&&n.$nextTick(function(){return n.$refs.resumeEditor.goBottom()}),setTimeout(e,o)}else t()}()})}}}},41:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=e(84),o=e.n(r);t.default={props:["markdown","enableHtml"],name:"ResumeEditor",computed:{result:function(){return this.enableHtml?o()(this.markdown):this.markdown}},methods:{goBottom:function(){this.$refs.container.scrollTop=1e5},goTop:function(){this.$refs.container.scrollTop=0}}}},42:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=e(85),o=e.n(r);t.default={name:"Editor",props:["code"],computed:{highlightedCode:function(){return o.a.highlight(this.code,o.a.languages.css)},codeInStyleTag:function(){return"<style>"+this.code+"</style>"}},methods:{goBottom:function(){this.$refs.container.scrollTop=1e5}}}},43:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=e(39),o=e(38),i=e.n(o);document.documentElement.clientWidth;new r.a({el:"#app",render:function(n){return n(i.a)}})},80:function(n,t){},81:function(n,t){},82:function(n,t){},83:function(n,t){},91:function(n,t,e){e(82);var r=e(22)(e(41),e(94),"data-v-627e1b10",null);n.exports=r.exports},92:function(n,t,e){e(83);var r=e(22)(e(42),e(95),"data-v-74de3720",null);n.exports=r.exports},93:function(n,t){n.exports={render:function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{attrs:{id:"app"}},[e("StyleEditor",{ref:"styleEditor",attrs:{code:n.currentStyle}}),n._v(" "),e("ResumeEditor",{ref:"resumeEditor",attrs:{markdown:n.currentMarkdown,enableHtml:n.enableHtml}})],1)},staticRenderFns:[]}},94:function(n,t){n.exports={render:function(){var n=this,t=n.$createElement;return(n._self._c||t)("div",{ref:"container",staticClass:"resumeEditor",class:{htmlMode:n.enableHtml}},[n._m(0)])},staticRenderFns:[function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{attrs:{id:"container"}},[e("div",{attrs:{id:"nose"}}),n._v(" "),e("div",{staticClass:"eye eye-left"}),n._v(" "),e("div",{staticClass:"eye eye-right"}),n._v(" "),e("div",{staticClass:"upperLip"}),n._v(" "),e("div",{staticClass:"lowerLip-wrapper"},[e("div",{staticClass:"lowerLip"})]),n._v(" "),e("div",{staticClass:"face face-left"}),n._v(" "),e("div",{staticClass:"face face-right"})])}]}},95:function(n,t){n.exports={render:function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{ref:"container",staticClass:"styleEditor"},[e("div",{staticClass:"code",domProps:{innerHTML:n._s(n.codeInStyleTag)}}),n._v(" "),e("pre",{domProps:{innerHTML:n._s(n.highlightedCode)}})])},staticRenderFns:[]}}},[43]);
//# sourceMappingURL=app.0dd0847d7695c84784b1.js.map