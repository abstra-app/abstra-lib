import{d as y,ex as b,F as h,b as g,u as w,bu as _}from"./registerWidgets.65ad7269.js";import{e as F,f as C,g as k}from"./icons.af1545d2.js";import{a as v}from"./asyncComputed.bc9bb426.js";import{F as m}from"./forms.536560b8.js";import{R as x}from"./RuntimeList.ac15a6e1.js";import"./activeRecord.7584f904.js";import"./pubsub.ae54b92c.js";import"./DropdownMenu.4f61f503.js";import"./CircularLoading.bb6b6696.js";import"./lottie.ac26577d.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[n]="4be0334c-cc3e-4e78-8216-f880c5c638f3",a._sentryDebugIdIdentifier="sentry-dbid-4be0334c-cc3e-4e78-8216-f880c5c638f3")}catch{}})();const G=y({__name:"Forms",setup(a){const n=b(),{loading:c,result:r,refetch:i}=v(()=>m.list()),l=({key:e})=>n.push({path:`/_editor/form/${encodeURIComponent(e)}`}),d=async({key:e})=>{var o,t;await((t=(o=r.value)==null?void 0:o.find(s=>s.path===e))==null?void 0:t.duplicate()),i()},u=async()=>{const e=await m.create();l({key:e.path})},p=async({key:e})=>{var o,t;confirm("Are you sure you want to delete this form?")&&(await((t=(o=r.value)==null?void 0:o.find(s=>s.path===e))==null?void 0:t.delete()),i())},f=h(()=>{var e,o;return{columns:[{name:"Form Name"},{name:"Path"},{name:"Form Actions"}],rows:(o=(e=r.value)==null?void 0:e.map(t=>({key:t.path,cells:[{text:t.title,classes:["title","centered"],link:`/_editor/form/${encodeURIComponent(t.path)}`},{text:t.path},{text:"",classes:["centered"],actions:[{icon:F,label:"Delete",onClick:p,dangerous:!0},{icon:C,label:"Edit Form",onClick:l},{icon:k,label:"Duplicate",onClick:d}]}]})))!=null?o:[]}});return(e,o)=>(g(),w(x,{loading:_(c),title:"Dynamic Python forms",description:"Create forms with advanced logic, easy integrations and custom branding.","create-button-text":"Create Form","empty-title":"No forms here yet","video-url":"https://www.youtube.com/embed/tN7SRGmVPwc",table:f.value,onCreate:u},null,8,["loading","table"]))}});export{G as default};
//# sourceMappingURL=Forms.9feadb2c.js.map
