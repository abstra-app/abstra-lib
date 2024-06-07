import{_ as z}from"./DocsButton.vue_vue_type_script_setup_true_lang.5289a2a3.js";import{C as L}from"./ContentLayout.0a4be918.js";import{p as T}from"./popupNotifcation.f9e77086.js";import{a as H}from"./ant-design.7af735be.js";import{a as M}from"./asyncComputed.22f2d2f6.js";import{f as c,f5 as A,d as G,f1 as W,y as F,r as X,b as d,c as m,w as u,am as y,u as i,cW as q,dy as J,cU as P,bF as w,e as I,f4 as O,eV as S,eX as _,cR as Q,cn as Y,e$ as Z,f0 as K,E as ee}from"./outputWidgets.ee3c0009.js";import{C as b}from"./gateway.e3c59c9d.js";import"./index.ef29e995.js";import{D as te}from"./DownloadOutlined.f0b0e5f7.js";import{D as ne}from"./DeleteOutlined.0eca184b.js";import{C as ae}from"./Card.7b1a29b4.js";import"./BookOutlined.4ccaa220.js";import"./index.ddf4c210.js";import"./Modal.ecd5381a.js";import"./record.e9217c59.js";import"./pubsub.e0ba7a2d.js";import"./DeleteOutlined.f8ba9770.js";import"./TabPane.133f759e.js";import"./hasIn.d37c72ab.js";import"./PlusOutlined.cf52d035.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="175779a5-0e3e-424e-a550-450e35e63e24",n._sentryDebugIdIdentifier="sentry-dbid-175779a5-0e3e-424e-a550-450e35e63e24")}catch{}})();var re={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M400 317.7h73.9V656c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V317.7H624c6.7 0 10.4-7.7 6.3-12.9L518.3 163a8 8 0 00-12.6 0l-112 141.7c-4.1 5.3-.4 13 6.3 13zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z"}}]},name:"upload",theme:"outlined"};const oe=re;function E(n){for(var e=1;e<arguments.length;e++){var a=arguments[e]!=null?Object(arguments[e]):{},r=Object.keys(a);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(a).filter(function(s){return Object.getOwnPropertyDescriptor(a,s).enumerable}))),r.forEach(function(s){le(n,s,a[s])})}return n}function le(n,e,a){return e in n?Object.defineProperty(n,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[e]=a,n}var j=function(e,a){var r=E({},e,a.attrs);return c(A,E({},r,{icon:te}),null)};j.displayName="DownloadOutlined";j.inheritAttrs=!1;const ie=j;function x(n){for(var e=1;e<arguments.length;e++){var a=arguments[e]!=null?Object(arguments[e]):{},r=Object.keys(a);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(a).filter(function(s){return Object.getOwnPropertyDescriptor(a,s).enumerable}))),r.forEach(function(s){se(n,s,a[s])})}return n}function se(n,e,a){return e in n?Object.defineProperty(n,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[e]=a,n}var C=function(e,a){var r=x({},e,a.attrs);return c(A,x({},r,{icon:oe}),null)};C.displayName="UploadOutlined";C.inheritAttrs=!1;const ce=C;class ${constructor(e){this.projectId=e}static fromProjectId(e){return new $(e)}async list(){return b.get(`projects/${this.projectId}/files`)}async upload(e){const a={"Content-Type":"multipart/form-data"};return b.post(`projects/${this.projectId}/files/upload?path=${encodeURIComponent(e.name)}`,e,a)}async download(e){return b.getBlob(`projects/${this.projectId}/files/download?path=${encodeURIComponent(e)}`)}async delete(e){return b.delete(`projects/${this.projectId}/files?path=${encodeURIComponent(e)}`)}async move(e,a){return b.patch(`projects/${this.projectId}/files?path=${encodeURIComponent(e)}&newPath=${encodeURIComponent(a)}`,{})}}const ue=n=>(Z("data-v-d987b30a"),n=n(),K(),n),de=ue(()=>I("br",null,null,-1)),pe={key:0},fe={key:0,class:"file-size"},me=G({__name:"Files",setup(n){const a=W().params.projectId,r=$.fromProjectId(a),{loading:s,result:N,refetch:k}=M(()=>r.list());function U(t){var l,o;return{key:t.path,title:t.name,isLeaf:t.type==="file",file:t,children:t.type==="file"?[]:(o=(l=t.children)==null?void 0:l.map(U))!=null?o:[]}}const p=F(()=>{var t;return(t=N.value)==null?void 0:t.map(U)}),D=t=>{var l,o;return t.isLeaf?1:(o=(l=t.children)==null?void 0:l.reduce((f,h)=>f+D(h),0))!=null?o:0},v=F(()=>p.value?p==null?void 0:p.value.reduce((t,l)=>t+D(l),0):0),g=X(!1);function R(){const t=document.createElement("input");t.type="file",t.onchange=async()=>{var o;const l=(o=t.files)==null?void 0:o[0];if(!!l)try{g.value=!0,await r.upload(l),await k()}catch{T("Failed to upload file","File already exists")}finally{g.value=!1}},t.click()}async function V(t){if(!t)return;const l=await r.download(t.path),o=document.createElement("a");o.href=URL.createObjectURL(l),o.download=t.name,o.click()}async function B(t){!t||await H("Are you sure you want to delete this file?")&&(await r.delete(t.path),await k())}return(t,l)=>(d(),m(L,null,{default:u(()=>[c(i(q),null,{default:u(()=>[y("Files")]),_:1}),c(i(P),null,{default:u(()=>[y(" Here you can upload, download and delete files in your persistent dir."),de,y(" Files can be used in your scripts. "),c(z,{path:"cloud/files"}),J(t.$slots,"description",{},void 0,!0)]),_:3}),c(i(w),{type:"primary",loading:g.value,onClick:R},{default:u(()=>[c(i(ce)),y(" Upload ")]),_:1},8,["loading"]),c(i(ae),null,{default:u(()=>[v.value>0?(d(),m(i(P),{key:0},{default:u(()=>[I("b",null,[y(O(v.value)+" file",1),v.value!==1?(d(),S("span",pe,"s")):_("",!0)])]),_:1})):_("",!0),p.value&&p.value.length>0?(d(),m(i(Q),{key:1,"tree-data":p.value,selectable:!1},{title:u(({title:o,isLeaf:f,file:h})=>[I("span",null,[y(O(o)+" ",1),f?(d(),S("span",fe,"("+O(h.size)+")",1)):_("",!0)]),f?(d(),m(i(w),{key:0,type:"text",size:"small",style:{float:"inline-end"},onClick:()=>V(h)},{default:u(()=>[c(i(ie))]),_:2},1032,["onClick"])):_("",!0),f?(d(),m(i(w),{key:1,type:"text",size:"small",style:{float:"inline-end"},onClick:()=>B(h)},{default:u(()=>[c(i(ne))]),_:2},1032,["onClick"])):_("",!0)]),_:1},8,["tree-data"])):(d(),m(i(Y),{key:2,description:i(s)?"Loading...":"No files"},null,8,["description"]))]),_:1})]),_:3}))}});const Ae=ee(me,[["__scopeId","data-v-d987b30a"]]);export{Ae as default};
//# sourceMappingURL=Files.5a0d2a22.js.map
