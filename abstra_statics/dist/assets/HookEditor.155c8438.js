import{d as N,H as W,G as V,r as w,I as K,b as d,c as m,w as o,f as a,u as e,ad as j,eu as T,eB as q,cC as E,bx as A,bE as I,aq as v,aC as B,cp as L,ew as y,e as F,eD as M,eI as J,eA as z,eK as X}from"./outputWidgets.1b294f5f.js";import{R as Y,S as Z,a as ee,L as te}from"./SourceCode.f2e6eb17.js";import{a as ae}from"./asyncComputed.a34a8d45.js";import{H as oe}from"./jobs.f0fc9861.js";import{W as re}from"./workspaces.d302eaf6.js";import"./envVars.279f6d9f.js";import{B as le}from"./BaseLayout.6b1043b9.js";import{_ as ne}from"./RunButton.vue_vue_type_script_setup_true_lang.59dc503d.js";import{A as _}from"./api.e01c2c15.js";import{T as se}from"./ThreadSelector.ab05cc6a.js";import{D as ue,A as ie}from"./index.99a319fd.js";import{A as g,F as G}from"./Form.123996ac.js";import{C as de,A as U}from"./CollapsePanel.f5e9243e.js";import{B as pe}from"./Badge.33d0cce4.js";import{A as Q}from"./Text.c9fbd748.js";import{A as me}from"./index.f3022e06.js";import{A as ce}from"./index.e0804fb0.js";import{N as fe}from"./NavbarControls.f9099f69.js";import{_ as ve}from"./SaveButton.vue_vue_type_script_setup_true_lang.d8a56cee.js";import{b as ge}from"./index.ae8ac085.js";import{A as D}from"./index.3227182d.js";import{A as $,T as O}from"./TabPane.ecb49f81.js";import{A as he}from"./index.48cdd99d.js";import"./uuid.d813fe2d.js";import"./PhCaretRight.vue.64aaf8d4.js";import"./login.d8ae4846.js";import"./scripts.f01c752c.js";import"./record.4fc1748f.js";import"./pubsub.20cc0948.js";import"./validations.1c055761.js";import"./string.c727f73d.js";import"./toggleHighContrast.a5551a88.js";import"./PhPencil.vue.ea8bb41c.js";import"./index.5833b906.js";import"./Card.9b324419.js";import"./index.34107aad.js";import"./runnerData.df09228d.js";import"./url.090af018.js";import"./index.cf4c23b9.js";import"./metadata.2ce5e701.js";import"./PhCheckCircle.vue.ced926ff.js";import"./PhScroll.vue.052f1497.js";import"./PhWebhooksLogo.vue.3750860e.js";import"./index.8334854b.js";import"./hasIn.f4746841.js";import"./isNumeric.75337b1e.js";import"./index.f1075c68.js";import"./fetch.d300a950.js";import"./popupNotifcation.2591f3d3.js";import"./PhArrowSquareOut.vue.35a9fe91.js";import"./Link.496a8851.js";import"./CloseCircleOutlined.e4c138d5.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.472d1d51.js";import"./BookOutlined.de4fb9b4.js";import"./Modal.a4e6d8e0.js";import"./UnsavedChangesHandler.9f45acb8.js";import"./ExclamationCircleOutlined.b32fdbf8.js";import"./index.f4c0e45f.js";(function(){try{var h=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},c=new Error().stack;c&&(h._sentryDebugIds=h._sentryDebugIds||{},h._sentryDebugIds[c]="5b7f645b-83c8-4fe8-a60a-fad925ccb2f8",h._sentryDebugIdIdentifier="sentry-dbid-5b7f645b-83c8-4fe8-a60a-fad925ccb2f8")}catch{}})();const ke={style:{display:"flex","flex-direction":"column",gap:"10px"}},ye={key:0},be=N({__name:"HookTester",props:{hook:{},logService:{},disabledWarning:{},executionConfig:{}},emits:["update:stage-run-id","update:execution-config"],setup(h,{expose:c,emit:k}){const u=h,b=[{label:"GET",value:"GET"},{label:"POST",value:"POST"},{label:"PUT",value:"PUT"},{label:"PATCH",value:"PATCH"}],C=W(()=>{var l;if((l=t.response)!=null&&l.status)return t.response.status>=500?"red":t.response.status>=400?"orange":t.response.status>=200?"green":"blue"}),t=V({shouldSelectStageRun:!u.hook.isInitial,stageRunId:u.executionConfig.stageRunId,queryParams:[],headers:[{key:"Content-Type",value:"application/json"}],method:"POST",body:JSON.stringify({foo:123,bar:"abc"},null,4)}),H=t.queryParams.find(l=>l.name===_);u.executionConfig.stageRunId&&!H&&t.queryParams.push({name:_,value:u.executionConfig.stageRunId});const x=w(!1),P=async()=>{x.value=!0;try{const l={method:t.method,query:t.queryParams.reduce((r,{name:s,value:p})=>(s&&p&&(r[s]=p),r),{}),body:t.body,headers:t.headers.reduce((r,{key:s,value:p})=>(s&&p&&(r[s]=p),r),{})},n=u.executionConfig.attached?await u.hook.run(l):await u.hook.test(l);t.response=n,n.stderr&&u.logService.log({type:"stderr",log:n.stderr}),n.stdout&&u.logService.log({type:"stdout",log:n.stdout})}finally{x.value=!1,k("update:execution-config",{attached:!1,stageRunId:null,pendingFork:!1,isInitial:u.hook.isInitial})}};K([()=>u.executionConfig.stageRunId,()=>t.queryParams],([l,n])=>{const r=n.find(s=>s.name===_);if(l&&!r){t.queryParams.push({name:_,value:l});return}if(!l&&r){t.queryParams=t.queryParams.filter(s=>s.name!==_);return}l&&r&&l!==r.value&&(r.value=l)});const R=()=>{t.queryParams.push({name:"",value:""})},i=l=>{t.queryParams=t.queryParams.filter((n,r)=>r!==l)},S=()=>{t.headers.push({key:"",value:""})},f=l=>{t.headers=t.headers.filter((n,r)=>r!==l)};return c({runHook:P}),(l,n)=>(d(),m(e(G),{layout:"vertical"},{default:o(()=>[a(e(g),{label:"Method"},{default:o(()=>[a(e(j),{value:t.method,options:b,onSelect:n[0]||(n[0]=r=>t.method=r)},null,8,["value"])]),_:1}),a(e(g),null,{default:o(()=>[a(e(de),{ghost:""},{default:o(()=>[a(e(U),{header:`Query Params (${t.queryParams.length})`},{default:o(()=>[(d(!0),T(B,null,q(t.queryParams,(r,s)=>(d(),m(e(g),{key:s},{default:o(()=>[a(e(E),null,{default:o(()=>[a(e(A),{value:r.name,"onUpdate:value":p=>r.name=p,type:"text",placeholder:"name"},null,8,["value","onUpdate:value"]),a(e(A),{value:r.value,"onUpdate:value":p=>r.value=p,type:"text",placeholder:"value",disabled:r.name===e(_)},null,8,["value","onUpdate:value","disabled"]),a(e(I),{danger:"",onClick:p=>i(s)},{default:o(()=>[v("remove")]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024))),128)),a(e(g),null,{default:o(()=>[a(e(I),{type:"dashed",style:{width:"100%"},onClick:R},{default:o(()=>[v(" Add Query Param ")]),_:1})]),_:1})]),_:1},8,["header"]),a(e(U),{header:`Headers (${t.headers.length})`},{default:o(()=>[(d(!0),T(B,null,q(t.headers,(r,s)=>(d(),m(e(g),{key:s,label:s===0?"Headers":void 0},{default:o(()=>[a(e(E),null,{default:o(()=>[a(e(A),{value:r.key,"onUpdate:value":p=>r.key=p,type:"text",placeholder:"name"},null,8,["value","onUpdate:value"]),a(e(A),{value:r.value,"onUpdate:value":p=>r.value=p,type:"text",placeholder:"value"},null,8,["value","onUpdate:value"]),a(e(I),{danger:"",onClick:p=>f(s)},{default:o(()=>[v("remove")]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1032,["label"]))),128)),a(e(g),null,{default:o(()=>[a(e(I),{type:"dashed",style:{width:"100%"},onClick:S},{default:o(()=>[v("Add Header")]),_:1})]),_:1})]),_:1},8,["header"]),a(e(U),{header:"Body"},{default:o(()=>[t.method!=="GET"?(d(),m(e(g),{key:0},{default:o(()=>[a(e(L),{value:t.body,"onUpdate:value":n[1]||(n[1]=r=>t.body=r)},null,8,["value"])]),_:1})):y("",!0)]),_:1}),a(e(U),null,{header:o(()=>[a(e(pe),{dot:l.executionConfig.attached&&!!(l.executionConfig.pendingFork||!l.executionConfig.stageRunId)},{default:o(()=>[a(e(Q),null,{default:o(()=>[v("Thread")]),_:1})]),_:1},8,["dot"])]),default:o(()=>[a(se,{stage:l.hook,"execution-config":u.executionConfig,"onUpdate:executionConfig":n[2]||(n[2]=r=>k("update:execution-config",r))},null,8,["stage","execution-config"])]),_:1})]),_:1})]),_:1}),a(e(g),null,{default:o(()=>[F("div",ke,[a(ne,{loading:x.value,disabled:l.disabledWarning,onClick:P,onSave:n[3]||(n[3]=r=>l.hook.save())},null,8,["loading","disabled"])])]),_:1}),a(e(me),{orientation:"left"},{default:o(()=>[v("Response")]),_:1}),t.response?(d(),T("div",ye,[a(e(ce),{color:C.value},{default:o(()=>[v(M(t.response.status),1)]),_:1},8,["color"]),a(e(ie),null,{default:o(()=>[(d(!0),T(B,null,q(t.response.headers,(r,s)=>(d(),m(e(ue),{key:s,label:s},{default:o(()=>[v(M(r),1)]),_:2},1032,["label"]))),128))]),_:1}),a(e(L),{value:t.response.body},null,8,["value"])])):y("",!0)]),_:1}))}}),_e=N({__name:"HookSettings",props:{hook:{}},setup(h){return(c,k)=>(d(),m(e(G),{layout:"vertical",style:{"padding-bottom":"50px"}},{default:o(()=>[a(e(g),{label:"Name",required:""},{default:o(()=>[a(e(A),{value:c.hook.title,"onUpdate:value":k[0]||(k[0]=u=>c.hook.title=u)},null,8,["value"])]),_:1}),a(Y,{runtime:c.hook},null,8,["runtime"])]),_:1}))}}),we={style:{width:"50%"}},Ce={style:{width:"50%"}},Tt=N({__name:"HookEditor",setup(h){const c=J(),k=z(),u=w(null),b=w("source-code"),C=w("preview"),t=w({attached:!1,stageRunId:null,pendingFork:!1,isInitial:!1}),H=f=>t.value={...t.value,attached:!!f},x=W(()=>{var f;return(f=i.value)!=null&&f.hook.hasChanges()?{title:"Unsaved changes",message:"Save the form before running the workflow"}:t.value.attached&&t.value.pendingFork?{title:"Past thread selected",message:"Fork the selected thread to run the workflow"}:!t.value.isInitial&&t.value.attached&&!t.value.stageRunId?{title:"No thread selected",message:"Select a thread to run the workflow"}:null});function P(){c.push({name:"stages"})}const R=w(null),{result:i}=ae(async()=>{const[f,l]=await Promise.all([re.get(),oe.get(k.params.id)]);return t.value.isInitial=l.isInitial,X({workspace:f,hook:l})}),S=te.create();return(f,l)=>(d(),m(le,{"no-margins":""},{navbar:o(()=>[e(i)?(d(),m(e(ge),{key:0,title:e(i).hook.title,style:{padding:"5px 25px","margin-bottom":"15px"},onBack:P},{extra:o(()=>[a(fe,{"docs-path":"hooks","editing-model":e(i).hook,"show-save-button":!1},null,8,["editing-model"])]),_:1},8,["title"])):y("",!0)]),content:o(()=>[e(i)?(d(),m(e(D),{key:0,gap:"40",style:{width:"calc(100% - 80px)"}},{default:o(()=>[F("div",we,[a(e(O),{"active-key":b.value,"onUpdate:activeKey":l[0]||(l[0]=n=>b.value=n)},{rightExtra:o(()=>[a(ve,{model:e(i).hook},null,8,["model"])]),default:o(()=>[a(e($),{key:"source-code",tab:"Source code"}),a(e($),{key:"settings",tab:"Settings"})]),_:1},8,["active-key"]),b.value==="source-code"?(d(),m(Z,{key:0,script:e(i).hook,workspace:e(i).workspace},null,8,["script","workspace"])):y("",!0),e(i).hook&&b.value==="settings"?(d(),m(_e,{key:1,hook:e(i).hook},null,8,["hook"])):y("",!0)]),F("div",Ce,[a(e(O),{"active-key":C.value,"onUpdate:activeKey":l[1]||(l[1]=n=>C.value=n)},{rightExtra:o(()=>[a(e(D),{align:"center",gap:"middle"},{default:o(()=>[a(e(D),{gap:"small"},{default:o(()=>[a(e(Q),null,{default:o(()=>[v("Continue workflow")]),_:1}),a(e(he),{checked:t.value.attached,"onUpdate:checked":H},null,8,["checked"])]),_:1})]),_:1})]),default:o(()=>[a(e($),{key:"preview",tab:"Preview"})]),_:1},8,["active-key"]),e(i).hook&&C.value==="preview"?(d(),m(be,{key:0,ref_key:"tester",ref:u,"execution-config":t.value,"onUpdate:executionConfig":l[2]||(l[2]=n=>t.value=n),hook:e(i).hook,"log-service":e(S),"disabled-warning":x.value},null,8,["execution-config","hook","log-service","disabled-warning"])):y("",!0)])]),_:1})):y("",!0)]),footer:o(()=>{var n,r,s;return[a(ee,{ref_key:"smartConsole",ref:R,runtime:"forms","log-service":e(S),stage:(n=e(i))==null?void 0:n.hook,workspace:(r=e(i))==null?void 0:r.workspace,onRestart:(s=u.value)==null?void 0:s.runHook},null,8,["log-service","stage","workspace","onRestart"])]}),_:1}))}});export{Tt as default};
//# sourceMappingURL=HookEditor.155c8438.js.map
