import{_ as h}from"./ActionButton.vue_vue_type_script_setup_true_lang.d6dd17af.js";import{S as k}from"./Steps.868ef23e.js";import{W}from"./WidgetsFrame.fbc3780a.js";import{d as V,ey as B,r as c,b as r,u as a,eq as I,eu as p,er as m,c as u,ez as _,eG as q,bw as y,l as D,m as P,t as S}from"./registerWidgets.f5996e62.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},s=new Error().stack;s&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[s]="0208a744-5ca6-4c34-ab6d-3c7afcfcbd51",o._sentryDebugIdIdentifier="sentry-dbid-0208a744-5ca6-4c34-ab6d-3c7afcfcbd51")}catch{}})();const x={class:"form"},A={class:"form-wrapper"},C={key:0,class:"buttons"},E=V({__name:"WidgetPreview",setup(o){const s=B(),i=c([]);function g(e){return D[e]||P[e]||null}function l(e){try{console.log(e);const t=JSON.parse(e);if(t.component=g(t.type),t.refValue=c(t.defaultValue),!t.component)throw new Error(`Widget ${t.type} not found`);return t.value=c(t.defaultValue),console.log(t),t.component?t:null}catch(t){return console.error(t),null}}function b(){const e=s.query.widget;return Array.isArray(e)?e.map(l).filter(Boolean):[l(e)]}function v(){return s.query.steps==="true"}function d(){const e=s.query.button;return e?Array.isArray(e)?e:[e]:[]}const f=e=>({name:e,isDefault:!1,isFocused:!1,focusOnButton:()=>{},addKeydownListener:()=>{},setElement:()=>{}});return(e,t)=>(r(),a(W,{"main-color":"#d14056",class:"preview",theme:"#fbfbfb",runtime:"dash","font-family":"Inter"},{default:I(()=>[v()?(r(),a(k,{key:0,"steps-info":{current:2,total:3}})):p("",!0),m("div",x,[m("div",A,[(r(!0),u(y,null,_(b(),(n,w)=>(r(),u("div",{key:w,class:"widget"},[(r(),a(q(n.component),{"user-props":n.userProps,value:n.defaultValue,errors:i.value},null,8,["user-props","value","errors"]))]))),128))]),d().length?(r(),u("div",C,[(r(!0),u(y,null,_(d(),n=>(r(),a(h,{key:n,"display-name":f(n).name,action:f(n)},null,8,["display-name","action"]))),128))])):p("",!0)])]),_:1}))}});const $=S(E,[["__scopeId","data-v-b858f254"]]);export{$ as default};
//# sourceMappingURL=WidgetPreview.1e149eb9.js.map
