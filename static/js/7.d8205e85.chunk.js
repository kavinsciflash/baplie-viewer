(this["webpackJsonpbaplie-viewer"]=this["webpackJsonpbaplie-viewer"]||[]).push([[7],{193:function(e,t,n){e.exports=n.p+"static/media/main.6d768264.svg"},194:function(e,t,n){e.exports=n.p+"static/media/Boy.7d1b61dd.svg"},195:function(e,t,n){e.exports=n.p+"static/media/satori_logo.2edbec3d.svg"},196:function(e,t,n){"use strict";var a=n(73),o=n(0),r=n.n(o),i=n(443),c=["id","helperText","label","value","type","style"];t.a=function(e){var t=e.id,n=e.helperText,o=e.label,s=e.value,l=e.type,d=e.style,p=Object(a.a)(e,c);return r.a.createElement(i.a,Object.assign({id:t,value:s,label:o,variant:"filled",helperText:n,type:l,size:"small",style:d},p))}},203:function(e,t,n){"use strict";var a=n(0),o=n.n(a),r=n(7),i=n.n(r);function c(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}!function(e,t){void 0===t&&(t={});var n=t.insertAt;if("undefined"!=typeof document){var a=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css","top"===n&&a.firstChild?a.insertBefore(o,a.firstChild):a.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}}(".style_captchaContainer__LdFYB {\n  display: flex;\n  align-items: center;\n}\n\n.style_retryButton__2gxEO {\n  border: none;\n  margin: 0 0 0 16px;\n  padding: 0;\n  width: auto;\n  overflow: visible;\n  background: transparent;\n  color: inherit;\n  font: inherit;\n  line-height: normal;\n  -webkit-font-smoothing: inherit;\n  -moz-osx-font-smoothing: inherit;\n  -webkit-appearance: none;\n  outline: none;\n  text-align: inherit;\n}\n",{insertAt:"top"});var u=function(e){function t(e){var n,a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this,a=l(t).call(this,e),n=!a||"object"!=typeof a&&"function"!=typeof a?p(this):a,s(p(n),"generateCode",(function(){for(var e=n.props,t=e.chars,a=e.charsCount,o=[],r=0;r<a;r+=1){var i=Math.ceil(Math.random()*t.length);t[i]&&-1===o.indexOf(t[i])?o.push(t[i]):r-=1}return o.join("")})),s(p(n),"resetCaptcha",(function(e){e.preventDefault(),n.generateCaptcha()})),s(p(n),"generateCaptcha",(function(){var e=n.props,t=e.width,a=e.height,o=e.fontSize,r=e.captchaCode,i=e.backgroundColor,c=e.fontFamily,s=e.fontColor;n.captchaCode=n.generateCode();var l=n.canvasRef.current.getContext("2d");l.fillStyle=i,l.fillRect(0,0,t,a),l.font="".concat(o,"px ").concat(c),l.textAlign="center",l.textBaseline="middle",l.fillStyle=s,l.fillText(n.captchaCode.split("").join(" "),t/2,a/2),r(n.captchaCode)})),n.canvasRef=o.a.createRef(),n.captchaCode="",n}var n,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(t,a.Component),n=t,(r=[{key:"componentDidMount",value:function(){this.generateCaptcha()}},{key:"render",value:function(){var e=this.props,t=e.width,n=e.height,a=e.retryIcon,r=e.containerClassName,i=e.captchaClassName,c=e.retryButtonClassName,s=e.retryImgClassName,l=e.retry,d=e.retryIconSize;return o.a.createElement("div",{className:r},o.a.createElement("canvas",{width:t,height:n,ref:this.canvasRef,style:{pointerEvents:"none"},className:i}),l&&o.a.createElement("button",{onClick:this.resetCaptcha,id:"retryButton",className:c},o.a.createElement("img",{src:a,alt:"Re-new captcha",className:s,width:d,height:d})))}}])&&c(n.prototype,r),t}();u.defaultProps={width:100,height:40,fontSize:22,fontFamily:"Arial, Tahoma",fontColor:"#000",chars:"abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",charsCount:4,backgroundColor:"#F2F2F2",retry:!0,retryIcon:"https://cdn.jsdelivr.net/npm/react-client-captcha/dist/retry.svg",retryIconSize:24,retryButtonClassName:"style_retryButton__2gxEO",retryImgClassName:"",containerClassName:"style_captchaContainer__LdFYB",captchaClassName:""},u.propTypes={width:i.a.number.isRequired,height:i.a.number.isRequired,fontSize:i.a.number,fontFamily:i.a.string,fontColor:i.a.string,chars:i.a.string,charsCount:i.a.number,captchaCode:i.a.func.isRequired,backgroundColor:i.a.string,retry:i.a.bool,retryIcon:i.a.string,retryIconSize:i.a.number,retryButtonClassName:i.a.string,retryImgClassName:i.a.string,containerClassName:i.a.string,captchaClassName:i.a.string},t.a=u},205:function(e,t,n){e.exports=n.p+"static/media/logo.d4265e66.svg"},206:function(e,t,n){e.exports=n.p+"static/media/satoriLogo.da97684a.svg"},449:function(e,t,n){"use strict";n.r(t);var a=n(22),o=n(0),r=n(17),i=n(445),c=n(410),s=n(454),l=n(57),d=n(71),p=n(217),u=n(218),h=n(29),f=n(31),m=n(193),b=n.n(m),g=n(194),y=n.n(g),v=n(195),x=n.n(v),C=(n(205),n(206),n(196)),w=n(203),j=n(27),O=n(442),S=n(236),k=n.n(S),B=Object(h.c)((function(e){return{authentication:e.authentication}}),{actionCreator:f.a})((function(e){var t=e.actionCreator,n=e.authentication.isSubmitting,h=new URLSearchParams(Object(l.h)().search),m=Object(o.useState)(!1),b=Object(a.a)(m,2),g=b[0],v=b[1],S=function(){v(!1)},B=Object(o.useState)(""),_=Object(a.a)(B,2),N=_[0],E=_[1],I=u.a({password:u.c().required("Please enter your password").min(8,"Password should be at least 8 characters").matches(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?])[A-Za-z\d!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]*$/,"Your password should contain at least one uppercase, lowercase, number and a special character"),confirmPassword:u.c().oneOf([u.b("password"),null],"Please make sure your passwords match").required("Please confirm your password")}),T=Object(p.a)({initialValues:{username:"",companyName:"",companyEmailAddress:"",password:"",confirmPassword:""},onSubmit:function(e){var n=e.password;if(n.captcha!==N)Object(j.a)("Invalid captcha");else{var a=h.get("token");t({type:f.d.RESET_PASSWORD,payload:{password:n,token:a}})}},validationSchema:I});return Object(r.d)("div",{css:P.container},Object(r.d)(O.a,{open:g,onClose:S},Object(r.d)("form",{css:P.form1,onSubmit:T.handleSubmit},Object(r.d)(i.a,{variant:"h5",css:P.formLabel},Object(r.d)(c.a,{onClick:S,style:P.close},Object(r.d)(k.a,{style:{color:"gray",fontSize:"30px"}}))),Object(r.d)("div",{css:P.pad},Object(r.d)("h3",null,"Your Password is Reset"),Object(r.d)("div",{css:P.common},Object(r.d)(c.a,{style:{backgroundColor:"#fff45b",marginTop:"7px",width:"200px"}},Object(r.d)(d.a,{to:"/login",css:P.link},"Back To Login")))))),Object(r.d)("div",{css:P.Boy},Object(r.d)("img",{src:y.a})),Object(r.d)("div",{css:P.Logo},Object(r.d)("img",{css:P.Size,src:x.a})),Object(r.d)("div",{className:"container",css:P.content},Object(r.d)("form",{css:P.form,onSubmit:T.handleSubmit},Object(r.d)(i.a,{variant:"h5",css:P.formLabel},"Reset Your Password"),Object(r.d)(i.a,{css:P.formSubLabel},"Strong passwords include at least one number, one lowercase, one uppercase and one special character."),Object(r.d)(C.a,{label:"Enter your new password",id:"password",name:"password",type:"password",css:P.input,onChange:T.handleChange,helperText:T.touched.password&&T.errors.password,error:T.touched.password&&T.errors.password,onBlur:T.handleBlur}),Object(r.d)(C.a,{label:"Enter your password one more time",id:"confirmPassword",name:"confirmPassword",type:"password",css:P.input,onChange:T.handleChange,helperText:T.touched.confirmPassword&&T.errors.confirmPassword,error:T.touched.confirmPassword&&T.errors.confirmPassword,onBlur:T.handleBlur}),Object(r.d)("div",{css:P.captcha},Object(r.d)(C.a,{id:"captcha",name:"captcha",style:P.Inp,label:"Enter Captcha",onChange:T.handleChange,helperText:T.touched.captcha&&T.errors.captcha,error:T.touched.captcha&&!!T.errors.captcha,onBlur:T.handleBlur}),Object(r.d)("div",null,Object(r.d)(w.a,{retry:!1,height:50,width:240,charsCount:8,backgroundColor:"yellow",captchaCode:function(e){E(e)},fontFamily:"Arial, Tahoma",captchaClassName:"captcha-container",style:P.Inp}))),Object(r.d)("div",{css:P.formBottom},Object(r.d)(c.a,{variant:"contained",color:"primary",disableElevation:!0,disabled:!T.isValid||n,type:"submit",css:P.button},n?Object(r.d)(s.a,{size:24}):"Reset Password")),Object(r.d)("div",{css:P.dividerContainer},Object(r.d)("div",{css:P.divider}),Object(r.d)(i.a,{css:P.dividerLabel},"OR"),Object(r.d)("div",{css:P.divider})),Object(r.d)("div",{css:P.formButtonLinks},Object(r.d)(i.a,null,Object(r.d)(d.a,{to:"/signup",css:P.link},"Sign Up / Create New Account")),Object(r.d)(c.a,{style:{backgroundColor:"#fff45b",marginTop:"7px"}},Object(r.d)(d.a,{to:"/login",css:P.link},"Back To Login")),Object(r.d)(c.a,{onClick:function(){v(!0)}},"Login")))))})),P={container:{backgroundImage:"url(".concat(b.a,")"),backgroundRepeat:"no-repeat",backgroundPosition:"center center",backgroundSize:"cover",position:"relative"},pad:{padding:"0px 80px 100px 80px"},formSubLabel:{fontWeight:"500",textAlign:"left",width:"100%",marginBottom:"24px",letterSpacing:0},Size:{height:"30px",weight:"30px"},common:{display:"flex",justifyContent:"center",alignItems:"center"},captcha:{display:"flex",alignContent:"stretch",justifyContent:"space-between","& .captcha-container":{borderRadius:"10px",display:"flex",zIndex:1}},Boy:{top:"24%",left:"7%",position:"absolute"},Logo:{position:"fixed",right:30,bottom:10},content:{display:"flex",height:"100vh",justifyContent:"center",alignItems:"center",flexDirection:"column"},title:{textAlign:"center",top:32,position:"absolute",fontWeight:"600",letterSpacing:0},formLabel:{textAlign:"left",width:"100%",marginBottom:"16px",fontWeight:"600",letterSpacing:0},form:{width:"100%",maxWidth:"480px",display:"flex",flexDirection:"column",overFlow:"scroll"},form1:{width:"100%",maxWidth:"550px",maxHeight:"550px",display:"flex",flexDirection:"column",backgroundColor:"#d2d2d2",padding:"30px",borderRadius:"2px"},formBottom:{marginTop:"20px",display:"flex",justifyContent:"space-between",zIndex:1},formButtonLinks:{zIndex:1},input:{marginBottom:"16px"},logoImage:{position:"absolute",top:22,left:22},footerLogo:{position:"absolute",bottom:10,right:30,height:"100px",userSelect:"none",textAlign:"right"},dividerContainer:{display:"flex",flexDirection:"colmn",justifyContent:"center",alignItems:"center",flex:1,margin:"20px 0"},dividerLabel:{margin:"0 20px"},divider:{flex:1,border:"solid thin #30B9EF"},button:{fontWeight:"600",flex:1,width:"100%"},link:{color:"#000",textDecoration:"none"},buttonLink:{color:"#000",textDecoration:"none",backgroundColor:"#fff45b"},close:{float:"right",justifyContent:"right",alignItems:"right"}};t.default=B}}]);