import{L as S}from"./CircularLoading.cef8a22f.js";import{d as f,v,b as s,c as n,x as t,N as g,V as b,W as w,$ as T,D as h,O as $,Q as x,q as m,z as V,S as B,e as p}from"./registerWidgets.81004098.js";import{t as C}from"./icons.ea1ef9e9.js";import{p as k}from"./passwordlessManager.d8088db9.js";const I=o=>($("data-v-1b435c3a"),o=o(),x(),o),E={class:"auth-info"},K={class:"auth-header"},N={class:"auth-label"},P=I(()=>t("div",{class:"description"},"To continue we need you to authenticate",-1)),D=["onKeyup"],R={key:0,class:"span-error"},L=I(()=>t("div",{class:"spacer"},null,-1)),M=f({__name:"AuthInfo",props:{invalid:{type:Boolean,default:!1},header:{type:String}},emits:["sendAuthInfo"],setup(o,{emit:c}){const e=v({email:""}),l=()=>{c("sendAuthInfo",e)};return(_,d)=>(s(),n("div",E,[t("div",K,[t("div",N,g(o.header),1),P]),b(t("input",{"onUpdate:modelValue":d[0]||(d[0]=u=>e.email=u),type:"email",placeholder:"Email address",class:"input email-input",onKeyup:T(l,["enter"])},null,40,D),[[w,e.email]]),o.invalid?(s(),n("span",R," Email invalid, please try again. ")):h("",!0),L,t("button",{class:"next-button",onClick:l}," Send a verification email ")]))}});const U=m(M,[["__scopeId","data-v-1b435c3a"]]),A=o=>($("data-v-9316d802"),o=o(),x(),o),q={class:"auth-token"},z={class:"auth-label"},O=["onKeyup"],Q={key:0,class:"span-error"},W={key:1,class:"span-error"},j=A(()=>t("div",{class:"spacer"},null,-1)),F={class:"button-icon",viewBox:"0 0 24 24"},G=["d"],H=A(()=>t("div",{class:"footer"}," If you haven't received the verification code, try again or choose another email ",-1)),J=f({__name:"AuthToken",props:{expired:{type:Boolean},invalid:{type:Boolean},email:null},emits:["sendToken","restartAuth","resendToken"],setup(o,{emit:c}){const e=v({token:""}),l=()=>{c("restartAuth")},_=()=>{c("resendToken")},d=()=>{c("sendToken",e.token)};return(u,a)=>(s(),n("div",q,[t("div",z," Check "+g(o.email)+"'s inbox and enter your verification code below ",1),b(t("input",{"onUpdate:modelValue":a[0]||(a[0]=i=>e.token=i),type:"text",placeholder:"Type your verification code",class:"input",onKeyup:T(d,["enter"])},null,40,O),[[w,e.token]]),o.expired?(s(),n("span",Q," Token expired, try to resend it. ")):h("",!0),o.invalid?(s(),n("span",W," Token invalid, please try again or go back and alter you email address. ")):h("",!0),j,t("button",{class:"next-button",onClick:d},"Verify Email"),t("button",{class:"secondary-button back",onClick:l},[(s(),n("svg",F,[t("path",{d:V(C)},null,8,G)])),B(" Try Again ")]),t("button",{class:"secondary-button back",onClick:_}," Resend Email "),H]))}});const X=m(J,[["__scopeId","data-v-9316d802"]]),Y={key:0,class:"form"},Z={class:"form-wrapper"},ee={class:"widget"},te={key:1,class:"form"},oe={class:"form-wrapper"},se={class:"widget"},ne={key:2,class:"form"},ae={class:"form-wrapper"},ie={class:"loading"},ce=f({__name:"Passwordless",props:{header:{type:String,default:"Validate your email"}},emits:["done"],setup(o,{emit:c}){const e=v({stage:"collect-info",info:null,token:null,invalid:!1}),l=async a=>{e.info=a,e.stage="loading";const i=await k.authenticate(a.email);e.invalid=!!i,i?e.stage="collect-info":e.stage="collect-token"},_=async a=>{var i;if(!!((i=e.info)!=null&&i.email)){e.token=a,e.stage="loading";try{const r=await k.verify(e.info.email,e.token);if(!r)throw new Error("no user");c("done",r),e.stage="done"}catch{e.invalid=!0,e.stage="collect-token"}}},d=()=>{e.info&&l(e.info)},u=()=>{e.stage="collect-info",e.info=null,e.token=null,e.invalid=!1};return(a,i)=>{var r,y;return e.stage==="collect-info"?(s(),n("div",Y,[t("div",Z,[t("div",ee,[p(U,{invalid:e.invalid,header:o.header,onSendAuthInfo:l},null,8,["invalid","header"])])])])):e.stage==="collect-token"?(s(),n("div",te,[t("div",oe,[t("div",se,[p(X,{invalid:e.invalid,email:(y=(r=e.info)==null?void 0:r.email)!=null?y:"",onSendToken:_,onResendToken:d,onRestartAuth:u},null,8,["invalid","email"])])])])):(s(),n("div",ne,[t("div",ae,[t("div",ie,[p(S)])])]))}}});const ue=m(ce,[["__scopeId","data-v-cdf5651f"]]);export{ue as P};
//# sourceMappingURL=Passwordless.1696a947.js.map
