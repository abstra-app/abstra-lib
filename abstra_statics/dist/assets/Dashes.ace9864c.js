import{d as f,ex as y,H as b,b as D,c as w,u as _}from"./registerWidgets.ca9618c6.js";import{e as g,a as k,b as C}from"./icons.71da0300.js";import{a as x}from"./asyncComputed.f26ab310.js";import{D as l}from"./dashes.cb835544.js";import{_ as v}from"./CrudView.vue_vue_type_script_setup_true_lang.0535df40.js";import{a as I}from"./ant-design.c8da8814.js";import"./activeRecord.fa727ba5.js";import"./pubsub.197ceb4e.js";import"./index.0504862b.js";import"./index.6cc8ffe0.js";import"./Title.f740cc19.js";import"./Form.fac64e0c.js";import"./index.11818713.js";import"./index.b013a4c0.js";import"./index.c0bd1022.js";import"./index.7c566b28.js";import"./index.6a4df70c.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},s=new Error().stack;s&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[s]="e5c53d53-a8a3-414e-adfd-19730cc99511",o._sentryDebugIdIdentifier="sentry-dbid-e5c53d53-a8a3-414e-adfd-19730cc99511")}catch{}})();const z=f({__name:"Dashes",setup(o){const s=y(),{loading:r,result:n,refetch:c}=x(()=>l.list()),d=({key:e})=>s.push({name:"dashEditor",params:{dashPath:e}}),p=async({key:e})=>{var a,t;await((t=(a=n.value)==null?void 0:a.find(i=>i.path===e))==null?void 0:t.duplicate()),c()},m=async()=>{const e=await l.create();d({key:e.path})},u=async({key:e})=>{var a,t;await I("Are you sure you want to delete this dash?")&&(await((t=(a=n.value)==null?void 0:a.find(i=>i.path===e))==null?void 0:t.delete()),c())},h=b(()=>{var e,a;return{columns:[{name:"Dash Name"},{name:"Path"},{name:"Actions",align:"right"}],rows:(a=(e=n.value)==null?void 0:e.map(t=>({key:t.path,cells:[{text:t.title,link:`/_editor/dash/${encodeURIComponent(t.path)}`},{text:t.path},{text:"",actions:[{icon:g,label:"Edit Dash",onClick:d},{icon:k,label:"Duplicate",onClick:p},{icon:C,label:"Delete",onClick:u,dangerous:!0}]}]})))!=null?a:[]}});return(e,a)=>(D(),w(v,{loading:_(r),title:"Python Dashes",description:"Create a dashboard page with charts and inputs interacting with your python code.","create-button-text":"Create Dash","empty-title":"No dashes here yet","video-url":"https://www.youtube.com/embed/oYMptrk7QNE",table:h.value,"entity-name":"Dash",onCreate:m},null,8,["loading","table"]))}});export{z as default};
//# sourceMappingURL=Dashes.ace9864c.js.map
