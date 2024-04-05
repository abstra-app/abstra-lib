import{d as y,o as f,K as b,H as v,b as _,eu as g,f as l,w as r,u as s,eP as w,bE as x,aq as m}from"./outputWidgets.3681a2a5.js";import{W as k}from"./workspaces.558330e2.js";import{E as i}from"./envVars.8abde7e8.js";import{C}from"./CrudView.b5e99bd9.js";import{A as E}from"./index.3b066f4a.js";import"./runnerData.f97328a2.js";import"./url.ec571b6b.js";import"./record.220fa006.js";import"./pubsub.916b1e4d.js";import"./asyncComputed.317e87c5.js";import"./Paragraph.326f3875.js";import"./Text.1bf2a6e4.js";import"./Form.c15ea82d.js";import"./hasIn.127ddf2a.js";import"./Modal.7229d3ef.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.b3245b51.js";import"./BookOutlined.2d246e57.js";import"./router.ef5c7692.js";import"./popupNotifcation.d8032226.js";import"./index.4f6b4519.js";import"./Title.142e78f1.js";import"./index.f44ff305.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[o]="22aaa698-4911-4e90-9b1b-7dae274e1339",a._sentryDebugIdIdentifier="sentry-dbid-22aaa698-4911-4e90-9b1b-7dae274e1339")}catch{}})();const h={style:{display:"flex","flex-direction":"column","justify-content":"center",padding:"40px 120px"}},L=y({__name:"EnvVarsEditor",setup(a){let o=null;f(()=>{o=setInterval(i.listComputed.refetch,2e3)}),b(()=>{o&&clearInterval(o)});function p(){var e;(e=k.computed.result.value)==null||e.openFile(".env")}const d=[{label:"Variable name",key:"key"},{label:"Variable value",key:"value",type:"password"}],u=v(()=>{var e,t;return{columns:[{name:"Key"},{name:"Value"},{name:""}],rows:(t=(e=i.listComputed.result.value)==null?void 0:e.map(n=>({key:n.key,cells:[{type:"text",text:n.key},{text:n.value,type:"secret"},{type:"actions",actions:[{icon:w,label:"Delete",onClick:()=>n.delete(),dangerous:!0}]}]})))!=null?t:[]}});async function c({key:e,value:t}){await i.create(e,t)}return(e,t)=>(_(),g("div",h,[l(C,{"entity-name":"Env var",loading:s(i).listComputed.loading.value,title:"Environment Variables",description:"Set environment variables for your project.","empty-title":"No environment variables set",table:u.value,"create-button-text":"Add Environment Variable",fields:d,live:"",onCreate:c},{secondary:r(()=>[l(s(x),{onClick:t[0]||(t[0]=n=>p())},{default:r(()=>[m("Open .env")]),_:1})]),extra:r(()=>[l(s(E),{"show-icon":"",style:{"margin-top":"20px"}},{message:r(()=>[m(" This is simply a helper to manage your environment variables locally. The variables set here will not be deployed to Cloud with your project. ")]),_:1})]),_:1},8,["loading","table"])]))}});export{L as default};
//# sourceMappingURL=EnvVarsEditor.fae968bd.js.map
