var y=Object.defineProperty;var M=(a,e,l)=>e in a?y(a,e,{enumerable:!0,configurable:!0,writable:!0,value:l}):a[e]=l;var u=(a,e,l)=>(M(a,typeof e!="symbol"?e+"":e,l),l);import{d as L,D as d,f as c,o as r,Y as t,$ as v,S as w,e8 as Z,a as n}from"./index.4b0f7fd1.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[e]="2e18aee8-e8e2-438a-afda-83710db3cc8d",a._sentryDebugIdIdentifier="sentry-dbid-2e18aee8-e8e2-438a-afda-83710db3cc8d")}catch{}})();const b=["width","height","fill","transform"],V={key:0},H=n("path",{d:"M230.14,70.54,185.46,25.85a20,20,0,0,0-28.29,0L33.86,149.17A19.85,19.85,0,0,0,28,163.31V208a20,20,0,0,0,20,20H92.69a19.86,19.86,0,0,0,14.14-5.86L230.14,98.82a20,20,0,0,0,0-28.28ZM91,204H52V165l84-84,39,39ZM192,103,153,64l18.34-18.34,39,39Z"},null,-1),k=[H],A={key:1},C=n("path",{d:"M221.66,90.34,192,120,136,64l29.66-29.66a8,8,0,0,1,11.31,0L221.66,79A8,8,0,0,1,221.66,90.34Z",opacity:"0.2"},null,-1),S=n("path",{d:"M227.31,73.37,182.63,28.68a16,16,0,0,0-22.63,0L36.69,152A15.86,15.86,0,0,0,32,163.31V208a16,16,0,0,0,16,16H92.69A15.86,15.86,0,0,0,104,219.31L227.31,96a16,16,0,0,0,0-22.63ZM92.69,208H48V163.31l88-88L180.69,120ZM192,108.68,147.31,64l24-24L216,84.68Z"},null,-1),B=[C,S],D={key:2},z=n("path",{d:"M227.31,73.37,182.63,28.68a16,16,0,0,0-22.63,0L36.69,152A15.86,15.86,0,0,0,32,163.31V208a16,16,0,0,0,16,16H92.69A15.86,15.86,0,0,0,104,219.31L227.31,96a16,16,0,0,0,0-22.63ZM192,108.68,147.31,64l24-24L216,84.68Z"},null,-1),I=[z],P={key:3},_=n("path",{d:"M225.9,74.78,181.21,30.09a14,14,0,0,0-19.8,0L38.1,153.41a13.94,13.94,0,0,0-4.1,9.9V208a14,14,0,0,0,14,14H92.69a13.94,13.94,0,0,0,9.9-4.1L225.9,94.58a14,14,0,0,0,0-19.8ZM94.1,209.41a2,2,0,0,1-1.41.59H48a2,2,0,0,1-2-2V163.31a2,2,0,0,1,.59-1.41L136,72.48,183.51,120ZM217.41,86.1,192,111.51,144.49,64,169.9,38.58a2,2,0,0,1,2.83,0l44.68,44.69a2,2,0,0,1,0,2.83Z"},null,-1),x=[_],N={key:4},$=n("path",{d:"M227.31,73.37,182.63,28.68a16,16,0,0,0-22.63,0L36.69,152A15.86,15.86,0,0,0,32,163.31V208a16,16,0,0,0,16,16H92.69A15.86,15.86,0,0,0,104,219.31L227.31,96a16,16,0,0,0,0-22.63ZM92.69,208H48V163.31l88-88L180.69,120ZM192,108.68,147.31,64l24-24L216,84.68Z"},null,-1),E=[$],j={key:5},T=n("path",{d:"M224.49,76.2,179.8,31.51a12,12,0,0,0-17,0L133.17,61.17h0L39.52,154.83A11.9,11.9,0,0,0,36,163.31V208a12,12,0,0,0,12,12H92.69a12,12,0,0,0,8.48-3.51L224.48,93.17a12,12,0,0,0,0-17Zm-129,134.63A4,4,0,0,1,92.69,212H48a4,4,0,0,1-4-4V163.31a4,4,0,0,1,1.17-2.83L136,69.65,186.34,120ZM218.83,87.51,192,114.34,141.66,64l26.82-26.83a4,4,0,0,1,5.66,0l44.69,44.68a4,4,0,0,1,0,5.66Z"},null,-1),q=[T],G={name:"PhPencilSimple"},J=L({...G,props:{weight:{type:String},size:{type:[String,Number]},color:{type:String},mirrored:{type:Boolean}},setup(a){const e=a,l=d("weight","regular"),i=d("size","1em"),p=d("color","currentColor"),h=d("mirrored",!1),s=c(()=>{var o;return(o=e.weight)!=null?o:l}),g=c(()=>{var o;return(o=e.size)!=null?o:i}),f=c(()=>{var o;return(o=e.color)!=null?o:p}),m=c(()=>e.mirrored!==void 0?e.mirrored?"scale(-1, 1)":void 0:h?"scale(-1, 1)":void 0);return(o,W)=>(r(),t("svg",Z({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 256 256",width:g.value,height:g.value,fill:f.value,transform:m.value},o.$attrs),[v(o.$slots,"default"),s.value==="bold"?(r(),t("g",V,k)):s.value==="duotone"?(r(),t("g",A,B)):s.value==="fill"?(r(),t("g",D,I)):s.value==="light"?(r(),t("g",P,x)):s.value==="regular"?(r(),t("g",N,E)):s.value==="thin"?(r(),t("g",j,q)):w("",!0)],16,b))}});class K{constructor(){u(this,"colors",["cyan","blue","lime","gold","green","purple","processing","success","error","warning","magenta","red","volcano","orange","geekblue"]);u(this,"colorMap",new Map)}getColor(e){const l=this.colorMap.get(e);if(l)return l;const i=this.colors[this.colorMap.size%this.colors.length];return this.colorMap.set(e,i),i}}export{J as G,K as T};
//# sourceMappingURL=tagColorProvider.352d3ee4.js.map
