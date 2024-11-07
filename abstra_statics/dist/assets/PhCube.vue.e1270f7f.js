import{d as m,B as n,f as i,o as a,X as t,Z,R as f,e8 as y,a as r}from"./vue-router.7caacf0a.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},l=new Error().stack;l&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[l]="528c33a0-6d48-48cd-bd6c-fbc6945934fb",o._sentryDebugIdIdentifier="sentry-dbid-528c33a0-6d48-48cd-bd6c-fbc6945934fb")}catch{}})();const V=["width","height","fill","transform"],b={key:0},M=r("path",{d:"M225.6,62.64l-88-48.17a19.91,19.91,0,0,0-19.2,0l-88,48.17A20,20,0,0,0,20,80.19v95.62a20,20,0,0,0,10.4,17.55l88,48.17a19.89,19.89,0,0,0,19.2,0l88-48.17A20,20,0,0,0,236,175.81V80.19A20,20,0,0,0,225.6,62.64ZM128,36.57,200,76,128,115.4,56,76ZM44,96.79l72,39.4v76.67L44,173.44Zm96,116.07V136.19l72-39.4v76.65Z"},null,-1),w=[M],A={key:1},L=r("path",{d:"M128,129.09V232a8,8,0,0,1-3.84-1l-88-48.16a8,8,0,0,1-4.16-7V80.2a8,8,0,0,1,.7-3.27Z",opacity:"0.2"},null,-1),k=r("path",{d:"M223.68,66.15,135.68,18h0a15.88,15.88,0,0,0-15.36,0l-88,48.17a16,16,0,0,0-8.32,14v95.64a16,16,0,0,0,8.32,14l88,48.17a15.88,15.88,0,0,0,15.36,0l88-48.17a16,16,0,0,0,8.32-14V80.18A16,16,0,0,0,223.68,66.15ZM128,32h0l80.34,44L128,120,47.66,76ZM40,90l80,43.78v85.79L40,175.82Zm96,129.57V133.82L216,90v85.78Z"},null,-1),B=[L,k],C={key:2},D=r("path",{d:"M223.68,66.15,135.68,18a15.88,15.88,0,0,0-15.36,0l-88,48.17a16,16,0,0,0-8.32,14v95.64a16,16,0,0,0,8.32,14l88,48.17a15.88,15.88,0,0,0,15.36,0l88-48.17a16,16,0,0,0,8.32-14V80.18A16,16,0,0,0,223.68,66.15ZM128,120,47.65,76,128,32l80.35,44Zm8,99.64V133.83l80-43.78v85.76Z"},null,-1),I=[D],S={key:3},_=r("path",{d:"M222.72,67.9l-88-48.17a13.9,13.9,0,0,0-13.44,0l-88,48.18A14,14,0,0,0,26,80.18v95.64a14,14,0,0,0,7.28,12.27l88,48.18a13.92,13.92,0,0,0,13.44,0l88-48.18A14,14,0,0,0,230,175.82V80.18A14,14,0,0,0,222.72,67.9ZM127,30.25a2,2,0,0,1,1.92,0L212.51,76,128,122.24,43.49,76ZM39,177.57a2,2,0,0,1-1-1.75V86.66l84,46V223Zm177.92,0L134,223V132.64l84-46v89.16A2,2,0,0,1,217,177.57Z"},null,-1),x=[_],z={key:4},N=r("path",{d:"M223.68,66.15,135.68,18h0a15.88,15.88,0,0,0-15.36,0l-88,48.17a16,16,0,0,0-8.32,14v95.64a16,16,0,0,0,8.32,14l88,48.17a15.88,15.88,0,0,0,15.36,0l88-48.17a16,16,0,0,0,8.32-14V80.18A16,16,0,0,0,223.68,66.15ZM128,32h0l80.34,44L128,120,47.66,76ZM40,90l80,43.78v85.79L40,175.82Zm96,129.57V133.82L216,90v85.78Z"},null,-1),E=[N],P={key:5},$=r("path",{d:"M221.76,69.66l-88-48.18a12,12,0,0,0-11.52,0l-88,48.18A12,12,0,0,0,28,80.18v95.64a12,12,0,0,0,6.24,10.52l88,48.18a11.95,11.95,0,0,0,11.52,0l88-48.18A12,12,0,0,0,228,175.82V80.18A12,12,0,0,0,221.76,69.66ZM126.08,28.5a3.94,3.94,0,0,1,3.84,0L216.67,76,128,124.52,39.33,76Zm-88,150.83A4,4,0,0,1,36,175.82V83.29l88,48.16v94.91Zm179.84,0-85.92,47V131.45l88-48.16v92.53A4,4,0,0,1,217.92,179.32Z"},null,-1),j=[$],q={name:"PhCube"},R=m({...q,props:{weight:{type:String},size:{type:[String,Number]},color:{type:String},mirrored:{type:Boolean}},setup(o){const l=o,s=n("weight","regular"),v=n("size","1em"),c=n("color","currentColor"),g=n("mirrored",!1),d=i(()=>{var e;return(e=l.weight)!=null?e:s}),u=i(()=>{var e;return(e=l.size)!=null?e:v}),h=i(()=>{var e;return(e=l.color)!=null?e:c}),p=i(()=>l.mirrored!==void 0?l.mirrored?"scale(-1, 1)":void 0:g?"scale(-1, 1)":void 0);return(e,F)=>(a(),t("svg",y({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 256 256",width:u.value,height:u.value,fill:h.value,transform:p.value},e.$attrs),[Z(e.$slots,"default"),d.value==="bold"?(a(),t("g",b,w)):d.value==="duotone"?(a(),t("g",A,B)):d.value==="fill"?(a(),t("g",C,I)):d.value==="light"?(a(),t("g",S,x)):d.value==="regular"?(a(),t("g",z,E)):d.value==="thin"?(a(),t("g",P,j)):f("",!0)],16,V))}});export{R as H};
//# sourceMappingURL=PhCube.vue.e1270f7f.js.map
