import{L as $}from"./tasksController.cf7e55a4.js";import{d as k,e as f,o as y,c as _,w as u,b as p,u as r,bL as I,cz as w,cy as b,f as v,Y as R,aB as x,ea as C,z as D}from"./index.5137c157.js";import{a as W}from"./asyncComputed.8cfcf7d3.js";import"./linters.9c47d044.js";import{S as A}from"./scripts.60ced407.js";import{W as B}from"./workspaces.c4c5a9d3.js";import{_ as L,a as N}from"./RunButton.vue_vue_type_script_setup_true_lang.6c0356ef.js";import{R as P}from"./SmartChat.6195179a.js";import"./gateway.7c8d0c5b.js";import"./popupNotifcation.6f77f4d2.js";import"./polling.21951bd2.js";import"./string.f039d062.js";import"./record.b64fe7fe.js";import"./workspaceStore.66d52f19.js";import"./url.7d26e658.js";import"./colorHelpers.18d6a2d0.js";import"./BaseLayout.57dc0ec2.js";import"./SaveButton.aec2860a.js";import"./UnsavedChangesHandler.a505ec38.js";import"./ExclamationCircleOutlined.3cf73ad6.js";import"./NavbarControls.36ae4f10.js";import"./index.9f0e3818.js";import"./CloseCircleOutlined.fae082e9.js";import"./index.cace559a.js";import"./editor.227f45bc.js";import"./PhArrowSquareOut.vue.ddf0a194.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.75a0ba44.js";import"./BookOutlined.dd4a234b.js";import"./PhChats.vue.766d78be.js";import"./TasksManager.3d8891f6.js";import"./ant-design.5e4624aa.js";import"./AbstraButton.vue_vue_type_script_setup_true_lang.14571a58.js";import"./index.9af87366.js";import"./Card.b7a0453d.js";import"./TabPane.b11aed61.js";import"./CollapsePanel.ea65acdf.js";import"./index.4e207cbd.js";import"./index.26ea1650.js";import"./index.9b735155.js";import"./Avatar.ed6e64e7.js";import"./validations.a444304a.js";import"./uuid.61889659.js";import"./PhCaretRight.vue.fc9ddba4.js";import"./Badge.426fa466.js";import"./LoadingOutlined.27a7fadf.js";import"./PhFolder.vue.896bd5f8.js";import"./PhPencil.vue.b1ee8cfe.js";import"./toggleHighContrast.49b8e9c6.js";import"./AbstraLogo.vue_vue_type_script_setup_true_lang.263c265c.js";import"./Logo.8a1c969f.js";import"./PhGear.vue.71d668b8.js";import"./ai.6663727b.js";import"./PhCheckCircle.vue.2a7ec2be.js";import"./PhCopySimple.vue.1356046d.js";(function(){try{var i=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},l=new Error().stack;l&&(i._sentryDebugIds=i._sentryDebugIds||{},i._sentryDebugIds[l]="71e043b0-ed28-46e6-997d-843022de5127",i._sentryDebugIdIdentifier="sentry-dbid-71e043b0-ed28-46e6-997d-843022de5127")}catch{}})();const E=k({__name:"ScriptSettings",props:{script:{}},setup(i){const e=f(i.script);return(d,s)=>(y(),_(r(b),{layout:"vertical",style:{"padding-bottom":"50px"}},{default:u(()=>[p(r(w),{label:"Name",required:""},{default:u(()=>[p(r(I),{value:e.value.title,"onUpdate:value":s[0]||(s[0]=m=>e.value.title=m)},null,8,["value"])]),_:1}),p(P,{runtime:e.value},null,8,["runtime"])]),_:1}))}}),z={style:{width:"100%",display:"flex","flex-direction":"column"}},F=k({__name:"ScriptTester",props:{script:{},disabledWarning:{},tasks:{}},emits:["refetch-tasks"],setup(i,{emit:l}){const e=i,d=v(()=>{var t,a;return(a=(t=e.tasks)==null?void 0:t.map(c=>{const S=c.payload,g=JSON.stringify(S,null,2),h=g.length>80?g.slice(0,80)+"...":g,T=new Date(c.created.at).toLocaleString();return{label:`${h} - ${T}`,value:c.id}}))!=null?a:[]}),s=f(void 0),m=v(()=>s.value?null:{title:"No trigger task selected",message:"Please select the task that will trigger the script"}),o=f(!1),n=async()=>{var t;o.value=!0;try{await e.script.run((t=s.value)!=null?t:null)}finally{o.value=!1,s.value=void 0,l("refetch-tasks",e.script.id)}};return(t,a)=>(y(),R("div",z,[p(r(b),{layout:"vertical",style:{overflow:"auto"}},{default:u(()=>[p(r(w),{label:"Trigger task"},{default:u(()=>[p(r(x),{options:d.value,value:s.value,onSelect:a[0]||(a[0]=c=>s.value=c)},null,8,["options","value"])]),_:1})]),_:1}),p(L,{loading:o.value,disabled:t.disabledWarning||m.value,onClick:n,onSave:a[1]||(a[1]=c=>t.script.save())},null,8,["loading","disabled"])]))}}),Ot=k({__name:"ScriptEditor",setup(i){const l=C(),e=f(null),d=new $,s=v(()=>{var n;return(n=o.value)!=null&&n.script.hasChanges()?{title:"Unsaved changes",message:"Save the form before running the workflow"}:null}),m=async n=>{const t=await d.getStageTasks(n);e.value=t.tasks.filter(a=>a.status==="pending")},{result:o}=W(async()=>{const[n,t]=await Promise.all([B.get(),A.get(l.params.id)]);return m(t.id),D({workspace:n,script:t})});return(n,t)=>(y(),_(N,{stage:r(o).script,workspace:r(o).workspace,"stage-type":"scripts",onRefetchTasks:t[0]||(t[0]=a=>m(r(o).script.id))},{settings:u(()=>[p(E,{script:r(o).script},null,8,["script"])]),test:u(()=>[p(F,{ref:"tester",script:r(o).script,"disabled-warning":s.value,tasks:e.value,onRefetchTasks:m},null,8,["script","disabled-warning","tasks"])]),_:1},8,["stage","workspace"]))}});export{Ot as default};
//# sourceMappingURL=ScriptEditor.9c489efc.js.map
