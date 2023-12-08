import{d as v,F as g,b as c,eu as d,e as t,eD as a,u as s,b5 as I,eI as $,eQ as x,ew as k,eP as i,eE as A,eF as T,t as y,aq as S,f as m,eA as B,eB as D,o as C,w as q}from"./outputWidgets.917fb4ad.js";import{M}from"./member.be5cc40a.js";import{t as V}from"./icons.db72d1e7.js";import{b}from"./router.573df02a.js";import{L as E}from"./CircularLoading.c7975a62.js";import{W as K}from"./WidgetsFrame.75eb356d.js";import"./gateway.b83d205f.js";import"./Base.2f7eb23e.js";import"./transButton.15965f98.js";import"./Text.f6205589.js";import"./Title.aa8ab02d.js";import"./index.bb987715.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[o]="6b6c657c-41f8-40d1-9c80-bcb972fb5782",n._sentryDebugIdIdentifier="sentry-dbid-6b6c657c-41f8-40d1-9c80-bcb972fb5782")}catch{}})();const L=n=>(A("data-v-06bca615"),n=n(),T(),n),P={class:"auth-info"},N={class:"auth-header"},R={class:"auth-label"},F={class:"description"},U=["onKeyup"],W={key:0,class:"span-error"},Q=L(()=>t("div",{class:"spacer"},null,-1)),j=v({__name:"AuthInfo",props:{invalid:{type:Boolean,default:!1},header:{type:String}},emits:["sendAuthInfo"],setup(n,{emit:o}){const e=g({email:""}),r=()=>{o("sendAuthInfo",e)};return(f,l)=>(c(),d("div",P,[t("div",N,[t("div",R,a(n.header),1),t("div",F,a(s(i).translate("i18n_auth_info_description")),1)]),I(t("input",{"onUpdate:modelValue":l[0]||(l[0]=p=>e.email=p),type:"email",placeholder:"Email address",class:"input email-input",onKeyup:x(r,["enter"])},null,40,U),[[$,e.email]]),n.invalid?(c(),d("span",W,a(s(i).translate("i18n_auth_info_invalid_email")),1)):k("",!0),Q,t("button",{class:"next-button",onClick:r},a(s(i).translate("i18n_auth_info_send_code")),1)]))}});const z=y(j,[["__scopeId","data-v-06bca615"]]),G=n=>(A("data-v-9fec7fd3"),n=n(),T(),n),H={class:"auth-token"},J={class:"auth-label"},O=["onKeyup"],X={key:0,class:"span-error"},Y={key:1,class:"span-error"},Z=G(()=>t("div",{class:"spacer"},null,-1)),ee={class:"button-icon",viewBox:"0 0 24 24"},te=["d"],ne={class:"footer"},oe=v({__name:"AuthToken",props:{expired:{type:Boolean},invalid:{type:Boolean},email:{}},emits:["sendToken","restartAuth","resendToken"],setup(n,{emit:o}){const e=g({token:""}),r=()=>{o("restartAuth")},f=()=>{o("resendToken")},l=()=>{o("sendToken",e.token)};return(p,_)=>(c(),d("div",H,[t("div",J,a(s(i).translate("i18n_auth_token_label",{email:p.email})),1),I(t("input",{"onUpdate:modelValue":_[0]||(_[0]=u=>e.token=u),type:"text",placeholder:"Type your verification code",class:"input",onKeyup:x(l,["enter"])},null,40,O),[[$,e.token]]),p.expired?(c(),d("span",X,a(s(i).translate("i18n_auth_token_expired")),1)):k("",!0),p.invalid?(c(),d("span",Y,a(s(i).translate("i18n_auth_token_invalid")),1)):k("",!0),Z,t("button",{class:"next-button",onClick:l},a(s(i).translate("i18n_auth_token_verify_email")),1),t("button",{class:"secondary-button back",onClick:r},[(c(),d("svg",ee,[t("path",{d:s(V)},null,8,te)])),S(" "+a(s(i).translate("i18n_auth_token_try_again")),1)]),t("button",{class:"secondary-button back",onClick:f},a(s(i).translate("i18n_auth_token_resend_email")),1),t("div",ne,a(s(i).translate("i18n_auth_token_footer_alternative_email")),1)]))}});const se=y(oe,[["__scopeId","data-v-9fec7fd3"]]),ae={key:0,class:"form"},ie={class:"form-wrapper"},re={class:"widget"},ce={key:1,class:"form"},de={class:"form-wrapper"},le={class:"widget"},_e={key:2,class:"form"},ue={class:"form-wrapper"},pe={class:"loading"},fe=v({__name:"Passwordless",props:{header:{type:String,default:i.translate("i18n_auth_validate_your_email")}},emits:["done"],setup(n,{emit:o}){const e=g({stage:"collect-info",info:null,token:null,invalid:!1}),r=async _=>{e.info=_,e.stage="loading";const u=await b.authenticate(_.email);e.invalid=!!u,u?e.stage="collect-info":e.stage="collect-token"},f=async _=>{var u;if(!!((u=e.info)!=null&&u.email)){e.token=_,e.stage="loading";try{const h=await b.verify(e.info.email,e.token);if(!h)throw new Error("no user");o("done",h),e.stage="done"}catch{e.invalid=!0,e.stage="collect-token"}}},l=()=>{e.info&&r(e.info)},p=()=>{e.stage="collect-info",e.info=null,e.token=null,e.invalid=!1};return(_,u)=>{var h,w;return e.stage==="collect-info"?(c(),d("div",ae,[t("div",ie,[t("div",re,[m(z,{invalid:e.invalid,header:n.header,onSendAuthInfo:r},null,8,["invalid","header"])])])])):e.stage==="collect-token"?(c(),d("div",ce,[t("div",de,[t("div",le,[m(se,{invalid:e.invalid,email:(w=(h=e.info)==null?void 0:h.email)!=null?w:"",onSendToken:f,onResendToken:l,onRestartAuth:p},null,8,["invalid","email"])])])])):(c(),d("div",_e,[t("div",ue,[t("div",pe,[m(E)])])]))}}});const he=y(fe,[["__scopeId","data-v-6b5a711a"]]),me={class:"login"},ve=v({__name:"Login",setup(n){const o=B(),e=D();async function r(){await M.login(),e.query.redirect?o.push({path:e.query.redirect,query:{...e.query,redirect:e.query["prev-redirect"],"prev-redirect":void 0}}):o.push({name:"home"})}return C(async()=>{b.getAuthor()&&await r()}),(f,l)=>(c(),d("div",me,[m(K,{theme:"white","main-color":"#d14056","font-family":"sans-serif"},{default:q(()=>[m(he,{class:"passwordless",onDone:r})]),_:1})]))}});const De=y(ve,[["__scopeId","data-v-c3f079b3"]]);export{De as default};
//# sourceMappingURL=Login.fbe524fc.js.map
