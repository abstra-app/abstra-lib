import{d as k,e as B,X as h,o as n,c as u,w as p,b as A,aG as I,e9 as P,ed as C,ee as D,u as y,bT as N,eX as q,a0 as S,ea as V,S as g,a as b,Y as c,eb as v,ec as x,aS as w,q as E,t as L}from"./index.b4fd398e.js";import{S as $}from"./Steps.bf427090.js";import{W as F}from"./PlayerConfigProvider.1f2b6290.js";import"./index.60c981a3.js";import"./colorHelpers.f0205ffa.js";import"./index.4d69ceb8.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[t]="c3fff80a-ac85-4298-a5ff-b37a76e69a5a",a._sentryDebugIdIdentifier="sentry-dbid-c3fff80a-ac85-4298-a5ff-b37a76e69a5a")}catch{}})();const K=k({__name:"ActionButton",props:{action:{},displayName:{},disabled:{type:Boolean},loading:{type:Boolean}},emits:["click"],setup(a,{emit:t}){const d=a,l=B(null);return h(()=>{l.value&&d.action.setElement(l.value)}),(o,i)=>(n(),u(y(q),null,{default:p(()=>[A(y(N),{ref_key:"element",ref:l,class:C(["next-button",o.disabled?"disabled":""]),loading:o.loading,disabled:o.disabled,onClick:i[0]||(i[0]=f=>t("click")),onKeydown:i[1]||(i[1]=D(f=>t("click"),["enter"]))},{default:p(()=>[I(P(o.displayName),1)]),_:1},8,["loading","disabled","class"])]),_:1}))}});const M=S(K,[["__scopeId","data-v-aea27bb7"]]),O={class:"form"},X={class:"form-wrapper"},z={key:0,class:"buttons"},G=k({__name:"WidgetPreview",setup(a){const t=V(),d=B([]);function l(e){return E[e]||L[e]||null}function o(e){try{const s=JSON.parse(e);if(s.component=l(s.type),!s.component)throw new Error(`Widget ${s.type} not found`);return s.component?s:null}catch{return null}}function i(){const e=t.query.widget;return Array.isArray(e)?e.map(o).filter(Boolean):[o(e)]}function f(){return t.query.steps==="true"}function m(){const e=t.query.button;return e?Array.isArray(e)?e:[e]:[]}const _=e=>({name:e,isDefault:!1,isFocused:!1,focusOnButton:()=>{},addKeydownListener:()=>{},setElement:()=>{}});return(e,s)=>(n(),u(F,{"main-color":"#d14056",class:"preview",background:"#fbfbfb","font-family":"Inter",locale:"en"},{default:p(()=>[f()?(n(),u($,{key:0,class:"steps","steps-info":{current:1,total:3}})):g("",!0),b("div",O,[b("div",X,[(n(!0),c(w,null,v(i(),(r,W)=>(n(),c("div",{key:W,class:"widget"},[(n(),u(x(r.component),{"user-props":r.userProps,value:r.userProps.value,errors:d.value},null,8,["user-props","value","errors"]))]))),128))]),m().length?(n(),c("div",z,[(n(!0),c(w,null,v(m(),r=>(n(),u(M,{key:r,"display-name":_(r).name,action:_(r)},null,8,["display-name","action"]))),128))])):g("",!0)])]),_:1}))}});const Q=S(G,[["__scopeId","data-v-0c6cef1d"]]);export{Q as default};
//# sourceMappingURL=WidgetPreview.c405c254.js.map
