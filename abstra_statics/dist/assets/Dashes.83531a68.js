import{d as f,ez as y,J as b,b as D,c as w,u as _}from"./outputWidgets.a732e2ee.js";import{e as g,a as k,b as C}from"./icons.2907d45a.js";import{a as v}from"./asyncComputed.8c09123d.js";import{D as c}from"./dashes.191275a7.js";import{_ as x}from"./CrudView.vue_vue_type_script_setup_true_lang.a3eb188e.js";import{a as I}from"./ant-design.0f77a967.js";import"./activeRecord.30e3101b.js";import"./pubsub.e674f7d3.js";import"./index.503b52e5.js";import"./index.0d75f9f4.js";import"./Title.227355c5.js";import"./Form.810575f7.js";import"./index.386264ce.js";import"./index.ea2bcc93.js";import"./index.32eb63a2.js";import"./index.d731347d.js";import"./index.d4ebf13a.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},s=new Error().stack;s&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[s]="f6001251-07dd-4054-8494-2d0816344212",o._sentryDebugIdIdentifier="sentry-dbid-f6001251-07dd-4054-8494-2d0816344212")}catch{}})();const q=f({__name:"Dashes",setup(o){const s=y(),{loading:r,result:n,refetch:d}=v(()=>c.list()),l=({key:t})=>s.push({name:"dashEditor",params:{dashPath:t}}),p=async({key:t})=>{var a,e;await((e=(a=n.value)==null?void 0:a.find(i=>i.path===t))==null?void 0:e.duplicate()),d()},m=async()=>{const t=await c.create();l({key:t.path})},u=async({key:t})=>{var a,e;await I("Are you sure you want to delete this dash?")&&(await((e=(a=n.value)==null?void 0:a.find(i=>i.path===t))==null?void 0:e.delete()),d())},h=b(()=>{var t,a;return{columns:[{name:"Dash Name"},{name:"Path"},{name:"Actions",align:"right"}],rows:(a=(t=n.value)==null?void 0:t.map(e=>({key:e.path,cells:[{text:e.title,link:`/_editor/dash/${encodeURIComponent(e.path)}`},{text:e.path},{text:"",actions:[{icon:g,label:"Edit Dash",onClick:l},{icon:k,label:"Duplicate",onClick:p},{icon:C,label:"Delete",onClick:u,dangerous:!0}]}]})))!=null?a:[]}});return(t,a)=>(D(),w(x,{loading:_(r),title:"Python Dashes",description:"Create a dashboard page with charts and inputs interacting with your python code.","create-button-text":"Create Dash","empty-title":"No dashes here yet","video-url":"https://www.youtube.com/embed/oYMptrk7QNE",table:h.value,"entity-name":"Dash",onCreate:m},null,8,["loading","table"]))}});export{q as default};
//# sourceMappingURL=Dashes.83531a68.js.map
