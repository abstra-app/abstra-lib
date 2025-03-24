import{L as $}from"./tasksController.6021b79a.js";import{d as k,e as f,o as y,c as _,w as u,b as l,u as r,bL as I,cz as w,cy as b,f as v,Y as R,aB as x,ea as C,z as D}from"./index.69221ddd.js";import{a as W}from"./asyncComputed.7a95ce7b.js";import"./linters.a6cf277f.js";import{S as A}from"./scripts.b8a5f560.js";import{W as B}from"./workspaces.5507bc23.js";import{R as L,_ as N}from"./RuntimeCommonSettings.5c98fde5.js";import{_ as P}from"./RunButton.vue_vue_type_script_setup_true_lang.bd82f00c.js";import"./gateway.28e4f371.js";import"./popupNotifcation.b4d15ac5.js";import"./polling.7c290a25.js";import"./string.ef3cfe54.js";import"./record.8688487e.js";import"./workspaceStore.b637037c.js";import"./url.0e9756de.js";import"./colorHelpers.30122d57.js";import"./BaseLayout.0552b4d9.js";import"./SaveButton.c66f8a80.js";import"./UnsavedChangesHandler.447244b5.js";import"./ExclamationCircleOutlined.d6104a6c.js";import"./uuid.e4f0db5d.js";import"./NavbarControls.7bc2d09e.js";import"./index.f5f68706.js";import"./CloseCircleOutlined.594391d3.js";import"./index.574a0b88.js";import"./editor.169f168b.js";import"./PhArrowSquareOut.vue.a3522033.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.22c5172f.js";import"./BookOutlined.63147d20.js";import"./PhChats.vue.85ea4112.js";import"./AbstraLogo.vue_vue_type_script_setup_true_lang.77354d89.js";import"./Logo.fff7f92b.js";import"./ant-design.47ae17cb.js";import"./ai.208279fe.js";import"./PhCheckCircle.vue.fd9cd1cd.js";import"./PhCopySimple.vue.e427c0fc.js";import"./Avatar.212a9288.js";import"./LoadingOutlined.6c174c2d.js";import"./Card.206256ff.js";import"./TabPane.4c284a7d.js";import"./PhCaretRight.vue.22b2abbb.js";import"./Badge.d7b65930.js";import"./SourceCode.37efd364.js";import"./validations.eac6bbe8.js";import"./PhFolder.vue.fe0a28d2.js";import"./toggleHighContrast.dfe2a53c.js";import"./TasksManager.fa339671.js";import"./AbstraButton.vue_vue_type_script_setup_true_lang.16c61a47.js";import"./index.ab6203dc.js";import"./CollapsePanel.d0031fdd.js";import"./index.ac652e4a.js";import"./index.b2ddd406.js";import"./index.081da676.js";(function(){try{var i=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},p=new Error().stack;p&&(i._sentryDebugIds=i._sentryDebugIds||{},i._sentryDebugIds[p]="f8ef8530-bc70-43a6-a000-81025eda51d6",i._sentryDebugIdIdentifier="sentry-dbid-f8ef8530-bc70-43a6-a000-81025eda51d6")}catch{}})();const E=k({__name:"ScriptSettings",props:{script:{}},setup(i){const e=f(i.script);return(d,s)=>(y(),_(r(b),{layout:"vertical",style:{"padding-bottom":"50px"}},{default:u(()=>[l(r(w),{label:"Name",required:""},{default:u(()=>[l(r(I),{value:e.value.title,"onUpdate:value":s[0]||(s[0]=m=>e.value.title=m)},null,8,["value"])]),_:1}),l(L,{runtime:e.value},null,8,["runtime"])]),_:1}))}}),z={style:{width:"100%",display:"flex","flex-direction":"column"}},F=k({__name:"ScriptTester",props:{script:{},disabledWarning:{},tasks:{}},emits:["refetch-tasks"],setup(i,{emit:p}){const e=i,d=v(()=>{var t,o;return(o=(t=e.tasks)==null?void 0:t.map(c=>{const S=c.payload,g=JSON.stringify(S,null,2),h=g.length>80?g.slice(0,80)+"...":g,T=new Date(c.created.at).toLocaleString();return{label:`${h} - ${T}`,value:c.id}}))!=null?o:[]}),s=f(void 0),m=v(()=>s.value?null:{title:"No trigger task selected",message:"Please select the task that will trigger the script"}),a=f(!1),n=async()=>{var t;a.value=!0;try{await e.script.run((t=s.value)!=null?t:null)}finally{a.value=!1,s.value=void 0,p("refetch-tasks",e.script.id)}};return(t,o)=>(y(),R("div",z,[l(r(b),{layout:"vertical",style:{overflow:"auto"}},{default:u(()=>[l(r(w),{label:"Trigger task"},{default:u(()=>[l(r(x),{options:d.value,value:s.value,onSelect:o[0]||(o[0]=c=>s.value=c)},null,8,["options","value"])]),_:1})]),_:1}),l(P,{loading:a.value,disabled:t.disabledWarning||m.value,onClick:n,onSave:o[1]||(o[1]=c=>t.script.save())},null,8,["loading","disabled"])]))}}),Mt=k({__name:"ScriptEditor",setup(i){const p=C(),e=f(null),d=new $,s=v(()=>{var n;return(n=a.value)!=null&&n.script.hasChanges()?{title:"Unsaved changes",message:"Save the form before running the workflow"}:null}),m=async n=>{const t=await d.getStageTasks(n);e.value=t.tasks.filter(o=>o.status==="pending")},{result:a}=W(async()=>{const[n,t]=await Promise.all([B.get(),A.get(p.params.id)]);return m(t.id),D({workspace:n,script:t})});return(n,t)=>(y(),_(N,{stage:r(a).script,workspace:r(a).workspace,"stage-type":"scripts",onRefetchTasks:t[0]||(t[0]=o=>m(r(a).script.id))},{settings:u(()=>[l(E,{script:r(a).script},null,8,["script"])]),test:u(()=>[l(F,{ref:"tester",script:r(a).script,"disabled-warning":s.value,tasks:e.value,onRefetchTasks:m},null,8,["script","disabled-warning","tasks"])]),_:1},8,["stage","workspace"]))}});export{Mt as default};
//# sourceMappingURL=ScriptEditor.3b8ef007.js.map
