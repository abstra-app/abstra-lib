import{f as o,eG as u,d as p,b,c as y,w as r,u as i,aq as d,bO as c,l as g,cy as m}from"./outputWidgets.6ccbc4ef.js";import{A as v}from"./Text.5a73e528.js";import{A as _}from"./index.45b7cc0d.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="f11dc270-22f5-4cfd-8ff5-6a59845cdaab",t._sentryDebugIdIdentifier="sentry-dbid-f11dc270-22f5-4cfd-8ff5-6a59845cdaab")}catch{}})();var P={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm144.1 454.9L437.7 677.8a8.02 8.02 0 01-12.7-6.5V353.7a8 8 0 0112.7-6.5L656.1 506a7.9 7.9 0 010 12.9z"}}]},name:"play-circle",theme:"filled"};const w=P;function f(t){for(var e=1;e<arguments.length;e++){var a=arguments[e]!=null?Object(arguments[e]):{},n=Object.keys(a);typeof Object.getOwnPropertySymbols=="function"&&(n=n.concat(Object.getOwnPropertySymbols(a).filter(function(l){return Object.getOwnPropertyDescriptor(a,l).enumerable}))),n.forEach(function(l){C(t,l,a[l])})}return t}function C(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var s=function(e,a){var n=f({},e,a.attrs);return o(u,f({},n,{icon:w}),null)};s.displayName="PlayCircleFilled";s.inheritAttrs=!1;const h=s,F=p({__name:"RunButton",props:{loading:{type:Boolean},disabled:{type:Boolean}},emits:["click","save"],setup(t,{emit:e}){return(a,n)=>(b(),y(i(m),{visible:a.disabled?void 0:!1},{content:r(()=>[o(i(_),{vertical:"",gap:"small"},{default:r(()=>[o(i(v),null,{default:r(()=>[d("You have unsaved changes")]),_:1}),o(i(c),{onClick:n[0]||(n[0]=l=>e("save"))},{default:r(()=>[d("Save")]),_:1})]),_:1})]),default:r(()=>[o(i(c),{style:{width:"100%"},loading:a.loading,icon:g(i(h)),disabled:a.disabled,size:"large",type:"primary",onClick:n[1]||(n[1]=l=>e("click"))},{default:r(()=>[d(" Run ")]),_:1},8,["loading","icon","disabled"])]),_:1},8,["visible"]))}});export{F as _};
//# sourceMappingURL=RunButton.vue_vue_type_script_setup_true_lang.30b60003.js.map
