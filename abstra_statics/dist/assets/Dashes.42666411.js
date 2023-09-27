import{d as f,ex as y,H as b,b as D,c as _,u as w}from"./registerWidgets.aa99a257.js";import{e as g,a as k,b as C}from"./icons.28b8a025.js";import{a as x}from"./asyncComputed.0fe9c7ca.js";import{D as d}from"./dashes.fa9afad9.js";import{_ as v}from"./CrudView.vue_vue_type_script_setup_true_lang.28754d4f.js";import"./activeRecord.a0fab812.js";import"./pubsub.1c962ca1.js";import"./index.237f2f09.js";import"./index.a431d18c.js";import"./index.7dfbdbc1.js";import"./Title.6e572405.js";import"./Form.edded16b.js";import"./index.4fae01ae.js";import"./index.782ff7c7.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},s=new Error().stack;s&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[s]="a0e248a6-26aa-40ac-a9ae-2e4a6e7cc214",o._sentryDebugIdIdentifier="sentry-dbid-a0e248a6-26aa-40ac-a9ae-2e4a6e7cc214")}catch{}})();const Y=f({__name:"Dashes",setup(o){const s=y(),{loading:r,result:n,refetch:c}=x(()=>d.list()),l=({key:e})=>s.push({name:"dashEditor",params:{dashPath:e}}),p=async({key:e})=>{var a,t;await((t=(a=n.value)==null?void 0:a.find(i=>i.path===e))==null?void 0:t.duplicate()),c()},u=async()=>{const e=await d.create();l({key:e.path})},m=async({key:e})=>{var a,t;confirm("Are you sure you want to delete this dash?")&&(await((t=(a=n.value)==null?void 0:a.find(i=>i.path===e))==null?void 0:t.delete()),c())},h=b(()=>{var e,a;return{columns:[{name:"Dash Name"},{name:"Path"},{name:"Dash Actions"}],rows:(a=(e=n.value)==null?void 0:e.map(t=>({key:t.path,cells:[{text:t.title,link:`/_editor/dash/${encodeURIComponent(t.path)}`},{text:t.path},{text:"",actions:[{icon:g,label:"Edit Dash",onClick:l},{icon:k,label:"Duplicate",onClick:p},{icon:C,label:"Delete",onClick:m,dangerous:!0}]}]})))!=null?a:[]}});return(e,a)=>(D(),_(v,{loading:w(r),title:"Python Dashes",description:"Create a dashboard page with charts and inputs interacting with your python code.","create-button-text":"Create Dash","empty-title":"No dashes here yet","video-url":"https://www.youtube.com/embed/oYMptrk7QNE",table:h.value,"entity-name":"Dash",onCreate:u},null,8,["loading","table"]))}});export{Y as default};
//# sourceMappingURL=Dashes.42666411.js.map
