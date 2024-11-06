import{B as z}from"./BaseLayout.ac28e91a.js";import{d as f,B as s,f as n,o as e,X as l,Z as _,R as y,e8 as M,a as t,c as A,w as c,b as g,u as p,bw as H,aF as w,by as S,e9 as k,bP as B,bN as P,ea as N,e as j,r as C,aR as b,eb as x,ec as D,ed as L,aV as I,cF as F,Y as G,$ as E}from"./vue-router.8550d197.js";import{F as W}from"./PhSignOut.vue.1c11407d.js";import{u as q}from"./editor.52b1287d.js";import{N as R}from"./NavbarControls.0db62e6d.js";import{_ as T}from"./AbstraLogo.vue_vue_type_script_setup_true_lang.a3d76ffd.js";import{I as O,G as X}from"./PhIdentificationBadge.vue.36c4df52.js";import{G as Y}from"./PhCaretRight.vue.14d5e688.js";import{G as J}from"./PhFlowArrow.vue.de721c31.js";import{G as K}from"./PhKanban.vue.02a3383a.js";import{b as Q}from"./index.04c0426e.js";import"./workspaceStore.40fecf39.js";import"./url.9ccf3fea.js";import"./colorHelpers.e2516b81.js";import"./asyncComputed.2d6d0df7.js";import"./CloseCircleOutlined.43b563b3.js";import"./index.023f71ef.js";import"./index.7835fdde.js";import"./workspaces.068e6ab2.js";import"./record.014def16.js";import"./popupNotifcation.1f7ebbf0.js";import"./PhArrowSquareOut.vue.e8d41a99.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.144c1c7e.js";import"./BookOutlined.a4b25305.js";import"./PhChats.vue.2529fe38.js";import"./Logo.03fdc2be.js";import"./index.14a28969.js";import"./Avatar.4b651796.js";(function(){try{var d=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(d._sentryDebugIds=d._sentryDebugIds||{},d._sentryDebugIds[o]="6becf819-cfd3-4945-8568-2a33125c98cc",d._sentryDebugIdIdentifier="sentry-dbid-6becf819-cfd3-4945-8568-2a33125c98cc")}catch{}})();const U=["width","height","fill","transform"],a0={key:0},e0=t("path",{d:"M216,36H40A20,20,0,0,0,20,56V200a20,20,0,0,0,20,20H216a20,20,0,0,0,20-20V56A20,20,0,0,0,216,36Zm-4,24V84H44V60ZM44,196V108H212v88Z"},null,-1),l0=[e0],t0={key:1},o0=t("path",{d:"M224,56V96H32V56a8,8,0,0,1,8-8H216A8,8,0,0,1,224,56Z",opacity:"0.2"},null,-1),r0=t("path",{d:"M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,16V88H40V56Zm0,144H40V104H216v96Z"},null,-1),i0=[o0,r0],n0={key:2},s0=t("path",{d:"M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,16V88H40V56Z"},null,-1),u0=[s0],d0={key:3},m0=t("path",{d:"M216,42H40A14,14,0,0,0,26,56V200a14,14,0,0,0,14,14H216a14,14,0,0,0,14-14V56A14,14,0,0,0,216,42ZM40,54H216a2,2,0,0,1,2,2V90H38V56A2,2,0,0,1,40,54ZM216,202H40a2,2,0,0,1-2-2V102H218v98A2,2,0,0,1,216,202Z"},null,-1),h0=[m0],p0={key:4},c0=t("path",{d:"M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,16V88H40V56Zm0,144H40V104H216v96Z"},null,-1),v0=[c0],V0={key:5},g0=t("path",{d:"M216,44H40A12,12,0,0,0,28,56V200a12,12,0,0,0,12,12H216a12,12,0,0,0,12-12V56A12,12,0,0,0,216,44ZM40,52H216a4,4,0,0,1,4,4V92H36V56A4,4,0,0,1,40,52ZM216,204H40a4,4,0,0,1-4-4V100H220V200A4,4,0,0,1,216,204Z"},null,-1),Z0=[g0],$0={name:"PhBrowser"},f0=f({...$0,props:{weight:{type:String},size:{type:[String,Number]},color:{type:String},mirrored:{type:Boolean}},setup(d){const o=d,v=s("weight","regular"),u=s("size","1em"),i=s("color","currentColor"),$=s("mirrored",!1),r=n(()=>{var a;return(a=o.weight)!=null?a:v}),m=n(()=>{var a;return(a=o.size)!=null?a:u}),Z=n(()=>{var a;return(a=o.color)!=null?a:i}),V=n(()=>o.mirrored!==void 0?o.mirrored?"scale(-1, 1)":void 0:$?"scale(-1, 1)":void 0);return(a,h)=>(e(),l("svg",M({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 256 256",width:m.value,height:m.value,fill:Z.value,transform:V.value},a.$attrs),[_(a.$slots,"default"),r.value==="bold"?(e(),l("g",a0,l0)):r.value==="duotone"?(e(),l("g",t0,i0)):r.value==="fill"?(e(),l("g",n0,u0)):r.value==="light"?(e(),l("g",d0,h0)):r.value==="regular"?(e(),l("g",p0,v0)):r.value==="thin"?(e(),l("g",V0,Z0)):y("",!0)],16,U))}}),y0=["width","height","fill","transform"],A0={key:0},_0=t("path",{d:"M168.49,199.51a12,12,0,0,1-17,17l-80-80a12,12,0,0,1,0-17l80-80a12,12,0,0,1,17,17L97,128Z"},null,-1),M0=[_0],w0={key:1},H0=t("path",{d:"M160,48V208L80,128Z",opacity:"0.2"},null,-1),k0=t("path",{d:"M163.06,40.61a8,8,0,0,0-8.72,1.73l-80,80a8,8,0,0,0,0,11.32l80,80A8,8,0,0,0,168,208V48A8,8,0,0,0,163.06,40.61ZM152,188.69,91.31,128,152,67.31Z"},null,-1),b0=[H0,k0],x0={key:2},L0=t("path",{d:"M168,48V208a8,8,0,0,1-13.66,5.66l-80-80a8,8,0,0,1,0-11.32l80-80A8,8,0,0,1,168,48Z"},null,-1),S0=[L0],C0={key:3},z0=t("path",{d:"M164.24,203.76a6,6,0,1,1-8.48,8.48l-80-80a6,6,0,0,1,0-8.48l80-80a6,6,0,0,1,8.48,8.48L88.49,128Z"},null,-1),B0=[z0],P0={key:4},N0=t("path",{d:"M165.66,202.34a8,8,0,0,1-11.32,11.32l-80-80a8,8,0,0,1,0-11.32l80-80a8,8,0,0,1,11.32,11.32L91.31,128Z"},null,-1),j0=[N0],D0={key:5},I0=t("path",{d:"M162.83,205.17a4,4,0,0,1-5.66,5.66l-80-80a4,4,0,0,1,0-5.66l80-80a4,4,0,1,1,5.66,5.66L85.66,128Z"},null,-1),F0=[I0],G0={name:"PhCaretLeft"},E0=f({...G0,props:{weight:{type:String},size:{type:[String,Number]},color:{type:String},mirrored:{type:Boolean}},setup(d){const o=d,v=s("weight","regular"),u=s("size","1em"),i=s("color","currentColor"),$=s("mirrored",!1),r=n(()=>{var a;return(a=o.weight)!=null?a:v}),m=n(()=>{var a;return(a=o.size)!=null?a:u}),Z=n(()=>{var a;return(a=o.color)!=null?a:i}),V=n(()=>o.mirrored!==void 0?o.mirrored?"scale(-1, 1)":void 0:$?"scale(-1, 1)":void 0);return(a,h)=>(e(),l("svg",M({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 256 256",width:m.value,height:m.value,fill:Z.value,transform:V.value},a.$attrs),[_(a.$slots,"default"),r.value==="bold"?(e(),l("g",A0,M0)):r.value==="duotone"?(e(),l("g",w0,b0)):r.value==="fill"?(e(),l("g",x0,S0)):r.value==="light"?(e(),l("g",C0,B0)):r.value==="regular"?(e(),l("g",P0,j0)):r.value==="thin"?(e(),l("g",D0,F0)):y("",!0)],16,y0))}}),W0=["width","height","fill","transform"],q0={key:0},R0=t("path",{d:"M160,36A92.09,92.09,0,0,0,79,84.36,68,68,0,1,0,72,220h88a92,92,0,0,0,0-184Zm0,160H72a44,44,0,0,1-1.82-88A91.86,91.86,0,0,0,68,128a12,12,0,0,0,24,0,68,68,0,1,1,68,68Z"},null,-1),T0=[R0],O0={key:1},X0=t("path",{d:"M240,128a80,80,0,0,1-80,80H72A56,56,0,1,1,85.92,97.74l0,.1A80,80,0,0,1,240,128Z",opacity:"0.2"},null,-1),Y0=t("path",{d:"M160,40A88.09,88.09,0,0,0,81.29,88.67,64,64,0,1,0,72,216h88a88,88,0,0,0,0-176Zm0,160H72a48,48,0,0,1,0-96c1.1,0,2.2,0,3.29.11A88,88,0,0,0,72,128a8,8,0,0,0,16,0,72,72,0,1,1,72,72Z"},null,-1),J0=[X0,Y0],K0={key:2},Q0=t("path",{d:"M160.06,40A88.1,88.1,0,0,0,81.29,88.67h0A87.48,87.48,0,0,0,72,127.73,8.18,8.18,0,0,1,64.57,136,8,8,0,0,1,56,128a103.66,103.66,0,0,1,5.34-32.92,4,4,0,0,0-4.75-5.18A64.09,64.09,0,0,0,8,152c0,35.19,29.75,64,65,64H160a88.09,88.09,0,0,0,87.93-91.48C246.11,77.54,207.07,40,160.06,40Z"},null,-1),U0=[Q0],a1={key:3},e1=t("path",{d:"M160,42A86.11,86.11,0,0,0,82.43,90.88,62,62,0,1,0,72,214h88a86,86,0,0,0,0-172Zm0,160H72a50,50,0,0,1,0-100,50.67,50.67,0,0,1,5.91.35A85.61,85.61,0,0,0,74,128a6,6,0,0,0,12,0,74,74,0,1,1,74,74Z"},null,-1),l1=[e1],t1={key:4},o1=t("path",{d:"M160,40A88.09,88.09,0,0,0,81.29,88.67,64,64,0,1,0,72,216h88a88,88,0,0,0,0-176Zm0,160H72a48,48,0,0,1,0-96c1.1,0,2.2,0,3.29.11A88,88,0,0,0,72,128a8,8,0,0,0,16,0,72,72,0,1,1,72,72Z"},null,-1),r1=[o1],i1={key:5},n1=t("path",{d:"M160,44A84.11,84.11,0,0,0,83.59,93.12,60.71,60.71,0,0,0,72,92a60,60,0,0,0,0,120h88a84,84,0,0,0,0-168Zm0,160H72a52,52,0,1,1,8.55-103.3A83.66,83.66,0,0,0,76,128a4,4,0,0,0,8,0,76,76,0,1,1,76,76Z"},null,-1),s1=[n1],u1={name:"PhCloud"},d1=f({...u1,props:{weight:{type:String},size:{type:[String,Number]},color:{type:String},mirrored:{type:Boolean}},setup(d){const o=d,v=s("weight","regular"),u=s("size","1em"),i=s("color","currentColor"),$=s("mirrored",!1),r=n(()=>{var a;return(a=o.weight)!=null?a:v}),m=n(()=>{var a;return(a=o.size)!=null?a:u}),Z=n(()=>{var a;return(a=o.color)!=null?a:i}),V=n(()=>o.mirrored!==void 0?o.mirrored?"scale(-1, 1)":void 0:$?"scale(-1, 1)":void 0);return(a,h)=>(e(),l("svg",M({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 256 256",width:m.value,height:m.value,fill:Z.value,transform:V.value},a.$attrs),[_(a.$slots,"default"),r.value==="bold"?(e(),l("g",q0,T0)):r.value==="duotone"?(e(),l("g",O0,J0)):r.value==="fill"?(e(),l("g",K0,U0)):r.value==="light"?(e(),l("g",a1,l1)):r.value==="regular"?(e(),l("g",t1,r1)):r.value==="thin"?(e(),l("g",i1,s1)):y("",!0)],16,W0))}}),m1=["width","height","fill","transform"],h1={key:0},p1=t("path",{d:"M216.49,79.52l-56-56A12,12,0,0,0,152,20H56A20,20,0,0,0,36,40v68a12,12,0,0,0,24,0V44h76V92a12,12,0,0,0,12,12h48V212H172a12,12,0,0,0,0,24h28a20,20,0,0,0,20-20V88A12,12,0,0,0,216.49,79.52ZM160,57l23,23H160ZM64,140H48a12,12,0,0,0-12,12v56a12,12,0,0,0,24,0v-4h4a32,32,0,0,0,0-64Zm0,40H60V164h4a8,8,0,0,1,0,16Zm80,7.44V208a12,12,0,0,1-24,0V187.44l-18.18-29.08a12,12,0,0,1,20.36-12.72L132,161.36l9.82-15.72a12,12,0,0,1,20.36,12.72Z"},null,-1),c1=[p1],v1={key:1},V1=t("path",{d:"M208,88H152V32Z",opacity:"0.2"},null,-1),g1=t("path",{d:"M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40v72a8,8,0,0,0,16,0V40h88V88a8,8,0,0,0,8,8h48V216H168a8,8,0,0,0,0,16h32a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34ZM160,51.31,188.69,80H160ZM64,144H48a8,8,0,0,0-8,8v56a8,8,0,0,0,16,0v-8h8a28,28,0,0,0,0-56Zm0,40H56V160h8a12,12,0,0,1,0,24Zm90.78-27.76-18.78,30V208a8,8,0,0,1-16,0V186.29l-18.78-30a8,8,0,1,1,13.56-8.48L128,168.91l13.22-21.15a8,8,0,1,1,13.56,8.48Z"},null,-1),Z1=[V1,g1],$1={key:2},f1=t("path",{d:"M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40v76a4,4,0,0,0,4,4H172a4,4,0,0,1,4,4V228a4,4,0,0,0,4,4h20a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34ZM152,88V44l44,44ZM64,144H48a8,8,0,0,0-8,8v55.73A8.17,8.17,0,0,0,47.47,216,8,8,0,0,0,56,208v-8h7.4c15.24,0,28.14-11.92,28.59-27.15A28,28,0,0,0,64,144Zm-.35,40H56V160h8a12,12,0,0,1,12,13.16A12.25,12.25,0,0,1,63.65,184Zm91-27.48L136,186.29v21.44a8.17,8.17,0,0,1-7.47,8.25,8,8,0,0,1-8.53-8V186.29l-18.61-29.77a8.22,8.22,0,0,1,2.16-11.17,8,8,0,0,1,11.23,2.41L128,168.91l13.22-21.15a8,8,0,0,1,11.23-2.41A8.22,8.22,0,0,1,154.61,156.52Z"},null,-1),y1=[f1],A1={key:3},_1=t("path",{d:"M212.24,83.76l-56-56A6,6,0,0,0,152,26H56A14,14,0,0,0,42,40v72a6,6,0,0,0,12,0V40a2,2,0,0,1,2-2h90V88a6,6,0,0,0,6,6h50V216a2,2,0,0,1-2,2H168a6,6,0,0,0,0,12h32a14,14,0,0,0,14-14V88A6,6,0,0,0,212.24,83.76ZM158,46.48,193.52,82H158ZM64,146H48a6,6,0,0,0-6,6v56a6,6,0,0,0,12,0V198H64a26,26,0,0,0,0-52Zm0,40H54V158H64a14,14,0,0,1,0,28Zm89.09-30.82L134,185.72V208a6,6,0,0,1-12,0V185.72l-19.09-30.54a6,6,0,0,1,10.18-6.36L128,172.68l14.91-23.86a6,6,0,0,1,10.18,6.36Z"},null,-1),M1=[_1],w1={key:4},H1=t("path",{d:"M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40v72a8,8,0,0,0,16,0V40h88V88a8,8,0,0,0,8,8h48V216H168a8,8,0,0,0,0,16h32a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34ZM160,51.31,188.69,80H160ZM64,144H48a8,8,0,0,0-8,8v56a8,8,0,0,0,16,0v-8h8a28,28,0,0,0,0-56Zm0,40H56V160h8a12,12,0,0,1,0,24Zm90.78-27.76-18.78,30V208a8,8,0,0,1-16,0V186.29l-18.78-30a8,8,0,1,1,13.56-8.48L128,168.91l13.22-21.15a8,8,0,1,1,13.56,8.48Z"},null,-1),k1=[H1],b1={key:5},x1=t("path",{d:"M210.83,85.17l-56-56A4,4,0,0,0,152,28H56A12,12,0,0,0,44,40v72a4,4,0,0,0,8,0V40a4,4,0,0,1,4-4h92V88a4,4,0,0,0,4,4h52V216a4,4,0,0,1-4,4H168a4,4,0,0,0,0,8h32a12,12,0,0,0,12-12V88A4,4,0,0,0,210.83,85.17ZM156,41.65,198.34,84H156ZM64,148H48a4,4,0,0,0-4,4v56a4,4,0,0,0,8,0V196H64a24,24,0,0,0,0-48Zm0,40H52V156H64a16,16,0,0,1,0,32Zm87.39-33.88-19.39,31V208a4,4,0,0,1-8,0V185.15l-19.39-31a4,4,0,0,1,6.78-4.24L128,176.45l16.61-26.57a4,4,0,1,1,6.78,4.24Z"},null,-1),L1=[x1],S1={name:"PhFilePy"},C1=f({...S1,props:{weight:{type:String},size:{type:[String,Number]},color:{type:String},mirrored:{type:Boolean}},setup(d){const o=d,v=s("weight","regular"),u=s("size","1em"),i=s("color","currentColor"),$=s("mirrored",!1),r=n(()=>{var a;return(a=o.weight)!=null?a:v}),m=n(()=>{var a;return(a=o.size)!=null?a:u}),Z=n(()=>{var a;return(a=o.color)!=null?a:i}),V=n(()=>o.mirrored!==void 0?o.mirrored?"scale(-1, 1)":void 0:$?"scale(-1, 1)":void 0);return(a,h)=>(e(),l("svg",M({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 256 256",width:m.value,height:m.value,fill:Z.value,transform:V.value},a.$attrs),[_(a.$slots,"default"),r.value==="bold"?(e(),l("g",h1,c1)):r.value==="duotone"?(e(),l("g",v1,Z1)):r.value==="fill"?(e(),l("g",$1,y1)):r.value==="light"?(e(),l("g",A1,M1)):r.value==="regular"?(e(),l("g",w1,k1)):r.value==="thin"?(e(),l("g",b1,L1)):y("",!0)],16,m1))}}),z1=["width","height","fill","transform"],B1={key:0},P1=t("path",{d:"M225.6,62.64l-88-48.17a19.91,19.91,0,0,0-19.2,0l-88,48.17A20,20,0,0,0,20,80.19v95.62a20,20,0,0,0,10.4,17.55l88,48.17a19.89,19.89,0,0,0,19.2,0l88-48.17A20,20,0,0,0,236,175.81V80.19A20,20,0,0,0,225.6,62.64ZM128,36.57,200,76,178.57,87.73l-72-39.42Zm0,78.83L56,76,81.56,62l72,39.41ZM44,96.79l72,39.4v76.67L44,173.44Zm96,116.07V136.19l24-13.13V152a12,12,0,0,0,24,0V109.92l24-13.13v76.65Z"},null,-1),N1=[P1],j1={key:1},D1=t("path",{d:"M128,129.09V232a8,8,0,0,1-3.84-1l-88-48.18a8,8,0,0,1-4.16-7V80.18a8,8,0,0,1,.7-3.25Z",opacity:"0.2"},null,-1),I1=t("path",{d:"M223.68,66.15,135.68,18a15.88,15.88,0,0,0-15.36,0l-88,48.17a16,16,0,0,0-8.32,14v95.64a16,16,0,0,0,8.32,14l88,48.17a15.88,15.88,0,0,0,15.36,0l88-48.17a16,16,0,0,0,8.32-14V80.18A16,16,0,0,0,223.68,66.15ZM128,32l80.34,44-29.77,16.3-80.35-44ZM128,120,47.66,76l33.9-18.56,80.34,44ZM40,90l80,43.78v85.79L40,175.82Zm176,85.78h0l-80,43.79V133.82l32-17.51V152a8,8,0,0,0,16,0V107.55L216,90v85.77Z"},null,-1),F1=[D1,I1],G1={key:2},E1=t("path",{d:"M223.68,66.15,135.68,18a15.88,15.88,0,0,0-15.36,0l-88,48.17a16,16,0,0,0-8.32,14v95.64a16,16,0,0,0,8.32,14l88,48.17a15.88,15.88,0,0,0,15.36,0l88-48.17a16,16,0,0,0,8.32-14V80.18A16,16,0,0,0,223.68,66.15ZM128,32l80.35,44L178.57,92.29l-80.35-44Zm0,88L47.65,76,81.56,57.43l80.35,44Zm88,55.85h0l-80,43.79V133.83l32-17.51V152a8,8,0,0,0,16,0V107.56l32-17.51v85.76Z"},null,-1),W1=[E1],q1={key:3},R1=t("path",{d:"M222.72,67.91l-88-48.18a13.9,13.9,0,0,0-13.44,0l-88,48.18A14,14,0,0,0,26,80.18v95.64a14,14,0,0,0,7.28,12.27l88,48.18a13.92,13.92,0,0,0,13.44,0l88-48.18A14,14,0,0,0,230,175.82V80.18A14,14,0,0,0,222.72,67.91ZM127,30.25a2,2,0,0,1,1.92,0L212.51,76,178.57,94.57,94.05,48.31ZM122,223,39,177.57a2,2,0,0,1-1-1.75V86.66l84,46ZM43.49,76,81.56,55.15l84.51,46.26L128,122.24ZM218,175.82a2,2,0,0,1-1,1.75h0L134,223V132.64l36-19.71V152a6,6,0,0,0,12,0V106.37l36-19.71Z"},null,-1),T1=[R1],O1={key:4},X1=t("path",{d:"M223.68,66.15,135.68,18a15.88,15.88,0,0,0-15.36,0l-88,48.17a16,16,0,0,0-8.32,14v95.64a16,16,0,0,0,8.32,14l88,48.17a15.88,15.88,0,0,0,15.36,0l88-48.17a16,16,0,0,0,8.32-14V80.18A16,16,0,0,0,223.68,66.15ZM128,32l80.34,44-29.77,16.3-80.35-44ZM128,120,47.66,76l33.9-18.56,80.34,44ZM40,90l80,43.78v85.79L40,175.82Zm176,85.78h0l-80,43.79V133.82l32-17.51V152a8,8,0,0,0,16,0V107.55L216,90v85.77Z"},null,-1),Y1=[X1],J1={key:5},K1=t("path",{d:"M221.76,69.66l-88-48.18a12,12,0,0,0-11.52,0l-88,48.18A12,12,0,0,0,28,80.18v95.64a12,12,0,0,0,6.24,10.52l88,48.18a11.95,11.95,0,0,0,11.52,0l88-48.18A12,12,0,0,0,228,175.82V80.18A12,12,0,0,0,221.76,69.66ZM126.08,28.5a3.94,3.94,0,0,1,3.84,0L216.67,76,178.5,96.89a4,4,0,0,0-.58-.4l-88-48.18Zm1.92,96L39.33,76,81.56,52.87l88.67,48.54Zm-89.92,54.8a4,4,0,0,1-2.08-3.5V83.29l88,48.16v94.91Zm179.84,0h0l-85.92,47V131.45l40-21.89V152a4,4,0,0,0,8,0V105.18l40-21.89v92.53A4,4,0,0,1,217.92,179.32Z"},null,-1),Q1=[K1],U1={name:"PhPackage"},a2=f({...U1,props:{weight:{type:String},size:{type:[String,Number]},color:{type:String},mirrored:{type:Boolean}},setup(d){const o=d,v=s("weight","regular"),u=s("size","1em"),i=s("color","currentColor"),$=s("mirrored",!1),r=n(()=>{var a;return(a=o.weight)!=null?a:v}),m=n(()=>{var a;return(a=o.size)!=null?a:u}),Z=n(()=>{var a;return(a=o.color)!=null?a:i}),V=n(()=>o.mirrored!==void 0?o.mirrored?"scale(-1, 1)":void 0:$?"scale(-1, 1)":void 0);return(a,h)=>(e(),l("svg",M({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 256 256",width:m.value,height:m.value,fill:Z.value,transform:V.value},a.$attrs),[_(a.$slots,"default"),r.value==="bold"?(e(),l("g",B1,N1)):r.value==="duotone"?(e(),l("g",j1,F1)):r.value==="fill"?(e(),l("g",G1,W1)):r.value==="light"?(e(),l("g",q1,T1)):r.value==="regular"?(e(),l("g",O1,Y1)):r.value==="thin"?(e(),l("g",J1,Q1)):y("",!0)],16,z1))}}),e2=["width","height","fill","transform"],l2={key:0},t2=t("path",{d:"M68,102.06V40a12,12,0,0,0-24,0v62.06a36,36,0,0,0,0,67.88V216a12,12,0,0,0,24,0V169.94a36,36,0,0,0,0-67.88ZM56,148a12,12,0,1,1,12-12A12,12,0,0,1,56,148ZM164,88a36.07,36.07,0,0,0-24-33.94V40a12,12,0,0,0-24,0V54.06a36,36,0,0,0,0,67.88V216a12,12,0,0,0,24,0V121.94A36.07,36.07,0,0,0,164,88Zm-36,12a12,12,0,1,1,12-12A12,12,0,0,1,128,100Zm108,68a36.07,36.07,0,0,0-24-33.94V40a12,12,0,0,0-24,0v94.06a36,36,0,0,0,0,67.88V216a12,12,0,0,0,24,0V201.94A36.07,36.07,0,0,0,236,168Zm-36,12a12,12,0,1,1,12-12A12,12,0,0,1,200,180Z"},null,-1),o2=[t2],r2={key:1},i2=t("path",{d:"M80,136a24,24,0,1,1-24-24A24,24,0,0,1,80,136Zm48-72a24,24,0,1,0,24,24A24,24,0,0,0,128,64Zm72,80a24,24,0,1,0,24,24A24,24,0,0,0,200,144Z",opacity:"0.2"},null,-1),n2=t("path",{d:"M64,105V40a8,8,0,0,0-16,0v65a32,32,0,0,0,0,62v49a8,8,0,0,0,16,0V167a32,32,0,0,0,0-62Zm-8,47a16,16,0,1,1,16-16A16,16,0,0,1,56,152Zm80-95V40a8,8,0,0,0-16,0V57a32,32,0,0,0,0,62v97a8,8,0,0,0,16,0V119a32,32,0,0,0,0-62Zm-8,47a16,16,0,1,1,16-16A16,16,0,0,1,128,104Zm104,64a32.06,32.06,0,0,0-24-31V40a8,8,0,0,0-16,0v97a32,32,0,0,0,0,62v17a8,8,0,0,0,16,0V199A32.06,32.06,0,0,0,232,168Zm-32,16a16,16,0,1,1,16-16A16,16,0,0,1,200,184Z"},null,-1),s2=[i2,n2],u2={key:2},d2=t("path",{d:"M84,136a28,28,0,0,1-20,26.83V216a8,8,0,0,1-16,0V162.83a28,28,0,0,1,0-53.66V40a8,8,0,0,1,16,0v69.17A28,28,0,0,1,84,136Zm52-74.83V40a8,8,0,0,0-16,0V61.17a28,28,0,0,0,0,53.66V216a8,8,0,0,0,16,0V114.83a28,28,0,0,0,0-53.66Zm72,80V40a8,8,0,0,0-16,0V141.17a28,28,0,0,0,0,53.66V216a8,8,0,0,0,16,0V194.83a28,28,0,0,0,0-53.66Z"},null,-1),m2=[d2],h2={key:3},p2=t("path",{d:"M62,106.6V40a6,6,0,0,0-12,0v66.6a30,30,0,0,0,0,58.8V216a6,6,0,0,0,12,0V165.4a30,30,0,0,0,0-58.8ZM56,154a18,18,0,1,1,18-18A18,18,0,0,1,56,154Zm78-95.4V40a6,6,0,0,0-12,0V58.6a30,30,0,0,0,0,58.8V216a6,6,0,0,0,12,0V117.4a30,30,0,0,0,0-58.8ZM128,106a18,18,0,1,1,18-18A18,18,0,0,1,128,106Zm102,62a30.05,30.05,0,0,0-24-29.4V40a6,6,0,0,0-12,0v98.6a30,30,0,0,0,0,58.8V216a6,6,0,0,0,12,0V197.4A30.05,30.05,0,0,0,230,168Zm-30,18a18,18,0,1,1,18-18A18,18,0,0,1,200,186Z"},null,-1),c2=[p2],v2={key:4},V2=t("path",{d:"M64,105V40a8,8,0,0,0-16,0v65a32,32,0,0,0,0,62v49a8,8,0,0,0,16,0V167a32,32,0,0,0,0-62Zm-8,47a16,16,0,1,1,16-16A16,16,0,0,1,56,152Zm80-95V40a8,8,0,0,0-16,0V57a32,32,0,0,0,0,62v97a8,8,0,0,0,16,0V119a32,32,0,0,0,0-62Zm-8,47a16,16,0,1,1,16-16A16,16,0,0,1,128,104Zm104,64a32.06,32.06,0,0,0-24-31V40a8,8,0,0,0-16,0v97a32,32,0,0,0,0,62v17a8,8,0,0,0,16,0V199A32.06,32.06,0,0,0,232,168Zm-32,16a16,16,0,1,1,16-16A16,16,0,0,1,200,184Z"},null,-1),g2=[V2],Z2={key:5},$2=t("path",{d:"M60,108.29V40a4,4,0,0,0-8,0v68.29a28,28,0,0,0,0,55.42V216a4,4,0,0,0,8,0V163.71a28,28,0,0,0,0-55.42ZM56,156a20,20,0,1,1,20-20A20,20,0,0,1,56,156Zm76-95.71V40a4,4,0,0,0-8,0V60.29a28,28,0,0,0,0,55.42V216a4,4,0,0,0,8,0V115.71a28,28,0,0,0,0-55.42ZM128,108a20,20,0,1,1,20-20A20,20,0,0,1,128,108Zm100,60a28,28,0,0,0-24-27.71V40a4,4,0,0,0-8,0V140.29a28,28,0,0,0,0,55.42V216a4,4,0,0,0,8,0V195.71A28,28,0,0,0,228,168Zm-28,20a20,20,0,1,1,20-20A20,20,0,0,1,200,188Z"},null,-1),f2=[$2],y2={name:"PhSliders"},A2=f({...y2,props:{weight:{type:String},size:{type:[String,Number]},color:{type:String},mirrored:{type:Boolean}},setup(d){const o=d,v=s("weight","regular"),u=s("size","1em"),i=s("color","currentColor"),$=s("mirrored",!1),r=n(()=>{var a;return(a=o.weight)!=null?a:v}),m=n(()=>{var a;return(a=o.size)!=null?a:u}),Z=n(()=>{var a;return(a=o.color)!=null?a:i}),V=n(()=>o.mirrored!==void 0?o.mirrored?"scale(-1, 1)":void 0:$?"scale(-1, 1)":void 0);return(a,h)=>(e(),l("svg",M({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 256 256",width:m.value,height:m.value,fill:Z.value,transform:V.value},a.$attrs),[_(a.$slots,"default"),r.value==="bold"?(e(),l("g",l2,o2)):r.value==="duotone"?(e(),l("g",r2,s2)):r.value==="fill"?(e(),l("g",u2,m2)):r.value==="light"?(e(),l("g",h2,c2)):r.value==="regular"?(e(),l("g",v2,g2)):r.value==="thin"?(e(),l("g",Z2,f2)):y("",!0)],16,e2))}}),_2={class:"menu-item"},M2=["href"],w2={class:"menu-item"},H2=f({__name:"CloudProjectDropdown",setup(d){const o=q();return(v,u)=>(e(),A(p(P),null,{overlay:c(()=>[g(p(S),null,{default:c(()=>[g(p(H),null,{default:c(()=>{var i;return[t("div",_2,[g(p(d1)),t("a",{href:(i=p(o).links)==null?void 0:i.project,style:{color:"black"},target:"_project"},"Open Console",8,M2)])]}),_:1}),g(p(H),{danger:"",onClick:u[0]||(u[0]=i=>p(o).deleteLogin())},{default:c(()=>[t("div",w2,[g(p(W)),w(" Logout ")])]),_:1})]),_:1})]),default:c(()=>[g(p(B),{type:"text",size:"small",class:"menu-item"},{default:c(()=>{var i;return[g(p(f0),{size:"18"}),w(" "+k((i=p(o).cloudProject)==null?void 0:i.name),1)]}),_:1})]),_:1}))}});const k2={class:"logo"},b2={key:0,class:"toggle-button"},x2={key:1,class:"toggle-button"},L2=f({__name:"Sidebar",setup(d){const o=N();function v(){var Z,V;return[(V=(Z=r.value.map(a=>a.children).flat().find(a=>a.path===o.path))==null?void 0:Z.name)!=null?V:"Workflow"]}const u=n(v),i=j(!1),$=()=>i.value=!i.value,r=n(()=>[{name:"Project",children:[{name:"Workflow",icon:J,path:"/_editor/workflow"},{name:"Stages",icon:C1,path:"/_editor/stages"},{name:"Threads",icon:K,path:"/_editor/threads"}]},{name:"Settings",children:[{name:"Preferences",icon:A2,path:"/_editor/preferences"},{name:"Requirements",icon:a2,path:"/_editor/requirements"},{name:"Env Vars",icon:O,path:"/_editor/env-vars"},{name:"Access Control",icon:X,path:"/_editor/access-control"}]}]);return(m,Z)=>{const V=C("RouterLink");return e(),l("div",{style:G({width:i.value?"80px":"200px"}),class:"sidebar"},[t("div",k2,[g(T,{"hide-text":i.value},null,8,["hide-text"])]),g(p(S),{"inline-collapsed":i.value,mode:"inline","selected-keys":u.value,style:{display:"flex","flex-direction":"column",width:"100%","flex-grow":"1",border:"none"}},{default:c(()=>[(e(!0),l(b,null,x(r.value,a=>(e(),A(p(F),{key:a.name,title:a.name},{default:c(()=>[(e(!0),l(b,null,x(a.children,h=>(e(),A(p(H),{key:h.name,role:"button",tabindex:"0",disabled:h.disabled},{icon:c(()=>[(e(),A(D(h.icon),{class:L({active:u.value.includes(h.path),disabled:h.disabled}),size:"18"},null,8,["class"]))]),default:c(()=>[h.disabled?(e(),A(p(I),{key:1,placement:"bottomLeft",title:h.tooltip},{default:c(()=>[w(k(h.name),1)]),_:2},1032,["title"])):(e(),A(V,{key:0,to:h.path,class:L({active:u.value.includes(h.path),disabled:h.disabled})},{default:c(()=>[w(k(h.name),1)]),_:2},1032,["to","class"]))]),_:2},1032,["disabled"]))),128))]),_:2},1032,["title"]))),128)),i.value?(e(),l("div",b2,[g(p(Y),{size:"20",onClick:$})])):y("",!0),i.value?y("",!0):(e(),l("div",x2,[g(p(E0),{size:"20",onClick:$})]))]),_:1},8,["inline-collapsed","selected-keys"])],4)}}});const S2=E(L2,[["__scopeId","data-v-f69aae2e"]]),C2={style:{display:"flex","align-items":"center",gap:"60px"}},n8=f({__name:"Workspace",setup(d){return(o,v)=>{const u=C("RouterView");return e(),A(z,null,{navbar:c(()=>[g(p(Q),{style:{padding:"5px 10px",border:"1px solid #f0f0f0","border-left":"0px"}},{title:c(()=>[t("div",C2,[g(H2)])]),extra:c(()=>[g(R,{"show-github-stars":""})]),_:1})]),sidebar:c(()=>[g(S2,{class:"sidebar"})]),content:c(()=>[g(u)]),_:1})}}});export{n8 as default};
//# sourceMappingURL=Workspace.630627db.js.map
