import{f as c,eG as x,d as T,eA as z,H as A,r as H,b as u,c as m,w as d,u as l,aq as y,dj as L,bE as w,e as j,eD as O,eu as F,ew as _,cK as M,ci as G,cA as q,eE as J,eF as Q,v as W}from"./outputWidgets.bcc55d62.js";import{C as b}from"./router.bba84ca4.js";import{p as X}from"./popupNotifcation.d79eb8c0.js";import"./index.e7ff4833.js";import{a as Y}from"./asyncComputed.522271b4.js";import{a as Z}from"./ant-design.37022b14.js";import{_ as K}from"./DocsButton.vue_vue_type_script_setup_true_lang.3f334ae6.js";import{D as ee}from"./DownloadOutlined.f0b0e5f7.js";import{D as te}from"./DeleteOutlined.c23acc7f.js";import{A as ne}from"./Title.cba782a2.js";import{A as P}from"./Paragraph.061ecf6b.js";import{C as re}from"./Card.6799d6a6.js";import"./Form.9642dc84.js";import"./hasIn.4a295b04.js";import"./index.cf4c23b9.js";import"./record.a263f53d.js";import"./pubsub.bfb62ff6.js";import"./index.e6fdef6e.js";import"./Modal.c1568b18.js";import"./BookOutlined.d81490c0.js";import"./DeleteOutlined.f8ba9770.js";import"./Text.2f2beebe.js";import"./index.fdec5cef.js";import"./TabPane.6e1193bb.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="5f6694ce-25ec-43d2-a34f-1344b5d680ed",n._sentryDebugIdIdentifier="sentry-dbid-5f6694ce-25ec-43d2-a34f-1344b5d680ed")}catch{}})();var oe={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M400 317.7h73.9V656c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V317.7H624c6.7 0 10.4-7.7 6.3-12.9L518.3 163a8 8 0 00-12.6 0l-112 141.7c-4.1 5.3-.4 13 6.3 13zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z"}}]},name:"upload",theme:"outlined"};const ae=oe;function S(n){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?Object(arguments[e]):{},o=Object.keys(r);typeof Object.getOwnPropertySymbols=="function"&&(o=o.concat(Object.getOwnPropertySymbols(r).filter(function(s){return Object.getOwnPropertyDescriptor(r,s).enumerable}))),o.forEach(function(s){le(n,s,r[s])})}return n}function le(n,e,r){return e in n?Object.defineProperty(n,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[e]=r,n}var I=function(e,r){var o=S({},e,r.attrs);return c(x,S({},o,{icon:ee}),null)};I.displayName="DownloadOutlined";I.inheritAttrs=!1;const ie=I;function E(n){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?Object(arguments[e]):{},o=Object.keys(r);typeof Object.getOwnPropertySymbols=="function"&&(o=o.concat(Object.getOwnPropertySymbols(r).filter(function(s){return Object.getOwnPropertyDescriptor(r,s).enumerable}))),o.forEach(function(s){se(n,s,r[s])})}return n}function se(n,e,r){return e in n?Object.defineProperty(n,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[e]=r,n}var C=function(e,r){var o=E({},e,r.attrs);return c(x,E({},o,{icon:ae}),null)};C.displayName="UploadOutlined";C.inheritAttrs=!1;const ce=C;class k{constructor(e){this.projectId=e}static fromProjectId(e){return new k(e)}async list(){return b.get(`projects/${this.projectId}/files`)}async upload(e){const r={"Content-Type":"multipart/form-data"};return b.post(`projects/${this.projectId}/files/upload?path=${encodeURIComponent(e.name)}`,e,r)}async download(e){return b.getBlob(`projects/${this.projectId}/files/download?path=${encodeURIComponent(e)}`)}async delete(e){return b.delete(`projects/${this.projectId}/files?path=${encodeURIComponent(e)}`)}async move(e,r){return b.patch(`projects/${this.projectId}/files?path=${encodeURIComponent(e)}&newPath=${encodeURIComponent(r)}`,{})}}const de=n=>(J("data-v-ef5665c8"),n=n(),Q(),n),ue=de(()=>j("br",null,null,-1)),pe={key:0},fe={key:0,class:"file-size"},me=T({__name:"Files",setup(n){const r=z().params.projectId,o=k.fromProjectId(r),{loading:s,result:N,refetch:$}=Y(()=>o.list());function D(t){var i,a;return{key:t.path,title:t.name,isLeaf:t.type==="file",file:t,children:t.type==="file"?[]:(a=(i=t.children)==null?void 0:i.map(D))!=null?a:[]}}const p=A(()=>{var t;return(t=N.value)==null?void 0:t.map(D)}),U=t=>{var i,a;return t.isLeaf?1:(a=(i=t.children)==null?void 0:i.reduce((f,h)=>f+U(h),0))!=null?a:0},v=A(()=>p.value?p==null?void 0:p.value.reduce((t,i)=>t+U(i),0):0),g=H(!1);function R(){const t=document.createElement("input");t.type="file",t.onchange=async()=>{var a;const i=(a=t.files)==null?void 0:a[0];if(!!i)try{g.value=!0,await o.upload(i),await $()}catch{X("Failed to upload file","File already exists")}finally{g.value=!1}},t.click()}async function V(t){if(!t)return;const i=await o.download(t.path),a=document.createElement("a");a.href=URL.createObjectURL(i),a.download=t.name,a.click()}async function B(t){!t||await Z("Are you sure you want to delete this file?")&&(await o.delete(t.path),await $())}return(t,i)=>(u(),m(l(q),{direction:"vertical"},{default:d(()=>[c(l(ne),null,{default:d(()=>[y("Files")]),_:1}),c(l(P),null,{default:d(()=>[y(" Here you can upload, download and delete files in your persistent dir."),ue,y(" Files can be used in your scripts. "),c(K,{path:"files"}),L(t.$slots,"description",{},void 0,!0)]),_:3}),c(l(w),{type:"primary",loading:g.value,onClick:R},{default:d(()=>[c(l(ce)),y(" Upload ")]),_:1},8,["loading"]),c(l(re),null,{default:d(()=>[v.value>0?(u(),m(l(P),{key:0},{default:d(()=>[j("b",null,[y(O(v.value)+" file",1),v.value!==1?(u(),F("span",pe,"s")):_("",!0)])]),_:1})):_("",!0),p.value&&p.value.length>0?(u(),m(l(M),{key:1,"tree-data":p.value,selectable:!1},{title:d(({title:a,isLeaf:f,file:h})=>[j("span",null,[y(O(a)+" ",1),f?(u(),F("span",fe,"("+O(h.size)+")",1)):_("",!0)]),f?(u(),m(l(w),{key:0,type:"text",size:"small",style:{float:"inline-end"},onClick:()=>V(h)},{default:d(()=>[c(l(ie))]),_:2},1032,["onClick"])):_("",!0),f?(u(),m(l(w),{key:1,type:"text",size:"small",style:{float:"inline-end"},onClick:()=>B(h)},{default:d(()=>[c(l(te))]),_:2},1032,["onClick"])):_("",!0)]),_:1},8,["tree-data"])):(u(),m(l(G),{key:2,description:l(s)?"Loading...":"No files"},null,8,["description"]))]),_:1})]),_:3}))}});const Be=W(me,[["__scopeId","data-v-ef5665c8"]]);export{Be as default};
//# sourceMappingURL=Files.6565c16f.js.map
