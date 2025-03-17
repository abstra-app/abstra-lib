import{L as $}from"./tasksController.e166e583.js";import{d as k,e as f,o as y,c as _,w as u,b as l,u as r,bL as I,cz as b,cy as w,f as v,Y as R,aB as x,ea as C,z as D}from"./index.af5935c5.js";import{a as W}from"./asyncComputed.d727f45f.js";import"./linters.be53f75b.js";import{S as A}from"./scripts.71a339af.js";import{W as B}from"./workspaces.360e7b11.js";import{R as L,_ as N}from"./RuntimeCommonSettings.c8997509.js";import{_ as P}from"./RunButton.vue_vue_type_script_setup_true_lang.651b542e.js";import"./gateway.080706ea.js";import"./popupNotifcation.d7845d1b.js";import"./polling.437f8969.js";import"./string.f3bdc3d2.js";import"./record.f7d8f659.js";import"./workspaceStore.c60f5d73.js";import"./url.6ea417ff.js";import"./colorHelpers.75627b03.js";import"./BaseLayout.83290eed.js";import"./SaveButton.43096001.js";import"./UnsavedChangesHandler.b5bc1fee.js";import"./ExclamationCircleOutlined.ba06d1fe.js";import"./uuid.4613d962.js";import"./NavbarControls.80fdcf94.js";import"./index.327f331f.js";import"./CloseCircleOutlined.ed24ac34.js";import"./index.1c0b3b8b.js";import"./editor.6b6a4b7b.js";import"./PhArrowSquareOut.vue.12761645.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.0102844c.js";import"./BookOutlined.dc21b6f8.js";import"./PhChats.vue.56a911b2.js";import"./AbstraLogo.vue_vue_type_script_setup_true_lang.84fe1286.js";import"./Logo.2ce0761a.js";import"./ant-design.86f31cb9.js";import"./ai.7e89b6f9.js";import"./PhCheckCircle.vue.8f2a96dd.js";import"./PhCopySimple.vue.84a6056f.js";import"./Avatar.08a85760.js";import"./LoadingOutlined.a44d24ed.js";import"./Card.20071def.js";import"./TabPane.1ece305b.js";import"./PhCaretRight.vue.03a14fb2.js";import"./Badge.698eb2df.js";import"./PhFolder.vue.905e98a6.js";import"./PhPencil.vue.19f72bc6.js";import"./validations.e6af922e.js";import"./toggleHighContrast.dcc58ca4.js";import"./TasksManager.a58816ee.js";import"./AbstraButton.vue_vue_type_script_setup_true_lang.ac50365f.js";import"./index.849d4177.js";import"./CollapsePanel.e54dfb49.js";import"./index.8a2a437a.js";import"./index.04bc7387.js";import"./index.44f10ef0.js";(function(){try{var i=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},p=new Error().stack;p&&(i._sentryDebugIds=i._sentryDebugIds||{},i._sentryDebugIds[p]="615b4bfd-f4c2-4cd5-849e-07e582ca4362",i._sentryDebugIdIdentifier="sentry-dbid-615b4bfd-f4c2-4cd5-849e-07e582ca4362")}catch{}})();const E=k({__name:"ScriptSettings",props:{script:{}},setup(i){const e=f(i.script);return(d,s)=>(y(),_(r(w),{layout:"vertical",style:{"padding-bottom":"50px"}},{default:u(()=>[l(r(b),{label:"Name",required:""},{default:u(()=>[l(r(I),{value:e.value.title,"onUpdate:value":s[0]||(s[0]=c=>e.value.title=c)},null,8,["value"])]),_:1}),l(L,{runtime:e.value},null,8,["runtime"])]),_:1}))}}),z={style:{width:"100%",display:"flex","flex-direction":"column"}},F=k({__name:"ScriptTester",props:{script:{},disabledWarning:{},tasks:{}},emits:["refetch-tasks"],setup(i,{emit:p}){const e=i,d=v(()=>{var t,a;return(a=(t=e.tasks)==null?void 0:t.map(m=>{const S=m.payload,g=JSON.stringify(S,null,2),h=g.length>80?g.slice(0,80)+"...":g,T=new Date(m.created.at).toLocaleString();return{label:`${h} - ${T}`,value:m.id}}))!=null?a:[]}),s=f(void 0),c=v(()=>s.value?null:{title:"No trigger task selected",message:"Please select the task that will trigger the script"}),o=f(!1),n=async()=>{var t;o.value=!0;try{await e.script.run((t=s.value)!=null?t:null)}finally{o.value=!1,s.value=void 0,p("refetch-tasks",e.script.id)}};return(t,a)=>(y(),R("div",z,[l(r(w),{layout:"vertical",style:{overflow:"auto"}},{default:u(()=>[l(r(b),{label:"Trigger task"},{default:u(()=>[l(r(x),{options:d.value,value:s.value,onSelect:a[0]||(a[0]=m=>s.value=m)},null,8,["options","value"])]),_:1})]),_:1}),l(P,{loading:o.value,disabled:t.disabledWarning||c.value,onClick:n,onSave:a[1]||(a[1]=m=>t.script.save())},null,8,["loading","disabled"])]))}}),Mt=k({__name:"ScriptEditor",setup(i){const p=C(),e=f(null),d=new $,s=v(()=>{var n;return(n=o.value)!=null&&n.script.hasChanges()?{title:"Unsaved changes",message:"Save the form before running the workflow"}:null}),c=async n=>{const t=await d.getStageTasks(n);e.value=t.tasks.filter(a=>a.status==="pending")},{result:o}=W(async()=>{const[n,t]=await Promise.all([B.get(),A.get(p.params.id)]);return c(t.id),D({workspace:n,script:t})});return(n,t)=>(y(),_(N,{stage:r(o).script,workspace:r(o).workspace,"stage-type":"scripts",onRefetchTasks:t[0]||(t[0]=a=>c(r(o).script.id))},{settings:u(()=>[l(E,{script:r(o).script},null,8,["script"])]),test:u(()=>[l(F,{ref:"tester",script:r(o).script,"disabled-warning":s.value,tasks:e.value,onRefetchTasks:c},null,8,["script","disabled-warning","tasks"])]),_:1},8,["stage","workspace"]))}});export{Mt as default};
//# sourceMappingURL=ScriptEditor.17c9d858.js.map
