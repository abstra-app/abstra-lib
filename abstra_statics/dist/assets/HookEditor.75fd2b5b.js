import{B as V}from"./BaseLayout.73f1aa1b.js";import{R as j,E as J,S as K,a as z,L as X}from"./SourceCode.e96b831e.js";import{a as Y}from"./asyncComputed.701c6db7.js";import{d as F,b as c,c as m,w as o,f as a,u as e,bx as w,cj as v,ci as G,K as M,z as Z,r as y,y as ee,am as te,eu as A,eE as q,bG as P,ar as g,aD as B,co as $,ew as b,cQ as Q,e as ae,eG as D,eJ as oe,eC as re,v as le,cV as L}from"./vue-router.68023fee.js";import{W as ne}from"./workspaces.9854439f.js";import{H as se}from"./jobs.202fd30b.js";import{S as ue}from"./SaveButton.7d3235ab.js";import{_ as ie}from"./RunButton.vue_vue_type_script_setup_true_lang.2babfeeb.js";import{A as C}from"./api.c4424bc7.js";import{T as de}from"./ThreadSelector.298dcf1f.js";import{D as pe,A as ce}from"./index.2e15436c.js";import{C as me,A as T}from"./CollapsePanel.6867306e.js";import{A as O}from"./index.438e3b2d.js";import{B as fe}from"./Badge.4a2737e4.js";import{A as ve}from"./index.f69840a0.js";import{A as ge}from"./index.e1c96b6a.js";import{N as he}from"./NavbarControls.f5423b24.js";import{b as ke}from"./index.c6b1ba5b.js";import{A as E,T as W}from"./TabPane.9738ed41.js";import{A as ye}from"./index.9d0c498d.js";import"./uuid.24f156ab.js";import"./PhCaretRight.vue.7df80ae7.js";import"./editor.b496c978.js";import"./router.d8faf85a.js";import"./runnerData.e80557a7.js";import"./url.5ccf4cba.js";import"./record.b374d8c0.js";import"./PhCheckCircle.vue.8fd122bd.js";import"./PhCopySimple.vue.306962b1.js";import"./LoadingOutlined.2b6145e7.js";import"./scripts.14af7817.js";import"./validations.dfdb08a1.js";import"./string.058fe17a.js";import"./PhPencil.vue.ca0a5a80.js";import"./toggleHighContrast.d550837f.js";import"./index.9310d3a1.js";import"./Card.6de4f91c.js";import"./UnsavedChangesHandler.9e938025.js";import"./ExclamationCircleOutlined.dae6d24f.js";import"./fetch.b87246bf.js";import"./metadata.f24266cb.js";import"./PhKanban.vue.b63a87c9.js";import"./PhScroll.vue.3d9ecdb5.js";import"./PhWebhooksLogo.vue.1c86bccd.js";import"./index.42f3c62d.js";import"./isNumeric.75337b1e.js";import"./CloseCircleOutlined.b8a8aae7.js";import"./popupNotifcation.e6bc97cd.js";import"./PhArrowSquareOut.vue.ae621bb8.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.a1850035.js";import"./BookOutlined.6d1a8a64.js";import"./PhChats.vue.b5e84f67.js";import"./index.bb53a3f9.js";(function(){try{var h=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},f=new Error().stack;f&&(h._sentryDebugIds=h._sentryDebugIds||{},h._sentryDebugIds[f]="0326e006-6d07-49e8-aac0-4577c713428a",h._sentryDebugIdIdentifier="sentry-dbid-0326e006-6d07-49e8-aac0-4577c713428a")}catch{}})();const be=F({__name:"HookSettings",props:{hook:{}},setup(h){return(f,k)=>(c(),m(e(G),{layout:"vertical",style:{"padding-bottom":"50px"}},{default:o(()=>[a(e(v),{label:"Name",required:""},{default:o(()=>[a(e(w),{value:f.hook.title,"onUpdate:value":k[0]||(k[0]=d=>f.hook.title=d)},null,8,["value"])]),_:1}),a(j,{runtime:f.hook},null,8,["runtime"])]),_:1}))}}),_e={style:{display:"flex","flex-direction":"column",gap:"10px"}},Ce={key:0},we=F({__name:"HookTester",props:{hook:{},logService:{},disabledWarning:{},executionConfig:{}},emits:["update:stage-run-id","update:execution-config"],setup(h,{expose:f,emit:k}){const d=h,x=[{label:"GET",value:"GET"},{label:"POST",value:"POST"},{label:"PUT",value:"PUT"},{label:"PATCH",value:"PATCH"}],_=M(()=>{var l;if((l=r.response)!=null&&l.status)return r.response.status>=500?"red":r.response.status>=400?"orange":r.response.status>=200?"green":"blue"}),r=Z({shouldSelectStageRun:!d.hook.isInitial,stageRunId:d.executionConfig.stageRunId,queryParams:[],headers:[{key:"Content-Type",value:"application/json"}],method:"POST",body:JSON.stringify({foo:123,bar:"abc"},null,4)}),I=r.queryParams.find(l=>l.name===C);d.executionConfig.stageRunId&&!I&&r.queryParams.push({name:C,value:d.executionConfig.stageRunId});const p=y(!1),S=async()=>{p.value=!0;try{const l={method:r.method,query:r.queryParams.reduce((t,{name:n,value:i})=>(n&&i&&(t[n]=i),t),{}),body:r.body,headers:r.headers.reduce((t,{key:n,value:i})=>(n&&i&&(t[n]=i),t),{})},s=d.executionConfig.attached?await d.hook.run(l):await d.hook.test(l);r.response=s,s.output&&s.output.length>0&&s.output.forEach(t=>{d.logService.log({type:t.type,log:t.text})})}finally{p.value=!1,k("update:execution-config",{attached:!1,stageRunId:null,pendingFork:!1,isInitial:d.hook.isInitial})}};ee([()=>d.executionConfig.stageRunId,()=>r.queryParams],([l,s])=>{const t=s.find(n=>n.name===C);if(l&&!t){r.queryParams.push({name:C,value:l});return}if(!l&&t){r.queryParams=r.queryParams.filter(n=>n.name!==C);return}l&&t&&l!==t.value&&(t.value=l)});const U=()=>{r.queryParams.push({name:"",value:""})},R=l=>{r.queryParams=r.queryParams.filter((s,t)=>t!==l)},H=()=>{r.headers.push({key:"",value:""})},u=l=>{r.headers=r.headers.filter((s,t)=>t!==l)};return f({runHook:S}),(l,s)=>(c(),m(e(G),{layout:"vertical"},{default:o(()=>[a(e(v),{label:"Method"},{default:o(()=>[a(e(te),{value:r.method,options:x,onSelect:s[0]||(s[0]=t=>r.method=t)},null,8,["value"])]),_:1}),a(e(v),null,{default:o(()=>[a(e(me),{ghost:""},{default:o(()=>[a(e(T),{header:`Query Params (${r.queryParams.length})`},{default:o(()=>[(c(!0),A(B,null,q(r.queryParams,(t,n)=>(c(),m(e(v),{key:n},{default:o(()=>[a(e(O),null,{default:o(()=>[a(e(w),{value:t.name,"onUpdate:value":i=>t.name=i,type:"text",placeholder:"name"},null,8,["value","onUpdate:value"]),a(e(w),{value:t.value,"onUpdate:value":i=>t.value=i,type:"text",placeholder:"value",disabled:t.name===e(C)},null,8,["value","onUpdate:value","disabled"]),a(e(P),{danger:"",onClick:i=>R(n)},{default:o(()=>[g("remove")]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024))),128)),a(e(v),null,{default:o(()=>[a(e(P),{type:"dashed",style:{width:"100%"},onClick:U},{default:o(()=>[g(" Add Query Param ")]),_:1})]),_:1})]),_:1},8,["header"]),a(e(T),{header:`Headers (${r.headers.length})`},{default:o(()=>[(c(!0),A(B,null,q(r.headers,(t,n)=>(c(),m(e(v),{key:n,label:n===0?"Headers":void 0},{default:o(()=>[a(e(O),null,{default:o(()=>[a(e(w),{value:t.key,"onUpdate:value":i=>t.key=i,type:"text",placeholder:"name"},null,8,["value","onUpdate:value"]),a(e(w),{value:t.value,"onUpdate:value":i=>t.value=i,type:"text",placeholder:"value"},null,8,["value","onUpdate:value"]),a(e(P),{danger:"",onClick:i=>u(n)},{default:o(()=>[g("remove")]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1032,["label"]))),128)),a(e(v),null,{default:o(()=>[a(e(P),{type:"dashed",style:{width:"100%"},onClick:H},{default:o(()=>[g("Add Header")]),_:1})]),_:1})]),_:1},8,["header"]),a(e(T),{header:"Body"},{default:o(()=>[r.method!=="GET"?(c(),m(e(v),{key:0},{default:o(()=>[a(e($),{value:r.body,"onUpdate:value":s[1]||(s[1]=t=>r.body=t)},null,8,["value"])]),_:1})):b("",!0)]),_:1}),a(e(T),null,{header:o(()=>[a(e(fe),{dot:l.executionConfig.attached&&!!(l.executionConfig.pendingFork||!l.executionConfig.stageRunId)},{default:o(()=>[a(e(Q),null,{default:o(()=>[g("Thread")]),_:1})]),_:1},8,["dot"])]),default:o(()=>[a(de,{stage:l.hook,"execution-config":d.executionConfig,"onUpdate:executionConfig":s[2]||(s[2]=t=>k("update:execution-config",t))},null,8,["stage","execution-config"])]),_:1})]),_:1})]),_:1}),a(e(v),null,{default:o(()=>[ae("div",_e,[a(ie,{loading:p.value,disabled:l.disabledWarning,onClick:S,onSave:s[3]||(s[3]=t=>l.hook.save())},null,8,["loading","disabled"])])]),_:1}),a(e(ve),{orientation:"left"},{default:o(()=>[g("Response")]),_:1}),r.response?(c(),A("div",Ce,[a(e(ge),{color:_.value},{default:o(()=>[g(D(r.response.status),1)]),_:1},8,["color"]),a(e(ce),null,{default:o(()=>[(c(!0),A(B,null,q(r.response.headers,(t,n)=>(c(),m(e(pe),{key:n,label:n},{default:o(()=>[g(D(t),1)]),_:2},1032,["label"]))),128))]),_:1}),a(e($),{value:r.response.body},null,8,["value"])])):b("",!0)]),_:1}))}}),wt=F({__name:"HookEditor",setup(h){const f=oe(),k=re(),d=y(null),x=y(null),_=y("source-code"),r=y("preview");function I(){var t;if(!u.value)return;const s=u.value.hook.codeContent;(t=d.value)==null||t.updateLocalEditorCode(s)}const p=y({attached:!1,stageRunId:null,pendingFork:!1,isInitial:!1}),S=s=>p.value={...p.value,attached:!!s},U=M(()=>{var s;return(s=u.value)!=null&&s.hook.hasChanges()?{title:"Unsaved changes",message:"Save the form before running the workflow"}:p.value.attached&&p.value.pendingFork?{title:"Past thread selected",message:"Fork the selected thread to run the workflow"}:!p.value.isInitial&&p.value.attached&&!p.value.stageRunId?{title:"No thread selected",message:"Select a thread to run the workflow"}:null});function R(){f.push({name:"stages"})}const H=y(null),{result:u}=Y(async()=>{const[s,t]=await Promise.all([ne.get(),se.get(k.params.id)]);return p.value.isInitial=t.isInitial,le({workspace:s,hook:t})}),l=X.create();return(s,t)=>(c(),m(V,null,{navbar:o(()=>[e(u)?(c(),m(e(ke),{key:0,title:e(u).hook.title,style:{padding:"5px 25px",border:"1px solid #f6f6f6"},onBack:R},{extra:o(()=>[a(he,{"docs-path":"concepts/hooks","editing-model":e(u).hook,"show-save-button":!1},null,8,["editing-model"])]),_:1},8,["title"])):b("",!0)]),content:o(()=>[e(u)?(c(),m(J,{key:0},{left:o(()=>[a(e(W),{"active-key":_.value,"onUpdate:activeKey":t[0]||(t[0]=n=>_.value=n)},{rightExtra:o(()=>[a(ue,{model:e(u).hook,onSave:I},null,8,["model"])]),default:o(()=>[a(e(E),{key:"source-code",tab:"Source code"}),a(e(E),{key:"settings",tab:"Settings"})]),_:1},8,["active-key"]),_.value==="source-code"?(c(),m(K,{key:0,ref_key:"code",ref:d,script:e(u).hook,workspace:e(u).workspace},null,8,["script","workspace"])):b("",!0),e(u).hook&&_.value==="settings"?(c(),m(be,{key:1,hook:e(u).hook},null,8,["hook"])):b("",!0)]),right:o(()=>[a(e(W),{"active-key":r.value,"onUpdate:activeKey":t[1]||(t[1]=n=>r.value=n)},{rightExtra:o(()=>[a(e(L),{align:"center",gap:"middle"},{default:o(()=>[a(e(L),{gap:"small"},{default:o(()=>[a(e(Q),null,{default:o(()=>[g(D(p.value.attached?"Workflow ON":"Workflow OFF"),1)]),_:1}),a(e(ye),{checked:p.value.attached,"onUpdate:checked":S},null,8,["checked"])]),_:1})]),_:1})]),default:o(()=>[a(e(E),{key:"preview",tab:"Preview"})]),_:1},8,["active-key"]),e(u).hook&&r.value==="preview"?(c(),m(we,{key:0,ref_key:"tester",ref:x,"execution-config":p.value,"onUpdate:executionConfig":t[2]||(t[2]=n=>p.value=n),hook:e(u).hook,"log-service":e(l),"disabled-warning":U.value},null,8,["execution-config","hook","log-service","disabled-warning"])):b("",!0)]),_:1})):b("",!0)]),footer:o(()=>{var n,i,N;return[a(z,{ref_key:"smartConsole",ref:H,"stage-type":"hooks","log-service":e(l),stage:(n=e(u))==null?void 0:n.hook,workspace:(i=e(u))==null?void 0:i.workspace,onRestart:(N=x.value)==null?void 0:N.runHook},null,8,["log-service","stage","workspace","onRestart"])]}),_:1}))}});export{wt as default};
//# sourceMappingURL=HookEditor.75fd2b5b.js.map
