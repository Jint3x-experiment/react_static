_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[7],{RNiq:function(n,t,e){"use strict";e.r(t);var r=e("nKUr"),o=e("o0o1"),c=e.n(o);function i(n,t,e,r,o,c,i){try{var u=n[c](i),a=u.value}catch(s){return void e(s)}u.done?t(a):Promise.resolve(a).then(r,o)}function u(n){return function(){var t=this,e=arguments;return new Promise((function(r,o){var c=n.apply(t,e);function u(n){i(c,r,o,u,a,"next",n)}function a(n){i(c,r,o,u,a,"throw",n)}u(void 0)}))}}var a=e("q1tI");t.default=function(){var n=Object(a.useState)(""),t=n[0],e=n[1];return Object(a.useEffect)((function(){function n(){return(n=u(c.a.mark((function n(){return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("https://testing-app.onrender.com/api/header",{mode:"no-cors"}).then((function(n){return n.json()})).then((function(n){return e(n)})).catch((function(n){return null}));case 2:case"end":return n.stop()}}),n)})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()})),Object(r.jsx)("div",{children:Object(r.jsxs)("h1",{children:["Message from backend: ",t]})})}},vlRD:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return e("RNiq")}])}},[["vlRD",0,2,1]]]);