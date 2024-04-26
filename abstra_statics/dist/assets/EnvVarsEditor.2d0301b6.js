import{d as f,o as y,O as b,J as v,b as w,c as _,w as n,eS as g,f as l,u as s,bG as k,as as m}from"./outputWidgets.d3e274ec.js";import{W as C}from"./workspaces.99c0fac8.js";import{E as i}from"./envVars.51aee717.js";import{C as x}from"./ContentLayout.f1510296.js";import{C as h}from"./CrudView.8e263d19.js";import{A as E}from"./index.7bb8a041.js";import"./runnerData.77e3ac6e.js";import"./url.8659f70c.js";import"./record.ac6e85da.js";import"./pubsub.77c626ec.js";import"./asyncComputed.c6dc3ac8.js";import"./router.dfd16c83.js";import"./Form.dba024a8.js";import"./hasIn.bec87135.js";import"./popupNotifcation.a8683924.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.0067e220.js";import"./BookOutlined.564d48e9.js";import"./Paragraph.146dda02.js";import"./Base.b093b7ab.js";import"./Modal.dc70014c.js";import"./index.537436c0.js";import"./Title.c9e7a87e.js";import"./Text.32f5ea18.js";import"./index.a0c6c496.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[o]="f2ef2bc3-5b15-428f-a42c-9956e35c3b6a",a._sentryDebugIdIdentifier="sentry-dbid-f2ef2bc3-5b15-428f-a42c-9956e35c3b6a")}catch{}})();const R=f({__name:"EnvVarsEditor",setup(a){let o=null;y(()=>{o=setInterval(i.listComputed.refetch,2e3)}),b(()=>{o&&clearInterval(o)});function p(){var e;(e=C.computed.result.value)==null||e.openFile(".env")}const u=[{label:"Variable name",key:"key"},{label:"Variable value",key:"value",type:"password"}],d=v(()=>{var e,t;return{columns:[{name:"Key"},{name:"Value"},{name:""}],rows:(t=(e=i.listComputed.result.value)==null?void 0:e.map(r=>({key:r.key,cells:[{type:"text",text:r.key},{text:r.value,type:"secret"},{type:"actions",actions:[{icon:g,label:"Delete",onClick:()=>r.delete(),dangerous:!0}]}]})))!=null?t:[]}});async function c({key:e,value:t}){await i.create(e,t)}return(e,t)=>(w(),_(x,null,{default:n(()=>[l(h,{"entity-name":"Env var",loading:s(i).listComputed.loading.value,title:"Environment Variables",description:"Set environment variables for your project.","empty-title":"No environment variables set",table:d.value,"create-button-text":"Add Environment Variable",fields:u,live:"",onCreate:c},{secondary:n(()=>[l(s(k),{onClick:t[0]||(t[0]=r=>p())},{default:n(()=>[m("Open .env")]),_:1})]),extra:n(()=>[l(s(E),{"show-icon":"",style:{"margin-top":"20px"}},{message:n(()=>[m(" This is simply a helper to manage your environment variables locally. The variables set here will not be deployed to Cloud with your project. ")]),_:1})]),_:1},8,["loading","table"])]),_:1}))}});export{R as default};
//# sourceMappingURL=EnvVarsEditor.2d0301b6.js.map
