import{d as f,o as y,O as b,J as v,b as w,c as _,w as n,eS as g,f as l,u as s,bG as k,as as m}from"./outputWidgets.412702ce.js";import{W as C}from"./workspaces.f2469029.js";import{E as i}from"./envVars.2d07345d.js";import{C as x}from"./ContentLayout.516adbca.js";import{C as h}from"./CrudView.6eec2f13.js";import{A as E}from"./index.0b5f0d9b.js";import"./runnerData.4c02e902.js";import"./url.8fd534cf.js";import"./record.c5c5d49a.js";import"./pubsub.822fc3e8.js";import"./asyncComputed.629a2434.js";import"./router.0932428f.js";import"./Form.193735c3.js";import"./hasIn.fd173989.js";import"./popupNotifcation.ccaebd85.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.6926c641.js";import"./BookOutlined.8af1e440.js";import"./Paragraph.3673fc63.js";import"./Base.777d2f1b.js";import"./Modal.c1ee8b4f.js";import"./index.8a8c47e0.js";import"./Title.154f8c19.js";import"./Text.4bb22848.js";import"./index.a14c086f.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[o]="a0083f46-c936-4eee-9565-bef5c08a7701",a._sentryDebugIdIdentifier="sentry-dbid-a0083f46-c936-4eee-9565-bef5c08a7701")}catch{}})();const R=f({__name:"EnvVarsEditor",setup(a){let o=null;y(()=>{o=setInterval(i.listComputed.refetch,2e3)}),b(()=>{o&&clearInterval(o)});function p(){var e;(e=C.computed.result.value)==null||e.openFile(".env")}const u=[{label:"Variable name",key:"key"},{label:"Variable value",key:"value",type:"password"}],d=v(()=>{var e,t;return{columns:[{name:"Key"},{name:"Value"},{name:""}],rows:(t=(e=i.listComputed.result.value)==null?void 0:e.map(r=>({key:r.key,cells:[{type:"text",text:r.key},{text:r.value,type:"secret"},{type:"actions",actions:[{icon:g,label:"Delete",onClick:()=>r.delete(),dangerous:!0}]}]})))!=null?t:[]}});async function c({key:e,value:t}){await i.create(e,t)}return(e,t)=>(w(),_(x,null,{default:n(()=>[l(h,{"entity-name":"Env var",loading:s(i).listComputed.loading.value,title:"Environment Variables",description:"Set environment variables for your project.","empty-title":"No environment variables set",table:d.value,"create-button-text":"Add Environment Variable",fields:u,live:"",onCreate:c},{secondary:n(()=>[l(s(k),{onClick:t[0]||(t[0]=r=>p())},{default:n(()=>[m("Open .env")]),_:1})]),extra:n(()=>[l(s(E),{"show-icon":"",style:{"margin-top":"20px"}},{message:n(()=>[m(" This is simply a helper to manage your environment variables locally. The variables set here will not be deployed to Cloud with your project. ")]),_:1})]),_:1},8,["loading","table"])]),_:1}))}});export{R as default};
//# sourceMappingURL=EnvVarsEditor.46c66f6f.js.map
