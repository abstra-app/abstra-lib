import{L as $}from"./tasksController.d3fb4ac4.js";import{d as k,e as f,o as y,c as _,w as u,b as l,u as r,bL as I,cz as b,cy as w,f as v,Y as R,aB as x,ea as C,z as D}from"./index.c29ec4a8.js";import{a as W}from"./asyncComputed.adefd745.js";import"./linters.35fd0752.js";import{S as A}from"./scripts.7a0f4876.js";import{W as B}from"./workspaces.fc45f39f.js";import{R as L,_ as N}from"./RuntimeCommonSettings.909e756f.js";import{_ as P}from"./RunButton.vue_vue_type_script_setup_true_lang.2bf39809.js";import"./gateway.ff64fc32.js";import"./popupNotifcation.6432128e.js";import"./polling.5d952f6a.js";import"./string.252ffa57.js";import"./record.6c12f8d7.js";import"./workspaceStore.5b185ede.js";import"./url.86895cf6.js";import"./colorHelpers.9905b14e.js";import"./BaseLayout.ef8f161a.js";import"./SaveButton.22c78357.js";import"./UnsavedChangesHandler.53f501da.js";import"./ExclamationCircleOutlined.469be53b.js";import"./uuid.53ee9b29.js";import"./NavbarControls.7c7c4d12.js";import"./index.d23b409e.js";import"./CloseCircleOutlined.3898d714.js";import"./index.4f6780a4.js";import"./editor.d33ba028.js";import"./PhArrowSquareOut.vue.79f3f73a.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.d4dffcec.js";import"./BookOutlined.b0b52cdf.js";import"./PhChats.vue.43206927.js";import"./AbstraLogo.vue_vue_type_script_setup_true_lang.d79eea6c.js";import"./Logo.60a5f6ca.js";import"./ant-design.0cbf15fc.js";import"./ai.f58fc1b5.js";import"./PhCheckCircle.vue.0fa58355.js";import"./PhCopySimple.vue.ae7637bc.js";import"./Avatar.dbb92461.js";import"./LoadingOutlined.994fc7b7.js";import"./Card.b3791cab.js";import"./TabPane.5fd949c3.js";import"./PhCaretRight.vue.15eb56b9.js";import"./Badge.f00721a2.js";import"./PhFolder.vue.b56f0c4e.js";import"./PhPencil.vue.6f23ca5a.js";import"./validations.531e4a21.js";import"./toggleHighContrast.b346e9e8.js";import"./TasksManager.c6cf88b4.js";import"./AbstraButton.vue_vue_type_script_setup_true_lang.c08a243c.js";import"./index.990629df.js";import"./CollapsePanel.3c96379b.js";import"./index.fd016956.js";import"./index.a228d535.js";import"./index.6e2ba25c.js";(function(){try{var i=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},p=new Error().stack;p&&(i._sentryDebugIds=i._sentryDebugIds||{},i._sentryDebugIds[p]="15a948ae-7007-4e8c-ba0d-9c2e66f2cbde",i._sentryDebugIdIdentifier="sentry-dbid-15a948ae-7007-4e8c-ba0d-9c2e66f2cbde")}catch{}})();const E=k({__name:"ScriptSettings",props:{script:{}},setup(i){const e=f(i.script);return(d,s)=>(y(),_(r(w),{layout:"vertical",style:{"padding-bottom":"50px"}},{default:u(()=>[l(r(b),{label:"Name",required:""},{default:u(()=>[l(r(I),{value:e.value.title,"onUpdate:value":s[0]||(s[0]=c=>e.value.title=c)},null,8,["value"])]),_:1}),l(L,{runtime:e.value},null,8,["runtime"])]),_:1}))}}),z={style:{width:"100%",display:"flex","flex-direction":"column"}},F=k({__name:"ScriptTester",props:{script:{},disabledWarning:{},tasks:{}},emits:["refetch-tasks"],setup(i,{emit:p}){const e=i,d=v(()=>{var t,o;return(o=(t=e.tasks)==null?void 0:t.map(m=>{const S=m.payload,g=JSON.stringify(S,null,2),h=g.length>80?g.slice(0,80)+"...":g,T=new Date(m.created.at).toLocaleString();return{label:`${h} - ${T}`,value:m.id}}))!=null?o:[]}),s=f(void 0),c=v(()=>s.value?null:{title:"No trigger task selected",message:"Please select the task that will trigger the script"}),a=f(!1),n=async()=>{var t;a.value=!0;try{await e.script.run((t=s.value)!=null?t:null)}finally{a.value=!1,s.value=void 0,p("refetch-tasks",e.script.id)}};return(t,o)=>(y(),R("div",z,[l(r(w),{layout:"vertical",style:{overflow:"auto"}},{default:u(()=>[l(r(b),{label:"Trigger task"},{default:u(()=>[l(r(x),{options:d.value,value:s.value,onSelect:o[0]||(o[0]=m=>s.value=m)},null,8,["options","value"])]),_:1})]),_:1}),l(P,{loading:a.value,disabled:t.disabledWarning||c.value,onClick:n,onSave:o[1]||(o[1]=m=>t.script.save())},null,8,["loading","disabled"])]))}}),Mt=k({__name:"ScriptEditor",setup(i){const p=C(),e=f(null),d=new $,s=v(()=>{var n;return(n=a.value)!=null&&n.script.hasChanges()?{title:"Unsaved changes",message:"Save the form before running the workflow"}:null}),c=async n=>{const t=await d.getStageTasks(n);e.value=t.tasks.filter(o=>o.status==="pending")},{result:a}=W(async()=>{const[n,t]=await Promise.all([B.get(),A.get(p.params.id)]);return c(t.id),D({workspace:n,script:t})});return(n,t)=>(y(),_(N,{stage:r(a).script,workspace:r(a).workspace,"stage-type":"scripts",onRefetchTasks:t[0]||(t[0]=o=>c(r(a).script.id))},{settings:u(()=>[l(E,{script:r(a).script},null,8,["script"])]),test:u(()=>[l(F,{ref:"tester",script:r(a).script,"disabled-warning":s.value,tasks:e.value,onRefetchTasks:c},null,8,["script","disabled-warning","tasks"])]),_:1},8,["stage","workspace"]))}});export{Mt as default};
//# sourceMappingURL=ScriptEditor.62d5fd31.js.map
