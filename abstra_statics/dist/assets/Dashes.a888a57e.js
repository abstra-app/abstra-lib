import{d as f,eA as b,G as y,b as D,c as w,u as g}from"./outputWidgets.ba81a3ef.js";import{e as _,a as C,b as k}from"./icons.7c2025d0.js";import{a as v}from"./asyncComputed.07af8e5d.js";import{D as l}from"./dashes.36b3bf8b.js";import{C as x}from"./CrudView.bb477737.js";import{a as I}from"./ant-design.b915eaf5.js";import"./activeRecord.13581c7e.js";import"./pubsub.289ba836.js";import"./runnerData.c0ae74af.js";import"./Text.e1135566.js";import"./Base.69cdcef5.js";import"./FormItem.8d721992.js";import"./transButton.5784faac.js";import"./router.177e3284.js";import"./Title.ecf022a9.js";import"./index.621a4b4e.js";import"./url.596dfd3e.js";import"./index.aeb580dd.js";import"./index.a32f071e.js";import"./index.f346daf7.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},s=new Error().stack;s&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[s]="b73047e0-2b63-46c2-9586-3fd26aae67a8",o._sentryDebugIdIdentifier="sentry-dbid-b73047e0-2b63-46c2-9586-3fd26aae67a8")}catch{}})();const J=f({__name:"Dashes",setup(o){const s=b(),{loading:r,result:i,refetch:d}=v(()=>l.list()),c=({key:e})=>s.push({name:"dashEditor",params:{dashPath:e}}),p=async({key:e})=>{var a,t;await((t=(a=i.value)==null?void 0:a.find(n=>n.path===e))==null?void 0:t.duplicate()),d()},m=async()=>{const e=await l.create();c({key:e.path})},u=async({key:e})=>{var a,t;await I("Are you sure you want to delete this dash?")&&(await((t=(a=i.value)==null?void 0:a.find(n=>n.path===e))==null?void 0:t.delete()),d())},h=y(()=>{var e,a;return{columns:[{name:"Dash Name"},{name:"Path"},{name:"Actions",align:"right"}],rows:(a=(e=i.value)==null?void 0:e.map(t=>({key:t.path,cells:[{text:t.title,link:`/_editor/dash/${encodeURIComponent(t.path)}`},{text:t.path},{text:"",actions:[{icon:_,label:"Edit Dash",onClick:c},{icon:C,label:"Duplicate",onClick:p},{icon:k,label:"Delete",onClick:u,dangerous:!0}]}]})))!=null?a:[]}});return(e,a)=>(D(),w(x,{loading:g(r),title:"Dashes",description:"Create a dashboard page with charts and inputs interacting with your python code.","create-button-text":"Create Dash","empty-title":"No dashes here yet","video-url":"https://www.youtube.com/embed/oYMptrk7QNE",table:h.value,"entity-name":"Dash",onCreate:m},null,8,["loading","table"]))}});export{J as default};
//# sourceMappingURL=Dashes.a888a57e.js.map
