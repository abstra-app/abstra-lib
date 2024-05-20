import{_ as T}from"./DocsButton.vue_vue_type_script_setup_true_lang.a4dc3389.js";import{C as z}from"./ContentLayout.eb5bb0f7.js";import{p as L}from"./popupNotifcation.c27fa04b.js";import{a as H}from"./ant-design.61a9861a.js";import{a as M}from"./asyncComputed.014cb2d2.js";import{f as c,eI as E,d as G,eE as J,J as P,r as q,b as u,c as m,w as d,as as y,u as i,dn as Q,bG as w,e as I,eH as O,ew as F,ey as b,cO as W,cm as X,eC as Y,eD as Z,x as K}from"./outputWidgets.a6391ff6.js";import{C as _}from"./router.4c5b6077.js";import"./index.dae9c764.js";import{D as ee}from"./DownloadOutlined.f0b0e5f7.js";import{D as te}from"./DeleteOutlined.49c196f7.js";import{A as ne}from"./Title.bfddfcf1.js";import{A as S}from"./Paragraph.d62f2d21.js";import{C as re}from"./Card.8446571f.js";import"./BookOutlined.5a109858.js";import"./index.727b862e.js";import"./Modal.cad7240a.js";import"./Form.16199527.js";import"./hasIn.11d0d7c4.js";import"./record.77978346.js";import"./pubsub.ccf2b86e.js";import"./DeleteOutlined.f8ba9770.js";import"./Base.4c97c3d8.js";import"./TabPane.48453d99.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="b9c760f0-60fd-420b-9926-33404963bdf5",n._sentryDebugIdIdentifier="sentry-dbid-b9c760f0-60fd-420b-9926-33404963bdf5")}catch{}})();var oe={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M400 317.7h73.9V656c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V317.7H624c6.7 0 10.4-7.7 6.3-12.9L518.3 163a8 8 0 00-12.6 0l-112 141.7c-4.1 5.3-.4 13 6.3 13zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z"}}]},name:"upload",theme:"outlined"};const ae=oe;function A(n){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?Object(arguments[e]):{},o=Object.keys(r);typeof Object.getOwnPropertySymbols=="function"&&(o=o.concat(Object.getOwnPropertySymbols(r).filter(function(s){return Object.getOwnPropertyDescriptor(r,s).enumerable}))),o.forEach(function(s){le(n,s,r[s])})}return n}function le(n,e,r){return e in n?Object.defineProperty(n,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[e]=r,n}var j=function(e,r){var o=A({},e,r.attrs);return c(E,A({},o,{icon:ee}),null)};j.displayName="DownloadOutlined";j.inheritAttrs=!1;const ie=j;function x(n){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?Object(arguments[e]):{},o=Object.keys(r);typeof Object.getOwnPropertySymbols=="function"&&(o=o.concat(Object.getOwnPropertySymbols(r).filter(function(s){return Object.getOwnPropertyDescriptor(r,s).enumerable}))),o.forEach(function(s){se(n,s,r[s])})}return n}function se(n,e,r){return e in n?Object.defineProperty(n,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[e]=r,n}var C=function(e,r){var o=x({},e,r.attrs);return c(E,x({},o,{icon:ae}),null)};C.displayName="UploadOutlined";C.inheritAttrs=!1;const ce=C;class k{constructor(e){this.projectId=e}static fromProjectId(e){return new k(e)}async list(){return _.get(`projects/${this.projectId}/files`)}async upload(e){const r={"Content-Type":"multipart/form-data"};return _.post(`projects/${this.projectId}/files/upload?path=${encodeURIComponent(e.name)}`,e,r)}async download(e){return _.getBlob(`projects/${this.projectId}/files/download?path=${encodeURIComponent(e)}`)}async delete(e){return _.delete(`projects/${this.projectId}/files?path=${encodeURIComponent(e)}`)}async move(e,r){return _.patch(`projects/${this.projectId}/files?path=${encodeURIComponent(e)}&newPath=${encodeURIComponent(r)}`,{})}}const de=n=>(Y("data-v-d987b30a"),n=n(),Z(),n),ue=de(()=>I("br",null,null,-1)),pe={key:0},fe={key:0,class:"file-size"},me=G({__name:"Files",setup(n){const r=J().params.projectId,o=k.fromProjectId(r),{loading:s,result:N,refetch:$}=M(()=>o.list());function D(t){var l,a;return{key:t.path,title:t.name,isLeaf:t.type==="file",file:t,children:t.type==="file"?[]:(a=(l=t.children)==null?void 0:l.map(D))!=null?a:[]}}const p=P(()=>{var t;return(t=N.value)==null?void 0:t.map(D)}),U=t=>{var l,a;return t.isLeaf?1:(a=(l=t.children)==null?void 0:l.reduce((f,h)=>f+U(h),0))!=null?a:0},g=P(()=>p.value?p==null?void 0:p.value.reduce((t,l)=>t+U(l),0):0),v=q(!1);function R(){const t=document.createElement("input");t.type="file",t.onchange=async()=>{var a;const l=(a=t.files)==null?void 0:a[0];if(!!l)try{v.value=!0,await o.upload(l),await $()}catch{L("Failed to upload file","File already exists")}finally{v.value=!1}},t.click()}async function V(t){if(!t)return;const l=await o.download(t.path),a=document.createElement("a");a.href=URL.createObjectURL(l),a.download=t.name,a.click()}async function B(t){!t||await H("Are you sure you want to delete this file?")&&(await o.delete(t.path),await $())}return(t,l)=>(u(),m(z,null,{default:d(()=>[c(i(ne),null,{default:d(()=>[y("Files")]),_:1}),c(i(S),null,{default:d(()=>[y(" Here you can upload, download and delete files in your persistent dir."),ue,y(" Files can be used in your scripts. "),c(T,{path:"cloud/files"}),Q(t.$slots,"description",{},void 0,!0)]),_:3}),c(i(w),{type:"primary",loading:v.value,onClick:R},{default:d(()=>[c(i(ce)),y(" Upload ")]),_:1},8,["loading"]),c(i(re),null,{default:d(()=>[g.value>0?(u(),m(i(S),{key:0},{default:d(()=>[I("b",null,[y(O(g.value)+" file",1),g.value!==1?(u(),F("span",pe,"s")):b("",!0)])]),_:1})):b("",!0),p.value&&p.value.length>0?(u(),m(i(W),{key:1,"tree-data":p.value,selectable:!1},{title:d(({title:a,isLeaf:f,file:h})=>[I("span",null,[y(O(a)+" ",1),f?(u(),F("span",fe,"("+O(h.size)+")",1)):b("",!0)]),f?(u(),m(i(w),{key:0,type:"text",size:"small",style:{float:"inline-end"},onClick:()=>V(h)},{default:d(()=>[c(i(ie))]),_:2},1032,["onClick"])):b("",!0),f?(u(),m(i(w),{key:1,type:"text",size:"small",style:{float:"inline-end"},onClick:()=>B(h)},{default:d(()=>[c(i(te))]),_:2},1032,["onClick"])):b("",!0)]),_:1},8,["tree-data"])):(u(),m(i(X),{key:2,description:i(s)?"Loading...":"No files"},null,8,["description"]))]),_:1})]),_:3}))}});const Ve=K(me,[["__scopeId","data-v-d987b30a"]]);export{Ve as default};
//# sourceMappingURL=Files.d5e61d2b.js.map
