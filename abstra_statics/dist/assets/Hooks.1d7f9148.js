import{d as k,ex as y,H as b,b as h,c as _,u as H}from"./registerWidgets.3fe3e574.js";import{e as g,a as w,b as C}from"./icons.3f547329.js";import{a as x}from"./asyncComputed.5cb892a4.js";import{H as d}from"./hooks.6a308555.js";import{_ as I}from"./CrudView.vue_vue_type_script_setup_true_lang.d85b15cd.js";import{a as D}from"./ant-design.f2ce73f6.js";import"./activeRecord.1c8420b0.js";import"./pubsub.6dbde606.js";import"./index.ed47c328.js";import"./Title.bb963c89.js";import"./Form.273c73e9.js";import"./index.dc1ab387.js";import"./index.239592cd.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[n]="b50187c2-c8e9-4601-8c28-bd5456e9bd76",a._sentryDebugIdIdentifier="sentry-dbid-b50187c2-c8e9-4601-8c28-bd5456e9bd76")}catch{}})();const O=k({__name:"Hooks",setup(a){const n=y(),{loading:s,result:i,refetch:c}=x(()=>d.list()),l=({key:e})=>n.push({path:`/_editor/hook/${encodeURIComponent(e)}`}),p=async({key:e})=>{var o,t;await((t=(o=i.value)==null?void 0:o.find(r=>r.path===e))==null?void 0:t.duplicate()),c()},u=async()=>{const e=await d.create();l({key:e.path})},m=async({key:e})=>{var o,t;await D("Are you sure you want to delete this hook?")&&(await((t=(o=i.value)==null?void 0:o.find(r=>r.path===e))==null?void 0:t.delete()),c())},f=b(()=>{var e,o;return{columns:[{name:"Hook Name"},{name:"Path"},{name:"Hook Actions"}],rows:(o=(e=i.value)==null?void 0:e.map(t=>({key:t.path,cells:[{text:t.title,link:`/_editor/hook/${encodeURIComponent(t.path)}`},{text:t.path},{text:"",actions:[{icon:g,label:"Edit Hook",onClick:l},{icon:w,label:"Duplicate",onClick:p},{icon:C,label:"Delete",onClick:m,dangerous:!0}]}]})))!=null?o:[]}});return(e,o)=>(h(),_(I,{loading:H(s),title:"Python Hooks",description:"Trigger your Python scripts with a request.","create-button-text":"Create Hook","empty-title":"No hooks here yet",table:f.value,"entity-name":"Hook",onCreate:u},null,8,["loading","table"]))}});export{O as default};
//# sourceMappingURL=Hooks.1d7f9148.js.map
