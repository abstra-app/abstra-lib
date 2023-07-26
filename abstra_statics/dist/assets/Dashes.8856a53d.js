import{d as b,K as y,b as D,t as w,z as l,H as g}from"./registerWidgets.dc0b6768.js";import{f as _,g as k,h as C}from"./icons.79ac4c38.js";import{a as I}from"./asyncComputed.1ef6bcd7.js";import{D as p}from"./dashes.b8f114cc.js";import{R as x}from"./RuntimeList.f151e03d.js";import"./activeRecord.81c73286.js";import"./runnerData.68657903.js";import"./DropdownMenu.f0c8b270.js";import"./CircularLoading.8d483ca6.js";import"./lottie.eb38a9e8.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},s=new Error().stack;s&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[s]="41de6dc4-b679-49a6-ba8f-fb543ad721b9",o._sentryDebugIdIdentifier="sentry-dbid-41de6dc4-b679-49a6-ba8f-fb543ad721b9")}catch{}})();const z=b({__name:"Dashes",setup(o){const s=g(),{loading:r,result:n,refetch:d}=I(()=>p.list()),c=({key:e})=>s.push({path:`/_editor/dash/${encodeURIComponent(e)}`}),u=async({key:e})=>{var a,t;await((t=(a=n.value)==null?void 0:a.find(i=>i.path===e))==null?void 0:t.duplicate()),d()},h=async()=>{const e=await p.create();c({key:e.path})},m=async({key:e})=>{var a,t;confirm("Are you sure you want to delete this dash?")&&(await((t=(a=n.value)==null?void 0:a.find(i=>i.path===e))==null?void 0:t.delete()),d())},f=y(()=>{var e,a;return{columns:[{name:"Dash Name"},{name:"Path"},{name:"Dash Actions"}],rows:(a=(e=n.value)==null?void 0:e.map(t=>({key:t.path,cells:[{text:t.title,classes:["title","centered"],link:`/_editor/dash/${encodeURIComponent(t.path)}`},{text:t.path},{text:"",classes:["centered"],actions:[{icon:_,label:"Delete",onClick:m,dangerous:!0},{icon:k,label:"Edit Dash",onClick:c},{icon:C,label:"Duplicate",onClick:u}]}]})))!=null?a:[]}});return(e,a)=>(D(),w(x,{loading:l(r),title:"Python Dashes",description:"Create a dashboard page with charts and inputs interacting with your python code.","create-button-text":"Create Dash","empty-title":"No dashes here yet","video-url":"https://www.youtube.com/embed/oYMptrk7QNE",table:l(f),onCreate:h},null,8,["loading","table"]))}});export{z as default};
//# sourceMappingURL=Dashes.8856a53d.js.map
