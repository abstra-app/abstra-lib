import{d as f,aB as d,H as i,b as t,eX as l,dC as m,eZ as h,f0 as y,e as r}from"./outputWidgets.a62a98a2.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[a]="f24e4b0e-8330-4ebc-9e07-d0e6821f56c6",o._sentryDebugIdIdentifier="sentry-dbid-f24e4b0e-8330-4ebc-9e07-d0e6821f56c6")}catch{}})();const Z=["width","height","fill","transform"],v={key:0},w=r("path",{d:"M180,64H40A12,12,0,0,0,28,76V216a12,12,0,0,0,12,12H180a12,12,0,0,0,12-12V76A12,12,0,0,0,180,64ZM168,204H52V88H168ZM228,40V180a12,12,0,0,1-24,0V52H76a12,12,0,0,1,0-24H216A12,12,0,0,1,228,40Z"},null,-1),b=[w],A={key:1},M=r("path",{d:"M184,72V216H40V72Z",opacity:"0.2"},null,-1),k=r("path",{d:"M184,64H40a8,8,0,0,0-8,8V216a8,8,0,0,0,8,8H184a8,8,0,0,0,8-8V72A8,8,0,0,0,184,64Zm-8,144H48V80H176ZM224,40V184a8,8,0,0,1-16,0V48H72a8,8,0,0,1,0-16H216A8,8,0,0,1,224,40Z"},null,-1),B=[M,k],C={key:2},I=r("path",{d:"M192,72V216a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V72a8,8,0,0,1,8-8H184A8,8,0,0,1,192,72Zm24-40H72a8,8,0,0,0,0,16H208V184a8,8,0,0,0,16,0V40A8,8,0,0,0,216,32Z"},null,-1),S=[I],D={key:3},_=r("path",{d:"M184,66H40a6,6,0,0,0-6,6V216a6,6,0,0,0,6,6H184a6,6,0,0,0,6-6V72A6,6,0,0,0,184,66Zm-6,144H46V78H178ZM222,40V184a6,6,0,0,1-12,0V46H72a6,6,0,0,1,0-12H216A6,6,0,0,1,222,40Z"},null,-1),x=[_],z={key:4},N=r("path",{d:"M184,64H40a8,8,0,0,0-8,8V216a8,8,0,0,0,8,8H184a8,8,0,0,0,8-8V72A8,8,0,0,0,184,64Zm-8,144H48V80H176ZM224,40V184a8,8,0,0,1-16,0V48H72a8,8,0,0,1,0-16H216A8,8,0,0,1,224,40Z"},null,-1),E=[N],P={key:5},$=r("path",{d:"M184,68H40a4,4,0,0,0-4,4V216a4,4,0,0,0,4,4H184a4,4,0,0,0,4-4V72A4,4,0,0,0,184,68Zm-4,144H44V76H180ZM220,40V184a4,4,0,0,1-8,0V44H72a4,4,0,0,1,0-8H216A4,4,0,0,1,220,40Z"},null,-1),j=[$],q={name:"PhCopySimple"},X=f({...q,props:{weight:{type:String},size:{type:[String,Number]},color:{type:String},mirrored:{type:Boolean}},setup(o){const a=o,s=d("weight","regular"),u=d("size","1em"),V=d("color","currentColor"),p=d("mirrored",!1),n=i(()=>{var e;return(e=a.weight)!=null?e:s}),H=i(()=>{var e;return(e=a.size)!=null?e:u}),g=i(()=>{var e;return(e=a.color)!=null?e:V}),c=i(()=>a.mirrored!==void 0?a.mirrored?"scale(-1, 1)":void 0:p?"scale(-1, 1)":void 0);return(e,F)=>(t(),l("svg",y({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 256 256",width:H.value,height:H.value,fill:g.value,transform:c.value},e.$attrs),[m(e.$slots,"default"),n.value==="bold"?(t(),l("g",v,b)):n.value==="duotone"?(t(),l("g",A,B)):n.value==="fill"?(t(),l("g",C,S)):n.value==="light"?(t(),l("g",D,x)):n.value==="regular"?(t(),l("g",z,E)):n.value==="thin"?(t(),l("g",P,j)):h("",!0)],16,Z))}});export{X as I};
//# sourceMappingURL=PhCopySimple.vue.e809681c.js.map
