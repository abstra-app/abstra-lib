import{d as v,H as k,b as d,et as r,e as t,eC as a,u as s,am as I,eG as $,eN as x,ew as y,eT as i,eD as T,eE as A,x as g,b2 as S,f,ez as C,w as D}from"./outputWidgets.d6897520.js";import{t as B}from"./icons.20b5fc8a.js";import{a as w}from"./console.526446d9.js";import{L as V}from"./CircularLoading.74c5b113.js";import{M as E}from"./member.916242f8.js";import{W as K}from"./WidgetsFrame.b500b4a0.js";import"./index.40bea6c2.js";import"./Form.a2bccbf0.js";import"./Title.9e102f51.js";import"./index.65fddafd.js";import"./index.dcf9fd0a.js";import"./index.09e1dc09.js";import"./dayjs.dccbdd6f.js";import"./index.0f5fc52a.js";import"./index.fd09b35e.js";import"./TabPane.c8258ec5.js";import"./index.b11f642a.js";import"./index.7c1a9101.js";import"./index.e63bacfa.js";import"./index.30191c77.js";import"./index.33e7eca5.js";import"./index.16598f32.js";import"./index.a2784b6b.js";import"./index.59123055.js";import"./gateway.c13063b9.js";import"./activeRecord.e97440b4.js";import"./pubsub.e0b33cd4.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[n]="620e90e9-d533-4853-ab91-45d59812debd",o._sentryDebugIdIdentifier="sentry-dbid-620e90e9-d533-4853-ab91-45d59812debd")}catch{}})();const L=o=>(T("data-v-2b2eeeb7"),o=o(),A(),o),M={class:"auth-info"},N={class:"auth-header"},P={class:"auth-label"},R={class:"description"},U=["onKeyup"],W={key:0,class:"span-error"},z=L(()=>t("div",{class:"spacer"},null,-1)),F=v({__name:"AuthInfo",props:{invalid:{type:Boolean,default:!1},header:{type:String}},emits:["sendAuthInfo"],setup(o,{emit:n}){const e=k({email:""}),l=()=>{n("sendAuthInfo",e)};return(m,u)=>(d(),r("div",M,[t("div",N,[t("div",P,a(o.header),1),t("div",R,a(s(i).get("i18n_auth_info_description")),1)]),I(t("input",{"onUpdate:modelValue":u[0]||(u[0]=p=>e.email=p),type:"email",placeholder:"Email address",class:"input email-input",onKeyup:x(l,["enter"])},null,40,U),[[$,e.email]]),o.invalid?(d(),r("span",W,a(s(i).get("i18n_auth_info_invalid_email")),1)):y("",!0),z,t("button",{class:"next-button",onClick:l},a(s(i).get("i18n_auth_info_send_code")),1)]))}});const G=g(F,[["__scopeId","data-v-2b2eeeb7"]]),H=o=>(T("data-v-e4f972d6"),o=o(),A(),o),j={class:"auth-token"},q={class:"auth-label"},J=["onKeyup"],O={key:0,class:"span-error"},Q={key:1,class:"span-error"},X=H(()=>t("div",{class:"spacer"},null,-1)),Y={class:"button-icon",viewBox:"0 0 24 24"},Z=["d"],ee={class:"footer"},te=v({__name:"AuthToken",props:{expired:{type:Boolean},invalid:{type:Boolean},email:{}},emits:["sendToken","restartAuth","resendToken"],setup(o,{emit:n}){const e=k({token:""}),l=()=>{n("restartAuth")},m=()=>{n("resendToken")},u=()=>{n("sendToken",e.token)};return(p,_)=>(d(),r("div",j,[t("div",q,a(s(i).get("i18n_auth_token_label",{email:p.email})),1),I(t("input",{"onUpdate:modelValue":_[0]||(_[0]=c=>e.token=c),type:"text",placeholder:"Type your verification code",class:"input",onKeyup:x(u,["enter"])},null,40,J),[[$,e.token]]),p.expired?(d(),r("span",O,a(s(i).get("i18n_auth_token_expired")),1)):y("",!0),p.invalid?(d(),r("span",Q,a(s(i).get("i18n_auth_token_invalid"))+"} ",1)):y("",!0),X,t("button",{class:"next-button",onClick:u},a(s(i).get("i18n_auth_token_verify_email")),1),t("button",{class:"secondary-button back",onClick:l},[(d(),r("svg",Y,[t("path",{d:s(B)},null,8,Z)])),S(" "+a(s(i).get("i18n_auth_token_try_again")),1)]),t("button",{class:"secondary-button back",onClick:m},a(s(i).get("i18n_auth_token_resend_email")),1),t("div",ee,a(s(i).get("i18n_auth_token_footer_alternative_email")),1)]))}});const oe=g(te,[["__scopeId","data-v-e4f972d6"]]),ne={key:0,class:"form"},se={class:"form-wrapper"},ae={class:"widget"},ie={key:1,class:"form"},de={class:"form-wrapper"},re={class:"widget"},le={key:2,class:"form"},_e={class:"form-wrapper"},ce={class:"loading"},ue=v({__name:"Passwordless",props:{header:{type:String,default:i.get("i18n_auth_validate_your_email")}},emits:["done"],setup(o,{emit:n}){const e=k({stage:"collect-info",info:null,token:null,invalid:!1}),l=async _=>{e.info=_,e.stage="loading";const c=await w.authenticate(_.email);e.invalid=!!c,c?e.stage="collect-info":e.stage="collect-token"},m=async _=>{var c;if(!!((c=e.info)!=null&&c.email)){e.token=_,e.stage="loading";try{const h=await w.verify(e.info.email,e.token);if(!h)throw new Error("no user");n("done",h),e.stage="done"}catch{e.invalid=!0,e.stage="collect-token"}}},u=()=>{e.info&&l(e.info)},p=()=>{e.stage="collect-info",e.info=null,e.token=null,e.invalid=!1};return(_,c)=>{var h,b;return e.stage==="collect-info"?(d(),r("div",ne,[t("div",se,[t("div",ae,[f(G,{invalid:e.invalid,header:o.header,onSendAuthInfo:l},null,8,["invalid","header"])])])])):e.stage==="collect-token"?(d(),r("div",ie,[t("div",de,[t("div",re,[f(oe,{invalid:e.invalid,email:(b=(h=e.info)==null?void 0:h.email)!=null?b:"",onSendToken:m,onResendToken:u,onRestartAuth:p},null,8,["invalid","email"])])])])):(d(),r("div",le,[t("div",_e,[t("div",ce,[f(V)])])]))}}});const pe=g(ue,[["__scopeId","data-v-fb0b76f8"]]),he={class:"login"},me=v({__name:"Login",setup(o){const n=C();async function e(l){await E.login(),n.push({name:"home"})}return(l,m)=>(d(),r("div",he,[f(K,{theme:"white","main-color":"#d14056","font-family":"sans-serif",runtime:"dash"},{default:D(()=>[f(pe,{class:"passwordless",onDone:e})]),_:1})]))}});const Fe=g(me,[["__scopeId","data-v-665024a7"]]);export{Fe as default};
//# sourceMappingURL=Login.84137891.js.map
