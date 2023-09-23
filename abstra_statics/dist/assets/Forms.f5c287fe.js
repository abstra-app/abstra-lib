import{d as b,ex as y,H as h,b as g,c as w,u as _}from"./registerWidgets.32a97516.js";import{a as F,e as C,b as k}from"./icons.1657b79d.js";import{a as x}from"./asyncComputed.9b3e19e4.js";import{F as l}from"./forms.c60c7fb5.js";import{R as v}from"./RuntimeList.99e238cd.js";import"./activeRecord.2e436871.js";import"./pubsub.15b3367b.js";import"./CircularLoading.d58b4e70.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[n]="3c073a4d-cc52-4150-82ca-6b4dbd56bde0",a._sentryDebugIdIdentifier="sentry-dbid-3c073a4d-cc52-4150-82ca-6b4dbd56bde0")}catch{}})();const N=b({__name:"Forms",setup(a){const n=y(),{loading:c,result:r,refetch:i}=x(()=>l.list()),d=({key:e})=>n.push({path:`/_editor/form/${encodeURIComponent(e)}`}),m=async({key:e})=>{var o,t;await((t=(o=r.value)==null?void 0:o.find(s=>s.path===e))==null?void 0:t.duplicate()),i()},u=async()=>{const e=await l.create();d({key:e.path})},p=async({key:e})=>{var o,t;confirm("Are you sure you want to delete this form?")&&(await((t=(o=r.value)==null?void 0:o.find(s=>s.path===e))==null?void 0:t.delete()),i())},f=h(()=>{var e,o;return{columns:[{name:"Form Name"},{name:"Path"},{name:"Form Actions"}],rows:(o=(e=r.value)==null?void 0:e.map(t=>({key:t.path,cells:[{text:t.title,classes:["title","centered"],link:`/_editor/form/${encodeURIComponent(t.path)}`},{text:t.path},{text:"",classes:["centered"],actions:[{icon:F,label:"Delete",onClick:p,dangerous:!0},{icon:C,label:"Edit Form",onClick:d},{icon:k,label:"Duplicate",onClick:m}]}]})))!=null?o:[]}});return(e,o)=>(g(),w(v,{loading:_(c),title:"Dynamic Python forms",description:"Create forms with advanced logic, easy integrations and custom branding.","create-button-text":"Create Form","empty-title":"No forms here yet","video-url":"https://www.youtube.com/embed/p6xf8PxL2Yg",table:f.value,onCreate:u},null,8,["loading","table"]))}});export{N as default};
//# sourceMappingURL=Forms.f5c287fe.js.map
