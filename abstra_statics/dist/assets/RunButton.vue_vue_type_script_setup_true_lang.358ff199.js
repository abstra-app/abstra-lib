import{b as d,e6 as b,d as p,o as y,c as g,w as r,u as i,d2 as c,az as o,eb as f,da as m,t as v,bM as _,cH as P}from"./index.8285b142.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[t]="7050ca8f-8b9d-436c-ab4e-df73bfbfe8dc",a._sentryDebugIdIdentifier="sentry-dbid-7050ca8f-8b9d-436c-ab4e-df73bfbfe8dc")}catch{}})();var w={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm144.1 454.9L437.7 677.8a8.02 8.02 0 01-12.7-6.5V353.7a8 8 0 0112.7-6.5L656.1 506a7.9 7.9 0 010 12.9z"}}]},name:"play-circle",theme:"filled"};const h=w;function u(a){for(var t=1;t<arguments.length;t++){var e=arguments[t]!=null?Object(arguments[t]):{},l=Object.keys(e);typeof Object.getOwnPropertySymbols=="function"&&(l=l.concat(Object.getOwnPropertySymbols(e).filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),l.forEach(function(n){C(a,n,e[n])})}return a}function C(a,t,e){return t in a?Object.defineProperty(a,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):a[t]=e,a}var s=function(t,e){var l=u({},t,e.attrs);return d(b,u({},l,{icon:h}),null)};s.displayName="PlayCircleFilled";s.inheritAttrs=!1;const O=s,B=p({__name:"RunButton",props:{loading:{type:Boolean},disabled:{}},emits:["click","save"],setup(a,{emit:t}){return(e,l)=>(y(),g(i(P),{open:e.disabled?void 0:!1,placement:"bottom"},{content:r(()=>[d(i(m),{vertical:"",gap:"small"},{default:r(()=>[d(i(c),{style:{"font-size":"16px"}},{default:r(()=>{var n;return[o(f((n=e.disabled)==null?void 0:n.title),1)]}),_:1}),d(i(c),null,{default:r(()=>{var n;return[o(f((n=e.disabled)==null?void 0:n.message),1)]}),_:1})]),_:1})]),default:r(()=>[d(i(_),{style:{width:"100%"},loading:e.loading,icon:v(i(O)),disabled:!!e.disabled,size:"large",type:"primary",onClick:l[0]||(l[0]=n=>t("click"))},{default:r(()=>[o(" Run ")]),_:1},8,["loading","icon","disabled"])]),_:1},8,["open"]))}});export{B as _};
//# sourceMappingURL=RunButton.vue_vue_type_script_setup_true_lang.358ff199.js.map
