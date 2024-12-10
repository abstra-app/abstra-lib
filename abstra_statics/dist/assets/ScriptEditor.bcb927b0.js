import{B as N}from"./BaseLayout.b9b50e9f.js";import{R as D,S as P,E as $,a as U,L as W}from"./SourceCode.5d3e7b93.js";import{S as F}from"./SaveButton.8c522b04.js";import{a as M}from"./asyncComputed.63476e9c.js";import{d as L,e as f,o as d,c as m,w as i,b as s,u as e,bL as K,cB as E,cA as I,f as x,Y as O,aB as V,eo as q,ea as z,eg as H,z as J,S as k}from"./index.e1ec3e10.js";import"./linters.9304e625.js";import{S as Y}from"./scripts.3bfd9ffe.js";import{W as j}from"./workspaces.90758c14.js";import{_ as G}from"./RunButton.vue_vue_type_script_setup_true_lang.0b408678.js";import{N as Q}from"./NavbarControls.a60aeb1c.js";import{T as X}from"./TasksManager.1e5e0f1c.js";import{L as Z}from"./tasksController.603d6c5b.js";import{b as ee}from"./index.4aa0caca.js";import{A as h,T as A}from"./TabPane.1fa49f01.js";import"./uuid.9d5e9784.js";import"./validations.d45f66fd.js";import"./string.569a6924.js";import"./editor.1e355c7c.js";import"./workspaceStore.104b1723.js";import"./url.ab92de50.js";import"./colorHelpers.d32fa46a.js";import"./ai.22768a7a.js";import"./PhCheckCircle.vue.cc5160bd.js";import"./PhCopySimple.vue.3de9c90b.js";import"./PhCaretRight.vue.f30f1a40.js";import"./Badge.d52f888f.js";import"./LoadingOutlined.952c460f.js";import"./polling.bef217f7.js";import"./PhFolder.vue.b23a430f.js";import"./PhPencil.vue.a530f1af.js";import"./toggleHighContrast.b3b309ce.js";import"./index.af5f8dc4.js";import"./Card.a84009b0.js";import"./UnsavedChangesHandler.d706b866.js";import"./ExclamationCircleOutlined.76217707.js";import"./record.e1888f50.js";import"./index.73a3b654.js";import"./CloseCircleOutlined.c4ffadcd.js";import"./popupNotifcation.29a171ed.js";import"./PhArrowSquareOut.vue.a4f55619.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.74d2d7e6.js";import"./BookOutlined.24fb62d6.js";import"./PhChats.vue.43012746.js";import"./ant-design.ac028450.js";import"./AbstraButton.vue_vue_type_script_setup_true_lang.77653d40.js";import"./index.be2d66b3.js";import"./CollapsePanel.272fd103.js";import"./index.7d5cc953.js";import"./gateway.ab874197.js";import"./index.3550deea.js";import"./Avatar.c727ae9f.js";(function(){try{var c=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},v=new Error().stack;v&&(c._sentryDebugIds=c._sentryDebugIds||{},c._sentryDebugIds[v]="a5954413-cc5d-4af1-b4b7-8945ed1beddc",c._sentryDebugIdIdentifier="sentry-dbid-a5954413-cc5d-4af1-b4b7-8945ed1beddc")}catch{}})();const te=L({__name:"ScriptSettings",props:{script:{}},setup(c){const n=f(c.script);return(T,l)=>(d(),m(e(I),{layout:"vertical",style:{"padding-bottom":"50px"}},{default:i(()=>[s(e(E),{label:"Name",required:""},{default:i(()=>[s(e(K),{value:n.value.title,"onUpdate:value":l[0]||(l[0]=y=>n.value.title=y)},null,8,["value"])]),_:1}),s(D,{runtime:n.value},null,8,["runtime"])]),_:1}))}}),se={style:{width:"100%",display:"flex","flex-direction":"column"}},ae=L({__name:"ScriptTester",props:{script:{},disabledWarning:{},tasks:{}},emits:["refetch-tasks"],setup(c,{emit:v}){const n=c,T=x(()=>{var r,p;return(p=(r=n.tasks)==null?void 0:r.map(u=>{const C=u.payload,w=JSON.stringify(C,null,2),S=w.length>80?w.slice(0,80)+"...":w,t=new Date(u.created.at).toLocaleString();return{label:`${S} - ${t}`,value:u.id}}))!=null?p:[]}),l=f(void 0),y=x(()=>l.value?null:{title:"No trigger task selected",message:"Please select the task that will trigger the script"}),b=f(!1),g=async()=>{var r;b.value=!0;try{await n.script.run((r=l.value)!=null?r:null)}finally{b.value=!1,l.value=void 0,v("refetch-tasks",n.script.id)}};return(r,p)=>(d(),O("div",se,[s(e(I),{layout:"vertical",style:{overflow:"auto"}},{default:i(()=>[s(e(E),{label:"Trigger task"},{default:i(()=>[s(e(V),{options:T.value,value:l.value,onSelect:p[0]||(p[0]=u=>l.value=u)},null,8,["options","value"])]),_:1})]),_:1}),s(G,{loading:b.value,disabled:r.disabledWarning||y.value,onClick:g,onSave:p[1]||(p[1]=u=>r.script.save())},null,8,["loading","disabled"])]))}}),tt=L({__name:"ScriptEditor",setup(c){const v=q(),n=z();function T(){v.push({name:"stages"})}const l=f(null),y=f(null),b=o=>{!t.value||(t.value.script.file=o)},g=f("source-code"),r=f("test");function p(){var a;if(!t.value)return;const o=t.value.script.codeContent;(a=l.value)==null||a.updateLocalEditorCode(o)}const u=f(null),C=new Z,w=x(()=>{var o;return(o=t.value)!=null&&o.script.hasChanges()?{title:"Unsaved changes",message:"Save the form before running the workflow"}:null}),S=async o=>{const a=await C.getStageTasks(o);u.value=a.tasks.filter(_=>_.status==="pending")},{result:t}=M(async()=>{const[o,a]=await Promise.all([j.get(),Y.get(n.params.id)]);return S(a.id),J({workspace:o,script:a})}),B=W.create(),R=o=>{var a;return o!==g.value&&((a=t.value)==null?void 0:a.script.hasChanges())};return(o,a)=>(d(),m(N,null,H({navbar:i(()=>[e(t)?(d(),m(e(ee),{key:0,title:e(t).script.title,style:{padding:"5px 25px",border:"1px solid #f6f6f6"},onBack:T},{extra:i(()=>[s(Q,{"editing-model":e(t).script},null,8,["editing-model"])]),_:1},8,["title"])):k("",!0)]),content:i(()=>[e(t)?(d(),m($,{key:0},{left:i(()=>[s(e(A),{"active-key":g.value,"onUpdate:activeKey":a[0]||(a[0]=_=>g.value=_)},{rightExtra:i(()=>[s(F,{model:e(t).script,onSave:p},null,8,["model"])]),default:i(()=>[s(e(h),{key:"source-code",tab:"Source code",disabled:R("source-code")},null,8,["disabled"]),s(e(h),{key:"settings",tab:"Settings",disabled:R("settings")},null,8,["disabled"])]),_:1},8,["active-key"]),g.value==="source-code"?(d(),m(U,{key:0,script:e(t).script,workspace:e(t).workspace,onUpdateFile:b},null,8,["script","workspace"])):k("",!0),e(t).script&&g.value==="settings"?(d(),m(te,{key:1,script:e(t).script},null,8,["script"])):k("",!0)]),right:i(()=>[s(e(A),{"active-key":r.value,"onUpdate:activeKey":a[1]||(a[1]=_=>r.value=_)},{default:i(()=>[s(e(h),{key:"test",tab:"Test"}),s(e(h),{key:"tasks",tab:"Tasks"})]),_:1},8,["active-key"]),e(t).script&&r.value==="test"?(d(),m(ae,{key:0,ref:"tester",script:e(t).script,"disabled-warning":w.value,tasks:u.value,onRefetchTasks:S},null,8,["script","disabled-warning","tasks"])):k("",!0),e(t).script&&r.value==="tasks"?(d(),m(X,{key:1,ref:"tasksManager","stage-id":e(t).script.id,onRefetchTasks:S},null,8,["stage-id"])):k("",!0)]),_:1})):k("",!0)]),_:2},[e(t)?{name:"footer",fn:i(()=>[s(P,{ref_key:"smartConsole",ref:y,"stage-type":"scripts",stage:e(t).script,"log-service":e(B),workspace:e(t).workspace},null,8,["stage","log-service","workspace"])]),key:"0"}:void 0]),1024))}});export{tt as default};
//# sourceMappingURL=ScriptEditor.bcb927b0.js.map
