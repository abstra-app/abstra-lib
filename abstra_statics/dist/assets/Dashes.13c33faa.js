import{d as f,ez as b,J as y,b as D,c as w,u as g}from"./outputWidgets.2173e1fe.js";import{e as _,a as C,b as k}from"./icons.cd7c1858.js";import{a as v}from"./asyncComputed.6a46186d.js";import{D as l}from"./dashes.2ec0774e.js";import{C as x}from"./CrudView.681c3ff7.js";import{a as I}from"./ant-design.f90cdcd7.js";import"./activeRecord.0419387a.js";import"./pubsub.3164c166.js";import"./index.98152a7d.js";import"./index.9bbd5863.js";import"./Title.d444ffb5.js";import"./Form.c00ec72f.js";import"./router.ba958fbb.js";import"./url.eb260321.js";import"./index.afcb3cc3.js";import"./index.a317ed5a.js";import"./index.a8d51e2e.js";import"./index.d1a21529.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},s=new Error().stack;s&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[s]="e84c125f-70d4-4bb2-bcd4-65280c8356d3",o._sentryDebugIdIdentifier="sentry-dbid-e84c125f-70d4-4bb2-bcd4-65280c8356d3")}catch{}})();const q=f({__name:"Dashes",setup(o){const s=b(),{loading:r,result:n,refetch:d}=v(()=>l.list()),c=({key:e})=>s.push({name:"dashEditor",params:{dashPath:e}}),p=async({key:e})=>{var a,t;await((t=(a=n.value)==null?void 0:a.find(i=>i.path===e))==null?void 0:t.duplicate()),d()},u=async()=>{const e=await l.create();c({key:e.path})},m=async({key:e})=>{var a,t;await I("Are you sure you want to delete this dash?")&&(await((t=(a=n.value)==null?void 0:a.find(i=>i.path===e))==null?void 0:t.delete()),d())},h=y(()=>{var e,a;return{columns:[{name:"Dash Name"},{name:"Path"},{name:"Actions",align:"right"}],rows:(a=(e=n.value)==null?void 0:e.map(t=>({key:t.path,cells:[{text:t.title,link:`/_editor/dash/${encodeURIComponent(t.path)}`},{text:t.path},{text:"",actions:[{icon:_,label:"Edit Dash",onClick:c},{icon:C,label:"Duplicate",onClick:p},{icon:k,label:"Delete",onClick:m,dangerous:!0}]}]})))!=null?a:[]}});return(e,a)=>(D(),w(x,{loading:g(r),title:"Python Dashes",description:"Create a dashboard page with charts and inputs interacting with your python code.","create-button-text":"Create Dash","empty-title":"No dashes here yet","video-url":"https://www.youtube.com/embed/oYMptrk7QNE",table:h.value,"entity-name":"Dash",onCreate:u},null,8,["loading","table"]))}});export{q as default};
//# sourceMappingURL=Dashes.13c33faa.js.map
