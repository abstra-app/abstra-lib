import{d as y,F as b,b as _,ev as u,e as t,eD as i,u as a,bj as I,eO as $,eP as x,ex as g,eN as r,eE as A,eF as T,v as k,aq as S,f as v,eA as B,eB as D,o as q,w as C}from"./outputWidgets.43a10844.js";import{M as L}from"./member.37a90301.js";import{t as P}from"./icons.b8f11d3f.js";import{a as m}from"./authorManager.c51bb24c.js";import{L as M}from"./CircularLoading.40250445.js";import{W as R}from"./WidgetsFrame.4cead4a4.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[o]="a23d4fdc-c342-408b-a826-f2fc532e070f",n._sentryDebugIdIdentifier="sentry-dbid-a23d4fdc-c342-408b-a826-f2fc532e070f")}catch{}})();const V=n=>(A("data-v-06bca615"),n=n(),T(),n),E={class:"auth-info"},K={class:"auth-header"},N={class:"auth-label"},F={class:"description"},U=["onKeyup"],j={key:0,class:"span-error"},O=V(()=>t("div",{class:"spacer"},null,-1)),W=y({__name:"AuthInfo",props:{invalid:{type:Boolean,default:!1},header:{type:String}},emits:["sendAuthInfo"],setup(n,{emit:o}){const e=b({email:""}),d=()=>{o("sendAuthInfo",e)};return(f,s)=>(_(),u("div",E,[t("div",K,[t("div",N,i(n.header),1),t("div",F,i(a(r).translate("i18n_auth_info_description")),1)]),I(t("input",{"onUpdate:modelValue":s[0]||(s[0]=p=>e.email=p),type:"email",placeholder:"Email address",class:"input email-input",onKeyup:x(d,["enter"])},null,40,U),[[$,e.email]]),n.invalid?(_(),u("span",j,i(a(r).translate("i18n_auth_info_invalid_email")),1)):g("",!0),O,t("button",{class:"next-button",onClick:d},i(a(r).translate("i18n_auth_info_send_code")),1)]))}});const z=k(W,[["__scopeId","data-v-06bca615"]]),G=n=>(A("data-v-9fec7fd3"),n=n(),T(),n),H={class:"auth-token"},J={class:"auth-label"},Q=["onKeyup"],X={key:0,class:"span-error"},Y={key:1,class:"span-error"},Z=G(()=>t("div",{class:"spacer"},null,-1)),ee={class:"button-icon",viewBox:"0 0 24 24"},te=["d"],ne={class:"footer"},oe=y({__name:"AuthToken",props:{expired:{type:Boolean},invalid:{type:Boolean},email:{}},emits:["sendToken","restartAuth","resendToken"],setup(n,{emit:o}){const e=b({token:""}),d=()=>{o("restartAuth")},f=()=>{o("resendToken")},s=()=>{o("sendToken",e.token)};return(p,c)=>(_(),u("div",H,[t("div",J,i(a(r).translate("i18n_auth_token_label",{email:p.email})),1),I(t("input",{"onUpdate:modelValue":c[0]||(c[0]=l=>e.token=l),type:"text",placeholder:"Type your verification code",class:"input",onKeyup:x(s,["enter"])},null,40,Q),[[$,e.token]]),p.expired?(_(),u("span",X,i(a(r).translate("i18n_auth_token_expired")),1)):g("",!0),p.invalid?(_(),u("span",Y,i(a(r).translate("i18n_auth_token_invalid")),1)):g("",!0),Z,t("button",{class:"next-button",onClick:s},i(a(r).translate("i18n_auth_token_verify_email")),1),t("button",{class:"secondary-button back",onClick:d},[(_(),u("svg",ee,[t("path",{d:a(P)},null,8,te)])),S(" "+i(a(r).translate("i18n_auth_token_try_again")),1)]),t("button",{class:"secondary-button back",onClick:f},i(a(r).translate("i18n_auth_token_resend_email")),1),t("div",ne,i(a(r).translate("i18n_auth_token_footer_alternative_email")),1)]))}});const se=k(oe,[["__scopeId","data-v-9fec7fd3"]]),ae={key:0,class:"form"},ie={class:"form-wrapper"},re={class:"widget"},de={key:1,class:"form"},ce={class:"form-wrapper"},le={class:"widget"},_e={key:2,class:"form"},ue={class:"form-wrapper"},pe={class:"loading"},fe=y({__name:"Passwordless",props:{header:{type:String,default:r.translate("i18n_auth_validate_your_email")}},emits:["done"],setup(n,{emit:o}){const e=b({stage:"collect-info",info:null,token:null,invalid:!1}),d=async c=>{e.info=c,e.stage="loading";const l=await m.authenticate(c.email);e.invalid=!!l,l?e.stage="collect-info":e.stage="collect-token"},f=async c=>{var l;if(!!((l=e.info)!=null&&l.email)){e.token=c,e.stage="loading";try{const h=await m.verify(e.info.email,e.token);if(!h)throw new Error("no user");o("done",h),e.stage="done"}catch{e.invalid=!0,e.stage="collect-token"}}},s=()=>{e.info&&d(e.info)},p=()=>{e.stage="collect-info",e.info=null,e.token=null,e.invalid=!1};return(c,l)=>{var h,w;return e.stage==="collect-info"?(_(),u("div",ae,[t("div",ie,[t("div",re,[v(z,{invalid:e.invalid,header:n.header,onSendAuthInfo:d},null,8,["invalid","header"])])])])):e.stage==="collect-token"?(_(),u("div",de,[t("div",ce,[t("div",le,[v(se,{invalid:e.invalid,email:(w=(h=e.info)==null?void 0:h.email)!=null?w:"",onSendToken:f,onResendToken:s,onRestartAuth:p},null,8,["invalid","email"])])])])):(_(),u("div",_e,[t("div",ue,[t("div",pe,[v(M)])])]))}}});const he=k(fe,[["__scopeId","data-v-6b5a711a"]]),ve={class:"login"},me=y({__name:"Login",setup(n){const o=B(),e=D();async function d(){const f=await L.onboarding(),s=m.getAuthor();if(f.shouldBeOnboarded&&s){const p="https://onboarding.abstra.app/signup-form",c=new URLSearchParams({token:s.jwt}),l=p+"?"+c;window.open(l,"_blank")}e.query.redirect?o.push({path:e.query.redirect,query:{...e.query,redirect:e.query["prev-redirect"],"prev-redirect":void 0}}):o.push({name:"home"})}return q(async()=>{m.getAuthor()&&await d()}),(f,s)=>(_(),u("div",ve,[v(R,{theme:"white","main-color":"#d14056","font-family":"sans-serif"},{default:C(()=>[v(he,{class:"passwordless",onDone:d})]),_:1})]))}});const $e=k(me,[["__scopeId","data-v-4f70413a"]]);export{$e as default};
//# sourceMappingURL=Login.a520643f.js.map
