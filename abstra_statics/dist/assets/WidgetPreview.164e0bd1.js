import{_ as b}from"./ActionButton.vue_vue_type_script_setup_true_lang.f720947f.js";import{S as h}from"./Steps.1d151ab5.js";import{W}from"./WidgetsFrame.b500b4a0.js";import{d as k,eA as B,r as I,b as r,c as a,w as P,ew as d,e as p,et as u,eB as m,eI as x,bw as _,m as A,n as D,x as S}from"./outputWidgets.d6897520.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},s=new Error().stack;s&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[s]="fce4493b-1cfc-46a4-afad-0ac7ff6eb32c",o._sentryDebugIdIdentifier="sentry-dbid-fce4493b-1cfc-46a4-afad-0ac7ff6eb32c")}catch{}})();const q={class:"form"},C={class:"form-wrapper"},E={key:0,class:"buttons"},L=k({__name:"WidgetPreview",setup(o){const s=B(),c=I([]);function y(e){return A[e]||D[e]||null}function i(e){try{const t=JSON.parse(e);if(t.component=y(t.type),!t.component)throw new Error(`Widget ${t.type} not found`);return t.component?t:null}catch(t){return console.error(t),null}}function g(){const e=s.query.widget;return Array.isArray(e)?e.map(i).filter(Boolean):[i(e)]}function w(){return s.query.steps==="true"}function f(){const e=s.query.button;return e?Array.isArray(e)?e:[e]:[]}const l=e=>({name:e,isDefault:!1,isFocused:!1,focusOnButton:()=>{},addKeydownListener:()=>{},setElement:()=>{}});return(e,t)=>(r(),a(W,{"main-color":"#d14056",class:"preview",theme:"#fbfbfb",runtime:"dash","font-family":"Inter"},{default:P(()=>[w()?(r(),a(h,{key:0,"steps-info":{current:2,total:3}})):d("",!0),p("div",q,[p("div",C,[(r(!0),u(_,null,m(g(),(n,v)=>(r(),u("div",{key:v,class:"widget"},[(r(),a(x(n.component),{"user-props":n.userProps,value:n.userProps.value,errors:c.value},null,8,["user-props","value","errors"]))]))),128))]),f().length?(r(),u("div",E,[(r(!0),u(_,null,m(f(),n=>(r(),a(b,{key:n,"display-name":l(n).name,action:l(n)},null,8,["display-name","action"]))),128))])):d("",!0)])]),_:1}))}});const $=S(L,[["__scopeId","data-v-572c34ce"]]);export{$ as default};
//# sourceMappingURL=WidgetPreview.164e0bd1.js.map
