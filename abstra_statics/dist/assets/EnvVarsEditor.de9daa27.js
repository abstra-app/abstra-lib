import{d as f,o as y,L as v,H as b,b as _,ev as g,f as l,w as r,u as s,bV as w,ar as m}from"./outputWidgets.9e8e14b2.js";import{W as x}from"./workspaces.74e70c91.js";import{E as i}from"./envVars.847639a7.js";import{i as k}from"./icons.2b48c800.js";import{C}from"./CrudView.580e3ccb.js";import{A as h}from"./index.b9c2ba0f.js";import"./runnerData.b090b21a.js";import"./url.eb89a751.js";import"./record.ff692408.js";import"./pubsub.95c88303.js";import"./asyncComputed.855ae5ad.js";import"./Paragraph.49b33da6.js";import"./Base.8983363c.js";import"./Typography.cc1d898e.js";import"./Form.00575eba.js";import"./hasIn.c9e055df.js";import"./Modal.6eb7b200.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.e19bad92.js";import"./router.637c147d.js";import"./index.24364211.js";import"./Title.6584a4fc.js";import"./Text.f91b7e81.js";import"./index.06f03adb.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[o]="08927232-9015-4ff7-9f77-35a5ea726d52",n._sentryDebugIdIdentifier="sentry-dbid-08927232-9015-4ff7-9f77-35a5ea726d52")}catch{}})();const E={style:{display:"flex","flex-direction":"column","justify-content":"center",padding:"40px 120px"}},Q=f({__name:"EnvVarsEditor",setup(n){let o=null;y(()=>{o=setInterval(i.listComputed.refetch,2e3)}),v(()=>{o&&clearInterval(o)});function p(){var e;(e=x.computed.result.value)==null||e.openFile(".env")}const d=[{label:"Variable name",key:"key"},{label:"Variable value",key:"value",type:"password"}],u=b(()=>{var e,t;return{columns:[{name:"Key"},{name:"Value"},{name:""}],rows:(t=(e=i.listComputed.result.value)==null?void 0:e.map(a=>({key:a.key,cells:[{type:"text",text:a.key},{text:a.value,type:"secret"},{type:"actions",actions:[{icon:k,label:"Delete",onClick:()=>a.delete(),dangerous:!0}]}]})))!=null?t:[]}});async function c({key:e,value:t}){await i.create(e,t)}return(e,t)=>(_(),g("div",E,[l(C,{"entity-name":"Env var",loading:s(i).listComputed.loading.value,title:"Environment Variables",description:"Set environment variables for your project.","empty-title":"No environment variables set",table:u.value,"create-button-text":"Add Environment Variable",fields:d,live:"",onCreate:c},{secondary:r(()=>[l(s(w),{onClick:t[0]||(t[0]=a=>p())},{default:r(()=>[m("Open .env")]),_:1})]),extra:r(()=>[l(s(h),{"show-icon":"",style:{"margin-top":"20px"}},{message:r(()=>[m(" This is simply a helper to manage your environment variables locally. The variables set here will not be deployed to Cloud with your project. ")]),_:1})]),_:1},8,["loading","table"])]))}});export{Q as default};
//# sourceMappingURL=EnvVarsEditor.de9daa27.js.map
