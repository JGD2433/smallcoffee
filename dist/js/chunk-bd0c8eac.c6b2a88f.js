(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-bd0c8eac"],{"095e":function(t,e,n){"use strict";var a=n("5ffb"),r=n.n(a);r.a},"159b":function(t,e,n){var a=n("da84"),r=n("fdbc"),o=n("17c2"),i=n("9112");for(var c in r){var s=a[c],u=s&&s.prototype;if(u&&u.forEach!==o)try{i(u,"forEach",o)}catch(f){u.forEach=o}}},"17c2":function(t,e,n){"use strict";var a=n("b727").forEach,r=n("a640"),o=n("ae40"),i=r("forEach"),c=o("forEach");t.exports=i&&c?[].forEach:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}},4160:function(t,e,n){"use strict";var a=n("23e7"),r=n("17c2");a({target:"Array",proto:!0,forced:[].forEach!=r},{forEach:r})},"4d63":function(t,e,n){var a=n("83ab"),r=n("da84"),o=n("94ca"),i=n("7156"),c=n("9bf2").f,s=n("241c").f,u=n("44e7"),f=n("ad6d"),l=n("9f7f"),d=n("6eeb"),v=n("d039"),h=n("69f3").set,g=n("2626"),p=n("b622"),b=p("match"),m=r.RegExp,y=m.prototype,E=/a/g,$=/a/g,k=new m(E)!==E,x=l.UNSUPPORTED_Y,w=a&&o("RegExp",!k||x||v((function(){return $[b]=!1,m(E)!=E||m($)==$||"/a/i"!=m(E,"i")})));if(w){var I=function(t,e){var n,a=this instanceof I,r=u(t),o=void 0===e;if(!a&&r&&t.constructor===I&&o)return t;k?r&&!o&&(t=t.source):t instanceof I&&(o&&(e=f.call(t)),t=t.source),x&&(n=!!e&&e.indexOf("y")>-1,n&&(e=e.replace(/y/g,"")));var c=i(k?new m(t,e):m(t,e),a?this:y,I);return x&&n&&h(c,{sticky:n}),c},S=function(t){t in I||c(I,t,{configurable:!0,get:function(){return m[t]},set:function(e){m[t]=e}})},C=s(m),R=0;while(C.length>R)S(C[R++]);y.constructor=I,I.prototype=y,d(r,"RegExp",I)}g("RegExp")},"4fdd":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"email"},[n("van-nav-bar",{attrs:{title:"验证码","left-text":"返回","left-arrow":"",fixed:!0},on:{"click-left":t.back}}),n("van-form",{on:{submit:t.next}},[n("van-field",{attrs:{name:"邮箱",label:"邮箱",placeholder:"请输入邮箱",autocomplete:"off"},model:{value:t.userInfo.email,callback:function(e){t.$set(t.userInfo,"email",e)},expression:"userInfo.email"}}),n("van-field",{attrs:{center:"",clearable:"",label:"邮箱验证码",placeholder:"请输入邮箱验证码",autocomplete:"off",maxlength:"6"},scopedSlots:t._u([{key:"button",fn:function(){return[n("van-button",{attrs:{disabled:t.userInfo.isSend,size:"small",type:"info"},on:{click:function(e){return e.preventDefault(),t.sendValidCode(e)}}},[t._v(t._s(t.userInfo.text))])]},proxy:!0}]),model:{value:t.userInfo.validCode,callback:function(e){t.$set(t.userInfo,"validCode",e)},expression:"userInfo.validCode"}}),n("div",{staticClass:"btn-box"},[n("van-button",{attrs:{round:"",block:"",type:"info","native-type":"submit"}},[t._v("下一步")])],1)],1)],1)},r=[],o=n("cc73"),i=n("fa7d"),c={name:"Email",data:function(){return{userInfo:{email:"",validCode:"",isSend:!1,text:"发送验证码"}}},methods:{back:function(){this.$router.go(-1)},sendValidCode:function(){var t=this;if(o["a"].validForm({email:this.userInfo.email},this)){var e=60;this.userInfo.isSend=!0,this.userInfo.text="".concat(e,"s后重新发送");var n=setInterval((function(){0==e?(clearInterval(n),n=null,t.userInfo.isSend=!1,t.userInfo.text="发送验证码"):(e--,t.userInfo.text="".concat(e,"s后重新发送"))}),1e3);this.$toast.loading({forbidClick:!0,duration:0,message:"加载中..."}),this.axios({method:"POST",url:"/emailValidCode",data:{appkey:this.appkey,email:this.userInfo.email},transformRequest:i["a"].transformRequest}).then((function(e){t.$toast.clear(),t.$toast(e.data.msg)})).catch((function(e){t.$toast.clear()}))}},next:function(){var t=this;/^[0-9]{6}$/.test(this.userInfo.validCode)?(this.$toast.loading({forbidClick:!0,duration:0,message:"加载中..."}),this.axios({method:"POST",url:"/checkValidCode",data:{appkey:this.appkey,validCode:this.userInfo.validCode},transformRequest:i["a"].transformRequest}).then((function(e){t.$toast.clear(),"K001"==e.data.code?t.$router.push({name:"Retrieve"}):t.$toast(e.data.msg)})).catch((function(e){t.$toast.clear()}))):this.$toast("请输入6位数字验证码")}}},s=c,u=(n("095e"),n("2877")),f=Object(u["a"])(s,a,r,!1,null,"79bb445c",null);e["default"]=f.exports},5319:function(t,e,n){"use strict";var a=n("d784"),r=n("825a"),o=n("7b0b"),i=n("50c4"),c=n("a691"),s=n("1d80"),u=n("8aa5"),f=n("14c3"),l=Math.max,d=Math.min,v=Math.floor,h=/\$([$&'`]|\d\d?|<[^>]*>)/g,g=/\$([$&'`]|\d\d?)/g,p=function(t){return void 0===t?t:String(t)};a("replace",2,(function(t,e,n,a){var b=a.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,m=a.REPLACE_KEEPS_$0,y=b?"$":"$0";return[function(n,a){var r=s(this),o=void 0==n?void 0:n[t];return void 0!==o?o.call(n,r,a):e.call(String(r),n,a)},function(t,a){if(!b&&m||"string"===typeof a&&-1===a.indexOf(y)){var o=n(e,t,this,a);if(o.done)return o.value}var s=r(t),v=String(this),h="function"===typeof a;h||(a=String(a));var g=s.global;if(g){var $=s.unicode;s.lastIndex=0}var k=[];while(1){var x=f(s,v);if(null===x)break;if(k.push(x),!g)break;var w=String(x[0]);""===w&&(s.lastIndex=u(v,i(s.lastIndex),$))}for(var I="",S=0,C=0;C<k.length;C++){x=k[C];for(var R=String(x[0]),_=l(d(c(x.index),v.length),0),O=[],j=1;j<x.length;j++)O.push(p(x[j]));var A=x.groups;if(h){var P=[R].concat(O,_,v);void 0!==A&&P.push(A);var T=String(a.apply(void 0,P))}else T=E(R,v,_,O,A,a);_>=S&&(I+=v.slice(S,_)+T,S=_+R.length)}return I+v.slice(S)}];function E(t,n,a,r,i,c){var s=a+t.length,u=r.length,f=g;return void 0!==i&&(i=o(i),f=h),e.call(c,f,(function(e,o){var c;switch(o.charAt(0)){case"$":return"$";case"&":return t;case"`":return n.slice(0,a);case"'":return n.slice(s);case"<":c=i[o.slice(1,-1)];break;default:var f=+o;if(0===f)return e;if(f>u){var l=v(f/10);return 0===l?e:l<=u?void 0===r[l-1]?o.charAt(1):r[l-1]+o.charAt(1):e}c=r[f-1]}return void 0===c?"":c}))}}))},"5ffb":function(t,e,n){},7156:function(t,e,n){var a=n("861d"),r=n("d2bb");t.exports=function(t,e,n){var o,i;return r&&"function"==typeof(o=e.constructor)&&o!==n&&a(i=o.prototype)&&i!==n.prototype&&r(t,i),t}},a15b:function(t,e,n){"use strict";var a=n("23e7"),r=n("44ad"),o=n("fc6a"),i=n("a640"),c=[].join,s=r!=Object,u=i("join",",");a({target:"Array",proto:!0,forced:s||!u},{join:function(t){return c.call(o(this),void 0===t?",":t)}})},bee2:function(t,e,n){"use strict";function a(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function r(t,e,n){return e&&a(t.prototype,e),n&&a(t,n),t}n.d(e,"a",(function(){return r}))},cc73:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var a=n("d4ec"),r=n("bee2"),o=function(){function t(){Object(a["a"])(this,t),this.phone={reg:/^1[3456789]\d{9}$/,msg:"请填写正确手机号"},this.nickName={reg:/^[0-9a-zA-Z\u4e00-\u9fa5]{1,8}$/,msg:"昵称必须含有字母,数字字母汉字组合"},this.password={reg:/^[a-zA-Z][^\u4e00-\u9fa5]{5,15}$/,msg:"密码首个字符是字母且不能含有汉字"},this.oldPassword={reg:/^[a-zA-Z][^\u4e00-\u9fa5]{5,15}$/,msg:"旧密码首个字符是字母且不能含有汉字"},this.email={reg:/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,msg:"邮箱格式不正确"}}return Object(r["a"])(t,[{key:"validForm",value:function(t,e){for(var n in t)if(!this[n].reg.test(t[n]))return e.$toast(this[n].msg),!1;return!0}}]),t}(),i=new o},d4ec:function(t,e,n){"use strict";function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.d(e,"a",(function(){return a}))},fa7d:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));n("4160"),n("a15b"),n("fb6a"),n("d3b7"),n("4d63"),n("ac1f"),n("25f0"),n("5319"),n("159b");var a=n("d4ec"),r=n("bee2"),o=function(){function t(){Object(a["a"])(this,t)}return Object(r["a"])(t,[{key:"transformRequest",value:function(t){var e="";for(var n in t)e+=n+"="+t[n]+"&";return e}},{key:"getCookies",value:function(t,e){var n={};return t.forEach((function(t){n[t]=e.$cookies.get(t)})),n}},{key:"getToken",value:function(t){var e=["t0","t1","t2"],n=[];return e.forEach((function(e){n.push(t.$cookies.get(e))})),n.join(".")}},{key:"formatDate",value:function(t,e){var n=t.getFullYear().toString();if(/(y+)/.test(e)){var a=RegExp.$1;e=e.replace(a,n.slice(n.length-a.length))}var r={M:t.getMonth()+1,d:t.getDate(),h:t.getHours(),m:t.getMinutes(),s:t.getSeconds()};for(var o in r){var i=new RegExp("(".concat(o,"{1,2})"));if(i.test(e)){var c=RegExp.$1,s=r[o]>=10||1==c.length?r[o]:"0"+r[o];e=e.replace(c,s)}}return e}}]),t}(),i=new o}}]);
//# sourceMappingURL=chunk-bd0c8eac.c6b2a88f.js.map