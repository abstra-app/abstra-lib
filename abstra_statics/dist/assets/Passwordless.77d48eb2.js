import{d as k,eN as o,H as S,G as g,b as d,ev as c,e as t,eD as r,u as l,b6 as T,eV as $,eT as x,ex as y,eE as A,eF as P,v as b,ar as B,o as D,f as m}from"./outputWidgets.2096912b.js";import{u as w,S as N}from"./index.67bc0b05.js";import{u as V}from"./icons.e6f1393c.js";import{L as I}from"./CircularLoading.f0ebef12.js";(function(){try{var s=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(s._sentryDebugIds=s._sentryDebugIds||{},s._sentryDebugIds[n]="24705a86-17d5-4f50-995a-0daf04d85e28",s._sentryDebugIdIdentifier="sentry-dbid-24705a86-17d5-4f50-995a-0daf04d85e28")}catch{}})();class C{async authenticate(n){try{const e=await fetch("/_auth/authenticate",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({email:n})});if(!e.ok)throw new Error(await e.text());return null}catch(e){return e.message}}async verify(n,e){const _=await fetch("/_auth/verify",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({email:n,token:e})});if(!_.ok)return null;const h=await _.json();return w.saveJWT(h.jwt),w.getUser()}}const E=s=>(A("data-v-6f44f486"),s=s(),P(),s),K={class:"auth-info"},M={class:"auth-header"},j={class:"auth-label"},O={class:"description"},U=["onKeyup"],J={key:0,class:"span-error"},L=E(()=>t("div",{class:"spacer"},null,-1)),R=k({__name:"AuthInfo",props:{invalid:{type:Boolean}},emits:["sendAuthInfo"],setup(s,{emit:n}){const e=s,_={description:o.translate("i18n_local_auth_info_description"),button:o.translate("i18n_local_auth_info_authenticate")},h={description:o.translate("i18n_auth_info_description"),button:o.translate("i18n_auth_info_send_code")},f=S(()=>{var a;return(a=N.instance)!=null&&a.isLocal?_:h}),u=g({email:""}),i=()=>{n("sendAuthInfo",u)};return(a,p)=>(d(),c("div",K,[t("div",M,[t("div",j,r(l(o).translate("i18n_auth_validate_your_email")),1),t("div",O,r(f.value.description),1)]),T(t("input",{"onUpdate:modelValue":p[0]||(p[0]=v=>u.email=v),type:"email",placeholder:"Email address",class:"input email-input",onKeyup:x(i,["enter"])},null,40,U),[[$,u.email]]),e.invalid?(d(),c("span",J,r(l(o).translate("i18n_auth_info_invalid_email")),1)):y("",!0),L,t("button",{class:"next-button",onClick:i},r(f.value.button),1)]))}});const F=b(R,[["__scopeId","data-v-6f44f486"]]),G=s=>(A("data-v-5cb011c0"),s=s(),P(),s),H={class:"auth-token"},W={class:"auth-label"},q=["onKeyup"],z={key:0,class:"span-error"},Q={key:1,class:"span-error"},X=G(()=>t("div",{class:"spacer"},null,-1)),Y={class:"button-icon",viewBox:"0 0 24 24"},Z=["d"],ee={class:"footer"},te=k({__name:"AuthToken",props:{email:{},invalid:{type:Boolean},expired:{type:Boolean}},emits:["sendToken","restartAuth","resendToken"],setup(s,{emit:n}){const e=g({token:""}),_=()=>{n("restartAuth")},h=()=>{n("resendToken")},f=()=>{n("sendToken",e.token)};return(u,i)=>(d(),c("div",H,[t("div",W,r(l(o).translate("i18n_auth_token_label",{email:u.email})),1),T(t("input",{"onUpdate:modelValue":i[0]||(i[0]=a=>e.token=a),type:"text",placeholder:"Type your verification code",class:"input",onKeyup:x(f,["enter"])},null,40,q),[[$,e.token]]),u.expired?(d(),c("span",z,r(l(o).translate("i18n_auth_token_expired")),1)):y("",!0),u.invalid?(d(),c("span",Q,r(l(o).translate("i18n_auth_token_invalid")),1)):y("",!0),X,t("button",{class:"next-button",onClick:f},r(l(o).translate("i18n_auth_token_verify_email")),1),t("button",{class:"secondary-button back",onClick:_},[(d(),c("svg",Y,[t("path",{d:l(V)},null,8,Z)])),B(" "+r(l(o).translate("i18n_auth_token_try_again")),1)]),t("button",{class:"secondary-button back",onClick:h},r(l(o).translate("i18n_auth_token_resend_email")),1),t("div",ee,r(l(o).translate("i18n_auth_token_footer_alternative_email")),1)]))}});const se=b(te,[["__scopeId","data-v-5cb011c0"]]),ne={key:0,class:"form"},oe={class:"form-wrapper"},ae={class:"loading"},ie={key:1,class:"form"},re={class:"form-wrapper"},le={class:"widget"},de={key:2,class:"form"},ce={class:"form-wrapper"},_e={class:"widget"},ue={key:3,class:"form"},pe={class:"form-wrapper"},he={class:"loading"},fe=k({__name:"Passwordless",emits:["done"],setup(s,{emit:n}){const e=g({stage:"collect-info",userProvider:null,invalid:!1,token:null,info:null});D(()=>{e.userProvider=new C});const _=async i=>{if(!e.userProvider)return;e.info=i,e.stage="loading";const a=await e.userProvider.authenticate(i.email);e.invalid=!!a,a?e.stage="collect-info":e.stage="collect-token"},h=async i=>{var a;if(!(!e.userProvider||!((a=e.info)!=null&&a.email))){e.token=i,e.stage="loading";try{const p=await e.userProvider.verify(e.info.email,e.token);if(!p)throw new Error("no user");n("done",p),e.stage="done"}catch{e.invalid=!0,e.stage="collect-token"}}},f=()=>{e.info&&_(e.info)},u=()=>{e.stage="collect-info",e.info=null,e.token=null,e.invalid=!1};return(i,a)=>{var p,v;return e.userProvider?e.stage==="collect-info"?(d(),c("div",ie,[t("div",re,[t("div",le,[m(F,{invalid:e.invalid,onSendAuthInfo:_},null,8,["invalid"])])])])):e.stage==="collect-token"?(d(),c("div",de,[t("div",ce,[t("div",_e,[m(se,{invalid:e.invalid,email:(v=(p=e.info)==null?void 0:p.email)!=null?v:"",onSendToken:h,onResendToken:f,onRestartAuth:u},null,8,["invalid","email"])])])])):(d(),c("div",ue,[t("div",pe,[t("div",he,[m(I)])])])):(d(),c("div",ne,[t("div",oe,[t("div",ae,[m(I)])])]))}}});const ge=b(fe,[["__scopeId","data-v-d468d037"]]);export{ge as P};
//# sourceMappingURL=Passwordless.77d48eb2.js.map
