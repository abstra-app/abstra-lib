import{F as b,o as y,eq as O,d as S,U as f,f as h,R as i,b8 as c}from"./registerWidgets.586d7870.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},l=new Error().stack;l&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[l]="b59e0947-2530-43ef-9bfd-9fa3b6bf7e58",e._sentryDebugIdIdentifier="sentry-dbid-b59e0947-2530-43ef-9bfd-9fa3b6bf7e58")}catch{}})();const D=()=>{const e=b(!1);return y(()=>{e.value=O()}),e};var x=globalThis&&globalThis.__rest||function(e,l){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&l.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,t=Object.getOwnPropertySymbols(e);o<t.length;o++)l.indexOf(t[o])<0&&Object.prototype.propertyIsEnumerable.call(e,t[o])&&(a[t[o]]=e[t[o]]);return a};const C={border:0,background:"transparent",padding:0,lineHeight:"inherit",display:"inline-block"},E=S({compatConfig:{MODE:3},name:"TransButton",inheritAttrs:!1,props:{noStyle:{type:Boolean,default:void 0},onClick:Function,disabled:{type:Boolean,default:void 0},autofocus:{type:Boolean,default:void 0}},setup(e,l){let{slots:a,emit:t,attrs:o,expose:p}=l;const r=b(),g=n=>{const{keyCode:s}=n;s===c.ENTER&&n.preventDefault()},v=n=>{const{keyCode:s}=n;s===c.ENTER&&t("click",n)},m=n=>{t("click",n)},u=()=>{r.value&&r.value.focus()},w=()=>{r.value&&r.value.blur()};return y(()=>{e.autofocus&&u()}),p({focus:u,blur:w}),()=>{var n;const{noStyle:s,disabled:_}=e,k=x(e,["noStyle","disabled"]);let d={};return s||(d=f({},C)),_&&(d.pointerEvents="none"),h("div",i(i(i({role:"button",tabindex:0,ref:r},k),o),{},{onClick:m,onKeydown:g,onKeyup:v,style:f(f({},d),o.style||{})}),[(n=a.default)===null||n===void 0?void 0:n.call(a)])}}}),B=E;export{B as T,D as u};
//# sourceMappingURL=transButton.53b2ba2d.js.map
