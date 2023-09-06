import{d as f,ex as y,F as b,b as D,u as w,bu as g}from"./registerWidgets.59747b32.js";import{e as _,f as k,g as C}from"./icons.8e518be5.js";import{a as x}from"./asyncComputed.1d4b957f.js";import{D as l}from"./dashes.5263a49a.js";import{R as v}from"./RuntimeList.6cf7bf5b.js";import"./activeRecord.e2c0e940.js";import"./pubsub.cfb8c19f.js";import"./index.135ae79e.js";import"./DropdownMenu.7b5d814a.js";import"./CircularLoading.eebf6e84.js";import"./lottie.15d20c75.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},s=new Error().stack;s&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[s]="21e9cd08-680c-4798-a34b-52fa5f4d0f11",o._sentryDebugIdIdentifier="sentry-dbid-21e9cd08-680c-4798-a34b-52fa5f4d0f11")}catch{}})();const Q=f({__name:"Dashes",setup(o){const s=y(),{loading:r,result:n,refetch:c}=x(()=>l.list()),d=({key:e})=>s.push({name:"dashEditor",params:{dashPath:e}}),u=async({key:e})=>{var a,t;await((t=(a=n.value)==null?void 0:a.find(i=>i.path===e))==null?void 0:t.duplicate()),c()},p=async()=>{const e=await l.create();d({key:e.path})},h=async({key:e})=>{var a,t;confirm("Are you sure you want to delete this dash?")&&(await((t=(a=n.value)==null?void 0:a.find(i=>i.path===e))==null?void 0:t.delete()),c())},m=b(()=>{var e,a;return{columns:[{name:"Dash Name"},{name:"Path"},{name:"Dash Actions"}],rows:(a=(e=n.value)==null?void 0:e.map(t=>({key:t.path,cells:[{text:t.title,classes:["title","centered"],link:`/_editor/dash/${encodeURIComponent(t.path)}`},{text:t.path},{text:"",classes:["centered"],actions:[{icon:_,label:"Delete",onClick:h,dangerous:!0},{icon:k,label:"Edit Dash",onClick:d},{icon:C,label:"Duplicate",onClick:u}]}]})))!=null?a:[]}});return(e,a)=>(D(),w(v,{loading:g(r),title:"Python Dashes",description:"Create a dashboard page with charts and inputs interacting with your python code.","create-button-text":"Create Dash","empty-title":"No dashes here yet","video-url":"https://www.youtube.com/embed/oYMptrk7QNE",table:m.value,onCreate:p},null,8,["loading","table"]))}});export{Q as default};
//# sourceMappingURL=Dashes.7954cb4a.js.map
