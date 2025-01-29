import{L as $}from"./tasksController.6679a8b8.js";import{d as k,e as f,o as y,c as b,w as u,b as p,u as r,bL as I,cz as _,cy as w,f as v,Y as R,aB as x,ea as C,z as D}from"./index.0a96659e.js";import{a as W}from"./asyncComputed.acd09eef.js";import"./linters.6f9111bc.js";import{S as A}from"./scripts.a6b29f5f.js";import{W as B}from"./workspaces.7e066a79.js";import{_ as L,a as N}from"./RunButton.vue_vue_type_script_setup_true_lang.ddf23b1a.js";import{R as P}from"./SmartChat.4d731cf1.js";import"./gateway.30cd9d66.js";import"./popupNotifcation.7379c5b8.js";import"./polling.d2f623d1.js";import"./string.0fde5392.js";import"./record.a723c05b.js";import"./workspaceStore.33cc4678.js";import"./url.92b46e98.js";import"./colorHelpers.fd07b278.js";import"./BaseLayout.04a2de13.js";import"./SaveButton.26598bec.js";import"./UnsavedChangesHandler.f1766db9.js";import"./ExclamationCircleOutlined.577dc758.js";import"./NavbarControls.fd710cb3.js";import"./index.e65654eb.js";import"./CloseCircleOutlined.bb54bfc7.js";import"./index.733cf6af.js";import"./editor.14a848b0.js";import"./PhArrowSquareOut.vue.45255835.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.839be8cb.js";import"./BookOutlined.553750f9.js";import"./PhChats.vue.2d1d19bf.js";import"./TasksManager.6939bfd4.js";import"./ant-design.7637b7b0.js";import"./AbstraButton.vue_vue_type_script_setup_true_lang.6bbd0cdb.js";import"./index.acffe08b.js";import"./Card.a33856bd.js";import"./TabPane.77ce9018.js";import"./CollapsePanel.786e0072.js";import"./index.b1410ae9.js";import"./index.8e665bbc.js";import"./index.41442b4c.js";import"./Avatar.96d7d9dc.js";import"./validations.fd73abc3.js";import"./uuid.34963eae.js";import"./PhCaretRight.vue.6dc6d52e.js";import"./Badge.6776be14.js";import"./LoadingOutlined.9fb4c1a8.js";import"./PhFolder.vue.1d526cdc.js";import"./PhPencil.vue.c33e69bd.js";import"./toggleHighContrast.9bd08cf9.js";import"./AbstraLogo.vue_vue_type_script_setup_true_lang.608478ca.js";import"./Logo.9541fa72.js";import"./PhGear.vue.83f28499.js";import"./ai.d1dcb09e.js";import"./PhCheckCircle.vue.6623d61d.js";import"./PhCopySimple.vue.abebdd55.js";(function(){try{var i=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},l=new Error().stack;l&&(i._sentryDebugIds=i._sentryDebugIds||{},i._sentryDebugIds[l]="889b4b4b-8f90-4fac-8e58-20f97ed50510",i._sentryDebugIdIdentifier="sentry-dbid-889b4b4b-8f90-4fac-8e58-20f97ed50510")}catch{}})();const E=k({__name:"ScriptSettings",props:{script:{}},setup(i){const e=f(i.script);return(d,s)=>(y(),b(r(w),{layout:"vertical",style:{"padding-bottom":"50px"}},{default:u(()=>[p(r(_),{label:"Name",required:""},{default:u(()=>[p(r(I),{value:e.value.title,"onUpdate:value":s[0]||(s[0]=m=>e.value.title=m)},null,8,["value"])]),_:1}),p(P,{runtime:e.value},null,8,["runtime"])]),_:1}))}}),z={style:{width:"100%",display:"flex","flex-direction":"column"}},F=k({__name:"ScriptTester",props:{script:{},disabledWarning:{},tasks:{}},emits:["refetch-tasks"],setup(i,{emit:l}){const e=i,d=v(()=>{var t,a;return(a=(t=e.tasks)==null?void 0:t.map(c=>{const S=c.payload,g=JSON.stringify(S,null,2),h=g.length>80?g.slice(0,80)+"...":g,T=new Date(c.created.at).toLocaleString();return{label:`${h} - ${T}`,value:c.id}}))!=null?a:[]}),s=f(void 0),m=v(()=>s.value?null:{title:"No trigger task selected",message:"Please select the task that will trigger the script"}),o=f(!1),n=async()=>{var t;o.value=!0;try{await e.script.run((t=s.value)!=null?t:null)}finally{o.value=!1,s.value=void 0,l("refetch-tasks",e.script.id)}};return(t,a)=>(y(),R("div",z,[p(r(w),{layout:"vertical",style:{overflow:"auto"}},{default:u(()=>[p(r(_),{label:"Trigger task"},{default:u(()=>[p(r(x),{options:d.value,value:s.value,onSelect:a[0]||(a[0]=c=>s.value=c)},null,8,["options","value"])]),_:1})]),_:1}),p(L,{loading:o.value,disabled:t.disabledWarning||m.value,onClick:n,onSave:a[1]||(a[1]=c=>t.script.save())},null,8,["loading","disabled"])]))}}),Ot=k({__name:"ScriptEditor",setup(i){const l=C(),e=f(null),d=new $,s=v(()=>{var n;return(n=o.value)!=null&&n.script.hasChanges()?{title:"Unsaved changes",message:"Save the form before running the workflow"}:null}),m=async n=>{const t=await d.getStageTasks(n);e.value=t.tasks.filter(a=>a.status==="pending")},{result:o}=W(async()=>{const[n,t]=await Promise.all([B.get(),A.get(l.params.id)]);return m(t.id),D({workspace:n,script:t})});return(n,t)=>(y(),b(N,{stage:r(o).script,workspace:r(o).workspace,"stage-type":"scripts",onRefetchTasks:t[0]||(t[0]=a=>m(r(o).script.id))},{settings:u(()=>[p(E,{script:r(o).script},null,8,["script"])]),test:u(()=>[p(F,{ref:"tester",script:r(o).script,"disabled-warning":s.value,tasks:e.value,onRefetchTasks:m},null,8,["script","disabled-warning","tasks"])]),_:1},8,["stage","workspace"]))}});export{Ot as default};
//# sourceMappingURL=ScriptEditor.a1a2e4e6.js.map
