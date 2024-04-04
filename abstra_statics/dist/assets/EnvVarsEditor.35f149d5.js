import{d as b,o as y,K as f,H as v,b as _,eu as g,f as l,w as a,u as s,eP as w,bE as x,aq as d}from"./outputWidgets.7ffc49d3.js";import{W as k}from"./workspaces.d9030b1f.js";import{E as i}from"./envVars.4ad5dbf0.js";import{C}from"./CrudView.07fb3282.js";import{A as E}from"./index.fd127c38.js";import"./runnerData.9b620ab6.js";import"./url.bff15b9b.js";import"./record.11193481.js";import"./pubsub.3fa26947.js";import"./asyncComputed.6b0e680a.js";import"./Paragraph.33b54c23.js";import"./Text.fd23e236.js";import"./Form.ef0537a8.js";import"./hasIn.b71675cc.js";import"./Modal.169f2353.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.81801ea6.js";import"./BookOutlined.a4ebf9a9.js";import"./router.89d372f9.js";import"./popupNotifcation.dd713ce5.js";import"./index.02c19441.js";import"./Title.509caef5.js";import"./index.800aa570.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[o]="795452b8-8325-4b9d-9e29-bb5c2b2dfe45",n._sentryDebugIdIdentifier="sentry-dbid-795452b8-8325-4b9d-9e29-bb5c2b2dfe45")}catch{}})();const h={style:{display:"flex","flex-direction":"column","justify-content":"center",padding:"40px 120px"}},L=b({__name:"EnvVarsEditor",setup(n){let o=null;y(()=>{o=setInterval(i.listComputed.refetch,2e3)}),f(()=>{o&&clearInterval(o)});function p(){var e;(e=k.computed.result.value)==null||e.openFile(".env")}const m=[{label:"Variable name",key:"key"},{label:"Variable value",key:"value",type:"password"}],u=v(()=>{var e,t;return{columns:[{name:"Key"},{name:"Value"},{name:""}],rows:(t=(e=i.listComputed.result.value)==null?void 0:e.map(r=>({key:r.key,cells:[{type:"text",text:r.key},{text:r.value,type:"secret"},{type:"actions",actions:[{icon:w,label:"Delete",onClick:()=>r.delete(),dangerous:!0}]}]})))!=null?t:[]}});async function c({key:e,value:t}){await i.create(e,t)}return(e,t)=>(_(),g("div",h,[l(C,{"entity-name":"Env var",loading:s(i).listComputed.loading.value,title:"Environment Variables",description:"Set environment variables for your project.","empty-title":"No environment variables set",table:u.value,"create-button-text":"Add Environment Variable",fields:m,live:"",onCreate:c},{secondary:a(()=>[l(s(x),{onClick:t[0]||(t[0]=r=>p())},{default:a(()=>[d("Open .env")]),_:1})]),extra:a(()=>[l(s(E),{"show-icon":"",style:{"margin-top":"20px"}},{message:a(()=>[d(" This is simply a helper to manage your environment variables locally. The variables set here will not be deployed to Cloud with your project. ")]),_:1})]),_:1},8,["loading","table"])]))}});export{L as default};
//# sourceMappingURL=EnvVarsEditor.35f149d5.js.map
