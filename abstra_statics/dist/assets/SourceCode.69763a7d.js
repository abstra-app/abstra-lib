var be=Object.defineProperty;var Se=(a,e,o)=>e in a?be(a,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):a[e]=o;var E=(a,e,o)=>(Se(a,typeof e!="symbol"?e+"":e,o),o);import{d as N,B as $,f as M,o as n,eu as r,dB as K,ew as b,ez as ce,a as l,S as G,D as me,e as S,c as x,w as h,as as k,eA as B,u,aI as z,eB as Ee,g as le,J as ye,$ as _e,a1 as Ce,r as $e,b as _,ey as j,ev as Le,aE as we,eD as Ve,f4 as Ze,f5 as xe,c$ as Ie,eI as Ne,eJ as Oe,eH as Te,by as Me,ck as Ae,Q as ae,cW as pe,bH as oe}from"./vue-router.7730510e.js";import{u as re}from"./uuid.250fbd66.js";import{G as he}from"./PhCaretRight.vue.2245bb9c.js";import{u as Pe}from"./editor.8938f4fe.js";import{H as De}from"./PhCheckCircle.vue.a4e23e50.js";import{I as ze}from"./PhCopySimple.vue.25e8b8b0.js";import{L as Be}from"./LoadingOutlined.7e5bbeed.js";import{W as Fe}from"./workspaces.2cd14d78.js";import{H as We,J as Re}from"./jobs.4c36f53d.js";import{S as je}from"./scripts.3ecdbabf.js";import{d as Je,v as Ke,e as Ge}from"./validations.460ceab9.js";import{a as fe}from"./asyncComputed.c3c2c9b7.js";import{G as qe}from"./PhPencil.vue.313dd37b.js";import{l as se,R as He,e as J,M as R}from"./toggleHighContrast.64bf0a10.js";import{A as Ue}from"./index.119c6cb0.js";import{C as Ye}from"./Card.f1c33750.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[e]="3505d4a7-50c3-4b6c-be1a-6c7aca64149b",a._sentryDebugIdIdentifier="sentry-dbid-3505d4a7-50c3-4b6c-be1a-6c7aca64149b")}catch{}})();const Qe=["width","height","fill","transform"],Xe={key:0},et=l("path",{d:"M237.24,213.21C216.12,203,204,180.64,204,152V134.73a19.94,19.94,0,0,0-12.62-18.59l-24.86-9.81a4,4,0,0,1-2.26-5.14l21.33-53A32,32,0,0,0,167.17,6,32.13,32.13,0,0,0,126.25,24.2l-.07.18-21,53.09a3.94,3.94,0,0,1-2.14,2.2,3.89,3.89,0,0,1-3,.06L74.6,69.43A19.89,19.89,0,0,0,52.87,74C31.06,96.43,20,122.68,20,152a115.46,115.46,0,0,0,32.29,80.3A12,12,0,0,0,61,236H232a12,12,0,0,0,5.24-22.79ZM68.19,92.73,91.06,102A28,28,0,0,0,127.5,86.31l20.95-53a8.32,8.32,0,0,1,10.33-4.81,8,8,0,0,1,4.61,10.57,1.17,1.17,0,0,0,0,.11L142,92.29a28.05,28.05,0,0,0,15.68,36.33L180,137.45V152c0,1,0,2.07.05,3.1l-122.44-49A101.91,101.91,0,0,1,68.19,92.73ZM116.74,212a83.73,83.73,0,0,1-22.09-39,12,12,0,0,0-23.25,6,110.27,110.27,0,0,0,14.49,33H66.25A91.53,91.53,0,0,1,44,152a84,84,0,0,1,3.41-24.11l136.67,54.66A86.58,86.58,0,0,0,198.66,212Z"},null,-1),tt=[et],ot={key:1},at=l("path",{d:"M192.8,165.12,43.93,105.57A110.88,110.88,0,0,1,61.47,82.38a8,8,0,0,1,8.67-1.81L95.52,90.85a16,16,0,0,0,20.82-9l21-53.1c4.15-10,15.47-15.33,25.63-11.53a20,20,0,0,1,11.51,26.39L153.13,96.71a16,16,0,0,0,8.93,20.75L187,127.3a8,8,0,0,1,5,7.43V152A104.58,104.58,0,0,0,192.8,165.12Z",opacity:"0.2"},null,-1),st=l("path",{d:"M235.5,216.81c-22.56-11-35.5-34.58-35.5-64.8V134.73a15.94,15.94,0,0,0-10.09-14.87L165,110a8,8,0,0,1-4.48-10.34l21.32-53a28,28,0,0,0-16.1-37,28.14,28.14,0,0,0-35.82,16,.61.61,0,0,0,0,.12L108.9,79a8,8,0,0,1-10.37,4.49L73.11,73.14A15.89,15.89,0,0,0,55.74,76.8C34.68,98.45,24,123.75,24,152a111.45,111.45,0,0,0,31.18,77.53A8,8,0,0,0,61,232H232a8,8,0,0,0,3.5-15.19ZM67.14,88l25.41,10.3a24,24,0,0,0,31.23-13.45l21-53c2.56-6.11,9.47-9.27,15.43-7a12,12,0,0,1,6.88,15.92L145.69,93.76a24,24,0,0,0,13.43,31.14L184,134.73V152c0,.33,0,.66,0,1L55.77,101.71A108.84,108.84,0,0,1,67.14,88Zm48,128a87.53,87.53,0,0,1-24.34-42,8,8,0,0,0-15.49,4,105.16,105.16,0,0,0,18.36,38H64.44A95.54,95.54,0,0,1,40,152a85.9,85.9,0,0,1,7.73-36.29l137.8,55.12c3,18,10.56,33.48,21.89,45.16Z"},null,-1),nt=[at,st],it={key:2},lt=l("path",{d:"M235.29,216.7C212.86,205.69,200,182.12,200,152V134.69a15.94,15.94,0,0,0-10.09-14.87l-28.65-11.46A8,8,0,0,1,156.79,98l22.32-56.67C184,28.79,178,14.21,165.34,9.51a24,24,0,0,0-30.7,13.71L112.25,80.08a8,8,0,0,1-10.41,4.5L73.11,73.08a15.91,15.91,0,0,0-17.38,3.66C34.68,98.4,24,123.71,24,152a111.53,111.53,0,0,0,31.15,77.53A8.06,8.06,0,0,0,61,232H232a8,8,0,0,0,8-7.51A8.21,8.21,0,0,0,235.29,216.7ZM115.11,216a87.52,87.52,0,0,1-24.26-41.71,8.21,8.21,0,0,0-9.25-6.18A8,8,0,0,0,75.28,178a105.33,105.33,0,0,0,18.36,38H64.44A95.62,95.62,0,0,1,40,152a85.92,85.92,0,0,1,7.73-36.3l137.8,55.13c3,18.06,10.55,33.5,21.89,45.19Z"},null,-1),rt=[lt],ct={key:3},ut=l("path",{d:"M234.62,218.6C211.35,207.29,198,183,198,152V134.7a14,14,0,0,0-8.82-13l-24.89-9.83a10,10,0,0,1-5.59-13L180,45.9a26,26,0,0,0-15-34.33c-12.95-4.83-27.88,1.84-33.31,15l-21,53.11a10,10,0,0,1-13,5.61L72.37,75a13.9,13.9,0,0,0-15.2,3.19C36.49,99.42,26,124.26,26,152a109.53,109.53,0,0,0,30.62,76.16A6,6,0,0,0,61,230H232a6,6,0,0,0,2.62-11.4ZM65.77,86.52a2,2,0,0,1,2.12-.43l25.4,10.29a22,22,0,0,0,28.63-12.32l21-53c3-7.13,11-10.81,18-8.21a14,14,0,0,1,8,18.54l-21.36,53.1A22.05,22.05,0,0,0,159.86,123l24.88,9.83A2,2,0,0,1,186,134.7V152c0,1.34,0,2.65.08,4L52.74,102.61A110.07,110.07,0,0,1,65.77,86.52ZM114.33,218a89.6,89.6,0,0,1-25.5-43.5,6,6,0,1,0-11.62,3A102.87,102.87,0,0,0,97.81,218H63.56A97.56,97.56,0,0,1,38,152a87.42,87.42,0,0,1,8.71-38.86L187.35,169.4c3.15,19.92,11.77,36.66,25,48.6Z"},null,-1),dt=[ut],pt={key:4},ht=l("path",{d:"M235.5,216.81c-22.56-11-35.5-34.58-35.5-64.8V134.73a15.94,15.94,0,0,0-10.09-14.87L165,110a8,8,0,0,1-4.48-10.34l21.32-53a28,28,0,0,0-16.1-37,28.14,28.14,0,0,0-35.82,16,.61.61,0,0,0,0,.12L108.9,79a8,8,0,0,1-10.37,4.49L73.11,73.14A15.89,15.89,0,0,0,55.74,76.8C34.68,98.45,24,123.75,24,152a111.45,111.45,0,0,0,31.18,77.53A8,8,0,0,0,61,232H232a8,8,0,0,0,3.5-15.19ZM67.14,88l25.41,10.3a24,24,0,0,0,31.23-13.45l21-53c2.56-6.11,9.47-9.27,15.43-7a12,12,0,0,1,6.88,15.92L145.69,93.76a24,24,0,0,0,13.43,31.14L184,134.73V152c0,.33,0,.66,0,1L55.77,101.71A108.84,108.84,0,0,1,67.14,88Zm48,128a87.53,87.53,0,0,1-24.34-42,8,8,0,0,0-15.49,4,105.16,105.16,0,0,0,18.36,38H64.44A95.54,95.54,0,0,1,40,152a85.9,85.9,0,0,1,7.73-36.29l137.8,55.12c3,18,10.56,33.48,21.89,45.16Z"},null,-1),ft=[ht],gt={key:5},vt=l("path",{d:"M233.75,220.4C209.76,208.75,196,183.82,196,152V134.72a12,12,0,0,0-7.56-11.15l-24.89-9.83a12,12,0,0,1-6.71-15.55l21.33-53a23.88,23.88,0,0,0-31.93-31A24.72,24.72,0,0,0,133.62,27.3l-21,53.1A12,12,0,0,1,97,87.13L71.63,76.84a12,12,0,0,0-13,2.73C38.3,100.45,28,124.82,28,152a107.5,107.5,0,0,0,30.07,74.77A4,4,0,0,0,61,228H232a4,4,0,0,0,1.75-7.6ZM64.34,85.15a3.94,3.94,0,0,1,4.3-.89L94,94.55a20,20,0,0,0,26-11.2l21-53C144.39,22.19,153.61,18,161.58,21a16,16,0,0,1,9.19,21.16L149.41,95.22a20,20,0,0,0,11.18,26l24.9,9.83a4,4,0,0,1,2.51,3.72V152c0,2.36.08,4.69.22,7l-138.5-55.4A110.84,110.84,0,0,1,64.34,85.15ZM113.56,220A91.35,91.35,0,0,1,86.9,175a4,4,0,0,0-7.75,2,100.21,100.21,0,0,0,23.09,43H62.68A99.5,99.5,0,0,1,36,152a89.37,89.37,0,0,1,9.73-41.4L189.13,168c3.22,22,13.23,40.09,28.8,52Z"},null,-1),mt=[vt],yt={name:"PhBroom"},_t=N({...yt,props:{weight:{type:String},size:{type:[String,Number]},color:{type:String},mirrored:{type:Boolean}},setup(a){const e=a,o=$("weight","regular"),t=$("size","1em"),d=$("color","currentColor"),f=$("mirrored",!1),c=M(()=>{var s;return(s=e.weight)!=null?s:o}),C=M(()=>{var s;return(s=e.size)!=null?s:t}),y=M(()=>{var s;return(s=e.color)!=null?s:d}),w=M(()=>e.mirrored!==void 0?e.mirrored?"scale(-1, 1)":void 0:f?"scale(-1, 1)":void 0);return(s,A)=>(n(),r("svg",ce({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 256 256",width:C.value,height:C.value,fill:y.value,transform:w.value},s.$attrs),[K(s.$slots,"default"),c.value==="bold"?(n(),r("g",Xe,tt)):c.value==="duotone"?(n(),r("g",ot,nt)):c.value==="fill"?(n(),r("g",it,rt)):c.value==="light"?(n(),r("g",ct,dt)):c.value==="regular"?(n(),r("g",pt,ft)):c.value==="thin"?(n(),r("g",gt,mt)):b("",!0)],16,Qe))}}),Ct=["width","height","fill","transform"],wt={key:0},Mt=l("path",{d:"M216,68H133.39l-26-29.29a20,20,0,0,0-15-6.71H40A20,20,0,0,0,20,52V200.62A19.41,19.41,0,0,0,39.38,220H216.89A19.13,19.13,0,0,0,236,200.89V88A20,20,0,0,0,216,68ZM44,56H90.61l10.67,12H44ZM212,196H44V92H212Z"},null,-1),At=[Mt],Ht={key:1},kt=l("path",{d:"M128,80H32V56a8,8,0,0,1,8-8H92.69a8,8,0,0,1,5.65,2.34Z",opacity:"0.2"},null,-1),bt=l("path",{d:"M216,72H131.31L104,44.69A15.86,15.86,0,0,0,92.69,40H40A16,16,0,0,0,24,56V200.62A15.4,15.4,0,0,0,39.38,216H216.89A15.13,15.13,0,0,0,232,200.89V88A16,16,0,0,0,216,72ZM92.69,56l16,16H40V56ZM216,200H40V88H216Z"},null,-1),St=[kt,bt],Et={key:2},$t=l("path",{d:"M216,72H131.31L104,44.69A15.88,15.88,0,0,0,92.69,40H40A16,16,0,0,0,24,56V200.62A15.41,15.41,0,0,0,39.39,216h177.5A15.13,15.13,0,0,0,232,200.89V88A16,16,0,0,0,216,72ZM40,56H92.69l16,16H40Z"},null,-1),Lt=[$t],Vt={key:3},Zt=l("path",{d:"M216,74H130.49l-27.9-27.9a13.94,13.94,0,0,0-9.9-4.1H40A14,14,0,0,0,26,56V200.62A13.39,13.39,0,0,0,39.38,214H216.89A13.12,13.12,0,0,0,230,200.89V88A14,14,0,0,0,216,74ZM40,54H92.69a2,2,0,0,1,1.41.59L113.51,74H38V56A2,2,0,0,1,40,54ZM218,200.89a1.11,1.11,0,0,1-1.11,1.11H39.38A1.4,1.4,0,0,1,38,200.62V86H216a2,2,0,0,1,2,2Z"},null,-1),xt=[Zt],It={key:4},Nt=l("path",{d:"M216,72H131.31L104,44.69A15.86,15.86,0,0,0,92.69,40H40A16,16,0,0,0,24,56V200.62A15.4,15.4,0,0,0,39.38,216H216.89A15.13,15.13,0,0,0,232,200.89V88A16,16,0,0,0,216,72ZM40,56H92.69l16,16H40ZM216,200H40V88H216Z"},null,-1),Ot=[Nt],Tt={key:5},Pt=l("path",{d:"M216,76H129.66L101.17,47.52A11.9,11.9,0,0,0,92.69,44H40A12,12,0,0,0,28,56V200.62A11.4,11.4,0,0,0,39.38,212H216.89A11.12,11.12,0,0,0,228,200.89V88A12,12,0,0,0,216,76ZM36,56a4,4,0,0,1,4-4H92.69a4,4,0,0,1,2.82,1.17L118.34,76H36ZM220,200.89a3.12,3.12,0,0,1-3.11,3.11H39.38A3.39,3.39,0,0,1,36,200.62V84H216a4,4,0,0,1,4,4Z"},null,-1),Dt=[Pt],zt={name:"PhFolder"},Bt=N({...zt,props:{weight:{type:String},size:{type:[String,Number]},color:{type:String},mirrored:{type:Boolean}},setup(a){const e=a,o=$("weight","regular"),t=$("size","1em"),d=$("color","currentColor"),f=$("mirrored",!1),c=M(()=>{var s;return(s=e.weight)!=null?s:o}),C=M(()=>{var s;return(s=e.size)!=null?s:t}),y=M(()=>{var s;return(s=e.color)!=null?s:d}),w=M(()=>e.mirrored!==void 0?e.mirrored?"scale(-1, 1)":void 0:f?"scale(-1, 1)":void 0);return(s,A)=>(n(),r("svg",ce({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 256 256",width:C.value,height:C.value,fill:y.value,transform:w.value},s.$attrs),[K(s.$slots,"default"),c.value==="bold"?(n(),r("g",wt,At)):c.value==="duotone"?(n(),r("g",Ht,St)):c.value==="fill"?(n(),r("g",Et,Lt)):c.value==="light"?(n(),r("g",Vt,xt)):c.value==="regular"?(n(),r("g",It,Ot)):c.value==="thin"?(n(),r("g",Tt,Dt)):b("",!0)],16,Ct))}}),Ft=["width","height","fill","transform"],Wt={key:0},Rt=l("path",{d:"M72.5,150.63,100.79,128,72.5,105.37a12,12,0,1,1,15-18.74l40,32a12,12,0,0,1,0,18.74l-40,32a12,12,0,0,1-15-18.74ZM144,172h32a12,12,0,0,0,0-24H144a12,12,0,0,0,0,24ZM236,56V200a20,20,0,0,1-20,20H40a20,20,0,0,1-20-20V56A20,20,0,0,1,40,36H216A20,20,0,0,1,236,56Zm-24,4H44V196H212Z"},null,-1),jt=[Rt],Jt={key:1},Kt=l("path",{d:"M224,56V200a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V56a8,8,0,0,1,8-8H216A8,8,0,0,1,224,56Z",opacity:"0.2"},null,-1),Gt=l("path",{d:"M128,128a8,8,0,0,1-3,6.25l-40,32a8,8,0,1,1-10-12.5L107.19,128,75,102.25a8,8,0,1,1,10-12.5l40,32A8,8,0,0,1,128,128Zm48,24H136a8,8,0,0,0,0,16h40a8,8,0,0,0,0-16Zm56-96V200a16,16,0,0,1-16,16H40a16,16,0,0,1-16-16V56A16,16,0,0,1,40,40H216A16,16,0,0,1,232,56ZM216,200V56H40V200H216Z"},null,-1),qt=[Kt,Gt],Ut={key:2},Yt=l("path",{d:"M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm-91,94.25-40,32a8,8,0,1,1-10-12.5L107.19,128,75,102.25a8,8,0,1,1,10-12.5l40,32a8,8,0,0,1,0,12.5ZM176,168H136a8,8,0,0,1,0-16h40a8,8,0,0,1,0,16Z"},null,-1),Qt=[Yt],Xt={key:3},eo=l("path",{d:"M126,128a6,6,0,0,1-2.25,4.69l-40,32a6,6,0,0,1-7.5-9.38L110.4,128,76.25,100.69a6,6,0,1,1,7.5-9.38l40,32A6,6,0,0,1,126,128Zm50,26H136a6,6,0,0,0,0,12h40a6,6,0,0,0,0-12Zm54-98V200a14,14,0,0,1-14,14H40a14,14,0,0,1-14-14V56A14,14,0,0,1,40,42H216A14,14,0,0,1,230,56Zm-12,0a2,2,0,0,0-2-2H40a2,2,0,0,0-2,2V200a2,2,0,0,0,2,2H216a2,2,0,0,0,2-2Z"},null,-1),to=[eo],oo={key:4},ao=l("path",{d:"M128,128a8,8,0,0,1-3,6.25l-40,32a8,8,0,1,1-10-12.5L107.19,128,75,102.25a8,8,0,1,1,10-12.5l40,32A8,8,0,0,1,128,128Zm48,24H136a8,8,0,0,0,0,16h40a8,8,0,0,0,0-16Zm56-96V200a16,16,0,0,1-16,16H40a16,16,0,0,1-16-16V56A16,16,0,0,1,40,40H216A16,16,0,0,1,232,56ZM216,200V56H40V200H216Z"},null,-1),so=[ao],no={key:5},io=l("path",{d:"M122.5,124.88a4,4,0,0,1,0,6.24l-40,32a4,4,0,0,1-5-6.24L113.6,128,77.5,99.12a4,4,0,0,1,5-6.24ZM176,156H136a4,4,0,0,0,0,8h40a4,4,0,0,0,0-8ZM228,56V200a12,12,0,0,1-12,12H40a12,12,0,0,1-12-12V56A12,12,0,0,1,40,44H216A12,12,0,0,1,228,56Zm-8,0a4,4,0,0,0-4-4H40a4,4,0,0,0-4,4V200a4,4,0,0,0,4,4H216a4,4,0,0,0,4-4Z"},null,-1),lo=[io],ro={name:"PhTerminalWindow"},co=N({...ro,props:{weight:{type:String},size:{type:[String,Number]},color:{type:String},mirrored:{type:Boolean}},setup(a){const e=a,o=$("weight","regular"),t=$("size","1em"),d=$("color","currentColor"),f=$("mirrored",!1),c=M(()=>{var s;return(s=e.weight)!=null?s:o}),C=M(()=>{var s;return(s=e.size)!=null?s:t}),y=M(()=>{var s;return(s=e.color)!=null?s:d}),w=M(()=>e.mirrored!==void 0?e.mirrored?"scale(-1, 1)":void 0:f?"scale(-1, 1)":void 0);return(s,A)=>(n(),r("svg",ce({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 256 256",width:C.value,height:C.value,fill:y.value,transform:w.value},s.$attrs),[K(s.$slots,"default"),c.value==="bold"?(n(),r("g",Wt,jt)):c.value==="duotone"?(n(),r("g",Jt,qt)):c.value==="fill"?(n(),r("g",Ut,Qt)):c.value==="light"?(n(),r("g",Xt,to)):c.value==="regular"?(n(),r("g",oo,so)):c.value==="thin"?(n(),r("g",no,lo)):b("",!0)],16,Ft))}}),uo={class:"editor-layout"},po={class:"layout-left"},ho={class:"layout-right"},fo=N({__name:"EditorLayout",props:{fullWidth:{type:Boolean}},setup(a){return(e,o)=>(n(),r("div",uo,[l("section",po,[K(e.$slots,"left",{},void 0,!0)]),l("section",ho,[K(e.$slots,"right",{},void 0,!0)])]))}});const la=G(fo,[["__scopeId","data-v-74db9fe9"]]);class ke{constructor(){E(this,"logState",me({log:[]}));E(this,"_listeners",{})}static create(){return new ke}get logs(){return this.logState.log}log(e,o){if(e.type!=="restart"&&e.log.trim()==="")return;const t=o?this.logs.find(d=>d.id===o):null;return t?(t.type==="stderr"&&e.type==="stderr"&&(e.log=t.log+`
`+e.log),Object.assign(t,e)):this.logs.push({...e,id:o||re()}),this.notifyListeners(e),o}clear(){this.logState.log=[]}listen(e){const o=re();return this._listeners[o]=e,o}unlisten(e){delete this._listeners[e]}notifyListeners(e){Object.values(this._listeners).forEach(o=>o(e))}}const go="/assets/typing.c1831e40.svg";class ge{static async*sendMessage(e,o,t){var c;const f=(c=(await fetch("/_editor/api/ai/message",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({messages:e,runtime:o,threadId:t})})).body)==null?void 0:c.getReader();if(!f)throw new Error("No response body");for(;;){const C=await f.read();if(C.done)break;yield new TextDecoder().decode(C.value)}}static async createThread(){return(await fetch("/_editor/api/ai/thread",{method:"POST"})).json()}}class vo{constructor(e,o){E(this,"ws",null);E(this,"selfClosed",!1);this.onMessage=e,this.stageId=o}get url(){return"/_editor/api/stdio/listen"}handleMessage(e){const o=JSON.parse(e.data);o.stage_id===this.stageId&&this.onMessage(o)}handleClose(e){this.selfClosed||this.reset()}async close(){if(!!this.ws){try{this.ws.close()}catch{console.warn("already closed")}this.ws=null,this.selfClosed=!0}}async reset(){await this.close(),await this.connect()}async connect(){return await new Promise(e=>{this.ws=new WebSocket(this.url),this.ws.onopen=()=>e(),this.ws.onclose=o=>this.handleClose(o),this.ws.onmessage=o=>this.handleMessage(o)})}}const mo=N({__name:"SmartConsoleCopy",props:{textToCopy:{}},setup(a){const e=a,o=S(!1),t=()=>{navigator.clipboard.writeText(e.textToCopy),o.value=!0,setTimeout(()=>o.value=!1,2e3)},d=M(()=>o.value?"Copied!":"Copy to clipboard");return(f,c)=>(n(),x(u(z),null,{title:h(()=>[k(B(d.value),1)]),default:h(()=>[l("div",{class:"copy-button",onClick:t},[o.value?(n(),x(u(De),{key:1,color:"#fff",size:"22"})):(n(),x(u(ze),{key:0,color:"#fff",size:"22"}))])]),_:1}))}});const yo=G(mo,[["__scopeId","data-v-9afb5fd1"]]),_o=a=>(Ne("data-v-62f799a0"),a=a(),Oe(),a),Co={class:"smart-console"},wo={class:"header"},Mo={class:"left"},Ao={class:"right"},Ho=["unseen-severity"],ko={class:"cli"},bo={class:"left"},So=_o(()=>l("div",{class:"entry ai-output"}," Hello there! I'm both an output console and AI assistant. You can ask me anything. ",-1)),Eo={key:1,class:"local-entry"},$o=["contenteditable","onKeydown"],Lo={class:"right"},Vo={key:1,class:"typing-img",src:go},Zo=N({__name:"SmartConsole",props:{logService:{},workspace:{},stageType:{},stage:{}},emits:["clear-terminal","enter"],setup(a,{expose:e,emit:o}){const t=a,d=S(null),f=S(""),c=S(null),C=Ee(),y=S({type:"seen"}),w=S("idle"),s=M(()=>w.value!=="idle");function A(){L.value=!L.value,L.value&&(y.value={type:"seen"})}function I(){L.value=!1}le(C,()=>{t.logService.clear(),o("clear-terminal")});const H=()=>{document.querySelectorAll("pre").forEach(i=>{i.style.position="relative";const p=_(yo,{textToCopy:i.textContent});xe(p,i)})},V=S(null),F=async m=>{var i;if(m.preventDefault(),f.value=((i=V.value)==null?void 0:i.innerText)||"",m.shiftKey){document.execCommand("insertLineBreak");return}V.value&&(V.value.innerText=""),await q()},q=async()=>{o("enter",f.value),t.logService.log({type:"ai-input",log:f.value}),w.value="processing";const m=t.workspace&&t.stage?await t.workspace.readFile(t.stage.file):null;let i="";for(let v=t.logService.logs.length-1;v>=0;v--){const Z=t.logService.logs[v];if(Z.type==="stderr"){i=Z.log;break}}const p=[{role:"user",content:`If necessary to check, this is my current code:
${m||"No code found"}
. Otherwise, just IGNORE it.

`}];i.length&&p.push({role:"user",content:`If necessary to check, I got this error during execution:
${i}. Otherwise, just IGNORE it.`});try{const v=re();let Z="";const ee=ge.sendMessage([{role:"system",content:"The Python code and its possible errors during execution are sent by default, but it should be IGNORED if the main question is not about them."},...p,{role:"user",content:f.value}],t.stageType,d.value);for await(const te of ee)w.value==="processing"&&(w.value="answering"),Z+=te,t.logService.log({type:"ai-output",log:Z},v);f.value=""}catch(v){t.logService.log({type:"ai-output",log:"Sorry, I don't know how to answer that."}),console.error(v),Ie(v)}finally{w.value="idle",H()}};e({closeConsole:I,fixJson:async(m,i)=>{t.logService.clear(),t.logService.log({type:"ai-input",log:`here is my json code:
      ${m}
      And I got this error:`}),t.logService.log({type:"stderr",log:i}),L.value=!0,y.value={type:"seen"},f.value="Can you fix this JSON?",await q()}});const T=()=>{t.logService.clear(),W()};t.logService.listen(async m=>{L.value||(y.value={type:"unseen",count:y.value.type==="unseen"?y.value.count+1:1,severity:m.type==="stderr"?"error":"info"}),m.type!=="restart"&&(await ye(),c.value&&(c.value.scrollTop=c.value.scrollHeight))});const L=S(!1),P=S(400),ie=M(()=>({height:`${P.value}px`})),g=S(!1),U=()=>g.value=!0,Y=m=>{!g.value||(P.value=document.body.clientHeight-m.clientY)},Q=()=>g.value=!1,W=async()=>{const{thread:m}=await ge.createThread();d.value=m},X=new vo(m=>t.logService.log(m),t.stage.id),de=Pe();return le(()=>{var m;return(m=de.cloudProject)==null?void 0:m.id},async m=>m&&W()),_e(async()=>{document.addEventListener("mousemove",Y),document.addEventListener("mouseup",Q),W(),H(),await X.connect()}),Ce(async()=>{document.removeEventListener("mousemove",Y),document.removeEventListener("mouseup",Q),await X.close()}),(m,i)=>{const p=$e("Markdown");return n(),r("div",Co,[l("div",wo,[l("div",Mo,[_(u(co),{size:"20"}),k(" Smart Console ")]),l("div",Ao,[_(u(z),{placement:"left","mouse-enter-delay":.5,title:L.value?"Hide Smart Console":"Show Smart Console"},{default:h(()=>[l("div",{class:"toggle-button",onClick:A},[_(u(he),{class:j(["icon",{open:L.value}]),color:"#fff",size:"20",style:{padding:"5px"}},null,8,["class"]),y.value.type==="unseen"?(n(),r("div",{key:0,class:"unseen-count","unseen-severity":y.value.severity},B(y.value.count),9,Ho)):b("",!0)])]),_:1},8,["title"])])]),L.value?(n(),r("div",{key:0,class:"terminal",style:Le(ie.value)},[l("div",{class:"resize-handler",onMousedown:U},null,32),l("div",ko,[l("div",bo,[l("div",{ref_key:"entriesContainer",ref:c,class:"entries"},[So,(n(!0),r(we,null,Ve(t.logService.logs,(v,Z)=>(n(),r("div",{key:Z,class:j([v.type,"entry"])},[v.type==="ai-output"?(n(),x(p,{key:0,source:v.log},null,8,["source"])):(n(),r("div",Eo,B(v.type==="restart"?"-- restarted --":v.log),1))],2))),128))],512),l("div",{class:j(["input",{disabled:s.value}])},[_(u(he),{color:"white"}),l("div",{ref_key:"inputRef",ref:V,class:"input-text",contenteditable:!s.value,placeholder:"Ask AI anything",onKeydown:Ze(F,["enter"])},null,40,$o)],2)]),l("div",Lo,[_(u(z),{placement:"left",title:"Start new conversation"},{default:h(()=>[l("div",{class:"icons",onClick:T},[_(u(_t),{size:"20",color:"#AAA"})])]),_:1}),w.value==="processing"?(n(),x(u(Be),{key:0,style:{color:"#aaa","font-size":"18px"}})):b("",!0),w.value==="answering"?(n(),r("img",Vo)):b("",!0)])])],4)):b("",!0)])}}});const ra=G(Zo,[["__scopeId","data-v-62f799a0"]]),xo=N({__name:"PathInput",props:{runtime:{}},setup(a){const e=a,o=()=>{const t=Je(e.runtime.path);t&&t!==e.runtime.path&&(e.runtime.path=t)};return(t,d)=>(n(),x(u(Me),{value:t.runtime.path,"onUpdate:value":d[0]||(d[0]=f=>t.runtime.path=f),type:"text",onBlur:o},Te({_:2},[t.runtime instanceof u(We)?{name:"addonBefore",fn:h(()=>[k(" https://[your-subdomain].abstra.app/_hooks/ ")]),key:"0"}:{name:"addonBefore",fn:h(()=>[k(" https://[your-subdomain].abstra.app/ ")]),key:"1"}]),1032,["value"]))}}),Io={key:1},No=N({__name:"RuntimeCommonSettings",props:{runtime:{}},setup(a){const e=me({pathError:null});return(o,t)=>(n(),r(we,null,[o.runtime instanceof u(Re)||o.runtime instanceof u(je)?b("",!0):(n(),x(u(Ae),{key:0,label:"URL path"},{default:h(()=>[_(xo,{runtime:o.runtime},null,8,["runtime"])]),_:1})),e.pathError?(n(),r("div",Io,B(e.pathError),1)):b("",!0)],64))}});const ca=G(No,[["__scopeId","data-v-60a397e0"]]);class ue{static async getAutocomplete(e){try{return await(await fetch("/_editor/api/pysa/autocomplete",{headers:{"content-type":"application/json"},body:JSON.stringify(e),method:"POST"})).json()}catch{return[]}}static async getHelp(e){try{return await(await fetch("/_editor/api/pysa/help",{headers:{"content-type":"application/json"},body:JSON.stringify(e),method:"POST"})).json()}catch{return[]}}static async getLint(e){try{return await(await fetch("/_editor/api/pysa/lint",{headers:{"content-type":"application/json"},body:JSON.stringify(e),method:"POST"})).json()}catch{return[]}}}let ne={};function Oo(a){return a in ne?"\n\n```python\n"+a+" = "+ne[a]+"\n```":""}function To(a){switch(a){case"error":return R.Error;case"warning":return R.Warning;case"info":return R.Info;case"hint":return R.Hint;default:return R.Error}}se.registerHoverProvider("python",{async provideHover(a,e){const o=a.getWordAtPosition(e);return o?{contents:(await ue.getHelp({code:a.getValue(),line:e.lineNumber,column:e.column})).map(d=>({value:d.docstring+Oo(d.name)})),range:new He(e.lineNumber,o.startColumn,e.lineNumber,o.endColumn)}:null}});se.registerCompletionItemProvider("python",{async provideCompletionItems(a,e){const o=await ue.getAutocomplete({code:a.getValue(),line:e.lineNumber,column:e.column-1}),t=a.getWordUntilPosition(e);return{suggestions:o.map(d=>({label:d.name,kind:se.CompletionItemKind.Function,documentation:d.documentation,insertText:d.name,insertTextRules:se.CompletionItemInsertTextRule.InsertAsSnippet,range:{startLineNumber:e.lineNumber,endLineNumber:e.lineNumber,startColumn:t.startColumn,endColumn:t.endColumn}}))}}});const ve=a=>{ue.getLint({code:a.getValue(),line:0,column:0}).then(e=>{J.setModelMarkers(a,"python",e.map(o=>({startLineNumber:o.line,startColumn:o.column,endLineNumber:o.until_line,endColumn:o.until_column,message:o.message,severity:To(o.severity)})))})},Po=(a,e,o={})=>{var s;const t=J.create(a,{language:"python",value:e,minimap:{enabled:!1},readOnly:(s=o.readOnly)!=null?s:!1,contextmenu:!o.readOnly,automaticLayout:!o.readOnly,tabSize:4,fixedOverflowWidgets:!0,theme:o.theme?o.theme:"vs",fontFamily:"monospace",lineNumbers:"on",scrollBeyondLastColumn:o.readOnly?0:5,scrollBeyondLastLine:!o.readOnly,renderLineHighlight:o.readOnly?"none":"all",scrollbar:{useShadows:!1,alwaysConsumeMouseWheel:!1}}),d=t.getContribution("editor.contrib.messageController");t.onDidAttemptReadOnlyEdit(()=>{d.showMessage("Cannot edit during preview execution",t.getPosition())});const f=t.createDecorationsCollection([]),c=(A,I)=>{f.set(A.map(H=>({range:new He(H.lineno,1,H.lineno,1),options:{isWholeLine:!0,className:I}}))),ne=A.reduce((H,V)=>({...H,...V.locals}),{})},C=(A,I)=>H=>{const V=H.filter(F=>F.filename.endsWith(I));c(V,A)},y=()=>{f.clear(),ne={}},w=A=>{t.updateOptions({readOnly:A})};return ve(t.getModel()),t.onDidChangeModelContent(()=>{ve(t.getModel())}),{editor:t,highlight:C,clearHighlights:y,setReadOnly:w}},Do=(a,e,o)=>{const t=J.createModel(e),d=J.createModel(o),f=J.createDiffEditor(a,{minimap:{enabled:!1},readOnly:!0,contextmenu:!1,automaticLayout:!0,renderWhitespace:"none",guides:{indentation:!1},fontFamily:"monospace",lineNumbers:"on",scrollBeyondLastColumn:0,scrollBeyondLastLine:!1,renderLineHighlight:"none"});return f.setModel({original:t,modified:d}),{diffEditor:f}};class zo{constructor(e,o){E(this,"_script");E(this,"_localEditorCode");E(this,"_monacoEditor");E(this,"_diffEditor");E(this,"_viewMode");E(this,"_alertMessage");E(this,"_conflictingChanges");this._localEditorCode=e,this._script=o,this._monacoEditor=null,this._diffEditor=null,this._viewMode=ae("editor"),this._alertMessage=ae(""),this._conflictingChanges=ae(!1)}get alertMessage(){return this._alertMessage.value}set alertMessage(e){this._alertMessage.value=e}get conflictingChanges(){return this._conflictingChanges.value}set conflictingChanges(e){this._conflictingChanges.value=e}get viewMode(){return this._viewMode.value}set viewMode(e){this._viewMode.value=e}get abstraIDECode(){return this._script.codeContent}get localEditorCode(){return this._localEditorCode}set localEditorCode(e){this._localEditorCode=e}set monacoEditor(e){this._monacoEditor=e}set diffEditor(e){this._diffEditor=e}finishPreview(){var e;this._viewMode.value="editor",this._script.codeContent=this._localEditorCode,(e=this._monacoEditor)==null||e.setValue(this._localEditorCode),this._script.updateInitialState("code_content",this._localEditorCode),this.alertMessage=""}updateCodeWhileEditing(e){var d;const o=e!==this._localEditorCode;if(this._localEditorCode=e,e===this._script.codeContent){this.alertMessage="",this.conflictingChanges=!1;return}const t=!this._script.hasChanges("code_content");if(t){(d=this._monacoEditor)==null||d.setValue(e),this._script.codeContent=e,this._script.updateInitialState("code_content",e);return}if(!t&&o){this.alertMessage="You have conflicting changes with your local editor code",this.conflictingChanges=!0;return}}updateCodeWhileDiff(e){var o,t;if(e===this._script.codeContent){this.alertMessage="",this.conflictingChanges=!1,this.viewMode="editor",this._localEditorCode=e;return}if(e!==this._localEditorCode){(t=(o=this._diffEditor)==null?void 0:o.getModel())==null||t.modified.setValue(e),this._localEditorCode=e;return}}updateCodeWhilePreview(e){if(this._localEditorCode=e,e===this._script.codeContent){this.alertMessage="";return}this.alertMessage="The changes on your code will be shown after the preview stops running"}updateCode(e){switch(this._viewMode.value){case"editor":return this.updateCodeWhileEditing(e);case"diff":return this.updateCodeWhileDiff(e);case"preview":return this.updateCodeWhilePreview(e)}}keepAbstraIDECode(){var e;(e=this._monacoEditor)==null||e.setValue(this._script.codeContent),this._script.save("code_content"),this._script.updateInitialState("code_content",this._script.codeContent),this._localEditorCode=this._script.codeContent,this.conflictingChanges=!1,this.alertMessage="",this.viewMode="editor"}keepLocalEditor(){var e;(e=this._monacoEditor)==null||e.setValue(this._localEditorCode),this._script.updateInitialState("code_content",this._localEditorCode),this.conflictingChanges=!1,this.alertMessage="",this.viewMode="editor"}}const Bo={class:"source-code-container"},Fo={key:1,class:"not-found-container"},Wo=N({__name:"SourceCode",props:{script:{},workspace:{}},emits:["update-file"],setup(a,{expose:e,emit:o}){const t=a,d=()=>{!t.script.file||t.workspace.openFile(t.script.file)},f=()=>{g.value.viewMode="diff",X()},c=S(null),C=S(null);let y,w,s,A;const{result:I}=fe(()=>fetch("/_editor/api/workspace/root").then(i=>i.text())),H=S(t.script.file);le(()=>t.script.file,()=>H.value=t.script.file);const{result:V,refetch:F}=fe(()=>Fe.checkFile(H.value)),q=()=>{T.value.valid?o("update-file",Ge(H.value)):o("update-file",H.value),F()},T=M(()=>{var p;const i=Ke(H.value);return i.valid?((p=V.value)==null?void 0:p.exists)&&t.script.hasChanges("file")?{valid:!0,help:"This file already exists"}:t.script.hasChanges("file")?{valid:!0,help:"The original file will be renamed"}:i:i}),L=()=>{!t.workspace||!I.value||t.workspace.openFile(".")},P=S(!1),ie=async()=>{var p;if(!t.script.file)return;const i=await t.workspace.readFile(t.script.file);if(i===null){P.value=!0;return}P.value=!1,(p=g.value)==null||p.updateCode(i)},g=ae(null);let U;_e(()=>{W(),U=setInterval(ie,1e3)}),Ce(()=>{clearInterval(U)});const Y=()=>{A(!0),g.value.viewMode="preview"},Q=(i,p)=>{if(p)return s("error-line",t.script.file)(i);s("executing-line",t.script.file)(i)},W=async()=>{await ye(),t.workspace.readFile(t.script.file).then(i=>{const p=i!=null?i:"";t.script.codeContent=p,t.script.updateInitialState("code_content",p),g.value=new zo(p,t.script);const v=Po(c.value,p);w=v.clearHighlights,s=v.highlight,A=v.setReadOnly,y=v.editor,g.value.monacoEditor=y,y.onDidChangeModelContent(()=>{t.script.codeContent=y.getValue()})})},X=async()=>{const i=await t.workspace.readFile(t.script.file);if(!i)return;const p=t.script.codeContent,v=Do(C.value,p,i);g.value.diffEditor=v.diffEditor};return e({startPreviewMode:Y,setHighlight:Q,restartEditor:()=>{var i;w(),A(!1),(i=g.value)==null||i.finishPreview()},updateLocalEditorCode:i=>{g.value.localEditorCode=i}}),(i,p)=>{var v,Z,ee,te;return n(),r("div",Bo,[_(u(Ae),{"validate-status":T.value.valid?"success":"error",help:T.value.valid?T.value.help:T.value.reason,class:"file-input"},{default:h(()=>[_(u(Me),{value:i.script.file,"onUpdate:value":p[0]||(p[0]=D=>i.script.file=D),onBlur:q},{addonBefore:h(()=>[u(I)?(n(),r("span",{key:0,class:"clickable",onClick:L},[_(u(z),{placement:"bottomLeft","overlay-style":{maxWidth:"none"}},{title:h(()=>[k(B(u(I)),1)]),default:h(()=>[_(u(Bt),{size:"22"})]),_:1})])):b("",!0)]),addonAfter:h(()=>[l("span",{class:"clickable",onClick:d},[k(" Open in editor "),_(u(qe),{size:"20"})])]),_:1},8,["value"])]),_:1},8,["validate-status","help"]),(v=g.value)!=null&&v.alertMessage?(n(),x(u(Ue),{key:0,type:"warning","show-icon":""},{message:h(()=>{var D;return[k(B((D=g.value)==null?void 0:D.alertMessage),1)]}),action:h(()=>[g.value.conflictingChanges&&g.value.viewMode!=="diff"?(n(),x(u(pe),{key:0,gap:"small"},{default:h(()=>[_(u(oe),{type:"primary",onClick:f},{default:h(()=>[k("Compare")]),_:1}),_(u(z),null,{title:h(()=>[k("Keep the local editor version")]),default:h(()=>[_(u(oe),{onClick:p[1]||(p[1]=D=>{var O;return(O=g.value)==null?void 0:O.keepLocalEditor()})},{default:h(()=>[k("Discard")]),_:1})]),_:1})]),_:1})):b("",!0),g.value.conflictingChanges&&g.value.viewMode==="diff"?(n(),x(u(pe),{key:1,gap:"small"},{default:h(()=>[_(u(z),null,{title:h(()=>[k("Keep your current changes")]),default:h(()=>[_(u(oe),{onClick:p[2]||(p[2]=D=>{var O;return(O=g.value)==null?void 0:O.keepAbstraIDECode()})},{default:h(()=>[k("Keep left")]),_:1})]),_:1}),_(u(z),null,{title:h(()=>[k("Keep the local editor version")]),default:h(()=>[_(u(oe),{onClick:p[3]||(p[3]=D=>{var O;return(O=g.value)==null?void 0:O.keepLocalEditor()})},{default:h(()=>[k("Keep right")]),_:1})]),_:1})]),_:1})):b("",!0)]),_:1})):b("",!0),l("div",{id:"code",ref_key:"codeComponent",ref:c,class:j(["monaco-element",{hide:((Z=g.value)==null?void 0:Z.viewMode)==="diff",blur:P.value}])},null,2),P.value?(n(),r("div",Fo,[_(u(Ye),null,{title:h(()=>[k("File not found")]),_:1})])):b("",!0),((ee=g.value)==null?void 0:ee.viewMode)==="diff"?(n(),r("div",{key:2,id:"code",ref_key:"codeDiffComponent",ref:C,class:j(["monaco-element",{hide:((te=g.value)==null?void 0:te.viewMode)!=="diff"}])},null,2)):b("",!0)])}}});const ua=G(Wo,[["__scopeId","data-v-68dc4a33"]]);export{la as E,ke as L,ca as R,ra as S,ua as a};
//# sourceMappingURL=SourceCode.69763a7d.js.map
