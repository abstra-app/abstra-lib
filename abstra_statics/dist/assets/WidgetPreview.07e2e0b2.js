import{d as k,e as B,X as h,o as n,c as u,w as f,b as A,aG as I,e9 as P,ed as C,eO as D,u as y,bT as N,eT as q,a0 as S,ea as V,S as b,a as g,Y as c,eb as v,ec as x,aS as w,q as E,t as L}from"./index.9f6b07f8.js";import{S as $}from"./Steps.3c913754.js";import{W as F}from"./PlayerConfigProvider.8a42d29a.js";import"./index.6a8383bd.js";import"./colorHelpers.990caed0.js";import"./index.82fdaa86.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[t]="0af34470-2b8d-43d6-902a-e03b6bc7cae3",o._sentryDebugIdIdentifier="sentry-dbid-0af34470-2b8d-43d6-902a-e03b6bc7cae3")}catch{}})();const K=k({__name:"ActionButton",props:{action:{},displayName:{},disabled:{type:Boolean},loading:{type:Boolean}},emits:["click"],setup(o,{emit:t}){const d=o,l=B(null);return h(()=>{l.value&&d.action.setElement(l.value)}),(a,i)=>(n(),u(y(q),null,{default:f(()=>[A(y(N),{ref_key:"element",ref:l,class:C(["next-button",a.disabled?"disabled":""]),loading:a.loading,disabled:a.disabled,onClick:i[0]||(i[0]=p=>t("click")),onKeydown:i[1]||(i[1]=D(p=>t("click"),["enter"]))},{default:f(()=>[I(P(a.displayName),1)]),_:1},8,["loading","disabled","class"])]),_:1}))}});const O=S(K,[["__scopeId","data-v-aea27bb7"]]),M={class:"form"},T={class:"form-wrapper"},z={key:0,class:"buttons"},G=k({__name:"WidgetPreview",setup(o){const t=V(),d=B([]);function l(e){return E[e]||L[e]||null}function a(e){try{const s=JSON.parse(e);if(s.component=l(s.type),!s.component)throw new Error(`Widget ${s.type} not found`);return s.component?s:null}catch{return null}}function i(){const e=t.query.widget;return Array.isArray(e)?e.map(a).filter(Boolean):[a(e)]}function p(){return t.query.steps==="true"}function m(){const e=t.query.button;return e?Array.isArray(e)?e:[e]:[]}const _=e=>({name:e,isDefault:!1,isFocused:!1,focusOnButton:()=>{},addKeydownListener:()=>{},setElement:()=>{}});return(e,s)=>(n(),u(F,{"main-color":"#d14056",class:"preview",background:"#fbfbfb","font-family":"Inter",locale:"en"},{default:f(()=>[p()?(n(),u($,{key:0,class:"steps","steps-info":{current:1,total:3}})):b("",!0),g("div",M,[g("div",T,[(n(!0),c(w,null,v(i(),(r,W)=>(n(),c("div",{key:W,class:"widget"},[(n(),u(x(r.component),{"user-props":r.userProps,value:r.userProps.value,errors:d.value},null,8,["user-props","value","errors"]))]))),128))]),m().length?(n(),c("div",z,[(n(!0),c(w,null,v(m(),r=>(n(),u(O,{key:r,"display-name":_(r).name,action:_(r)},null,8,["display-name","action"]))),128))])):b("",!0)])]),_:1}))}});const Q=S(G,[["__scopeId","data-v-0c6cef1d"]]);export{Q as default};
//# sourceMappingURL=WidgetPreview.07e2e0b2.js.map