import{d as f,o as y,O as b,J as v,b as _,c as g,w as n,eS as k,f as l,u as s,bG as w,as as p}from"./outputWidgets.c3ee551f.js";import{W as C}from"./workspaces.a772063e.js";import{E as i}from"./envVars.f5149643.js";import{C as x}from"./ContentLayout.1e0ff2c7.js";import{C as h}from"./CrudView.595e58bf.js";import{A as E}from"./index.c29e6d33.js";import"./runnerData.26baf049.js";import"./url.a3857130.js";import"./record.c306734b.js";import"./pubsub.ab0201c0.js";import"./asyncComputed.4114f461.js";import"./router.18bd2c01.js";import"./Form.b156c688.js";import"./hasIn.72a7d98b.js";import"./popupNotifcation.e158f52f.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.9102d5d5.js";import"./BookOutlined.6e0ab7e8.js";import"./Paragraph.c8128976.js";import"./Base.22df74fd.js";import"./Modal.a620fbc9.js";import"./index.9fa50e04.js";import"./Title.a3c129e5.js";import"./Text.294d3e39.js";import"./index.1f55aa42.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[o]="541a5b04-e292-48c2-a26a-0fbc4f60afbc",a._sentryDebugIdIdentifier="sentry-dbid-541a5b04-e292-48c2-a26a-0fbc4f60afbc")}catch{}})();const R=f({__name:"EnvVarsEditor",setup(a){let o=null;y(()=>{o=setInterval(i.listComputed.refetch,2e3)}),b(()=>{o&&clearInterval(o)});function m(){var e;(e=C.computed.result.value)==null||e.openFile(".env")}const u=[{label:"Variable name",key:"key"},{label:"Variable value",key:"value",type:"multiline-text"}],d=v(()=>{var e,t;return{columns:[{name:"Key"},{name:"Value"},{name:""}],rows:(t=(e=i.listComputed.result.value)==null?void 0:e.map(r=>({key:r.key,cells:[{type:"text",text:r.key},{text:r.value,type:"secret"},{type:"actions",actions:[{icon:k,label:"Delete",onClick:()=>r.delete(),dangerous:!0}]}]})))!=null?t:[]}});async function c({key:e,value:t}){await i.create(e,t)}return(e,t)=>(_(),g(x,null,{default:n(()=>[l(h,{"entity-name":"Env var",loading:s(i).listComputed.loading.value,title:"Environment Variables",description:"Set environment variables for your project.","empty-title":"No environment variables set",table:d.value,"create-button-text":"Add Environment Variable",fields:u,live:"",onCreate:c},{secondary:n(()=>[l(s(w),{onClick:t[0]||(t[0]=r=>m())},{default:n(()=>[p("Open .env")]),_:1})]),extra:n(()=>[l(s(E),{"show-icon":"",style:{"margin-top":"20px"}},{message:n(()=>[p(" This is simply a helper to manage your environment variables locally. The variables set here will not be deployed to Cloud with your project. ")]),_:1})]),_:1},8,["loading","table"])]),_:1}))}});export{R as default};
//# sourceMappingURL=EnvVarsEditor.f2952429.js.map
