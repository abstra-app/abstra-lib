import{d as f,o as y,K as b,H as v,b as _,eu as g,f as l,w as r,u as s,eP as w,bE as x,aq as m}from"./outputWidgets.59239215.js";import{W as k}from"./workspaces.3739d4bc.js";import{E as i}from"./envVars.37af597e.js";import{C}from"./CrudView.9c78885b.js";import{A as E}from"./index.f4790836.js";import"./runnerData.47c07bd1.js";import"./url.eabc9198.js";import"./record.852e940f.js";import"./pubsub.9d3bead9.js";import"./asyncComputed.2e1e6d57.js";import"./Paragraph.db884b6b.js";import"./Text.96005f3c.js";import"./Form.38a4bd69.js";import"./hasIn.f9c5a7c7.js";import"./Modal.4aa8464a.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.d774aa59.js";import"./BookOutlined.5ca502bc.js";import"./router.5e1b2a3a.js";import"./popupNotifcation.5f31de34.js";import"./index.5b8e7a7f.js";import"./Title.d21b50a8.js";import"./index.c4c88ffc.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[o]="5472c031-ab03-4f07-8f1f-6da10cbea946",a._sentryDebugIdIdentifier="sentry-dbid-5472c031-ab03-4f07-8f1f-6da10cbea946")}catch{}})();const h={style:{display:"flex","flex-direction":"column","justify-content":"center",padding:"40px 120px"}},L=f({__name:"EnvVarsEditor",setup(a){let o=null;y(()=>{o=setInterval(i.listComputed.refetch,2e3)}),b(()=>{o&&clearInterval(o)});function p(){var e;(e=k.computed.result.value)==null||e.openFile(".env")}const d=[{label:"Variable name",key:"key"},{label:"Variable value",key:"value",type:"password"}],u=v(()=>{var e,t;return{columns:[{name:"Key"},{name:"Value"},{name:""}],rows:(t=(e=i.listComputed.result.value)==null?void 0:e.map(n=>({key:n.key,cells:[{type:"text",text:n.key},{text:n.value,type:"secret"},{type:"actions",actions:[{icon:w,label:"Delete",onClick:()=>n.delete(),dangerous:!0}]}]})))!=null?t:[]}});async function c({key:e,value:t}){await i.create(e,t)}return(e,t)=>(_(),g("div",h,[l(C,{"entity-name":"Env var",loading:s(i).listComputed.loading.value,title:"Environment Variables",description:"Set environment variables for your project.","empty-title":"No environment variables set",table:u.value,"create-button-text":"Add Environment Variable",fields:d,live:"",onCreate:c},{secondary:r(()=>[l(s(x),{onClick:t[0]||(t[0]=n=>p())},{default:r(()=>[m("Open .env")]),_:1})]),extra:r(()=>[l(s(E),{"show-icon":"",style:{"margin-top":"20px"}},{message:r(()=>[m(" This is simply a helper to manage your environment variables locally. The variables set here will not be deployed to Cloud with your project. ")]),_:1})]),_:1},8,["loading","table"])]))}});export{L as default};
//# sourceMappingURL=EnvVarsEditor.a62b762b.js.map
