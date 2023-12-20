import{d as m,F as b,b as d,ev as l,e as t,eD as a,u as o,bj as I,eO as $,eP as x,ex as k,eN as i,eE as A,eF as T,v as y,aq as S,f as v,eA as B,eB as D,o as C,w as q}from"./outputWidgets.fdae7e91.js";import{M}from"./member.5db855db.js";import{t as V}from"./icons.59384d21.js";import{a as g}from"./authorManager.adc33c37.js";import{L as E}from"./CircularLoading.e1b833b7.js";import{W as K}from"./WidgetsFrame.29c4eefe.js";import"./gateway.8c35b4b8.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},s=new Error().stack;s&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[s]="43795b87-f48f-494b-8eae-de5f170409bd",n._sentryDebugIdIdentifier="sentry-dbid-43795b87-f48f-494b-8eae-de5f170409bd")}catch{}})();const L=n=>(A("data-v-06bca615"),n=n(),T(),n),N={class:"auth-info"},P={class:"auth-header"},R={class:"auth-label"},F={class:"description"},U=["onKeyup"],W={key:0,class:"span-error"},j=L(()=>t("div",{class:"spacer"},null,-1)),O=m({__name:"AuthInfo",props:{invalid:{type:Boolean,default:!1},header:{type:String}},emits:["sendAuthInfo"],setup(n,{emit:s}){const e=b({email:""}),r=()=>{s("sendAuthInfo",e)};return(f,c)=>(d(),l("div",N,[t("div",P,[t("div",R,a(n.header),1),t("div",F,a(o(i).translate("i18n_auth_info_description")),1)]),I(t("input",{"onUpdate:modelValue":c[0]||(c[0]=p=>e.email=p),type:"email",placeholder:"Email address",class:"input email-input",onKeyup:x(r,["enter"])},null,40,U),[[$,e.email]]),n.invalid?(d(),l("span",W,a(o(i).translate("i18n_auth_info_invalid_email")),1)):k("",!0),j,t("button",{class:"next-button",onClick:r},a(o(i).translate("i18n_auth_info_send_code")),1)]))}});const z=y(O,[["__scopeId","data-v-06bca615"]]),G=n=>(A("data-v-9fec7fd3"),n=n(),T(),n),H={class:"auth-token"},J={class:"auth-label"},Q=["onKeyup"],X={key:0,class:"span-error"},Y={key:1,class:"span-error"},Z=G(()=>t("div",{class:"spacer"},null,-1)),ee={class:"button-icon",viewBox:"0 0 24 24"},te=["d"],ne={class:"footer"},se=m({__name:"AuthToken",props:{expired:{type:Boolean},invalid:{type:Boolean},email:{}},emits:["sendToken","restartAuth","resendToken"],setup(n,{emit:s}){const e=b({token:""}),r=()=>{s("restartAuth")},f=()=>{s("resendToken")},c=()=>{s("sendToken",e.token)};return(p,_)=>(d(),l("div",H,[t("div",J,a(o(i).translate("i18n_auth_token_label",{email:p.email})),1),I(t("input",{"onUpdate:modelValue":_[0]||(_[0]=u=>e.token=u),type:"text",placeholder:"Type your verification code",class:"input",onKeyup:x(c,["enter"])},null,40,Q),[[$,e.token]]),p.expired?(d(),l("span",X,a(o(i).translate("i18n_auth_token_expired")),1)):k("",!0),p.invalid?(d(),l("span",Y,a(o(i).translate("i18n_auth_token_invalid")),1)):k("",!0),Z,t("button",{class:"next-button",onClick:c},a(o(i).translate("i18n_auth_token_verify_email")),1),t("button",{class:"secondary-button back",onClick:r},[(d(),l("svg",ee,[t("path",{d:o(V)},null,8,te)])),S(" "+a(o(i).translate("i18n_auth_token_try_again")),1)]),t("button",{class:"secondary-button back",onClick:f},a(o(i).translate("i18n_auth_token_resend_email")),1),t("div",ne,a(o(i).translate("i18n_auth_token_footer_alternative_email")),1)]))}});const oe=y(se,[["__scopeId","data-v-9fec7fd3"]]),ae={key:0,class:"form"},ie={class:"form-wrapper"},re={class:"widget"},de={key:1,class:"form"},le={class:"form-wrapper"},ce={class:"widget"},_e={key:2,class:"form"},ue={class:"form-wrapper"},pe={class:"loading"},fe=m({__name:"Passwordless",props:{header:{type:String,default:i.translate("i18n_auth_validate_your_email")}},emits:["done"],setup(n,{emit:s}){const e=b({stage:"collect-info",info:null,token:null,invalid:!1}),r=async _=>{e.info=_,e.stage="loading";const u=await g.authenticate(_.email);e.invalid=!!u,u?e.stage="collect-info":e.stage="collect-token"},f=async _=>{var u;if(!!((u=e.info)!=null&&u.email)){e.token=_,e.stage="loading";try{const h=await g.verify(e.info.email,e.token);if(!h)throw new Error("no user");s("done",h),e.stage="done"}catch{e.invalid=!0,e.stage="collect-token"}}},c=()=>{e.info&&r(e.info)},p=()=>{e.stage="collect-info",e.info=null,e.token=null,e.invalid=!1};return(_,u)=>{var h,w;return e.stage==="collect-info"?(d(),l("div",ae,[t("div",ie,[t("div",re,[v(z,{invalid:e.invalid,header:n.header,onSendAuthInfo:r},null,8,["invalid","header"])])])])):e.stage==="collect-token"?(d(),l("div",de,[t("div",le,[t("div",ce,[v(oe,{invalid:e.invalid,email:(w=(h=e.info)==null?void 0:h.email)!=null?w:"",onSendToken:f,onResendToken:c,onRestartAuth:p},null,8,["invalid","email"])])])])):(d(),l("div",_e,[t("div",ue,[t("div",pe,[v(E)])])]))}}});const he=y(fe,[["__scopeId","data-v-6b5a711a"]]),ve={class:"login"},me=m({__name:"Login",setup(n){const s=B(),e=D();async function r(){await M.login(),e.query.redirect?s.push({path:e.query.redirect,query:{...e.query,redirect:e.query["prev-redirect"],"prev-redirect":void 0}}):s.push({name:"home"})}return C(async()=>{g.getAuthor()&&await r()}),(f,c)=>(d(),l("div",ve,[v(K,{theme:"white","main-color":"#d14056","font-family":"sans-serif"},{default:q(()=>[v(he,{class:"passwordless",onDone:r})]),_:1})]))}});const xe=y(me,[["__scopeId","data-v-c3f079b3"]]);export{xe as default};
//# sourceMappingURL=Login.2b1285f5.js.map
