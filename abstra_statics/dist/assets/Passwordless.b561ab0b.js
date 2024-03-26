import{d as w,eZ as i,H as k,G as b,b as c,eu as u,e as t,eE as _,u as r,c as x,aJ as $,eX as P,f2 as S,ew as y,eF as B,eG as L,v as I,f as m,aq as E,o as N}from"./outputWidgets.e9677800.js";import{u as A,S as g}from"./index.3c41cd1a.js";import{A as C}from"./index.3e3be57f.js";import{G as V}from"./PhArrowClockwise.vue.07468c7d.js";import{L as T}from"./CircularLoading.4609b9a9.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[a]="39708cda-ad68-411e-b942-4e765011d176",n._sentryDebugIdIdentifier="sentry-dbid-39708cda-ad68-411e-b942-4e765011d176")}catch{}})();class K{async authenticate(a){try{const e=await fetch("/_auth/authenticate",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({email:a})});if(!e.ok)throw new Error(await e.text());return null}catch(e){return e.message}}async verify(a,e){const d=await fetch("/_auth/verify",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({email:a,token:e})});if(!d.ok)return null;const h=await d.json();return A.saveJWT(h.jwt),A.getUser()}}const M=n=>(B("data-v-2f442942"),n=n(),L(),n),j={class:"auth-info"},J={class:"auth-header"},O={class:"auth-label"},U={key:1,class:"description"},G=["onKeyup"],R={key:0,class:"span-error"},q=M(()=>t("div",{class:"spacer"},null,-1)),F=w({__name:"AuthInfo",props:{invalid:{type:Boolean}},emits:["sendAuthInfo"],setup(n,{emit:a}){const e=n,d={description:i.translate("i18n_local_auth_info_description"),button:i.translate("i18n_local_auth_info_authenticate")},h={description:i.translate("i18n_auth_info_description"),button:i.translate("i18n_auth_info_send_code")},f=k(()=>{var o;return(o=g.instance)==null?void 0:o.isLocal}),p=k(()=>{var o;return(o=g.instance)!=null&&o.isLocal?d:h}),s=b({email:""}),l=()=>{a("sendAuthInfo",s)};return(o,v)=>(c(),u("div",j,[t("div",J,[t("div",O,_(r(i).translate("i18n_auth_validate_your_email")),1),f.value?(c(),x(r(C),{key:0,message:p.value.description,type:"warning","show-icon":"",style:{width:"100%","text-align":"left"}},null,8,["message"])):(c(),u("div",U,_(p.value.description),1))]),$(t("input",{"onUpdate:modelValue":v[0]||(v[0]=D=>s.email=D),type:"email",placeholder:"Email address",class:"input email-input",onKeyup:S(l,["enter"])},null,40,G),[[P,s.email]]),e.invalid?(c(),u("span",R,_(r(i).translate("i18n_auth_info_invalid_email")),1)):y("",!0),q,t("button",{class:"next-button",onClick:l},_(p.value.button),1)]))}});const H=I(F,[["__scopeId","data-v-2f442942"]]),W=n=>(B("data-v-e737f7da"),n=n(),L(),n),X={class:"auth-token"},Z={class:"auth-label"},z=["onKeyup"],Q={key:1,class:"span-error"},Y={key:2,class:"span-error"},ee=W(()=>t("div",{class:"spacer"},null,-1)),te={class:"footer"},ne=w({__name:"AuthToken",props:{email:{},invalid:{type:Boolean},expired:{type:Boolean}},emits:["sendToken","restartAuth","resendToken"],setup(n,{emit:a}){const e=k(()=>{var s;return(s=g.instance)==null?void 0:s.isLocal}),d=b({token:""}),h=()=>{a("restartAuth")},f=()=>{a("resendToken")},p=()=>{a("sendToken",d.token)};return(s,l)=>(c(),u("div",X,[t("div",Z,_(r(i).translate("i18n_auth_token_label",{email:s.email})),1),e.value?(c(),x(r(C),{key:0,message:r(i).translate("i18n_auth_token_development_warning"),type:"warning","show-icon":"",style:{width:"100%","text-align":"left","margin-bottom":"20px"}},null,8,["message"])):y("",!0),$(t("input",{"onUpdate:modelValue":l[0]||(l[0]=o=>d.token=o),type:"text",placeholder:"Type your verification code",class:"input",onKeyup:S(p,["enter"])},null,40,z),[[P,d.token]]),s.expired?(c(),u("span",Q,_(r(i).translate("i18n_auth_token_expired")),1)):y("",!0),s.invalid?(c(),u("span",Y,_(r(i).translate("i18n_auth_token_invalid")),1)):y("",!0),ee,t("button",{class:"next-button",onClick:p},_(r(i).translate("i18n_auth_token_verify_email")),1),t("button",{class:"secondary-button back",onClick:h},[m(r(V)),E(" "+_(r(i).translate("i18n_auth_token_try_again")),1)]),t("button",{class:"secondary-button back",onClick:f},_(r(i).translate("i18n_auth_token_resend_email")),1),t("div",te,_(r(i).translate("i18n_auth_token_footer_alternative_email")),1)]))}});const se=I(ne,[["__scopeId","data-v-e737f7da"]]),oe={key:0,class:"form"},ae={class:"form-wrapper"},ie={class:"loading"},re={key:1,class:"form"},le={class:"form-wrapper"},ce={class:"widget"},de={key:2,class:"form"},_e={class:"form-wrapper"},ue={class:"widget"},pe={key:3,class:"form"},he={class:"form-wrapper"},fe={class:"loading"},ve=w({__name:"Passwordless",emits:["done"],setup(n,{emit:a}){const e=b({stage:"collect-info",userProvider:null,invalid:!1,token:null,info:null});N(()=>{e.userProvider=new K});const d=async s=>{if(!e.userProvider)return;e.info=s,e.stage="loading";const l=await e.userProvider.authenticate(s.email);e.invalid=!!l,l?e.stage="collect-info":e.stage="collect-token"},h=async s=>{var l;if(!(!e.userProvider||!((l=e.info)!=null&&l.email))){e.token=s,e.stage="loading";try{const o=await e.userProvider.verify(e.info.email,e.token);if(!o)throw new Error("no user");a("done",o),e.stage="done"}catch{e.invalid=!0,e.stage="collect-token"}}},f=()=>{e.info&&d(e.info)},p=()=>{e.stage="collect-info",e.info=null,e.token=null,e.invalid=!1};return(s,l)=>{var o,v;return e.userProvider?e.stage==="collect-info"?(c(),u("div",re,[t("div",le,[t("div",ce,[m(H,{invalid:e.invalid,onSendAuthInfo:d},null,8,["invalid"])])])])):e.stage==="collect-token"?(c(),u("div",de,[t("div",_e,[t("div",ue,[m(se,{invalid:e.invalid,email:(v=(o=e.info)==null?void 0:o.email)!=null?v:"",onSendToken:h,onResendToken:f,onRestartAuth:p},null,8,["invalid","email"])])])])):(c(),u("div",pe,[t("div",he,[t("div",fe,[m(T)])])])):(c(),u("div",oe,[t("div",ae,[t("div",ie,[m(T)])])]))}}});const be=I(ve,[["__scopeId","data-v-d468d037"]]);export{be as P};
//# sourceMappingURL=Passwordless.b561ab0b.js.map
