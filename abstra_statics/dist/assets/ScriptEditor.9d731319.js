import{L as $}from"./tasksController.20376bcf.js";import{d as k,e as f,o as y,c as b,w as u,b as l,u as r,bL as I,cz as _,cy as w,f as v,Y as R,aB as x,ea as C,z as D}from"./index.ffad9669.js";import{a as W}from"./asyncComputed.542df48a.js";import"./linters.a6e0b600.js";import{S as A}from"./scripts.329ee1cb.js";import{W as B}from"./workspaces.a822772b.js";import{R as L,_ as N}from"./RuntimeCommonSettings.13849a34.js";import{_ as P}from"./RunButton.vue_vue_type_script_setup_true_lang.79e6ed03.js";import"./gateway.7f468751.js";import"./popupNotifcation.4d6e3c64.js";import"./polling.e352f4cf.js";import"./string.a96ed1b2.js";import"./record.94e1d052.js";import"./workspaceStore.f0f3b7ba.js";import"./url.d8e49ad5.js";import"./colorHelpers.1bae851e.js";import"./BaseLayout.4b2b199d.js";import"./SaveButton.c53cebe1.js";import"./UnsavedChangesHandler.6b99b54d.js";import"./ExclamationCircleOutlined.d9dc176e.js";import"./uuid.864c10f6.js";import"./NavbarControls.2cf73855.js";import"./index.7c21058f.js";import"./CloseCircleOutlined.d6c4849a.js";import"./index.d2e701c9.js";import"./editor.d94acf67.js";import"./PhArrowSquareOut.vue.66394f1f.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.ea29b734.js";import"./BookOutlined.99e6ce1c.js";import"./PhChats.vue.8af7e509.js";import"./AbstraLogo.vue_vue_type_script_setup_true_lang.06000b9e.js";import"./Logo.96bedc1b.js";import"./ant-design.8057bbd7.js";import"./ai.4761e9ce.js";import"./PhCheckCircle.vue.03a049e4.js";import"./PhCopySimple.vue.dede2e92.js";import"./Avatar.52e7b91e.js";import"./LoadingOutlined.ca6d9b28.js";import"./Card.ad17900e.js";import"./TabPane.ac7c9721.js";import"./PhCaretRight.vue.d6cc6b76.js";import"./Badge.62b34e33.js";import"./PhFolder.vue.865fe790.js";import"./PhPencil.vue.014b2bc1.js";import"./validations.7ebd7427.js";import"./toggleHighContrast.08bcd25e.js";import"./TasksManager.4c702f0d.js";import"./AbstraButton.vue_vue_type_script_setup_true_lang.a41c6939.js";import"./index.4d838d2b.js";import"./CollapsePanel.8899a426.js";import"./index.bd5caf0e.js";import"./index.ed75da0b.js";import"./index.6884a1ef.js";(function(){try{var i=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},p=new Error().stack;p&&(i._sentryDebugIds=i._sentryDebugIds||{},i._sentryDebugIds[p]="18572c5b-61e4-4af5-bf45-0e35800b3791",i._sentryDebugIdIdentifier="sentry-dbid-18572c5b-61e4-4af5-bf45-0e35800b3791")}catch{}})();const E=k({__name:"ScriptSettings",props:{script:{}},setup(i){const e=f(i.script);return(d,s)=>(y(),b(r(w),{layout:"vertical",style:{"padding-bottom":"50px"}},{default:u(()=>[l(r(_),{label:"Name",required:""},{default:u(()=>[l(r(I),{value:e.value.title,"onUpdate:value":s[0]||(s[0]=m=>e.value.title=m)},null,8,["value"])]),_:1}),l(L,{runtime:e.value},null,8,["runtime"])]),_:1}))}}),z={style:{width:"100%",display:"flex","flex-direction":"column"}},F=k({__name:"ScriptTester",props:{script:{},disabledWarning:{},tasks:{}},emits:["refetch-tasks"],setup(i,{emit:p}){const e=i,d=v(()=>{var t,a;return(a=(t=e.tasks)==null?void 0:t.map(c=>{const S=c.payload,g=JSON.stringify(S,null,2),h=g.length>80?g.slice(0,80)+"...":g,T=new Date(c.created.at).toLocaleString();return{label:`${h} - ${T}`,value:c.id}}))!=null?a:[]}),s=f(void 0),m=v(()=>s.value?null:{title:"No trigger task selected",message:"Please select the task that will trigger the script"}),o=f(!1),n=async()=>{var t;o.value=!0;try{await e.script.run((t=s.value)!=null?t:null)}finally{o.value=!1,s.value=void 0,p("refetch-tasks",e.script.id)}};return(t,a)=>(y(),R("div",z,[l(r(w),{layout:"vertical",style:{overflow:"auto"}},{default:u(()=>[l(r(_),{label:"Trigger task"},{default:u(()=>[l(r(x),{options:d.value,value:s.value,onSelect:a[0]||(a[0]=c=>s.value=c)},null,8,["options","value"])]),_:1})]),_:1}),l(P,{loading:o.value,disabled:t.disabledWarning||m.value,onClick:n,onSave:a[1]||(a[1]=c=>t.script.save())},null,8,["loading","disabled"])]))}}),Mt=k({__name:"ScriptEditor",setup(i){const p=C(),e=f(null),d=new $,s=v(()=>{var n;return(n=o.value)!=null&&n.script.hasChanges()?{title:"Unsaved changes",message:"Save the form before running the workflow"}:null}),m=async n=>{const t=await d.getStageTasks(n);e.value=t.tasks.filter(a=>a.status==="pending")},{result:o}=W(async()=>{const[n,t]=await Promise.all([B.get(),A.get(p.params.id)]);return m(t.id),D({workspace:n,script:t})});return(n,t)=>(y(),b(N,{stage:r(o).script,workspace:r(o).workspace,"stage-type":"scripts",onRefetchTasks:t[0]||(t[0]=a=>m(r(o).script.id))},{settings:u(()=>[l(E,{script:r(o).script},null,8,["script"])]),test:u(()=>[l(F,{ref:"tester",script:r(o).script,"disabled-warning":s.value,tasks:e.value,onRefetchTasks:m},null,8,["script","disabled-warning","tasks"])]),_:1},8,["stage","workspace"]))}});export{Mt as default};
//# sourceMappingURL=ScriptEditor.9d731319.js.map
