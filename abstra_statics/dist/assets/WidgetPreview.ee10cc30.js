import{d as k,e as B,V as I,o as n,c as u,w as f,b as A,ax as D,e6 as P,e4 as S,eD as C,u as y,bL as N,eI as V,$ as W,e7 as q,R as g,a as b,W as c,e9 as v,ea as x,aJ as w,q as E,t as L}from"./vue-router.8cb6709e.js";import{S as $}from"./Steps.509b3c10.js";import{W as F}from"./WidgetsFrame.1ce6abfb.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[t]="5105adf8-b436-4432-a114-31e2d0883342",o._sentryDebugIdIdentifier="sentry-dbid-5105adf8-b436-4432-a114-31e2d0883342")}catch{}})();const K=k({__name:"ActionButton",props:{action:{},displayName:{},disabled:{type:Boolean},loading:{type:Boolean}},emits:["click"],setup(o,{emit:t}){const d=o,l=B(null);return I(()=>{l.value&&d.action.setElement(l.value)}),(r,i)=>(n(),u(y(V),null,{default:f(()=>[A(y(N),{ref_key:"element",ref:l,class:S(["next-button",r.disabled?"disabled":""]),loading:r.loading,disabled:r.disabled,onClick:i[0]||(i[0]=p=>t("click")),onKeydown:i[1]||(i[1]=C(p=>t("click"),["enter"]))},{default:f(()=>[D(P(r.displayName),1)]),_:1},8,["loading","disabled","class"])]),_:1}))}});const J=W(K,[["__scopeId","data-v-aea27bb7"]]),M={class:"form"},O={class:"form-wrapper"},R={key:0,class:"buttons"},z=k({__name:"WidgetPreview",setup(o){const t=q(),d=B([]);function l(e){return E[e]||L[e]||null}function r(e){try{const s=JSON.parse(e);if(s.component=l(s.type),!s.component)throw new Error(`Widget ${s.type} not found`);return s.component?s:null}catch{return null}}function i(){const e=t.query.widget;return Array.isArray(e)?e.map(r).filter(Boolean):[r(e)]}function p(){return t.query.steps==="true"}function _(){const e=t.query.button;return e?Array.isArray(e)?e:[e]:[]}const m=e=>({name:e,isDefault:!1,isFocused:!1,focusOnButton:()=>{},addKeydownListener:()=>{},setElement:()=>{}});return(e,s)=>(n(),u(F,{"main-color":"#d14056",class:"preview",theme:"#fbfbfb","font-family":"Inter",locale:"en"},{default:f(()=>[p()?(n(),u($,{key:0,"steps-info":{current:2,total:3}})):g("",!0),b("div",M,[b("div",O,[(n(!0),c(w,null,v(i(),(a,h)=>(n(),c("div",{key:h,class:"widget"},[(n(),u(x(a.component),{"user-props":a.userProps,value:a.userProps.value,errors:d.value},null,8,["user-props","value","errors"]))]))),128))]),_().length?(n(),c("div",R,[(n(!0),c(w,null,v(_(),a=>(n(),u(J,{key:a,"display-name":m(a).name,action:m(a)},null,8,["display-name","action"]))),128))])):g("",!0)])]),_:1}))}});const Q=W(z,[["__scopeId","data-v-ee7c26d0"]]);export{Q as default};
//# sourceMappingURL=WidgetPreview.ee10cc30.js.map
