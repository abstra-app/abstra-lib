import{L as $}from"./tasksController.e1069380.js";import{d as k,e as f,o as y,c as b,w as u,b as l,u as r,bL as I,cz as _,cy as w,f as v,Y as R,aB as x,ea as C,z as D}from"./index.9ec4908b.js";import{a as W}from"./asyncComputed.dff47d77.js";import"./linters.2be430ba.js";import{S as A}from"./scripts.daf6ddd9.js";import{W as B}from"./workspaces.f0c8c187.js";import{R as L,_ as N}from"./RuntimeCommonSettings.2a2284a0.js";import{_ as P}from"./RunButton.vue_vue_type_script_setup_true_lang.38482397.js";import"./gateway.988e63eb.js";import"./popupNotifcation.74211ce2.js";import"./polling.f243698e.js";import"./string.928c5604.js";import"./record.82c779cf.js";import"./workspaceStore.ce71caf7.js";import"./url.9b32da79.js";import"./colorHelpers.917d3f18.js";import"./BaseLayout.ea979808.js";import"./SaveButton.1bb7c2f5.js";import"./UnsavedChangesHandler.b5cbee23.js";import"./ExclamationCircleOutlined.574ee8b7.js";import"./uuid.9ab7f747.js";import"./NavbarControls.d09c57fc.js";import"./index.8dd8b6be.js";import"./CloseCircleOutlined.92e7ac65.js";import"./index.6ea424cc.js";import"./editor.cacfdebf.js";import"./PhArrowSquareOut.vue.e2433c03.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.a2f555ac.js";import"./BookOutlined.fc1f41dc.js";import"./PhChats.vue.4ec58028.js";import"./AbstraLogo.vue_vue_type_script_setup_true_lang.b76166b2.js";import"./Logo.38601fbb.js";import"./ant-design.f5a10d13.js";import"./ai.575e586d.js";import"./PhCheckCircle.vue.a8728c8a.js";import"./PhCopySimple.vue.8628a1f8.js";import"./Avatar.3b237189.js";import"./LoadingOutlined.755e1f30.js";import"./Card.2890f1d0.js";import"./TabPane.2ba9330d.js";import"./PhCaretRight.vue.ee70e2f7.js";import"./Badge.54c2a3b4.js";import"./PhFolder.vue.b67bf34f.js";import"./PhPencil.vue.4b90d8c4.js";import"./validations.16b891b5.js";import"./toggleHighContrast.9bd3303c.js";import"./TasksManager.ac13b5d7.js";import"./AbstraButton.vue_vue_type_script_setup_true_lang.c8ea23b2.js";import"./index.ab212e90.js";import"./CollapsePanel.c1e1ce84.js";import"./index.fb0c41e1.js";import"./index.831752bf.js";import"./index.d2041f5d.js";(function(){try{var i=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},p=new Error().stack;p&&(i._sentryDebugIds=i._sentryDebugIds||{},i._sentryDebugIds[p]="71870847-5a17-409b-b6db-d3acc8862025",i._sentryDebugIdIdentifier="sentry-dbid-71870847-5a17-409b-b6db-d3acc8862025")}catch{}})();const E=k({__name:"ScriptSettings",props:{script:{}},setup(i){const e=f(i.script);return(d,s)=>(y(),b(r(w),{layout:"vertical",style:{"padding-bottom":"50px"}},{default:u(()=>[l(r(_),{label:"Name",required:""},{default:u(()=>[l(r(I),{value:e.value.title,"onUpdate:value":s[0]||(s[0]=c=>e.value.title=c)},null,8,["value"])]),_:1}),l(L,{runtime:e.value},null,8,["runtime"])]),_:1}))}}),z={style:{width:"100%",display:"flex","flex-direction":"column"}},F=k({__name:"ScriptTester",props:{script:{},disabledWarning:{},tasks:{}},emits:["refetch-tasks"],setup(i,{emit:p}){const e=i,d=v(()=>{var t,o;return(o=(t=e.tasks)==null?void 0:t.map(m=>{const S=m.payload,g=JSON.stringify(S,null,2),h=g.length>80?g.slice(0,80)+"...":g,T=new Date(m.created.at).toLocaleString();return{label:`${h} - ${T}`,value:m.id}}))!=null?o:[]}),s=f(void 0),c=v(()=>s.value?null:{title:"No trigger task selected",message:"Please select the task that will trigger the script"}),a=f(!1),n=async()=>{var t;a.value=!0;try{await e.script.run((t=s.value)!=null?t:null)}finally{a.value=!1,s.value=void 0,p("refetch-tasks",e.script.id)}};return(t,o)=>(y(),R("div",z,[l(r(w),{layout:"vertical",style:{overflow:"auto"}},{default:u(()=>[l(r(_),{label:"Trigger task"},{default:u(()=>[l(r(x),{options:d.value,value:s.value,onSelect:o[0]||(o[0]=m=>s.value=m)},null,8,["options","value"])]),_:1})]),_:1}),l(P,{loading:a.value,disabled:t.disabledWarning||c.value,onClick:n,onSave:o[1]||(o[1]=m=>t.script.save())},null,8,["loading","disabled"])]))}}),Mt=k({__name:"ScriptEditor",setup(i){const p=C(),e=f(null),d=new $,s=v(()=>{var n;return(n=a.value)!=null&&n.script.hasChanges()?{title:"Unsaved changes",message:"Save the form before running the workflow"}:null}),c=async n=>{const t=await d.getStageTasks(n);e.value=t.tasks.filter(o=>o.status==="pending")},{result:a}=W(async()=>{const[n,t]=await Promise.all([B.get(),A.get(p.params.id)]);return c(t.id),D({workspace:n,script:t})});return(n,t)=>(y(),b(N,{stage:r(a).script,workspace:r(a).workspace,"stage-type":"scripts",onRefetchTasks:t[0]||(t[0]=o=>c(r(a).script.id))},{settings:u(()=>[l(E,{script:r(a).script},null,8,["script"])]),test:u(()=>[l(F,{ref:"tester",script:r(a).script,"disabled-warning":s.value,tasks:e.value,onRefetchTasks:c},null,8,["script","disabled-warning","tasks"])]),_:1},8,["stage","workspace"]))}});export{Mt as default};
//# sourceMappingURL=ScriptEditor.496bd8e8.js.map
