import{f as s,f5 as p,d as y,b,c as g,w as r,u as i,cS as c,am as o,f4 as f,cY as m,m as v,bF as _,cB as P}from"./outputWidgets.9b942c2e.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[t]="56ee9225-8f7e-4893-a8d0-e3d13e03a0a0",a._sentryDebugIdIdentifier="sentry-dbid-56ee9225-8f7e-4893-a8d0-e3d13e03a0a0")}catch{}})();var w={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm144.1 454.9L437.7 677.8a8.02 8.02 0 01-12.7-6.5V353.7a8 8 0 0112.7-6.5L656.1 506a7.9 7.9 0 010 12.9z"}}]},name:"play-circle",theme:"filled"};const h=w;function u(a){for(var t=1;t<arguments.length;t++){var e=arguments[t]!=null?Object(arguments[t]):{},l=Object.keys(e);typeof Object.getOwnPropertySymbols=="function"&&(l=l.concat(Object.getOwnPropertySymbols(e).filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),l.forEach(function(n){C(a,n,e[n])})}return a}function C(a,t,e){return t in a?Object.defineProperty(a,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):a[t]=e,a}var d=function(t,e){var l=u({},t,e.attrs);return s(p,u({},l,{icon:h}),null)};d.displayName="PlayCircleFilled";d.inheritAttrs=!1;const O=d,B=y({__name:"RunButton",props:{loading:{type:Boolean},disabled:{}},emits:["click","save"],setup(a,{emit:t}){return(e,l)=>(b(),g(i(P),{open:e.disabled?void 0:!1,placement:"bottom"},{content:r(()=>[s(i(m),{vertical:"",gap:"small"},{default:r(()=>[s(i(c),{style:{"font-size":"16px"}},{default:r(()=>{var n;return[o(f((n=e.disabled)==null?void 0:n.title),1)]}),_:1}),s(i(c),null,{default:r(()=>{var n;return[o(f((n=e.disabled)==null?void 0:n.message),1)]}),_:1})]),_:1})]),default:r(()=>[s(i(_),{style:{width:"100%"},loading:e.loading,icon:v(i(O)),disabled:!!e.disabled,size:"large",type:"primary",onClick:l[0]||(l[0]=n=>t("click"))},{default:r(()=>[o(" Run ")]),_:1},8,["loading","icon","disabled"])]),_:1},8,["open"]))}});export{B as _};
//# sourceMappingURL=RunButton.vue_vue_type_script_setup_true_lang.4335db68.js.map
