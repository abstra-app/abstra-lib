import{d as y,I as b,b as c,ew as d,e as n,eH as i,u as a,aL as I,f0 as $,f2 as T,ey as g,f3 as r,eC as x,eD as A,x as k,f as h,as as L,eK as B,eE as C,J as D,db as P,w as q}from"./outputWidgets.65049c44.js";import{G as K,L as S}from"./CircularLoading.1c57b6af.js";import{b as v,T as M}from"./router.3fae651d.js";import{W as R}from"./WidgetsFrame.1c14694e.js";import"./index.e3028f4e.js";import{M as V}from"./member.c15cf3e3.js";import"./Form.7baf356e.js";import"./hasIn.0c24a40c.js";import"./popupNotifcation.789fa8e2.js";import"./record.13e1b387.js";import"./pubsub.f43ad40e.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[o]="fbc4dafd-c1cd-48a8-9978-36fcfe867fc2",t._sentryDebugIdIdentifier="sentry-dbid-fbc4dafd-c1cd-48a8-9978-36fcfe867fc2")}catch{}})();const E=t=>(x("data-v-06bca615"),t=t(),A(),t),N={class:"auth-info"},U={class:"auth-header"},F={class:"auth-label"},O={class:"description"},W=["onKeyup"],j={key:0,class:"span-error"},G=E(()=>n("div",{class:"spacer"},null,-1)),H=y({__name:"AuthInfo",props:{invalid:{type:Boolean,default:!1},header:{type:String}},emits:["sendAuthInfo"],setup(t,{emit:o}){const e=b({email:""}),s=()=>{o("sendAuthInfo",e)};return(l,_)=>(c(),d("div",N,[n("div",U,[n("div",F,i(t.header),1),n("div",O,i(a(r).translate("i18n_auth_info_description")),1)]),I(n("input",{"onUpdate:modelValue":_[0]||(_[0]=u=>e.email=u),type:"email",placeholder:"Email address",class:"input email-input",onKeyup:T(s,["enter"])},null,40,W),[[$,e.email]]),t.invalid?(c(),d("span",j,i(a(r).translate("i18n_auth_info_invalid_email")),1)):g("",!0),G,n("button",{class:"next-button",onClick:s},i(a(r).translate("i18n_auth_info_send_code")),1)]))}});const J=k(H,[["__scopeId","data-v-06bca615"]]),z=t=>(x("data-v-168b081c"),t=t(),A(),t),Q={class:"auth-token"},X={class:"auth-label"},Y=["onKeyup"],Z={key:0,class:"span-error"},ee={key:1,class:"span-error"},te=z(()=>n("div",{class:"spacer"},null,-1)),ne={class:"footer"},oe=y({__name:"AuthToken",props:{expired:{type:Boolean},invalid:{type:Boolean},email:{}},emits:["sendToken","restartAuth","resendToken"],setup(t,{emit:o}){const e=b({token:""}),s=()=>{o("restartAuth")},l=()=>{o("resendToken")},_=()=>{o("sendToken",e.token)};return(u,p)=>(c(),d("div",Q,[n("div",X,i(a(r).translate("i18n_auth_token_label",{email:u.email})),1),I(n("input",{"onUpdate:modelValue":p[0]||(p[0]=f=>e.token=f),type:"text",placeholder:"Type your verification code",class:"input",onKeyup:T(_,["enter"])},null,40,Y),[[$,e.token]]),u.expired?(c(),d("span",Z,i(a(r).translate("i18n_auth_token_expired")),1)):g("",!0),u.invalid?(c(),d("span",ee,i(a(r).translate("i18n_auth_token_invalid")),1)):g("",!0),te,n("button",{class:"next-button",onClick:_},i(a(r).translate("i18n_auth_token_verify_email")),1),n("button",{class:"secondary-button back",onClick:s},[h(a(K)),L(" "+i(a(r).translate("i18n_auth_token_try_again")),1)]),n("button",{class:"secondary-button back",onClick:l},i(a(r).translate("i18n_auth_token_resend_email")),1),n("div",ne,i(a(r).translate("i18n_auth_token_footer_alternative_email")),1)]))}});const se=k(oe,[["__scopeId","data-v-168b081c"]]),ae={key:0,class:"form"},ie={class:"form-wrapper"},re={class:"widget"},ce={key:1,class:"form"},de={class:"form-wrapper"},le={class:"widget"},_e={key:2,class:"form"},ue={class:"form-wrapper"},pe={class:"loading"},fe=y({__name:"Passwordless",props:{header:{type:String,default:r.translate("i18n_auth_validate_your_email")}},emits:["done"],setup(t,{emit:o}){const e=b({stage:"collect-info",info:null,token:null,invalid:!1}),s=async p=>{e.info=p,e.stage="loading";const f=await v.authenticate(p.email);e.invalid=!!f,f?e.stage="collect-info":e.stage="collect-token"},l=async p=>{var f;if(!!((f=e.info)!=null&&f.email)){e.token=p,e.stage="loading";try{const m=await v.verify(e.info.email,e.token);if(!m)throw new Error("[Passwordless] Login did not return an user");M.trackSession(),o("done",m),e.stage="done"}catch{e.invalid=!0,e.stage="collect-token"}}},_=()=>{e.info&&s(e.info)},u=()=>{e.stage="collect-info",e.info=null,e.token=null,e.invalid=!1};return(p,f)=>{var m,w;return e.stage==="collect-info"?(c(),d("div",ae,[n("div",ie,[n("div",re,[h(J,{invalid:e.invalid,header:t.header,onSendAuthInfo:s},null,8,["invalid","header"])])])])):e.stage==="collect-token"?(c(),d("div",ce,[n("div",de,[n("div",le,[h(se,{invalid:e.invalid,email:(w=(m=e.info)==null?void 0:m.email)!=null?w:"",onSendToken:l,onResendToken:_,onRestartAuth:u},null,8,["invalid","email"])])])])):(c(),d("div",_e,[n("div",ue,[n("div",pe,[h(S)])])]))}}});const he=k(fe,[["__scopeId","data-v-6e5a5aaa"]]),me=async()=>{const t=await V.onboarding(),o=v.getAuthor();if(t.shouldBeOnboarded&&o){const e="https://onboarding.abstra.app/signup-form",s=new URLSearchParams({token:o.jwt,redirect:location.href}),l=e+"?"+s;window.location.replace(l)}},ve={key:0,class:"login"},ye={key:1,class:"loading"},ke=y({__name:"Login",setup(t){const o=B(),e=C();async function s(){await me(),e.query.redirect?await o.push({path:e.query.redirect,query:{...e.query,redirect:e.query["prev-redirect"],"prev-redirect":void 0}}):o.push({name:"home"})}const l=D(()=>!v.getAuthor());return P(()=>{l.value||s()}),(_,u)=>l.value?(c(),d("div",ve,[h(R,{theme:"white","main-color":"#d14056","font-family":"sans-serif"},{default:q(()=>[h(he,{class:"passwordless",onDone:s})]),_:1})])):(c(),d("div",ye,[h(S)]))}});const Ce=k(ke,[["__scopeId","data-v-a7a1a259"]]);export{Ce as default};
//# sourceMappingURL=Login.20fb5857.js.map
