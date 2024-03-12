import{d as f,o as y,L as b,H as v,b as _,ev as g,f as l,w as r,u as s,bG as w,ar as m}from"./outputWidgets.a0d0265d.js";import{W as x}from"./workspaces.e59ba00a.js";import{E as i}from"./envVars.6ca10b57.js";import{i as k}from"./icons.3e68657a.js";import{C}from"./CrudView.9173459d.js";import{A as h}from"./index.02abb61c.js";import"./runnerData.23b9711e.js";import"./url.75cee938.js";import"./record.a9ba638b.js";import"./pubsub.6ed4a04b.js";import"./asyncComputed.dc0c45ed.js";import"./Paragraph.f000a8fa.js";import"./Base.abb5fac0.js";import"./Typography.5f990276.js";import"./Form.72a58d24.js";import"./hasIn.c9d59175.js";import"./Modal.87fe97d8.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.54f7c162.js";import"./router.c2f63755.js";import"./popupNotifcation.4293c660.js";import"./index.f0ccca2d.js";import"./Title.d260458f.js";import"./Text.10dcef50.js";import"./index.fc95be7d.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[o]="5407362a-0c1f-4c2f-ae49-18cb491af9dd",a._sentryDebugIdIdentifier="sentry-dbid-5407362a-0c1f-4c2f-ae49-18cb491af9dd")}catch{}})();const E={style:{display:"flex","flex-direction":"column","justify-content":"center",padding:"40px 120px"}},R=f({__name:"EnvVarsEditor",setup(a){let o=null;y(()=>{o=setInterval(i.listComputed.refetch,2e3)}),b(()=>{o&&clearInterval(o)});function p(){var e;(e=x.computed.result.value)==null||e.openFile(".env")}const d=[{label:"Variable name",key:"key"},{label:"Variable value",key:"value",type:"password"}],c=v(()=>{var e,t;return{columns:[{name:"Key"},{name:"Value"},{name:""}],rows:(t=(e=i.listComputed.result.value)==null?void 0:e.map(n=>({key:n.key,cells:[{type:"text",text:n.key},{text:n.value,type:"secret"},{type:"actions",actions:[{icon:k,label:"Delete",onClick:()=>n.delete(),dangerous:!0}]}]})))!=null?t:[]}});async function u({key:e,value:t}){await i.create(e,t)}return(e,t)=>(_(),g("div",E,[l(C,{"entity-name":"Env var",loading:s(i).listComputed.loading.value,title:"Environment Variables",description:"Set environment variables for your project.","empty-title":"No environment variables set",table:c.value,"create-button-text":"Add Environment Variable",fields:d,live:"",onCreate:u},{secondary:r(()=>[l(s(w),{onClick:t[0]||(t[0]=n=>p())},{default:r(()=>[m("Open .env")]),_:1})]),extra:r(()=>[l(s(h),{"show-icon":"",style:{"margin-top":"20px"}},{message:r(()=>[m(" This is simply a helper to manage your environment variables locally. The variables set here will not be deployed to Cloud with your project. ")]),_:1})]),_:1},8,["loading","table"])]))}});export{R as default};
//# sourceMappingURL=EnvVarsEditor.2dbb3822.js.map
