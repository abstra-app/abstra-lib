import{b as d,eg as p,d as b,o as y,c as g,w as r,u as i,d9 as c,aG as o,ea as f,dh as m,p as v,bT as _,cO as P}from"./index.2fc74dd1.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[t]="4ff2b6c4-c3da-4829-b199-bfdbfdc3281d",a._sentryDebugIdIdentifier="sentry-dbid-4ff2b6c4-c3da-4829-b199-bfdbfdc3281d")}catch{}})();var h={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm144.1 454.9L437.7 677.8a8.02 8.02 0 01-12.7-6.5V353.7a8 8 0 0112.7-6.5L656.1 506a7.9 7.9 0 010 12.9z"}}]},name:"play-circle",theme:"filled"};const w=h;function u(a){for(var t=1;t<arguments.length;t++){var e=arguments[t]!=null?Object(arguments[t]):{},l=Object.keys(e);typeof Object.getOwnPropertySymbols=="function"&&(l=l.concat(Object.getOwnPropertySymbols(e).filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),l.forEach(function(n){C(a,n,e[n])})}return a}function C(a,t,e){return t in a?Object.defineProperty(a,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):a[t]=e,a}var s=function(t,e){var l=u({},t,e.attrs);return d(p,u({},l,{icon:w}),null)};s.displayName="PlayCircleFilled";s.inheritAttrs=!1;const O=s,B=b({__name:"RunButton",props:{loading:{type:Boolean},disabled:{}},emits:["click","save"],setup(a,{emit:t}){return(e,l)=>(y(),g(i(P),{open:e.disabled?void 0:!1,placement:"bottom"},{content:r(()=>[d(i(m),{vertical:"",gap:"small"},{default:r(()=>[d(i(c),{style:{"font-size":"16px"}},{default:r(()=>{var n;return[o(f((n=e.disabled)==null?void 0:n.title),1)]}),_:1}),d(i(c),null,{default:r(()=>{var n;return[o(f((n=e.disabled)==null?void 0:n.message),1)]}),_:1})]),_:1})]),default:r(()=>[d(i(_),{style:{width:"100%"},loading:e.loading,icon:v(i(O)),disabled:!!e.disabled,size:"large",type:"primary",onClick:l[0]||(l[0]=n=>t("click"))},{default:r(()=>[o(" Run ")]),_:1},8,["loading","icon","disabled"])]),_:1},8,["open"]))}});export{B as _};
//# sourceMappingURL=RunButton.vue_vue_type_script_setup_true_lang.7932b592.js.map
