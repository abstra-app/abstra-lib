import{d as b,eA as w,G as g,b as h,c as F,u as _}from"./outputWidgets.84fd06fb.js";import{F as d}from"./forms.26bc3c1e.js";import{e as x,d as C}from"./icons.3869c437.js";import{a as k}from"./asyncComputed.da204aa5.js";import{a as l}from"./ant-design.09f47601.js";import{C as v}from"./CrudView.500d5f8a.js";import"./record.f0008bb4.js";import"./pubsub.8883f68b.js";import"./transButton.64565967.js";import"./Text.9dbcc31d.js";import"./Base.67ffff63.js";import"./router.a59cab44.js";import"./Title.564982df.js";import"./index.a606b6d8.js";import"./url.53969469.js";import"./index.6b6af4b4.js";import"./index.02fdeca3.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[r]="0447d38a-71a1-4929-bef7-da6230fcb3e1",o._sentryDebugIdIdentifier="sentry-dbid-0447d38a-71a1-4929-bef7-da6230fcb3e1")}catch{}})();const j=b({__name:"Forms",setup(o){const r=w(),{loading:i,result:n,refetch:c}=k(()=>d.list()),s=({key:e})=>r.push({name:"formEditor",params:{id:e}}),u=async()=>{const e=await d.create();s({key:e.id})},p=async({key:e})=>{var t,m;const a=await l("Do you want to delete the .py file associated with this form?",{okText:"Yes",cancelText:"No"});await l("Are you sure you want to delete this form?")&&(await((m=(t=n.value)==null?void 0:t.find(y=>y.id===e))==null?void 0:m.delete(a)),c())},f=g(()=>{var e,a;return{columns:[{name:"Form Name"},{name:"Path"},{name:"File"},{name:"Actions",align:"right"}],rows:(a=(e=n.value)==null?void 0:e.map(t=>({key:t.id,cells:[{text:t.title,link:`/_editor/form/${encodeURIComponent(t.id)}`},{text:t.path},{text:t.file},{text:"",actions:[{icon:x,label:"Edit Form",onClick:s},{icon:C,label:"Delete",onClick:p,dangerous:!0}]}]})))!=null?a:[]}});return(e,a)=>(h(),F(v,{loading:_(i),title:"Forms",description:"Create forms with advanced logic, easy integrations and custom branding.","create-button-text":"Create Form","empty-title":"No forms here yet","video-url":"https://www.youtube.com/embed/p6xf8PxL2Yg",table:f.value,"entity-name":"Form",onCreate:u},null,8,["loading","table"]))}});export{j as default};
//# sourceMappingURL=Forms.7151253c.js.map
