import{d as k,e as B,Z as A,o as n,c as l,w as p,b as D,ar as C,ez as I,ex as P,f5 as S,u as y,bG as N,fa as q,R as h,eA as x,ev as g,a as b,et as c,eC as v,eD as V,aD as w,q as E,t as L}from"./vue-router.11ccd0ec.js";import{S as $}from"./Steps.3bec79e4.js";import{W as F}from"./WidgetsFrame.cbfbe1b8.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[t]="02f7bda7-0c6e-4f1c-8dae-f577ab6a35a6",a._sentryDebugIdIdentifier="sentry-dbid-02f7bda7-0c6e-4f1c-8dae-f577ab6a35a6")}catch{}})();const K=k({__name:"ActionButton",props:{action:{},displayName:{},disabled:{type:Boolean},loading:{type:Boolean}},emits:["click"],setup(a,{emit:t}){const d=a,u=B(null);return A(()=>{u.value&&d.action.setElement(u.value)}),(o,i)=>(n(),l(y(q),null,{default:p(()=>[D(y(N),{ref_key:"element",ref:u,class:P(["next-button",o.disabled?"disabled":""]),loading:o.loading,disabled:o.disabled,onClick:i[0]||(i[0]=f=>t("click")),onKeydown:i[1]||(i[1]=S(f=>t("click"),["enter"]))},{default:p(()=>[C(I(o.displayName),1)]),_:1},8,["loading","disabled","class"])]),_:1}))}});const z=h(K,[["__scopeId","data-v-aea27bb7"]]),M={class:"form"},O={class:"form-wrapper"},R={key:0,class:"buttons"},G=k({__name:"WidgetPreview",setup(a){const t=x(),d=B([]);function u(e){return E[e]||L[e]||null}function o(e){try{const s=JSON.parse(e);if(s.component=u(s.type),!s.component)throw new Error(`Widget ${s.type} not found`);return s.component?s:null}catch{return null}}function i(){const e=t.query.widget;return Array.isArray(e)?e.map(o).filter(Boolean):[o(e)]}function f(){return t.query.steps==="true"}function _(){const e=t.query.button;return e?Array.isArray(e)?e:[e]:[]}const m=e=>({name:e,isDefault:!1,isFocused:!1,focusOnButton:()=>{},addKeydownListener:()=>{},setElement:()=>{}});return(e,s)=>(n(),l(F,{"main-color":"#d14056",class:"preview",theme:"#fbfbfb","font-family":"Inter"},{default:p(()=>[f()?(n(),l($,{key:0,"steps-info":{current:2,total:3}})):g("",!0),b("div",M,[b("div",O,[(n(!0),c(w,null,v(i(),(r,W)=>(n(),c("div",{key:W,class:"widget"},[(n(),l(V(r.component),{"user-props":r.userProps,value:r.userProps.value,errors:d.value},null,8,["user-props","value","errors"]))]))),128))]),_().length?(n(),c("div",R,[(n(!0),c(w,null,v(_(),r=>(n(),l(z,{key:r,"display-name":m(r).name,action:m(r)},null,8,["display-name","action"]))),128))])):g("",!0)])]),_:1}))}});const H=h(G,[["__scopeId","data-v-d8094416"]]);export{H as default};
//# sourceMappingURL=WidgetPreview.6d66c6ad.js.map
