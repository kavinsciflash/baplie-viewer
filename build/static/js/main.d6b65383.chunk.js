(this["webpackJsonpbaplie-viewer"]=this["webpackJsonpbaplie-viewer"]||[]).push([[2],{108:function(e,t,n){e.exports=n(140)},110:function(e,t,n){},138:function(e,t,n){},140:function(e,t,n){"use strict";n.r(t);n(109),n(110);var r=n(0),a=n.n(r),c=n(38),o=n.n(c),u=n(28),i=n(37),s=n(99),l=n(174),p=n(179),b=n(22),d=n(17),O=n(173),f=n(56),S=n(29),h=Object(S.a)(),m=n(45),E=a.a.lazy((function(){return n.e(11).then(n.bind(null,406))})),j=a.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(7)]).then(n.bind(null,407))})),v=a.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(5),n.e(6)]).then(n.bind(null,408))})),g=a.a.lazy((function(){return Promise.all([n.e(0),n.e(8)]).then(n.bind(null,409))})),y=a.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(10)]).then(n.bind(null,410))})),x=a.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(9)]).then(n.bind(null,411))})),_=(a.a.lazy((function(){return n.e(12).then(n.bind(null,412))})),n(138),n(95)),w=n.n(_),A=n(96),I=n.n(A),C=function(){return Object(d.c)("div",{css:R.container,className:"spinnerContainer d-flex justify-content-center align-items-center h-100 absolute"},Object(d.c)("img",{src:I.a,alt:"Loading...",css:R.spinner}))},T=Object(d.d)({"0%":{transform:"rotate(0deg)"},"100%":{transform:"rotate(359deg)"}}),R={container:{position:"absolute",zIndex:"900",backgroundImage:"url(".concat(w.a,")"),backgroundSize:"cover"},spinner:{animation:"x 2s infinite linear",animationName:T,height:"80px",width:"80px"}},N=n(71),D=["component","authentication"],k=Object(u.c)((function(e){return{authentication:e.authentication}}))((function(e){var t=e.component,n=e.authentication,r=Object(N.a)(e,D),c=n.isAuthenticated;return a.a.createElement(f.b,Object.assign({},r,{render:function(e){return c?a.a.createElement(t,e):a.a.createElement(f.a,{to:"/login"})}}))})),F=function(){return a.a.createElement(r.Suspense,{fallback:a.a.createElement(C,null)},a.a.createElement(m.a,{history:i.b},a.a.createElement(f.d,null,a.a.createElement(j,{path:"/login",exact:!0}),a.a.createElement(v,{path:"/signup",exact:!0}),a.a.createElement(y,{path:"/forgot-password",exact:!0}),a.a.createElement(g,{path:"/activation",exact:!0}),a.a.createElement(x,{path:"/forgotpassword",exact:!0}),a.a.createElement(k,{component:E,path:"/",exact:!0}),a.a.createElement(f.a,{from:"**",to:"/",exact:!0}))))},P=n(177),L=n(175),U=n(44),G=a.a.forwardRef((function(e,t){return a.a.createElement(L.a,Object.assign({elevation:6,ref:t,variant:"filled"},e))}));var W=function(e){var t=Object(u.e)((function(e){return e.snackbar})),n=t.isOpen,r=t.message,c=t.type,o=Object(u.d)(),i=function(e,t){"clickaway"!==t&&o(Object(U.a)())};return a.a.createElement(P.a,{open:n,autoHideDuration:4e3,anchorOrigin:{vertical:"bottom",horizontal:"center"},key:"bottom,center",onClose:function(){return i}},a.a.createElement(G,{onClose:i,severity:c,className:"medium_font"},r))},B=Object(u.c)((function(){return{}}),{actionCreator:i.a})((function(e){var t=e.actionCreator,n=Object(r.useState)(!0),c=Object(b.a)(n,2),o=c[0],u=c[1];Object(r.useEffect)((function(){s()}),[t]);var s=function(){var e=JSON.parse(localStorage.getItem("user"));(null===e||void 0===e?void 0:e.accessToken)&&(t({type:i.d.LOGIN_SUCCESS,payload:e}),t({type:i.d.SET_CURRENT_FILE_COUNT,payload:e.currentfilecount})),u(!1)};return Object(d.c)(a.a.Fragment,null,Object(d.c)(O.a,null),!o&&Object(d.c)("div",null,Object(d.c)(f.c,{history:h},Object(d.c)(W,null),Object(d.c)(F,null))))}));var M=function(){var e=Object(s.a)({palette:{type:"light",primary:{main:"#00FFDD"},secondary:{main:"#30B9EF"}},components:{MuiCheckbox:{styleOverrides:{root:{color:"#30B9EF"}}},MuiButton:{styleOverrides:{label:{color:"white",fontWeight:"600"},containedPrimary:{backgroundColor:"#fff45b",color:"#000",boxShadow:"0px 5px 5px 0px #ccc"},root:{"&.Mui-disabled":{backgroundColor:"#30B9EF",color:"#FFFFFF"}}}},MuiFormLabel:{styleOverrides:{root:{"&$focused":{color:"#30B9EF"}}}},MuiInputLabel:{styleOverrides:{filled:{color:"#313131"}}},MuiInputBase:{styleOverrides:{input:{color:"#313131"}}},MuiFilledInput:{styleOverrides:{underline:{"&&&:before":{borderBottom:"none"},"&&:after":{borderBottom:"none"}},root:{backgroundColor:"white",boxShadow:"0px 5px 5px 0px #ccc",border:"1px solid #E9E7E7","&:hover":{backgroundColor:"white"},"&$focused":{backgroundColor:"white"}}}}}});return a.a.createElement(l.a,{injectFirst:!0},a.a.createElement(p.a,{theme:e},a.a.createElement(B,null)))};o.a.render(a.a.createElement(u.a,{store:i.c},a.a.createElement(M,null)),document.querySelector("#root"))},33:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}));var r="SHOW_SNACKBAR",a="HIDE_SNACKBAR"},37:function(e,t,n){"use strict";n.d(t,"c",(function(){return ge})),n.d(t,"d",(function(){return r})),n.d(t,"a",(function(){return ye})),n.d(t,"b",(function(){return he}));var r={};n.r(r),n.d(r,"LOGIN",(function(){return V})),n.d(r,"LOGIN_SUCCESS",(function(){return z})),n.d(r,"LOGIN_FAILED",(function(){return H})),n.d(r,"SIGNUP",(function(){return Y})),n.d(r,"SIGNUP_SUCCESS",(function(){return J})),n.d(r,"SIGNUP_FAILED",(function(){return K})),n.d(r,"RESET_PASSWORD",(function(){return X})),n.d(r,"RESET_PASSWORD_SUCCESS",(function(){return q})),n.d(r,"RESET_PASSWORD_FAILED",(function(){return $})),n.d(r,"ACTIVATION",(function(){return Q})),n.d(r,"ACTIVATION_SUCCESS",(function(){return Z})),n.d(r,"ACTIVATION_FAILED",(function(){return ee})),n.d(r,"FORGOT_PASSWORD",(function(){return te})),n.d(r,"FORGOT_PASSWORD_SUCCESS",(function(){return ne})),n.d(r,"FORGOT_PASSWORD_FAILED",(function(){return re})),n.d(r,"LOGOUT",(function(){return ae})),n.d(r,"SET_CURRENT_FILE_COUNT",(function(){return ce})),n.d(r,"SHOW_LOADER",(function(){return le})),n.d(r,"HIDE_LOADER",(function(){return pe})),n.d(r,"SHOW_SNACKBAR",(function(){return ie.b})),n.d(r,"HIDE_SNACKBAR",(function(){return ie.a}));var a=n(27),c=n(29),o=n(42),u=n(85),i=n(45),s=n(12),l=n.n(s),p=n(46),b=n(10),d=n(44);function O(e){ge.dispatch(Object(d.b)(e,"error"))}function f(e){ge.dispatch(Object(d.b)(e,"success"))}var S=n(21),h=n(90),m=n.n(h),E=n(8),j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return!(e.hasOwnProperty("handlerEnabled")&&!e.handlerEnabled)},v=m.a.create({baseURL:"https://sonata.solverminds.net/sonata/api/baplieapi/bapleviewer/api",headers:{"Content-Type":"application/json"}});v.interceptors.request.use((function(e){var t=JSON.parse(localStorage.getItem("user"));return t&&(e.headers.Authorization="Bearer ".concat(t.accessToken)),function(e){return j(e),e}(e)})),v.interceptors.response.use((function(e){return function(e){return j(e),console.log(e),e}(e)}),(function(e){return function(e){var t;return j(e.config)&&401===e.response.status&&(localStorage.removeItem("user"),f("Session expired. Please login again."),t=3e3,new Promise((function(e){return setTimeout(e,t)})),window.location.replace("/login")),Promise.reject(Object(E.a)({},e))}(e)}));var g=function(e,t){if(e.response)throw new Error(e.response.data.message);throw new Error("Oops! Something went wrong. Please give your browser a refresh.")},y=l.a.mark(P),x=l.a.mark(L),_=l.a.mark(U),w=l.a.mark(G),A=l.a.mark(W),I=l.a.mark(B),C=l.a.mark(M),T=function(e){return new Promise((function(t){return setTimeout(t,e)}))},R=function(){var e=Object(p.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v.post("auth/activation",{token:t});case 3:return n=e.sent,e.abrupt("return",n);case 7:e.prev=7,e.t0=e.catch(0),g(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),N=function(){var e=Object(p.a)(l.a.mark((function e(t){var n,r,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.token,r=t.password,e.prev=1,e.next=4,v.post("auth/resetpassword",{token:n,password:r});case 4:return a=e.sent,e.abrupt("return",a);case 8:e.prev=8,e.t0=e.catch(1),g(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),D=function(){var e=Object(p.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v.post("auth/sendforgotpassword/".concat(t));case 3:return n=e.sent,e.abrupt("return",n);case 7:e.prev=7,e.t0=e.catch(0),g(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),k=function(){var e=Object(p.a)(l.a.mark((function e(t){var n,r,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.username,r=t.password,t.companyName,t.companyEmailAddress,e.prev=1,e.next=4,v.post("auth/signin",{username:n,password:r});case 4:return a=e.sent,e.abrupt("return",a);case 8:e.prev=8,e.t0=e.catch(1),g(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),F=function(){var e=Object(p.a)(l.a.mark((function e(t){var n,r,a,c,o;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.username,r=t.password,a=t.companyName,c=t.companyEmailAddress,e.prev=1,e.next=4,v.post("auth/signup",{username:n,password:r,companyName:a,companyEmail:c,userType:"CUSTOMER"});case 4:return o=e.sent,e.abrupt("return",o);case 8:e.prev=8,e.t0=e.catch(1),g(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}();function P(e){var t,n,a;return l.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return t=e.payload,c.prev=1,c.next=4,Object(b.b)(k,t);case 4:return n=c.sent,a=n.data,c.next=8,localStorage.setItem("user",JSON.stringify(a));case 8:return c.next=10,Object(b.c)({type:r.LOGIN_SUCCESS,payload:a});case 10:return c.next=12,Object(b.c)(Object(d.b)("Login successful","success"));case 12:return c.next=14,Object(b.b)(T,100);case 14:return c.next=16,Object(b.c)(Object(S.d)("/"));case 16:c.next=23;break;case 18:return c.prev=18,c.t0=c.catch(1),O(c.t0.message),c.next=23,Object(b.c)({type:r.LOGIN_FAILED});case 23:case"end":return c.stop()}}),y,null,[[1,18]])}function L(e){var t,n;return l.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t=e.payload,a.prev=1,a.next=4,Object(b.b)(R,t);case 4:return n=a.sent,n.data,a.next=8,Object(b.c)({type:r.ACTIVATION_SUCCESS,payload:"Congratulations. Your account has been activated. You can now use our BaplieViewer application. Head back to the login page."});case 8:f("Your account has been activated successfully."),a.next=16;break;case 11:return a.prev=11,a.t0=a.catch(1),O(a.t0.message),a.next=16,Object(b.c)({type:r.ACTIVATION_FAILED,payload:"Sorry, we are unable to activate your account. Please try refreshing the page."});case 16:case"end":return a.stop()}}),x,null,[[1,11]])}function U(e){var t,n;return l.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t=e.payload,a.prev=1,a.next=4,Object(b.b)(N,t);case 4:return n=a.sent,n.data,a.next=8,Object(b.c)({type:r.RESET_PASSWORD_SUCCESS});case 8:return f("Reset password has been successful. You can now login using your new password."),a.next=11,Object(b.c)(Object(S.d)("/login"));case 11:a.next=18;break;case 13:return a.prev=13,a.t0=a.catch(1),O(a.t0.message),a.next=18,Object(b.c)({type:r.RESET_PASSWORD_FAILED});case 18:case"end":return a.stop()}}),_,null,[[1,13]])}function G(e){var t,n,a;return l.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return t=e.payload,c.prev=1,c.next=4,Object(b.b)(F,t);case 4:return n=c.sent,a=n.data,c.next=8,Object(b.c)({type:r.SIGNUP_SUCCESS,payload:{data:a}});case 8:return f("Account has been successfully registered."),c.next=11,Object(b.c)(Object(S.d)("/login"));case 11:c.next=18;break;case 13:return c.prev=13,c.t0=c.catch(1),O(c.t0.message),c.next=18,Object(b.c)({type:r.SIGNUP_FAILED});case 18:case"end":return c.stop()}}),w,null,[[1,13]])}function W(e){var t,n,a;return l.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return t=e.payload,c.prev=1,c.next=4,Object(b.b)(D,t);case 4:return n=c.sent,a=n.data,c.next=8,Object(b.c)({type:r.FORGOT_PASSWORD_SUCCESS,payload:{data:a.data}});case 8:return f("Your reset password link has been succesfully sent to your email."),c.next=11,Object(b.c)(Object(S.d)("/login"));case 11:c.next=18;break;case 13:return c.prev=13,c.t0=c.catch(1),O("Sending recovery email has failed. Please try again."),c.next=18,Object(b.c)({type:r.FORGOT_PASSWORD_FAILED});case 18:case"end":return c.stop()}}),A,null,[[1,13]])}function B(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(b.b)(T,1e3);case 2:return localStorage.removeItem("user"),f("You have logged out successfully."),e.next=6,Object(b.c)(Object(S.d)("/login"));case 6:case"end":return e.stop()}}),I)}function M(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(b.d)(r.LOGIN,P);case 2:return e.next=4,Object(b.d)(r.SIGNUP,G);case 4:return e.next=6,Object(b.d)(r.FORGOT_PASSWORD,W);case 6:return e.next=8,Object(b.d)(r.ACTIVATION,L);case 8:return e.next=10,Object(b.d)(r.RESET_PASSWORD,U);case 10:return e.next=12,Object(b.d)(r.LOGOUT,B);case 12:case"end":return e.stop()}}),C)}var V="@authentication/LOGIN",z="@authentication/LOGIN_SUCCESS",H="@authentication/LOGIN_FAILED",Y="@authentication/SIGNUP",J="@authentication/SIGNUP_SUCCESS",K="@authentication/SIGNUP_FAILED",X="@authentication/RESET_PASSWORD",q="@authentication/RESET_PASSWORD_SUCCESS",$="@authentication/RESET_PASSWORD_FAILED",Q="@authentication/ACTIVATION",Z="@authentication/ACTIVATION_SUCCESS",ee="@authentication/ACTIVATION_FAILED",te="@authentication/FORGOT_PASSWORD",ne="@authentication/FORGOT_PASSWORD_SUCCESS",re="@authentication/FORGOT_PASSWORD_FAILED",ae="@authentication/LOGOUT",ce="@edi/SET_CURRENT_FILE_COUNT",oe={isAuthenticating:!1,isAuthenticated:!1,isSubmitting:!1,token:null,errorMessage:null,message:null},ue=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:oe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case V:return Object(E.a)(Object(E.a)({},e),{},{isAuthenticating:!0,token:t.payload.accessToken,email:t.payload.email,userId:t.payload.id});case z:return Object(E.a)(Object(E.a)({},e),{},{isAuthenticating:!1,isAuthenticated:!0,data:t.payload});case H:return Object(E.a)(Object(E.a)({},e),{},{isAuthenticating:!1});case Q:return Object(E.a)(Object(E.a)({},e),{},{isSubmitting:!0});case Z:return Object(E.a)(Object(E.a)({},e),{},{isSubmitting:!1,message:t.payload});case ee:return Object(E.a)(Object(E.a)({},e),{},{isSubmitting:!1,errorMessage:t.payload});case X:return Object(E.a)(Object(E.a)({},e),{},{isSubmitting:!0});case q:case $:return Object(E.a)(Object(E.a)({},e),{},{isSubmitting:!1});case Y:return Object(E.a)(Object(E.a)({},e),{},{isSubmitting:!0});case J:return Object(E.a)(Object(E.a)({},e),{},{isSubmitting:!1,data:t.payload});case K:return Object(E.a)(Object(E.a)({},e),{},{isSubmitting:!1});case te:return Object(E.a)(Object(E.a)({},e),{},{isSubmitting:!0});case ne:return Object(E.a)(Object(E.a)({},e),{},{isSubmitting:!1,data:t.payload});case re:return Object(E.a)(Object(E.a)({},e),{},{isSubmitting:!1});case ae:return Object(E.a)(Object(E.a)({},e),{},{isAuthenticating:!1,isAuthenticated:!1});default:return e}},ie=(n(83),n(33)),se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ie.b:return Object(E.a)(Object(E.a)({},e),{},{isOpen:!0,message:t.message,type:t.snackbarType});case ie.a:return Object(E.a)(Object(E.a)({},e),{},{isOpen:!1});default:return e}},le=(n(84),"SHOW_LOADER"),pe="HIDE_LOADER",be=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case le:case pe:return t.data;default:return e}},de=function(e){return Object(o.b)({router:Object(i.b)(e),authentication:ue,loader:be,snackbar:se})},Oe=n(100),fe=l.a.mark(Se);function Se(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(b.a)([M()]);case 2:case"end":return e.stop()}}),fe)}var he=Object(c.a)(),me=Object(Oe.a)(),Ee="object"===typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):o.c,je=[Object(u.a)(he),me],ve=Ee(o.a.apply(void 0,Object(a.a)(je))),ge=Object(o.d)(de(he),ve),ye=function(e){return e};me.run(Se)},44:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return c}));var r=n(33),a=function(e,t){return{type:r.b,message:e,snackbarType:t}},c=function(){return{type:r.a}}},83:function(e,t){},84:function(e,t){},95:function(e,t,n){e.exports=n.p+"static/media/dashboard-bg.c27051eb.png"},96:function(e,t,n){e.exports=n.p+"static/media/loadingIcon.272bbcb4.png"}},[[108,3,4]]]);