import{d as y,G as b,b as d,eu as c,e as o,eD as i,u as a,aJ as I,e_ as $,f5 as A,ew as g,f0 as r,eE as T,eF as x,v as k,f as h,aq as B,eI as D,eA as L,H as q,db as C,w as P}from"./outputWidgets.6dcbe016.js";import{G as M}from"./PhArrowClockwise.vue.977e69ea.js";import{b as v,T as R}from"./router.fed6026f.js";import{L as S}from"./CircularLoading.ed0fffb6.js";import{W as V}from"./WidgetsFrame.cca4ab70.js";import"./index.e284e9cc.js";import{M as E}from"./member.8d94bdf9.js";import"./Form.fd61067d.js";import"./hasIn.78be2856.js";import"./popupNotifcation.58c9337c.js";import"./index.cf4c23b9.js";import"./record.48d1a924.js";import"./pubsub.e8198d2a.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[n]="f0d30d83-4f65-4190-aa2f-bfaf6331f978",t._sentryDebugIdIdentifier="sentry-dbid-f0d30d83-4f65-4190-aa2f-bfaf6331f978")}catch{}})();const K=t=>(T("data-v-06bca615"),t=t(),x(),t),N={class:"auth-info"},U={class:"auth-header"},F={class:"auth-label"},G={class:"description"},O=["onKeyup"],W={key:0,class:"span-error"},j=K(()=>o("div",{class:"spacer"},null,-1)),H=y({__name:"AuthInfo",props:{invalid:{type:Boolean,default:!1},header:{type:String}},emits:["sendAuthInfo"],setup(t,{emit:n}){const e=b({email:""}),s=()=>{n("sendAuthInfo",e)};return(l,_)=>(d(),c("div",N,[o("div",U,[o("div",F,i(t.header),1),o("div",G,i(a(r).translate("i18n_auth_info_description")),1)]),I(o("input",{"onUpdate:modelValue":_[0]||(_[0]=u=>e.email=u),type:"email",placeholder:"Email address",class:"input email-input",onKeyup:A(s,["enter"])},null,40,O),[[$,e.email]]),t.invalid?(d(),c("span",W,i(a(r).translate("i18n_auth_info_invalid_email")),1)):g("",!0),j,o("button",{class:"next-button",onClick:s},i(a(r).translate("i18n_auth_info_send_code")),1)]))}});const J=k(H,[["__scopeId","data-v-06bca615"]]),z=t=>(T("data-v-168b081c"),t=t(),x(),t),Q={class:"auth-token"},X={class:"auth-label"},Y=["onKeyup"],Z={key:0,class:"span-error"},ee={key:1,class:"span-error"},te=z(()=>o("div",{class:"spacer"},null,-1)),oe={class:"footer"},ne=y({__name:"AuthToken",props:{expired:{type:Boolean},invalid:{type:Boolean},email:{}},emits:["sendToken","restartAuth","resendToken"],setup(t,{emit:n}){const e=b({token:""}),s=()=>{n("restartAuth")},l=()=>{n("resendToken")},_=()=>{n("sendToken",e.token)};return(u,p)=>(d(),c("div",Q,[o("div",X,i(a(r).translate("i18n_auth_token_label",{email:u.email})),1),I(o("input",{"onUpdate:modelValue":p[0]||(p[0]=f=>e.token=f),type:"text",placeholder:"Type your verification code",class:"input",onKeyup:A(_,["enter"])},null,40,Y),[[$,e.token]]),u.expired?(d(),c("span",Z,i(a(r).translate("i18n_auth_token_expired")),1)):g("",!0),u.invalid?(d(),c("span",ee,i(a(r).translate("i18n_auth_token_invalid")),1)):g("",!0),te,o("button",{class:"next-button",onClick:_},i(a(r).translate("i18n_auth_token_verify_email")),1),o("button",{class:"secondary-button back",onClick:s},[h(a(M)),B(" "+i(a(r).translate("i18n_auth_token_try_again")),1)]),o("button",{class:"secondary-button back",onClick:l},i(a(r).translate("i18n_auth_token_resend_email")),1),o("div",oe,i(a(r).translate("i18n_auth_token_footer_alternative_email")),1)]))}});const se=k(ne,[["__scopeId","data-v-168b081c"]]),ae={key:0,class:"form"},ie={class:"form-wrapper"},re={class:"widget"},de={key:1,class:"form"},ce={class:"form-wrapper"},le={class:"widget"},_e={key:2,class:"form"},ue={class:"form-wrapper"},pe={class:"loading"},fe=y({__name:"Passwordless",props:{header:{type:String,default:r.translate("i18n_auth_validate_your_email")}},emits:["done"],setup(t,{emit:n}){const e=b({stage:"collect-info",info:null,token:null,invalid:!1}),s=async p=>{e.info=p,e.stage="loading";const f=await v.authenticate(p.email);e.invalid=!!f,f?e.stage="collect-info":e.stage="collect-token"},l=async p=>{var f;if(!!((f=e.info)!=null&&f.email)){e.token=p,e.stage="loading";try{const m=await v.verify(e.info.email,e.token);if(!m)throw new Error("no user");R.trackSession(),n("done",m),e.stage="done"}catch{e.invalid=!0,e.stage="collect-token"}}},_=()=>{e.info&&s(e.info)},u=()=>{e.stage="collect-info",e.info=null,e.token=null,e.invalid=!1};return(p,f)=>{var m,w;return e.stage==="collect-info"?(d(),c("div",ae,[o("div",ie,[o("div",re,[h(J,{invalid:e.invalid,header:t.header,onSendAuthInfo:s},null,8,["invalid","header"])])])])):e.stage==="collect-token"?(d(),c("div",de,[o("div",ce,[o("div",le,[h(se,{invalid:e.invalid,email:(w=(m=e.info)==null?void 0:m.email)!=null?w:"",onSendToken:l,onResendToken:_,onRestartAuth:u},null,8,["invalid","email"])])])])):(d(),c("div",_e,[o("div",ue,[o("div",pe,[h(S)])])]))}}});const he=k(fe,[["__scopeId","data-v-3f7d6020"]]),me=async()=>{const t=await E.onboarding(),n=v.getAuthor();if(t.shouldBeOnboarded&&n){const e="https://onboarding.abstra.app/signup-form",s=new URLSearchParams({token:n.jwt,redirect:location.href}),l=e+"?"+s;window.location.replace(l)}},ve={key:0,class:"login"},ye={key:1,class:"loading"},ke=y({__name:"Login",setup(t){const n=D(),e=L();async function s(){await me(),e.query.redirect?await n.push({path:e.query.redirect,query:{...e.query,redirect:e.query["prev-redirect"],"prev-redirect":void 0}}):n.push({name:"home"})}const l=q(()=>!v.getAuthor());return C(()=>{l.value||s()}),(_,u)=>l.value?(d(),c("div",ve,[h(V,{theme:"white","main-color":"#d14056","font-family":"sans-serif"},{default:P(()=>[h(he,{class:"passwordless",onDone:s})]),_:1})])):(d(),c("div",ye,[h(S)]))}});const Ce=k(ke,[["__scopeId","data-v-a7a1a259"]]);export{Ce as default};
//# sourceMappingURL=Login.abaab8b5.js.map
