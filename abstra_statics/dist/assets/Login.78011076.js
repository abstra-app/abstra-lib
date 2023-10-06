import{d as v,H as k,b as r,et as d,e as t,eC as a,u as s,aq as I,eG as $,eO as x,ew as y,eU as i,eD as T,eE as A,x as g,aJ as S,f,ez as C,w as D}from"./outputWidgets.6d878336.js";import{u as B}from"./icons.31732537.js";import{a as w}from"./console.bb49fd7b.js";import{L as V}from"./CircularLoading.eccfe0db.js";import{M as E}from"./member.7511c152.js";import{W as K}from"./WidgetsFrame.ece61a5f.js";import"./index.9e0e45c6.js";import"./Form.9dbabc14.js";import"./Title.7777f40a.js";import"./CollapsePanel.e467f5eb.js";import"./index.48f0e3d4.js";import"./index.ec7066e1.js";import"./index.e1dcf4ff.js";import"./dayjs.52118055.js";import"./index.d8a13a23.js";import"./index.64e4975b.js";import"./TabPane.dac9512e.js";import"./index.f4029516.js";import"./index.ddda7671.js";import"./index.12ea9441.js";import"./index.21962144.js";import"./index.ab3edcb5.js";import"./index.defccd4f.js";import"./index.26308154.js";import"./index.40d5d1c1.js";import"./index.4179d6a8.js";import"./gateway.04616128.js";import"./activeRecord.0d2b743a.js";import"./pubsub.7c8033ef.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[n]="a7b38a6d-b279-48a0-b420-5e79ab706f66",o._sentryDebugIdIdentifier="sentry-dbid-a7b38a6d-b279-48a0-b420-5e79ab706f66")}catch{}})();const L=o=>(T("data-v-2b2eeeb7"),o=o(),A(),o),M={class:"auth-info"},N={class:"auth-header"},P={class:"auth-label"},R={class:"description"},U=["onKeyup"],W={key:0,class:"span-error"},q=L(()=>t("div",{class:"spacer"},null,-1)),z=v({__name:"AuthInfo",props:{invalid:{type:Boolean,default:!1},header:{type:String}},emits:["sendAuthInfo"],setup(o,{emit:n}){const e=k({email:""}),l=()=>{n("sendAuthInfo",e)};return(m,u)=>(r(),d("div",M,[t("div",N,[t("div",P,a(o.header),1),t("div",R,a(s(i).get("i18n_auth_info_description")),1)]),I(t("input",{"onUpdate:modelValue":u[0]||(u[0]=p=>e.email=p),type:"email",placeholder:"Email address",class:"input email-input",onKeyup:x(l,["enter"])},null,40,U),[[$,e.email]]),o.invalid?(r(),d("span",W,a(s(i).get("i18n_auth_info_invalid_email")),1)):y("",!0),q,t("button",{class:"next-button",onClick:l},a(s(i).get("i18n_auth_info_send_code")),1)]))}});const F=g(z,[["__scopeId","data-v-2b2eeeb7"]]),G=o=>(T("data-v-e4f972d6"),o=o(),A(),o),H={class:"auth-token"},J={class:"auth-label"},O=["onKeyup"],j={key:0,class:"span-error"},Q={key:1,class:"span-error"},X=G(()=>t("div",{class:"spacer"},null,-1)),Y={class:"button-icon",viewBox:"0 0 24 24"},Z=["d"],ee={class:"footer"},te=v({__name:"AuthToken",props:{expired:{type:Boolean},invalid:{type:Boolean},email:{}},emits:["sendToken","restartAuth","resendToken"],setup(o,{emit:n}){const e=k({token:""}),l=()=>{n("restartAuth")},m=()=>{n("resendToken")},u=()=>{n("sendToken",e.token)};return(p,_)=>(r(),d("div",H,[t("div",J,a(s(i).get("i18n_auth_token_label",{email:p.email})),1),I(t("input",{"onUpdate:modelValue":_[0]||(_[0]=c=>e.token=c),type:"text",placeholder:"Type your verification code",class:"input",onKeyup:x(u,["enter"])},null,40,O),[[$,e.token]]),p.expired?(r(),d("span",j,a(s(i).get("i18n_auth_token_expired")),1)):y("",!0),p.invalid?(r(),d("span",Q,a(s(i).get("i18n_auth_token_invalid"))+"} ",1)):y("",!0),X,t("button",{class:"next-button",onClick:u},a(s(i).get("i18n_auth_token_verify_email")),1),t("button",{class:"secondary-button back",onClick:l},[(r(),d("svg",Y,[t("path",{d:s(B)},null,8,Z)])),S(" "+a(s(i).get("i18n_auth_token_try_again")),1)]),t("button",{class:"secondary-button back",onClick:m},a(s(i).get("i18n_auth_token_resend_email")),1),t("div",ee,a(s(i).get("i18n_auth_token_footer_alternative_email")),1)]))}});const oe=g(te,[["__scopeId","data-v-e4f972d6"]]),ne={key:0,class:"form"},se={class:"form-wrapper"},ae={class:"widget"},ie={key:1,class:"form"},re={class:"form-wrapper"},de={class:"widget"},le={key:2,class:"form"},_e={class:"form-wrapper"},ce={class:"loading"},ue=v({__name:"Passwordless",props:{header:{type:String,default:i.get("i18n_auth_validate_your_email")}},emits:["done"],setup(o,{emit:n}){const e=k({stage:"collect-info",info:null,token:null,invalid:!1}),l=async _=>{e.info=_,e.stage="loading";const c=await w.authenticate(_.email);e.invalid=!!c,c?e.stage="collect-info":e.stage="collect-token"},m=async _=>{var c;if(!!((c=e.info)!=null&&c.email)){e.token=_,e.stage="loading";try{const h=await w.verify(e.info.email,e.token);if(!h)throw new Error("no user");n("done",h),e.stage="done"}catch{e.invalid=!0,e.stage="collect-token"}}},u=()=>{e.info&&l(e.info)},p=()=>{e.stage="collect-info",e.info=null,e.token=null,e.invalid=!1};return(_,c)=>{var h,b;return e.stage==="collect-info"?(r(),d("div",ne,[t("div",se,[t("div",ae,[f(F,{invalid:e.invalid,header:o.header,onSendAuthInfo:l},null,8,["invalid","header"])])])])):e.stage==="collect-token"?(r(),d("div",ie,[t("div",re,[t("div",de,[f(oe,{invalid:e.invalid,email:(b=(h=e.info)==null?void 0:h.email)!=null?b:"",onSendToken:m,onResendToken:u,onRestartAuth:p},null,8,["invalid","email"])])])])):(r(),d("div",le,[t("div",_e,[t("div",ce,[f(V)])])]))}}});const pe=g(ue,[["__scopeId","data-v-fb0b76f8"]]),he={class:"login"},me=v({__name:"Login",setup(o){const n=C();async function e(l){await E.login(),n.push({name:"home"})}return(l,m)=>(r(),d("div",he,[f(K,{theme:"white","main-color":"#d14056","font-family":"sans-serif",runtime:"dash"},{default:D(()=>[f(pe,{class:"passwordless",onDone:e})]),_:1})]))}});const Ge=g(me,[["__scopeId","data-v-665024a7"]]);export{Ge as default};
//# sourceMappingURL=Login.78011076.js.map
