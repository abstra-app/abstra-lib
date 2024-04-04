import{d as F,H as W,G as V,r as w,I as j,b as d,c as m,w as a,f as t,u as e,ad as J,eu as T,eB as q,cA as E,bx as A,bE as U,aq as v,aC as B,cn as L,ew as y,e as $,eD as M,eI as K,eA as z,eL as X}from"./outputWidgets.c44827f7.js";import{R as Y,S as Z,a as ee,L as te}from"./SourceCode.baeffdf5.js";import{a as oe}from"./asyncComputed.996e6279.js";import{H as ae}from"./scripts.ea6ca710.js";import{W as re}from"./workspaces.8c49b16c.js";import"./envVars.ccbcfbd6.js";import{B as ne}from"./BaseLayout.4dd25d3a.js";import{_ as le}from"./RunButton.vue_vue_type_script_setup_true_lang.c1341f70.js";import{A as _}from"./api.541a5d26.js";import{T as se}from"./ThreadSelector.3fa49830.js";import{D as ue,A as ie}from"./index.913080a4.js";import{A as g,F as G}from"./Form.4c73d002.js";import{C as de,A as I}from"./CollapsePanel.8bce9f09.js";import{B as pe}from"./Badge.3a7d1c94.js";import{A as Q}from"./Text.8836cbe6.js";import{A as me}from"./index.53517647.js";import{A as ce}from"./index.56751fbe.js";import{N as fe}from"./NavbarControls.5a5ede81.js";import{_ as ve}from"./SaveButton.vue_vue_type_script_setup_true_lang.35a80974.js";import{b as ge}from"./index.b65aac39.js";import{A as D}from"./index.23f11819.js";import{A as N,T as O}from"./TabPane.f9dd073e.js";import{A as he}from"./index.c92acf1f.js";import"./uuid.dae279bc.js";import"./PhCaretRight.vue.1c05f9d5.js";import"./login.d01a1e03.js";import"./validations.5deb2380.js";import"./string.b07ea3cd.js";import"./toggleHighContrast.0ec8f346.js";import"./PhPencil.vue.239fee09.js";import"./index.01043d5a.js";import"./Card.f937e5af.js";import"./index.9caeac3c.js";import"./record.bdb649c9.js";import"./pubsub.7d1f2927.js";import"./runnerData.cf2934df.js";import"./url.e2af8c0e.js";import"./index.cf4c23b9.js";import"./metadata.22a67151.js";import"./PhCheckCircle.vue.1b7adbe7.js";import"./PhScroll.vue.84001885.js";import"./PhWebhooksLogo.vue.420eb8fc.js";import"./index.68a499a2.js";import"./hasIn.885ab5c3.js";import"./isNumeric.75337b1e.js";import"./index.d0fa904e.js";import"./fetch.d787318c.js";import"./popupNotifcation.a9f3e0f1.js";import"./PhArrowSquareOut.vue.1c6838e9.js";import"./Link.cd09bc70.js";import"./CloseCircleOutlined.02d04eca.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.441f9a8b.js";import"./BookOutlined.b31fbbf2.js";import"./Modal.4c526eed.js";import"./ant-design.70ed8419.js";import"./index.df1b7a2a.js";import"./index.875b5c99.js";(function(){try{var h=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},c=new Error().stack;c&&(h._sentryDebugIds=h._sentryDebugIds||{},h._sentryDebugIds[c]="9ecceb94-4139-4408-93dd-1e40b60d67fe",h._sentryDebugIdIdentifier="sentry-dbid-9ecceb94-4139-4408-93dd-1e40b60d67fe")}catch{}})();const ke={style:{display:"flex","flex-direction":"column",gap:"10px"}},ye={key:0},be=F({__name:"HookTester",props:{hook:{},logService:{},disabledWarning:{},executionConfig:{}},emits:["update:stage-run-id","update:execution-config"],setup(h,{expose:c,emit:k}){const u=h,b=[{label:"GET",value:"GET"},{label:"POST",value:"POST"},{label:"PUT",value:"PUT"},{label:"PATCH",value:"PATCH"}],C=W(()=>{var n;if((n=o.response)!=null&&n.status)return o.response.status>=500?"red":o.response.status>=400?"orange":o.response.status>=200?"green":"blue"}),o=V({shouldSelectStageRun:!u.hook.isInitial,stageRunId:u.executionConfig.stageRunId,queryParams:[],headers:[{key:"Content-Type",value:"application/json"}],method:"POST",body:JSON.stringify({foo:123,bar:"abc"},null,4)}),R=o.queryParams.find(n=>n.name===_);u.executionConfig.stageRunId&&!R&&o.queryParams.push({name:_,value:u.executionConfig.stageRunId});const x=w(!1),S=async()=>{x.value=!0;try{const n={method:o.method,query:o.queryParams.reduce((r,{name:s,value:p})=>(s&&p&&(r[s]=p),r),{}),body:o.body,headers:o.headers.reduce((r,{key:s,value:p})=>(s&&p&&(r[s]=p),r),{})},l=u.executionConfig.attached&&u.executionConfig.stageRunId?await u.hook.run(n):await u.hook.test(n);o.response=l,l.stderr&&u.logService.log({type:"stderr",log:l.stderr}),l.stdout&&u.logService.log({type:"stdout",log:l.stdout})}finally{x.value=!1,k("update:execution-config",{attached:!1,stageRunId:null,pendingFork:!1})}};j([()=>u.executionConfig.stageRunId,()=>o.queryParams],([n,l])=>{const r=l.find(s=>s.name===_);if(n&&!r){o.queryParams.push({name:_,value:n});return}if(!n&&r){o.queryParams=o.queryParams.filter(s=>s.name!==_);return}n&&r&&n!==r.value&&(r.value=n)});const H=()=>{o.queryParams.push({name:"",value:""})},i=n=>{o.queryParams=o.queryParams.filter((l,r)=>r!==n)},P=()=>{o.headers.push({key:"",value:""})},f=n=>{o.headers=o.headers.filter((l,r)=>r!==n)};return c({runHook:S}),(n,l)=>(d(),m(e(G),{layout:"vertical"},{default:a(()=>[t(e(g),{label:"Method"},{default:a(()=>[t(e(J),{value:o.method,options:b,onSelect:l[0]||(l[0]=r=>o.method=r)},null,8,["value"])]),_:1}),t(e(g),null,{default:a(()=>[t(e(de),{ghost:""},{default:a(()=>[t(e(I),{header:`Query Params (${o.queryParams.length})`},{default:a(()=>[(d(!0),T(B,null,q(o.queryParams,(r,s)=>(d(),m(e(g),{key:s},{default:a(()=>[t(e(E),null,{default:a(()=>[t(e(A),{value:r.name,"onUpdate:value":p=>r.name=p,type:"text",placeholder:"name"},null,8,["value","onUpdate:value"]),t(e(A),{value:r.value,"onUpdate:value":p=>r.value=p,type:"text",placeholder:"value",disabled:r.name===e(_)},null,8,["value","onUpdate:value","disabled"]),t(e(U),{danger:"",onClick:p=>i(s)},{default:a(()=>[v("remove")]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024))),128)),t(e(g),null,{default:a(()=>[t(e(U),{type:"dashed",style:{width:"100%"},onClick:H},{default:a(()=>[v(" Add Query Param ")]),_:1})]),_:1})]),_:1},8,["header"]),t(e(I),{header:`Headers (${o.headers.length})`},{default:a(()=>[(d(!0),T(B,null,q(o.headers,(r,s)=>(d(),m(e(g),{key:s,label:s===0?"Headers":void 0},{default:a(()=>[t(e(E),null,{default:a(()=>[t(e(A),{value:r.key,"onUpdate:value":p=>r.key=p,type:"text",placeholder:"name"},null,8,["value","onUpdate:value"]),t(e(A),{value:r.value,"onUpdate:value":p=>r.value=p,type:"text",placeholder:"value"},null,8,["value","onUpdate:value"]),t(e(U),{danger:"",onClick:p=>f(s)},{default:a(()=>[v("remove")]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1032,["label"]))),128)),t(e(g),null,{default:a(()=>[t(e(U),{type:"dashed",style:{width:"100%"},onClick:P},{default:a(()=>[v("Add Header")]),_:1})]),_:1})]),_:1},8,["header"]),t(e(I),{header:"Body"},{default:a(()=>[o.method!=="GET"?(d(),m(e(g),{key:0},{default:a(()=>[t(e(L),{value:o.body,"onUpdate:value":l[1]||(l[1]=r=>o.body=r)},null,8,["value"])]),_:1})):y("",!0)]),_:1}),t(e(I),null,{header:a(()=>[t(e(pe),{dot:n.executionConfig.attached&&!!(n.executionConfig.pendingFork||!n.executionConfig.stageRunId)},{default:a(()=>[t(e(Q),null,{default:a(()=>[v("Thread")]),_:1})]),_:1},8,["dot"])]),default:a(()=>[t(se,{stage:n.hook,"execution-config":u.executionConfig,"onUpdate:executionConfig":l[2]||(l[2]=r=>k("update:execution-config",r))},null,8,["stage","execution-config"])]),_:1})]),_:1})]),_:1}),t(e(g),null,{default:a(()=>[$("div",ke,[t(le,{loading:x.value,disabled:n.disabledWarning,onClick:S,onSave:l[3]||(l[3]=r=>n.hook.save())},null,8,["loading","disabled"])])]),_:1}),t(e(me),{orientation:"left"},{default:a(()=>[v("Response")]),_:1}),o.response?(d(),T("div",ye,[t(e(ce),{color:C.value},{default:a(()=>[v(M(o.response.status),1)]),_:1},8,["color"]),t(e(ie),null,{default:a(()=>[(d(!0),T(B,null,q(o.response.headers,(r,s)=>(d(),m(e(ue),{key:s,label:s},{default:a(()=>[v(M(r),1)]),_:2},1032,["label"]))),128))]),_:1}),t(e(L),{value:o.response.body},null,8,["value"])])):y("",!0)]),_:1}))}}),_e=F({__name:"HookSettings",props:{hook:{}},setup(h){return(c,k)=>(d(),m(e(G),{layout:"vertical",style:{"padding-bottom":"50px"}},{default:a(()=>[t(e(g),{label:"Name",required:""},{default:a(()=>[t(e(A),{value:c.hook.title,"onUpdate:value":k[0]||(k[0]=u=>c.hook.title=u)},null,8,["value"])]),_:1}),t(Y,{runtime:c.hook},null,8,["runtime"])]),_:1}))}}),we={style:{width:"50%"}},Ce={style:{width:"50%"}},Pt=F({__name:"HookEditor",setup(h){const c=K(),k=z(),u=w(null),b=w("source-code"),C=w("preview"),o=w({attached:!1,stageRunId:null,pendingFork:!1}),R=f=>o.value={...o.value,attached:!!f},x=W(()=>{var f;return(f=i.value)!=null&&f.hook.hasChanges()?{title:"Unsaved changes",message:"Save the form before running the workflow"}:o.value.attached&&o.value.pendingFork?{title:"No thread selected",message:"Fork the selected thread to run the workflow"}:o.value.attached&&!o.value.stageRunId?{title:"No thread selected",message:"Select a thread to run the workflow"}:null});function S(){c.push({name:"stages"})}const H=w(null),{result:i}=oe(async()=>{const[f,n]=await Promise.all([re.get(),ae.get(k.params.id)]);return X({workspace:f,hook:n})}),P=te.create();return(f,n)=>(d(),m(ne,{"no-margins":""},{navbar:a(()=>[e(i)?(d(),m(e(ge),{key:0,title:e(i).hook.title,style:{padding:"5px 25px","margin-bottom":"15px"},onBack:S},{extra:a(()=>[t(fe,{"docs-path":"hooks","editing-model":e(i).hook,"show-save-button":!1},null,8,["editing-model"])]),_:1},8,["title"])):y("",!0)]),content:a(()=>[e(i)?(d(),m(e(D),{key:0,gap:"40",style:{width:"calc(100% - 80px)"}},{default:a(()=>[$("div",we,[t(e(O),{"active-key":b.value,"onUpdate:activeKey":n[0]||(n[0]=l=>b.value=l)},{rightExtra:a(()=>[t(ve,{model:e(i).hook},null,8,["model"])]),default:a(()=>[t(e(N),{key:"source-code",tab:"Source code"}),t(e(N),{key:"settings",tab:"Settings"})]),_:1},8,["active-key"]),b.value==="source-code"?(d(),m(Z,{key:0,script:e(i).hook,workspace:e(i).workspace},null,8,["script","workspace"])):y("",!0),e(i).hook&&b.value==="settings"?(d(),m(_e,{key:1,hook:e(i).hook},null,8,["hook"])):y("",!0)]),$("div",Ce,[t(e(O),{"active-key":C.value,"onUpdate:activeKey":n[1]||(n[1]=l=>C.value=l)},{rightExtra:a(()=>[t(e(D),{align:"center",gap:"middle"},{default:a(()=>[t(e(D),{gap:"small"},{default:a(()=>[t(e(Q),null,{default:a(()=>[v("Continue workflow")]),_:1}),t(e(he),{checked:o.value.attached,"onUpdate:checked":R},null,8,["checked"])]),_:1})]),_:1})]),default:a(()=>[t(e(N),{key:"preview",tab:"Preview"})]),_:1},8,["active-key"]),e(i).hook&&C.value==="preview"?(d(),m(be,{key:0,ref_key:"tester",ref:u,"execution-config":o.value,"onUpdate:executionConfig":n[2]||(n[2]=l=>o.value=l),hook:e(i).hook,"log-service":e(P),"disabled-warning":x.value},null,8,["execution-config","hook","log-service","disabled-warning"])):y("",!0)])]),_:1})):y("",!0)]),footer:a(()=>{var l,r,s;return[t(ee,{ref_key:"smartConsole",ref:H,runtime:"forms","log-service":e(P),stage:(l=e(i))==null?void 0:l.hook,workspace:(r=e(i))==null?void 0:r.workspace,onRestart:(s=u.value)==null?void 0:s.runHook},null,8,["log-service","stage","workspace","onRestart"])]}),_:1}))}});export{Pt as default};
//# sourceMappingURL=HookEditor.35ced00e.js.map
