import{G as L,L as I}from"./CircularLoading.db226bef.js";import{W as B}from"./WidgetsFrame.dfea1b2d.js";import{d as y,z as b,b as d,eu as l,e as n,eG as i,u as a,aL as $,e$ as A,f4 as T,ew as g,f1 as r,eA as x,eB as S,S as k,f,ar as C,eJ as P,eC as D,K as R,dm as q,w as E}from"./vue-router.68023fee.js";import{T as K}from"./router.3f899b43.js";import{a as v,E as M}from"./gateway.038d8ee5.js";import"./index.6629f5fa.js";import{M as V}from"./member.d684e515.js";import"./popupNotifcation.e6bc97cd.js";import"./record.b374d8c0.js";import"./string.058fe17a.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[o]="91f53c93-932e-4c02-945b-b2db4da782b9",t._sentryDebugIdIdentifier="sentry-dbid-91f53c93-932e-4c02-945b-b2db4da782b9")}catch{}})();const U=t=>(x("data-v-5b4a425f"),t=t(),S(),t),N={class:"auth-info"},F={class:"auth-header"},G={class:"auth-label"},O={class:"description"},W=["onKeyup"],j={key:0,class:"span-error"},z=U(()=>n("div",{class:"spacer"},null,-1)),J=y({__name:"AuthInfo",props:{invalid:{type:Boolean,default:!1},header:{type:String}},emits:["sendAuthInfo"],setup(t,{emit:o}){const e=b({email:""}),s=()=>{o("sendAuthInfo",e)};return(c,_)=>(d(),l("div",N,[n("div",F,[n("div",G,i(t.header),1),n("div",O,i(a(r).translate("i18n_auth_info_description")),1)]),$(n("input",{"onUpdate:modelValue":_[0]||(_[0]=u=>e.email=u),type:"email",placeholder:"Email address",class:"input email-input",onKeyup:T(s,["enter"])},null,40,W),[[A,e.email]]),t.invalid?(d(),l("span",j,i(a(r).translate("i18n_auth_info_invalid_email")),1)):g("",!0),z,n("button",{class:"next-button",onClick:s},i(a(r).translate("i18n_auth_info_send_code")),1)]))}});const H=k(J,[["__scopeId","data-v-5b4a425f"]]),Q=t=>(x("data-v-168b081c"),t=t(),S(),t),X={class:"auth-token"},Y={class:"auth-label"},Z=["onKeyup"],ee={key:0,class:"span-error"},te={key:1,class:"span-error"},ne=Q(()=>n("div",{class:"spacer"},null,-1)),oe={class:"footer"},se=y({__name:"AuthToken",props:{expired:{type:Boolean},invalid:{type:Boolean},email:{}},emits:["sendToken","restartAuth","resendToken"],setup(t,{emit:o}){const e=b({token:""}),s=()=>{o("restartAuth")},c=()=>{o("resendToken")},_=()=>{o("sendToken",e.token)};return(u,p)=>(d(),l("div",X,[n("div",Y,i(a(r).translate("i18n_auth_token_label",{email:u.email})),1),$(n("input",{"onUpdate:modelValue":p[0]||(p[0]=h=>e.token=h),type:"text",placeholder:"Type your verification code",class:"input",onKeyup:T(_,["enter"])},null,40,Z),[[A,e.token]]),u.expired?(d(),l("span",ee,i(a(r).translate("i18n_auth_token_expired")),1)):g("",!0),u.invalid?(d(),l("span",te,i(a(r).translate("i18n_auth_token_invalid")),1)):g("",!0),ne,n("button",{class:"next-button",onClick:_},i(a(r).translate("i18n_auth_token_verify_email")),1),n("button",{class:"secondary-button back",onClick:s},[f(a(L)),C(" "+i(a(r).translate("i18n_auth_token_try_again")),1)]),n("button",{class:"secondary-button back",onClick:c},i(a(r).translate("i18n_auth_token_resend_email")),1),n("div",oe,i(a(r).translate("i18n_auth_token_footer_alternative_email")),1)]))}});const ae=k(se,[["__scopeId","data-v-168b081c"]]),ie={key:0,class:"form"},re={class:"form-wrapper"},de={class:"widget"},le={key:1,class:"form"},ce={class:"form-wrapper"},_e={class:"widget"},ue={key:2,class:"form"},pe={class:"form-wrapper"},he={class:"loading"},fe=y({__name:"Passwordless",props:{header:{type:String,default:r.translate("i18n_auth_validate_your_email")}},emits:["done"],setup(t,{emit:o}){const e=b({stage:"collect-info",info:null,token:null,invalid:!1}),s=async p=>{e.info=p,e.stage="loading";const h=await v.authenticate(p.email);e.invalid=!!h,h?e.stage="collect-info":e.stage="collect-token"},c=async p=>{var h;if(!!((h=e.info)!=null&&h.email)){e.token=p,e.stage="loading";try{const m=await v.verify(e.info.email,e.token);if(!m)throw new Error("[Passwordless] Login did not return an user");K.trackSession(),o("done",m),e.stage="done"}catch{e.invalid=!0,e.stage="collect-token"}}},_=()=>{e.info&&s(e.info)},u=()=>{e.stage="collect-info",e.info=null,e.token=null,e.invalid=!1};return(p,h)=>{var m,w;return e.stage==="collect-info"?(d(),l("div",ie,[n("div",re,[n("div",de,[f(H,{invalid:e.invalid,header:t.header,onSendAuthInfo:s},null,8,["invalid","header"])])])])):e.stage==="collect-token"?(d(),l("div",le,[n("div",ce,[n("div",_e,[f(ae,{invalid:e.invalid,email:(w=(m=e.info)==null?void 0:m.email)!=null?w:"",onSendToken:c,onResendToken:_,onRestartAuth:u},null,8,["invalid","email"])])])])):(d(),l("div",ue,[n("div",pe,[n("div",he,[f(I)])])]))}}});const me=k(fe,[["__scopeId","data-v-064e0a42"]]),ve=async()=>{const t=await V.onboarding(),o=v.getAuthor();if(t.shouldBeOnboarded&&o){const e=`${M.onboarding}/schedule`,s=new URLSearchParams({token:o.jwt}),c=e+"?"+s;v.removeAuthor(),window.location.replace(c)}},ye={key:0,class:"login"},ke={key:1,class:"loading"},ge=y({__name:"Login",setup(t){const o=P(),e=D();async function s(){await ve(),e.query.redirect?await o.push({path:e.query.redirect,query:{...e.query,redirect:e.query["prev-redirect"],"prev-redirect":void 0}}):o.push({name:"home"})}const c=R(()=>!v.getAuthor());return q(()=>{c.value||s()}),(_,u)=>c.value?(d(),l("div",ye,[f(B,{theme:"white","main-color":"#d14056","font-family":"sans-serif",class:"passwordless"},{default:E(()=>[f(me,{onDone:s})]),_:1})])):(d(),l("div",ke,[f(I)]))}});const Ce=k(ge,[["__scopeId","data-v-e6629740"]]);export{Ce as default};
//# sourceMappingURL=Login.0a58dd63.js.map
