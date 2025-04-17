import{L as $}from"./tasksController.d78fd33b.js";import{d as k,e as f,o as y,c as _,w as u,b as p,u as r,bL as I,cz as b,cy as w,f as v,Y as R,aB as x,ef as C,z as D}from"./index.a2737cd4.js";import{a as W}from"./asyncComputed.8feee535.js";import"./linters.2556ac81.js";import{S as A}from"./scripts.71c64828.js";import{W as B}from"./workspaces.89c06770.js";import{R as L,_ as N}from"./RuntimeCommonSettings.362e37d4.js";import{_ as P}from"./RunButton.vue_vue_type_script_setup_true_lang.639d8ce7.js";import"./gateway.acdb2962.js";import"./popupNotifcation.0b17d594.js";import"./polling.a59d257a.js";import"./string.65ae7559.js";import"./record.dae8bb81.js";import"./workspaceStore.7dd1a2ed.js";import"./url.fc767289.js";import"./colorHelpers.d4c45902.js";import"./BaseLayout.a2181334.js";import"./SaveButton.247ac987.js";import"./UnsavedChangesHandler.1070d609.js";import"./ExclamationCircleOutlined.658c6178.js";import"./log.48f2824e.js";import"./AbstraLogo.vue_vue_type_script_setup_true_lang.d74e61b0.js";import"./Logo.f0f54262.js";import"./AbstraButton.vue_vue_type_script_setup_true_lang.24d66f6e.js";import"./PhArrowCounterClockwise.vue.1eca3163.js";import"./PhFilePy.vue.2cd77da9.js";import"./PhChats.vue.d862fb10.js";import"./PhRocket.vue.ff48b57b.js";import"./PhPackage.vue.1d9169c7.js";import"./PhArrowSquareOut.vue.d863eb60.js";import"./PhSignOut.vue.9a8de7eb.js";import"./editor.47ad2c2c.js";import"./index.81d721d2.js";import"./CloseCircleOutlined.06c57a0a.js";import"./CheckCircleFilled.9afad5b5.js";import"./index.a675dffd.js";import"./ai.3e198549.js";import"./uuid.14531530.js";import"./PhCheckCircle.vue.9c8c7207.js";import"./PhCopySimple.vue.e541d8e4.js";import"./controller.94210604.js";import"./vue-flow-core.371db273.js";import"./validations.1e264b6c.js";import"./metadata.12d88b00.js";import"./PhRobot.vue.a869165a.js";import"./PhWebhooksLogo.vue.eaa86ce2.js";import"./controller.8a033442.js";import"./fetch.86487e0e.js";import"./PhPencil.vue.dce2dfaf.js";import"./ant-design.fbd26ace.js";import"./Avatar.78cee48a.js";import"./LoadingOutlined.c8e20d30.js";import"./Card.574e6b8d.js";import"./TabPane.92e64a81.js";import"./SourceCode.c87c3422.js";import"./PhFolder.vue.1a36a865.js";import"./toggleHighContrast.bfb980a4.js";import"./TasksManager.d86c830e.js";import"./index.a1b24b2a.js";import"./CollapsePanel.ef62d92f.js";import"./index.6c0be8e7.js";import"./PhCaretRight.vue.b1741531.js";import"./Badge.f6fd28a1.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},l=new Error().stack;l&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[l]="9319ab78-6d62-41a3-a547-a50b3411ff2e",a._sentryDebugIdIdentifier="sentry-dbid-9319ab78-6d62-41a3-a547-a50b3411ff2e")}catch{}})();const E=k({__name:"ScriptSettings",props:{script:{}},setup(a){const e=f(a.script);return(d,s)=>(y(),_(r(w),{layout:"vertical",style:{"padding-bottom":"50px"}},{default:u(()=>[p(r(b),{label:"Name",required:""},{default:u(()=>[p(r(I),{value:e.value.title,"onUpdate:value":s[0]||(s[0]=m=>e.value.title=m)},null,8,["value"])]),_:1}),p(L,{runtime:e.value},null,8,["runtime"])]),_:1}))}}),z={style:{width:"100%",display:"flex","flex-direction":"column"}},F=k({__name:"ScriptTester",props:{script:{},disabledWarning:{},tasks:{}},emits:["refetch-tasks"],setup(a,{emit:l}){const e=a,d=v(()=>{var t,i;return(i=(t=e.tasks)==null?void 0:t.map(c=>{const S=c.payload,g=JSON.stringify(S,null,2),h=g.length>80?g.slice(0,80)+"...":g,T=new Date(c.created.at).toLocaleString();return{label:`${h} - ${T}`,value:c.id}}))!=null?i:[]}),s=f(void 0),m=v(()=>s.value?null:{title:"No trigger task selected",message:"Please select the task that will trigger the script"}),o=f(!1),n=async()=>{var t;o.value=!0;try{await e.script.run((t=s.value)!=null?t:null)}finally{o.value=!1,s.value=void 0,l("refetch-tasks",e.script.id)}};return(t,i)=>(y(),R("div",z,[p(r(w),{layout:"vertical",style:{overflow:"auto"}},{default:u(()=>[p(r(b),{label:"Trigger task"},{default:u(()=>[p(r(x),{options:d.value,value:s.value,onSelect:i[0]||(i[0]=c=>s.value=c)},null,8,["options","value"])]),_:1})]),_:1}),p(P,{loading:o.value,disabled:t.disabledWarning||m.value,onClick:n,onSave:i[1]||(i[1]=c=>t.script.save())},null,8,["loading","disabled"])]))}}),Kt=k({__name:"ScriptEditor",setup(a){const l=C(),e=f(null),d=new $,s=v(()=>{var n;return(n=o.value)!=null&&n.script.hasChanges()?{title:"Unsaved changes",message:"Save the form before running the workflow"}:null}),m=async n=>{const t=await d.getStageTasks(n);e.value=t.tasks.filter(i=>i.status==="pending")},{result:o}=W(async()=>{const[n,t]=await Promise.all([B.get(),A.get(l.params.id)]);return m(t.id),D({workspace:n,script:t})});return(n,t)=>(y(),_(N,{stage:r(o).script,workspace:r(o).workspace,"stage-type":"scripts",onRefetchTasks:t[0]||(t[0]=i=>m(r(o).script.id))},{settings:u(()=>[p(E,{script:r(o).script},null,8,["script"])]),test:u(()=>[p(F,{ref:"tester",script:r(o).script,"disabled-warning":s.value,tasks:e.value,onRefetchTasks:m},null,8,["script","disabled-warning","tasks"])]),_:1},8,["stage","workspace"]))}});export{Kt as default};
//# sourceMappingURL=ScriptEditor.ef9d1c55.js.map
