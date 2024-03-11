import{d as f,o as y,L as b,H as v,b as _,ev as g,f as l,w as r,u as s,bG as w,ar as m}from"./outputWidgets.84a829ae.js";import{W as x}from"./workspaces.7ad1c3ff.js";import{E as i}from"./envVars.d77cfa67.js";import{i as k}from"./icons.1332d3dc.js";import{C}from"./CrudView.449ac6ae.js";import{A as h}from"./index.d70769e2.js";import"./runnerData.658fae30.js";import"./url.01b4d3ff.js";import"./record.98d2d912.js";import"./pubsub.28bedbe2.js";import"./asyncComputed.dd40f6f7.js";import"./Paragraph.271f693c.js";import"./Base.d9274247.js";import"./Typography.c95be6a2.js";import"./Form.43cd5faa.js";import"./hasIn.17b499bc.js";import"./Modal.faea78ae.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.4d53704f.js";import"./router.34c33c89.js";import"./popupNotifcation.5203a290.js";import"./index.e7cb0a34.js";import"./Title.86d9b79e.js";import"./Text.38fac303.js";import"./index.1b61c7ee.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[o]="1f742840-0cce-437a-a8d9-42ef98d4af9b",a._sentryDebugIdIdentifier="sentry-dbid-1f742840-0cce-437a-a8d9-42ef98d4af9b")}catch{}})();const E={style:{display:"flex","flex-direction":"column","justify-content":"center",padding:"40px 120px"}},R=f({__name:"EnvVarsEditor",setup(a){let o=null;y(()=>{o=setInterval(i.listComputed.refetch,2e3)}),b(()=>{o&&clearInterval(o)});function p(){var e;(e=x.computed.result.value)==null||e.openFile(".env")}const d=[{label:"Variable name",key:"key"},{label:"Variable value",key:"value",type:"password"}],c=v(()=>{var e,t;return{columns:[{name:"Key"},{name:"Value"},{name:""}],rows:(t=(e=i.listComputed.result.value)==null?void 0:e.map(n=>({key:n.key,cells:[{type:"text",text:n.key},{text:n.value,type:"secret"},{type:"actions",actions:[{icon:k,label:"Delete",onClick:()=>n.delete(),dangerous:!0}]}]})))!=null?t:[]}});async function u({key:e,value:t}){await i.create(e,t)}return(e,t)=>(_(),g("div",E,[l(C,{"entity-name":"Env var",loading:s(i).listComputed.loading.value,title:"Environment Variables",description:"Set environment variables for your project.","empty-title":"No environment variables set",table:c.value,"create-button-text":"Add Environment Variable",fields:d,live:"",onCreate:u},{secondary:r(()=>[l(s(w),{onClick:t[0]||(t[0]=n=>p())},{default:r(()=>[m("Open .env")]),_:1})]),extra:r(()=>[l(s(h),{"show-icon":"",style:{"margin-top":"20px"}},{message:r(()=>[m(" This is simply a helper to manage your environment variables locally. The variables set here will not be deployed to Cloud with your project. ")]),_:1})]),_:1},8,["loading","table"])]))}});export{R as default};
//# sourceMappingURL=EnvVarsEditor.f946202e.js.map
