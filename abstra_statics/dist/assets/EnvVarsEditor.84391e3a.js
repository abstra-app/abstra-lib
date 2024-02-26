import{d as f,o as y,L as b,H as v,b as _,ev as g,f as l,w as r,u as s,bV as w,ar as m}from"./outputWidgets.01471823.js";import{W as x}from"./workspaces.d7eefed9.js";import{E as i}from"./envVars.c08f8273.js";import{i as k}from"./icons.48f5dfba.js";import{C}from"./CrudView.d1d4fd44.js";import{A as h}from"./index.f7b65f52.js";import"./runnerData.8a66183a.js";import"./url.55ddcb67.js";import"./record.95c9087a.js";import"./pubsub.dfcbe334.js";import"./asyncComputed.f635b7ba.js";import"./Paragraph.4c895dde.js";import"./Base.da134e9e.js";import"./Typography.9c2baebf.js";import"./Form.1ef3946c.js";import"./hasIn.c8a2f44a.js";import"./Modal.dc9812f6.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.56aa1d90.js";import"./router.02efbb01.js";import"./index.067e03ed.js";import"./Title.33ae6b81.js";import"./Text.86524411.js";import"./index.370f71b9.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[o]="3c4bfa5f-8215-4d81-a1bb-2753891655bc",n._sentryDebugIdIdentifier="sentry-dbid-3c4bfa5f-8215-4d81-a1bb-2753891655bc")}catch{}})();const E={style:{display:"flex","flex-direction":"column","justify-content":"center",padding:"40px 120px"}},Q=f({__name:"EnvVarsEditor",setup(n){let o=null;y(()=>{o=setInterval(i.listComputed.refetch,2e3)}),b(()=>{o&&clearInterval(o)});function p(){var e;(e=x.computed.result.value)==null||e.openFile(".env")}const d=[{label:"Variable name",key:"key"},{label:"Variable value",key:"value",type:"password"}],c=v(()=>{var e,t;return{columns:[{name:"Key"},{name:"Value"},{name:""}],rows:(t=(e=i.listComputed.result.value)==null?void 0:e.map(a=>({key:a.key,cells:[{type:"text",text:a.key},{text:a.value,type:"secret"},{type:"actions",actions:[{icon:k,label:"Delete",onClick:()=>a.delete(),dangerous:!0}]}]})))!=null?t:[]}});async function u({key:e,value:t}){await i.create(e,t)}return(e,t)=>(_(),g("div",E,[l(C,{"entity-name":"Env var",loading:s(i).listComputed.loading.value,title:"Environment Variables",description:"Set environment variables for your project.","empty-title":"No environment variables set",table:c.value,"create-button-text":"Add Environment Variable",fields:d,live:"",onCreate:u},{secondary:r(()=>[l(s(w),{onClick:t[0]||(t[0]=a=>p())},{default:r(()=>[m("Open .env")]),_:1})]),extra:r(()=>[l(s(h),{"show-icon":"",style:{"margin-top":"20px"}},{message:r(()=>[m(" This is simply a helper to manage your environment variables locally. The variables set here will not be deployed to Cloud with your project. ")]),_:1})]),_:1},8,["loading","table"])]))}});export{Q as default};
//# sourceMappingURL=EnvVarsEditor.84391e3a.js.map
