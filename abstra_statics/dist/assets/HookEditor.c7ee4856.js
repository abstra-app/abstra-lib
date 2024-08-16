import{B as V}from"./BaseLayout.dbb58bef.js";import{R as G,S as J,E as j,a as K,L as Z}from"./SourceCode.38d67ee1.js";import{S as z}from"./SaveButton.028f0b84.js";import{a as X}from"./asyncComputed.d365a226.js";import{d as F,o as d,c as f,w as o,b as a,u as e,bD as w,cs as v,cr as O,f as M,D as Y,e as y,g as ee,as as te,W as P,e9 as H,bL as S,ax as k,aJ as B,cx as N,R as b,d4 as Q,a as ae,e6 as E,cZ as oe,ek as re,e7 as le,ed as ne,y as se,d9 as L,cP as ue}from"./vue-router.717c9672.js";import{H as ie}from"./jobs.e19790ff.js";import"./linters.3aaeca3c.js";import{W as de}from"./workspaces.64d502c0.js";import{_ as pe}from"./RunButton.vue_vue_type_script_setup_true_lang.e387bf32.js";import{A as C}from"./api.5da5ff80.js";import{T as ce}from"./ThreadSelector.60999faf.js";import{D as fe,A as me}from"./index.8a0884f1.js";import{C as ve,A}from"./CollapsePanel.4e9b1227.js";import{A as W}from"./index.7cb56e87.js";import{B as ke}from"./Badge.f8ec09a6.js";import{A as ge}from"./index.10f425f9.js";import{N as he}from"./NavbarControls.9d0481a9.js";import{b as ye}from"./index.ab70b27c.js";import{A as D,T as $}from"./TabPane.67eb7913.js";import"./uuid.93cb814e.js";import"./scripts.f4842430.js";import"./record.18236b7c.js";import"./validations.46a93afc.js";import"./string.570c2d93.js";import"./editor.2e8da464.js";import"./workspaceStore.92f0d764.js";import"./url.e88fe7d5.js";import"./PhCopy.vue.3a56a463.js";import"./PhCheckCircle.vue.9f1a6abc.js";import"./PhCopySimple.vue.8b1e2be4.js";import"./PhCaretRight.vue.c0025b4e.js";import"./PhBug.vue.ae4b6dff.js";import"./PhQuestion.vue.45127019.js";import"./LoadingOutlined.2ca13f29.js";import"./PhPencil.vue.c0dffe79.js";import"./toggleHighContrast.4a531fbd.js";import"./index.bee51fc7.js";import"./Card.499b2bc2.js";import"./PhFloppyDisk.vue.cf114e9a.js";import"./ExclamationCircleOutlined.82b04103.js";import"./fetch.aac5c8bf.js";import"./metadata.1c9a5cf9.js";import"./PhKanban.vue.2154c598.js";import"./PhWebhooksLogo.vue.dfc2e56a.js";import"./index.32ba1c6c.js";import"./isNumeric.75337b1e.js";import"./CloseCircleOutlined.4af5b0a4.js";import"./popupNotifcation.309b8b62.js";import"./PhArrowSquareOut.vue.a5c0d548.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.86aa6f45.js";import"./BookOutlined.abfccf79.js";import"./PhChats.vue.9fec7b9d.js";import"./index.687b2b23.js";import"./Avatar.64e81e93.js";(function(){try{var g=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},m=new Error().stack;m&&(g._sentryDebugIds=g._sentryDebugIds||{},g._sentryDebugIds[m]="3d213746-3fd1-459a-845f-ad5e1f3fc64e",g._sentryDebugIdIdentifier="sentry-dbid-3d213746-3fd1-459a-845f-ad5e1f3fc64e")}catch{}})();const be=F({__name:"HookSettings",props:{hook:{}},setup(g){return(m,h)=>(d(),f(e(O),{layout:"vertical",style:{"padding-bottom":"50px"}},{default:o(()=>[a(e(v),{label:"Name",required:""},{default:o(()=>[a(e(w),{value:m.hook.title,"onUpdate:value":h[0]||(h[0]=p=>m.hook.title=p)},null,8,["value"])]),_:1}),a(G,{runtime:m.hook},null,8,["runtime"])]),_:1}))}}),_e={style:{display:"flex","flex-direction":"column",gap:"10px"}},Ce={key:0},we=F({__name:"HookTester",props:{hook:{},disabledWarning:{},executionConfig:{}},emits:["update:stage-run-id","update:execution-config"],setup(g,{expose:m,emit:h}){const p=g,T=[{label:"GET",value:"GET"},{label:"POST",value:"POST"},{label:"PUT",value:"PUT"},{label:"PATCH",value:"PATCH"}],_=M(()=>{var l;if((l=r.response)!=null&&l.status)return r.response.status>=500?"red":r.response.status>=400?"orange":r.response.status>=200?"green":"blue"}),r=Y({shouldSelectStageRun:!p.hook.isInitial,stageRunId:p.executionConfig.stageRunId,queryParams:[],headers:[{key:"Content-Type",value:"application/json"}],method:"POST",body:JSON.stringify({foo:123,bar:"abc"},null,4)}),I=r.queryParams.find(l=>l.name===C);p.executionConfig.stageRunId&&!I&&r.queryParams.push({name:C,value:p.executionConfig.stageRunId});const i=y(!1),x=async()=>{i.value=!0;try{const l={method:r.method,query:r.queryParams.reduce((t,{name:n,value:c})=>(n&&c&&(t[n]=c),t),{}),body:r.body,headers:r.headers.reduce((t,{key:n,value:c})=>(n&&c&&(t[n]=c),t),{})},s=p.executionConfig.attached?await p.hook.run(l):await p.hook.test(l);r.response=s}finally{i.value=!1,h("update:execution-config",{attached:!1,stageRunId:null,pendingFork:!1,isInitial:p.hook.isInitial})}};ee([()=>p.executionConfig.stageRunId,()=>r.queryParams],([l,s])=>{const t=s.find(n=>n.name===C);if(l&&!t){r.queryParams.push({name:C,value:l});return}if(!l&&t){r.queryParams=r.queryParams.filter(n=>n.name!==C);return}l&&t&&l!==t.value&&(t.value=l)});const U=()=>{r.queryParams.push({name:"",value:""})},R=l=>{r.queryParams=r.queryParams.filter((s,t)=>t!==l)},q=()=>{r.headers.push({key:"",value:""})},u=l=>{r.headers=r.headers.filter((s,t)=>t!==l)};return m({runHook:x}),(l,s)=>(d(),f(e(O),{layout:"vertical",style:{overflow:"auto"}},{default:o(()=>[a(e(v),{label:"Method"},{default:o(()=>[a(e(te),{value:r.method,options:T,onSelect:s[0]||(s[0]=t=>r.method=t)},null,8,["value"])]),_:1}),a(e(v),null,{default:o(()=>[a(e(ve),{ghost:""},{default:o(()=>[a(e(A),{header:`Query Params (${r.queryParams.length})`},{default:o(()=>[(d(!0),P(B,null,H(r.queryParams,(t,n)=>(d(),f(e(v),{key:n},{default:o(()=>[a(e(W),null,{default:o(()=>[a(e(w),{value:t.name,"onUpdate:value":c=>t.name=c,type:"text",placeholder:"name"},null,8,["value","onUpdate:value"]),a(e(w),{value:t.value,"onUpdate:value":c=>t.value=c,type:"text",placeholder:"value",disabled:t.name===e(C)},null,8,["value","onUpdate:value","disabled"]),a(e(S),{danger:"",onClick:c=>R(n)},{default:o(()=>[k("remove")]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024))),128)),a(e(v),null,{default:o(()=>[a(e(S),{type:"dashed",style:{width:"100%"},onClick:U},{default:o(()=>[k(" Add Query Param ")]),_:1})]),_:1})]),_:1},8,["header"]),a(e(A),{header:`Headers (${r.headers.length})`},{default:o(()=>[(d(!0),P(B,null,H(r.headers,(t,n)=>(d(),f(e(v),{key:n,label:n===0?"Headers":void 0},{default:o(()=>[a(e(W),null,{default:o(()=>[a(e(w),{value:t.key,"onUpdate:value":c=>t.key=c,type:"text",placeholder:"name"},null,8,["value","onUpdate:value"]),a(e(w),{value:t.value,"onUpdate:value":c=>t.value=c,type:"text",placeholder:"value"},null,8,["value","onUpdate:value"]),a(e(S),{danger:"",onClick:c=>u(n)},{default:o(()=>[k("remove")]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1032,["label"]))),128)),a(e(v),null,{default:o(()=>[a(e(S),{type:"dashed",style:{width:"100%"},onClick:q},{default:o(()=>[k("Add Header")]),_:1})]),_:1})]),_:1},8,["header"]),a(e(A),{header:"Body"},{default:o(()=>[r.method!=="GET"?(d(),f(e(v),{key:0},{default:o(()=>[a(e(N),{value:r.body,"onUpdate:value":s[1]||(s[1]=t=>r.body=t)},null,8,["value"])]),_:1})):b("",!0)]),_:1}),a(e(A),null,{header:o(()=>[a(e(ke),{dot:l.executionConfig.attached&&!!(l.executionConfig.pendingFork||!l.executionConfig.stageRunId)},{default:o(()=>[a(e(Q),null,{default:o(()=>[k("Thread")]),_:1})]),_:1},8,["dot"])]),default:o(()=>[a(ce,{stage:l.hook,"execution-config":p.executionConfig,"onUpdate:executionConfig":s[2]||(s[2]=t=>h("update:execution-config",t))},null,8,["stage","execution-config"])]),_:1})]),_:1})]),_:1}),a(e(v),null,{default:o(()=>[ae("div",_e,[a(pe,{loading:i.value,disabled:l.disabledWarning,onClick:x,onSave:s[3]||(s[3]=t=>l.hook.save())},null,8,["loading","disabled"])])]),_:1}),a(e(ge),{orientation:"left"},{default:o(()=>[k("Response")]),_:1}),r.response?(d(),P("div",Ce,[a(e(oe),{color:_.value},{default:o(()=>[k(E(r.response.status),1)]),_:1},8,["color"]),a(e(me),null,{default:o(()=>[(d(!0),P(B,null,H(r.response.headers,(t,n)=>(d(),f(e(fe),{key:n,label:n},{default:o(()=>[k(E(t),1)]),_:2},1032,["label"]))),128))]),_:1}),a(e(N),{value:r.response.body},null,8,["value"])])):b("",!0)]),_:1}))}}),xt=F({__name:"HookEditor",setup(g){const m=re(),h=le(),p=y(null),T=y(null),_=y("source-code"),r=y("preview");function I(){var t;if(!u.value)return;const s=u.value.hook.codeContent;(t=p.value)==null||t.updateLocalEditorCode(s)}const i=y({attached:!1,stageRunId:null,pendingFork:!1,isInitial:!1}),x=s=>i.value={...i.value,attached:!!s},U=M(()=>{var s;return(s=u.value)!=null&&s.hook.hasChanges()?{title:"Unsaved changes",message:"Save the form before running the workflow"}:i.value.attached&&i.value.pendingFork?{title:"Past thread selected",message:"Fork the selected thread to run the workflow"}:!i.value.isInitial&&i.value.attached&&!i.value.stageRunId?{title:"No thread selected",message:"Select a thread to run the workflow"}:null});function R(){m.push({name:"stages"})}const q=y(null),{result:u}=X(async()=>{const[s,t]=await Promise.all([de.get(),ie.get(h.params.id)]);return i.value.isInitial=t.isInitial,se({workspace:s,hook:t})}),l=Z.create();return(s,t)=>(d(),f(V,null,ne({navbar:o(()=>[e(u)?(d(),f(e(ye),{key:0,title:e(u).hook.title,style:{padding:"5px 25px",border:"1px solid #f6f6f6"},onBack:R},{extra:o(()=>[a(he,{"docs-path":"concepts/hooks","editing-model":e(u).hook},null,8,["editing-model"])]),_:1},8,["title"])):b("",!0)]),content:o(()=>[e(u)?(d(),f(j,{key:0},{left:o(()=>[a(e($),{"active-key":_.value,"onUpdate:activeKey":t[0]||(t[0]=n=>_.value=n)},{rightExtra:o(()=>[a(z,{model:e(u).hook,onSave:I},null,8,["model"])]),default:o(()=>[a(e(D),{key:"source-code",tab:"Source code"}),a(e(D),{key:"settings",tab:"Settings"})]),_:1},8,["active-key"]),_.value==="source-code"?(d(),f(K,{key:0,ref_key:"code",ref:p,script:e(u).hook,workspace:e(u).workspace},null,8,["script","workspace"])):b("",!0),e(u).hook&&_.value==="settings"?(d(),f(be,{key:1,hook:e(u).hook},null,8,["hook"])):b("",!0)]),right:o(()=>[a(e($),{"active-key":r.value,"onUpdate:activeKey":t[1]||(t[1]=n=>r.value=n)},{rightExtra:o(()=>[a(e(L),{align:"center",gap:"middle"},{default:o(()=>[a(e(L),{gap:"small"},{default:o(()=>[a(e(Q),null,{default:o(()=>[k(E(i.value.attached?"Workflow ON":"Workflow OFF"),1)]),_:1}),a(e(ue),{checked:i.value.attached,"onUpdate:checked":x},null,8,["checked"])]),_:1})]),_:1})]),default:o(()=>[a(e(D),{key:"preview",tab:"Preview"})]),_:1},8,["active-key"]),e(u).hook&&r.value==="preview"?(d(),f(we,{key:0,ref_key:"tester",ref:T,"execution-config":i.value,"onUpdate:executionConfig":t[2]||(t[2]=n=>i.value=n),hook:e(u).hook,"disabled-warning":U.value},null,8,["execution-config","hook","disabled-warning"])):b("",!0)]),_:1})):b("",!0)]),_:2},[e(u)?{name:"footer",fn:o(()=>[a(J,{ref_key:"smartConsole",ref:q,"stage-type":"hooks",stage:e(u).hook,"log-service":e(l),workspace:e(u).workspace},null,8,["stage","log-service","workspace"])]),key:"0"}:void 0]),1024))}});export{xt as default};
//# sourceMappingURL=HookEditor.c7ee4856.js.map
