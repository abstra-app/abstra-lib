import{L as $}from"./tasksController.17fa3ab6.js";import{d as k,e as f,o as y,c as b,w as u,b as p,u as r,bL as I,cz as _,cy as w,f as v,Y as R,aB as x,ea as C,z as D}from"./index.5ea97cf1.js";import{a as W}from"./asyncComputed.d0c00c96.js";import"./linters.98c440df.js";import{S as A}from"./scripts.255b7136.js";import{W as B}from"./workspaces.6a3946e8.js";import{_ as L,a as N}from"./RunButton.vue_vue_type_script_setup_true_lang.d31a7e3b.js";import{R as P}from"./SmartChat.d216994c.js";import"./gateway.1c3fd5ff.js";import"./popupNotifcation.87719d10.js";import"./polling.382a0e38.js";import"./string.d30549f8.js";import"./record.ef3dfcde.js";import"./workspaceStore.37fc691c.js";import"./url.68c2ef84.js";import"./colorHelpers.9bfe96cd.js";import"./BaseLayout.24358ff2.js";import"./SaveButton.696676c3.js";import"./UnsavedChangesHandler.e32ab145.js";import"./ExclamationCircleOutlined.37fc0322.js";import"./NavbarControls.083d3c27.js";import"./index.14b6bb68.js";import"./CloseCircleOutlined.e5c1e306.js";import"./index.2745fa52.js";import"./editor.047f3fba.js";import"./PhArrowSquareOut.vue.ed5bae64.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.f52c2cfe.js";import"./BookOutlined.44a15509.js";import"./PhChats.vue.c0de04f9.js";import"./TasksManager.72f79ec2.js";import"./ant-design.3877365c.js";import"./AbstraButton.vue_vue_type_script_setup_true_lang.93a21c9f.js";import"./index.8a66ac21.js";import"./Card.feb869e9.js";import"./TabPane.dfa81262.js";import"./CollapsePanel.fd280832.js";import"./index.af18cc43.js";import"./index.e2676f0b.js";import"./index.6492ae3f.js";import"./Avatar.6d747165.js";import"./validations.4cd6def8.js";import"./uuid.10c2f46d.js";import"./PhCaretRight.vue.ff0ed528.js";import"./Badge.ef12843a.js";import"./LoadingOutlined.c8dd33d4.js";import"./PhFolder.vue.7708cf6c.js";import"./PhPencil.vue.44aec33c.js";import"./toggleHighContrast.d64decb0.js";import"./AbstraLogo.vue_vue_type_script_setup_true_lang.392fd850.js";import"./Logo.309ea5a3.js";import"./PhGear.vue.2ebc468c.js";import"./ai.c79dd5fc.js";import"./PhCheckCircle.vue.c5c2608c.js";import"./PhCopySimple.vue.ed27d328.js";(function(){try{var i=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},l=new Error().stack;l&&(i._sentryDebugIds=i._sentryDebugIds||{},i._sentryDebugIds[l]="370b6235-b9ca-49e5-802e-058acb7932e1",i._sentryDebugIdIdentifier="sentry-dbid-370b6235-b9ca-49e5-802e-058acb7932e1")}catch{}})();const E=k({__name:"ScriptSettings",props:{script:{}},setup(i){const e=f(i.script);return(d,s)=>(y(),b(r(w),{layout:"vertical",style:{"padding-bottom":"50px"}},{default:u(()=>[p(r(_),{label:"Name",required:""},{default:u(()=>[p(r(I),{value:e.value.title,"onUpdate:value":s[0]||(s[0]=m=>e.value.title=m)},null,8,["value"])]),_:1}),p(P,{runtime:e.value},null,8,["runtime"])]),_:1}))}}),z={style:{width:"100%",display:"flex","flex-direction":"column"}},F=k({__name:"ScriptTester",props:{script:{},disabledWarning:{},tasks:{}},emits:["refetch-tasks"],setup(i,{emit:l}){const e=i,d=v(()=>{var t,o;return(o=(t=e.tasks)==null?void 0:t.map(c=>{const S=c.payload,g=JSON.stringify(S,null,2),h=g.length>80?g.slice(0,80)+"...":g,T=new Date(c.created.at).toLocaleString();return{label:`${h} - ${T}`,value:c.id}}))!=null?o:[]}),s=f(void 0),m=v(()=>s.value?null:{title:"No trigger task selected",message:"Please select the task that will trigger the script"}),a=f(!1),n=async()=>{var t;a.value=!0;try{await e.script.run((t=s.value)!=null?t:null)}finally{a.value=!1,s.value=void 0,l("refetch-tasks",e.script.id)}};return(t,o)=>(y(),R("div",z,[p(r(w),{layout:"vertical",style:{overflow:"auto"}},{default:u(()=>[p(r(_),{label:"Trigger task"},{default:u(()=>[p(r(x),{options:d.value,value:s.value,onSelect:o[0]||(o[0]=c=>s.value=c)},null,8,["options","value"])]),_:1})]),_:1}),p(L,{loading:a.value,disabled:t.disabledWarning||m.value,onClick:n,onSave:o[1]||(o[1]=c=>t.script.save())},null,8,["loading","disabled"])]))}}),Ot=k({__name:"ScriptEditor",setup(i){const l=C(),e=f(null),d=new $,s=v(()=>{var n;return(n=a.value)!=null&&n.script.hasChanges()?{title:"Unsaved changes",message:"Save the form before running the workflow"}:null}),m=async n=>{const t=await d.getStageTasks(n);e.value=t.tasks.filter(o=>o.status==="pending")},{result:a}=W(async()=>{const[n,t]=await Promise.all([B.get(),A.get(l.params.id)]);return m(t.id),D({workspace:n,script:t})});return(n,t)=>(y(),b(N,{stage:r(a).script,workspace:r(a).workspace,"stage-type":"scripts",onRefetchTasks:t[0]||(t[0]=o=>m(r(a).script.id))},{settings:u(()=>[p(E,{script:r(a).script},null,8,["script"])]),test:u(()=>[p(F,{ref:"tester",script:r(a).script,"disabled-warning":s.value,tasks:e.value,onRefetchTasks:m},null,8,["script","disabled-warning","tasks"])]),_:1},8,["stage","workspace"]))}});export{Ot as default};
//# sourceMappingURL=ScriptEditor.cbe3ba74.js.map
