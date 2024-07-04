import{d as f,$ as y,a1 as b,f as v,o as _,c as g,w as r,eN as k,b as i,u as s,bH as w,as as u}from"./vue-router.fbddf5a3.js";import{E as l,W as C}from"./workspaces.c448b876.js";import{C as x}from"./ContentLayout.79ec3b6a.js";import{C as h}from"./CrudView.cffd1bb0.js";import{A as E}from"./index.ea6d25ad.js";import"./asyncComputed.e8b75ca8.js";import"./runnerData.7735c01a.js";import"./url.90669b83.js";import"./record.3087822e.js";import"./router.5df8cef8.js";import"./gateway.7775b099.js";import"./popupNotifcation.f3f41f28.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.5eee544a.js";import"./BookOutlined.c2cd801a.js";import"./index.60baa601.js";import"./index.33ec66db.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[a]="86acaf55-00d5-49f4-ad8a-25472b4c1308",o._sentryDebugIdIdentifier="sentry-dbid-86acaf55-00d5-49f4-ad8a-25472b4c1308")}catch{}})();const O=f({__name:"EnvVarsEditor",setup(o){let a=null;y(()=>{a=setInterval(l.listComputed.refetch,2e3)}),b(()=>{a&&clearInterval(a)});function d(){var e;(e=C.computed.result.value)==null||e.openFile(".env")}const m=[{label:"Variable name",key:"key"},{label:"Variable value",key:"value",type:"multiline-text"}],p=v(()=>{var e,t;return{columns:[{name:"Key"},{name:"Value"},{name:""}],rows:(t=(e=l.listComputed.result.value)==null?void 0:e.map(n=>({key:n.key,cells:[{type:"text",text:n.key},{text:n.value,type:"secret"},{type:"actions",actions:[{icon:k,label:"Delete",onClick:()=>n.delete(),dangerous:!0}]}]})))!=null?t:[]}});async function c({key:e,value:t}){await l.create(e,t)}return(e,t)=>(_(),g(x,null,{default:r(()=>[i(h,{"entity-name":"Env var",loading:s(l).listComputed.loading.value,title:"Environment Variables",description:"Set environment variables for your project.","empty-title":"No environment variables set",table:p.value,"create-button-text":"Add Environment Variable",fields:m,live:"",onCreate:c},{secondary:r(()=>[i(s(w),{onClick:t[0]||(t[0]=n=>d())},{default:r(()=>[u("Open .env")]),_:1})]),extra:r(()=>[i(s(E),{"show-icon":"",style:{"margin-top":"20px"}},{message:r(()=>[u(" This is simply a helper to manage your environment variables locally. The variables set here will not be deployed to Cloud with your project. ")]),_:1})]),_:1},8,["loading","table"])]),_:1}))}});export{O as default};
//# sourceMappingURL=EnvVarsEditor.60a1ece0.js.map
