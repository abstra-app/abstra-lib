import{S as b,A as h}from"./ActionButton.0b08292c.js";import{W}from"./WidgetsFrame.29c4eefe.js";import{d as k,eB as B,r as A,b as r,c as a,w as I,ex as l,e as p,ev as u,eC as m,eU as P,bq as _,m as q,n as x,v as C}from"./outputWidgets.fdae7e91.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},s=new Error().stack;s&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[s]="2f36f7f8-e01d-43fd-9417-9dc854a9e086",o._sentryDebugIdIdentifier="sentry-dbid-2f36f7f8-e01d-43fd-9417-9dc854a9e086")}catch{}})();const D={class:"form"},S={class:"form-wrapper"},E={key:0,class:"buttons"},L=k({__name:"WidgetPreview",setup(o){const s=B(),i=A([]);function y(e){return q[e]||x[e]||null}function c(e){try{const t=JSON.parse(e);if(t.component=y(t.type),!t.component)throw new Error(`Widget ${t.type} not found`);return t.component?t:null}catch{return null}}function g(){const e=s.query.widget;return Array.isArray(e)?e.map(c).filter(Boolean):[c(e)]}function v(){return s.query.steps==="true"}function d(){const e=s.query.button;return e?Array.isArray(e)?e:[e]:[]}const f=e=>({name:e,isDefault:!1,isFocused:!1,focusOnButton:()=>{},addKeydownListener:()=>{},setElement:()=>{}});return(e,t)=>(r(),a(W,{"main-color":"#d14056",class:"preview",theme:"#fbfbfb",runtime:"form","font-family":"Inter"},{default:I(()=>[v()?(r(),a(b,{key:0,"steps-info":{current:2,total:3}})):l("",!0),p("div",D,[p("div",S,[(r(!0),u(_,null,m(g(),(n,w)=>(r(),u("div",{key:w,class:"widget"},[(r(),a(P(n.component),{"user-props":n.userProps,value:n.userProps.value,errors:i.value},null,8,["user-props","value","errors"]))]))),128))]),d().length?(r(),u("div",E,[(r(!0),u(_,null,m(d(),n=>(r(),a(h,{key:n,"display-name":f(n).name,action:f(n)},null,8,["display-name","action"]))),128))])):l("",!0)])]),_:1}))}});const O=C(L,[["__scopeId","data-v-ef293d5b"]]);export{O as default};
//# sourceMappingURL=WidgetPreview.d2bfca07.js.map
