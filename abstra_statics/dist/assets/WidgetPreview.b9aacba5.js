import{d as k,e as B,W as S,o as n,c as u,w as f,b as A,aF as I,e9 as P,ed as C,eU as D,u as y,bS as N,eZ as q,$ as W,ea as V,R as g,a as b,X as d,eb as v,ec as x,aR as w,q as E,t as $}from"./vue-router.62e6d9fd.js";import{S as F}from"./Steps.2b786cba.js";import{W as L}from"./PlayerConfigProvider.de08bd5d.js";import"./index.27649d7a.js";import"./colorHelpers.fb6e5b1a.js";import"./index.357d38bf.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[t]="3cf0d42e-e1c1-4071-b657-ca471e3cba3c",o._sentryDebugIdIdentifier="sentry-dbid-3cf0d42e-e1c1-4071-b657-ca471e3cba3c")}catch{}})();const K=k({__name:"ActionButton",props:{action:{},displayName:{},disabled:{type:Boolean},loading:{type:Boolean}},emits:["click"],setup(o,{emit:t}){const c=o,l=B(null);return S(()=>{l.value&&c.action.setElement(l.value)}),(r,i)=>(n(),u(y(q),null,{default:f(()=>[A(y(N),{ref_key:"element",ref:l,class:C(["next-button",r.disabled?"disabled":""]),loading:r.loading,disabled:r.disabled,onClick:i[0]||(i[0]=p=>t("click")),onKeydown:i[1]||(i[1]=D(p=>t("click"),["enter"]))},{default:f(()=>[I(P(r.displayName),1)]),_:1},8,["loading","disabled","class"])]),_:1}))}});const R=W(K,[["__scopeId","data-v-aea27bb7"]]),M={class:"form"},O={class:"form-wrapper"},z={key:0,class:"buttons"},J=k({__name:"WidgetPreview",setup(o){const t=V(),c=B([]);function l(e){return E[e]||$[e]||null}function r(e){try{const s=JSON.parse(e);if(s.component=l(s.type),!s.component)throw new Error(`Widget ${s.type} not found`);return s.component?s:null}catch{return null}}function i(){const e=t.query.widget;return Array.isArray(e)?e.map(r).filter(Boolean):[r(e)]}function p(){return t.query.steps==="true"}function m(){const e=t.query.button;return e?Array.isArray(e)?e:[e]:[]}const _=e=>({name:e,isDefault:!1,isFocused:!1,focusOnButton:()=>{},addKeydownListener:()=>{},setElement:()=>{}});return(e,s)=>(n(),u(L,{"main-color":"#d14056",class:"preview",background:"#fbfbfb","font-family":"Inter",locale:"en"},{default:f(()=>[p()?(n(),u(F,{key:0,class:"steps","steps-info":{current:1,total:3}})):g("",!0),b("div",M,[b("div",O,[(n(!0),d(w,null,v(i(),(a,h)=>(n(),d("div",{key:h,class:"widget"},[(n(),u(x(a.component),{"user-props":a.userProps,value:a.userProps.value,errors:c.value},null,8,["user-props","value","errors"]))]))),128))]),m().length?(n(),d("div",z,[(n(!0),d(w,null,v(m(),a=>(n(),u(R,{key:a,"display-name":_(a).name,action:_(a)},null,8,["display-name","action"]))),128))])):g("",!0)])]),_:1}))}});const Q=W(J,[["__scopeId","data-v-0c6cef1d"]]);export{Q as default};
//# sourceMappingURL=WidgetPreview.b9aacba5.js.map
