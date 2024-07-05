import{d as f,$ as y,a1 as b,f as v,o as _,c as g,w as r,eN as k,b as i,u as s,bH as w,as as m}from"./vue-router.05256813.js";import{E as l,W as C}from"./workspaces.5fc2c058.js";import{C as x}from"./ContentLayout.c6727174.js";import{C as h}from"./CrudView.532989a1.js";import{A as E}from"./index.9cf77561.js";import"./asyncComputed.341d9a11.js";import"./runnerData.362266c4.js";import"./url.ea3bbd38.js";import"./record.01133c6b.js";import"./router.e42560b8.js";import"./gateway.b01977f7.js";import"./popupNotifcation.3a52a991.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.ff156200.js";import"./BookOutlined.f8149aee.js";import"./index.061ef021.js";import"./index.f20856b6.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[a]="f612127a-702b-4e43-a051-056c6a2f2639",o._sentryDebugIdIdentifier="sentry-dbid-f612127a-702b-4e43-a051-056c6a2f2639")}catch{}})();const O=f({__name:"EnvVarsEditor",setup(o){let a=null;y(()=>{a=setInterval(l.listComputed.refetch,2e3)}),b(()=>{a&&clearInterval(a)});function u(){var e;(e=C.computed.result.value)==null||e.openFile(".env")}const p=[{label:"Variable name",key:"key"},{label:"Variable value",key:"value",type:"multiline-text"}],d=v(()=>{var e,t;return{columns:[{name:"Key"},{name:"Value"},{name:""}],rows:(t=(e=l.listComputed.result.value)==null?void 0:e.map(n=>({key:n.key,cells:[{type:"text",text:n.key},{text:n.value,type:"secret"},{type:"actions",actions:[{icon:k,label:"Delete",onClick:()=>n.delete(),dangerous:!0}]}]})))!=null?t:[]}});async function c({key:e,value:t}){await l.create(e,t)}return(e,t)=>(_(),g(x,null,{default:r(()=>[i(h,{"entity-name":"Env var",loading:s(l).listComputed.loading.value,title:"Environment Variables",description:"Set environment variables for your project.","empty-title":"No environment variables set",table:d.value,"create-button-text":"Add Environment Variable",fields:p,live:"",onCreate:c},{secondary:r(()=>[i(s(w),{onClick:t[0]||(t[0]=n=>u())},{default:r(()=>[m("Open .env")]),_:1})]),extra:r(()=>[i(s(E),{"show-icon":"",style:{"margin-top":"20px"}},{message:r(()=>[m(" This is simply a helper to manage your environment variables locally. The variables set here will not be deployed to Cloud with your project. ")]),_:1})]),_:1},8,["loading","table"])]),_:1}))}});export{O as default};
//# sourceMappingURL=EnvVarsEditor.33bf2b33.js.map
