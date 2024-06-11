import{d as f,o as y,R as b,y as v,b as _,c as g,w as r,fd as k,f as i,u as s,bF as w,am as m}from"./outputWidgets.0bd4d0d9.js";import{E as l,W as C}from"./workspaces.2c89076b.js";import{C as x}from"./ContentLayout.46c0ea48.js";import{C as h}from"./CrudView.c7f5f13d.js";import{A as E}from"./index.48a4f36d.js";import"./asyncComputed.c2ab22ce.js";import"./runnerData.445399e4.js";import"./url.95808a1a.js";import"./record.013d5ef8.js";import"./pubsub.1f34bcbc.js";import"./router.51df69f5.js";import"./Form.35e8190c.js";import"./hasIn.f4d72d65.js";import"./gateway.5320be42.js";import"./popupNotifcation.43240231.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.bd46feba.js";import"./BookOutlined.e29e9d4f.js";import"./Modal.fab2bfb8.js";import"./index.c9bc42f0.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[o]="97ddeb5f-72a3-45d1-90c0-392ee9d64f1a",a._sentryDebugIdIdentifier="sentry-dbid-97ddeb5f-72a3-45d1-90c0-392ee9d64f1a")}catch{}})();const q=f({__name:"EnvVarsEditor",setup(a){let o=null;y(()=>{o=setInterval(l.listComputed.refetch,2e3)}),b(()=>{o&&clearInterval(o)});function d(){var e;(e=C.computed.result.value)==null||e.openFile(".env")}const p=[{label:"Variable name",key:"key"},{label:"Variable value",key:"value",type:"multiline-text"}],u=v(()=>{var e,t;return{columns:[{name:"Key"},{name:"Value"},{name:""}],rows:(t=(e=l.listComputed.result.value)==null?void 0:e.map(n=>({key:n.key,cells:[{type:"text",text:n.key},{text:n.value,type:"secret"},{type:"actions",actions:[{icon:k,label:"Delete",onClick:()=>n.delete(),dangerous:!0}]}]})))!=null?t:[]}});async function c({key:e,value:t}){await l.create(e,t)}return(e,t)=>(_(),g(x,null,{default:r(()=>[i(h,{"entity-name":"Env var",loading:s(l).listComputed.loading.value,title:"Environment Variables",description:"Set environment variables for your project.","empty-title":"No environment variables set",table:u.value,"create-button-text":"Add Environment Variable",fields:p,live:"",onCreate:c},{secondary:r(()=>[i(s(w),{onClick:t[0]||(t[0]=n=>d())},{default:r(()=>[m("Open .env")]),_:1})]),extra:r(()=>[i(s(E),{"show-icon":"",style:{"margin-top":"20px"}},{message:r(()=>[m(" This is simply a helper to manage your environment variables locally. The variables set here will not be deployed to Cloud with your project. ")]),_:1})]),_:1},8,["loading","table"])]),_:1}))}});export{q as default};
//# sourceMappingURL=EnvVarsEditor.c7ef3c75.js.map
