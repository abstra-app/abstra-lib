import{L as $}from"./tasksController.719843f2.js";import{d as k,e as f,o as y,c as _,w as u,b as p,u as r,bL as I,cz as w,cy as b,f as v,Y as R,aB as x,ea as C,z as D}from"./index.86f25c77.js";import{a as W}from"./asyncComputed.aeacd985.js";import"./linters.69a3e6b8.js";import{S as A}from"./scripts.50ebf863.js";import{W as B}from"./workspaces.c2741cc5.js";import{R as L,_ as N}from"./RuntimeCommonSettings.1841a8f2.js";import{_ as P}from"./RunButton.vue_vue_type_script_setup_true_lang.d73280c5.js";import"./gateway.7a5e5e8c.js";import"./popupNotifcation.85503ad7.js";import"./polling.24154f32.js";import"./string.9db947db.js";import"./record.a7dc5292.js";import"./workspaceStore.67adab15.js";import"./url.42c88257.js";import"./colorHelpers.9248ec24.js";import"./BaseLayout.8581d552.js";import"./SaveButton.307a7861.js";import"./UnsavedChangesHandler.b5619404.js";import"./ExclamationCircleOutlined.d16293a8.js";import"./log.0b78e49e.js";import"./index.3b94930e.js";import"./CloseCircleOutlined.b9f577b5.js";import"./index.d15b3861.js";import"./editor.d33770ae.js";import"./PhArrowSquareOut.vue.dcb0a4ab.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.d3c5c634.js";import"./BookOutlined.8390c920.js";import"./PhChats.vue.62094fde.js";import"./ai.fe8812c9.js";import"./uuid.c967fa6b.js";import"./PhCheckCircle.vue.1264081c.js";import"./PhCopySimple.vue.45bf72a7.js";import"./controller.23b9c138.js";import"./vue-flow-core.36e57e38.js";import"./validations.38c482a8.js";import"./metadata.2cc79c59.js";import"./PhRobot.vue.06786955.js";import"./PhWebhooksLogo.vue.4de7522d.js";import"./controller.b915a453.js";import"./fetch.d6b84330.js";import"./PhPencil.vue.09cd9a86.js";import"./AbstraLogo.vue_vue_type_script_setup_true_lang.c4ad30e2.js";import"./Logo.4f880a27.js";import"./ant-design.eed4b1d5.js";import"./Avatar.f3920c2e.js";import"./LoadingOutlined.b1b383ea.js";import"./Card.98105fc5.js";import"./TabPane.05790b9a.js";import"./Badge.23cc2aab.js";import"./SourceCode.a2857c7b.js";import"./PhFolder.vue.b4724497.js";import"./toggleHighContrast.e90ef39e.js";import"./TasksManager.058c7371.js";import"./AbstraButton.vue_vue_type_script_setup_true_lang.12ceb2c5.js";import"./index.64ce1c39.js";import"./CollapsePanel.8de0528d.js";import"./index.d6bd4b73.js";import"./index.23b56dc9.js";import"./index.61c9a3f2.js";(function(){try{var i=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},l=new Error().stack;l&&(i._sentryDebugIds=i._sentryDebugIds||{},i._sentryDebugIds[l]="5fe907a7-c3e9-4ea5-8832-b67a42de5558",i._sentryDebugIdIdentifier="sentry-dbid-5fe907a7-c3e9-4ea5-8832-b67a42de5558")}catch{}})();const E=k({__name:"ScriptSettings",props:{script:{}},setup(i){const e=f(i.script);return(d,s)=>(y(),_(r(b),{layout:"vertical",style:{"padding-bottom":"50px"}},{default:u(()=>[p(r(w),{label:"Name",required:""},{default:u(()=>[p(r(I),{value:e.value.title,"onUpdate:value":s[0]||(s[0]=m=>e.value.title=m)},null,8,["value"])]),_:1}),p(L,{runtime:e.value},null,8,["runtime"])]),_:1}))}}),z={style:{width:"100%",display:"flex","flex-direction":"column"}},F=k({__name:"ScriptTester",props:{script:{},disabledWarning:{},tasks:{}},emits:["refetch-tasks"],setup(i,{emit:l}){const e=i,d=v(()=>{var t,a;return(a=(t=e.tasks)==null?void 0:t.map(c=>{const S=c.payload,g=JSON.stringify(S,null,2),h=g.length>80?g.slice(0,80)+"...":g,T=new Date(c.created.at).toLocaleString();return{label:`${h} - ${T}`,value:c.id}}))!=null?a:[]}),s=f(void 0),m=v(()=>s.value?null:{title:"No trigger task selected",message:"Please select the task that will trigger the script"}),o=f(!1),n=async()=>{var t;o.value=!0;try{await e.script.run((t=s.value)!=null?t:null)}finally{o.value=!1,s.value=void 0,l("refetch-tasks",e.script.id)}};return(t,a)=>(y(),R("div",z,[p(r(b),{layout:"vertical",style:{overflow:"auto"}},{default:u(()=>[p(r(w),{label:"Trigger task"},{default:u(()=>[p(r(x),{options:d.value,value:s.value,onSelect:a[0]||(a[0]=c=>s.value=c)},null,8,["options","value"])]),_:1})]),_:1}),p(P,{loading:o.value,disabled:t.disabledWarning||m.value,onClick:n,onSave:a[1]||(a[1]=c=>t.script.save())},null,8,["loading","disabled"])]))}}),jt=k({__name:"ScriptEditor",setup(i){const l=C(),e=f(null),d=new $,s=v(()=>{var n;return(n=o.value)!=null&&n.script.hasChanges()?{title:"Unsaved changes",message:"Save the form before running the workflow"}:null}),m=async n=>{const t=await d.getStageTasks(n);e.value=t.tasks.filter(a=>a.status==="pending")},{result:o}=W(async()=>{const[n,t]=await Promise.all([B.get(),A.get(l.params.id)]);return m(t.id),D({workspace:n,script:t})});return(n,t)=>(y(),_(N,{stage:r(o).script,workspace:r(o).workspace,"stage-type":"scripts",onRefetchTasks:t[0]||(t[0]=a=>m(r(o).script.id))},{settings:u(()=>[p(E,{script:r(o).script},null,8,["script"])]),test:u(()=>[p(F,{ref:"tester",script:r(o).script,"disabled-warning":s.value,tasks:e.value,onRefetchTasks:m},null,8,["script","disabled-warning","tasks"])]),_:1},8,["stage","workspace"]))}});export{jt as default};
//# sourceMappingURL=ScriptEditor.4b0956b8.js.map
