import{S as w,_ as h}from"./ActionButton.vue_vue_type_script_setup_true_lang.dd36d6fa.js";import{W}from"./WidgetsFrame.d2a068d4.js";import{d as k,eA as B,r as I,b as r,c as a,w as P,ew as l,e as p,eu as u,eB as m,eL as A,b6 as _,m as D,n as S,t as q}from"./outputWidgets.63c887f3.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},s=new Error().stack;s&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[s]="13d6dc72-f29d-4a7e-82b0-4f40f3f15f7b",o._sentryDebugIdIdentifier="sentry-dbid-13d6dc72-f29d-4a7e-82b0-4f40f3f15f7b")}catch{}})();const x={class:"form"},C={class:"form-wrapper"},L={key:0,class:"buttons"},E=k({__name:"WidgetPreview",setup(o){const s=B(),i=I([]);function y(e){return D[e]||S[e]||null}function c(e){try{const t=JSON.parse(e);if(t.component=y(t.type),!t.component)throw new Error(`Widget ${t.type} not found`);return t.component?t:null}catch{return null}}function g(){const e=s.query.widget;return Array.isArray(e)?e.map(c).filter(Boolean):[c(e)]}function b(){return s.query.steps==="true"}function d(){const e=s.query.button;return e?Array.isArray(e)?e:[e]:[]}const f=e=>({name:e,isDefault:!1,isFocused:!1,focusOnButton:()=>{},addKeydownListener:()=>{},setElement:()=>{}});return(e,t)=>(r(),a(W,{"main-color":"#d14056",class:"preview",theme:"#fbfbfb",runtime:"form","font-family":"Inter"},{default:P(()=>[b()?(r(),a(w,{key:0,"steps-info":{current:2,total:3}})):l("",!0),p("div",x,[p("div",C,[(r(!0),u(_,null,m(g(),(n,v)=>(r(),u("div",{key:v,class:"widget"},[(r(),a(A(n.component),{"user-props":n.userProps,value:n.userProps.value,errors:i.value},null,8,["user-props","value","errors"]))]))),128))]),d().length?(r(),u("div",L,[(r(!0),u(_,null,m(d(),n=>(r(),a(h,{key:n,"display-name":f(n).name,action:f(n)},null,8,["display-name","action"]))),128))])):l("",!0)])]),_:1}))}});const O=q(E,[["__scopeId","data-v-ef293d5b"]]);export{O as default};
//# sourceMappingURL=WidgetPreview.c761bc9a.js.map
