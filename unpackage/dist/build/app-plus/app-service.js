(this["webpackJsonp"]=this["webpackJsonp"]||[]).push([["app-service"],{"0de9":function(t,e,n){"use strict";function i(t){var e=Object.prototype.toString.call(t);return e.substring(8,e.length-1)}function a(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];var a=e.map(function(t){var e=Object.prototype.toString.call(t);if("[object object]"===e.toLowerCase())try{t="---BEGIN:JSON---"+JSON.stringify(t)+"---END:JSON---"}catch(a){t="[object object]"}else if(null===t)t="---NULL---";else if(void 0===t)t="---UNDEFINED---";else{var n=i(t).toUpperCase();t="NUMBER"===n||"BOOLEAN"===n?"---BEGIN:"+n+"---"+t+"---END:"+n+"---":String(t)}return t}),r="";if(a.length>1){var s=a.pop();r=a.join("---COMMA---"),0===s.indexOf(" at ")?r+=s:r+="---COMMA---"+s}else r=a[0];return r}Object.defineProperty(e,"__esModule",{value:!0}),e.default=a},1165:function(t,e,n){"use strict";n.r(e);var i=n("159d");for(var a in i)"default"!==a&&function(t){n.d(e,t,function(){return i[t]})}(a);var r,s,o,u,c=n("f0c5"),l=Object(c["a"])(i["default"],r,s,!1,null,null,null,!1,o,u);e["default"]=l.exports},1179:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{timer:"",nowTime:"",hours:"",minutes:"",seconds:"",dot:!0,pre:!0}},onShow:function(){this.time()},onHide:function(){this.clear()},onLoad:function(){},onPullDownRefresh:function(){setTimeout(function(){uni.stopPullDownRefresh()},1e3)},methods:{noPre:function(){this.pre=!0,plus.navigator.setFullscreen(!1),plus.screen.unlockOrientation()},all:function(){uni.setKeepScreenOn({success:function(e){console.log(t(e," at pages\\index\\index.vue:48"))},keepScreenOn:!0}),plus.navigator.setFullscreen(!0),plus.screen.lockOrientation("landscape"),this.pre=!1},clear:function(){clearInterval(this.timer)},pad:function(t){return t<=9?"0"+t:t},time:function(){var t=this,e=null;this.timer=setInterval(function(){e=new Date,t.seconds=t.pad(e.getSeconds()),t.hours!==e.getHours()&&(t.hours=t.pad(e.getHours())),t.minutes!==e.getMinutes()&&(t.minutes=t.pad(e.getHours())),t.dot=!t.dot},999)}}};e.default=n}).call(this,n("0de9")["default"])},"159d":function(t,e,n){"use strict";n.r(e);var i=n("8dce"),a=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,function(){return i[t]})}(r);e["default"]=a.a},"6dff":function(t,e,n){"use strict";n.r(e);var i=n("1179"),a=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,function(){return i[t]})}(r);e["default"]=a.a},8189:function(t){t.exports={_from:"@dcloudio/uni-stat@alpha",_id:"@dcloudio/uni-stat@2.0.0-alpha-25120200103005",_inBundle:!1,_integrity:"sha512-nYoIrRV2e5o/vzr6foSdWi3Rl2p0GuO+LPY3JctyY6uTKgPnuH99d7aL/QQdJ1SacQjBWO+QGK1qankN7oyrWw==",_location:"/@dcloudio/uni-stat",_phantomChildren:{},_requested:{type:"tag",registry:!0,raw:"@dcloudio/uni-stat@alpha",name:"@dcloudio/uni-stat",escapedName:"@dcloudio%2funi-stat",scope:"@dcloudio",rawSpec:"alpha",saveSpec:null,fetchSpec:"alpha"},_requiredBy:["#USER","/","/@dcloudio/vue-cli-plugin-uni"],_resolved:"https://registry.npmjs.org/@dcloudio/uni-stat/-/uni-stat-2.0.0-alpha-25120200103005.tgz",_shasum:"a77a63481f36474f3e86686868051219d1bb12df",_spec:"@dcloudio/uni-stat@alpha",_where:"/Users/guoshengqiang/Documents/dcloud-plugins/alpha/uniapp-cli",author:"",bugs:{url:"https://github.com/dcloudio/uni-app/issues"},bundleDependencies:!1,deprecated:!1,description:"",devDependencies:{"@babel/core":"^7.5.5","@babel/preset-env":"^7.5.5",eslint:"^6.1.0",rollup:"^1.19.3","rollup-plugin-babel":"^4.3.3","rollup-plugin-clear":"^2.0.7","rollup-plugin-commonjs":"^10.0.2","rollup-plugin-copy":"^3.1.0","rollup-plugin-eslint":"^7.0.0","rollup-plugin-json":"^4.0.0","rollup-plugin-node-resolve":"^5.2.0","rollup-plugin-replace":"^2.2.0","rollup-plugin-uglify":"^6.0.2"},files:["dist","package.json","LICENSE"],gitHead:"6be187a3dfe15f95dd6146d9fec08e1f81100987",homepage:"https://github.com/dcloudio/uni-app#readme",license:"Apache-2.0",main:"dist/index.js",name:"@dcloudio/uni-stat",repository:{type:"git",url:"git+https://github.com/dcloudio/uni-app.git",directory:"packages/uni-stat"},scripts:{build:"NODE_ENV=production rollup -c rollup.config.js",dev:"NODE_ENV=development rollup -w -c rollup.config.js"},version:"2.0.0-alpha-25120200103005"}},"850e":function(t,e,n){"use strict";n.r(e);var i=n("d01d"),a=n("6dff");for(var r in a)"default"!==r&&function(t){n.d(e,t,function(){return a[t]})}(r);var s,o=n("f0c5"),u=Object(o["a"])(a["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],s);e["default"]=u.exports},"8bbf":function(t,e){t.exports=Vue},"8dce":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={onLaunch:function(){console.log(t("App Launch"," at App.vue:4"))},onShow:function(){console.log(t("App Show"," at App.vue:7"))},onHide:function(){console.log(t("App Hide"," at App.vue:10"))}};e.default=n}).call(this,n("0de9")["default"])},9053:function(t,e,n){"use strict";n("c68e"),n("921b");var i=r(n("8bbf")),a=r(n("1165"));function r(t){return t&&t.__esModule?t:{default:t}}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},i=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),i.forEach(function(e){o(t,e,n[e])})}return t}function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}i.default.config.productionTip=!1,a.default.mpType="app";var u=new i.default(s({},a.default));u.$mount()},9197:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={pages:{},globalStyle:{}};e.default=i},"921b":function(t,e,n){"use strict";var i=n("8189");function a(t,e){return!e||"object"!==typeof e&&"function"!==typeof e?r(t):e}function r(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function s(t){return s=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},s(t)}function o(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&u(t,e)}function u(t,e){return u=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},u(t,e)}function c(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function l(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function p(t,e,n){return e&&l(t.prototype,e),n&&l(t,n),t}var f=i.version,d="https://tongji.dcloud.io/uni/stat",h="https://tongji.dcloud.io/uni/stat.gif",v=1800,g=300,_=10,y="__DC_STAT_UUID",m="__DC_UUID_VALUE";function S(){var t="";if("n"===k()){try{t=plus.runtime.getDCloudId()}catch(e){t=""}return t}try{t=uni.getStorageSync(y)}catch(e){t=m}if(!t){t=Date.now()+""+Math.floor(1e7*Math.random());try{uni.setStorageSync(y,t)}catch(e){uni.setStorageSync(y,m)}}return t}var b=function(t){var e=Object.keys(t),n=e.sort(),i={},a="";for(var r in n)i[n[r]]=t[n[r]],a+=n[r]+"="+t[n[r]]+"&";return{sign:"",options:a.substr(0,a.length-1)}},D=function(t){var e="";for(var n in t)e+=n+"="+t[n]+"&";return e.substr(0,e.length-1)},w=function(){return parseInt((new Date).getTime()/1e3)},k=function(){var t={"app-plus":"n",h5:"h5","mp-weixin":"wx","mp-alipay":"ali","mp-baidu":"bd","mp-toutiao":"tt","mp-qq":"qq"};return t["app-plus"]},O=function(){var t="";return"wx"!==k()&&"qq"!==k()||uni.canIUse("getAccountInfoSync")&&(t=uni.getAccountInfoSync().miniProgram.appId||""),t},T=function(){return"n"===k()?plus.runtime.version:""},q=function(){var t=k(),e="";return"n"===t&&(e=plus.runtime.channel),e},R=function(t){var e=k(),n="";return t||("wx"===e&&(n=uni.getLaunchOptionsSync().scene),n)},N="First__Visit__Time",j="Last__Visit__Time",$=function(){var t=uni.getStorageSync(N),e=0;return t?e=t:(e=w(),uni.setStorageSync(N,e),uni.removeStorageSync(j)),e},P=function(){var t=uni.getStorageSync(j),e=0;return e=t||"",uni.setStorageSync(j,w()),e},I="__page__residence__time",E=0,A=0,x=function(){return E=w(),"n"===k()&&uni.setStorageSync(I,w()),E},C=function(){return A=w(),"n"===k()&&(E=uni.getStorageSync(I)),A-E},H="Total__Visit__Count",L=function(){var t=uni.getStorageSync(H),e=1;return t&&(e=t,e++),uni.setStorageSync(H,e),e},U=function(t){var e={};for(var n in t)e[n]=encodeURIComponent(t[n]);return e},B=0,M=0,J=function(){var t=(new Date).getTime();return B=t,M=0,t},V=function(){var t=(new Date).getTime();return M=t,t},F=function(t){var e=0;if(0!==B&&(e=M-B),e=parseInt(e/1e3),e=e<1?1:e,"app"===t){var n=e>g;return{residenceTime:e,overtime:n}}if("page"===t){var i=e>v;return{residenceTime:e,overtime:i}}return{residenceTime:e}},G=function(){var t=getCurrentPages(),e=t[t.length-1],n=e.$vm;return"bd"===k()?n.$mp&&n.$mp.page.is:n.$scope&&n.$scope.route||n.$mp&&n.$mp.page.route},W=function(t){var e=getCurrentPages(),n=e[e.length-1],i=n.$vm,a=t._query,r=a&&"{}"!==JSON.stringify(a)?"?"+JSON.stringify(a):"";return t._query="","bd"===k()?i.$mp&&i.$mp.page.is+r:i.$scope&&i.$scope.route+r||i.$mp&&i.$mp.page.route+r},K=function(t){return!!("page"===t.mpType||t.$mp&&"page"===t.$mp.mpType||"page"===t.$options.mpType)},Q=function(t,e){return t?"string"!==typeof t?(console.error("uni.report [eventName] 参数类型错误,只能为 String 类型"),!0):t.length>255?(console.error("uni.report [eventName] 参数长度不能大于 255"),!0):"string"!==typeof e&&"object"!==typeof e?(console.error("uni.report [options] 参数类型错误,只能为 String 或 Object 类型"),!0):"string"===typeof e&&e.length>255?(console.error("uni.report [options] 参数长度不能大于 255"),!0):"title"===t&&"string"!==typeof e?(console.error("uni.report [eventName] 参数为 title 时，[options] 参数只能为 String 类型"),!0):void 0:(console.error("uni.report 缺少 [eventName] 参数"),!0)},Y=n("9197").default,z=n("bdda").default||n("bdda"),X=uni.getSystemInfoSync(),Z=function(){function t(){c(this,t),this.self="",this._retry=0,this._platform="",this._query={},this._navigationBarTitle={config:"",page:"",report:"",lt:""},this._operatingTime=0,this._reportingRequestData={1:[],11:[]},this.__prevent_triggering=!1,this.__licationHide=!1,this.__licationShow=!1,this._lastPageRoute="",this.statData={uuid:S(),ut:k(),mpn:O(),ak:z.appid,usv:f,v:T(),ch:q(),cn:"",pn:"",ct:"",t:w(),tt:"",p:"android"===X.platform?"a":"i",brand:X.brand||"",md:X.model,sv:X.system.replace(/(Android|iOS)\s/,""),mpsdk:X.SDKVersion||"",mpv:X.version||"",lang:X.language,pr:X.pixelRatio,ww:X.windowWidth,wh:X.windowHeight,sw:X.screenWidth,sh:X.screenHeight}}return p(t,[{key:"_applicationShow",value:function(){if(this.__licationHide){V();var t=F("app");if(t.overtime){var e={path:this._lastPageRoute,scene:this.statData.sc};this._sendReportRequest(e)}this.__licationHide=!1}}},{key:"_applicationHide",value:function(t,e){this.__licationHide=!0,V();var n=F();J();var i=W(this);this._sendHideRequest({urlref:i,urlref_ts:n.residenceTime},e)}},{key:"_pageShow",value:function(){var t=W(this),e=G();if(this._navigationBarTitle.config=Y&&Y.pages[e]&&Y.pages[e].titleNView&&Y.pages[e].titleNView.titleText||Y&&Y.pages[e]&&Y.pages[e].navigationBarTitleText||"",this.__licationShow)return J(),this.__licationShow=!1,void(this._lastPageRoute=t);V(),this._lastPageRoute=t;var n=F("page");if(n.overtime){var i={path:this._lastPageRoute,scene:this.statData.sc};this._sendReportRequest(i)}J()}},{key:"_pageHide",value:function(){if(!this.__licationHide){V();var t=F("page");return this._sendPageRequest({url:this._lastPageRoute,urlref:this._lastPageRoute,urlref_ts:t.residenceTime}),void(this._navigationBarTitle={config:"",page:"",report:"",lt:""})}}},{key:"_login",value:function(){this._sendEventRequest({key:"login"},0)}},{key:"_share",value:function(){this._sendEventRequest({key:"share"},0)}},{key:"_payment",value:function(t){this._sendEventRequest({key:t},0)}},{key:"_sendReportRequest",value:function(t){this._navigationBarTitle.lt="1";var e=t.query&&"{}"!==JSON.stringify(t.query)?"?"+JSON.stringify(t.query):"";this.statData.lt="1",this.statData.url=t.path+e||"",this.statData.t=w(),this.statData.sc=R(t.scene),this.statData.fvts=$(),this.statData.lvts=P(),this.statData.tvc=L(),"n"===k()?this.getProperty():this.getNetworkInfo()}},{key:"_sendPageRequest",value:function(t){var e=t.url,n=t.urlref,i=t.urlref_ts;this._navigationBarTitle.lt="11";var a={ak:this.statData.ak,uuid:this.statData.uuid,lt:"11",ut:this.statData.ut,url:e,tt:this.statData.tt,urlref:n,urlref_ts:i,ch:this.statData.ch,usv:this.statData.usv,t:w(),p:this.statData.p};this.request(a)}},{key:"_sendHideRequest",value:function(t,e){var n=t.urlref,i=t.urlref_ts,a={ak:this.statData.ak,uuid:this.statData.uuid,lt:"3",ut:this.statData.ut,urlref:n,urlref_ts:i,ch:this.statData.ch,usv:this.statData.usv,t:w(),p:this.statData.p};this.request(a,e)}},{key:"_sendEventRequest",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.key,n=void 0===e?"":e,i=t.value,a=void 0===i?"":i,r=this._lastPageRoute,s={ak:this.statData.ak,uuid:this.statData.uuid,lt:"21",ut:this.statData.ut,url:r,ch:this.statData.ch,e_n:n,e_v:"object"===typeof a?JSON.stringify(a):a.toString(),usv:this.statData.usv,t:w(),p:this.statData.p};this.request(s)}},{key:"getNetworkInfo",value:function(){var t=this;uni.getNetworkType({success:function(e){t.statData.net=e.networkType,t.getLocation()}})}},{key:"getProperty",value:function(){var t=this;plus.runtime.getProperty(plus.runtime.appid,function(e){t.statData.v=e.version||"",t.getNetworkInfo()})}},{key:"getLocation",value:function(){var t=this;z.getLocation?uni.getLocation({type:"wgs84",geocode:!0,success:function(e){e.address&&(t.statData.cn=e.address.country,t.statData.pn=e.address.province,t.statData.ct=e.address.city),t.statData.lat=e.latitude,t.statData.lng=e.longitude,t.request(t.statData)}}):(this.statData.lat=0,this.statData.lng=0,this.request(this.statData))}},{key:"request",value:function(t,e){var n=this,i=w(),a=this._navigationBarTitle;t.ttn=a.page,t.ttpj=a.config,t.ttc=a.report;var r=this._reportingRequestData;if("n"===k()&&(r=uni.getStorageSync("__UNI__STAT__DATA")||{}),r[t.lt]||(r[t.lt]=[]),r[t.lt].push(t),"n"===k()&&uni.setStorageSync("__UNI__STAT__DATA",r),!(C()<_)||e){var s=this._reportingRequestData;"n"===k()&&(s=uni.getStorageSync("__UNI__STAT__DATA")),x();var o=[],u=[],c=[],l=function(t){var e=s[t];e.forEach(function(e){var n=D(e);0===t?o.push(n):3===t?c.push(n):u.push(n)})};for(var p in s)l(p);o.push.apply(o,u.concat(c));var d={usv:f,t:i,requests:JSON.stringify(o)};this._reportingRequestData={},"n"===k()&&uni.removeStorageSync("__UNI__STAT__DATA"),"h5"!==t.ut?"n"!==k()||"a"!==this.statData.p?this._sendRequest(d):setTimeout(function(){n._sendRequest(d)},200):this.imageRequest(d)}}},{key:"_sendRequest",value:function(t){var e=this;uni.request({url:d,method:"POST",data:t,success:function(){},fail:function(n){++e._retry<3&&setTimeout(function(){e._sendRequest(t)},1e3)}})}},{key:"imageRequest",value:function(t){var e=new Image,n=b(U(t)).options;e.src=h+"?"+n}},{key:"sendEvent",value:function(t,e){Q(t,e)||("title"!==t?this._sendEventRequest({key:t,value:"object"===typeof e?JSON.stringify(e):e},1):this._navigationBarTitle.report=e)}}]),t}(),tt=function(t){function e(){var t;return c(this,e),t=a(this,s(e).call(this)),t.instance=null,"function"===typeof uni.addInterceptor&&(t.addInterceptorInit(),t.interceptLogin(),t.interceptShare(!0),t.interceptRequestPayment()),t}return o(e,t),p(e,null,[{key:"getInstance",value:function(){return this.instance||(this.instance=new e),this.instance}}]),p(e,[{key:"addInterceptorInit",value:function(){var t=this;uni.addInterceptor("setNavigationBarTitle",{invoke:function(e){t._navigationBarTitle.page=e.title}})}},{key:"interceptLogin",value:function(){var t=this;uni.addInterceptor("login",{complete:function(){t._login()}})}},{key:"interceptShare",value:function(t){var e=this;t?uni.addInterceptor("share",{success:function(){e._share()},fail:function(){e._share()}}):e._share()}},{key:"interceptRequestPayment",value:function(){var t=this;uni.addInterceptor("requestPayment",{success:function(){t._payment("pay_success")},fail:function(){t._payment("pay_fail")}})}},{key:"report",value:function(t,e){this.self=e,x(),this.__licationShow=!0,this._sendReportRequest(t,!0)}},{key:"load",value:function(t,e){if(!e.$scope&&!e.$mp){var n=getCurrentPages();e.$scope=n[n.length-1]}this.self=e,this._query=t}},{key:"show",value:function(t){this.self=t,K(t)?this._pageShow(t):this._applicationShow(t)}},{key:"ready",value:function(t){}},{key:"hide",value:function(t){this.self=t,K(t)?this._pageHide(t):this._applicationHide(t,!0)}},{key:"error",value:function(t){this._platform;var e="";e=t.message?t.stack:JSON.stringify(t);var n={ak:this.statData.ak,uuid:this.statData.uuid,lt:"31",ut:this.statData.ut,ch:this.statData.ch,mpsdk:this.statData.mpsdk,mpv:this.statData.mpv,v:this.statData.v,em:e,usv:this.statData.usv,t:w(),p:this.statData.p};this.request(n)}}]),e}(Z),et=tt.getInstance(),nt=!1,it={onLaunch:function(t){et.report(t,this)},onReady:function(){et.ready(this)},onLoad:function(t){if(et.load(t,this),this.$scope&&this.$scope.onShareAppMessage){var e=this.$scope.onShareAppMessage;this.$scope.onShareAppMessage=function(t){return et.interceptShare(!1),e.call(this,t)}}},onShow:function(){nt=!1,et.show(this)},onHide:function(){nt=!0,et.hide(this)},onUnload:function(){nt?nt=!1:et.hide(this)},onError:function(t){et.error(t)}};function at(){var t=n("8bbf");(t.default||t).mixin(it),uni.report=function(t,e){et.sendEvent(t,e)}}at()},bdda:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={appid:"__UNI__A80FF57"};e.default=i},c68e:function(t,e,n){"use strict";uni.restoreGlobal&&uni.restoreGlobal(weex,plus,setTimeout,clearTimeout,setInterval,clearInterval),__definePage("pages/index/index",function(){return Vue.extend(n("850e").default)})},d01d:function(t,e,n){"use strict";var i,a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{staticClass:t._$s(0,"sc","content"),attrs:{_i:0}},[n("view",{staticClass:t._$s(1,"sc","status_bar"),attrs:{_i:1}}),n("view",{class:t._$s(2,"c",t.pre?"preView":"all"),attrs:{_i:2}},[n("image",{class:t._$s(3,"c",t.pre?"preLogo":"logo"),attrs:{_i:3},on:{click:t.noPre}}),n("text",{directives:[{name:"show",rawName:"v-show",value:t._$s(4,"v-show",t.hours),expression:"_$s(4,'v-show',hours)"}],staticClass:t._$s(4,"sc","time"),attrs:{_i:4}},[t._v(t._$s(4,"t0",t._s(t.hours))),n("text",{staticClass:t._$s(5,"sc","dot"),attrs:{_i:5}}),t._v(t._$s(4,"t0",t._s(t.minutes))),n("text",{staticClass:t._$s(6,"sc","seconds"),attrs:{_i:6}},[t._v(t._$s(6,"t0",t._s(t.seconds)))])])]),n("button",{attrs:{_i:7},on:{click:t.all}})])},r=[];n.d(e,"b",function(){return a}),n.d(e,"c",function(){return r}),n.d(e,"a",function(){return i})},f0c5:function(t,e,n){"use strict";function i(t,e,n,i,a,r,s,o,u,c){var l,p="function"===typeof t?t.options:t;if(u&&(p.components=Object.assign(u,p.components||{})),c&&((c.beforeCreate||(c.beforeCreate=[])).unshift(function(){this[c.__module]=this}),(p.mixins||(p.mixins=[])).push(c)),e&&(p.render=e,p.staticRenderFns=n,p._compiled=!0),i&&(p.functional=!0),r&&(p._scopeId="data-v-"+r),s?(l=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),a&&a.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s)},p._ssrRegister=l):a&&(l=o?function(){a.call(this,this.$root.$options.shadowRoot)}:a),l)if(p.functional){p._injectStyles=l;var f=p.render;p.render=function(t,e){return l.call(e),f(t,e)}}else{var d=p.beforeCreate;p.beforeCreate=d?[].concat(d,l):[l]}return{exports:t,options:p}}n.d(e,"a",function(){return i})}},[["9053","app-config"]]]);