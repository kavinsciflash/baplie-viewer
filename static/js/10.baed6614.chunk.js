/*! For license information please see 10.baed6614.chunk.js.LICENSE.txt */
(this["webpackJsonpbaplie-viewer"]=this["webpackJsonpbaplie-viewer"]||[]).push([[10],{203:function(e,t,n){"use strict";var o=n(0),r=n.n(o),a=n(7),i=n.n(a);function c(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}!function(e,t){void 0===t&&(t={});var n=t.insertAt;if("undefined"!=typeof document){var o=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css","top"===n&&o.firstChild?o.insertBefore(r,o.firstChild):o.appendChild(r),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(document.createTextNode(e))}}(".style_captchaContainer__LdFYB {\n  display: flex;\n  align-items: center;\n}\n\n.style_retryButton__2gxEO {\n  border: none;\n  margin: 0 0 0 16px;\n  padding: 0;\n  width: auto;\n  overflow: visible;\n  background: transparent;\n  color: inherit;\n  font: inherit;\n  line-height: normal;\n  -webkit-font-smoothing: inherit;\n  -moz-osx-font-smoothing: inherit;\n  -webkit-appearance: none;\n  outline: none;\n  text-align: inherit;\n}\n",{insertAt:"top"});var f=function(e){function t(e){var n,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this,o=u(t).call(this,e),n=!o||"object"!=typeof o&&"function"!=typeof o?d(this):o,l(d(n),"generateCode",(function(){for(var e=n.props,t=e.chars,o=e.charsCount,r=[],a=0;a<o;a+=1){var i=Math.ceil(Math.random()*t.length);t[i]&&-1===r.indexOf(t[i])?r.push(t[i]):a-=1}return r.join("")})),l(d(n),"resetCaptcha",(function(e){e.preventDefault(),n.generateCaptcha()})),l(d(n),"generateCaptcha",(function(){var e=n.props,t=e.width,o=e.height,r=e.fontSize,a=e.captchaCode,i=e.backgroundColor,c=e.fontFamily,l=e.fontColor;n.captchaCode=n.generateCode();var u=n.canvasRef.current.getContext("2d");u.fillStyle=i,u.fillRect(0,0,t,o),u.font="".concat(r,"px ").concat(c),u.textAlign="center",u.textBaseline="middle",u.fillStyle=l,u.fillText(n.captchaCode.split("").join(" "),t/2,o/2),a(n.captchaCode)})),n.canvasRef=r.a.createRef(),n.captchaCode="",n}var n,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(t,o.Component),n=t,(a=[{key:"componentDidMount",value:function(){this.generateCaptcha()}},{key:"render",value:function(){var e=this.props,t=e.width,n=e.height,o=e.retryIcon,a=e.containerClassName,i=e.captchaClassName,c=e.retryButtonClassName,l=e.retryImgClassName,u=e.retry,s=e.retryIconSize;return r.a.createElement("div",{className:a},r.a.createElement("canvas",{width:t,height:n,ref:this.canvasRef,style:{pointerEvents:"none"},className:i}),u&&r.a.createElement("button",{onClick:this.resetCaptcha,id:"retryButton",className:c},r.a.createElement("img",{src:o,alt:"Re-new captcha",className:l,width:s,height:s})))}}])&&c(n.prototype,a),t}();f.defaultProps={width:100,height:40,fontSize:22,fontFamily:"Arial, Tahoma",fontColor:"#000",chars:"abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",charsCount:4,backgroundColor:"#F2F2F2",retry:!0,retryIcon:"https://cdn.jsdelivr.net/npm/react-client-captcha/dist/retry.svg",retryIconSize:24,retryButtonClassName:"style_retryButton__2gxEO",retryImgClassName:"",containerClassName:"style_captchaContainer__LdFYB",captchaClassName:""},f.propTypes={width:i.a.number.isRequired,height:i.a.number.isRequired,fontSize:i.a.number,fontFamily:i.a.string,fontColor:i.a.string,chars:i.a.string,charsCount:i.a.number,captchaCode:i.a.func.isRequired,backgroundColor:i.a.string,retry:i.a.bool,retryIcon:i.a.string,retryIconSize:i.a.number,retryButtonClassName:i.a.string,retryImgClassName:i.a.string,containerClassName:i.a.string,captchaClassName:i.a.string},t.a=f},408:function(e,t,n){},409:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return I}));var o=n(0),r=n.n(o),a=n(39),i=n.n(a),c=n(410),l=n.n(c),u=n(411),s=n(415);function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}var f=function(e){var t=e.classes,n=e.classNames,o=e.styles,a=e.id,i=e.closeIcon,c=e.onClick;return r.a.createElement("button",{id:a,className:l()(t.closeButton,null==n?void 0:n.closeButton),style:null==o?void 0:o.closeButton,onClick:c,"data-testid":"close-button"},i||r.a.createElement("svg",{className:null==n?void 0:n.closeIcon,style:null==o?void 0:o.closeIcon,width:28,height:28,viewBox:"0 0 36 36","data-testid":"close-icon"},r.a.createElement("path",{d:"M28.5 9.62L26.38 7.5 18 15.88 9.62 7.5 7.5 9.62 15.88 18 7.5 26.38l2.12 2.12L18 20.12l8.38 8.38 2.12-2.12L20.12 18z"})))},v="undefined"!==typeof window,m=["input","select","textarea","a[href]","button","[tabindex]","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])'];function p(e){return null===e.offsetParent||"hidden"===getComputedStyle(e).visibility}function h(e){if("INPUT"!==e.tagName||"radio"!==e.type||!e.name)return!0;var t=(e.form||e.ownerDocument).querySelectorAll('input[type="radio"][name="'+e.name+'"]'),n=function(e,t){for(var n=0;n<e.length;n++)if(e[n].checked&&e[n].form===t)return e[n]}(t,e.form);return n===e||void 0===n&&t[0]===e}function y(e){for(var t=document.activeElement,n=e.querySelectorAll(m.join(",")),o=[],r=0;r<n.length;r++){var a=n[r];(t===a||!a.disabled&&g(a)>-1&&!p(a)&&h(a))&&o.push(a)}return o}function g(e){var t=parseInt(e.getAttribute("tabindex"),10);return isNaN(t)?function(e){return e.getAttribute("contentEditable")}(e)?0:e.tabIndex:t}var b=function(e){var t=e.container,n=e.initialFocusRef,r=Object(o.useRef)();return Object(o.useEffect)((function(){var e=function(e){(null==t?void 0:t.current)&&function(e,t){if(e&&"Tab"===e.key){if(!t||!t.contains)return!1;if(!t.contains(e.target))return!1;var n=y(t),o=n[0],r=n[n.length-1];e.shiftKey&&e.target===o?(r.focus(),e.preventDefault()):!e.shiftKey&&e.target===r&&(o.focus(),e.preventDefault())}}(e,t.current)};if(v&&document.addEventListener("keydown",e),v&&(null==t?void 0:t.current)){var o=function(){-1!==m.findIndex((function(e){var t;return null==(t=document.activeElement)?void 0:t.matches(e)}))&&(r.current=document.activeElement)};if(n)o(),requestAnimationFrame((function(){var e;null==(e=n.current)||e.focus()}));else{var a=y(t.current);a[0]&&(o(),a[0].focus())}}return function(){var t;v&&(document.removeEventListener("keydown",e),null==(t=r.current)||t.focus())}}),[t,n]),null},w=[],C=function(e){w.push(e)},E=function(e){w=w.filter((function(t){return t!==e}))},O=function(e){return!!w.length&&w[w.length-1]===e};var j={root:"react-responsive-modal-root",overlay:"react-responsive-modal-overlay",overlayAnimationIn:"react-responsive-modal-overlay-in",overlayAnimationOut:"react-responsive-modal-overlay-out",modalContainer:"react-responsive-modal-container",modalContainerCenter:"react-responsive-modal-containerCenter",modal:"react-responsive-modal-modal",modalAnimationIn:"react-responsive-modal-modal-in",modalAnimationOut:"react-responsive-modal-modal-out",closeButton:"react-responsive-modal-closeButton"},I=r.a.forwardRef((function(e,t){var n,a,c,m,p=e.open,h=e.center,y=e.blockScroll,g=void 0===y||y,w=e.closeOnEsc,I=void 0===w||w,N=e.closeOnOverlayClick,A=void 0===N||N,S=e.container,x=e.showCloseIcon,k=void 0===x||x,B=e.closeIconId,R=e.closeIcon,T=e.focusTrapped,_=void 0===T||T,P=e.initialFocusRef,L=void 0===P?void 0:P,F=e.animationDuration,D=void 0===F?300:F,M=e.classNames,z=e.styles,q=e.role,Y=void 0===q?"dialog":q,G=e.ariaDescribedby,K=e.ariaLabelledby,H=e.modalId,J=e.onClose,U=e.onEscKeyDown,W=e.onOverlayClick,Q=e.onAnimationEnd,V=e.children,X=e.reserveScrollBarGap,Z=Object(s.a)(t),$=Object(o.useRef)(null),ee=Object(o.useRef)(null),te=Object(o.useRef)(null);null===te.current&&v&&(te.current=document.createElement("div"));var ne=Object(o.useState)(!1),oe=ne[0],re=ne[1];!function(e,t){Object(o.useEffect)((function(){return t&&C(e),function(){E(e)}}),[t,e])}($,p),function(e,t,n,r,a){var i=Object(o.useRef)(null);Object(o.useEffect)((function(){return t&&e.current&&r&&(i.current=e.current,Object(u.a)(e.current,{reserveScrollBarGap:a})),function(){i.current&&(Object(u.b)(i.current),i.current=null)}}),[t,n,e,r,a])}($,p,oe,g,X);var ae=function(e){27===e.keyCode&&O($)&&(null==U||U(e),I&&J())};Object(o.useEffect)((function(){return function(){oe&&(te.current&&!S&&document.body.contains(te.current)&&document.body.removeChild(te.current),document.removeEventListener("keydown",ae))}}),[oe]),Object(o.useEffect)((function(){p&&!oe&&(re(!0),!te.current||S||document.body.contains(te.current)||document.body.appendChild(te.current),document.addEventListener("keydown",ae))}),[p]);var ie=function(){ee.current=!1},ce=S||te.current,le=p?null!=(n=null==M?void 0:M.overlayAnimationIn)?n:j.overlayAnimationIn:null!=(a=null==M?void 0:M.overlayAnimationOut)?a:j.overlayAnimationOut,ue=p?null!=(c=null==M?void 0:M.modalAnimationIn)?c:j.modalAnimationIn:null!=(m=null==M?void 0:M.modalAnimationOut)?m:j.modalAnimationOut;return oe&&ce?i.a.createPortal(r.a.createElement("div",{className:l()(j.root,null==M?void 0:M.root),style:null==z?void 0:z.root,"data-testid":"root"},r.a.createElement("div",{className:l()(j.overlay,null==M?void 0:M.overlay),"data-testid":"overlay","aria-hidden":!0,style:d({animation:le+" "+D+"ms"},null==z?void 0:z.overlay)}),r.a.createElement("div",{ref:$,className:l()(j.modalContainer,h&&j.modalContainerCenter,null==M?void 0:M.modalContainer),style:null==z?void 0:z.modalContainer,"data-testid":"modal-container",onClick:function(e){null===ee.current&&(ee.current=!0),ee.current?(null==W||W(e),A&&J(),ee.current=null):ee.current=null}},r.a.createElement("div",{ref:Z,className:l()(j.modal,null==M?void 0:M.modal),style:d({animation:ue+" "+D+"ms"},null==z?void 0:z.modal),onMouseDown:ie,onMouseUp:ie,onClick:ie,onAnimationEnd:function(){p||re(!1),null==Q||Q()},id:H,role:Y,"aria-modal":"true","aria-labelledby":K,"aria-describedby":G,"data-testid":"modal",tabIndex:-1},_&&r.a.createElement(b,{container:Z,initialFocusRef:L}),V,k&&r.a.createElement(f,{classes:j,classNames:M,styles:z,closeIcon:R,onClick:J,id:B})))),ce):null}))}).call(this,n(110))},410:function(e,t,n){var o;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var o=arguments[t];if(o){var a=typeof o;if("string"===a||"number"===a)e.push(o);else if(Array.isArray(o)){if(o.length){var i=r.apply(null,o);i&&e.push(i)}}else if("object"===a)if(o.toString===Object.prototype.toString)for(var c in o)n.call(o,c)&&o[c]&&e.push(c);else e.push(o.toString())}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(o=function(){return r}.apply(t,[]))||(e.exports=o)}()},411:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return p}));var o=!1;if("undefined"!==typeof window){var r={get passive(){o=!0}};window.addEventListener("testPassive",null,r),window.removeEventListener("testPassive",null,r)}var a="undefined"!==typeof window&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||"MacIntel"===window.navigator.platform&&window.navigator.maxTouchPoints>1),i=[],c=!1,l=-1,u=void 0,s=void 0,d=function(e){return i.some((function(t){return!(!t.options.allowTouchMove||!t.options.allowTouchMove(e))}))},f=function(e){var t=e||window.event;return!!d(t.target)||(t.touches.length>1||(t.preventDefault&&t.preventDefault(),!1))},v=function(){void 0!==s&&(document.body.style.paddingRight=s,s=void 0),void 0!==u&&(document.body.style.overflow=u,u=void 0)},m=function(e,t){if(e){if(!i.some((function(t){return t.targetElement===e}))){var n={targetElement:e,options:t||{}};i=[].concat(function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}(i),[n]),a?(e.ontouchstart=function(e){1===e.targetTouches.length&&(l=e.targetTouches[0].clientY)},e.ontouchmove=function(t){1===t.targetTouches.length&&function(e,t){var n=e.targetTouches[0].clientY-l;!d(e.target)&&(t&&0===t.scrollTop&&n>0||function(e){return!!e&&e.scrollHeight-e.scrollTop<=e.clientHeight}(t)&&n<0?f(e):e.stopPropagation())}(t,e)},c||(document.addEventListener("touchmove",f,o?{passive:!1}:void 0),c=!0)):function(e){if(void 0===s){var t=!!e&&!0===e.reserveScrollBarGap,n=window.innerWidth-document.documentElement.clientWidth;t&&n>0&&(s=document.body.style.paddingRight,document.body.style.paddingRight=n+"px")}void 0===u&&(u=document.body.style.overflow,document.body.style.overflow="hidden")}(t)}}else console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.")},p=function(e){e?(i=i.filter((function(t){return t.targetElement!==e})),a?(e.ontouchstart=null,e.ontouchmove=null,c&&0===i.length&&(document.removeEventListener("touchmove",f,o?{passive:!1}:void 0),c=!1)):i.length||v()):console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.")}},415:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var o=n(22),r=n(0),a=n.n(r);function i(e){var t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=a.a.useState(e),n=Object(o.a)(t,2),r=n[0],i=n[1],c=a.a.useRef({current:r}),l=c.current;return Object.defineProperty(l,"current",{get:function(){return r},set:function(e){Object.is(r,e)||(r=e,i(e))}}),l}(null);return a.a.useEffect((function(){e&&("function"===typeof e?e(t.current):e.current=t.current)})),t}}}]);