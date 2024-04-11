import{N as y}from"./Navbar.41a09b31.js";import{B as w}from"./BaseLayout.275b9887.js";import{a as C}from"./asyncComputed.1d5bfff0.js";import{d as g,Y as s,I as i,b as e,ev as t,dk as L,ex as v,eA as H,e as r,eD as f,a as b,c as V,w as $,f as M}from"./outputWidgets.0b665cc7.js";import"./router.6e7fd32b.js";import"./index.608103f2.js";import{P as k}from"./project.f77c51ea.js";import{O as S}from"./organization.41aa6ee3.js";import{_ as z,S as _}from"./Sidebar.40bc3e62.js";import{C as B}from"./ContentLayout.b2e0c16a.js";import{G as x}from"./PhArrowCounterClockwise.vue.38d1487d.js";import{I as N,G as P}from"./PhIdentificationBadge.vue.24835fd1.js";import{H as j}from"./PhCube.vue.2375ba75.js";import"./logo.084e5d7c.js";import"./PhSignOut.vue.63bbf18b.js";import"./Text.b24e4288.js";import"./index.82b8d939.js";import"./index.964362d0.js";import"./BookOutlined.4857dcdd.js";import"./Form.ac4ccba7.js";import"./hasIn.8e8e9839.js";import"./popupNotifcation.84d6e93b.js";import"./record.9fd09cc1.js";import"./pubsub.16b0f787.js";import"./index.b033c4cc.js";import"./index.c642001c.js";(function(){try{var c=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(c._sentryDebugIds=c._sentryDebugIds||{},c._sentryDebugIds[o]="ec025477-bbbb-4662-a888-86b7b057a7be",c._sentryDebugIdIdentifier="sentry-dbid-ec025477-bbbb-4662-a888-86b7b057a7be")}catch{}})();const I=["width","height","fill","transform"],E={key:0},G=r("path",{d:"M196,35.52C177.62,25.51,153.48,20,128,20S78.38,25.51,60,35.52C39.37,46.79,28,62.58,28,80v96c0,17.42,11.37,33.21,32,44.48,18.35,10,42.49,15.52,68,15.52s49.62-5.51,68-15.52c20.66-11.27,32-27.06,32-44.48V80C228,62.58,216.63,46.79,196,35.52ZM204,128c0,17-31.21,36-76,36s-76-19-76-36v-8.46a88.9,88.9,0,0,0,8,4.94c18.35,10,42.49,15.52,68,15.52s49.62-5.51,68-15.52a88.9,88.9,0,0,0,8-4.94ZM128,44c44.79,0,76,19,76,36s-31.21,36-76,36S52,97,52,80,83.21,44,128,44Zm0,168c-44.79,0-76-19-76-36v-8.46a88.9,88.9,0,0,0,8,4.94c18.35,10,42.49,15.52,68,15.52s49.62-5.51,68-15.52a88.9,88.9,0,0,0,8-4.94V176C204,193,172.79,212,128,212Z"},null,-1),D=[G],q={key:1},F=r("path",{d:"M216,80c0,26.51-39.4,48-88,48S40,106.51,40,80s39.4-48,88-48S216,53.49,216,80Z",opacity:"0.2"},null,-1),O=r("path",{d:"M128,24C74.17,24,32,48.6,32,80v96c0,31.4,42.17,56,96,56s96-24.6,96-56V80C224,48.6,181.83,24,128,24Zm80,104c0,9.62-7.88,19.43-21.61,26.92C170.93,163.35,150.19,168,128,168s-42.93-4.65-58.39-13.08C55.88,147.43,48,137.62,48,128V111.36c17.06,15,46.23,24.64,80,24.64s62.94-9.68,80-24.64ZM69.61,53.08C85.07,44.65,105.81,40,128,40s42.93,4.65,58.39,13.08C200.12,60.57,208,70.38,208,80s-7.88,19.43-21.61,26.92C170.93,115.35,150.19,120,128,120s-42.93-4.65-58.39-13.08C55.88,99.43,48,89.62,48,80S55.88,60.57,69.61,53.08ZM186.39,202.92C170.93,211.35,150.19,216,128,216s-42.93-4.65-58.39-13.08C55.88,195.43,48,185.62,48,176V159.36c17.06,15,46.23,24.64,80,24.64s62.94-9.68,80-24.64V176C208,185.62,200.12,195.43,186.39,202.92Z"},null,-1),W=[F,O],K={key:2},R=r("path",{d:"M128,24C74.17,24,32,48.6,32,80v96c0,31.4,42.17,56,96,56s96-24.6,96-56V80C224,48.6,181.83,24,128,24Zm80,104c0,9.62-7.88,19.43-21.61,26.92C170.93,163.35,150.19,168,128,168s-42.93-4.65-58.39-13.08C55.88,147.43,48,137.62,48,128V111.36c17.06,15,46.23,24.64,80,24.64s62.94-9.68,80-24.64Zm-21.61,74.92C170.93,211.35,150.19,216,128,216s-42.93-4.65-58.39-13.08C55.88,195.43,48,185.62,48,176V159.36c17.06,15,46.23,24.64,80,24.64s62.94-9.68,80-24.64V176C208,185.62,200.12,195.43,186.39,202.92Z"},null,-1),T=[R],Y={key:3},J=r("path",{d:"M128,26C75.29,26,34,49.72,34,80v96c0,30.28,41.29,54,94,54s94-23.72,94-54V80C222,49.72,180.71,26,128,26Zm0,12c44.45,0,82,19.23,82,42s-37.55,42-82,42S46,102.77,46,80,83.55,38,128,38Zm82,138c0,22.77-37.55,42-82,42s-82-19.23-82-42V154.79C62,171.16,92.37,182,128,182s66-10.84,82-27.21Zm0-48c0,22.77-37.55,42-82,42s-82-19.23-82-42V106.79C62,123.16,92.37,134,128,134s66-10.84,82-27.21Z"},null,-1),Q=[J],U={key:4},X=r("path",{d:"M128,24C74.17,24,32,48.6,32,80v96c0,31.4,42.17,56,96,56s96-24.6,96-56V80C224,48.6,181.83,24,128,24Zm80,104c0,9.62-7.88,19.43-21.61,26.92C170.93,163.35,150.19,168,128,168s-42.93-4.65-58.39-13.08C55.88,147.43,48,137.62,48,128V111.36c17.06,15,46.23,24.64,80,24.64s62.94-9.68,80-24.64ZM69.61,53.08C85.07,44.65,105.81,40,128,40s42.93,4.65,58.39,13.08C200.12,60.57,208,70.38,208,80s-7.88,19.43-21.61,26.92C170.93,115.35,150.19,120,128,120s-42.93-4.65-58.39-13.08C55.88,99.43,48,89.62,48,80S55.88,60.57,69.61,53.08ZM186.39,202.92C170.93,211.35,150.19,216,128,216s-42.93-4.65-58.39-13.08C55.88,195.43,48,185.62,48,176V159.36c17.06,15,46.23,24.64,80,24.64s62.94-9.68,80-24.64V176C208,185.62,200.12,195.43,186.39,202.92Z"},null,-1),a1=[X],l1={key:5},e1=r("path",{d:"M192.14,42.55C174.94,33.17,152.16,28,128,28S81.06,33.17,63.86,42.55C45.89,52.35,36,65.65,36,80v96c0,14.35,9.89,27.65,27.86,37.45,17.2,9.38,40,14.55,64.14,14.55s46.94-5.17,64.14-14.55c18-9.8,27.86-23.1,27.86-37.45V80C220,65.65,210.11,52.35,192.14,42.55ZM212,176c0,11.29-8.41,22.1-23.69,30.43C172.27,215.18,150.85,220,128,220s-44.27-4.82-60.31-13.57C52.41,198.1,44,187.29,44,176V149.48c4.69,5.93,11.37,11.34,19.86,16,17.2,9.38,40,14.55,64.14,14.55s46.94-5.17,64.14-14.55c8.49-4.63,15.17-10,19.86-16Zm0-48c0,11.29-8.41,22.1-23.69,30.43C172.27,167.18,150.85,172,128,172s-44.27-4.82-60.31-13.57C52.41,150.1,44,139.29,44,128V101.48c4.69,5.93,11.37,11.34,19.86,16,17.2,9.38,40,14.55,64.14,14.55s46.94-5.17,64.14-14.55c8.49-4.63,15.17-10,19.86-16Zm-23.69-17.57C172.27,119.18,150.85,124,128,124s-44.27-4.82-60.31-13.57C52.41,102.1,44,91.29,44,80s8.41-22.1,23.69-30.43C83.73,40.82,105.15,36,128,36s44.27,4.82,60.31,13.57C203.59,57.9,212,68.71,212,80S203.59,102.1,188.31,110.43Z"},null,-1),t1=[e1],r1={name:"PhDatabase"},o1=g({...r1,props:{weight:{type:String},size:{type:[String,Number]},color:{type:String},mirrored:{type:Boolean}},setup(c){const o=c,m=s("weight","regular"),h=s("size","1em"),Z=s("color","currentColor"),d=s("mirrored",!1),l=i(()=>{var a;return(a=o.weight)!=null?a:m}),A=i(()=>{var a;return(a=o.size)!=null?a:h}),n=i(()=>{var a;return(a=o.color)!=null?a:Z}),u=i(()=>o.mirrored!==void 0?o.mirrored?"scale(-1, 1)":void 0:d?"scale(-1, 1)":void 0);return(a,p)=>(e(),t("svg",H({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 256 256",width:A.value,height:A.value,fill:n.value,transform:u.value},a.$attrs),[L(a.$slots,"default"),l.value==="bold"?(e(),t("g",E,D)):l.value==="duotone"?(e(),t("g",q,W)):l.value==="fill"?(e(),t("g",K,T)):l.value==="light"?(e(),t("g",Y,Q)):l.value==="regular"?(e(),t("g",U,a1)):l.value==="thin"?(e(),t("g",l1,t1)):v("",!0)],16,I))}}),i1=["width","height","fill","transform"],n1={key:0},s1=r("path",{d:"M228,56H160L133.33,36a20.12,20.12,0,0,0-12-4H76A20,20,0,0,0,56,52V72H36A20,20,0,0,0,16,92V204a20,20,0,0,0,20,20H188.89A19.13,19.13,0,0,0,208,204.89V184h20.89A19.13,19.13,0,0,0,248,164.89V76A20,20,0,0,0,228,56ZM184,200H40V96H80l28.8,21.6A12,12,0,0,0,116,120h68Zm40-40H208V116a20,20,0,0,0-20-20H120L93.33,76a20.12,20.12,0,0,0-12-4H80V56h40l28.8,21.6A12,12,0,0,0,156,80h68Z"},null,-1),h1=[s1],A1={key:1},c1=r("path",{d:"M232,80v88.89a7.11,7.11,0,0,1-7.11,7.11H200V112a8,8,0,0,0-8-8H120L90.13,81.6a8,8,0,0,0-4.8-1.6H64V56a8,8,0,0,1,8-8h45.33a8,8,0,0,1,4.8,1.6L152,72h72A8,8,0,0,1,232,80Z",opacity:"0.2"},null,-1),u1=r("path",{d:"M224,64H154.67L126.93,43.2a16.12,16.12,0,0,0-9.6-3.2H72A16,16,0,0,0,56,56V72H40A16,16,0,0,0,24,88V200a16,16,0,0,0,16,16H192.89A15.13,15.13,0,0,0,208,200.89V184h16.89A15.13,15.13,0,0,0,240,168.89V80A16,16,0,0,0,224,64ZM192,200H40V88H85.33l29.87,22.4A8,8,0,0,0,120,112h72Zm32-32H208V112a16,16,0,0,0-16-16H122.67L94.93,75.2a16.12,16.12,0,0,0-9.6-3.2H72V56h45.33L147.2,78.4A8,8,0,0,0,152,80h72Z"},null,-1),m1=[c1,u1],d1={key:2},Z1=r("path",{d:"M224,64H154.67L126.93,43.2a16.12,16.12,0,0,0-9.6-3.2H72A16,16,0,0,0,56,56V72H40A16,16,0,0,0,24,88V200a16,16,0,0,0,16,16H192.89A15.13,15.13,0,0,0,208,200.89V184h16.89A15.13,15.13,0,0,0,240,168.89V80A16,16,0,0,0,224,64Zm0,104H208V112a16,16,0,0,0-16-16H122.67L94.93,75.2a16.12,16.12,0,0,0-9.6-3.2H72V56h45.33L147.2,78.4A8,8,0,0,0,152,80h72Z"},null,-1),p1=[Z1],g1={key:3},v1=r("path",{d:"M224,66H154L125.73,44.8a14,14,0,0,0-8.4-2.8H72A14,14,0,0,0,58,56V74H40A14,14,0,0,0,26,88V200a14,14,0,0,0,14,14H192.89A13.12,13.12,0,0,0,206,200.89V182h18.89A13.12,13.12,0,0,0,238,168.89V80A14,14,0,0,0,224,66ZM194,200.89a1.11,1.11,0,0,1-1.11,1.11H40a2,2,0,0,1-2-2V88a2,2,0,0,1,2-2H85.33a2,2,0,0,1,1.2.4l29.87,22.4A6,6,0,0,0,120,110h72a2,2,0,0,1,2,2Zm32-32a1.11,1.11,0,0,1-1.11,1.11H206V112a14,14,0,0,0-14-14H122L93.73,76.8a14,14,0,0,0-8.4-2.8H70V56a2,2,0,0,1,2-2h45.33a2,2,0,0,1,1.2.4L148.4,76.8A6,6,0,0,0,152,78h72a2,2,0,0,1,2,2Z"},null,-1),L1=[v1],H1={key:4},$1=r("path",{d:"M224,64H154.67L126.93,43.2a16.12,16.12,0,0,0-9.6-3.2H72A16,16,0,0,0,56,56V72H40A16,16,0,0,0,24,88V200a16,16,0,0,0,16,16H192.89A15.13,15.13,0,0,0,208,200.89V184h16.89A15.13,15.13,0,0,0,240,168.89V80A16,16,0,0,0,224,64ZM192,200H40V88H85.33l29.87,22.4A8,8,0,0,0,120,112h72Zm32-32H208V112a16,16,0,0,0-16-16H122.67L94.93,75.2a16.12,16.12,0,0,0-9.6-3.2H72V56h45.33L147.2,78.4A8,8,0,0,0,152,80h72Z"},null,-1),M1=[$1],V1={key:5},y1=r("path",{d:"M224,68H153.33l-28.8-21.6a12.05,12.05,0,0,0-7.2-2.4H72A12,12,0,0,0,60,56V76H40A12,12,0,0,0,28,88V200a12,12,0,0,0,12,12H192.89A11.12,11.12,0,0,0,204,200.89V180h20.89A11.12,11.12,0,0,0,236,168.89V80A12,12,0,0,0,224,68ZM196,200.89a3.12,3.12,0,0,1-3.11,3.11H40a4,4,0,0,1-4-4V88a4,4,0,0,1,4-4H85.33a4,4,0,0,1,2.4.8l29.87,22.4a4,4,0,0,0,2.4.8h72a4,4,0,0,1,4,4Zm32-32a3.12,3.12,0,0,1-3.11,3.11H204V112a12,12,0,0,0-12-12H121.33L92.53,78.4a12.05,12.05,0,0,0-7.2-2.4H68V56a4,4,0,0,1,4-4h45.33a4,4,0,0,1,2.4.8L149.6,75.2a4,4,0,0,0,2.4.8h72a4,4,0,0,1,4,4Z"},null,-1),w1=[y1],C1={name:"PhFolders"},f1=g({...C1,props:{weight:{type:String},size:{type:[String,Number]},color:{type:String},mirrored:{type:Boolean}},setup(c){const o=c,m=s("weight","regular"),h=s("size","1em"),Z=s("color","currentColor"),d=s("mirrored",!1),l=i(()=>{var a;return(a=o.weight)!=null?a:m}),A=i(()=>{var a;return(a=o.size)!=null?a:h}),n=i(()=>{var a;return(a=o.color)!=null?a:Z}),u=i(()=>o.mirrored!==void 0?o.mirrored?"scale(-1, 1)":void 0:d?"scale(-1, 1)":void 0);return(a,p)=>(e(),t("svg",H({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 256 256",width:A.value,height:A.value,fill:n.value,transform:u.value},a.$attrs),[L(a.$slots,"default"),l.value==="bold"?(e(),t("g",n1,h1)):l.value==="duotone"?(e(),t("g",A1,m1)):l.value==="fill"?(e(),t("g",d1,p1)):l.value==="light"?(e(),t("g",g1,L1)):l.value==="regular"?(e(),t("g",H1,M1)):l.value==="thin"?(e(),t("g",V1,w1)):v("",!0)],16,i1))}}),b1=["width","height","fill","transform"],k1={key:0},S1=r("path",{d:"M128,76a52,52,0,1,0,52,52A52.06,52.06,0,0,0,128,76Zm0,80a28,28,0,1,1,28-28A28,28,0,0,1,128,156Zm113.86-49.57A12,12,0,0,0,236,98.34L208.21,82.49l-.11-31.31a12,12,0,0,0-4.25-9.12,116,116,0,0,0-38-21.41,12,12,0,0,0-9.68.89L128,37.27,99.83,21.53a12,12,0,0,0-9.7-.9,116.06,116.06,0,0,0-38,21.47,12,12,0,0,0-4.24,9.1l-.14,31.34L20,98.35a12,12,0,0,0-5.85,8.11,110.7,110.7,0,0,0,0,43.11A12,12,0,0,0,20,157.66l27.82,15.85.11,31.31a12,12,0,0,0,4.25,9.12,116,116,0,0,0,38,21.41,12,12,0,0,0,9.68-.89L128,218.73l28.14,15.74a12,12,0,0,0,9.7.9,116.06,116.06,0,0,0,38-21.47,12,12,0,0,0,4.24-9.1l.14-31.34,27.81-15.81a12,12,0,0,0,5.85-8.11A110.7,110.7,0,0,0,241.86,106.43Zm-22.63,33.18-26.88,15.28a11.94,11.94,0,0,0-4.55,4.59c-.54,1-1.11,1.93-1.7,2.88a12,12,0,0,0-1.83,6.31L184.13,199a91.83,91.83,0,0,1-21.07,11.87l-27.15-15.19a12,12,0,0,0-5.86-1.53h-.29c-1.14,0-2.3,0-3.44,0a12.08,12.08,0,0,0-6.14,1.51L93,210.82A92.27,92.27,0,0,1,71.88,199l-.11-30.24a12,12,0,0,0-1.83-6.32c-.58-.94-1.16-1.91-1.7-2.88A11.92,11.92,0,0,0,63.7,155L36.8,139.63a86.53,86.53,0,0,1,0-23.24l26.88-15.28a12,12,0,0,0,4.55-4.58c.54-1,1.11-1.94,1.7-2.89a12,12,0,0,0,1.83-6.31L71.87,57A91.83,91.83,0,0,1,92.94,45.17l27.15,15.19a11.92,11.92,0,0,0,6.15,1.52c1.14,0,2.3,0,3.44,0a12.08,12.08,0,0,0,6.14-1.51L163,45.18A92.27,92.27,0,0,1,184.12,57l.11,30.24a12,12,0,0,0,1.83,6.32c.58.94,1.16,1.91,1.7,2.88A11.92,11.92,0,0,0,192.3,101l26.9,15.33A86.53,86.53,0,0,1,219.23,139.61Z"},null,-1),z1=[S1],_1={key:1},B1=r("path",{d:"M230.1,108.76,198.25,90.62c-.64-1.16-1.31-2.29-2-3.41l-.12-36A104.61,104.61,0,0,0,162,32L130,49.89c-1.34,0-2.69,0-4,0L94,32A104.58,104.58,0,0,0,59.89,51.25l-.16,36c-.7,1.12-1.37,2.26-2,3.41l-31.84,18.1a99.15,99.15,0,0,0,0,38.46l31.85,18.14c.64,1.16,1.31,2.29,2,3.41l.12,36A104.61,104.61,0,0,0,94,224l32-17.87c1.34,0,2.69,0,4,0L162,224a104.58,104.58,0,0,0,34.08-19.25l.16-36c.7-1.12,1.37-2.26,2-3.41l31.84-18.1A99.15,99.15,0,0,0,230.1,108.76ZM128,168a40,40,0,1,1,40-40A40,40,0,0,1,128,168Z",opacity:"0.2"},null,-1),x1=r("path",{d:"M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Zm109.94-52.79a8,8,0,0,0-3.89-5.4l-29.83-17-.12-33.62a8,8,0,0,0-2.83-6.08,111.91,111.91,0,0,0-36.72-20.67,8,8,0,0,0-6.46.59L128,41.85,97.88,25a8,8,0,0,0-6.47-.6A111.92,111.92,0,0,0,54.73,45.15a8,8,0,0,0-2.83,6.07l-.15,33.65-29.83,17a8,8,0,0,0-3.89,5.4,106.47,106.47,0,0,0,0,41.56,8,8,0,0,0,3.89,5.4l29.83,17,.12,33.63a8,8,0,0,0,2.83,6.08,111.91,111.91,0,0,0,36.72,20.67,8,8,0,0,0,6.46-.59L128,214.15,158.12,231a7.91,7.91,0,0,0,3.9,1,8.09,8.09,0,0,0,2.57-.42,112.1,112.1,0,0,0,36.68-20.73,8,8,0,0,0,2.83-6.07l.15-33.65,29.83-17a8,8,0,0,0,3.89-5.4A106.47,106.47,0,0,0,237.94,107.21Zm-15,34.91-28.57,16.25a8,8,0,0,0-3,3c-.58,1-1.19,2.06-1.81,3.06a7.94,7.94,0,0,0-1.22,4.21l-.15,32.25a95.89,95.89,0,0,1-25.37,14.3L134,199.13a8,8,0,0,0-3.91-1h-.19c-1.21,0-2.43,0-3.64,0a8.1,8.1,0,0,0-4.1,1l-28.84,16.1A96,96,0,0,1,67.88,201l-.11-32.2a8,8,0,0,0-1.22-4.22c-.62-1-1.23-2-1.8-3.06a8.09,8.09,0,0,0-3-3.06l-28.6-16.29a90.49,90.49,0,0,1,0-28.26L61.67,97.63a8,8,0,0,0,3-3c.58-1,1.19-2.06,1.81-3.06a7.94,7.94,0,0,0,1.22-4.21l.15-32.25a95.89,95.89,0,0,1,25.37-14.3L122,56.87a8,8,0,0,0,4.1,1c1.21,0,2.43,0,3.64,0a8,8,0,0,0,4.1-1l28.84-16.1A96,96,0,0,1,188.12,55l.11,32.2a8,8,0,0,0,1.22,4.22c.62,1,1.23,2,1.8,3.06a8.09,8.09,0,0,0,3,3.06l28.6,16.29A90.49,90.49,0,0,1,222.9,142.12Z"},null,-1),N1=[B1,x1],P1={key:2},j1=r("path",{d:"M237.94,107.21a8,8,0,0,0-3.89-5.4l-29.83-17-.12-33.62a8,8,0,0,0-2.83-6.08,111.91,111.91,0,0,0-36.72-20.67,8,8,0,0,0-6.46.59L128,41.85,97.88,25a8,8,0,0,0-6.47-.6A111.92,111.92,0,0,0,54.73,45.15a8,8,0,0,0-2.83,6.07l-.15,33.65-29.83,17a8,8,0,0,0-3.89,5.4,106.47,106.47,0,0,0,0,41.56,8,8,0,0,0,3.89,5.4l29.83,17,.12,33.63a8,8,0,0,0,2.83,6.08,111.91,111.91,0,0,0,36.72,20.67,8,8,0,0,0,6.46-.59L128,214.15,158.12,231a7.91,7.91,0,0,0,3.9,1,8.09,8.09,0,0,0,2.57-.42,112.1,112.1,0,0,0,36.68-20.73,8,8,0,0,0,2.83-6.07l.15-33.65,29.83-17a8,8,0,0,0,3.89-5.4A106.47,106.47,0,0,0,237.94,107.21ZM128,168a40,40,0,1,1,40-40A40,40,0,0,1,128,168Z"},null,-1),I1=[j1],E1={key:3},G1=r("path",{d:"M128,82a46,46,0,1,0,46,46A46.06,46.06,0,0,0,128,82Zm0,80a34,34,0,1,1,34-34A34,34,0,0,1,128,162Zm108-54.4a6,6,0,0,0-2.92-4L202.64,86.22l-.42-.71L202.1,51.2A6,6,0,0,0,200,46.64a110.12,110.12,0,0,0-36.07-20.31,6,6,0,0,0-4.84.45L128.46,43.86h-1L96.91,26.76a6,6,0,0,0-4.86-.44A109.92,109.92,0,0,0,56,46.68a6,6,0,0,0-2.12,4.55l-.16,34.34c-.14.23-.28.47-.41.71L22.91,103.57A6,6,0,0,0,20,107.62a104.81,104.81,0,0,0,0,40.78,6,6,0,0,0,2.92,4l30.42,17.33.42.71.12,34.31A6,6,0,0,0,56,209.36a110.12,110.12,0,0,0,36.07,20.31,6,6,0,0,0,4.84-.45l30.61-17.08h1l30.56,17.1A6.09,6.09,0,0,0,162,230a5.83,5.83,0,0,0,1.93-.32,109.92,109.92,0,0,0,36-20.36,6,6,0,0,0,2.12-4.55l.16-34.34c.14-.23.28-.47.41-.71l30.42-17.29a6,6,0,0,0,2.92-4.05A104.81,104.81,0,0,0,236,107.6Zm-11.25,35.79L195.32,160.1a6.07,6.07,0,0,0-2.28,2.3c-.59,1-1.21,2.11-1.86,3.14a6,6,0,0,0-.91,3.16l-.16,33.21a98.15,98.15,0,0,1-27.52,15.53L133,200.88a6,6,0,0,0-2.93-.77h-.14c-1.24,0-2.5,0-3.74,0a6,6,0,0,0-3.07.76L93.45,217.43a98,98,0,0,1-27.56-15.49l-.12-33.17a6,6,0,0,0-.91-3.16c-.64-1-1.27-2.08-1.86-3.14a6,6,0,0,0-2.27-2.3L31.3,143.4a93,93,0,0,1,0-30.79L60.68,95.9A6.07,6.07,0,0,0,63,93.6c.59-1,1.21-2.11,1.86-3.14a6,6,0,0,0,.91-3.16l.16-33.21A98.15,98.15,0,0,1,93.41,38.56L123,55.12a5.81,5.81,0,0,0,3.07.76c1.24,0,2.5,0,3.74,0a6,6,0,0,0,3.07-.76l29.65-16.56a98,98,0,0,1,27.56,15.49l.12,33.17a6,6,0,0,0,.91,3.16c.64,1,1.27,2.08,1.86,3.14a6,6,0,0,0,2.27,2.3L224.7,112.6A93,93,0,0,1,224.73,143.39Z"},null,-1),D1=[G1],q1={key:4},F1=r("path",{d:"M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Zm109.94-52.79a8,8,0,0,0-3.89-5.4l-29.83-17-.12-33.62a8,8,0,0,0-2.83-6.08,111.91,111.91,0,0,0-36.72-20.67,8,8,0,0,0-6.46.59L128,41.85,97.88,25a8,8,0,0,0-6.47-.6A112.1,112.1,0,0,0,54.73,45.15a8,8,0,0,0-2.83,6.07l-.15,33.65-29.83,17a8,8,0,0,0-3.89,5.4,106.47,106.47,0,0,0,0,41.56,8,8,0,0,0,3.89,5.4l29.83,17,.12,33.62a8,8,0,0,0,2.83,6.08,111.91,111.91,0,0,0,36.72,20.67,8,8,0,0,0,6.46-.59L128,214.15,158.12,231a7.91,7.91,0,0,0,3.9,1,8.09,8.09,0,0,0,2.57-.42,112.1,112.1,0,0,0,36.68-20.73,8,8,0,0,0,2.83-6.07l.15-33.65,29.83-17a8,8,0,0,0,3.89-5.4A106.47,106.47,0,0,0,237.94,107.21Zm-15,34.91-28.57,16.25a8,8,0,0,0-3,3c-.58,1-1.19,2.06-1.81,3.06a7.94,7.94,0,0,0-1.22,4.21l-.15,32.25a95.89,95.89,0,0,1-25.37,14.3L134,199.13a8,8,0,0,0-3.91-1h-.19c-1.21,0-2.43,0-3.64,0a8.08,8.08,0,0,0-4.1,1l-28.84,16.1A96,96,0,0,1,67.88,201l-.11-32.2a8,8,0,0,0-1.22-4.22c-.62-1-1.23-2-1.8-3.06a8.09,8.09,0,0,0-3-3.06l-28.6-16.29a90.49,90.49,0,0,1,0-28.26L61.67,97.63a8,8,0,0,0,3-3c.58-1,1.19-2.06,1.81-3.06a7.94,7.94,0,0,0,1.22-4.21l.15-32.25a95.89,95.89,0,0,1,25.37-14.3L122,56.87a8,8,0,0,0,4.1,1c1.21,0,2.43,0,3.64,0a8.08,8.08,0,0,0,4.1-1l28.84-16.1A96,96,0,0,1,188.12,55l.11,32.2a8,8,0,0,0,1.22,4.22c.62,1,1.23,2,1.8,3.06a8.09,8.09,0,0,0,3,3.06l28.6,16.29A90.49,90.49,0,0,1,222.9,142.12Z"},null,-1),O1=[F1],W1={key:5},K1=r("path",{d:"M128,84a44,44,0,1,0,44,44A44.05,44.05,0,0,0,128,84Zm0,80a36,36,0,1,1,36-36A36,36,0,0,1,128,164Zm106-56a4,4,0,0,0-2-2.7l-30.89-17.6q-.47-.82-1-1.62L200.1,51.2a3.94,3.94,0,0,0-1.42-3,107.8,107.8,0,0,0-35.41-19.94,4,4,0,0,0-3.23.29L129,45.87h-2l-31-17.36a4,4,0,0,0-3.23-.3,108.05,108.05,0,0,0-35.39,20,4,4,0,0,0-1.41,3l-.16,34.9-1,1.62L23.9,105.3A4,4,0,0,0,22,108a102.76,102.76,0,0,0,0,40,4,4,0,0,0,1.95,2.7l30.89,17.6q.47.83,1,1.62l.12,34.87a3.94,3.94,0,0,0,1.42,3,107.8,107.8,0,0,0,35.41,19.94,4,4,0,0,0,3.23-.29L127,210.13h2l31,17.36a4,4,0,0,0,3.23.3,108.05,108.05,0,0,0,35.39-20,4,4,0,0,0,1.41-3l.16-34.9,1-1.62L232.1,150.7a4,4,0,0,0,2-2.71A102.76,102.76,0,0,0,234,108Zm-7.48,36.67L196.3,161.84a4,4,0,0,0-1.51,1.53c-.61,1.09-1.25,2.17-1.91,3.24a3.92,3.92,0,0,0-.61,2.1l-.16,34.15a99.8,99.8,0,0,1-29.7,16.77l-30.4-17a4.06,4.06,0,0,0-2-.51H130c-1.28,0-2.57,0-3.84,0a4.1,4.1,0,0,0-2.05.51l-30.45,17A100.23,100.23,0,0,1,63.89,202.9l-.12-34.12a3.93,3.93,0,0,0-.61-2.11c-.66-1-1.3-2.14-1.91-3.23a4,4,0,0,0-1.51-1.53L29.49,144.68a94.78,94.78,0,0,1,0-33.34L59.7,94.16a4,4,0,0,0,1.51-1.53c.61-1.09,1.25-2.17,1.91-3.23a4,4,0,0,0,.61-2.11l.16-34.15a99.8,99.8,0,0,1,29.7-16.77l30.4,17a4.1,4.1,0,0,0,2.05.51c1.28,0,2.57,0,3.84,0a4,4,0,0,0,2.05-.51l30.45-17A100.23,100.23,0,0,1,192.11,53.1l.12,34.12a3.93,3.93,0,0,0,.61,2.11c.66,1,1.3,2.14,1.91,3.23a4,4,0,0,0,1.51,1.53l30.25,17.23A94.78,94.78,0,0,1,226.54,144.66Z"},null,-1),R1=[K1],T1={name:"PhGearSix"},Y1=g({...T1,props:{weight:{type:String},size:{type:[String,Number]},color:{type:String},mirrored:{type:Boolean}},setup(c){const o=c,m=s("weight","regular"),h=s("size","1em"),Z=s("color","currentColor"),d=s("mirrored",!1),l=i(()=>{var a;return(a=o.weight)!=null?a:m}),A=i(()=>{var a;return(a=o.size)!=null?a:h}),n=i(()=>{var a;return(a=o.color)!=null?a:Z}),u=i(()=>o.mirrored!==void 0?o.mirrored?"scale(-1, 1)":void 0:d?"scale(-1, 1)":void 0);return(a,p)=>(e(),t("svg",H({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 256 256",width:A.value,height:A.value,fill:n.value,transform:u.value},a.$attrs),[L(a.$slots,"default"),l.value==="bold"?(e(),t("g",k1,z1)):l.value==="duotone"?(e(),t("g",_1,N1)):l.value==="fill"?(e(),t("g",P1,I1)):l.value==="light"?(e(),t("g",E1,D1)):l.value==="regular"?(e(),t("g",q1,O1)):l.value==="thin"?(e(),t("g",W1,R1)):v("",!0)],16,b1))}}),J1=["width","height","fill","transform"],Q1={key:0},U1=r("path",{d:"M128,20A108,108,0,1,0,236,128,108.12,108.12,0,0,0,128,20Zm0,187a113.4,113.4,0,0,1-20.39-35h40.82a116.94,116.94,0,0,1-10,20.77A108.61,108.61,0,0,1,128,207Zm-26.49-59a135.42,135.42,0,0,1,0-40h53a135.42,135.42,0,0,1,0,40ZM44,128a83.49,83.49,0,0,1,2.43-20H77.25a160.63,160.63,0,0,0,0,40H46.43A83.49,83.49,0,0,1,44,128Zm84-79a113.4,113.4,0,0,1,20.39,35H107.59a116.94,116.94,0,0,1,10-20.77A108.61,108.61,0,0,1,128,49Zm50.73,59h30.82a83.52,83.52,0,0,1,0,40H178.75a160.63,160.63,0,0,0,0-40Zm20.77-24H173.71a140.82,140.82,0,0,0-15.5-34.36A84.51,84.51,0,0,1,199.52,84ZM97.79,49.64A140.82,140.82,0,0,0,82.29,84H56.48A84.51,84.51,0,0,1,97.79,49.64ZM56.48,172H82.29a140.82,140.82,0,0,0,15.5,34.36A84.51,84.51,0,0,1,56.48,172Zm101.73,34.36A140.82,140.82,0,0,0,173.71,172h25.81A84.51,84.51,0,0,1,158.21,206.36Z"},null,-1),X1=[U1],a0={key:1},l0=r("path",{d:"M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z",opacity:"0.2"},null,-1),e0=r("path",{d:"M128,24h0A104,104,0,1,0,232,128,104.12,104.12,0,0,0,128,24Zm88,104a87.61,87.61,0,0,1-3.33,24H174.16a157.44,157.44,0,0,0,0-48h38.51A87.61,87.61,0,0,1,216,128ZM102,168H154a115.11,115.11,0,0,1-26,45A115.27,115.27,0,0,1,102,168Zm-3.9-16a140.84,140.84,0,0,1,0-48h59.88a140.84,140.84,0,0,1,0,48ZM40,128a87.61,87.61,0,0,1,3.33-24H81.84a157.44,157.44,0,0,0,0,48H43.33A87.61,87.61,0,0,1,40,128ZM154,88H102a115.11,115.11,0,0,1,26-45A115.27,115.27,0,0,1,154,88Zm52.33,0H170.71a135.28,135.28,0,0,0-22.3-45.6A88.29,88.29,0,0,1,206.37,88ZM107.59,42.4A135.28,135.28,0,0,0,85.29,88H49.63A88.29,88.29,0,0,1,107.59,42.4ZM49.63,168H85.29a135.28,135.28,0,0,0,22.3,45.6A88.29,88.29,0,0,1,49.63,168Zm98.78,45.6a135.28,135.28,0,0,0,22.3-45.6h35.66A88.29,88.29,0,0,1,148.41,213.6Z"},null,-1),t0=[l0,e0],r0={key:2},o0=r("path",{d:"M128,24h0A104,104,0,1,0,232,128,104.12,104.12,0,0,0,128,24Zm78.36,64H170.71a135.28,135.28,0,0,0-22.3-45.6A88.29,88.29,0,0,1,206.37,88ZM216,128a87.61,87.61,0,0,1-3.33,24H174.16a157.44,157.44,0,0,0,0-48h38.51A87.61,87.61,0,0,1,216,128ZM128,43a115.27,115.27,0,0,1,26,45H102A115.11,115.11,0,0,1,128,43ZM102,168H154a115.11,115.11,0,0,1-26,45A115.27,115.27,0,0,1,102,168Zm-3.9-16a140.84,140.84,0,0,1,0-48h59.88a140.84,140.84,0,0,1,0,48Zm50.35,61.6a135.28,135.28,0,0,0,22.3-45.6h35.66A88.29,88.29,0,0,1,148.41,213.6Z"},null,-1),i0=[o0],n0={key:3},s0=r("path",{d:"M128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26Zm81.57,64H169.19a132.58,132.58,0,0,0-25.73-50.67A90.29,90.29,0,0,1,209.57,90ZM218,128a89.7,89.7,0,0,1-3.83,26H171.81a155.43,155.43,0,0,0,0-52h42.36A89.7,89.7,0,0,1,218,128Zm-90,87.83a110,110,0,0,1-15.19-19.45A124.24,124.24,0,0,1,99.35,166h57.3a124.24,124.24,0,0,1-13.46,30.38A110,110,0,0,1,128,215.83ZM96.45,154a139.18,139.18,0,0,1,0-52h63.1a139.18,139.18,0,0,1,0,52ZM38,128a89.7,89.7,0,0,1,3.83-26H84.19a155.43,155.43,0,0,0,0,52H41.83A89.7,89.7,0,0,1,38,128Zm90-87.83a110,110,0,0,1,15.19,19.45A124.24,124.24,0,0,1,156.65,90H99.35a124.24,124.24,0,0,1,13.46-30.38A110,110,0,0,1,128,40.17Zm-15.46-.84A132.58,132.58,0,0,0,86.81,90H46.43A90.29,90.29,0,0,1,112.54,39.33ZM46.43,166H86.81a132.58,132.58,0,0,0,25.73,50.67A90.29,90.29,0,0,1,46.43,166Zm97,50.67A132.58,132.58,0,0,0,169.19,166h40.38A90.29,90.29,0,0,1,143.46,216.67Z"},null,-1),h0=[s0],A0={key:4},c0=r("path",{d:"M128,24h0A104,104,0,1,0,232,128,104.12,104.12,0,0,0,128,24Zm88,104a87.61,87.61,0,0,1-3.33,24H174.16a157.44,157.44,0,0,0,0-48h38.51A87.61,87.61,0,0,1,216,128ZM102,168H154a115.11,115.11,0,0,1-26,45A115.27,115.27,0,0,1,102,168Zm-3.9-16a140.84,140.84,0,0,1,0-48h59.88a140.84,140.84,0,0,1,0,48ZM40,128a87.61,87.61,0,0,1,3.33-24H81.84a157.44,157.44,0,0,0,0,48H43.33A87.61,87.61,0,0,1,40,128ZM154,88H102a115.11,115.11,0,0,1,26-45A115.27,115.27,0,0,1,154,88Zm52.33,0H170.71a135.28,135.28,0,0,0-22.3-45.6A88.29,88.29,0,0,1,206.37,88ZM107.59,42.4A135.28,135.28,0,0,0,85.29,88H49.63A88.29,88.29,0,0,1,107.59,42.4ZM49.63,168H85.29a135.28,135.28,0,0,0,22.3,45.6A88.29,88.29,0,0,1,49.63,168Zm98.78,45.6a135.28,135.28,0,0,0,22.3-45.6h35.66A88.29,88.29,0,0,1,148.41,213.6Z"},null,-1),u0=[c0],m0={key:5},d0=r("path",{d:"M128,28h0A100,100,0,1,0,228,128,100.11,100.11,0,0,0,128,28Zm0,190.61c-6.33-6.09-23-24.41-31.27-54.61h62.54C151,194.2,134.33,212.52,128,218.61ZM94.82,156a140.42,140.42,0,0,1,0-56h66.36a140.42,140.42,0,0,1,0,56ZM128,37.39c6.33,6.09,23,24.41,31.27,54.61H96.73C105,61.8,121.67,43.48,128,37.39ZM169.41,100h46.23a92.09,92.09,0,0,1,0,56H169.41a152.65,152.65,0,0,0,0-56Zm43.25-8h-45a129.39,129.39,0,0,0-29.19-55.4A92.25,92.25,0,0,1,212.66,92ZM117.54,36.6A129.39,129.39,0,0,0,88.35,92h-45A92.25,92.25,0,0,1,117.54,36.6ZM40.36,100H86.59a152.65,152.65,0,0,0,0,56H40.36a92.09,92.09,0,0,1,0-56Zm3,64h45a129.39,129.39,0,0,0,29.19,55.4A92.25,92.25,0,0,1,43.34,164Zm95.12,55.4A129.39,129.39,0,0,0,167.65,164h45A92.25,92.25,0,0,1,138.46,219.4Z"},null,-1),Z0=[d0],p0={name:"PhGlobe"},g0=g({...p0,props:{weight:{type:String},size:{type:[String,Number]},color:{type:String},mirrored:{type:Boolean}},setup(c){const o=c,m=s("weight","regular"),h=s("size","1em"),Z=s("color","currentColor"),d=s("mirrored",!1),l=i(()=>{var a;return(a=o.weight)!=null?a:m}),A=i(()=>{var a;return(a=o.size)!=null?a:h}),n=i(()=>{var a;return(a=o.color)!=null?a:Z}),u=i(()=>o.mirrored!==void 0?o.mirrored?"scale(-1, 1)":void 0:d?"scale(-1, 1)":void 0);return(a,p)=>(e(),t("svg",H({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 256 256",width:A.value,height:A.value,fill:n.value,transform:u.value},a.$attrs),[L(a.$slots,"default"),l.value==="bold"?(e(),t("g",Q1,X1)):l.value==="duotone"?(e(),t("g",a0,t0)):l.value==="fill"?(e(),t("g",r0,i0)):l.value==="light"?(e(),t("g",n0,h0)):l.value==="regular"?(e(),t("g",A0,u0)):l.value==="thin"?(e(),t("g",m0,Z0)):v("",!0)],16,J1))}}),v0=["width","height","fill","transform"],L0={key:0},H0=r("path",{d:"M196,76a16,16,0,1,1-16-16A16,16,0,0,1,196,76Zm48,22.74A84.3,84.3,0,0,1,160.11,180H160a83.52,83.52,0,0,1-23.65-3.38l-7.86,7.87A12,12,0,0,1,120,188H108v12a12,12,0,0,1-12,12H84v12a12,12,0,0,1-12,12H40a20,20,0,0,1-20-20V187.31a19.86,19.86,0,0,1,5.86-14.14l53.52-53.52A84,84,0,1,1,244,98.74ZM202.43,53.57A59.48,59.48,0,0,0,158,36c-32,1-58,27.89-58,59.89a59.69,59.69,0,0,0,4.2,22.19,12,12,0,0,1-2.55,13.21L44,189v23H60V200a12,12,0,0,1,12-12H84V176a12,12,0,0,1,12-12h19l9.65-9.65a12,12,0,0,1,13.22-2.55A59.58,59.58,0,0,0,160,156h.08c32,0,58.87-26.07,59.89-58A59.55,59.55,0,0,0,202.43,53.57Z"},null,-1),$0=[H0],M0={key:1},V0=r("path",{d:"M232,98.36C230.73,136.92,198.67,168,160.09,168a71.68,71.68,0,0,1-26.92-5.17h0L120,176H96v24H72v24H40a8,8,0,0,1-8-8V187.31a8,8,0,0,1,2.34-5.65l58.83-58.83h0A71.68,71.68,0,0,1,88,95.91c0-38.58,31.08-70.64,69.64-71.87A72,72,0,0,1,232,98.36Z",opacity:"0.2"},null,-1),y0=r("path",{d:"M216.57,39.43A80,80,0,0,0,83.91,120.78L28.69,176A15.86,15.86,0,0,0,24,187.31V216a16,16,0,0,0,16,16H72a8,8,0,0,0,8-8V208H96a8,8,0,0,0,8-8V184h16a8,8,0,0,0,5.66-2.34l9.56-9.57A79.73,79.73,0,0,0,160,176h.1A80,80,0,0,0,216.57,39.43ZM224,98.1c-1.09,34.09-29.75,61.86-63.89,61.9H160a63.7,63.7,0,0,1-23.65-4.51,8,8,0,0,0-8.84,1.68L116.69,168H96a8,8,0,0,0-8,8v16H72a8,8,0,0,0-8,8v16H40V187.31l58.83-58.82a8,8,0,0,0,1.68-8.84A63.72,63.72,0,0,1,96,95.92c0-34.14,27.81-62.8,61.9-63.89A64,64,0,0,1,224,98.1ZM192,76a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z"},null,-1),w0=[V0,y0],C0={key:2},f0=r("path",{d:"M216.57,39.43A80,80,0,0,0,83.91,120.78L28.69,176A15.86,15.86,0,0,0,24,187.31V216a16,16,0,0,0,16,16H72a8,8,0,0,0,8-8V208H96a8,8,0,0,0,8-8V184h16a8,8,0,0,0,5.66-2.34l9.56-9.57A79.73,79.73,0,0,0,160,176h.1A80,80,0,0,0,216.57,39.43ZM180,92a16,16,0,1,1,16-16A16,16,0,0,1,180,92Z"},null,-1),b0=[f0],k0={key:3},S0=r("path",{d:"M215.15,40.85A78,78,0,0,0,86.2,121.31l-56.1,56.1a13.94,13.94,0,0,0-4.1,9.9V216a14,14,0,0,0,14,14H72a6,6,0,0,0,6-6V206H96a6,6,0,0,0,6-6V182h18a6,6,0,0,0,4.24-1.76l10.45-10.44A77.59,77.59,0,0,0,160,174h.1A78,78,0,0,0,215.15,40.85ZM226,98.16c-1.12,35.16-30.67,63.8-65.88,63.84a65.93,65.93,0,0,1-24.51-4.67,6,6,0,0,0-6.64,1.26L117.51,170H96a6,6,0,0,0-6,6v18H72a6,6,0,0,0-6,6v18H40a2,2,0,0,1-2-2V187.31a2,2,0,0,1,.58-1.41l58.83-58.83a6,6,0,0,0,1.26-6.64A65.61,65.61,0,0,1,94,95.92C94,60.71,122.68,31.16,157.83,30A66,66,0,0,1,226,98.16ZM190,76a10,10,0,1,1-10-10A10,10,0,0,1,190,76Z"},null,-1),z0=[S0],_0={key:4},B0=r("path",{d:"M216.57,39.43A80,80,0,0,0,83.91,120.78L28.69,176A15.86,15.86,0,0,0,24,187.31V216a16,16,0,0,0,16,16H72a8,8,0,0,0,8-8V208H96a8,8,0,0,0,8-8V184h16a8,8,0,0,0,5.66-2.34l9.56-9.57A79.73,79.73,0,0,0,160,176h.1A80,80,0,0,0,216.57,39.43ZM224,98.1c-1.09,34.09-29.75,61.86-63.89,61.9H160a63.7,63.7,0,0,1-23.65-4.51,8,8,0,0,0-8.84,1.68L116.69,168H96a8,8,0,0,0-8,8v16H72a8,8,0,0,0-8,8v16H40V187.31l58.83-58.82a8,8,0,0,0,1.68-8.84A63.72,63.72,0,0,1,96,95.92c0-34.14,27.81-62.8,61.9-63.89A64,64,0,0,1,224,98.1ZM192,76a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z"},null,-1),x0=[B0],N0={key:5},P0=r("path",{d:"M213.74,42.26A76,76,0,0,0,88.51,121.84l-57,57A11.93,11.93,0,0,0,28,187.31V216a12,12,0,0,0,12,12H72a4,4,0,0,0,4-4V204H96a4,4,0,0,0,4-4V180h20a4,4,0,0,0,2.83-1.17l11.33-11.34A75.72,75.72,0,0,0,160,172h.1A76,76,0,0,0,213.74,42.26Zm14.22,56c-1.15,36.22-31.6,65.72-67.87,65.77H160a67.52,67.52,0,0,1-25.21-4.83,4,4,0,0,0-4.45.83l-12,12H96a4,4,0,0,0-4,4v20H72a4,4,0,0,0-4,4v20H40a4,4,0,0,1-4-4V187.31a4.06,4.06,0,0,1,1.17-2.83L96,125.66a4,4,0,0,0,.83-4.45A67.51,67.51,0,0,1,92,95.91C92,59.64,121.55,29.19,157.77,28A68,68,0,0,1,228,98.23ZM188,76a8,8,0,1,1-8-8A8,8,0,0,1,188,76Z"},null,-1),j0=[P0],I0={name:"PhKey"},E0=g({...I0,props:{weight:{type:String},size:{type:[String,Number]},color:{type:String},mirrored:{type:Boolean}},setup(c){const o=c,m=s("weight","regular"),h=s("size","1em"),Z=s("color","currentColor"),d=s("mirrored",!1),l=i(()=>{var a;return(a=o.weight)!=null?a:m}),A=i(()=>{var a;return(a=o.size)!=null?a:h}),n=i(()=>{var a;return(a=o.color)!=null?a:Z}),u=i(()=>o.mirrored!==void 0?o.mirrored?"scale(-1, 1)":void 0:d?"scale(-1, 1)":void 0);return(a,p)=>(e(),t("svg",H({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 256 256",width:A.value,height:A.value,fill:n.value,transform:u.value},a.$attrs),[L(a.$slots,"default"),l.value==="bold"?(e(),t("g",L0,$0)):l.value==="duotone"?(e(),t("g",M0,w0)):l.value==="fill"?(e(),t("g",C0,b0)):l.value==="light"?(e(),t("g",k0,z0)):l.value==="regular"?(e(),t("g",_0,x0)):l.value==="thin"?(e(),t("g",N0,j0)):v("",!0)],16,v0))}}),G0=["width","height","fill","transform"],D0={key:0},q0=r("path",{d:"M137,168l11.52-11.51a12,12,0,0,0-17-17L120,151l-15-15,11.52-11.51a12,12,0,0,0-17-17L88,119,72.49,103.51a12,12,0,0,0-17,17L59,124,38.54,144.49a36,36,0,0,0,0,50.91l2.55,2.54L15.51,223.51a12,12,0,0,0,17,17l25.57-25.58,2.54,2.55a36.06,36.06,0,0,0,50.91,0L132,197l3.51,3.52a12,12,0,0,0,17-17ZM94.54,200.49a12,12,0,0,1-17,0L55.51,178.43a12,12,0,0,1,0-17L76,141l39,39Zm146-185a12,12,0,0,0-17,0L197.94,41.09l-2.54-2.55a36.05,36.05,0,0,0-50.91,0L124,59l-3.51-3.52a12,12,0,0,0-17,17l80,80a12,12,0,0,0,17-17L197,132l20.49-20.49a36,36,0,0,0,0-50.91l-2.55-2.54,25.58-25.57A12,12,0,0,0,240.49,15.51Zm-40,79L180,115,141,76l20.49-20.49a12,12,0,0,1,17,0l22.06,22.06a12,12,0,0,1,0,17Z"},null,-1),F0=[q0],O0={key:1},W0=r("path",{d:"M76,124l56,56-29,29a24,24,0,0,1-33.94,0L47,186.91A24,24,0,0,1,47,153ZM209,69.09,186.91,47A24,24,0,0,0,153,47L124,76l56,56,29-29A24,24,0,0,0,209,69.09Z",opacity:"0.2"},null,-1),K0=r("path",{d:"M149.66,138.34a8,8,0,0,0-11.32,0L120,156.69,99.31,136l18.35-18.34a8,8,0,0,0-11.32-11.32L88,124.69,69.66,106.34a8,8,0,0,0-11.32,11.32L64.69,124,41.37,147.31a32,32,0,0,0,0,45.26l5.38,5.37-28.41,28.4a8,8,0,0,0,11.32,11.32l28.4-28.41,5.37,5.38a32,32,0,0,0,45.26,0L132,191.31l6.34,6.35a8,8,0,0,0,11.32-11.32L131.31,168l18.35-18.34A8,8,0,0,0,149.66,138.34Zm-52.29,65a16,16,0,0,1-22.62,0L52.69,181.25a16,16,0,0,1,0-22.62L76,135.31,120.69,180Zm140.29-185a8,8,0,0,0-11.32,0l-28.4,28.41-5.37-5.38a32.05,32.05,0,0,0-45.26,0L124,64.69l-6.34-6.35a8,8,0,0,0-11.32,11.32l80,80a8,8,0,0,0,11.32-11.32L191.31,132l23.32-23.31a32,32,0,0,0,0-45.26l-5.38-5.37,28.41-28.4A8,8,0,0,0,237.66,18.34Zm-34.35,79L180,120.69,135.31,76l23.32-23.31a16,16,0,0,1,22.62,0l22.06,22A16,16,0,0,1,203.31,97.37Z"},null,-1),R0=[W0,K0],T0={key:2},Y0=r("path",{d:"M149.66,149.66,131.31,168l18.35,18.34a8,8,0,0,1-11.32,11.32L132,191.31l-23.31,23.32a32.06,32.06,0,0,1-45.26,0l-5.37-5.38-28.4,28.41a8,8,0,0,1-11.32-11.32l28.41-28.4-5.38-5.37a32,32,0,0,1,0-45.26L64.69,124l-6.35-6.34a8,8,0,0,1,11.32-11.32L88,124.69l18.34-18.35a8,8,0,0,1,11.32,11.32L99.31,136,120,156.69l18.34-18.35a8,8,0,0,1,11.32,11.32Zm88-131.32a8,8,0,0,0-11.32,0l-28.4,28.41-5.37-5.38a32.05,32.05,0,0,0-45.26,0L124,64.69l-6.34-6.35a8,8,0,0,0-11.32,11.32l80,80a8,8,0,0,0,11.32-11.32L191.31,132l23.32-23.31a32,32,0,0,0,0-45.26l-5.38-5.37,28.41-28.4A8,8,0,0,0,237.66,18.34Z"},null,-1),J0=[Y0],Q0={key:3},U0=r("path",{d:"M148.24,139.76a6,6,0,0,0-8.48,0L120,159.51,96.49,136l19.75-19.76a6,6,0,0,0-8.48-8.48L88,127.51,68.24,107.76a6,6,0,0,0-8.48,8.48L67.51,124,42.79,148.73a30,30,0,0,0,0,42.42l6.78,6.79L19.76,227.76a6,6,0,1,0,8.48,8.48l29.82-29.81,6.79,6.78a30,30,0,0,0,42.42,0L132,188.49l7.76,7.75a6,6,0,0,0,8.48-8.48L128.49,168l19.75-19.76A6,6,0,0,0,148.24,139.76Zm-49.45,65a18,18,0,0,1-25.46,0L51.27,182.67a18,18,0,0,1,0-25.46L76,132.49,123.51,180Zm137.45-185a6,6,0,0,0-8.48,0L197.94,49.57l-6.79-6.78a30,30,0,0,0-42.42,0L124,67.51l-7.76-7.75a6,6,0,0,0-8.48,8.48l80,80a6,6,0,0,0,8.48-8.48L188.49,132l24.72-24.73a30,30,0,0,0,0-42.42l-6.78-6.79,29.81-29.82A6,6,0,0,0,236.24,19.76Zm-31.51,79L180,123.51,132.49,76l24.72-24.73a18,18,0,0,1,25.46,0l22.06,22.06a18,18,0,0,1,0,25.46Z"},null,-1),X0=[U0],a2={key:4},l2=r("path",{d:"M149.66,138.34a8,8,0,0,0-11.32,0L120,156.69,99.31,136l18.35-18.34a8,8,0,0,0-11.32-11.32L88,124.69,69.66,106.34a8,8,0,0,0-11.32,11.32L64.69,124,41.37,147.31a32,32,0,0,0,0,45.26l5.38,5.37-28.41,28.4a8,8,0,0,0,11.32,11.32l28.4-28.41,5.37,5.38a32,32,0,0,0,45.26,0L132,191.31l6.34,6.35a8,8,0,0,0,11.32-11.32L131.31,168l18.35-18.34A8,8,0,0,0,149.66,138.34Zm-52.29,65a16,16,0,0,1-22.62,0L52.69,181.25a16,16,0,0,1,0-22.62L76,135.31,120.69,180Zm140.29-185a8,8,0,0,0-11.32,0l-28.4,28.41-5.37-5.38a32.05,32.05,0,0,0-45.26,0L124,64.69l-6.34-6.35a8,8,0,0,0-11.32,11.32l80,80a8,8,0,0,0,11.32-11.32L191.31,132l23.32-23.31a32,32,0,0,0,0-45.26l-5.38-5.37,28.41-28.4A8,8,0,0,0,237.66,18.34Zm-34.35,79L180,120.69,135.31,76l23.32-23.31a16,16,0,0,1,22.62,0l22.06,22A16,16,0,0,1,203.31,97.37Z"},null,-1),e2=[l2],t2={key:5},r2=r("path",{d:"M146.83,141.17a4,4,0,0,0-5.66,0L120,162.34,93.66,136l21.17-21.17a4,4,0,0,0-5.66-5.66L88,130.34,66.83,109.17a4,4,0,0,0-5.66,5.66L70.34,124,44.2,150.14a28,28,0,0,0,0,39.6l8.2,8.2L21.17,229.17a4,4,0,0,0,5.66,5.66L58.06,203.6l8.2,8.2a28,28,0,0,0,39.6,0L132,185.66l9.17,9.17a4,4,0,0,0,5.66-5.66L125.66,168l21.17-21.17A4,4,0,0,0,146.83,141.17Zm-46.63,65a20,20,0,0,1-28.28,0L49.86,184.08a20,20,0,0,1,0-28.28L76,129.66,126.34,180Zm134.63-185a4,4,0,0,0-5.66,0L197.94,52.4l-8.2-8.2a28,28,0,0,0-39.6,0L124,70.34l-9.17-9.17a4,4,0,0,0-5.66,5.66l80,80a4,4,0,0,0,5.66-5.66L185.66,132l26.14-26.14a28,28,0,0,0,0-39.6l-8.2-8.2,31.23-31.23A4,4,0,0,0,234.83,21.17ZM212,86.06a19.86,19.86,0,0,1-5.86,14.14L180,126.34,129.66,76,155.8,49.86a20,20,0,0,1,28.28,0l22.06,22.06A19.85,19.85,0,0,1,212,86.06Z"},null,-1),o2=[r2],i2={name:"PhPlugs"},n2=g({...i2,props:{weight:{type:String},size:{type:[String,Number]},color:{type:String},mirrored:{type:Boolean}},setup(c){const o=c,m=s("weight","regular"),h=s("size","1em"),Z=s("color","currentColor"),d=s("mirrored",!1),l=i(()=>{var a;return(a=o.weight)!=null?a:m}),A=i(()=>{var a;return(a=o.size)!=null?a:h}),n=i(()=>{var a;return(a=o.color)!=null?a:Z}),u=i(()=>o.mirrored!==void 0?o.mirrored?"scale(-1, 1)":void 0:d?"scale(-1, 1)":void 0);return(a,p)=>(e(),t("svg",H({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 256 256",width:A.value,height:A.value,fill:n.value,transform:u.value},a.$attrs),[L(a.$slots,"default"),l.value==="bold"?(e(),t("g",D0,F0)):l.value==="duotone"?(e(),t("g",O0,R0)):l.value==="fill"?(e(),t("g",T0,J0)):l.value==="light"?(e(),t("g",Q0,X0)):l.value==="regular"?(e(),t("g",a2,e2)):l.value==="thin"?(e(),t("g",t2,o2)):v("",!0)],16,G0))}}),x2=g({__name:"Project",setup(c){const m=f().params.projectId,{result:h}=C(()=>k.get(m).then(async n=>{const u=await S.get(n.organizationId);return{project:n,organization:u}})),Z=i(()=>{var n,u,a,p;return((n=h.value)==null?void 0:n.organization)&&h.value.project?[{label:"My organizations",path:"/organizations"},{label:(a=(u=h.value)==null?void 0:u.organization)==null?void 0:a.name,path:`/organizations/${(p=h.value)==null?void 0:p.organization.id}`},{label:h.value.project.name,path:`/projects/${h.value.project.id}`}]:void 0}),d=i(()=>{var n;return(n=h.value)==null?void 0:n.organization.billingMetadata}),l=i(()=>{var n;return(n=h.value)==null?void 0:n.organization.id}),A=i(()=>{var n;return(n=h.value)!=null&&n.project?[{name:"Project",items:[{name:"Live",path:"live",icon:g0},{name:"Builds",path:"builds",icon:j},{name:"Connectors",path:"connectors",icon:n2,unavailable:!h.value.organization.featureFlags.CONNECTORS_CONSOLE},{name:"Tables",path:"tables",icon:o1},{name:"API Keys",path:"api-keys",icon:E0},{name:"Env Vars",path:"env-vars",icon:N},{name:"Files",path:"files",icon:f1},{name:"Logs",icon:x,path:"logs"},{name:"Settings",icon:Y1,path:"settings"},{name:"Access Control",icon:P,path:"access-control",beta:!0}]}]:[]});return(n,u)=>{const a=b("router-view");return e(),V(w,null,{content:$(()=>[M(B,null,{default:$(()=>[d.value&&l.value?(e(),V(z,{key:0,"billing-metadata":d.value,"organization-id":l.value},null,8,["billing-metadata","organization-id"])):v("",!0),M(a)]),_:1})]),navbar:$(()=>[M(y,{class:"nav",breadcrumb:Z.value},null,8,["breadcrumb"])]),sidebar:$(()=>[M(_,{class:"sidebar",sections:A.value},null,8,["sections"])]),_:1})}}});export{x2 as default};
//# sourceMappingURL=Project.50f17e90.js.map
