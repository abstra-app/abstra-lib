import{_ as w}from"./ActionButton.vue_vue_type_script_setup_true_lang.a2ecf411.js";import{S as h}from"./Steps.beb96865.js";import{W}from"./WidgetsFrame.c977ee9c.js";import{d as k,ey as B,r as I,b as r,c as a,w as P,eu as f,e as p,es as u,ez as m,eH as D,b8 as _,m as S,n as q,t as x}from"./outputWidgets.350c2fca.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},s=new Error().stack;s&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[s]="fb78d4b2-032e-44b6-85dc-6cb9e3d43e87",o._sentryDebugIdIdentifier="sentry-dbid-fb78d4b2-032e-44b6-85dc-6cb9e3d43e87")}catch{}})();const A={class:"form"},C={class:"form-wrapper"},E={key:0,class:"buttons"},L=k({__name:"WidgetPreview",setup(o){const s=B(),i=I([]);function y(e){return S[e]||q[e]||null}function c(e){try{const t=JSON.parse(e);if(t.component=y(t.type),!t.component)throw new Error(`Widget ${t.type} not found`);return t.component?t:null}catch(t){return console.error(t),null}}function g(){const e=s.query.widget;return Array.isArray(e)?e.map(c).filter(Boolean):[c(e)]}function b(){return s.query.steps==="true"}function d(){const e=s.query.button;return e?Array.isArray(e)?e:[e]:[]}const l=e=>({name:e,isDefault:!1,isFocused:!1,focusOnButton:()=>{},addKeydownListener:()=>{},setElement:()=>{}});return(e,t)=>(r(),a(W,{"main-color":"#d14056",class:"preview",theme:"#fbfbfb",runtime:"dash","font-family":"Inter"},{default:P(()=>[b()?(r(),a(h,{key:0,"steps-info":{current:2,total:3}})):f("",!0),p("div",A,[p("div",C,[(r(!0),u(_,null,m(g(),(n,v)=>(r(),u("div",{key:v,class:"widget"},[(r(),a(D(n.component),{"user-props":n.userProps,value:n.userProps.value,errors:i.value},null,8,["user-props","value","errors"]))]))),128))]),d().length?(r(),u("div",E,[(r(!0),u(_,null,m(d(),n=>(r(),a(w,{key:n,"display-name":l(n).name,action:l(n)},null,8,["display-name","action"]))),128))])):f("",!0)])]),_:1}))}});const $=x(L,[["__scopeId","data-v-572c34ce"]]);export{$ as default};
//# sourceMappingURL=WidgetPreview.1b9e7040.js.map
