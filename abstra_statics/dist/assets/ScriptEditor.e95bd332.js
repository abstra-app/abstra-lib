import{L as $}from"./tasksController.0a38a9ad.js";import{d as k,e as f,o as y,c as _,w as u,b as l,u as r,bL as I,cz as w,cy as b,f as v,Y as R,aB as x,ea as C,z as D}from"./index.9c81dd20.js";import{a as W}from"./asyncComputed.312d2ed5.js";import"./linters.1f872024.js";import{S as A}from"./scripts.77a62b39.js";import{W as B}from"./workspaces.a874d451.js";import{R as L,_ as N}from"./RuntimeCommonSettings.54bd951d.js";import{_ as P}from"./RunButton.vue_vue_type_script_setup_true_lang.2039fd26.js";import"./gateway.f8e11b77.js";import"./popupNotifcation.bbb08d32.js";import"./polling.296265f4.js";import"./string.9582e7c1.js";import"./record.2af5acaa.js";import"./workspaceStore.7f55f047.js";import"./url.308976bd.js";import"./colorHelpers.feb8987b.js";import"./BaseLayout.b85bb226.js";import"./SaveButton.33bf5aab.js";import"./UnsavedChangesHandler.a95d8378.js";import"./ExclamationCircleOutlined.2d33d1f6.js";import"./uuid.8430e716.js";import"./NavbarControls.2befa1b4.js";import"./index.52f9ad30.js";import"./CloseCircleOutlined.814153f0.js";import"./index.b7872494.js";import"./editor.ac112797.js";import"./PhArrowSquareOut.vue.7c10aefb.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.9548794e.js";import"./BookOutlined.d0ebf816.js";import"./PhChats.vue.6fdbc738.js";import"./AbstraLogo.vue_vue_type_script_setup_true_lang.2b7c3bf4.js";import"./Logo.75407ce7.js";import"./ant-design.fb3682b2.js";import"./ai.33dc8cab.js";import"./PhCheckCircle.vue.1555d51e.js";import"./PhCopySimple.vue.32f9b019.js";import"./Avatar.7f38c8e9.js";import"./LoadingOutlined.0257aba8.js";import"./Card.7ac7ff17.js";import"./TabPane.95e2ef52.js";import"./PhCaretRight.vue.232b7ed8.js";import"./Badge.5ec63386.js";import"./PhFolder.vue.40dfefca.js";import"./PhPencil.vue.3c3beca0.js";import"./validations.a72bd537.js";import"./toggleHighContrast.6de06fd2.js";import"./TasksManager.fa1a64be.js";import"./AbstraButton.vue_vue_type_script_setup_true_lang.459144eb.js";import"./index.78ca2b92.js";import"./CollapsePanel.aaf5eb1b.js";import"./index.5988db8a.js";import"./index.484b255d.js";import"./index.03734639.js";(function(){try{var i=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},p=new Error().stack;p&&(i._sentryDebugIds=i._sentryDebugIds||{},i._sentryDebugIds[p]="79e4e241-73a2-4778-9ba7-638498077819",i._sentryDebugIdIdentifier="sentry-dbid-79e4e241-73a2-4778-9ba7-638498077819")}catch{}})();const E=k({__name:"ScriptSettings",props:{script:{}},setup(i){const e=f(i.script);return(d,s)=>(y(),_(r(b),{layout:"vertical",style:{"padding-bottom":"50px"}},{default:u(()=>[l(r(w),{label:"Name",required:""},{default:u(()=>[l(r(I),{value:e.value.title,"onUpdate:value":s[0]||(s[0]=m=>e.value.title=m)},null,8,["value"])]),_:1}),l(L,{runtime:e.value},null,8,["runtime"])]),_:1}))}}),z={style:{width:"100%",display:"flex","flex-direction":"column"}},F=k({__name:"ScriptTester",props:{script:{},disabledWarning:{},tasks:{}},emits:["refetch-tasks"],setup(i,{emit:p}){const e=i,d=v(()=>{var t,o;return(o=(t=e.tasks)==null?void 0:t.map(c=>{const S=c.payload,g=JSON.stringify(S,null,2),h=g.length>80?g.slice(0,80)+"...":g,T=new Date(c.created.at).toLocaleString();return{label:`${h} - ${T}`,value:c.id}}))!=null?o:[]}),s=f(void 0),m=v(()=>s.value?null:{title:"No trigger task selected",message:"Please select the task that will trigger the script"}),a=f(!1),n=async()=>{var t;a.value=!0;try{await e.script.run((t=s.value)!=null?t:null)}finally{a.value=!1,s.value=void 0,p("refetch-tasks",e.script.id)}};return(t,o)=>(y(),R("div",z,[l(r(b),{layout:"vertical",style:{overflow:"auto"}},{default:u(()=>[l(r(w),{label:"Trigger task"},{default:u(()=>[l(r(x),{options:d.value,value:s.value,onSelect:o[0]||(o[0]=c=>s.value=c)},null,8,["options","value"])]),_:1})]),_:1}),l(P,{loading:a.value,disabled:t.disabledWarning||m.value,onClick:n,onSave:o[1]||(o[1]=c=>t.script.save())},null,8,["loading","disabled"])]))}}),Mt=k({__name:"ScriptEditor",setup(i){const p=C(),e=f(null),d=new $,s=v(()=>{var n;return(n=a.value)!=null&&n.script.hasChanges()?{title:"Unsaved changes",message:"Save the form before running the workflow"}:null}),m=async n=>{const t=await d.getStageTasks(n);e.value=t.tasks.filter(o=>o.status==="pending")},{result:a}=W(async()=>{const[n,t]=await Promise.all([B.get(),A.get(p.params.id)]);return m(t.id),D({workspace:n,script:t})});return(n,t)=>(y(),_(N,{stage:r(a).script,workspace:r(a).workspace,"stage-type":"scripts",onRefetchTasks:t[0]||(t[0]=o=>m(r(a).script.id))},{settings:u(()=>[l(E,{script:r(a).script},null,8,["script"])]),test:u(()=>[l(F,{ref:"tester",script:r(a).script,"disabled-warning":s.value,tasks:e.value,onRefetchTasks:m},null,8,["script","disabled-warning","tasks"])]),_:1},8,["stage","workspace"]))}});export{Mt as default};
//# sourceMappingURL=ScriptEditor.e95bd332.js.map
