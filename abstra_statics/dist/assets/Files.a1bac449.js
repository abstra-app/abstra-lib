import{f as c,eG as x,d as V,eB as z,H as F,r as H,b as u,c as m,w as d,u as l,ar as y,dp as L,bG as w,e as I,eD as O,ev as P,ex as _,cO as M,cm as G,cE as q,eE as J,eF as Q,v as W}from"./outputWidgets.23a77d09.js";import{C as v}from"./router.5013253c.js";import{p as X}from"./popupNotifcation.8aa8d2a6.js";import"./index.fb6a8be1.js";import{a as Y}from"./asyncComputed.87bcbfab.js";import{a as Z}from"./ant-design.7692a78f.js";import{_ as K}from"./DocsButton.vue_vue_type_script_setup_true_lang.eb5c86c6.js";import{D as ee}from"./DownloadOutlined.f0b0e5f7.js";import{D as te}from"./DeleteOutlined.754f89dc.js";import{A as ne}from"./Title.61f38aef.js";import{A as S}from"./Paragraph.a35411f7.js";import{C as re}from"./Card.db9c9118.js";import"./Form.1abced8c.js";import"./hasIn.897d62dc.js";import"./index.cf4c23b9.js";import"./record.99cdbef5.js";import"./pubsub.a21150d7.js";import"./index.c9455a12.js";import"./Modal.e2700fe9.js";import"./DeleteOutlined.f8ba9770.js";import"./Base.a26f807d.js";import"./Typography.d216066f.js";import"./TabPane.bd6cf25b.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="d4fbf41a-f8ce-4148-ae0e-0fa51808d33a",n._sentryDebugIdIdentifier="sentry-dbid-d4fbf41a-f8ce-4148-ae0e-0fa51808d33a")}catch{}})();var ae={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M400 317.7h73.9V656c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V317.7H624c6.7 0 10.4-7.7 6.3-12.9L518.3 163a8 8 0 00-12.6 0l-112 141.7c-4.1 5.3-.4 13 6.3 13zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z"}}]},name:"upload",theme:"outlined"};const oe=ae;function A(n){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?Object(arguments[e]):{},a=Object.keys(r);typeof Object.getOwnPropertySymbols=="function"&&(a=a.concat(Object.getOwnPropertySymbols(r).filter(function(s){return Object.getOwnPropertyDescriptor(r,s).enumerable}))),a.forEach(function(s){le(n,s,r[s])})}return n}function le(n,e,r){return e in n?Object.defineProperty(n,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[e]=r,n}var j=function(e,r){var a=A({},e,r.attrs);return c(x,A({},a,{icon:ee}),null)};j.displayName="DownloadOutlined";j.inheritAttrs=!1;const ie=j;function E(n){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?Object(arguments[e]):{},a=Object.keys(r);typeof Object.getOwnPropertySymbols=="function"&&(a=a.concat(Object.getOwnPropertySymbols(r).filter(function(s){return Object.getOwnPropertyDescriptor(r,s).enumerable}))),a.forEach(function(s){se(n,s,r[s])})}return n}function se(n,e,r){return e in n?Object.defineProperty(n,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[e]=r,n}var C=function(e,r){var a=E({},e,r.attrs);return c(x,E({},a,{icon:oe}),null)};C.displayName="UploadOutlined";C.inheritAttrs=!1;const ce=C;class k{constructor(e){this.projectId=e}static fromProjectId(e){return new k(e)}async list(){return v.get(`projects/${this.projectId}/files`)}async upload(e){const r={"Content-Type":"multipart/form-data"};return v.post(`projects/${this.projectId}/files/upload?path=${encodeURIComponent(e.name)}`,e,r)}async download(e){return v.getBlob(`projects/${this.projectId}/files/download?path=${encodeURIComponent(e)}`)}async delete(e){return v.delete(`projects/${this.projectId}/files?path=${encodeURIComponent(e)}`)}async move(e,r){return v.patch(`projects/${this.projectId}/files?path=${encodeURIComponent(e)}&newPath=${encodeURIComponent(r)}`,{})}}const de=n=>(J("data-v-ef5665c8"),n=n(),Q(),n),ue=de(()=>I("br",null,null,-1)),pe={key:0},fe={key:0,class:"file-size"},me=V({__name:"Files",setup(n){const r=z().params.projectId,a=k.fromProjectId(r),{loading:s,result:N,refetch:$}=Y(()=>a.list());function D(t){var i,o;return{key:t.path,title:t.name,isLeaf:t.type==="file",file:t,children:t.type==="file"?[]:(o=(i=t.children)==null?void 0:i.map(D))!=null?o:[]}}const p=F(()=>{var t;return(t=N.value)==null?void 0:t.map(D)}),U=t=>{var i,o;return t.isLeaf?1:(o=(i=t.children)==null?void 0:i.reduce((f,h)=>f+U(h),0))!=null?o:0},b=F(()=>p.value?p==null?void 0:p.value.reduce((t,i)=>t+U(i),0):0),g=H(!1);function B(){const t=document.createElement("input");t.type="file",t.onchange=async()=>{var o;const i=(o=t.files)==null?void 0:o[0];if(!!i)try{g.value=!0,await a.upload(i),await $()}catch{X("Failed to upload file","File already exists")}finally{g.value=!1}},t.click()}async function R(t){if(!t)return;const i=await a.download(t.path),o=document.createElement("a");o.href=URL.createObjectURL(i),o.download=t.name,o.click()}async function T(t){!t||await Z("Are you sure you want to delete this file?")&&(await a.delete(t.path),await $())}return(t,i)=>(u(),m(l(q),{direction:"vertical"},{default:d(()=>[c(l(ne),null,{default:d(()=>[y("Files")]),_:1}),c(l(S),null,{default:d(()=>[y(" Here you can upload, download and delete files in your persistent dir."),ue,y(" Files can be used in your scripts. "),c(K,{path:"files"}),L(t.$slots,"description",{},void 0,!0)]),_:3}),c(l(w),{type:"primary",loading:g.value,onClick:B},{default:d(()=>[c(l(ce)),y(" Upload ")]),_:1},8,["loading"]),c(l(re),null,{default:d(()=>[b.value>0?(u(),m(l(S),{key:0},{default:d(()=>[I("b",null,[y(O(b.value)+" file",1),b.value!==1?(u(),P("span",pe,"s")):_("",!0)])]),_:1})):_("",!0),p.value&&p.value.length>0?(u(),m(l(M),{key:1,"tree-data":p.value,selectable:!1},{title:d(({title:o,isLeaf:f,file:h})=>[I("span",null,[y(O(o)+" ",1),f?(u(),P("span",fe,"("+O(h.size)+")",1)):_("",!0)]),f?(u(),m(l(w),{key:0,type:"text",size:"small",style:{float:"inline-end"},onClick:()=>R(h)},{default:d(()=>[c(l(ie))]),_:2},1032,["onClick"])):_("",!0),f?(u(),m(l(w),{key:1,type:"text",size:"small",style:{float:"inline-end"},onClick:()=>T(h)},{default:d(()=>[c(l(te))]),_:2},1032,["onClick"])):_("",!0)]),_:1},8,["tree-data"])):(u(),m(l(G),{key:2,description:l(s)?"Loading...":"No files"},null,8,["description"]))]),_:1})]),_:3}))}});const Re=W(me,[["__scopeId","data-v-ef5665c8"]]);export{Re as default};
//# sourceMappingURL=Files.a1bac449.js.map
