import{d as k,e as B,W as P,o as n,c as u,w as p,b as A,aF as I,e9 as S,ed as C,eV as D,u as y,bP as N,e_ as V,$ as W,ea as q,R as b,a as g,X as c,eb as v,ec as x,aR as w,q as E,t as $}from"./vue-router.369a1c63.js";import{S as F}from"./Steps.a0ba56b2.js";import{W as L}from"./PlayerConfigProvider.efbb17a2.js";import"./index.066eebd1.js";import"./colorHelpers.6f8730b7.js";import"./index.ff57c2f1.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[t]="1fb5f3ae-65c1-4cac-ab79-76f0f3bab5d4",o._sentryDebugIdIdentifier="sentry-dbid-1fb5f3ae-65c1-4cac-ab79-76f0f3bab5d4")}catch{}})();const K=k({__name:"ActionButton",props:{action:{},displayName:{},disabled:{type:Boolean},loading:{type:Boolean}},emits:["click"],setup(o,{emit:t}){const d=o,l=B(null);return P(()=>{l.value&&d.action.setElement(l.value)}),(a,i)=>(n(),u(y(V),null,{default:p(()=>[A(y(N),{ref_key:"element",ref:l,class:C(["next-button",a.disabled?"disabled":""]),loading:a.loading,disabled:a.disabled,onClick:i[0]||(i[0]=f=>t("click")),onKeydown:i[1]||(i[1]=D(f=>t("click"),["enter"]))},{default:p(()=>[I(S(a.displayName),1)]),_:1},8,["loading","disabled","class"])]),_:1}))}});const R=W(K,[["__scopeId","data-v-aea27bb7"]]),M={class:"form"},O={class:"form-wrapper"},z={key:0,class:"buttons"},J=k({__name:"WidgetPreview",setup(o){const t=q(),d=B([]);function l(e){return E[e]||$[e]||null}function a(e){try{const s=JSON.parse(e);if(s.component=l(s.type),!s.component)throw new Error(`Widget ${s.type} not found`);return s.component?s:null}catch{return null}}function i(){const e=t.query.widget;return Array.isArray(e)?e.map(a).filter(Boolean):[a(e)]}function f(){return t.query.steps==="true"}function _(){const e=t.query.button;return e?Array.isArray(e)?e:[e]:[]}const m=e=>({name:e,isDefault:!1,isFocused:!1,focusOnButton:()=>{},addKeydownListener:()=>{},setElement:()=>{}});return(e,s)=>(n(),u(L,{"main-color":"#d14056",class:"preview",background:"#fbfbfb","font-family":"Inter",locale:"en"},{default:p(()=>[f()?(n(),u(F,{key:0,class:"steps","steps-info":{current:1,total:3}})):b("",!0),g("div",M,[g("div",O,[(n(!0),c(w,null,v(i(),(r,h)=>(n(),c("div",{key:h,class:"widget"},[(n(),u(x(r.component),{"user-props":r.userProps,value:r.userProps.value,errors:d.value},null,8,["user-props","value","errors"]))]))),128))]),_().length?(n(),c("div",z,[(n(!0),c(w,null,v(_(),r=>(n(),u(R,{key:r,"display-name":m(r).name,action:m(r)},null,8,["display-name","action"]))),128))])):b("",!0)])]),_:1}))}});const U=W(J,[["__scopeId","data-v-0c6cef1d"]]);export{U as default};
//# sourceMappingURL=WidgetPreview.58b4510d.js.map
