import{b as d,eh as p,d as y,o as b,c as g,w as r,u as i,d5 as c,aF as o,ec as f,dd as m,p as v,bP as P,cK as _}from"./vue-router.9f9f01b3.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[a]="daf94c5a-5cde-4dca-ac5a-49725c225aaa",t._sentryDebugIdIdentifier="sentry-dbid-daf94c5a-5cde-4dca-ac5a-49725c225aaa")}catch{}})();var h={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm144.1 454.9L437.7 677.8a8.02 8.02 0 01-12.7-6.5V353.7a8 8 0 0112.7-6.5L656.1 506a7.9 7.9 0 010 12.9z"}}]},name:"play-circle",theme:"filled"};const w=h;function u(t){for(var a=1;a<arguments.length;a++){var e=arguments[a]!=null?Object(arguments[a]):{},l=Object.keys(e);typeof Object.getOwnPropertySymbols=="function"&&(l=l.concat(Object.getOwnPropertySymbols(e).filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),l.forEach(function(n){C(t,n,e[n])})}return t}function C(t,a,e){return a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}var s=function(a,e){var l=u({},a,e.attrs);return d(p,u({},l,{icon:w}),null)};s.displayName="PlayCircleFilled";s.inheritAttrs=!1;const O=s,B=y({__name:"RunButton",props:{loading:{type:Boolean},disabled:{}},emits:["click","save"],setup(t,{emit:a}){return(e,l)=>(b(),g(i(_),{open:e.disabled?void 0:!1,placement:"bottom"},{content:r(()=>[d(i(m),{vertical:"",gap:"small"},{default:r(()=>[d(i(c),{style:{"font-size":"16px"}},{default:r(()=>{var n;return[o(f((n=e.disabled)==null?void 0:n.title),1)]}),_:1}),d(i(c),null,{default:r(()=>{var n;return[o(f((n=e.disabled)==null?void 0:n.message),1)]}),_:1})]),_:1})]),default:r(()=>[d(i(P),{style:{width:"100%"},loading:e.loading,icon:v(i(O)),disabled:!!e.disabled,size:"large",type:"primary",onClick:l[0]||(l[0]=n=>a("click"))},{default:r(()=>[o(" Run ")]),_:1},8,["loading","icon","disabled"])]),_:1},8,["open"]))}});export{B as _};
//# sourceMappingURL=RunButton.vue_vue_type_script_setup_true_lang.c68f6e02.js.map
