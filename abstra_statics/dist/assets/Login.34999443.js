import{L as I}from"./CircularLoading.fbf1d5d4.js";import{W as L}from"./WidgetsFrame.279dc9ee.js";import{d as y,N as b,b as d,ey as c,e as n,eJ as i,u as a,aN as $,f0 as A,f2 as T,eA as g,f3 as r,eE as x,eF as S,E as k,f,au as B,eM as D,eG as P,D as C,df as M,w as q}from"./outputWidgets.c28810ce.js";import{a as v,T as E}from"./router.681250d3.js";import{G as N}from"./PhArrowClockwise.vue.b0ce2dc4.js";import"./index.b7a708ee.js";import{M as R}from"./member.267cb26c.js";import"./popupNotifcation.79185a41.js";import"./record.c3640d28.js";import"./pubsub.25fdb5f8.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[o]="20f0c066-3662-4698-b381-bdfb310845c9",t._sentryDebugIdIdentifier="sentry-dbid-20f0c066-3662-4698-b381-bdfb310845c9")}catch{}})();const V=t=>(x("data-v-5b4a425f"),t=t(),S(),t),K={class:"auth-info"},U={class:"auth-header"},F={class:"auth-label"},G={class:"description"},O=["onKeyup"],W={key:0,class:"span-error"},j=V(()=>n("div",{class:"spacer"},null,-1)),J=y({__name:"AuthInfo",props:{invalid:{type:Boolean,default:!1},header:{type:String}},emits:["sendAuthInfo"],setup(t,{emit:o}){const e=b({email:""}),s=()=>{o("sendAuthInfo",e)};return(l,_)=>(d(),c("div",K,[n("div",U,[n("div",F,i(t.header),1),n("div",G,i(a(r).translate("i18n_auth_info_description")),1)]),$(n("input",{"onUpdate:modelValue":_[0]||(_[0]=u=>e.email=u),type:"email",placeholder:"Email address",class:"input email-input",onKeyup:T(s,["enter"])},null,40,O),[[A,e.email]]),t.invalid?(d(),c("span",W,i(a(r).translate("i18n_auth_info_invalid_email")),1)):g("",!0),j,n("button",{class:"next-button",onClick:s},i(a(r).translate("i18n_auth_info_send_code")),1)]))}});const z=k(J,[["__scopeId","data-v-5b4a425f"]]),H=t=>(x("data-v-168b081c"),t=t(),S(),t),Q={class:"auth-token"},X={class:"auth-label"},Y=["onKeyup"],Z={key:0,class:"span-error"},ee={key:1,class:"span-error"},te=H(()=>n("div",{class:"spacer"},null,-1)),ne={class:"footer"},oe=y({__name:"AuthToken",props:{expired:{type:Boolean},invalid:{type:Boolean},email:{}},emits:["sendToken","restartAuth","resendToken"],setup(t,{emit:o}){const e=b({token:""}),s=()=>{o("restartAuth")},l=()=>{o("resendToken")},_=()=>{o("sendToken",e.token)};return(u,p)=>(d(),c("div",Q,[n("div",X,i(a(r).translate("i18n_auth_token_label",{email:u.email})),1),$(n("input",{"onUpdate:modelValue":p[0]||(p[0]=h=>e.token=h),type:"text",placeholder:"Type your verification code",class:"input",onKeyup:T(_,["enter"])},null,40,Y),[[A,e.token]]),u.expired?(d(),c("span",Z,i(a(r).translate("i18n_auth_token_expired")),1)):g("",!0),u.invalid?(d(),c("span",ee,i(a(r).translate("i18n_auth_token_invalid")),1)):g("",!0),te,n("button",{class:"next-button",onClick:_},i(a(r).translate("i18n_auth_token_verify_email")),1),n("button",{class:"secondary-button back",onClick:s},[f(a(N)),B(" "+i(a(r).translate("i18n_auth_token_try_again")),1)]),n("button",{class:"secondary-button back",onClick:l},i(a(r).translate("i18n_auth_token_resend_email")),1),n("div",ne,i(a(r).translate("i18n_auth_token_footer_alternative_email")),1)]))}});const se=k(oe,[["__scopeId","data-v-168b081c"]]),ae={key:0,class:"form"},ie={class:"form-wrapper"},re={class:"widget"},de={key:1,class:"form"},ce={class:"form-wrapper"},le={class:"widget"},_e={key:2,class:"form"},ue={class:"form-wrapper"},pe={class:"loading"},he=y({__name:"Passwordless",props:{header:{type:String,default:r.translate("i18n_auth_validate_your_email")}},emits:["done"],setup(t,{emit:o}){const e=b({stage:"collect-info",info:null,token:null,invalid:!1}),s=async p=>{e.info=p,e.stage="loading";const h=await v.authenticate(p.email);e.invalid=!!h,h?e.stage="collect-info":e.stage="collect-token"},l=async p=>{var h;if(!!((h=e.info)!=null&&h.email)){e.token=p,e.stage="loading";try{const m=await v.verify(e.info.email,e.token);if(!m)throw new Error("[Passwordless] Login did not return an user");E.trackSession(),o("done",m),e.stage="done"}catch{e.invalid=!0,e.stage="collect-token"}}},_=()=>{e.info&&s(e.info)},u=()=>{e.stage="collect-info",e.info=null,e.token=null,e.invalid=!1};return(p,h)=>{var m,w;return e.stage==="collect-info"?(d(),c("div",ae,[n("div",ie,[n("div",re,[f(z,{invalid:e.invalid,header:t.header,onSendAuthInfo:s},null,8,["invalid","header"])])])])):e.stage==="collect-token"?(d(),c("div",de,[n("div",ce,[n("div",le,[f(se,{invalid:e.invalid,email:(w=(m=e.info)==null?void 0:m.email)!=null?w:"",onSendToken:l,onResendToken:_,onRestartAuth:u},null,8,["invalid","email"])])])])):(d(),c("div",_e,[n("div",ue,[n("div",pe,[f(I)])])]))}}});const fe=k(he,[["__scopeId","data-v-064e0a42"]]),me=async()=>{const t=await R.onboarding(),o=v.getAuthor();if(t.shouldBeOnboarded&&o){const e="https://onboarding.abstra.app/signup-form",s=new URLSearchParams({token:o.jwt,redirect:location.href}),l=e+"?"+s;window.location.replace(l)}},ve={key:0,class:"login"},ye={key:1,class:"loading"},ke=y({__name:"Login",setup(t){const o=D(),e=P();async function s(){await me(),e.query.redirect?await o.push({path:e.query.redirect,query:{...e.query,redirect:e.query["prev-redirect"],"prev-redirect":void 0}}):o.push({name:"home"})}const l=C(()=>!v.getAuthor());return M(()=>{l.value||s()}),(_,u)=>l.value?(d(),c("div",ve,[f(L,{theme:"white","main-color":"#d14056","font-family":"sans-serif",class:"passwordless"},{default:q(()=>[f(fe,{onDone:s})]),_:1})])):(d(),c("div",ye,[f(I)]))}});const Be=k(ke,[["__scopeId","data-v-36aa6353"]]);export{Be as default};
//# sourceMappingURL=Login.34999443.js.map
