import{d as k,e as B,X as h,o as n,c as l,w as f,b as A,aG as I,e9 as P,ed as C,eQ as D,u as y,bT as N,eU as q,a0 as S,ea as V,S as g,a as b,Y as c,eb as v,ec as x,aS as w,q as E,t as L}from"./index.0e5627cd.js";import{S as $}from"./Steps.064aabb5.js";import{W as F}from"./PlayerConfigProvider.44140af0.js";import"./index.26f951ac.js";import"./colorHelpers.1fa06254.js";import"./index.761a01d9.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[t]="9e5c40ad-fed7-4b4a-8ded-30a5949d973d",o._sentryDebugIdIdentifier="sentry-dbid-9e5c40ad-fed7-4b4a-8ded-30a5949d973d")}catch{}})();const K=k({__name:"ActionButton",props:{action:{},displayName:{},disabled:{type:Boolean},loading:{type:Boolean}},emits:["click"],setup(o,{emit:t}){const u=o,d=B(null);return h(()=>{d.value&&u.action.setElement(d.value)}),(a,i)=>(n(),l(y(q),null,{default:f(()=>[A(y(N),{ref_key:"element",ref:d,class:C(["next-button",a.disabled?"disabled":""]),loading:a.loading,disabled:a.disabled,onClick:i[0]||(i[0]=p=>t("click")),onKeydown:i[1]||(i[1]=D(p=>t("click"),["enter"]))},{default:f(()=>[I(P(a.displayName),1)]),_:1},8,["loading","disabled","class"])]),_:1}))}});const M=S(K,[["__scopeId","data-v-aea27bb7"]]),O={class:"form"},z={class:"form-wrapper"},G={key:0,class:"buttons"},J=k({__name:"WidgetPreview",setup(o){const t=V(),u=B([]);function d(e){return E[e]||L[e]||null}function a(e){try{const s=JSON.parse(e);if(s.component=d(s.type),!s.component)throw new Error(`Widget ${s.type} not found`);return s.component?s:null}catch{return null}}function i(){const e=t.query.widget;return Array.isArray(e)?e.map(a).filter(Boolean):[a(e)]}function p(){return t.query.steps==="true"}function m(){const e=t.query.button;return e?Array.isArray(e)?e:[e]:[]}const _=e=>({name:e,isDefault:!1,isFocused:!1,focusOnButton:()=>{},addKeydownListener:()=>{},setElement:()=>{}});return(e,s)=>(n(),l(F,{"main-color":"#d14056",class:"preview",background:"#fbfbfb","font-family":"Inter",locale:"en"},{default:f(()=>[p()?(n(),l($,{key:0,class:"steps","steps-info":{current:1,total:3}})):g("",!0),b("div",O,[b("div",z,[(n(!0),c(w,null,v(i(),(r,W)=>(n(),c("div",{key:W,class:"widget"},[(n(),l(x(r.component),{"user-props":r.userProps,value:r.userProps.value,errors:u.value},null,8,["user-props","value","errors"]))]))),128))]),m().length?(n(),c("div",G,[(n(!0),c(w,null,v(m(),r=>(n(),l(M,{key:r,"display-name":_(r).name,action:_(r)},null,8,["display-name","action"]))),128))])):g("",!0)])]),_:1}))}});const j=S(J,[["__scopeId","data-v-0c6cef1d"]]);export{j as default};
//# sourceMappingURL=WidgetPreview.1c06cb2e.js.map
