"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[71526],{157796:(e,t,n)=>{n.d(t,{Z:()=>l});var o=n(667294),i=n(883119),a=n(785893);function l({color:e="red",duration:t,finalProgress:n,shape:l="pill"}){let[r,s]=(0,o.useState)(!1);(0,o.useEffect)(()=>{let e=setTimeout(()=>{s(!0)},0);return()=>{clearTimeout(e)}},[]);let c="pill"===l;return(0,a.jsx)(i.xu,{color:e,height:c?8:6,rounding:c?"pill":2,width:`${n}%`,dangerouslySetInlineStyle:{__style:{transform:c?`translateX(${r?"-5px":"-100%"})`:`scaleX(${r?1:0})`,transformOrigin:"left",transitionDuration:`${t}ms`,transitionTimingFunction:"ease-in"}}})}},100183:(e,t,n)=>{n.d(t,{CC:()=>i,Ll:()=>l,XF:()=>a});let o=(e,t,n)=>({x:Math.floor(e*Math.cos(n)),y:Math.floor(t*Math.sin(n))}),i=(e,t)=>o(t/2,e/2,2*Math.random()*Math.PI),a=(e,t)=>Math.floor(Math.random()*(t-e+1))+e,l=e=>["@-webkit-keyframes","@keyframes"].map(t=>e.map(e=>t+" "+e).join("\n")).join("\n")},780678:(e,t,n)=>{n.d(t,{Z:()=>i,v:()=>o});let o=()=>"undefined"!=typeof navigator&&"getInstalledRelatedApps"in navigator;async function i(){if(!o())return[];try{let e=await navigator.getInstalledRelatedApps();return e}catch(e){return[]}}},830269:(e,t,n)=>{n.d(t,{Z:()=>o});let o={EMAIL:1,FACEBOOK:2,GPLUS:3,GOOGLE_ONE_TAP:4,SMARTLOCK:5,MULTIFACTOR:6,SWITCH_ACCOUNT:7,LINE:8}},553171:(e,t,n)=>{n.d(t,{Z:()=>g});var o=n(231486),i=n(226198),a=n(844974),l=n(966113),r=n(826067),s=n(643913),c=n(709113);let d="undefined"!=typeof window,u=d?`${window.location.origin}/oauth/line/redirect`:"",_=({origin:e,data:t})=>t&&e===window.location.origin?String(t):null,p=({url:e,key:t})=>{if(!e.startsWith(window.location.origin)||t!==c.MM)return null;let n=(0,a.qn)(c.MM);return(0,a.L_)(c.MM),n};function g(e,t){let n;if(!d){var a;null===(a=t.error)||void 0===a||a.call(t,{message:"Window is undefined"});return}let c=function(e=5){let t="abcdefghijklmnopqrstuvwxyz1234567890";return Array(e).fill("").map(()=>t[Math.floor(Math.random()*t.length)]).join("")}(10),g=async e=>{if(!e.isTrusted)return;let a=e instanceof MessageEvent?_(e):p(e),l=(0,r.mB)(a);if(l.state&&l.code&&l.state===c){var d,h,m;n&&!n.closed&&n.close();try{let e=await fetch("/oauth/line/verify",{headers:{"Content-type":"application/x-www-form-urlencoded; charset=UTF-8","x-csrftoken":`${String(o.U2(i.fS))}`},method:"POST",body:(0,s.Z)({code:l.code,redirect_uri:u})}),n=await e.json(),{id_token:a,access_token:r}=n;a&&r?t.success({line_id_token:a,line_access_token:r}):null===(d=t.error)||void 0===d||d.call(t,{message:"No tokens returned"})}catch(e){null===(h=t.error)||void 0===h||h.call(t,e)}finally{n&&!n.closed&&n.close(),window.removeEventListener("message",g),window.removeEventListener("storage",g),null===(m=t.complete)||void 0===m||m.call(t)}}};window.addEventListener("message",g),window.addEventListener("storage",g),n=window.open(`https://access.line.me/oauth2/v2.1/authorize?response_type=code&client_id=${l.zal}&redirect_uri=${encodeURIComponent(u)}&state=${c}&ui_locales=${e}&scope=profile%20openid%20email`,"_blank")}},101331:(e,t,n)=>{n.d(t,{A:()=>u,Z:()=>d});var o=n(667294),i=n(112690),a=n(385740),l=n(780679),r=n(458882),s=n(957161),c=n(709113);function d(){let{trackConversionUpsellForContext:e}=(0,l.g)()||{},{trackConversionUpsellForContext:t}=(0,r.l)()||{},{viewType:n,viewParameter:o}=(0,a.SU)();return{trackConversionUpsell:({eventType:i,viewType:a,viewParameter:l,element:r,component:s,upsellReason:c,incrementUpsellReasonCounter:d})=>{let u=e||t;u&&u({eventType:i,viewType:a||n||202,viewParameter:l||o,element:r,component:s,upsellReason:c,incrementUpsellReasonCounter:d})}}}function u(){let e=(0,i.Z)(),t=(0,o.useRef)(null),n=()=>s.Z.getItem(c.w0)||0,a=()=>{s.Z.setItem(c.w0,n()+1)};return{trackConversionUpsellForContext:({eventType:o,viewType:i,viewParameter:l,element:r,component:d,upsellReason:u,incrementUpsellReasonCounter:_})=>{14688===o&&(s.Z.setItem(c.bg,u||""),t.current=d,!1!==_&&a()),e({event_type:o,view_type:i,view_parameter:l,element:r,component:t.current,aux_data:{upsell_reason:s.Z.getItem(c.bg)||null,upsell_view_count:n()}})}}}},329900:(e,t,n)=>{n.d(t,{Z:()=>y});var o=n(407043),i=n(773285),a=n(780280),l=n(619277),r=n(948376),s=n(172071),c=n(780678),d=n(826067);let u="http://play.google.com/store/apps/details?id=com.pinterest",_=["access_token","new_password","new_password_confirm","password","next"],p=(e,t)=>t?(0,d.ru)(e,{invite_code:t}):e,g=(e,t,n)=>{if("ios"===t&&"string"==typeof e&&e.startsWith("discover/article/")){let t=e.split("/")[2];e=`discover_article/${t}/?is_deeplink=1`}return("string"==typeof e&&"shopping/"===e&&(e="?is_deeplink=1"),"string"==typeof e)?p(e,n):"ios"===t||"ipad"===t?p(e.iOS,n):"android"===t?p(e.android,n):null},h=({deeplinkUri:e,invite_code:t,platform:n,fallbackUrl:o,unauthId:i,app_upsell_type:a})=>({deeplink_path:g(e,n,t),current_page_url:(0,d.Gw)("undefined"!=typeof window?window.location.href:"",_),install_id:i,utm_source:140,utm_medium:2152,app_upsell_type:a,...o?{af_r:o}:null}),m=({deeplinkUri:e,invite_code:t,platform:n,unauthId:o,app_upsell_type:i})=>{let a=JSON.stringify({deeplink_path:g(e,n,t),current_page_url:(0,d.Gw)("undefined"!=typeof window?window.location.href:"",_),install_id:o}),l=(0,d.XP)({utm_source:"mweb",utm_medium:"upsell",utm_content:a,app_upsell_type:i});return{referrer:l}},f=({unauthId:e,app_upsell_type:t})=>{let n=(0,d.XP)({utm_source:"mweb",utm_medium:"upsell",utm_campaign:"twa",utm_content:e,app_upsell_type:t});return{referrer:encodeURI(n)}},w=({isAuthenticated:e,deeplinkUri:t,fallbackUrl:n,invite_code:o,logContextEvent:i,platform:a,redirectToLite:l,unauthId:r,userAgent:_,app_upsell_type:p})=>{if(null==i||i({component:14347,element:13582,event_type:701,view_type:20,view_parameter:3844,aux_data:{app_upsell_type:p}}),t){let g=h({isAuthenticated:e,deeplinkUri:t,fallbackUrl:n,invite_code:o,platform:a,unauthId:r,userAgent:_,app_upsell_type:p});if(s.Z.increment("mweb.deeplink",1,{platform:a}),o&&s.Z.increment("mweb.deeplink.invite_code",1),s.Z.increment("mweb.deeplink.unauthId",1,{withUnauthId:!!r}),l){s.Z.increment("mweb.deeplink.lite_link",1),null==i||i({component:14347,element:13582,event_type:14540,view_type:20,view_parameter:3844,aux_data:{app_upsell_type:p}});let e=f({unauthId:r,app_upsell_type:p});window.location.href=(0,d.ru)("http://play.google.com/store/apps/details?id=com.pinterest.twa",e)}else if("android"===a){let e=m({deeplinkUri:t,invite_code:o,platform:a,unauthId:r,app_upsell_type:p});(0,c.v)()?(0,c.Z)().then(t=>{if(t.length>0){let e=(0,d.ru)(window.location.href,g);null==i||i({component:14347,element:13582,event_type:703,view_type:20,view_parameter:3844,aux_data:{app_upsell_type:p}});let t=window.open(e);t||null==i||i({component:14347,element:13582,event_type:702,view_type:20,view_parameter:3844,aux_data:{app_upsell_type:p}})}else null==i||i({component:14347,element:13582,event_type:14538,view_type:20,view_parameter:3844,aux_data:{app_upsell_type:p}}),window.location.href=(0,d.ru)(u,e)}).catch(()=>{s.Z.increment("mweb_android.deeplink.playStore.error",1)}):(null==i||i({component:14347,element:13582,event_type:14538,view_type:20,view_parameter:3844,aux_data:{app_upsell_type:p}}),window.location.href=(0,d.ru)(u,e))}else{if(s.Z.increment("mweb.deeplink.appsflyer_link",1),"ios"===a&&"undefined"!=typeof window&&window.location.href.includes("show_yip_modal")){window.location.href=(0,d.ru)("https://pinterest.com/pinterest-predicts",g);return}null==i||i({component:14347,element:13582,event_type:14539,view_type:20,view_parameter:3844,aux_data:{app_upsell_type:p}}),window.location.href=(0,d.ru)("https://pinterest.onelink.me/TVSr/21e04bfd",g)}}};var b=n(785893);function x({children:e,invite_code:t}){let{isAuthenticated:n,isBot:l,unauthId:s,userAgent:{platform:c,raw:d}}=(0,a.B)(),{logContextEvent:u}=(0,o.v)(),{checkExperiment:_}=(0,i.F)(),p=async(e,o,i)=>{u({component:14347,element:13582,event_type:700,view_type:20,view_parameter:3844,aux_data:{app_upsell_type:o}}),w({isAuthenticated:n,checkExperiment:_,deeplinkUri:e,fallbackUrl:i,invite_code:t,logContextEvent:u,platform:c,redirectToLite:(0,r.Rp)({isBot:l,platform:c,userAgent:d}),unauthId:s,userAgent:d,app_upsell_type:o})};return e(p)}let v=e=>(0,b.jsx)(l.ty,{children:t=>(0,b.jsx)(x,{...e,invite_code:t})});v.displayName="DeepLinkNavigator";let y=v},63552:(e,t,n)=>{n.d(t,{Z:()=>a});var o=n(883119),i=n(785893);function a({children:e,onMouseEnter:t,onMouseLeave:n,onTouch:a,rounding:l,fullWidth:r=!1,pressState:s="none",accessibilityLabel:c,role:d}){let u=(Array.isArray(s)?s:[s]).includes("compress");return(0,i.jsx)(o.iP,{fullWidth:r,onMouseEnter:t&&(({event:e})=>t(e)),onMouseLeave:n&&(({event:e})=>n(e)),onTap:a&&(({event:e})=>a(e)),rounding:l,tapStyle:u?"compress":"none",accessibilityLabel:c,role:d,children:e})}},598615:(e,t,n)=>{n.d(t,{B:()=>h,Z:()=>m});var o=n(667294),i=n(616550),a=n(172071),l=n(407043),r=n(385740),s=n(53987),c=n(780280),d=n(867820),u=n(52022),_=n(938917),p=n(329900),g=n(785893);let h=(e,t)=>"/"===e.pathname?"/":(0,s.am)(e)&&t?`board/${e.pathname.substr(1)}`:e.pathname.substr(1);function m({children:e,componentType:t,app_upsell_type:n}){let s=(0,i.useLocation)(),{flushContextEvents:m,logContextEvent:f}=(0,l.v)(),{viewType:w,viewParameter:b}=(0,r.SU)(),x=(0,u.Z)(),{userAgent:{platform:v}}=(0,c.B)();(0,o.useEffect)(()=>{x({action:"view",item:"download-button",within:n})},[s,n,x]);let y=(0,o.useRef)(!1);(0,o.useEffect)(()=>{w&&202!==w?(f({component:t||13106,element:10308,event_type:9976,view_type:w,view_parameter:b,aux_data:{app_upsell_type:n,app_upsell_is_dupe:y.current}}),y.current=!0):a.Z.increment("webapp.track_app_upsell_viewed_invalid_parameters",1,{component:t,view_type:w,view_parameter:b,app_upsell_type:n,app_upsell_is_dupe:y.current})},[t,f,b,w,n]);let k=(0,_.Z)();return(0,o.useEffect)(()=>{k||(0,d.My)(`mweb.app_upsell.forbidden_upsell.${n}`)},[k,n]),(0,g.jsx)(p.Z,{children:o=>e({handleOpenApp:e=>{if(x({action:"click",item:"download-button",within:n}),(0,d.NC)("press_open_app",!0),f({component:t||13106,element:10308,event_type:102,view_type:w||202,view_parameter:b,aux_data:{app_upsell_type:n}}),f({component:t||13106,element:10308,event_type:9977,view_type:w||202,view_parameter:b,aux_data:{app_upsell_type:n}}),m(!0),o){var i;f({component:t||13106,element:10308,event_type:1701,view_type:w||202,view_parameter:b,aux_data:{app_upsell_type:n}}),o(null!==(i=null==e?void 0:e.deepLinkUri)&&void 0!==i?i:h(s,"android"===v),n)}}})})}},938917:(e,t,n)=>{n.d(t,{Z:()=>i});var o=n(702664);let i=()=>(0,o.useSelector)(({session:{canUseNativeApp:e}})=>e)},948376:(e,t,n)=>{n.d(t,{G3:()=>d,Rp:()=>c,kp:()=>r});var o=n(202139),i=n(844974),a=n(339363);let l=14*o.F4,r=(e,t)=>{let n=function(){let e=Date.now(),t=Number((0,i.qn)("appUpsell")),n=Number((0,i.qn)("firstUpsellTime")),o=!!(0,a.qn)("showedAppUpsellCurrentSession");return{currentTime:e,firstUpsellTime:n,lastUpsellTime:t,showedAppUpsellCurrentSession:o}}();return e?function(e,t,n){let{currentTime:o,firstUpsellTime:a,lastUpsellTime:r,showedAppUpsellCurrentSession:s}=e;return(n=n||l,!a||o<a+t)?!s:o-r>n&&((0,i.L_)("firstUpsellTime"),!0)}(n,o.F4):function(e,t){let{currentTime:n,lastUpsellTime:o}=e;return t=t||l,!o||n-o>t}(n,t)},s=e=>{e=e.toLowerCase();let t=e.match(/android\s([0-9\.]*)/i);return t?t[1]:void 0},c=({isBot:e,platform:t,userAgent:n})=>{try{return!e&&"android"===t&&7>parseFloat(s(n))}catch(e){return!1}},d=e=>(e.startsWith("zh")||e.startsWith("ar")?e:e.slice(0,2)).toUpperCase()},43186:(e,t,n)=>{n.d(t,{u:()=>m,Z:()=>w});var o=n(667294),i=n(616550),a=n(883119),l=n(56641),r=n(499128),s=n(898781),c=n(785893);function d(){return(0,c.jsx)("svg",{width:"40px",height:"40px",viewBox:"0 0 40 40",version:"1.1",xmlns:"http://www.w3.org/2000/svg",children:(0,c.jsx)("g",{stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd",children:(0,c.jsx)("path",{d:"M28.2226562,20.3846154 C29.0546875,20.3846154 30.0976562,19.8048315 30.71875,19.0317864 C31.28125,18.3312142 31.6914062,17.352829 31.6914062,16.3744437 C31.6914062,16.2415766 31.6796875,16.1087095 31.65625,16 C30.7304687,16.0362365 29.6171875,16.640178 28.9492187,17.4494596 C28.421875,18.06548 27.9414062,19.0317864 27.9414062,20.0222505 C27.9414062,20.1671964 27.9648438,20.3121424 27.9765625,20.3604577 C28.0351562,20.3725366 28.1289062,20.3846154 28.2226562,20.3846154 Z M25.2929688,35 C26.4296875,35 26.9335938,34.214876 28.3515625,34.214876 C29.7929688,34.214876 30.109375,34.9758423 31.375,34.9758423 C32.6171875,34.9758423 33.4492188,33.792117 34.234375,32.6325493 C35.1132812,31.3038779 35.4765625,29.9993643 35.5,29.9389701 C35.4179688,29.9148125 33.0390625,28.9122695 33.0390625,26.0979021 C33.0390625,23.6579784 34.9140625,22.5588048 35.0195312,22.474253 C33.7773438,20.6382708 31.890625,20.5899555 31.375,20.5899555 C29.9804688,20.5899555 28.84375,21.4596313 28.1289062,21.4596313 C27.3554688,21.4596313 26.3359375,20.6382708 25.1289062,20.6382708 C22.8320312,20.6382708 20.5,22.5950413 20.5,26.2911634 C20.5,28.5861411 21.3671875,31.013986 22.4335938,32.5842339 C23.3476562,33.9129053 24.1445312,35 25.2929688,35 Z",id:"",fill:"#FFFFFF",fillRule:"nonzero"})})})}var u=n(844974),_=n(867820),p=n(343341),g=n(529195),h=n(275926);let m="web_siwa_redirect_path",f="id_token=";function w(){let e=(0,s.ZP)(),t=(0,i.useLocation)(),n=(0,h.f)(),w=(0,i.useHistory)(),{showToast:b}=(0,p.F9)(),[x,v]=(0,o.useState)(!1),y=t.hash.indexOf(f),k=y>=0?t.hash.substring(y+f.length):null,C=(0,o.useRef)(null);return(0,o.useEffect)(()=>{let o=async o=>{(0,_.My)("in_app_oauth.login.siwa.returned_with_token"),v(!0),n({apple_token:o},w,t.pathname,{noImmediateRedirect:!0},{event_type:7534,view_type:10}).then(()=>{v(!1),(0,_.My)("in_app_oauth.login.siwa.login_success");let e=(0,u.qn)(m);(0,u.L_)(m),(0,l.Z)(e||"/")}).catch(()=>{v(!1),(0,_.My)("in_app_oauth.login.siwa.login_failure"),b(({hideToast:t})=>(0,c.jsx)(r.ZP,{text:e._('Oops! You do not have an account connected with Apple. Please try another method.', 'mweb.unauth.oauth_apple_login.login_failure_toast', 'Toast to alert user they failed to login with Apple'),onHide:t,type:"error"}))})};C.current!==k&&k&&o(k),C.current=k},[w,e,k,t,n,b]),x?(0,c.jsx)(a.$j,{accessibilityLabel:e._('Loading...', 'Loading', 'Loading'),show:!0}):(0,c.jsx)(a.iP,{onTap:()=>{var e;(0,_.My)("in_app_oauth.login.siwa_button.tapped");let n=(null===(e=t.state)||void 0===e?void 0:e.next)||(0,g.Yy)(t),o=n?decodeURIComponent(n):null;(0,u.Nh)(m,o),(0,l.Z)(`https://appleid.apple.com/auth/authorize?client_id=com.pinterest.signinwithapple&redirect_uri=${encodeURIComponent(window.location.origin.toString()+"/oauth/login")}&response_type=${encodeURIComponent("code id_token")}&response_mode=fragment`)},children:(0,c.jsxs)(a.xu,{height:40,width:"100%",display:"flex",alignItems:"center",color:"dark",rounding:"pill",paddingX:2,paddingY:1,children:[(0,c.jsx)(a.xu,{marginStart:-3,marginTop:-2,children:(0,c.jsx)(d,{})}),(0,c.jsx)(a.xu,{marginStart:"auto",marginEnd:"auto",children:(0,c.jsx)(a.xv,{weight:"bold",color:"light",children:e._('Continue with Apple', 'mweb.unauth.oauth_apple_login.login_button', 'Text on button allowing users to login with their Apple account')})})]})})}},368095:(e,t,n)=>{n.d(t,{Z:()=>c});var o=n(667294),i=n(883119),a=n(121151),l=n(898781),r=n(867820),s=n(785893);function c({onDismiss:e}){let t=(0,l.ZP)();(0,o.useEffect)(()=>{(0,r.My)("unauth_mweb.login_rate_limited.view")},[]);let n=t._('Oops! Too many login attempts', 'LoginRateLimitedModal.Modal.Heading', 'Modal heading for user who have tried to login too many times');return(0,s.jsxs)(a.ZP,{accessibilityModalLabel:n,onDismiss:e,heading:(0,s.jsxs)(i.xu,{"data-test-id":"login-rate-limited-header",children:[(0,s.jsx)(i.xu,{justifyContent:"center",display:"flex",padding:6,children:(0,s.jsx)(i.JO,{icon:"pinterest",accessibilityLabel:t._('Pinterest logo', 'Accessibility label for Pinterest icon', 'Accessibility label for Pinterest icon'),color:"brandPrimary",size:40})}),(0,s.jsx)(i.X6,{align:"center",size:"500",accessibilityLevel:1,children:n})]}),children:[(0,s.jsx)(i.xu,{paddingX:12,marginTop:4,marginBottom:8,"data-test-id":"login-rate-limited-text",children:(0,s.jsx)(i.xv,{align:"center",children:t._('You have reached the maximum number of login attempts. Try again in 30 minutes.', 'LoginRateLimitedModal.Modal.Heading', 'Modal heading for user who have tried to login too many times')})}),(0,s.jsx)(i.xu,{paddingX:12,marginBottom:8,"data-test-id":"login-rate-limited-footer",children:(0,s.jsx)(i.zx,{fullWidth:!0,color:"red",text:t._('Okay', 'LoginRateLimitedModal.Modal.OkButton', 'Okay button used to close modal'),onClick:e})})]})}},172351:(e,t,n)=>{n.d(t,{Z:()=>X});var o=n(667294),i=n(702664),a=n(616550),l=n(883119),r=n(204324),s=n(112690),c=n(989392),d=n(499128),u=n(898781),_=n(584595),p=n(432300),g=n(45169),h=n(830269),m=n(773285),f=n(780280),w=n(957161),b=n(867820),x=n(52022),v=n(101331),y=n(343341),k=n(50286),C=n(19121),A=n(962482),j=n(63552),P=n(43186),L=n(467570),Z=n(107287),z=n(785893);function E({onFacebookConnectError:e,onFacebookConnectSuccess:t,onTouch:n,isRerequest:i}){let a=(0,u.ZP)(),{checkExperiment:r}=(0,m.F)(),{locale:s}=(0,f.B)(),{anyEnabled:c}=r("mweb_facebook_disabled"),[d,_]=(0,o.useState)(!1),[p,g]=(0,o.useState)(!1);return(0,o.useEffect)(()=>{c||((0,L.we)(s).then(()=>{_(!0)}),(0,b.My)("pcons.facebook_connect_button_renderd"))},[s,c]),(0,z.jsxs)(l.xu,{position:"relative","data-test-id":"FacebookConnectContainer",children:[(0,z.jsx)(l.xu,{bottom:!0,left:!0,right:!0,top:!0,dangerouslySetInlineStyle:{__style:{pointerEvents:"none"}},position:"absolute",rounding:5,children:(0,z.jsx)("div",{className:"fb-login-button","data-width":"100%","data-max-rows":"1","data-size":"large","data-button-type":"continue_with","data-layout":"rounded","data-show-faces":"false","data-auth-type":i?"rerequest":void 0,"data-scope":(0,L._V)().join(","),"data-auto-logout-link":"false","data-use-continue-as":r("mweb_unauth_remove_fb_signup").anyEnabled?void 0:"true"})}),(0,z.jsxs)("button",{onClick:()=>{(0,b.My)("unauth_mweb.facebook_connect.button_click"),(0,b.EX)({event:"start",provider:"facebook"}),null==n||n(),c?g(!0):d&&(0,L.JF)().then(({creds:e,signupOptions:n})=>{t(e,n)},e)},style:{display:"flex",alignItems:"center",backgroundColor:"#1877F2",border:"none",height:"40px",transition:"opacity .2s linear",width:"100%",minWidth:"240px",borderRadius:"20px",padding:"0px 0px 0px 8px"},type:"button","data-test-id":"FacebookConnectButton",children:[(0,z.jsx)(l.xu,{color:"default",rounding:3,dangerouslySetInlineStyle:{__style:{paddingTop:"5px",paddingLeft:"3px",paddingRight:"2px",marginLeft:"4px",marginRight:"4.4px"}},children:(0,z.jsx)(l.JO,{accessibilityLabel:a._('facebook', 'accessible label for facebook icon', 'accessible label for facebook icon'),color:"shopping",icon:"facebook",inline:!0,size:19})}),(0,z.jsx)(l.xu,{alignItems:"center",display:"flex",justifyContent:"center",flex:"grow",marginEnd:1,children:(0,z.jsx)("span",{style:{fontFamily:"Helvetica, Arial, sans-serif",fontWeight:"bold",color:"#fff",fontSize:"16px",paddingRight:"8px",letterSpacing:"0.25px"},children:a._('Continue with Facebook', 'Login page button', 'Login page button')})})]}),p&&(0,z.jsx)(Z.Z,{type:"facebook",onDismiss:()=>g(!1)})]})}var S=n(553171);let M={defaultButton:{display:"flex",alignItems:"center",backgroundColor:"#00C300",border:"none",height:"40px",transition:"opacity .2s linear",width:"100%",borderRadius:"20px",padding:"0px 0px 0px 8px"},lineLogo:{borderRadius:"12px",backgroundColor:"#00C300",width:"32px",height:"32px"},buttonText:{fontWeight:"bold",color:"#fff",fontSize:"16px",paddingRight:"33px"}},T=({buttonText:e,onLineConnectSuccess:t,onLineConnectError:n,onTouch:o})=>{let i=(0,u.ZP)(),{locale:a}=(0,f.B)(),r={success:e=>{let{line_id_token:n,line_access_token:o}=e;n&&o&&t({line_id_token:n,line_access_token:o},{line_id_token:n,line_access_token:o,type:"line"})},error:n},s=M.defaultButton;return(0,z.jsx)(l.xu,{position:"relative","data-test-id":"LineConnectContainer",children:(0,z.jsxs)("button",{onClick:()=>{(0,b.My)("unauth_mweb.line_connect.button_click"),o&&o(),(0,S.Z)(a,r)},style:s,type:"button","data-test-id":"line-connect-button",children:[(0,z.jsx)("img",{style:M.lineLogo,src:"https://s.pinimg.com/webapp/btn_base-a34b3f23.png",alt:i._('line', 'accessible label for line icon', 'accessible label for line icon')}),(0,z.jsx)(l.kC,{alignItems:"center",justifyContent:"center",flex:"grow",children:(0,z.jsx)("span",{style:M.buttonText,children:e})})]})})};var F=n(368095),R=n(160561),O=n(155949),B=n(275926),U=n(122485),I=n(639952),N=n(53987),D=n(598615);function $({app_upsell_type:e}){let t=(0,u.ZP)(),n=(0,a.useLocation)(),{userAgent:{platform:o}}=(0,f.B)(),{pathname:i}=n;return(0,z.jsx)(l.xu,{"data-test-id":"continue-app-button",marginBottom:2,children:(0,z.jsx)(D.Z,{componentType:13858,app_upsell_type:null!=e?e:"unauth-signup-modal",children:({handleOpenApp:a})=>(0,z.jsx)(l.zx,{text:t._('Get Pinterest App', 'unauth.modal.get_app.button_text', 'App download button text'),color:"red",fullWidth:!0,onClick:()=>{(0,b.My)("homepage_top_module"===e?"mweb.unauth.homepage.top.download_app_button.click":"homepage_bottom_module"===e?"mweb.unauth.homepage.bottom.download_app_button.click":"mweb.unauth.signup_modal.download_app_button.click"),i&&a({deepLinkUri:"/"===i?"/":(0,N.cD)(n)&&("ios"===o||"ipad"===o)?"user"+i:i.substr(1)})}})})})}var W=n(709113),H=n(597897);function X({apple:e,facebook:t,fbConnectHandler:n,footer:L,from:Z,google:S,isBusiness:M,isRerequest:N,line:D,next:X="/",noImmediateRedirect:G,disableFBSignup:q,onFacebookTouch:K,onLoginTouch:J,onSignupTouch:Y,showAppInstallButton:V,showEmailButton:Q,showTextDivider:ee,viewParameter:et,app_upsell_type:en,attributionLabel:eo}){let ei=(0,a.useHistory)(),ea=(0,a.useLocation)(),{country:el}=(0,f.B)(),er=(0,u.ZP)(),{showToast:es}=(0,y.F9)(),ec=(0,s.Z)(),ed=(0,x.Z)(),eu=(0,i.useDispatch)(),e_=(0,B.f)(),ep=(0,H.U)(),{flush:eg}=(0,m.F)(),eh=(0,U.m)(),em=(0,r.Z)(),{isAuth:ef,isLimitedLogin:ew}=(0,C.Z)(),eb=(0,k.ml)(),ex=(0,k.Wb)(),{checkExperiment:ev}=(0,m.F)(),[ey,ek]=(0,o.useState)(null),[eC,eA]=(0,o.useState)(!1),[ej,eP]=(0,o.useState)("default"),{trackConversionUpsell:eL}=(0,v.Z)(),eZ=(0,f.B)(),ez=!!w.Z.getItem(W.V6)&&eZ.experimentsClient.checkExperiment("pcons_last_logged_in").anyEnabled,eE="facebook"===ej&&5e3||"google"===ej&&4e3||void 0;(0,o.useEffect)(()=>{if(ep){var e,t;L&&(null===(e=ep.preload)||void 0===e||e.call(ep,new URL("login.js","file://"))),Q&&(null===(t=ep.preload)||void 0===t||t.call(ep,new URL("signup.js","file://")))}},[]);let eS=(eb||ex)&&!ef&&ev("mweb_ssr_unauth_home_page_v2").anyEnabled,eM=ef?{login_state:ew?p.Z.LIMITED:p.Z.DEFAULT}:Object.freeze({}),eT=e=>{ec({view_type:10,view_parameter:et,element:e,event_type:102,aux_data:eM})},eF=e=>{eL({viewType:10,viewParameter:et,eventType:14689,element:e})},eR=(e,t)=>{let n,o;switch(t){case"facebook":n=3205,o=h.Z.FACEBOOK;break;case"google":n=3204,o=h.Z.GPLUS;break;case"line":n=3556,o=h.Z.LINE}return{event_type:e,view_type:10,view_parameter:n,element:o===h.Z.GPLUS?12981:void 0,aux_data:{...eM,signup_login_method:o}}},eO=(e,t,n,o)=>{ek(null);let i=()=>es(({hideToast:e})=>(0,z.jsx)(d.ZP,{text:t&&t.api_error_code&&t.message?t.message:er._('Sorry, we can\'t log you in.', 'Error message when user having trouble login in.', 'Error message when user having trouble login in.'),onHide:e}));if(t){if((0,b.My)(`unauth_mweb.login_error.api_error_code.${String(t.api_error_code)}`),[_.xN,_.lg,_.Pv].includes(t.api_error_code)){if("facebook"===n.type&&ev("mweb_unauth_remove_fb_signup").anyEnabled){null==q||q();return}(0,b.Rp)({event:"start",provider:o}),"facebook"!==n.type||n.email?(()=>{(0,b.My)("unauth_mweb.facebook_signup_attempt"),n.gender||(0,b.My)("unauth_mweb.facebook_signup_attempt.nogender");let{birthday:e}=n;if(void 0===e||!(0,c.Z)(e)){eg(),ei.push({pathname:"/signup/thirdpartyage/",state:{signupOptions:"facebook"===n.type?{...n,email_source_site:g.E_.FACEBOOK}:n,progressBarAnimationDuration:eE},attributionLabel:eo});return}ek("signup"),eP(o);let t="facebook"===n.type?{...n,email_source_site:g.E_.FACEBOOK,birthday_source_site:g.E_.FACEBOOK,birthday:e}:{...n,birthday:e};(0,b.Rp)({event:"signup_api_call_start",provider:o}),eh(t,{signupAttemptContextEvent:eR(7537,o)}).then(()=>{(0,b.NC)("signup_via_login_buttons"),(0,b.Rp)({event:"signup_api_call_success",provider:o}),["facebook","google"].includes(o)&&em(X||"/"),ek(null)},e=>{(0,b.Rp)({event:"signup_api_call_failure",provider:o}),"line"===n.type&&(e.api_error_code===_.iZ?ei.push({pathname:"/signup/line-email-collect/",state:{signupOptions:n},attributionLabel:eo}):e.api_error_code===_.NF&&ei.push({pathname:"/signup/thirdpartyage/",state:{signupOptions:n},attributionLabel:eo})),es(({hideToast:t})=>(0,z.jsx)(d.ZP,{text:e.api_error_code&&e.message?e.message:er._('Sorry! Something went wrong on our end.', 'Error logging on', 'Error logging on'),onHide:t})),ek(null)})})():(ei.push({pathname:"/signup/fbemailcollect/",state:{signupOptions:n},attributionLabel:eo}),(0,b.My)("unauth_mweb.reg_via_fb.has_email_perm.false"))}else _.ik.includes(t.api_error_code)&&eA(!0);i()}else(0,b.My)("unauth_mweb.login.unexpected_error"),i()},eB=e=>(t,o)=>{var i;let a="google"===e?"gsi_btn":"other",l=(null===(i=ea.state)||void 0===i?void 0:i.switch_account)==="true"?{isSwitchAccount:!0,trigger:a}:{noImmediateRedirect:G,trigger:a};"facebook"===e&&(null==n||n("success"),(0,b.EX)({event:"receive_credential_response_from_provider",provider:e})),(0,b.NC)(e+"_login_success"),e_(t,ei,X,l,eR(7534,e)).catch(n=>{eO(t,n,o,e)}),ek("login"),eP(e)},eU=({event:e})=>{e.stopPropagation(),e.preventDefault(),null==J||J(),Z&&eu((0,I.rm)(Z)),ed({action:"click",item:"login-button"}),eT(30),(0,b.My)(`unauth_mweb.login_buttons.footer.${(null==L?void 0:L.type)||"button"}`),(0,b.NC)("press_login"),eL({eventType:14689,element:30,viewType:10,viewParameter:et}),eL({eventType:14688,component:14213,upsellReason:eo,incrementUpsellReasonCounter:!1}),ei.push({pathname:M?"/business/login/":"/login/",search:ea.search,state:{next:X,attributionLabel:eo}})};return(0,z.jsxs)(l.xu,{marginTop:M?-5:0,maxWidth:400,marginStart:"auto",marginEnd:"auto","data-test-id":"LoginButtonsContainer",children:[eC&&(0,z.jsx)(F.Z,{onDismiss:()=>eA(!1)}),ee&&(0,z.jsx)(l.xu,{marginBottom:3,marginTop:3,children:(0,z.jsx)(l.xv,{align:"center",size:"100",weight:"bold",children:er._('OR', 'Separator for email login button and social login button', 'Separator for email login button and social login button')})}),(0,z.jsx)(l.xu,{marginBottom:ez?0:6,children:(0,z.jsxs)(o.Fragment,{children:[V&&(0,z.jsx)($,{app_upsell_type:en}),Q&&(0,z.jsx)(l.xu,{"data-test-id":"continue-email-button",marginBottom:M?-2:2,children:(0,z.jsx)(l.zx,{fullWidth:!0,color:V?"gray":"red",text:M?er._('Create account', 'Button text for creating a business account', 'Button text for creating a business account'):er._('Continue with email', 'Sign up button', 'Sign up button'),onClick:({event:e})=>{e&&(e.stopPropagation(),e.preventDefault()),(0,b.NC)("press_email_signup"),(0,b.Rp)({event:"start",provider:"email"}),ed({action:"click",item:"email-signup-button"}),null==Y||Y(),Z&&eu((0,I.rm)(Z)),eF(13506),eT(31),eL({eventType:14688,component:14215,upsellReason:eo,incrementUpsellReasonCounter:!1}),ei.push({pathname:M?"/business/signup/step1/":"/signup/step1/",search:ea.search,state:{next:X,attributionLabel:eo}})}})}),t&&(0,z.jsx)(l.xu,{marginBottom:ez?1:2,"data-test-id":"facebook-connect-button",children:(0,z.jsx)(E,{onFacebookConnectError:()=>{null==n||n("error"),(0,b.EX)({event:"receive_no_credential_response_from_provider",provider:"facebook"}),es(({hideToast:e})=>(0,z.jsx)(d.ZP,{text:er._('Unable to connect to Facebook', 'Error logging on with Facebook', 'Error logging on with Facebook'),onHide:e}))},onFacebookConnectSuccess:eB("facebook"),onTouch:()=>{null==K||K(),eF(13505),ed({action:"click",item:"facebook-connect-button"}),eT(68)},isRerequest:N})}),S&&(0,z.jsx)(l.xu,{marginBottom:ez?0:2,"data-test-id":"google-connect-button",children:(0,z.jsx)(R.Z,{enableServerRenderedPlaceholder:eS,onGoogleConnectSuccess:eB("google"),onTouch:()=>{eF(13504)}})}),D&&"JP"===el&&(0,z.jsx)(l.xu,{marginBottom:2,"data-test-id":"line-connect-button",children:(0,z.jsx)(T,{buttonText:er._('Continue with LINE', 'Login page button', 'Login page button'),onLineConnectError:()=>{es(({hideToast:e})=>(0,z.jsx)(d.ZP,{text:er._('Unable to connect to Line', 'Error logging on with Line', 'Error logging on with Line'),onHide:e}))},onLineConnectSuccess:eB("line"),onTouch:()=>{eF(13507),eT(12277),ed({action:"click",item:"line-connect-button"})}})}),e&&(0,z.jsx)(l.xu,{marginBottom:2,"data-test-id":"apple-connect-button",children:(0,z.jsx)(P.Z,{})})]})}),L&&("member_link"===L.type?(0,z.jsx)(l.xu,{marginTop:-4,"data-test-id":"login-member",children:(0,z.jsx)(j.Z,{pressState:"none",onTouch:e=>eU({event:e}),children:(0,z.jsx)(l.xu,{paddingY:L.noPadding?0:4,marginBottom:L.increasedSpaceBelow?-1:-2,children:(0,z.jsx)(l.xv,{align:"center",size:"200",weight:"bold",color:L.textColorIsLight?"light":"dark",children:eb&&ev("pcons_mweb_sign_in_copy").anyEnabled?er._('Already a member? Sign in', 'unauth.sign_in.text.home_page', 'Label for sign in button'):er._('Already a member? Log in', 'Link on mobile web sign up modal to direct unauth users to the login page', 'Link on mobile web sign up modal to direct unauth users to the login page')})})})}):(0,z.jsx)(l.xu,{marginBottom:5,"data-test-id":"login-button",children:(0,z.jsx)(l.zx,{fullWidth:!0,color:"transparent",onClick:eU,text:er._('Log in', 'Login page button', 'Login page button')})})),ey&&("signup"===ey?(0,z.jsx)(O.Z,{progressBarAnimationDuration:eE}):(0,z.jsx)(A.Z,{}))]})}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/71526-79d56274b0c7c80f.mjs.map