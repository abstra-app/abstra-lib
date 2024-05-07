import{d as y,I as b,b as c,ew as d,e as o,eH as i,u as a,aL as I,f0 as $,f2 as T,ey as g,f3 as r,eC as x,eD as A,x as k,f,as as L,eK as B,eE as C,J as D,db as P,w as q}from"./outputWidgets.80b79706.js";import{L as S}from"./CircularLoading.6cec7af3.js";import{b as v,T as K}from"./router.15937dc6.js";import{G as M}from"./PhArrowClockwise.vue.ada9ac6b.js";import{W as R}from"./WidgetsFrame.87cb8ec5.js";import"./index.7591416f.js";import{M as V}from"./member.4f2c57dc.js";import"./Form.e988a87f.js";import"./hasIn.ea2613ea.js";import"./popupNotifcation.a2a58f34.js";import"./record.63b4046d.js";import"./pubsub.20266ef8.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[n]="0b5d0011-a1c1-416c-8b1f-91971c418637",t._sentryDebugIdIdentifier="sentry-dbid-0b5d0011-a1c1-416c-8b1f-91971c418637")}catch{}})();const E=t=>(x("data-v-06bca615"),t=t(),A(),t),N={class:"auth-info"},U={class:"auth-header"},F={class:"auth-label"},O={class:"description"},W=["onKeyup"],j={key:0,class:"span-error"},G=E(()=>o("div",{class:"spacer"},null,-1)),H=y({__name:"AuthInfo",props:{invalid:{type:Boolean,default:!1},header:{type:String}},emits:["sendAuthInfo"],setup(t,{emit:n}){const e=b({email:""}),s=()=>{n("sendAuthInfo",e)};return(l,_)=>(c(),d("div",N,[o("div",U,[o("div",F,i(t.header),1),o("div",O,i(a(r).translate("i18n_auth_info_description")),1)]),I(o("input",{"onUpdate:modelValue":_[0]||(_[0]=u=>e.email=u),type:"email",placeholder:"Email address",class:"input email-input",onKeyup:T(s,["enter"])},null,40,W),[[$,e.email]]),t.invalid?(c(),d("span",j,i(a(r).translate("i18n_auth_info_invalid_email")),1)):g("",!0),G,o("button",{class:"next-button",onClick:s},i(a(r).translate("i18n_auth_info_send_code")),1)]))}});const J=k(H,[["__scopeId","data-v-06bca615"]]),z=t=>(x("data-v-168b081c"),t=t(),A(),t),Q={class:"auth-token"},X={class:"auth-label"},Y=["onKeyup"],Z={key:0,class:"span-error"},ee={key:1,class:"span-error"},te=z(()=>o("div",{class:"spacer"},null,-1)),oe={class:"footer"},ne=y({__name:"AuthToken",props:{expired:{type:Boolean},invalid:{type:Boolean},email:{}},emits:["sendToken","restartAuth","resendToken"],setup(t,{emit:n}){const e=b({token:""}),s=()=>{n("restartAuth")},l=()=>{n("resendToken")},_=()=>{n("sendToken",e.token)};return(u,p)=>(c(),d("div",Q,[o("div",X,i(a(r).translate("i18n_auth_token_label",{email:u.email})),1),I(o("input",{"onUpdate:modelValue":p[0]||(p[0]=h=>e.token=h),type:"text",placeholder:"Type your verification code",class:"input",onKeyup:T(_,["enter"])},null,40,Y),[[$,e.token]]),u.expired?(c(),d("span",Z,i(a(r).translate("i18n_auth_token_expired")),1)):g("",!0),u.invalid?(c(),d("span",ee,i(a(r).translate("i18n_auth_token_invalid")),1)):g("",!0),te,o("button",{class:"next-button",onClick:_},i(a(r).translate("i18n_auth_token_verify_email")),1),o("button",{class:"secondary-button back",onClick:s},[f(a(M)),L(" "+i(a(r).translate("i18n_auth_token_try_again")),1)]),o("button",{class:"secondary-button back",onClick:l},i(a(r).translate("i18n_auth_token_resend_email")),1),o("div",oe,i(a(r).translate("i18n_auth_token_footer_alternative_email")),1)]))}});const se=k(ne,[["__scopeId","data-v-168b081c"]]),ae={key:0,class:"form"},ie={class:"form-wrapper"},re={class:"widget"},ce={key:1,class:"form"},de={class:"form-wrapper"},le={class:"widget"},_e={key:2,class:"form"},ue={class:"form-wrapper"},pe={class:"loading"},he=y({__name:"Passwordless",props:{header:{type:String,default:r.translate("i18n_auth_validate_your_email")}},emits:["done"],setup(t,{emit:n}){const e=b({stage:"collect-info",info:null,token:null,invalid:!1}),s=async p=>{e.info=p,e.stage="loading";const h=await v.authenticate(p.email);e.invalid=!!h,h?e.stage="collect-info":e.stage="collect-token"},l=async p=>{var h;if(!!((h=e.info)!=null&&h.email)){e.token=p,e.stage="loading";try{const m=await v.verify(e.info.email,e.token);if(!m)throw new Error("[Passwordless] Login did not return an user");K.trackSession(),n("done",m),e.stage="done"}catch{e.invalid=!0,e.stage="collect-token"}}},_=()=>{e.info&&s(e.info)},u=()=>{e.stage="collect-info",e.info=null,e.token=null,e.invalid=!1};return(p,h)=>{var m,w;return e.stage==="collect-info"?(c(),d("div",ae,[o("div",ie,[o("div",re,[f(J,{invalid:e.invalid,header:t.header,onSendAuthInfo:s},null,8,["invalid","header"])])])])):e.stage==="collect-token"?(c(),d("div",ce,[o("div",de,[o("div",le,[f(se,{invalid:e.invalid,email:(w=(m=e.info)==null?void 0:m.email)!=null?w:"",onSendToken:l,onResendToken:_,onRestartAuth:u},null,8,["invalid","email"])])])])):(c(),d("div",_e,[o("div",ue,[o("div",pe,[f(S)])])]))}}});const fe=k(he,[["__scopeId","data-v-6e5a5aaa"]]),me=async()=>{const t=await V.onboarding(),n=v.getAuthor();if(t.shouldBeOnboarded&&n){const e="https://onboarding.abstra.app/signup-form",s=new URLSearchParams({token:n.jwt,redirect:location.href}),l=e+"?"+s;window.location.replace(l)}},ve={key:0,class:"login"},ye={key:1,class:"loading"},ke=y({__name:"Login",setup(t){const n=B(),e=C();async function s(){await me(),e.query.redirect?await n.push({path:e.query.redirect,query:{...e.query,redirect:e.query["prev-redirect"],"prev-redirect":void 0}}):n.push({name:"home"})}const l=D(()=>!v.getAuthor());return P(()=>{l.value||s()}),(_,u)=>l.value?(c(),d("div",ve,[f(R,{theme:"white","main-color":"#d14056","font-family":"sans-serif"},{default:q(()=>[f(fe,{class:"passwordless",onDone:s})]),_:1})])):(c(),d("div",ye,[f(S)]))}});const De=k(ke,[["__scopeId","data-v-a7a1a259"]]);export{De as default};
//# sourceMappingURL=Login.fb49e239.js.map
