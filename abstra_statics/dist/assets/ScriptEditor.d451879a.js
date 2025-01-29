import{L as $}from"./tasksController.5e318f7d.js";import{d as k,e as f,o as y,c as b,w as u,b as p,u as r,bL as I,cz as _,cy as w,f as v,Y as R,aB as x,ea as C,z as D}from"./index.21cd3a3f.js";import{a as W}from"./asyncComputed.40abaf38.js";import"./linters.64488310.js";import{S as A}from"./scripts.4eeebd8f.js";import{W as B}from"./workspaces.22b64797.js";import{_ as L,a as N}from"./RunButton.vue_vue_type_script_setup_true_lang.06c50a66.js";import{R as P}from"./SmartChat.9a408738.js";import"./gateway.65255daa.js";import"./popupNotifcation.7aa165af.js";import"./polling.cb0520dc.js";import"./string.8e0585b2.js";import"./record.54413c97.js";import"./workspaceStore.1eff79a3.js";import"./url.60ea0bad.js";import"./colorHelpers.e0ad8e02.js";import"./BaseLayout.f030f7ba.js";import"./SaveButton.ee57088d.js";import"./UnsavedChangesHandler.3c8353de.js";import"./ExclamationCircleOutlined.4d8bd2c3.js";import"./NavbarControls.e63f807e.js";import"./index.14919e53.js";import"./CloseCircleOutlined.197275ad.js";import"./index.59032261.js";import"./editor.17dfbde0.js";import"./PhArrowSquareOut.vue.a7ff1bba.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.7a5a7bb0.js";import"./BookOutlined.d15f641a.js";import"./PhChats.vue.0b4b0dad.js";import"./TasksManager.a662b91d.js";import"./ant-design.d2f54a72.js";import"./AbstraButton.vue_vue_type_script_setup_true_lang.d25f0183.js";import"./index.0daed30d.js";import"./Card.d37a783e.js";import"./TabPane.03d32f4f.js";import"./CollapsePanel.651b044c.js";import"./index.7f1105a0.js";import"./index.6c42dd62.js";import"./index.2016d9a0.js";import"./Avatar.9d43f56c.js";import"./validations.e78a4412.js";import"./uuid.114076de.js";import"./PhCaretRight.vue.2e86c2b4.js";import"./Badge.a890404d.js";import"./LoadingOutlined.a1bdf6e9.js";import"./PhFolder.vue.45d668ed.js";import"./PhPencil.vue.59561e4a.js";import"./toggleHighContrast.1adc055f.js";import"./AbstraLogo.vue_vue_type_script_setup_true_lang.00ee51e5.js";import"./Logo.ea479c97.js";import"./PhGear.vue.0aee9d0e.js";import"./ai.a13f432a.js";import"./PhCheckCircle.vue.921e01a1.js";import"./PhCopySimple.vue.88075b81.js";(function(){try{var i=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},l=new Error().stack;l&&(i._sentryDebugIds=i._sentryDebugIds||{},i._sentryDebugIds[l]="5324188c-5339-4b21-97df-8335de0c43bb",i._sentryDebugIdIdentifier="sentry-dbid-5324188c-5339-4b21-97df-8335de0c43bb")}catch{}})();const E=k({__name:"ScriptSettings",props:{script:{}},setup(i){const e=f(i.script);return(d,s)=>(y(),b(r(w),{layout:"vertical",style:{"padding-bottom":"50px"}},{default:u(()=>[p(r(_),{label:"Name",required:""},{default:u(()=>[p(r(I),{value:e.value.title,"onUpdate:value":s[0]||(s[0]=m=>e.value.title=m)},null,8,["value"])]),_:1}),p(P,{runtime:e.value},null,8,["runtime"])]),_:1}))}}),z={style:{width:"100%",display:"flex","flex-direction":"column"}},F=k({__name:"ScriptTester",props:{script:{},disabledWarning:{},tasks:{}},emits:["refetch-tasks"],setup(i,{emit:l}){const e=i,d=v(()=>{var t,a;return(a=(t=e.tasks)==null?void 0:t.map(c=>{const S=c.payload,g=JSON.stringify(S,null,2),h=g.length>80?g.slice(0,80)+"...":g,T=new Date(c.created.at).toLocaleString();return{label:`${h} - ${T}`,value:c.id}}))!=null?a:[]}),s=f(void 0),m=v(()=>s.value?null:{title:"No trigger task selected",message:"Please select the task that will trigger the script"}),o=f(!1),n=async()=>{var t;o.value=!0;try{await e.script.run((t=s.value)!=null?t:null)}finally{o.value=!1,s.value=void 0,l("refetch-tasks",e.script.id)}};return(t,a)=>(y(),R("div",z,[p(r(w),{layout:"vertical",style:{overflow:"auto"}},{default:u(()=>[p(r(_),{label:"Trigger task"},{default:u(()=>[p(r(x),{options:d.value,value:s.value,onSelect:a[0]||(a[0]=c=>s.value=c)},null,8,["options","value"])]),_:1})]),_:1}),p(L,{loading:o.value,disabled:t.disabledWarning||m.value,onClick:n,onSave:a[1]||(a[1]=c=>t.script.save())},null,8,["loading","disabled"])]))}}),Ot=k({__name:"ScriptEditor",setup(i){const l=C(),e=f(null),d=new $,s=v(()=>{var n;return(n=o.value)!=null&&n.script.hasChanges()?{title:"Unsaved changes",message:"Save the form before running the workflow"}:null}),m=async n=>{const t=await d.getStageTasks(n);e.value=t.tasks.filter(a=>a.status==="pending")},{result:o}=W(async()=>{const[n,t]=await Promise.all([B.get(),A.get(l.params.id)]);return m(t.id),D({workspace:n,script:t})});return(n,t)=>(y(),b(N,{stage:r(o).script,workspace:r(o).workspace,"stage-type":"scripts",onRefetchTasks:t[0]||(t[0]=a=>m(r(o).script.id))},{settings:u(()=>[p(E,{script:r(o).script},null,8,["script"])]),test:u(()=>[p(F,{ref:"tester",script:r(o).script,"disabled-warning":s.value,tasks:e.value,onRefetchTasks:m},null,8,["script","disabled-warning","tasks"])]),_:1},8,["stage","workspace"]))}});export{Ot as default};
//# sourceMappingURL=ScriptEditor.d451879a.js.map
