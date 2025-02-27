import{L as $}from"./tasksController.9967831b.js";import{d as k,e as f,o as y,c as b,w as u,b as l,u as r,bL as I,cz as _,cy as w,f as v,Y as R,aB as x,ea as C,z as D}from"./index.883d843b.js";import{a as W}from"./asyncComputed.f47b60a4.js";import"./linters.d9de4f6b.js";import{S as A}from"./scripts.a6a9e479.js";import{W as B}from"./workspaces.2c249d53.js";import{R as L,_ as N}from"./RuntimeCommonSettings.325a5c18.js";import{_ as P}from"./RunButton.vue_vue_type_script_setup_true_lang.8e6093ca.js";import"./gateway.f01d4fa8.js";import"./popupNotifcation.fb4e0267.js";import"./polling.00402972.js";import"./string.0b5b153d.js";import"./record.a3b34dfe.js";import"./workspaceStore.21491d63.js";import"./url.52c07a55.js";import"./colorHelpers.c6a5ae82.js";import"./BaseLayout.d8e6b868.js";import"./SaveButton.349a4197.js";import"./UnsavedChangesHandler.0c051462.js";import"./ExclamationCircleOutlined.95713736.js";import"./uuid.45325c95.js";import"./NavbarControls.88a46341.js";import"./index.53eda5ea.js";import"./CloseCircleOutlined.49a18ad3.js";import"./index.8448e682.js";import"./editor.6319857d.js";import"./PhArrowSquareOut.vue.700d5adc.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.0c149dc1.js";import"./BookOutlined.f6472a04.js";import"./PhChats.vue.233fdae2.js";import"./AbstraLogo.vue_vue_type_script_setup_true_lang.b909ae39.js";import"./Logo.48a5e431.js";import"./ant-design.f1e5c17d.js";import"./ai.55ae34ba.js";import"./PhCheckCircle.vue.7f99445e.js";import"./PhCopySimple.vue.aa83b28f.js";import"./Avatar.a83b2aeb.js";import"./LoadingOutlined.563f2a62.js";import"./Card.9eef5062.js";import"./TabPane.a69f6477.js";import"./PhCaretRight.vue.ef5cc08d.js";import"./Badge.a22af996.js";import"./PhFolder.vue.8550fb50.js";import"./PhPencil.vue.208a60ab.js";import"./validations.922ccbee.js";import"./toggleHighContrast.35a21deb.js";import"./TasksManager.484a1757.js";import"./AbstraButton.vue_vue_type_script_setup_true_lang.e52dd5be.js";import"./index.559f0437.js";import"./CollapsePanel.258efa8e.js";import"./index.70224e40.js";import"./index.c467238f.js";import"./index.b57a22f3.js";(function(){try{var i=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},p=new Error().stack;p&&(i._sentryDebugIds=i._sentryDebugIds||{},i._sentryDebugIds[p]="8189c30e-2bc1-4636-b572-538512bfaf4e",i._sentryDebugIdIdentifier="sentry-dbid-8189c30e-2bc1-4636-b572-538512bfaf4e")}catch{}})();const E=k({__name:"ScriptSettings",props:{script:{}},setup(i){const e=f(i.script);return(d,s)=>(y(),b(r(w),{layout:"vertical",style:{"padding-bottom":"50px"}},{default:u(()=>[l(r(_),{label:"Name",required:""},{default:u(()=>[l(r(I),{value:e.value.title,"onUpdate:value":s[0]||(s[0]=c=>e.value.title=c)},null,8,["value"])]),_:1}),l(L,{runtime:e.value},null,8,["runtime"])]),_:1}))}}),z={style:{width:"100%",display:"flex","flex-direction":"column"}},F=k({__name:"ScriptTester",props:{script:{},disabledWarning:{},tasks:{}},emits:["refetch-tasks"],setup(i,{emit:p}){const e=i,d=v(()=>{var t,a;return(a=(t=e.tasks)==null?void 0:t.map(m=>{const S=m.payload,g=JSON.stringify(S,null,2),h=g.length>80?g.slice(0,80)+"...":g,T=new Date(m.created.at).toLocaleString();return{label:`${h} - ${T}`,value:m.id}}))!=null?a:[]}),s=f(void 0),c=v(()=>s.value?null:{title:"No trigger task selected",message:"Please select the task that will trigger the script"}),o=f(!1),n=async()=>{var t;o.value=!0;try{await e.script.run((t=s.value)!=null?t:null)}finally{o.value=!1,s.value=void 0,p("refetch-tasks",e.script.id)}};return(t,a)=>(y(),R("div",z,[l(r(w),{layout:"vertical",style:{overflow:"auto"}},{default:u(()=>[l(r(_),{label:"Trigger task"},{default:u(()=>[l(r(x),{options:d.value,value:s.value,onSelect:a[0]||(a[0]=m=>s.value=m)},null,8,["options","value"])]),_:1})]),_:1}),l(P,{loading:o.value,disabled:t.disabledWarning||c.value,onClick:n,onSave:a[1]||(a[1]=m=>t.script.save())},null,8,["loading","disabled"])]))}}),Mt=k({__name:"ScriptEditor",setup(i){const p=C(),e=f(null),d=new $,s=v(()=>{var n;return(n=o.value)!=null&&n.script.hasChanges()?{title:"Unsaved changes",message:"Save the form before running the workflow"}:null}),c=async n=>{const t=await d.getStageTasks(n);e.value=t.tasks.filter(a=>a.status==="pending")},{result:o}=W(async()=>{const[n,t]=await Promise.all([B.get(),A.get(p.params.id)]);return c(t.id),D({workspace:n,script:t})});return(n,t)=>(y(),b(N,{stage:r(o).script,workspace:r(o).workspace,"stage-type":"scripts",onRefetchTasks:t[0]||(t[0]=a=>c(r(o).script.id))},{settings:u(()=>[l(E,{script:r(o).script},null,8,["script"])]),test:u(()=>[l(F,{ref:"tester",script:r(o).script,"disabled-warning":s.value,tasks:e.value,onRefetchTasks:c},null,8,["script","disabled-warning","tasks"])]),_:1},8,["stage","workspace"]))}});export{Mt as default};
//# sourceMappingURL=ScriptEditor.61d31c1f.js.map
