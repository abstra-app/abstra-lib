import{d as f,o as y,O as b,J as v,b as w,c as _,w as n,eS as g,f as l,u as s,bG as k,as as m}from"./outputWidgets.f5ba2323.js";import{W as C}from"./workspaces.260f40ac.js";import{E as i}from"./envVars.8303e935.js";import{C as x}from"./ContentLayout.a553ff64.js";import{C as h}from"./CrudView.bc8e557e.js";import{A as E}from"./index.de17e2c0.js";import"./runnerData.fe0a075b.js";import"./url.8ace32ac.js";import"./record.166bf930.js";import"./pubsub.de391e8b.js";import"./asyncComputed.5f5ea003.js";import"./router.fe894852.js";import"./Form.ed28d0df.js";import"./hasIn.1bb5fe48.js";import"./popupNotifcation.65e9e0a6.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.4d28a6b1.js";import"./BookOutlined.4ada3bfa.js";import"./Paragraph.ce0caa03.js";import"./Base.2adca053.js";import"./Modal.fb8afa74.js";import"./index.48271178.js";import"./Title.c4ac1775.js";import"./Text.f641a2d6.js";import"./index.350ecbbe.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[o]="4d4540a0-55c5-48ef-8626-93821ff8eb7c",a._sentryDebugIdIdentifier="sentry-dbid-4d4540a0-55c5-48ef-8626-93821ff8eb7c")}catch{}})();const R=f({__name:"EnvVarsEditor",setup(a){let o=null;y(()=>{o=setInterval(i.listComputed.refetch,2e3)}),b(()=>{o&&clearInterval(o)});function p(){var e;(e=C.computed.result.value)==null||e.openFile(".env")}const d=[{label:"Variable name",key:"key"},{label:"Variable value",key:"value",type:"password"}],u=v(()=>{var e,t;return{columns:[{name:"Key"},{name:"Value"},{name:""}],rows:(t=(e=i.listComputed.result.value)==null?void 0:e.map(r=>({key:r.key,cells:[{type:"text",text:r.key},{text:r.value,type:"secret"},{type:"actions",actions:[{icon:g,label:"Delete",onClick:()=>r.delete(),dangerous:!0}]}]})))!=null?t:[]}});async function c({key:e,value:t}){await i.create(e,t)}return(e,t)=>(w(),_(x,null,{default:n(()=>[l(h,{"entity-name":"Env var",loading:s(i).listComputed.loading.value,title:"Environment Variables",description:"Set environment variables for your project.","empty-title":"No environment variables set",table:u.value,"create-button-text":"Add Environment Variable",fields:d,live:"",onCreate:c},{secondary:n(()=>[l(s(k),{onClick:t[0]||(t[0]=r=>p())},{default:n(()=>[m("Open .env")]),_:1})]),extra:n(()=>[l(s(E),{"show-icon":"",style:{"margin-top":"20px"}},{message:n(()=>[m(" This is simply a helper to manage your environment variables locally. The variables set here will not be deployed to Cloud with your project. ")]),_:1})]),_:1},8,["loading","table"])]),_:1}))}});export{R as default};
//# sourceMappingURL=EnvVarsEditor.bdf8ecad.js.map
