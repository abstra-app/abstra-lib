import{d as f,o as y,L as b,H as v,b as _,ev as g,f as l,w as r,u as s,bG as w,ar as m}from"./outputWidgets.71972c1f.js";import{W as x}from"./workspaces.efb0ec6c.js";import{E as i}from"./envVars.b8330927.js";import{i as k}from"./icons.26509fba.js";import{C}from"./CrudView.5fcac794.js";import{A as h}from"./index.f9ebb3bd.js";import"./runnerData.dfb425d1.js";import"./url.c69e3335.js";import"./record.6e40de7d.js";import"./pubsub.c6a35186.js";import"./asyncComputed.2a02ada4.js";import"./Paragraph.90f995b3.js";import"./Base.9948bf98.js";import"./Typography.798b0601.js";import"./Form.5bc711f3.js";import"./hasIn.c0bb3547.js";import"./Modal.dfe01843.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.eedbf230.js";import"./router.10896bef.js";import"./popupNotifcation.dcdd99cf.js";import"./index.88976319.js";import"./Title.ed231145.js";import"./Text.9a5f17b2.js";import"./index.965f0bb0.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[o]="7a72a071-45e2-4a1b-81f2-5f38e37a1400",a._sentryDebugIdIdentifier="sentry-dbid-7a72a071-45e2-4a1b-81f2-5f38e37a1400")}catch{}})();const E={style:{display:"flex","flex-direction":"column","justify-content":"center",padding:"40px 120px"}},R=f({__name:"EnvVarsEditor",setup(a){let o=null;y(()=>{o=setInterval(i.listComputed.refetch,2e3)}),b(()=>{o&&clearInterval(o)});function p(){var e;(e=x.computed.result.value)==null||e.openFile(".env")}const d=[{label:"Variable name",key:"key"},{label:"Variable value",key:"value",type:"password"}],u=v(()=>{var e,t;return{columns:[{name:"Key"},{name:"Value"},{name:""}],rows:(t=(e=i.listComputed.result.value)==null?void 0:e.map(n=>({key:n.key,cells:[{type:"text",text:n.key},{text:n.value,type:"secret"},{type:"actions",actions:[{icon:k,label:"Delete",onClick:()=>n.delete(),dangerous:!0}]}]})))!=null?t:[]}});async function c({key:e,value:t}){await i.create(e,t)}return(e,t)=>(_(),g("div",E,[l(C,{"entity-name":"Env var",loading:s(i).listComputed.loading.value,title:"Environment Variables",description:"Set environment variables for your project.","empty-title":"No environment variables set",table:u.value,"create-button-text":"Add Environment Variable",fields:d,live:"",onCreate:c},{secondary:r(()=>[l(s(w),{onClick:t[0]||(t[0]=n=>p())},{default:r(()=>[m("Open .env")]),_:1})]),extra:r(()=>[l(s(h),{"show-icon":"",style:{"margin-top":"20px"}},{message:r(()=>[m(" This is simply a helper to manage your environment variables locally. The variables set here will not be deployed to Cloud with your project. ")]),_:1})]),_:1},8,["loading","table"])]))}});export{R as default};
//# sourceMappingURL=EnvVarsEditor.852d6818.js.map
