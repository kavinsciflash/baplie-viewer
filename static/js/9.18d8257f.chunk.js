(this["webpackJsonpbaplie-viewer"]=this["webpackJsonpbaplie-viewer"]||[]).push([[9],{186:function(t,e,n){t.exports=n.p+"static/media/Skin.052fdf17.svg"},198:function(t,e,n){t.exports=n.p+"static/media/logo.d4265e66.svg"},199:function(t,e,n){t.exports=n.p+"static/media/satoriLogo.da97684a.svg"},372:function(t,e,n){"use strict";var o=n(373),r=n(63);function i(t,e){return e.encode?e.strict?o(t):encodeURIComponent(t):t}e.extract=function(t){return t.split("?")[1]||""},e.parse=function(t,e){var n=function(t){var e;switch(t.arrayFormat){case"index":return function(t,n,o){e=/\[(\d*)\]$/.exec(t),t=t.replace(/\[\d*\]$/,""),e?(void 0===o[t]&&(o[t]={}),o[t][e[1]]=n):o[t]=n};case"bracket":return function(t,n,o){e=/(\[\])$/.exec(t),t=t.replace(/\[\]$/,""),e?void 0!==o[t]?o[t]=[].concat(o[t],n):o[t]=[n]:o[t]=n};default:return function(t,e,n){void 0!==n[t]?n[t]=[].concat(n[t],e):n[t]=e}}}(e=r({arrayFormat:"none"},e)),o=Object.create(null);return"string"!==typeof t?o:(t=t.trim().replace(/^(\?|#|&)/,""))?(t.split("&").forEach((function(t){var e=t.replace(/\+/g," ").split("="),r=e.shift(),i=e.length>0?e.join("="):void 0;i=void 0===i?null:decodeURIComponent(i),n(decodeURIComponent(r),i,o)})),Object.keys(o).sort().reduce((function(t,e){var n=o[e];return Boolean(n)&&"object"===typeof n&&!Array.isArray(n)?t[e]=function t(e){return Array.isArray(e)?e.sort():"object"===typeof e?t(Object.keys(e)).sort((function(t,e){return Number(t)-Number(e)})).map((function(t){return e[t]})):e}(n):t[e]=n,t}),Object.create(null))):o},e.stringify=function(t,e){var n=function(t){switch(t.arrayFormat){case"index":return function(e,n,o){return null===n?[i(e,t),"[",o,"]"].join(""):[i(e,t),"[",i(o,t),"]=",i(n,t)].join("")};case"bracket":return function(e,n){return null===n?i(e,t):[i(e,t),"[]=",i(n,t)].join("")};default:return function(e,n){return null===n?i(e,t):[i(e,t),"=",i(n,t)].join("")}}}(e=r({encode:!0,strict:!0,arrayFormat:"none"},e));return t?Object.keys(t).sort().map((function(o){var r=t[o];if(void 0===r)return"";if(null===r)return i(o,e);if(Array.isArray(r)){var c=[];return r.slice().forEach((function(t){void 0!==t&&c.push(n(o,t,c.length))})),c.join("&")}return i(o,e)+"="+i(r,e)})).filter((function(t){return t.length>0})).join("&"):""}},373:function(t,e,n){"use strict";t.exports=function(t){return encodeURIComponent(t).replace(/[!'()*]/g,(function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()}))}},418:function(t,e,n){"use strict";n.r(e);var o=n(22),r=n(0),i=n(17),c=n(422),a=n(375),u=n(423),s=n(56),l=n(28),f=n(38),d=(n(372),n(186)),p=n.n(d),m=(n(198),n(199),Object(l.c)((function(t){return{authentication:t.authentication}}),{actionCreator:f.a})((function(t){var e=t.actionCreator,n=t.authentication,l=(t.location,Object(s.g)()),d=n.isSubmitting,p=n.message,m=n.errorMessage,g=new URLSearchParams(Object(s.h)().search).get("token"),h=Object(r.useState)(g),v=Object(o.a)(h,2),x=v[0];v[1];return Object(r.useEffect)((function(){x&&e({type:f.d.ACTIVATION,payload:x})}),[e,x]),Object(i.c)("div",{css:b.container},Object(i.c)("div",{className:"container",css:b.content},Object(i.c)("form",{css:b.form},Object(i.c)(c.a,{variant:"h5",css:b.formLabel},"Account activation"),Object(i.c)(c.a,{css:b.formSubLabel},m||(p||"We're currently activating you're account. Please wait.")),Object(i.c)("div",{css:b.formBottom},Object(i.c)(a.a,{variant:"contained",color:"primary",disableElevation:!0,type:"button",disabled:d,onClick:function(){d||(m?window.location.reload():l.push("/login"))},css:b.button},d?Object(i.c)(u.a,{size:24}):m?"Retry":"Back to Login")))))}))),b={container:{backgroundImage:"url(".concat(p.a,")"),backgroundSize:"cover"},content:{display:"flex",height:"100vh",justifyContent:"center",alignItems:"center",flexDirection:"column"},title:{textAlign:"center",top:32,position:"absolute",fontWeight:"600",letterSpacing:0},formLabel:{textAlign:"left",width:"100%",marginBottom:"16px",fontWeight:"600",letterSpacing:0},formSubLabel:{fontWeight:"500",textAlign:"left",width:"100%",marginBottom:"24px",letterSpacing:0},form:{width:"100%",maxWidth:"480px",display:"flex",flexDirection:"column"},formBottom:{display:"flex",justifyContent:"space-between"},formButtonLinks:{display:"flex",flexDirection:"column ",alignItems:"center",justifyContent:"center"},button:{fontWeight:"600",flex:1,width:"100%"},input:{marginBottom:"24px"},link:{color:"white",flex:1,width:"100%",textDecoration:"none"},logoImage:{position:"absolute",top:22,left:22},footerLogo:{position:"absolute",bottom:10,right:30,height:"100px",userSelect:"none",textAlign:"right"},dividerContainer:{display:"flex",flexDirection:"colmn",justifyContent:"center",alignItems:"center",flex:1,margin:"20px 0"},dividerLabel:{margin:"0 20px"},divider:{flex:1,border:"solid thin #30B9EF"}};e.default=m}}]);