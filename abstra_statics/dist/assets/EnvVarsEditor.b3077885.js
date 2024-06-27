import{d as f,o as y,I as b,H as v,b as _,c as g,w as r,fc as k,f as l,u as s,b_ as w,aV as m}from"./outputWidgets.9a494812.js";import{E as i,W as C}from"./workspaces.8998253c.js";import{C as x}from"./ContentLayout.ae7f3164.js";import{C as h}from"./CrudView.c202c9e0.js";import{A as E}from"./index.677d893c.js";import"./asyncComputed.63db5c85.js";import"./runnerData.7c980e32.js";import"./url.5e44ba49.js";import"./record.7e7cc1c2.js";import"./pubsub.97e68a0d.js";import"./router.ce09682c.js";import"./Form.e37a51cf.js";import"./index.c917509f.js";import"./hasIn.1819d28b.js";import"./gateway.4bd8a0ad.js";import"./popupNotifcation.15d0d698.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.75a0a6ae.js";import"./BookOutlined.40f3b1b4.js";import"./Modal.29a6f5e0.js";import"./index.a91db36f.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[o]="c7357652-f269-40ab-bd7c-1f6d6cd55089",a._sentryDebugIdIdentifier="sentry-dbid-c7357652-f269-40ab-bd7c-1f6d6cd55089")}catch{}})();const z=f({__name:"EnvVarsEditor",setup(a){let o=null;y(()=>{o=setInterval(i.listComputed.refetch,2e3)}),b(()=>{o&&clearInterval(o)});function d(){var e;(e=C.computed.result.value)==null||e.openFile(".env")}const p=[{label:"Variable name",key:"key"},{label:"Variable value",key:"value",type:"multiline-text"}],u=v(()=>{var e,t;return{columns:[{name:"Key"},{name:"Value"},{name:""}],rows:(t=(e=i.listComputed.result.value)==null?void 0:e.map(n=>({key:n.key,cells:[{type:"text",text:n.key},{text:n.value,type:"secret"},{type:"actions",actions:[{icon:k,label:"Delete",onClick:()=>n.delete(),dangerous:!0}]}]})))!=null?t:[]}});async function c({key:e,value:t}){await i.create(e,t)}return(e,t)=>(_(),g(x,null,{default:r(()=>[l(h,{"entity-name":"Env var",loading:s(i).listComputed.loading.value,title:"Environment Variables",description:"Set environment variables for your project.","empty-title":"No environment variables set",table:u.value,"create-button-text":"Add Environment Variable",fields:p,live:"",onCreate:c},{secondary:r(()=>[l(s(w),{onClick:t[0]||(t[0]=n=>d())},{default:r(()=>[m("Open .env")]),_:1})]),extra:r(()=>[l(s(E),{"show-icon":"",style:{"margin-top":"20px"}},{message:r(()=>[m(" This is simply a helper to manage your environment variables locally. The variables set here will not be deployed to Cloud with your project. ")]),_:1})]),_:1},8,["loading","table"])]),_:1}))}});export{z as default};
//# sourceMappingURL=EnvVarsEditor.b3077885.js.map
