import{d as k,e as B,W as P,o as n,c as u,w as f,b as A,aF as I,ec as S,ea as C,eU as D,u as y,bP as N,eZ as q,$ as W,ed as V,R as b,a as g,X as c,ee as v,ef as x,aR as w,q as E,t as $}from"./vue-router.5f743299.js";import{S as F}from"./Steps.382d5fef.js";import{W as L}from"./PlayerConfigProvider.0ee4affc.js";import"./index.7fb6e5f6.js";import"./colorHelpers.a9659a9f.js";import"./index.9b57c7c9.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[t]="0b177c94-bb7e-435c-8bb4-49464de879e2",o._sentryDebugIdIdentifier="sentry-dbid-0b177c94-bb7e-435c-8bb4-49464de879e2")}catch{}})();const K=k({__name:"ActionButton",props:{action:{},displayName:{},disabled:{type:Boolean},loading:{type:Boolean}},emits:["click"],setup(o,{emit:t}){const d=o,l=B(null);return P(()=>{l.value&&d.action.setElement(l.value)}),(r,i)=>(n(),u(y(q),null,{default:f(()=>[A(y(N),{ref_key:"element",ref:l,class:C(["next-button",r.disabled?"disabled":""]),loading:r.loading,disabled:r.disabled,onClick:i[0]||(i[0]=p=>t("click")),onKeydown:i[1]||(i[1]=D(p=>t("click"),["enter"]))},{default:f(()=>[I(S(r.displayName),1)]),_:1},8,["loading","disabled","class"])]),_:1}))}});const R=W(K,[["__scopeId","data-v-aea27bb7"]]),M={class:"form"},O={class:"form-wrapper"},z={key:0,class:"buttons"},J=k({__name:"WidgetPreview",setup(o){const t=V(),d=B([]);function l(e){return E[e]||$[e]||null}function r(e){try{const s=JSON.parse(e);if(s.component=l(s.type),!s.component)throw new Error(`Widget ${s.type} not found`);return s.component?s:null}catch{return null}}function i(){const e=t.query.widget;return Array.isArray(e)?e.map(r).filter(Boolean):[r(e)]}function p(){return t.query.steps==="true"}function m(){const e=t.query.button;return e?Array.isArray(e)?e:[e]:[]}const _=e=>({name:e,isDefault:!1,isFocused:!1,focusOnButton:()=>{},addKeydownListener:()=>{},setElement:()=>{}});return(e,s)=>(n(),u(L,{"main-color":"#d14056",class:"preview",background:"#fbfbfb","font-family":"Inter",locale:"en"},{default:f(()=>[p()?(n(),u(F,{key:0,class:"steps","steps-info":{current:1,total:3}})):b("",!0),g("div",M,[g("div",O,[(n(!0),c(w,null,v(i(),(a,h)=>(n(),c("div",{key:h,class:"widget"},[(n(),u(x(a.component),{"user-props":a.userProps,value:a.userProps.value,errors:d.value},null,8,["user-props","value","errors"]))]))),128))]),m().length?(n(),c("div",z,[(n(!0),c(w,null,v(m(),a=>(n(),u(R,{key:a,"display-name":_(a).name,action:_(a)},null,8,["display-name","action"]))),128))])):b("",!0)])]),_:1}))}});const Q=W(J,[["__scopeId","data-v-0c6cef1d"]]);export{Q as default};
//# sourceMappingURL=WidgetPreview.1d75d711.js.map
