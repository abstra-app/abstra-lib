import{d as b,ey as y,H as h,b as g,c as w,u as _}from"./outputWidgets.3a1a3161.js";import{e as C,a as F,b as k}from"./icons.d8ed105c.js";import{a as x}from"./asyncComputed.3068c2f0.js";import{F as l}from"./forms.5a4b7621.js";import{C as v}from"./CrudView.3b8ef4e3.js";import{a as D}from"./ant-design.58442a38.js";import"./activeRecord.8f2918d8.js";import"./pubsub.2dc7d89a.js";import"./Text.499f5d9d.js";import"./Title.875549d8.js";import"./Form.58fb677e.js";import"./router.a09ce7b4.js";import"./index.62bc48c6.js";import"./url.8abf1d81.js";import"./index.4d93ecb2.js";import"./index.930d127f.js";import"./index.c9ce22b0.js";import"./index.46bd6cba.js";import"./index.1f4629a2.js";import"./index.0d5ed1d0.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[r]="5c4524de-2deb-4701-8e55-c50b0eeb0627",a._sentryDebugIdIdentifier="sentry-dbid-5c4524de-2deb-4701-8e55-c50b0eeb0627")}catch{}})();const J=b({__name:"Forms",setup(a){const r=y(),{loading:s,result:n,refetch:m}=x(()=>l.list()),c=({key:e})=>r.push({path:`/_editor/form/${encodeURIComponent(e)}`}),d=async({key:e})=>{var o,t;await((t=(o=n.value)==null?void 0:o.find(i=>i.path===e))==null?void 0:t.duplicate()),m()},p=async()=>{const e=await l.create();c({key:e.path})},u=async({key:e})=>{var o,t;await D("Are you sure you want to delete this form?")&&(await((t=(o=n.value)==null?void 0:o.find(i=>i.path===e))==null?void 0:t.delete()),m())},f=h(()=>{var e,o;return{columns:[{name:"Form Name"},{name:"Path"},{name:"Actions",align:"right"}],rows:(o=(e=n.value)==null?void 0:e.map(t=>({key:t.path,cells:[{text:t.title,link:`/_editor/form/${encodeURIComponent(t.path)}`},{text:t.path},{text:"",actions:[{icon:C,label:"Edit Form",onClick:c},{icon:F,label:"Duplicate",onClick:d},{icon:k,label:"Delete",onClick:u,dangerous:!0}]}]})))!=null?o:[]}});return(e,o)=>(g(),w(v,{loading:_(s),title:"Dynamic Python forms",description:"Create forms with advanced logic, easy integrations and custom branding.","create-button-text":"Create Form","empty-title":"No forms here yet","video-url":"https://www.youtube.com/embed/p6xf8PxL2Yg",table:f.value,"entity-name":"Form",onCreate:p},null,8,["loading","table"]))}});export{J as default};
//# sourceMappingURL=Forms.154a5ee3.js.map
