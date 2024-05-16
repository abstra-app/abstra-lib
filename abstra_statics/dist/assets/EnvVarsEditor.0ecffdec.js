import{d as y,o as b,O as f,J as v,b as _,c as g,w as n,eS as k,f as l,u as s,bG as w,as as p}from"./outputWidgets.1ff7b577.js";import{W as C}from"./workspaces.06269ed7.js";import{E as i}from"./envVars.1b933128.js";import{C as x}from"./ContentLayout.9b11f443.js";import{C as h}from"./CrudView.b0f590e5.js";import{A as E}from"./index.b53d270d.js";import"./runnerData.8e8ec3b4.js";import"./url.7c48a780.js";import"./record.9f804926.js";import"./pubsub.ee33ae91.js";import"./asyncComputed.5609aa3f.js";import"./router.1194cf1a.js";import"./Form.17fb354e.js";import"./hasIn.487becea.js";import"./popupNotifcation.e21f8041.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.f490a909.js";import"./BookOutlined.9135ba5a.js";import"./Paragraph.cd3f3c2d.js";import"./Base.0a235eb2.js";import"./Modal.ac2ce535.js";import"./index.9250a740.js";import"./Title.9eea7bfb.js";import"./Text.d821b3dd.js";import"./index.b7eb4bed.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[o]="214c5428-5349-4abf-bc36-0440047e5be2",a._sentryDebugIdIdentifier="sentry-dbid-214c5428-5349-4abf-bc36-0440047e5be2")}catch{}})();const R=y({__name:"EnvVarsEditor",setup(a){let o=null;b(()=>{o=setInterval(i.listComputed.refetch,2e3)}),f(()=>{o&&clearInterval(o)});function m(){var e;(e=C.computed.result.value)==null||e.openFile(".env")}const u=[{label:"Variable name",key:"key"},{label:"Variable value",key:"value",type:"multiline-text"}],d=v(()=>{var e,t;return{columns:[{name:"Key"},{name:"Value"},{name:""}],rows:(t=(e=i.listComputed.result.value)==null?void 0:e.map(r=>({key:r.key,cells:[{type:"text",text:r.key},{text:r.value,type:"secret"},{type:"actions",actions:[{icon:k,label:"Delete",onClick:()=>r.delete(),dangerous:!0}]}]})))!=null?t:[]}});async function c({key:e,value:t}){await i.create(e,t)}return(e,t)=>(_(),g(x,null,{default:n(()=>[l(h,{"entity-name":"Env var",loading:s(i).listComputed.loading.value,title:"Environment Variables",description:"Set environment variables for your project.","empty-title":"No environment variables set",table:d.value,"create-button-text":"Add Environment Variable",fields:u,live:"",onCreate:c},{secondary:n(()=>[l(s(w),{onClick:t[0]||(t[0]=r=>m())},{default:n(()=>[p("Open .env")]),_:1})]),extra:n(()=>[l(s(E),{"show-icon":"",style:{"margin-top":"20px"}},{message:n(()=>[p(" This is simply a helper to manage your environment variables locally. The variables set here will not be deployed to Cloud with your project. ")]),_:1})]),_:1},8,["loading","table"])]),_:1}))}});export{R as default};
//# sourceMappingURL=EnvVarsEditor.0ecffdec.js.map
