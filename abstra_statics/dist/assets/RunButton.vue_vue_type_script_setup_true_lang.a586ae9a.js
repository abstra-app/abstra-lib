import{f as o,eI as p,d as y,b,c as m,w as r,u as i,as as s,eH as c,m as g,bG as v,cA as _}from"./outputWidgets.2f687470.js";import{a as f}from"./Base.e4e796b1.js";import{A as P}from"./index.73e7ed76.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[t]="e196e564-9aa1-4d19-af44-87aad6896f09",a._sentryDebugIdIdentifier="sentry-dbid-e196e564-9aa1-4d19-af44-87aad6896f09")}catch{}})();var w={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm144.1 454.9L437.7 677.8a8.02 8.02 0 01-12.7-6.5V353.7a8 8 0 0112.7-6.5L656.1 506a7.9 7.9 0 010 12.9z"}}]},name:"play-circle",theme:"filled"};const h=w;function u(a){for(var t=1;t<arguments.length;t++){var e=arguments[t]!=null?Object(arguments[t]):{},l=Object.keys(e);typeof Object.getOwnPropertySymbols=="function"&&(l=l.concat(Object.getOwnPropertySymbols(e).filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),l.forEach(function(n){C(a,n,e[n])})}return a}function C(a,t,e){return t in a?Object.defineProperty(a,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):a[t]=e,a}var d=function(t,e){var l=u({},t,e.attrs);return o(p,u({},l,{icon:h}),null)};d.displayName="PlayCircleFilled";d.inheritAttrs=!1;const O=d,B=y({__name:"RunButton",props:{loading:{type:Boolean},disabled:{}},emits:["click","save"],setup(a,{emit:t}){return(e,l)=>(b(),m(i(_),{open:e.disabled?void 0:!1,placement:"bottom"},{content:r(()=>[o(i(P),{vertical:"",gap:"small"},{default:r(()=>[o(i(f),{style:{"font-size":"16px"}},{default:r(()=>{var n;return[s(c((n=e.disabled)==null?void 0:n.title),1)]}),_:1}),o(i(f),null,{default:r(()=>{var n;return[s(c((n=e.disabled)==null?void 0:n.message),1)]}),_:1})]),_:1})]),default:r(()=>[o(i(v),{style:{width:"100%"},loading:e.loading,icon:g(i(O)),disabled:!!e.disabled,size:"large",type:"primary",onClick:l[0]||(l[0]=n=>t("click"))},{default:r(()=>[s(" Run ")]),_:1},8,["loading","icon","disabled"])]),_:1},8,["open"]))}});export{B as _};
//# sourceMappingURL=RunButton.vue_vue_type_script_setup_true_lang.a586ae9a.js.map
