import{d as y,ey as b,G as h,b as g,c as w,u as _}from"./outputWidgets.6f5f26c6.js";import{e as C,a as F,b as k}from"./icons.17e3d05e.js";import{a as x}from"./asyncComputed.e6af4336.js";import{F as l}from"./forms.bff0f42d.js";import{C as v}from"./CrudView.e161df86.js";import{a as D}from"./ant-design.2afb3ce8.js";import"./activeRecord.dfc6ac31.js";import"./pubsub.25a587cf.js";import"./Text.9c898266.js";import"./Title.23178f3a.js";import"./transButton.d3ca6f8d.js";import"./router.ccf20d25.js";import"./Form.e86102d7.js";import"./index.e5c6a10a.js";import"./url.f9a6b661.js";import"./index.008cccf4.js";import"./index.8ccdcac3.js";import"./index.dd8eaea8.js";import"./index.d4840836.js";import"./index.ec9a4cda.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[r]="d143d73d-3145-48b5-a314-ed8b46f66f24",a._sentryDebugIdIdentifier="sentry-dbid-d143d73d-3145-48b5-a314-ed8b46f66f24")}catch{}})();const J=y({__name:"Forms",setup(a){const r=b(),{loading:s,result:n,refetch:m}=x(()=>l.list()),d=({key:e})=>r.push({path:`/_editor/form/${encodeURIComponent(e)}`}),c=async({key:e})=>{var o,t;await((t=(o=n.value)==null?void 0:o.find(i=>i.path===e))==null?void 0:t.duplicate()),m()},p=async()=>{const e=await l.create();d({key:e.path})},u=async({key:e})=>{var o,t;await D("Are you sure you want to delete this form?")&&(await((t=(o=n.value)==null?void 0:o.find(i=>i.path===e))==null?void 0:t.delete()),m())},f=h(()=>{var e,o;return{columns:[{name:"Form Name"},{name:"Path"},{name:"Actions",align:"right"}],rows:(o=(e=n.value)==null?void 0:e.map(t=>({key:t.path,cells:[{text:t.title,link:`/_editor/form/${encodeURIComponent(t.path)}`},{text:t.path},{text:"",actions:[{icon:C,label:"Edit Form",onClick:d},{icon:F,label:"Duplicate",onClick:c},{icon:k,label:"Delete",onClick:u,dangerous:!0}]}]})))!=null?o:[]}});return(e,o)=>(g(),w(v,{loading:_(s),title:"Dynamic Python forms",description:"Create forms with advanced logic, easy integrations and custom branding.","create-button-text":"Create Form","empty-title":"No forms here yet","video-url":"https://www.youtube.com/embed/p6xf8PxL2Yg",table:f.value,"entity-name":"Form",onCreate:p},null,8,["loading","table"]))}});export{J as default};
//# sourceMappingURL=Forms.4bd0eb02.js.map
