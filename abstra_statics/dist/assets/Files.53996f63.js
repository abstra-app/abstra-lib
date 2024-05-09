import{_ as T}from"./DocsButton.vue_vue_type_script_setup_true_lang.273d3e2a.js";import{C as z}from"./ContentLayout.52723b88.js";import{p as L}from"./popupNotifcation.d7d31af4.js";import{a as H}from"./ant-design.b167c820.js";import{a as M}from"./asyncComputed.1c2e733f.js";import{f as c,eI as E,d as G,eE as J,J as P,r as q,b as d,c as m,w as u,as as y,u as i,dl as Q,bG as w,e as I,eH as O,ew as F,ey as b,cO as W,cm as X,eC as Y,eD as Z,x as K}from"./outputWidgets.f4ff73cb.js";import{C as _}from"./router.579c91e6.js";import"./index.4ca46dd8.js";import{D as ee}from"./DownloadOutlined.f0b0e5f7.js";import{D as te}from"./DeleteOutlined.7a408d55.js";import{A as ne}from"./Title.8356c432.js";import{A as S}from"./Paragraph.0762ff9a.js";import{C as ae}from"./Card.c86b7818.js";import"./BookOutlined.eb157924.js";import"./index.81bff51e.js";import"./Modal.fb9d97fb.js";import"./Form.c8ea7c3d.js";import"./hasIn.c05f2ad3.js";import"./record.06ee4427.js";import"./pubsub.f8e50115.js";import"./DeleteOutlined.f8ba9770.js";import"./Base.2cf6cca2.js";import"./TabPane.12230f18.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="0f7f6b20-5b25-4578-baa9-f9a5a95af5c6",n._sentryDebugIdIdentifier="sentry-dbid-0f7f6b20-5b25-4578-baa9-f9a5a95af5c6")}catch{}})();var re={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M400 317.7h73.9V656c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V317.7H624c6.7 0 10.4-7.7 6.3-12.9L518.3 163a8 8 0 00-12.6 0l-112 141.7c-4.1 5.3-.4 13 6.3 13zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z"}}]},name:"upload",theme:"outlined"};const oe=re;function A(n){for(var e=1;e<arguments.length;e++){var a=arguments[e]!=null?Object(arguments[e]):{},r=Object.keys(a);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(a).filter(function(s){return Object.getOwnPropertyDescriptor(a,s).enumerable}))),r.forEach(function(s){le(n,s,a[s])})}return n}function le(n,e,a){return e in n?Object.defineProperty(n,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[e]=a,n}var j=function(e,a){var r=A({},e,a.attrs);return c(E,A({},r,{icon:ee}),null)};j.displayName="DownloadOutlined";j.inheritAttrs=!1;const ie=j;function x(n){for(var e=1;e<arguments.length;e++){var a=arguments[e]!=null?Object(arguments[e]):{},r=Object.keys(a);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(a).filter(function(s){return Object.getOwnPropertyDescriptor(a,s).enumerable}))),r.forEach(function(s){se(n,s,a[s])})}return n}function se(n,e,a){return e in n?Object.defineProperty(n,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[e]=a,n}var C=function(e,a){var r=x({},e,a.attrs);return c(E,x({},r,{icon:oe}),null)};C.displayName="UploadOutlined";C.inheritAttrs=!1;const ce=C;class k{constructor(e){this.projectId=e}static fromProjectId(e){return new k(e)}async list(){return _.get(`projects/${this.projectId}/files`)}async upload(e){const a={"Content-Type":"multipart/form-data"};return _.post(`projects/${this.projectId}/files/upload?path=${encodeURIComponent(e.name)}`,e,a)}async download(e){return _.getBlob(`projects/${this.projectId}/files/download?path=${encodeURIComponent(e)}`)}async delete(e){return _.delete(`projects/${this.projectId}/files?path=${encodeURIComponent(e)}`)}async move(e,a){return _.patch(`projects/${this.projectId}/files?path=${encodeURIComponent(e)}&newPath=${encodeURIComponent(a)}`,{})}}const ue=n=>(Y("data-v-d987b30a"),n=n(),Z(),n),de=ue(()=>I("br",null,null,-1)),pe={key:0},fe={key:0,class:"file-size"},me=G({__name:"Files",setup(n){const a=J().params.projectId,r=k.fromProjectId(a),{loading:s,result:N,refetch:$}=M(()=>r.list());function D(t){var l,o;return{key:t.path,title:t.name,isLeaf:t.type==="file",file:t,children:t.type==="file"?[]:(o=(l=t.children)==null?void 0:l.map(D))!=null?o:[]}}const p=P(()=>{var t;return(t=N.value)==null?void 0:t.map(D)}),U=t=>{var l,o;return t.isLeaf?1:(o=(l=t.children)==null?void 0:l.reduce((f,h)=>f+U(h),0))!=null?o:0},g=P(()=>p.value?p==null?void 0:p.value.reduce((t,l)=>t+U(l),0):0),v=q(!1);function R(){const t=document.createElement("input");t.type="file",t.onchange=async()=>{var o;const l=(o=t.files)==null?void 0:o[0];if(!!l)try{v.value=!0,await r.upload(l),await $()}catch{L("Failed to upload file","File already exists")}finally{v.value=!1}},t.click()}async function V(t){if(!t)return;const l=await r.download(t.path),o=document.createElement("a");o.href=URL.createObjectURL(l),o.download=t.name,o.click()}async function B(t){!t||await H("Are you sure you want to delete this file?")&&(await r.delete(t.path),await $())}return(t,l)=>(d(),m(z,null,{default:u(()=>[c(i(ne),null,{default:u(()=>[y("Files")]),_:1}),c(i(S),null,{default:u(()=>[y(" Here you can upload, download and delete files in your persistent dir."),de,y(" Files can be used in your scripts. "),c(T,{path:"cloud/files"}),Q(t.$slots,"description",{},void 0,!0)]),_:3}),c(i(w),{type:"primary",loading:v.value,onClick:R},{default:u(()=>[c(i(ce)),y(" Upload ")]),_:1},8,["loading"]),c(i(ae),null,{default:u(()=>[g.value>0?(d(),m(i(S),{key:0},{default:u(()=>[I("b",null,[y(O(g.value)+" file",1),g.value!==1?(d(),F("span",pe,"s")):b("",!0)])]),_:1})):b("",!0),p.value&&p.value.length>0?(d(),m(i(W),{key:1,"tree-data":p.value,selectable:!1},{title:u(({title:o,isLeaf:f,file:h})=>[I("span",null,[y(O(o)+" ",1),f?(d(),F("span",fe,"("+O(h.size)+")",1)):b("",!0)]),f?(d(),m(i(w),{key:0,type:"text",size:"small",style:{float:"inline-end"},onClick:()=>V(h)},{default:u(()=>[c(i(ie))]),_:2},1032,["onClick"])):b("",!0),f?(d(),m(i(w),{key:1,type:"text",size:"small",style:{float:"inline-end"},onClick:()=>B(h)},{default:u(()=>[c(i(te))]),_:2},1032,["onClick"])):b("",!0)]),_:1},8,["tree-data"])):(d(),m(i(X),{key:2,description:i(s)?"Loading...":"No files"},null,8,["description"]))]),_:1})]),_:3}))}});const Ve=K(me,[["__scopeId","data-v-d987b30a"]]);export{Ve as default};
//# sourceMappingURL=Files.53996f63.js.map
